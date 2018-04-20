<?php
namespace app\admin\controller;
use think\Controller;
use catetree\Catetree;

// 暂未处理：
// 1.删除之后服务器上的图片也应该跟随删除
// 2.防止用户误操作应该在用户执行不可逆操作时多加一点提示
// 等等

class Cate extends Controller
{
    public function lst(){

        //先按照sort大小整体排序然后在经过catetree进行无限极分类
        $catetree = new Catetree();
        $cate = db('cate');
        if(request()->isPost()){
            $data = input('post.');
            $catetree->cateSort($data['sort'],$cate);
            $this->success('修改排序成功！');
        }
        $dbCate = db('cate')->order('sort asc')->select();
        $dbCate = $catetree->catetree($dbCate);
        $this->assign([
            'dbCate' => $dbCate,
        ]);
        return $this->fetch('list');
    }
    public function add()
    {
        $catetree = new Catetree();
        $cate = db('cate');
        if(request()->isPost()){
            $data = input('post.');
            //验证器
            $validate = validate('Cate');
            if(!$validate->check($data)){
                $this->error($validate->getError());
            }
            //系统分类和网店信息分类下不允许再添加子分类
            if(in_array($data['pid'], ['1','3'])){
                $this->error('该分类下不允许再添加子分类！');
            }

            //网店帮助信息下的二级分类强制转换type为3：网店帮助
            if($data['pid']==2){
                $data['cate_type']=3;
            }

            //网店帮助分类的子分类不允许添加他的下一级级分类(第三级)
            $cateId = $cate->field('pid')->find($data['pid']);
            if($cateId['pid']==2){
                 $this->error('该分类下不允许再添加子分类！');
            }
            $dbAdd = $cate->insert($data);
            if($dbAdd){
                $this->success('添加分类成功！','cate/lst');
            }else{
                $this->error('添加分类失败！');
                die();
            }  
        }

        $dbCateRes = db('cate')->order('sort asc')->select();
        $dbCateRes = $catetree->catetree($dbCateRes);
        $this->assign([
            'dbCateRes' => $dbCateRes,
        ]);

        return $this->fetch();
    }

    public function edit($id)
    {

        $catetree = new Catetree();
        $cate = db('cate');
        if(request()->isPost()){
            $data = input('post.');
            //验证器
            $validate = validate('Cate');
            if(!$validate->check($data)){
                $this->error($validate->getError());
            }
            $dbUpdate = db('cate')->update($data);
            if($dbUpdate){
                $this->success('修改分类成功！','cate/lst');
            }else{
                $this->error('修改分类失败！');
                die();
            }  
        }
        $dbCateRes = $cate->order('sort asc')->select();
        $dbCateRes = $catetree->catetree($dbCateRes);
        $dbCate = $cate->select($id);
        $this->assign([
            'dbCateRes' => $dbCateRes,
            'dbCate' => $dbCate,
        ]);
        return $this->fetch();
    }

    public function del($id)
    {
        //查询子栏目id
        $db=db('cate');
        $catetree = new Catetree();
        $sonId = $catetree->childrenids($id,$db);
        $sonId[]=(int)$id;
        $arrSys=[1,2,3];
        //交集排除1 2 3
        $arrRes=array_intersect($sonId,$arrSys);
        if($arrRes){
             $this->error('不允许删除此项分类');
        }
        $dbDel = db('cate')->delete($sonId);
        if($dbDel){
                $this->success('删除分类成功！','cate/lst');
            }else{
                $this->error('删除分类失败！');
                die();
            }
    }

    //图片上传实现方法
    public function upload(){
        $file = request()->file('brand_img');
        // 移动到框架应用根目录/public/static/uploads/目录下
        if($file){
            $info = $file->move(ROOT_PATH . 'public' . DS . 'static' . DS . 'uploads');
                if($info){
                    return $info->getSaveName();
                }else{
                    echo $file->getError();
                    die();
                }
        }
    }

}
