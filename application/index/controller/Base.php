<?php
namespace app\index\controller;
use think\Controller;

class Base extends Controller
{
    public function _initialize(){
    	$this->_getFooterArts();//获取并分配底部帮助信息
    }

	private function _getFooterArts(){
	        $mArticle=model('Article');
	    	$helpCateRes=$mArticle->getFooterArts();//底部帮助信息
	    	$this->assign([
	    		'helpCateRes'=>$helpCateRes,
	    		]);
	    }
    
}
