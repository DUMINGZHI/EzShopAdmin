<?php
namespace app\index\controller;
use think\Controller;

class Base extends Controller
{
    public function index()
    {
        return $this->fetch();;
    }

    
}
