<?php
namespace app\admin\validate;
use think\Validate;


class Conf extends Validate
{
    protected $rule = [
        'cname' => 'require|unique:conf',
        'ename' => 'require|unique:conf',
    ];

    protected $message = [
        'cname.require' => '中文名称必须填写',
        'cname.unique' => '中文名不能重复',
        'ename.require' => '英文名称必须填写',
        'ename.unique' => '英文名不能重复',
    ];

}
