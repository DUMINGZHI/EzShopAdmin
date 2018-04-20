<?php
namespace app\admin\controller;
use think\Controller;


// 暂未处理：
// 1.删除之后服务器上的图片也应该跟随删除
// 2.防止用户误操作应该在用户执行不可逆操作时多加一点提示
// 等等

class Brand extends Controller
{
    public function lst()
    {
        $dbLst = db('brand')->paginate(5);
        $this->assign([
            'dbLst' => $dbLst,
        ]);
        return $this->fetch('list');
    }
    public function add()
    {

        if(request()->isPost()){
            $data = input('post.');
            //判断用户是否有书写了HTTP
            if($data['brand_url'] && stripos($data['brand_url'],'http://') === false){
               $data['brand_url'] = "http://".$data['brand_url'];
            }
            //图片上传
            if($_FILES['brand_img']['tmp_name']){
                $data['brand_img']=$this->upload();
            }
            //验证器
            $validate = validate('Brand');
            if(!$validate->check($data)){
                $this->error($validate->getError());
            }

            $dbAdd = db('brand')->insert($data);
            if($dbAdd){
                $this->success('添加品牌成功！','brand/lst');
            }else{
                $this->error('添加品牌失败！');
                die();
            }  
        }

        return $this->fetch();
    }

    public function edit($id)
    {

        if(request()->isPost()){
            $data = input('post.');
            //判断用户是否有书写了HTTP
            if($data['brand_url'] && stripos($data['brand_url'],'http://') === false){
               $data['brand_url'] = "http://".$data['brand_url'];
            }
            //图片上传
            if($_FILES['brand_img']['tmp_name']){
                //删除旧图片
                $oldImg = db('brand')->field('brand_img')->find($data['id']);
                $oldImgPath = IMG_UPLOADS . $oldImg['brand_img'];
                if(file_exists($oldImgPath)){
                    @unlink( $oldImgPath);
                }
                $data['brand_img']=$this->upload();
            }
            //验证器
            $validate = validate('Brand');
            if(!$validate->check($data)){
                $this->error($validate->getError());
            }
            $dbUpdate = db('brand')->update($data);
            if($dbUpdate){
                $this->success('修改品牌成功！','brand/lst');
            }else{
                $this->error('修改品牌失败！');
                die();
            }  
        }

        $dbEdit = db('brand')->select($id);
        $this->assign([
            'dbEdit' => $dbEdit,
        ]);
        return $this->fetch();
    }

    public function del($id)
    {
        $dbDel = db('brand')->delete($id);
        if($dbDel){
                $this->success('删除品牌成功！','brand/lst');
            }else{
                $this->error('删除品牌失败！');
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
