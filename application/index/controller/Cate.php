<?php
namespace app\index\controller;
use catetree\Catetree;

class Cate extends Base
{
    public function index()
    {
        $id = input('id');
        //获取当前栏目及其子栏目的id
        $cateTree = new Catetree();
        $ids = $cateTree->childrenids($id,db('cate'));
        $ids[] = $id;
        $map['cate_id']=array('IN',$ids);
        $artRes = db('article')->where($map)->select();
        //当前栏目基本信息
        $cates = db('cate')->find($id);
        //普通左侧栏目分类
    	$comCates = model('Cate')->getComCates();
        //帮助左侧栏目分类
    	$helpCates = model('Cate')->shopHelpCates();
    	$this->assign([
    		'show_right'=>1,//头部偏移对齐判断
    		'comCates'=>$comCates,
    		'helpCates'=>$helpCates,
            'artRes'=>$artRes,//当前栏目及其子栏目的文章
            'cates'=>$cates,//当前栏目基本信息
    	]);
        return $this->fetch('cate');
    }
}
