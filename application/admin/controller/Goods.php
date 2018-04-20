<?php
namespace app\admin\controller;
use think\Controller;
use catetree\Catetree;

class Goods extends Controller
{
    public function lst()
    {
        $join = [
            ['category c','g.category_id=c.id','LEFT'],
            ['brand b','g.brand_id=b.id','LEFT'],
            ['type t','g.type_id=t.id','LEFT'],
            ['product p','g.id=p.goods_id','LEFT'],
        ];
        $dbLst = db('goods')->field('g.*,c.cate_name,b.brand_name,t.type_name,SUM(p.goods_num) gn')->alias('g')->join($join)->group('g.id')->order('g.id DESC')->paginate(5);
        $this->assign([
            'dbLst' => $dbLst,
        ]);
        return $this->fetch('list');
    }
    public function add()
    {
        if(request()->isPost()){
            $data = input('post.');
            //验证器
            // $validate = validate('goods');
            // if(!$validate->check($data)){
            //     $this->error($validate->getError());
            // }
            $dbAdd = model('goods')->save($data);
            if($dbAdd){
                $this->success('添加商品成功！','goods/lst');
            }else{
                $this->error('添加商品失败！');
            }  
        }
        //获取会员级别数据
        $mlRes = db('member_level')->field('id,level_name')->select();
        //获取商品类型数据
        $typeRes = db('type')->select();
        //品牌分类
        $brandRes = db('brand')->field('id,brand_name')->select();
        //商品分类
        $catetree = new Catetree();
        $category = db('category');
        $dbCateRes = $category->order('sort asc')->select();
        $dbCateRes = $catetree->catetree($dbCateRes);

        $this->assign([
            'mlRes' => $mlRes,
            'typeRes' => $typeRes,
            'brandRes' => $brandRes,
            'dbCateRes' => $dbCateRes,
        ]);
        return $this->fetch();
    }

    public function edit($id)
    {
        if(request()->isPost()){
            $data = input('post.');
            //验证器
            // $validate = validate('goods');
            // if(!$validate->check($data)){
            //     $this->error($validate->getError());
            // }
            $dbEdit = model('goods')->update($data);
            if($dbEdit){
                $this->success('修改商品成功！','goods/lst');
            }else{
                $this->error('修改商品失败！');
            }  
        }
        //获取会员级别数据
        $mlRes = db('member_level')->field('id,level_name')->select();
        //获取商品类型数据
        $typeRes = db('type')->select();
        //获取会员价格数据
        $_mpRes = db('member_price')->where(array('goods_id'=>input('id')))->select();
        $mpRes=array();
        foreach ($_mpRes as $k => $v) {
        	$mpRes[$v['mlevel_id']]=$v;
        }
        //获取相册数据
        $photoRes = db('goods_photo')->where(array('goods_id'=>input('id')))->select();
        //品牌分类
        $brandRes = db('brand')->field('id,brand_name')->select();
        //商品分类
        $catetree = new Catetree();
        $category = db('category');
        $dbCateRes = $category->order('sort asc')->select();
        $dbCateRes = $catetree->catetree($dbCateRes);
        //商品数据
        $goods = db('goods')->where(array('id'=>input('id')))->select();
        //获取商品属性信息
        $goodsss=db('goods')->where(array('id'=>input('id')))->find();
        $attrRes = db('attr')->where(array('type_id'=>$goodsss['type_id']))->select();
        $_gattrRes = db('goods_attr')->where(array('goods_id'=>input('id')))->select();
        $gattrRes=array();
        foreach ($_gattrRes as $k0 => $v0) {
        	$gattrRes[$v0['attr_id']][]=$v0;
        }
        
        $this->assign([
            'mlRes' => $mlRes,
            'typeRes' => $typeRes,
            'brandRes' => $brandRes,
            'dbCateRes' => $dbCateRes,
            'goods' => $goods,
            'mpRes' => $mpRes,
            'photoRes' => $photoRes,
            'attrRes' => $attrRes,
            'gattrRes' => $gattrRes,
        ]);
        return $this->fetch();
    }

    public function del($id)
    {
        $dbDel = model('goods')->destroy($id);
        if($dbDel){
                $this->success('删除商品成功！','goods/lst');
            }else{
                $this->error('删除商品失败！');
                die();
            }
    }

    public function goodsnum($id){
        if(request()->isPost()){
            $data = input('post.');
            $product=db('product');
            $product->where(array('goods_id'=>$id))->delete();
            $goodsAttr=$data['goods_attr'];
            $goodsNum=$data['goods_num'];
            foreach ($goodsNum as $k => $v) {
                $strArr=array();
                foreach ($goodsAttr as $k1 => $v1) {
                	if(intval($v1[$k])<=0){
                		continue 2;
                	}
                    $strArr[]=$v1[$k];
                }
                sort($strArr);
                $strArr = implode(',', $strArr);
                $product->insert([
                    'goods_id'=>$id,
                    'goods_num'=>$v,
                    'goods_attr'=>$strArr
                ]);
            }
            $this->success('添加库存成功！','goods/lst');
        }
        $_radioAttr = db('goods_attr')->field('g.id,g.attr_id,g.attr_value,a.attr_name')->alias('g')->join('attr a','g.attr_id=a.id')->where(array('g.goods_id'=>$id,'a.attr_type'=>1))->select();
        $radioAttr=array();
        foreach ($_radioAttr as $k => $v) {
            $radioAttr[$v['attr_name']][]=$v;
        }
        
        $goodsProRes = db('product')->where(array('goods_id'=>$id))->select();
        $this->assign([
            'radioAttr' => $radioAttr,
            'goodsProRes' => $goodsProRes,
        ]);
        return $this->fetch();
    }
    public function ajaxDelPic($id){
        $gphoto=db('goods_photo');
        $gphotos=$gphoto->find($id);
        $orPhoto=IMG_UPLOADS.$gphotos['or_photo'];
        $bigPhoto=IMG_UPLOADS.$gphotos['big_photo'];
        $midPhoto=IMG_UPLOADS.$gphotos['mid_photo'];
        $smPhoto=IMG_UPLOADS.$gphotos['sm_photo'];
        @unlink($orPhoto);
        @unlink($bigPhoto);
        @unlink($midPhoto);
        @unlink($smPhoto);
        $del=$gphoto->delete($id);
        if($del){
            echo 1;
        }else{
            echo 2;
        }
    }

}
