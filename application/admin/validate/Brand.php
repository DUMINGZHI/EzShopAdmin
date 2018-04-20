<?php
namespace app\admin\validate;
use think\Validate;


class Brand extends Validate
{
    protected $rule = [
        'brand_name' => 'require|unique:brand',
        'brand_url' => 'url',
        'brand_description' => 'min:6',
    ];

    protected $message = [
        'brand_name.require' => '品牌名字必须填写',
        'brand_name.unique' => '品牌名字重复',
        'brand_url.url' => '品牌网址格式错误',
        'brand_description.min' => '品牌描述不能少于6个字符',
    ];

}
