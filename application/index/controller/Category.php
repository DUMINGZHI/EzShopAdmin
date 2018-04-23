<?php
namespace app\index\controller;


class Category extends Base
{
    public function index()
    {
        return $this->fetch('category');
    }

    
}
