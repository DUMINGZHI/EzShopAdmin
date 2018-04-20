<?php
namespace app\admin\controller;
use think\Controller;


class GoodsAttr extends Controller
{
   public function ajaxDelAttr(){
        $del=db('goods_attr')->delete(input('gaid'));
        if($del){
            echo 1;
        }else{
            echo 2;
        }
   }
}
