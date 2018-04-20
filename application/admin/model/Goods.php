<?php
namespace app\admin\model;
use think\Model;


class Goods extends Model
{

    protected $field = true;
    protected static function init(){

        Goods::beforeInsert(function ($goods) {
            if($_FILES['or_thumb']['tmp_name']){
                $thumbName = $goods->upload('or_thumb');
                $orThumb = date("Ymd"). DS . $thumbName;
                $bigThumb = date("Ymd"). DS . 'big'.$thumbName;
                $midThumb = date("Ymd"). DS . 'mid'.$thumbName;
                $smThumb = date("Ymd"). DS . 'sm'.$thumbName;

                $image = \think\Image::open(IMG_UPLOADS.$orThumb);
                // 按照原图的比例生成一个最大为150*150的缩略图并保存为thumb.png
                $image->thumb(500, 500)->save(IMG_UPLOADS.$bigThumb);
                $image->thumb(250, 250)->save(IMG_UPLOADS.$midThumb);
                $image->thumb(80, 80)->save(IMG_UPLOADS.$smThumb);

                $goods->or_thumb=$orThumb;
                $goods->big_thumb=$bigThumb;
                $goods->mid_thumb=$midThumb;
                $goods->sm_thumb=$smThumb;
            }
            $goods->goods_code=time().rand(111111,999999);
        });

         Goods::beforeUpdate(function ($goods) {

            $mpAttr = $goods->mp;
            $mpId = $goods->id;

            //新增商品属性
            $goodsData = input('post.');
            if(isset($goodsData['goods_attr'])){
                $i = 0;
                foreach ($goodsData['goods_attr'] as $k => $v) {
                    if(is_array($v)){
                        if(!empty($v)){
                            foreach ($v as $k1 => $v1) {
                                if(!$v1){
                                    $i++;
                                    continue;
                                }
                                //单选值存入数据库
                                db('goods_attr')->insert(array('attr_id'=>$k,'attr_value'=>$v1,'attr_price'=>$goodsData['attr_price'][$i],'goods_id'=>$mpId));
                                $i++;
                            }
                        }
                    }else{
                        //唯一值存入数据库
                        db('goods_attr')->insert(array('attr_id'=>$k,'attr_value'=>$v,'goods_id'=>$mpId));
                    }
                }
            }
            //修改商品属性
            if(isset($goodsData['old_goods_attr'])){
                $attrPrice=$goodsData['old_attr_price'];
                $idsArr=array_keys($attrPrice);
                $valuesArr=array_values($attrPrice);
                $i=0;
                foreach ($goodsData['old_goods_attr'] as $k => $v) {
                    if(is_array($v)){
                        if(!empty($v)){
                            foreach ($v as $k1 => $v1) {
                                if(!$v1){
                                    $i++;
                                    continue;
                                }
                                db('goods_attr')->where('id','=',$idsArr[$i])->update(['attr_value'=>$v1,'attr_price'=>$valuesArr[$i]]);
                                $i++;
                            }
                        }
                    }else{
                        // 处理唯一属性类型
                        db('goods_attr')->where('id','=',$idsArr[$i])->update(['attr_value'=>$v,'attr_price'=>$valuesArr[$i]]);
                        $i++;
                    }
                }
            }

            //处理商品相册批量上传
            if($_FILES['goods_photo']['tmp_name']){
                 $files = request()->file('goods_photo');
                    foreach($files as $file){
                        // 移动到框架应用根目录/public/uploads/ 目录下
                        $info = $file->move(ROOT_PATH . 'public' . DS . 'static' . DS . 'uploads');
                        if($info){
                            $photoName =  $info->getFilename(); 
                            $orPhoto = date("Ymd"). DS . $photoName;
                            $bigPhoto = date("Ymd"). DS . 'big'.$photoName;
                            $midPhoto = date("Ymd"). DS . 'mid'.$photoName;
                            $smPhoto = date("Ymd"). DS . 'sm'.$photoName;

                            $image = \think\Image::open(IMG_UPLOADS.$orPhoto);
                            // 按照原图的比例生成一个最大为150*150的缩略图并保存为thumb.png
                            $image->thumb(500, 500)->save(IMG_UPLOADS.$bigPhoto);
                            $image->thumb(250, 250)->save(IMG_UPLOADS.$midPhoto);
                            $image->thumb(80, 80)->save(IMG_UPLOADS.$smPhoto);

                            db('goods_photo')->insert(array('sm_photo'=>$smPhoto,'mid_photo'=>$midPhoto,'big_photo'=>$bigPhoto,'or_photo'=>$orPhoto,'goods_id'=>$mpId));

                        }else{
                            // 上传失败获取错误信息
                            echo $file->getError();
                        }    
                    }
            }


            db('member_price')->where(array('goods_id'=>$mpId))->delete();

            if($mpAttr){
                foreach ($mpAttr as $k => $v) {
                    db('member_price')->insert(array('mlevel_id'=>$k,'mprice'=>$v,'goods_id'=>$mpId));
                }
            }


            if($_FILES['or_thumb']['tmp_name']){
                @unlink(IMG_UPLOADS.$goods->orthumb);
                @unlink(IMG_UPLOADS.$goods->bigthumb);
                @unlink(IMG_UPLOADS.$goods->midthumb);
                @unlink(IMG_UPLOADS.$goods->smthumb);
                $thumbName = $goods->upload('or_thumb');
                $orThumb = date("Ymd"). DS . $thumbName;
                $bigThumb = date("Ymd"). DS . 'big'.$thumbName;
                $midThumb = date("Ymd"). DS . 'mid'.$thumbName;
                $smThumb = date("Ymd"). DS . 'sm'.$thumbName;

                $image = \think\Image::open(IMG_UPLOADS.$orThumb);
                // 按照原图的比例生成一个最大为150*150的缩略图并保存为thumb.png
                $image->thumb(500, 500)->save(IMG_UPLOADS.$bigThumb);
                $image->thumb(250, 250)->save(IMG_UPLOADS.$midThumb);
                $image->thumb(80, 80)->save(IMG_UPLOADS.$smThumb);

                $goods->or_thumb=$orThumb;
                $goods->big_thumb=$bigThumb;
                $goods->mid_thumb=$midThumb;
                $goods->sm_thumb=$smThumb;
            }           
        });

        Goods::afterInsert(function($goods){
            $mpAttr = $goods->mp;
            $mpId = $goods->id;
            if($mpAttr){
                foreach ($mpAttr as $k => $v) {
                    db('member_price')->insert(array('mlevel_id'=>$k,'mprice'=>$v,'goods_id'=>$mpId));
                }
            }

            //处理商品属性
            $goodsData = input('post.');
            $i = 0;
            if(isset($goodsData['goods_attr'])){
                foreach ($goodsData['goods_attr'] as $k => $v) {
                    if(is_array($v)){
                        if(!empty($v)){
                            foreach ($v as $k1 => $v1) {
                                if(!$v1){
                                    $i++;
                                    continue;
                                }
                                //单选值存入数据库
                                db('goods_attr')->insert(array('attr_id'=>$k,'attr_value'=>$v1,'attr_price'=>$goodsData['goods_price'][$i],'goods_id'=>$mpId));
                                $i++;
                            }
                        }
                    }else{
                        //唯一值存入数据库
                        db('goods_attr')->insert(array('attr_id'=>$k,'attr_value'=>$v,'goods_id'=>$mpId));
                    }
                }
            }

            //处理商品相册批量上传
            if($_FILES['goods_photo']['tmp_name']){
                 $files = request()->file('goods_photo');
                    foreach($files as $file){
                        // 移动到框架应用根目录/public/uploads/ 目录下
                        $info = $file->move(ROOT_PATH . 'public' . DS . 'static' . DS . 'uploads');
                        if($info){
                            $photoName =  $info->getFilename(); 
                            $orPhoto = date("Ymd"). DS . $photoName;
                            $bigPhoto = date("Ymd"). DS . 'big'.$photoName;
                            $midPhoto = date("Ymd"). DS . 'mid'.$photoName;
                            $smPhoto = date("Ymd"). DS . 'sm'.$photoName;

                            $image = \think\Image::open(IMG_UPLOADS.$orPhoto);
                            // 按照原图的比例生成一个最大为150*150的缩略图并保存为thumb.png
                            $image->thumb(500, 500)->save(IMG_UPLOADS.$bigPhoto);
                            $image->thumb(250, 250)->save(IMG_UPLOADS.$midPhoto);
                            $image->thumb(80, 80)->save(IMG_UPLOADS.$smPhoto);

                            db('goods_photo')->insert(array('sm_photo'=>$smPhoto,'mid_photo'=>$midPhoto,'big_photo'=>$bigPhoto,'or_photo'=>$orPhoto,'goods_id'=>$mpId));

                        }else{
                            // 上传失败获取错误信息
                            echo $file->getError();
                        }    
                    }
            }
        });      

        Goods::beforeDelete(function ($goods) {
            //删除主图以及缩略图
            $goodsId = $goods->id;
            if($goods->or_thumb){
                $thumb=[];
                $thumb[]=$goods->or_thumb;
                $thumb[]=$goods->sm_thumb;
                $thumb[]=$goods->mid_thumb;
                $thumb[]=$goods->big_thumb;
                foreach ($thumb as $k => $v) {
                    if(file_exists(IMG_UPLOADS.$v)){
                        @unlink(IMG_UPLOADS.$v);
                    }                    
                }
            }
            //删除会员价格
            db('member_price')->where(array('goods_id'=>$goodsId))->delete();
            //删除属性
            db('goods_attr')->where(array('goods_id'=>$goodsId))->delete();
            //删除相册图
            $photoDel = db('goods_photo')->where(array('goods_id'=>$goodsId))->select();
            if(!empty($photoDel)){
                foreach ($photoDel as $k => $v){
                    if($v['or_photo']){
                        $photo=[];
                        $photo[]=$v['or_photo'];
                        $photo[]=$v['sm_photo'];
                        $photo[]=$v['mid_photo'];
                        $photo[]=$v['big_photo'];
                    }
                    foreach ($photo as $k1 => $v1) {
                        if(file_exists(IMG_UPLOADS.$v1)){
                            @unlink(IMG_UPLOADS.$v1);
                        }
                    }
                }
                db('goods_photo')->where(array('goods_id'=>$goodsId))->delete();
            }
        }); 
    }

    
    //图片上传实现方法
    public function upload($orImg){
        $file = request()->file($orImg);
        // 移动到框架应用根目录/public/static/uploads/目录下
        if($file){
            $info = $file->move(ROOT_PATH . 'public' . DS . 'static' . DS . 'uploads');
                if($info){
                    return $info->getFilename(); 
                }else{
                    echo $file->getError();
                    die();
                }
        }
    }
}
