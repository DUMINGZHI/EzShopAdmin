<?php
namespace app\admin\controller;
use think\Controller;
use catetree\Catetree;

// 暂未处理：
// 1.删除之后服务器上的图片也应该跟随删除
// 2.防止用户误操作应该在用户执行不可逆操作时多加一点提示
// 等等

class Category extends Controller
{
    public function lst(){

        //先按照sort大小整体排序然后在经过catetree进行无限极分类

        $catetree = new Catetree();
        $category = db('category');

        if(request()->isPost()){
            $data = input('post.');
            $catetree->cateSort($data['sort'],$category);
            $this->success('修改排序成功！');
        }
        $dbCate = db('category')->order('sort asc')->select();
        $dbCate = $catetree->catetree($dbCate);
        $this->assign([
            'dbCate' => $dbCate,
        ]);
        return $this->fetch('list');
    }
    public function add()
    {
        $catetree = new Catetree();
        $category = db('category');
        if(request()->isPost()){
            $data = input('post.');
            //验证器
            // $validate = validate('Cate');
            // if(!$validate->check($data)){
            //     $this->error($validate->getError());
            // }
            if($_FILES['cate_img']['tmp_name']){
                $data['cate_img']=$this->upload();
            }
            $dbAdd = $category->insert($data);
            if($dbAdd){
                $this->success('添加分类成功！','category/lst');
            }else{
                $this->error('添加分类失败！');
                die();
            }  
        }

        $dbCateRes = $category->order('sort asc')->select();
        $dbCateRes = $catetree->catetree($dbCateRes);
        $this->assign([
            'dbCateRes' => $dbCateRes,
        ]);

        return $this->fetch();
    }

    public function edit($id)
    {

        $catetree = new Catetree();
        $category = db('category');
        if(request()->isPost()){
            $data = input('post.');
            //验证器
            // $validate = validate('Cate');
            // if(!$validate->check($data)){
            //     $this->error($validate->getError());
            // }
            if($_FILES['cate_img']['tmp_name']){
                $Src = $category->field('cate_img')->find($data['id']);
                if($Src['cate_img']){
                    $oldSrc = IMG_UPLOADS.$Src['cate_img'];
                    if(file_exists($oldSrc)){
                        @unlink($oldSrc);
                    }
                }
                
                $data['cate_img']=$this->upload();
            }

            $dbUpdate = $category->update($data);
            if($dbUpdate){
                $this->success('修改分类成功！','category/lst');
            }else{
                $this->error('修改分类失败！');
                die();
            }  
        }
        $dbCateRes = $category->order('sort asc')->select();
        $dbCateRes = $catetree->catetree($dbCateRes);
        $dbCate = $category->select($id);
        $this->assign([
            'dbCateRes' => $dbCateRes,
            'dbCate' => $dbCate,
        ]);
        return $this->fetch();
    }

    public function del($id)
    {
        //查询子栏目id
        $db=db('category');
        $catetree = new Catetree();
        $sonId = $catetree->childrenids($id,$db);
        $sonId[]=(int)$id;
        $dbDel = $db->delete($sonId);
        if($dbDel){
                $this->success('删除分类成功！','category/lst');
            }else{
                $this->error('删除分类失败！');
                die();
            }
    }

    //图片上传实现方法
    public function upload(){
        $file = request()->file('cate_img');
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
