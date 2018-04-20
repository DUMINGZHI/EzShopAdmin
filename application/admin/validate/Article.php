<?php
namespace app\admin\validate;
use think\Validate;


class Article extends Validate
{
    protected $rule = [
        'title' => 'require|unique:article',
        'cate_id' => 'require',
    ];

    protected $message = [
        'title.require' => '标题必须填写',
        'title.unique' => '标题重复',
        'cate_id.require' => '所属栏目必须填写',
    ];

}
