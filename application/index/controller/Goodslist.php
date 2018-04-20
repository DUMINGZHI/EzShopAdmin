<?php
namespace app\index\controller;
use think\Controller;

class Goodslist extends Controller
{
    public function index()
    {
        return $this->fetch('goodslist');;
    }

    
}
