<?php
namespace app\admin\controller;
use think\Controller;


class MemberLevel extends Controller
{
    public function lst()
    {
        $dbLst = db('member_level')->paginate(5);
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

            $dbAdd = db('member_level')->insert($data);
            if($dbAdd){
                $this->success('添加会员级别成功！','MemberLevel/lst');
            }else{
                $this->error('添加会员级别失败！');
            }  
        }
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
            $dbUpdate = db('member_level')->update($data);
            if($dbUpdate){
                $this->success('修改会员级别成功！','MemberLevel/lst');
            }else{
                $this->error('修改会员级别失败！');
                die();
            }  
        }

        $dbEdit = db('member_level')->select($id);
        $this->assign([
            'dbEdit' => $dbEdit,
        ]);
        return $this->fetch();
    }

    public function del($id)
    {
        $dbDel = db('member_level')->delete($id);
        if($dbDel){
                $this->success('删除会员级别成功！','MemberLevel/lst');
            }else{
                $this->error('删除会员级别失败！');
                die();
            }
    }
}
