<?php
namespace app\index\controller;


class Goods extends Base
{
    public function index()
    {
        return $this->fetch('goods');
    }

    
}
