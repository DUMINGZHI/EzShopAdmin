<?php
namespace app\index\model;
use think\Model;

class Cate extends Model
{

	//获取普通分类
    public function getComCates(){
    	//获取普通分类的顶级分类
    	$comCates=$this->where(array('cate_type'=>5,'pid'=>0))->select();
    	//有二级分类则查询
    	foreach ($comCates as $k => $v) {
    		$comCates[$k]['children']=$this->where(array('pid'=>$v['id']))->select();
    	}
    	return $comCates;
    }
    //获取网店帮助分类
    public function shopHelpCates(){
    	$helpCates=$this->where(array('cate_type'=>3,'pid'=>2))->select();
    	return $helpCates;
    }
}
