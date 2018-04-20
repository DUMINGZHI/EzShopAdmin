<?php
namespace app\admin\controller;
use think\Controller;
use catetree\Catetree;

// 暂未处理：
// 1.删除之后服务器上的图片也应该跟随删除
// 2.防止用户误操作应该在用户执行不可逆操作时多加一点提示
// 等等

class Article extends Controller
{
    public function lst()
    {
        $dbLst = db('article')->field('a.*,c.cate_name')->alias('a')->join('cate c','a.cate_id=c.id')->paginate(10);
        $this->assign([
            'dbLst' => $dbLst,
        ]);
        return $this->fetch('list');
    }
    public function add()
    {
        $catetree = new Catetree();
        if(request()->isPost()){
            $data = input('post.');
            $data['addtime'] = time();
            //判断用户是否有书写了HTTP
            if($data['link_url'] && stripos($data['link_url'],'http://') === false){
               $data['link_url'] = "http://".$data['link_url'];
            }
            //图片上传
            if($_FILES['thumb']['tmp_name']){
                $data['thumb']=$this->upload();
            }
            //验证器
            $validate = validate('article');
            if(!$validate->check($data)){
                $this->error($validate->getError());
            }

            $dbAdd = db('article')->insert($data);
            if($dbAdd){
                $this->success('添加文章成功！','article/lst');
            }else{
                $this->error('添加文章失败！');
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
        if(request()->isPost()){
            $data = input('post.');
            //判断用户是否有书写了HTTP
            if($data['link_url'] && stripos($data['link_url'],'http://') === false){
               $data['link_url'] = "http://".$data['link_url'];
            }
            //图片上传
            if($_FILES['thumb']['tmp_name']){
                //删除旧图片
                $oldImg = db('article')->field('thumb')->find($data['id']);
                $oldImgPath = IMG_UPLOADS . $oldImg['thumb'];
                if(file_exists($oldImgPath)){
                    @unlink( $oldImgPath);
                }
                $data['thumb']=$this->upload();
            }
            //验证器
            $validate = validate('article');
            if(!$validate->check($data)){
                $this->error($validate->getError());
            }
            $dbUpdate = db('article')->update($data);
            if($dbUpdate){
                $this->success('修改文章成功！','article/lst');
            }else{
                $this->error('修改文章失败！');
                die();
            }  
        }

        $dbCateRes = db('cate')->order('sort asc')->select();
        $dbCateRes = $catetree->catetree($dbCateRes);
        $dbEdit = db('article')->select($id); 
        $this->assign([
            'dbCateRes' => $dbCateRes,
            'dbEdit' => $dbEdit,
        ]);
        return $this->fetch();
    }

    public function del($id)
    {
        $dbDel = db('article')->delete($id);
        if($dbDel){
                $this->success('删除文章成功！','article/lst');
            }else{
                $this->error('删除文章失败！');
                die();
            }
    }

    //图片上传实现方法
    public function upload(){
        $file = request()->file('thumb');
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
