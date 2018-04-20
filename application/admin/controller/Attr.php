<?php
namespace app\admin\controller;
use think\Controller;


class Attr extends Controller
{
    public function lst()
    {
        $id = input('id');
        $dbLst = db('attr')->where(array('type_id'=>$id))->field('a.*,t.type_name')->alias('a')->join('type t','a.type_id=t.id')->paginate(5);
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
            // $validate = validate('attr');
            // if(!$validate->check($data)){
            //     $this->error($validate->getError());
            // }
            $data['attr_values'] = str_replace('，', ',', $data['attr_values']);
            $dbAdd = db('attr')->insert($data);
            if($dbAdd){
                $this->success('添加商品属性成功！','type/lst');
            }else{
                $this->error('添加商品属性失败！');
                die();
            }  
        }
        $dbType = db('type')->select();
        $this->assign([
            'dbType' => $dbType,
        ]);
        return $this->fetch();
    }

    public function edit($id)
    {

        if(request()->isPost()){
            $data = input('post.');
            //判断用户是否有书写了HTTP
            //验证器
            // $validate = validate('attr');
            // if(!$validate->check($data)){
            //     $this->error($validate->getError());
            // }
            $data['attr_values'] = str_replace('，', ',', $data['attr_values']);
            $dbUpdate = db('attr')->update($data);
            if($dbUpdate){
                $this->success('修改商品属性成功！','type/lst');
            }else{
                $this->error('修改商品属性失败！');
                die();
            }  
        }
        $dbType = db('type')->select();
        $dbEdit = db('attr')->select($id);
        $this->assign([
            'dbEdit' => $dbEdit,
            'dbType' => $dbType,
            'nowId' => $id,
        ]);
        return $this->fetch();
    }

    public function del($id)
    {
        $dbDel = db('attr')->delete($id);
        if($dbDel){
                $this->success('删除商品属性成功！','type/lst');
            }else{
                $this->error('删除商品属性失败！');
                die();
            }
    }

    //异步获取指定类型下的属性
    public function ajaxGetAttr(){
        $typeId = input('type_id');
        $attrRes = db('attr')->where(array('type_id'=>$typeId))->select();
        echo json_encode($attrRes);
    }
    
   
}
