<?php
namespace app\admin\controller;
use think\Controller;


class Type extends Controller
{
    public function lst()
    {
        $dbLst = db('type')->paginate(5);
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
            // $validate = validate('type');
            // if(!$validate->check($data)){
            //     $this->error($validate->getError());
            // }

            $dbAdd = db('type')->insert($data);
            if($dbAdd){
                $this->success('添加商品类型成功！','type/lst');
            }else{
                $this->error('添加商品类型失败！');
                die();
            }  
        }
        $typeRes = db('type')->select();
        return $this->fetch();
    }

    public function edit($id)
    {

        if(request()->isPost()){
            $data = input('post.');
            //判断用户是否有书写了HTTP
            //验证器
            // $validate = validate('type');
            // if(!$validate->check($data)){
            //     $this->error($validate->getError());
            // }
            $dbUpdate = db('type')->update($data);
            if($dbUpdate){
                $this->success('修改商品类型成功！','type/lst');
            }else{
                $this->error('修改商品类型失败！');
                die();
            }  
        }

        $dbEdit = db('type')->select($id);
        $this->assign([
            'dbEdit' => $dbEdit,
        ]);
        return $this->fetch();
    }

    public function del($id)
    {
        $dbDel = db('type')->delete($id);
        db('attr')->where(array('type_id'=>$id))->delete();
        if($dbDel){
                $this->success('删除商品类型成功！','type/lst');
            }else{
                $this->error('删除商品类型失败！');
                die();
            }
    }
}
