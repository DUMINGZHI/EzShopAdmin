<?php
namespace app\admin\validate;
use think\Validate;


class Goods extends Validate
{
    protected $rule = [
        'goods_name' => 'require|unique:goods',
        'category' => 'require',
        'market_price' => 'require|num',
        'shop_price' => 'require|num',
        'goods_weight' => 'require|num',
    ];

    protected $message = [
        'goods_name.require' => '商品名称必须填写',
        'goods_name.unique' => '商品名称不能重复',
        'category.require' => '所属栏目必须填写',
        'market_price.require' => '商品市场价格必须填写',
        'market_price.num' => '商品市场价格必须为数字',
        'shop_price.require' => '商品本店价格必须填写',
        'shop_price.num' => '商品本店价格必须填写',
        'goods_weight.require' => '品重量必须填写',
        'goods_weight.num' => '商品重量价格必须填写',
    ];

}
