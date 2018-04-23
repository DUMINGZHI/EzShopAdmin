<?php
namespace app\index\model;
use think\Model;

class Article extends Model
{
    public function getFooterArts()
    {
    	//获取帮助分类信息
        $helpCateRes=model('cate')->where(array('cate_type'=>3))->select();
        foreach ($helpCateRes as $k => $v) {
        	$helpCateRes[$k]['arts']=$this->where(array('cate_id'=>$v['id']))->select();
        }
        return $helpCateRes;
    }

}
