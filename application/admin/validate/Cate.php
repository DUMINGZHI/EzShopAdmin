<?php
namespace app\admin\validate;
use think\Validate;


class Cate extends Validate
{
    protected $rule = [
        'cate_name' => 'require|unique:cate',
    ];

    protected $message = [
        'cate_name.require' => '分类名字必须填写',
        'cate_name.unique' => '分类名字重复',

    ];

}
