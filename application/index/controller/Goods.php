<?php
namespace app\index\controller;
use think\Controller;

class Goods extends Controller
{
    public function index()
    {
        return $this->fetch('goods');;
    }

    
}
