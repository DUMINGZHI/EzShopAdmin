<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:60:"E:\xampp\htdocs\shop./application/index\view\goods\goods.htm";i:1524139263;s:59:"E:\xampp\htdocs\shop\application\index\view\common\head.htm";i:1524137800;s:60:"E:\xampp\htdocs\shop\application\index\view\common\right.htm";i:1524138499;s:61:"E:\xampp\htdocs\shop\application\index\view\common\footer.htm";i:1524139238;}*/ ?>
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="Keywords" content="dumingzhi.com商城" />
<meta name="Description" content="dumingzhi.com商城" />
<title>dumingzhi.com商城</title>
<link rel="shortcut icon" href="favicon.ico" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/base.css" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/style.css" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/iconfont.css" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/purebox.css" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/quickLinks.css" />
<script type="text/javascript" src="/shop/public/static/index/js/jquery-1.9.1.min.js"></script><script type="text/javascript" src="/shop/public/static/index/js/jquery.json.js"></script><script type="text/javascript" src="/shop/public/static/index/js/transport_jquery.js"></script>
<script type="text/javascript">
var json_languages = {"ok":"\u786e\u5b9a","determine":"\u786e\u5b9a","cancel":"\u53d6\u6d88","drop":"\u5220\u9664","edit":"\u7f16\u8f91","remove":"\u79fb\u9664","follow":"\u5173\u6ce8","pb_title":"\u63d0\u793a","Prompt_information":"\u63d0\u793a\u4fe1\u606f","title":"\u63d0\u793a","not_login":"\u60a8\u5c1a\u672a\u767b\u5f55","close":"\u5173\u95ed","cart":"\u8d2d\u7269\u8f66","js_cart":"\u8d2d\u7269\u8f66","all":"\u5168\u90e8","go_login":"\u53bb\u767b\u9646","select_city":"\u8bf7\u9009\u62e9\u5e02","comment_goods":"\u8bc4\u8bba\u5546\u54c1","submit_order":"\u63d0\u4ea4\u8ba2\u5355","sys_msg":"\u7cfb\u7edf\u63d0\u793a","no_keywords":"\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u8bcd\uff01","adv_packup_one":"\u8bf7\u53bb\u540e\u53f0\u5e7f\u544a\u4f4d\u7f6e","adv_packup_two":"\u91cc\u9762\u8bbe\u7f6e\u5e7f\u544a\uff01","more":"\u66f4\u591a","Please":"\u8bf7\u53bb","set_up":"\u8bbe\u7f6e\uff01","login_phone_packup_one":"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801","more_options":"\u66f4\u591a\u9009\u9879","Pack_up":"\u6536\u8d77","no_attr":"\u6ca1\u6709\u66f4\u591a\u5c5e\u6027\u4e86","search_Prompt":"\u53ef\u8f93\u5165\u6c49\u5b57,\u62fc\u97f3\u67e5\u627e\u54c1\u724c","most_input":"\u6700\u591a\u53ea\u80fd\u9009\u62e95\u9879","multi_select":"\u591a\u9009","checkbox_Packup":"\u8bf7\u6536\u8d77\u5168\u90e8\u591a\u9009","radio_Packup":"\u8bf7\u6536\u8d77\u5168\u90e8\u5355\u9009","contrast":"\u5bf9\u6bd4","empty_contrast":"\u6e05\u7a7a\u5bf9\u6bd4\u680f","Prompt_add_one":"\u6700\u591a\u53ea\u80fd\u6dfb\u52a04\u4e2a\u54e6^_^","Prompt_add_two":"\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0","button_compare":"\u6bd4\u8f83\u9009\u5b9a\u5546\u54c1","exist":"\u60a8\u5df2\u7ecf\u9009\u62e9\u4e86%s","count_limit":"\u6700\u591a\u53ea\u80fd\u9009\u62e94\u4e2a\u5546\u54c1\u8fdb\u884c\u5bf9\u6bd4","goods_type_different":"%s\u548c\u5df2\u9009\u62e9\u5546\u54c1\u7c7b\u578b\u4e0d\u540c\u65e0\u6cd5\u8fdb\u884c\u5bf9\u6bd4","compare_no_goods":"\u60a8\u6ca1\u6709\u9009\u5b9a\u4efb\u4f55\u9700\u8981\u6bd4\u8f83\u7684\u5546\u54c1\u6216\u8005\u6bd4\u8f83\u7684\u5546\u54c1\u6570\u5c11\u4e8e 2 \u4e2a\u3002","btn_buy":"\u8d2d\u4e70","is_cancel":"\u53d6\u6d88","select_spe":"\u8bf7\u9009\u62e9\u5546\u54c1\u5c5e\u6027","Province":"\u8bf7\u9009\u62e9\u6240\u5728\u7701\u4efd","City":"\u8bf7\u9009\u62e9\u6240\u5728\u5e02","District":"\u8bf7\u9009\u62e9\u6240\u5728\u533a\u57df","Street":"\u8bf7\u9009\u62e9\u6240\u5728\u8857\u9053","Detailed_address_null":"\u8be6\u7ec6\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a","Select_attr":"\u8bf7\u9009\u62e9\u5c5e\u6027","Focus_prompt_one":"\u60a8\u5df2\u5173\u6ce8\u8be5\u5e97\u94fa\uff01","Focus_prompt_login":"\u60a8\u5c1a\u672a\u767b\u5f55\u5546\u57ce\u4f1a\u5458\uff0c\u4e0d\u80fd\u5173\u6ce8\uff01","Focus_prompt_two":"\u767b\u5f55\u5546\u57ce\u4f1a\u5458\u3002","store_focus":"\u5e97\u94fa\u5173\u6ce8\u3002","Focus_prompt_three":"\u60a8\u786e\u5b9e\u8981\u5173\u6ce8\u6240\u9009\u5e97\u94fa\u5417\uff1f","Focus_prompt_four":"\u60a8\u786e\u5b9e\u8981\u53d6\u6d88\u5173\u6ce8\u5e97\u94fa\u5417\uff1f","Focus_prompt_five":"\u60a8\u8981\u5173\u6ce8\u8be5\u5e97\u94fa\u5417\uff1f","Purchase_quantity":"\u8d85\u8fc7\u9650\u8d2d\u6570\u91cf.","My_collection":"\u6211\u7684\u6536\u85cf","shiping_prompt":"\u8be5\u5730\u533a\u6682\u4e0d\u652f\u6301\u914d\u9001","Have_goods":"\u6709\u8d27","No_goods":"\u65e0\u8d27","No_shipping":"\u65e0\u6cd5\u914d\u9001","Deliver_back_order":"\u4e0b\u5355\u540e\u7acb\u5373\u53d1\u8d27","Time_delivery":" \u65f6\u53d1\u8d27","goods_over":"\u6b64\u5546\u54c1\u6682\u65f6\u552e\u5b8c","Stock_goods_null":"\u5546\u54c1\u5e93\u5b58\u4e0d\u8db3","purchasing_prompt_two":"\u5bf9\u4e0d\u8d77\uff0c\u8be5\u5546\u54c1\u5df2\u7ecf\u7d2f\u8ba1\u8d85\u8fc7\u9650\u8d2d\u6570\u91cf","day_not_available":"\u5f53\u65e5\u65e0\u8d27","day_yes_available":"\u5f53\u65e5\u6709\u8d27","Already_buy":"\u5df2\u8d2d\u4e70","Already_buy_two":"\u4ef6\u5546\u54c1\u8fbe\u5230\u9650\u8d2d\u6761\u4ef6,\u65e0\u6cd5\u518d\u8d2d\u4e70","Already_buy_three":"\u4ef6\u8be5\u5546\u54c1,\u53ea\u80fd\u518d\u8d2d\u4e70","goods_buy_empty_p":"\u5546\u54c1\u6570\u91cf\u4e0d\u80fd\u5c11\u4e8e1\u4ef6","goods_number_p":"\u5546\u54c1\u6570\u91cf\u5fc5\u987b\u4e3a\u6570\u5b57","search_one":"\u8bf7\u586b\u5199\u7b5b\u9009\u4ef7\u683c","search_two":"\u8bf7\u586b\u5199\u7b5b\u9009\u5de6\u8fb9\u4ef7\u683c","search_three":"\u8bf7\u586b\u5199\u7b5b\u9009\u53f3\u8fb9\u4ef7\u683c","search_four":"\u5de6\u8fb9\u4ef7\u683c\u4e0d\u80fd\u5927\u4e8e\u6216\u7b49\u4e8e\u53f3\u8fb9\u4ef7\u683c","jian":"\u4ef6","letter":"\u4ef6","inventory":"\u5b58\u8d27","move_collection":"\u79fb\u81f3\u6211\u7684\u6536\u85cf","select_shop":"\u8bf7\u9009\u62e9\u5957\u9910\u5546\u54c1","Parameter_error":"\u53c2\u6570\u9519\u8bef","screen_price":"\u8bf7\u586b\u5199\u7b5b\u9009\u4ef7\u683c","screen_price_left":"\u8bf7\u586b\u5199\u7b5b\u9009\u5de6\u8fb9\u4ef7\u683c","screen_price_right":"\u8bf7\u586b\u5199\u7b5b\u9009\u53f3\u8fb9\u4ef7\u683c","screen_price_dy":"\u5de6\u8fb9\u4ef7\u683c\u4e0d\u80fd\u5927\u4e8e\u6216\u7b49\u4e8e\u53f3\u8fb9\u4ef7\u683c","invoice_ok":"\u4fdd\u5b58\u53d1\u7968\u4fe1\u606f","invoice_desc_null":"\u8f93\u5165\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\uff01","invoice_desc_number":"\u60a8\u6700\u591a\u53ef\u4ee5\u6dfb\u52a03\u4e2a\u516c\u53f8\u53d1\u7968\uff01","invoice_packup":"\u8bf7\u9009\u62e9\u6216\u586b\u5199\u53d1\u7968\u62ac\u5934\u90e8\u5206\uff01","invoice_tax_null":"\u8bf7\u586b\u5199\u7eb3\u7a0e\u4eba\u8bc6\u522b\u7801","add_address_10":"\u6700\u591a\u53ea\u80fd\u6dfb\u52a010\u4e2a\u6536\u8d27\u5730\u5740","msg_phone_not":"\u624b\u673a\u53f7\u7801\u4e0d\u6b63\u786e","captcha_not":"\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a","captcha_xz":"\u8bf7\u8f93\u51654\u4f4d\u6570\u7684\u9a8c\u8bc1\u7801","captcha_cw":"\u9a8c\u8bc1\u7801\u9519\u8bef","Detailed_map":"\u8be6\u7ec6\u5730\u56fe","email_error":"\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e\uff01","bid_prompt_null":"\u4ef7\u683c\u4e0d\u80fd\u4e3a\u7a7a!","bid_prompt_error":"\u4ef7\u683c\u8f93\u5165\u683c\u5f0f\u4e0d\u6b63\u786e\uff01","mobile_error_goods":"\u624b\u673a\u683c\u5f0f\u4e0d\u6b63\u786e\uff01","null_email_goods":"\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a","select_store":"\u8bf7\u9009\u62e9\u95e8\u5e97\uff01","Product_spec_prompt":"\u8bf7\u9009\u62e9\u5546\u54c1\u89c4\u683c\u7c7b\u578b","reply_desc_one":"\u56de\u590d\u5e16\u5b50\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a","go_shoping":"\u53bb\u8d2d\u7269","highest_price":"\u5df2\u662f\u6700\u9ad8\u4ef7\uff01","lowest_price":"\u5df2\u662f\u6700\u4f4e\u4ef7\uff01","no_history":"\u60a8\u5df2\u6e05\u7a7a\u6700\u8fd1\u6d4f\u89c8\u8fc7\u7684\u5546\u54c1","receive_coupons":"\u9886\u53d6\u4f18\u60e0\u5238","Immediate_use":"\u7acb\u5373\u4f7f\u7528","no_enabled":"\u5173\u95ed","select_stages_number":"\u8bf7\u9009\u62e9\u5206\u671f\u671f\u6570","store_subscribe":"\u9884\u7ea6\u5230\u5e97","submit_subscribe":"\u63d0\u4ea4\u9884\u7ea6","store_lately":"\u9009\u62e9\u79bb\u4f60\u6700\u8fd1\u7684\u95e8\u5e97","see_store":"\u67e5\u770b\u95e8\u5e97","select_base":"\u8bf7\u9009\u62e9\u5957\u9910\u57fa\u672c\u4ef6","data_not_complete":"\u6570\u636e\u683c\u5f0f\u4e0d\u5b8c\u6574","understock":"\u5e93\u5b58\u4e0d\u8db3\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u5546\u54c1","store_goods_null":"\u5f88\u62b1\u6b49\uff0c\u8be5\u533a\u57df\u6682\u65e0\u95e8\u5e97\u6709\u8d27\uff0c\u6b63\u52aa\u529b\u8865\u8d27\u4e2d\u2022\u2022\u2022","please_message_input":"\u8bf7\u60a8\u586b\u5199\u7559\u8a00\u4fe1\u606f.","been_evaluated":"\u60a8\u5df2\u8bc4\u4ef7\u8fc7."};
//加载效果
var load_cart_info = '<img src="/shop/public/static/index/img/load/loadGoods.gif" height="108" class="ml100">';
var load_icon = '<img src="/shop/public/static/index/img/load/load.gif" width="200" height="200">';
</script><link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/suggest.css" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/select.css" />
<link rel="stylesheet" type="text/css" href="js/perfect-scrollbar/perfect-scrollbar.min.css" />
</head>
<body>

	<div class="site-nav" id="site-nav">
    <div class="w w1390">
        <div class="fl">    
           <div class="txt-info" id="ECS_MEMBERZONE">
                
    <a href="#" class="link-login red">请登录</a>
        <a href="#" class="link-regist">免费注册</a>
        
            </div>
        </div>
        <ul class="quick-menu fr">
                    <li>
                <div class="dt"><a href="#" >我的订单</a></div>
            </li>
            <li class="spacer"></li>
                    <li>
                <div class="dt"><a href="#" >我的浏览</a></div>
            </li>
            <li class="spacer"></li>
                    <li>
                <div class="dt"><a href="#" >我的收藏</a></div>
            </li>
            <li class="spacer"></li>
                    <li>
                <div class="dt"><a href="#" >客户服务</a></div>
            </li>
            <li class="spacer"></li>
                    <li class="li_dorpdown" data-ectype="dorpdown">
                <div class="dt dsc-cm">网站导航<i class="iconfont icon-down"></i></div>
                <div class="dd dorpdown-layer">
                    <dl class="fore1">
                        <dt>特色主题</dt>
                        <dd>
            <div class="item"><a href="#" target="_blank">家用电器</a></div>
<div class="item"><a href="#" target="_blank">手机数码</a></div>
<div class="item"><a href="#" target="_blank">电脑办公</a></div>
            </dd>
                    </dl>
                    <dl class="fore2">
                        <dt>促销活动</dt>
                        <dd>
                        <div class="item"><a href="#">拍卖活动</a></div>
<div class="item"><a href="#">共创商品</a></div>
<div class="item"><a href="#">优惠活动</a></div>
<div class="item"><a href="#">批发市场</a></div>
<div class="item"><a href="#">超值礼包</a></div>
<div class="item"><a href="#">优惠券</a></div>
</dd>
                    </dl>
                </div>
            </li>
                    </ul>
    </div>
</div>
<div class="header">
    <div class="w w1390">
        <div class="logo">
            <div class="logoImg"><a href="#"><img src="./img/logo.png" /></a></div>
        </div>
        <div class="dsc-search">
            <div class="form">
                <form id="searchForm" name="searchForm" method="get" action="search.php" onSubmit="return checkSearchForm()" class="search-form">
                        <input autocomplete="off" onKeyUp="lookup(this.value);" name="keywords" type="text" id="keyword" value="内衣" class="search-text"/>
                    <input type="hidden" name="store_search_cmt" value="0">
                    <button type="submit" class="button button-goods" onclick="checkstore_search_cmt(0)" >搜商品</button>
                </form>
    <ul class="keyword">
    <li><a href="#" target="_blank">周大福</a></li>
    <li><a href="#" target="_blank">内衣</a></li>
    <li><a href="#" target="_blank">Five Plus</a></li>
    <li><a href="#" target="_blank">手机</a></li>
    </ul>
    
                <div class="suggestions_box" id="suggestions" style="display:none;">
                    <div class="suggestions_list" id="auto_suggestions_list">
                        &nbsp;
                    </div>
                </div>
                
            </div>
        </div>
        <div class="shopCart" data-ectype="dorpdown" id="ECS_CARTINFO" data-carteveval="0">
            
<div class="shopCart-con dsc-cm">
    <a href="#">
        <i class="iconfont icon-carts"></i>
        <span>我的购物车</span>
        <em class="count cart_num">0</em>
    </a>
</div>
<div class="dorpdown-layer" ectype="dorpdownLayer">
        <div class="prompt"><div class="nogoods"><b></b><span>购物车中还没有商品，赶紧选购吧！</span></div></div>
    </div>

<script type="text/javascript">
function changenum(rec_id, diff, warehouse_id, area_id)
{
    var cValue = $('#cart_value').val();
    var goods_number =Number($('#goods_number_' + rec_id).text()) + Number(diff);
 
    if(goods_number < 1)
    {
        return false;   
    }
    else
    {
        change_goods_number(rec_id,goods_number, warehouse_id, area_id, cValue);
    }
}
function change_goods_number(rec_id, goods_number, warehouse_id, area_id, cValue)
{
    if(cValue != '' || cValue == 'undefined'){
       var cValue = $('#cart_value').val(); 
    }   
    Ajax.call('flow.php?step=ajax_update_cart', 'rec_id=' + rec_id +'&goods_number=' + goods_number +'&cValue=' + cValue +'&warehouse_id=' + warehouse_id +'&area_id=' + area_id, change_goods_number_response, 'POST','JSON');                
}
function change_goods_number_response(result)
{    
    var rec_id = result.rec_id;           
    if (result.error == 0)
    {
       $('#goods_number_' +rec_id).val(result.goods_number);//更新数量
       $('#goods_subtotal_' +rec_id).html(result.goods_subtotal);//更新小计
       if (result.goods_number <= 0)
        {
            //数量为零则隐藏所在行
            $('#tr_goods_' +rec_id).style.display = 'none';
            $('#tr_goods_' +rec_id).innerHTML = '';
        }
        $('#total_desc').html(result.flow_info);//更新合计
        if($('ECS_CARTINFO'))
        

        if(result.group.length > 0){
            for(var i=0; i<result.group.length; i++){
                $("#" + result.group[i].rec_group).html(result.group[i].rec_group_number);//配件商品数量
                $("#" + result.group[i].rec_group_talId).html(result.group[i].rec_group_subtotal);//配件商品金额
            }
        }

        $("#goods_price_" + rec_id).html(result.goods_price);
        $(".cart_num").html(result.subtotal_number);
    }
    else if (result.message != '')
    {
        $('#goods_number_' +rec_id).val(result.cart_Num);//更新数量
        alert(result.message);
    }                
}

function deleteCartGoods(rec_id,index)
{
    Ajax.call('delete_cart_goods.php', 'id='+rec_id+'&index='+index, deleteCartGoodsResponse, 'POST', 'JSON');
}

/**
 * 接收返回的信息
 */
function deleteCartGoodsResponse(res)
{
  if (res.error)
  {
    alert(res.err_msg);
  }
  else if(res.index==1)
  {
        Ajax.call('get_ajax_content.php?act=get_content', 'data_type=cart_list', return_cart_list, 'POST', 'JSON');
  }
  else
  {
      $("#ECS_CARTINFO").html(res.content);
      $(".cart_num").html(res.cart_num);
  }
}

function return_cart_list(result)
{
    $(".cart_num").html(result.cart_num);
    $(".pop_panel").html(result.content);
    tbplHeigth();
}
</script>        </div>
    </div>
</div>
<div class="nav dsc-zoom">
    <div class="w w1390">
        <div class="categorys site-mast">
            <div class="categorys-type"><a href="#" target="_blank">全部商品分类</a></div>
            <div class="categorys-tab-content">
                <div class="categorys-items" id="cata-nav">
                                <div class="categorys-item" ectype="cateItem" data-id="858" data-eveval="0">
                        <div class="item item-content">
                            <i class="iconfont icon-ele"></i>
                            <div class="categorys-title">
                                <strong>
                            <a href="#" target="_blank">家用电器</a>
                            </strong>
                                    <span>
                        <a href="#" target="_blank">大家电</a>
            
                        <a href="#" target="_blank">生活电器</a>
            
                    
                    
                    
            </span>
                                </div>
                        </div>
                        <div class="categorys-items-layer" ectype="cateLayer">
<div class="cate-layer-con clearfix">
    <div class="cate-layer-left">
        <div class="cate_channel" ectype="channels_858"></div>
        <div class="cate_detail" ectype="subitems_858"></div>
    </div>
    <div class="cate-layer-rihgt" ectype="brands_858"></div>
</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                <div class="categorys-item" ectype="cateItem" data-id="3" data-eveval="0">
                        <div class="item item-content">
                            <i class="iconfont icon-digital"></i>
                            <div class="categorys-title">
                                <strong>
                            <a href="#" target="_blank" class="division_cat">手机</a>、<a href="#" target="_blank" class="division_cat">数码</a>、<a href="#" target="_blank" class="division_cat">通信</a>                         </strong>
                                    <span>
                        <a href="#" target="_blank">智能设备</a>
            
                        <a href="#" target="_blank">数码配件</a>
            
                    
                    
                    
                    
                    
            </span>
                                </div>
                        </div>
                        <div class="categorys-items-layer" ectype="cateLayer">
<div class="cate-layer-con clearfix">
    <div class="cate-layer-left">
        <div class="cate_channel" ectype="channels_3"></div>
        <div class="cate_detail" ectype="subitems_3"></div>
    </div>
    <div class="cate-layer-rihgt" ectype="brands_3"></div>
</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                <div class="categorys-item" ectype="cateItem" data-id="4" data-eveval="0">
                        <div class="item item-content">
                            <i class="iconfont icon-computer"></i>
                            <div class="categorys-title">
                                <strong>
                            <a href="#" target="_blank">电脑、办公</a>
                            </strong>
                                    <span>
                        <a href="#" target="_blank">服务产品</a>
            
                        <a href="#" target="_blank">电脑整机</a>
            
                    
                    
                    
                    
            </span>
                                </div>
                        </div>
                        <div class="categorys-items-layer" ectype="cateLayer">
<div class="cate-layer-con clearfix">
    <div class="cate-layer-left">
        <div class="cate_channel" ectype="channels_4"></div>
        <div class="cate_detail" ectype="subitems_4"></div>
    </div>
    <div class="cate-layer-rihgt" ectype="brands_4"></div>
</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                <div class="categorys-item" ectype="cateItem" data-id="5" data-eveval="0">
                        <div class="item item-content">
                            <i class="iconfont icon-bed"></i>
                            <div class="categorys-title">
                                <strong>
                            <a href="#" target="_blank">家居、家具、家装、厨具</a>
                            </strong>
                                    <span>
                        <a href="#" target="_blank">厨具</a>
            
                        <a href="#" target="_blank">家装建材</a>
            
                    
                    
                    
                    
            </span>
                                </div>
                        </div>
                        <div class="categorys-items-layer" ectype="cateLayer">
<div class="cate-layer-con clearfix">
    <div class="cate-layer-left">
        <div class="cate_channel" ectype="channels_5"></div>
        <div class="cate_detail" ectype="subitems_5"></div>
    </div>
    <div class="cate-layer-rihgt" ectype="brands_5"></div>
</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                <div class="categorys-item" ectype="cateItem" data-id="6" data-eveval="0">
                        <div class="item item-content">
                            <i class="iconfont icon-clothes"></i>
                            <div class="categorys-title">
                                <strong>
                            <a href="#" target="_blank">男装、女装、内衣</a>
                            </strong>
                                    <span>
                        <a href="#" target="_blank">女装</a>
            
                        <a href="#" target="_blank">男装</a>
            
                    
                    
                    
            </span>
                                </div>
                        </div>
                        <div class="categorys-items-layer" ectype="cateLayer">
<div class="cate-layer-con clearfix">
    <div class="cate-layer-left">
        <div class="cate_channel" ectype="channels_6"></div>
        <div class="cate_detail" ectype="subitems_6"></div>
    </div>
    <div class="cate-layer-rihgt" ectype="brands_6"></div>
</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                <div class="categorys-item" ectype="cateItem" data-id="8" data-eveval="0">
                        <div class="item item-content">
                            <i class="iconfont icon-shoes"></i>
                            <div class="categorys-title">
                                <strong>
                            <a href="#" target="_blank">鞋靴、箱包、钟表、奢侈品</a>
                            </strong>
                                    <span>
                        <a href="#" target="_blank">奢侈品</a>
            
                        <a href="#" target="_blank">功能箱包</a>
            
                    
                    
                    
                    
                    
            </span>
                                </div>
                        </div>
                        <div class="categorys-items-layer" ectype="cateLayer">
<div class="cate-layer-con clearfix">
    <div class="cate-layer-left">
        <div class="cate_channel" ectype="channels_8"></div>
        <div class="cate_detail" ectype="subitems_8"></div>
    </div>
    <div class="cate-layer-rihgt" ectype="brands_8"></div>
</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                <div class="categorys-item" ectype="cateItem" data-id="860" data-eveval="0">
                        <div class="item item-content">
                            <i class="iconfont icon-heal"></i>
                            <div class="categorys-title">
                                <strong>
                            <a href="#" target="_blank">个人化妆、清洁用品</a>
                            </strong>
                                    <span>
                        <a href="#" target="_blank">面部护肤</a>
            
                        <a href="#" target="_blank">洗发护发</a>
            
                    
                    
                    
                    
                    
            </span>
                                </div>
                        </div>
                        <div class="categorys-items-layer" ectype="cateLayer">
<div class="cate-layer-con clearfix">
    <div class="cate-layer-left">
        <div class="cate_channel" ectype="channels_860"></div>
        <div class="cate_detail" ectype="subitems_860"></div>
    </div>
    <div class="cate-layer-rihgt" ectype="brands_860"></div>
</div>
                        </div>
                        <div class="clear"></div>
                    </div>
                                                                                                                                                                                                                                                                                                                                                                                            </div>
            </div>
        </div>
        <div class="nav-main" id="nav">
            <ul class="navitems">
                <li><a href="#" class="curr">首页</a></li>
                <li><a href="#"  >女装街</a></li>
                <li><a href="#"  >男人柜</a></li>
                <li><a href="#"  >品牌专区</a></li>
                <li><a href="#"  >聚划算</a></li>
                <li><a href="#"  >积分商城</a></li>
            </ul>
        </div>
    </div>
</div>

	
    <div class="full-main-n">
        <div class="w w1200 relative">
        <div class="crumbs-nav">
	<div class="crumbs-nav-main clearfix">
				<div class="crumbs-nav-item">
			<div class="menu-drop">
				<div class="trigger">
					<a href="category.php?id=6"><span>男装、女装、内衣</span></a>
					<i class="iconfont icon-down"></i>
				</div>
                				<div class="menu-drop-main">
					<ul>
<li><a href="category.php?id=347">女装</a></li>
<li><a href="category.php?id=463">男装</a></li>
<li><a href="category.php?id=547">内衣</a></li>
<li><a href="category.php?id=630">服饰配件</a></li>
<li><a href="category.php?id=1442">运动户外</a></li>
					</ul>
				</div>
                			</div>
			<i class="iconfont icon-right"></i>		</div>
				<div class="crumbs-nav-item">
			<div class="menu-drop">
				<div class="trigger">
					<a href="category.php?id=347"><span>女装</span></a>
					<i class="iconfont icon-down"></i>
				</div>
                				<div class="menu-drop-main">
					<ul>
<li><a href="category.php?id=349">连衣裙</a></li>
<li><a href="category.php?id=350">蕾丝/雪纺衫</a></li>
<li><a href="category.php?id=351">衬衫</a></li>
<li><a href="category.php?id=352">T恤</a></li>
<li><a href="category.php?id=354">半身裙</a></li>
<li><a href="category.php?id=356">休闲裤</a></li>
<li><a href="category.php?id=358">短裤</a></li>
<li><a href="category.php?id=361">牛仔裤</a></li>
<li><a href="category.php?id=363">针织衫</a></li>
<li><a href="category.php?id=365">吊带/背心</a></li>
<li><a href="category.php?id=367">打底衫</a></li>
<li><a href="category.php?id=369">打底裤</a></li>
<li><a href="category.php?id=370">正装裤</a></li>
<li><a href="category.php?id=372">小西服</a></li>
<li><a href="category.php?id=374">马甲</a></li>
<li><a href="category.php?id=377">风衣</a></li>
<li><a href="category.php?id=379">羊毛衫</a></li>
<li><a href="category.php?id=381">羊绒衫</a></li>
<li><a href="category.php?id=383">短外套</a></li>
<li><a href="category.php?id=385">棉服</a></li>
<li><a href="category.php?id=388">毛呢大衣</a></li>
<li><a href="category.php?id=390">加绒裤</a></li>
<li><a href="category.php?id=395">羽绒服</a></li>
<li><a href="category.php?id=400">皮草</a></li>
<li><a href="category.php?id=429">真皮皮衣</a></li>
<li><a href="category.php?id=431">仿皮皮衣</a></li>
<li><a href="category.php?id=444">旗袍/唐装</a></li>
<li><a href="category.php?id=448">礼服</a></li>
<li><a href="category.php?id=451">婚纱</a></li>
<li><a href="category.php?id=454">中老年女装</a></li>
<li><a href="category.php?id=455">大码女装</a></li>
					</ul>
				</div>
                			</div>
			<i class="iconfont icon-right"></i>		</div>
				<div class="crumbs-nav-item">
			<div class="menu-drop">
				<div class="trigger bottom">
					<a href="category.php?id=350"><span>蕾丝/雪纺衫</span></a>
					<i class="iconfont icon-down"></i>
				</div>
                			</div>
			<i class="iconfont icon-right"></i>		</div>
<span class="cn-goodsName">韩美格2017春秋新款修身大码蕾丝网纱打底衫女长袖薄款圆领女T恤 全店商品 二件减5元 三件减10</span>
			</div>
</div>
        </div>
    </div>
    <div class="container">
    	<div class="w w1200">
            <div class="product-info">
                
<div class="preview" if="preview">
	<div class="gallery_wrap"><a href="/shop/public/static/index/img/0_P_1490174858621.jpg" class="MagicZoomPlus" id="Zoomer" rel="hint-text: ; selectors-effect: false; selectors-class: img-hover; selectors-change: mouseover; zoom-distance: 10;zoom-width: 400; zoom-height: 474;"><img src="/shop/public/static/index/img/0_P_1490174858621.jpg" id="J_prodImg" alt="韩美格2017春秋新款修身大码蕾丝网纱打底衫女长袖薄款圆领女T恤 全店商品 二件减5元 三件减10"></a></div>
	<div class="spec-list">
		<a href="javascript:void(0);" class="spec-prev"><i class="iconfont icon-left"></i></a>
		<div class="spec-items">
			<ul>
            	            	 
            <li>
					<a href="/shop/public/static/index/img/0_P_1490174858621.jpg" rel="zoom-id: Zoomer" rev="/shop/public/static/index/img/0_P_1490174858621.jpg" class="img-hover">
<img src="/shop/public/static/index/img/0_thumb_P_1490174858959.jpg" alt="韩美格2017春秋新款修身大码蕾丝网纱打底衫女长袖薄款圆领女T恤 全店商品 二件减5元 三件减10" width="58" height="58" />
					</a>
				</li>
                 
              				</ul>
		</div>
		<a href="javascript:void(0);" class="spec-next"><i class="iconfont icon-right"></i></a>
	</div>
        <div class="short-share">
        <div class="short-share-r bar_code hide">条形条码：<em id="bar_code"></em></div>        <div class="left-btn">
            <div class="duibi">
                <a href="javascript:void(0);" id="compareLink">
<input type="checkbox" name="" class="ui-checkbox" id="799" onClick="Compare.add(this, 799,'韩美格2017春秋新款修身大码蕾丝网纱打底衫女长袖薄款圆领女T恤 全店商品 二件减5元 三件减10','0', '/shop/public/static/index/img/0_thumb_G_1490174858999.jpg', '68', '<em>¥</em>81.60')">
<label for="799" class="ui-label">对比</label>
                </a>
            </div>
            <a href="javascript:void(0);" class="collection choose-btn-coll" data-dialog="goods_collect_dialog" data-divid="goods_collect" data-url="user.php?act=collect" data-goodsid="799"><i class="iconfont choose-btn-icon icon-collection" id="collection_iconfont"></i><em>收藏 (<span id="collect_count"></span>)</em></a>
    <div class="bdsharebuttonbox" style=" width:50px; height:25px; float:left;">
                <a href="javascript:void(0);" data-cmd="more" class="share bds_more" style=" width:50px; height:25px; background:none; margin:0px 0px 0px 15px; padding:0px;"><i class="iconfont icon-share"></i><em>分享</em></a>
            </div>
            			        </div>
    </div>
    </div>
<script type="text/javascript" id="bdshare_js" data="type=tools&amp;uid=692785" ></script>
<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">
	document.getElementById("bdshell_js").src = "https://test.dscmall.cn/static/api/js/share.js?v=89860593.js?cdnversion=" + new Date().getHours();
</script>
<script type="text/javascript">
$(function(){
	get_collection();
});
// function get_collection(){
// 	Ajax.call('ajax_dialog.php', 'act=goods_collection&goods_id=' + 799, goodsCollectionResponse, 'GET', 'JSON');
// }
function goodsCollectionResponse(res){
	$("#collect_count").html(res.collect_count);
	
	if(res.is_collect > 0){
		$(".collection").addClass('selected');
		$("#collection_iconfont").addClass("icon-collection-alt");
		$("#collection_iconfont").removeClass('icon-collection');
	}else{
		$(".collection").removeClass('selected');
		$("#collection_iconfont").addClass("icon-collection");
		$("#collection_iconfont").removeClass('icon-collection-alt');
	}
}
</script>
                <div class="product-wrap">
<form action="javascript:addToCart(799)" method="post" name="ECS_FORMBUY" id="ECS_FORMBUY" >
                		<div class="name">韩美格2017春秋新款修身大码蕾丝网纱打底衫女长袖薄款圆领女T恤 全店商品 二件减5元 三件减10</div>
            <div class="summary">
        <div class="summary-price-wrap">
            <div class="s-p-w-wrap">
                <div class="summary-item si-shop-price">
<div class="si-tit">商 城 价</div>
<div class="si-warp">
    <strong class="shop-price" id="ECS_SHOPPRICE" ectype="SHOP_PRICE"></strong>
    <span class="price-notify" data-userid="62" data-goodsid="799" ectype="priceNotify">降价通知</span>
</div>
                </div>
            <div class="summary-item si-market-price">
<div class="si-tit">市 场 价</div>
<div class="si-warp"><div class="m-price" id="ECS_MARKETPRICE"><em>¥</em>81.60</div></div>
                </div>
            <div class="si-info">
<div class="si-cumulative">累计评价<em>0</em></div>
<div class="si-cumulative">累计销量<em>0</em></div>
                </div>
            <div class="si-phone-code">
<div class="qrcode-wrap">
    <div class="qrcode_tit">手机购买<i class="iconfont icon-qr-code"></i></div>
    <div class="qrcode_pop">
        <div class="mobile-qrcode"><img src="/shop/public/static/index/img/weixin_code_799.png" alt="商品二维码" title="" width="175"></div>
    </div>
</div>
                </div>
        <div class="summary-item si-coupon">
<div class="si-tit">领 券</div>
<div class="si-warp">
        <a class="J-open-tb" href="#none" data-goodsid="799">
        <div class="quan-item"><i class="i-left"></i>满2000减100<i class="i-right"></i></div>
    </a>
        <a class="J-open-tb" href="#none" data-goodsid="799">
        <div class="quan-item"><i class="i-left"></i>满1000减35<i class="i-right"></i></div>
    </a>
        <a class="J-open-tb" href="#none" data-goodsid="799">
        <div class="quan-item"><i class="i-left"></i>满10000减500<i class="i-right"></i></div>
    </a>
        <a class="J-open-tb" href="#none" data-goodsid="799">
        <div class="quan-item"><i class="i-left"></i>满10000减888<i class="i-right"></i></div>
    </a>
        <a class="J-open-tb" href="#none" data-goodsid="799">
        <div class="quan-item"><i class="i-left"></i>满50000减5888<i class="i-right"></i></div>
    </a>
        <a class="J-open-tb" href="#none" data-goodsid="799">
        <div class="quan-item"><i class="i-left"></i>满10减500<i class="i-right"></i></div>
    </a>
    </div>
                </div>
        <div class="clear"></div>
            </div>
        </div>
        <div class="summary-basic-info">
    
    
            <div class="summary-item is-stock">
                <div class="si-tit">配送</div>
                <div class="si-warp">
<span class="initial-area">
            上海市      
</span>
<span>至</span>
<div class="store-selector">
    <div class="text-select" id="area_address" ectype="areaSelect"></div>
</div>
<div class="store-warehouse">
    <div class="store-warehouse-info"></div>
    <div id="isHas_warehouse_num" class="store-prompt"></div>
</div>
                </div>  
            </div>
            <div class="summary-item is-service">
                <div class="si-tit">服务</div>
                <div class="si-warp">
<div class="fl"> 
    由 <a href="javascript:void(0)" class="link-red">童攀课堂</a> 发货并提供售后服务
</div>
<div class="fl pl10" id="user_area_shipping">
</div>
                </div>
            </div>
                <div class="summary-item is-integral">
                <div class="si-tit">可用积分</div>
                <div class="si-warp">可用 <span class="integral">0</span></div>
            </div>
                
    <div class="summary-item is-number">
                <div class="si-tit">数量</div>
                <div class="si-warp">
<div class="amount-warp">
    <input class="text buy-num" ectype="quantity" value="1" name="number" defaultnumber="1">
    <div class="a-btn">
        <a href="javascript:void(0);" class="btn-add" ectype="btnAdd"><i class="iconfont icon-up"></i></a>
        <a href="javascript:void(0);" class="btn-reduce btn-disabled" ectype="btnReduce"><i class="iconfont icon-down"></i></a>
        <input type="hidden" name="perNumber" id="perNumber" ectype="perNumber" value="0">
        <input type="hidden" name="perMinNumber" id="perMinNumber" ectype="perMinNumber" value="1">
    </div>
    <input name="confirm_type" id="confirm_type" type="hidden" value="3" />
</div>
<span>库存&nbsp;<em id="goods_attr_num" ectype="goods_attr_num"></em>&nbsp;个</span>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="choose-btns ml60 clearfix">
        <a href="javascript:bool=0;addToCart(799)" data-type="0" class="btn-buynow" ectype="btn-buynow">立即购买</a>
    <a href="javascript:bool=0;addToCartShowDiv(799)" class="btn-append" ectype="btn-append"><i class="iconfont icon-carts"></i>加入购物车</a>


        </div>
    <div class="summary-basic-info">
            <div class="summary-item is-service">
                <div class="si-tit">温馨提示</div>
                <div class="si-warp gray">
·不支持退换货服务
                </div>
            </div>
        </div>
        	</div>
    <input type="hidden" value="62" id="user_id" name="user_id" />
    <input type="hidden" value="799" id="good_id" name="good_id" />
    <input type="hidden" value="2" id="region_id" name="region_id" />
    <input type="hidden" value="16" id="area_id" name="area_id" />
    <input type="hidden" value="0" name="street_list" />
    <input type="hidden" value="0" name="restrictShop" ectype="restrictShop" />
    <input type="hidden" value="1" name="add_shop_price" ectype="add_shop_price" />
</form>
                </div>
            <div class="track">
<div class="track_warp">
	<div class="track-tit"><h3>看了又看</h3><span></span></div>
    <div class="track-con">
        <ul>
    <li>
                <div class="p-img"><a href="goods.php?id=635" target="_blank" title="韩都衣舍2017韩版女装新款黑白拼接插肩棒球服春季短外套HH5597妠 朴信惠同款 黑白拼接 插肩袖 棒球服"><img src="/shop/public/static/index/img/0_thumb_G_1489102950633.jpg" width="140" height="140"></a></div>
                <div class="p-name"><a href="goods.php?id=635" target="_blank" title="韩都衣舍2017韩版女装新款黑白拼接插肩棒球服春季短外套HH5597妠 朴信惠同款 黑白拼接 插肩袖 棒球服">韩都衣舍2017韩版女装新款黑白拼接插肩棒球服春季短外套HH5597妠 朴信惠同款 黑白拼接 插肩袖 棒球服</a></div>
                <div class="price">
    <em>¥</em>450.00				
                </div>
            </li>
    <li>
                <div class="p-img"><a href="goods.php?id=634" target="_blank" title="新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮"><img src="/shop/public/static/index/img/0_thumb_G_1489102753231.jpg" width="140" height="140"></a></div>
                <div class="p-name"><a href="goods.php?id=634" target="_blank" title="新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮">新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮</a></div>
                <div class="price">
    <em>¥</em>300.00				
                </div>
            </li>
    <li>
                <div class="p-img"><a href="goods.php?id=864" target="_blank" title="马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品"><img src="/shop/public/static/index/img/0_thumb_G_1490211620029.jpg" width="140" height="140"></a></div>
                <div class="p-name"><a href="goods.php?id=864" target="_blank" title="马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品">马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品</a></div>
                <div class="price">
    <em>¥</em>128.00				
                </div>
            </li>
    <li>
                <div class="p-img"><a href="goods.php?id=785" target="_blank" title="森马夹克 2016冬装新款男士飞行夹克贴布绣立领休闲外套韩版潮流"><img src="/shop/public/static/index/img/0_thumb_G_1490174208112.jpg" width="140" height="140"></a></div>
                <div class="p-name"><a href="goods.php?id=785" target="_blank" title="森马夹克 2016冬装新款男士飞行夹克贴布绣立领休闲外套韩版潮流">森马夹克 2016冬装新款男士飞行夹克贴布绣立领休闲外套韩版潮流</a></div>
                <div class="price">
    <em>¥</em>199.90				
                </div>
            </li>
    <li>
                <div class="p-img"><a href="goods.php?id=625" target="_blank" title="秋季新款男士套头卫衣印花外套韩版简约百搭潮流男生上衣服"><img src="/shop/public/static/index/img/0_thumb_G_1489099437211.jpg" width="140" height="140"></a></div>
                <div class="p-name"><a href="goods.php?id=625" target="_blank" title="秋季新款男士套头卫衣印花外套韩版简约百搭潮流男生上衣服">秋季新款男士套头卫衣印花外套韩版简约百搭潮流男生上衣服</a></div>
                <div class="price">
    <em>¥</em>120.00				
                </div>
            </li>
</ul>
    </div>
    <div class="track-more">
        <a href="javascript:void(0);" class="sprite-up"><i class="iconfont icon-up"></i></a>
        <a href="javascript:void(0);" class="sprite-down"><i class="iconfont icon-down"></i></a>
    </div>
</div>
                </div>
            <div class="clear"></div>
            </div>
            
 
            <div class="goods-main-layout">
            	<div class="g-m-left">
<div class="g-main g-store-info" ectype="gm-tabs">
	<div class="mt">
		<h3>童攀课堂</h3>
					<a id="IM" onclick="openWin(this)" href="javascript:;" goods_id="799" class="s-a-kefu"><i class="icon i-kefu"></i></a>
			</div>
	<div class="mc">
		<div class="mc-warp">
			<div class="g-s-brand">
		<a href="brand.php?id=160" target="_blank"><img src="/shop/public/static/index/img/1490074901892372216.jpg" /></a>
</div>
		</div>
	</div>
</div>
        <div class="g-main service_list">
        <div class="mt"><h3>店内客服</h3></div>
        <div class="mc">
            <ul>
                <li class="service_qq"><a href="http://wpa.qq.com/msgrd?v=3&uin=349488953&site=qq&menu=yes" target="_blank"><i class="icon i-kefu"></i><span>客服一</span></a></li>
                <li class="service_qq"><a href="http://wpa.qq.com/msgrd?v=3&uin=1234567&site=qq&menu=yes" target="_blank"><i class="icon i-kefu"></i><span>客服二</span></a></li>
        </ul>
        </div>
    </div>
    

<div class="g-main">
	<div class="mt">
        <h3>相关分类</h3>
    </div>
    <div class="mc">
        <div class="mc-warp">
        	<div class="items">
        <div class="item"><a href="category.php?id=349" target="_blank">连衣裙</a></div>
    <div class="item"><a href="category.php?id=350" target="_blank">蕾丝/雪纺衫</a></div>
    <div class="item"><a href="category.php?id=351" target="_blank">衬衫</a></div>
    <div class="item"><a href="category.php?id=352" target="_blank">T恤</a></div>
    <div class="item"><a href="category.php?id=354" target="_blank">半身裙</a></div>
    <div class="item"><a href="category.php?id=356" target="_blank">休闲裤</a></div>
    <div class="item"><a href="category.php?id=358" target="_blank">短裤</a></div>
    <div class="item"><a href="category.php?id=361" target="_blank">牛仔裤</a></div>
    <div class="item"><a href="category.php?id=363" target="_blank">针织衫</a></div>
    <div class="item"><a href="category.php?id=365" target="_blank">吊带/背心</a></div>
                </div>
        </div>
    </div>
</div>

<div class="g-main">
	<div class="mt">
        <h3>同类其他品牌</h3>
    </div>
    <div class="mc">
        <div class="mc-warp">
        	<div class="items">
            <div class="item"><a href="brand.php?id=160" target="_blank">美的</a></div>
        </div>
        </div>
    </div>
</div>


					

<div class="g-main g-rank">
    <div class="mc">
        <ul class="mc-tab" ectype="rankMcTab">
        	<li class="curr">新品</li>            <li>推荐</li>            <li>热销</li>        </ul>
    	<div class="mc-content">
                
                
<div class="mc-main" style="display:block;">
	<div class="mcm-left">
		<div class="spirit"></div>
				<div class="rank-number rank-number1">1</div>
				<div class="rank-number rank-number2">2</div>
				<div class="rank-number rank-number3">3</div>
			</div>
	<div class="mcm-right">
		<ul>
<li>
				<div class="p-img"><a href="goods.php?id=864" title="马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品"><img src="/shop/public/static/index/img/0_thumb_G_1490211620029.jpg" width="130" height="130"></a></div>
				<div class="p-name"><a href="goods.php?id=864" title="马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品">马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品</a></div>
				<div class="p-price">
					<em>¥</em>128.00			</div>
			</li>
<li>
				<div class="p-img"><a href="goods.php?id=863" title="马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98"><img src="/shop/public/static/index/img/0_thumb_G_1490211575591.jpg" width="130" height="130"></a></div>
				<div class="p-name"><a href="goods.php?id=863" title="马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98">马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98</a></div>
				<div class="p-price">
					<em>¥</em>98.00			</div>
			</li>
<li>
				<div class="p-img"><a href="goods.php?id=865" title="美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购"><img src="/shop/public/static/index/img/0_thumb_G_1490211700709.jpg" width="130" height="130"></a></div>
				<div class="p-name"><a href="goods.php?id=865" title="美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购">美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购</a></div>
				<div class="p-price">
					<em>¥</em>89.00			</div>
			</li>
					</ul>
	</div>
</div>
                 
                
                
<div class="mc-main" style="display:block;">
	<div class="mcm-left">
		<div class="spirit"></div>
				<div class="rank-number rank-number1">1</div>
				<div class="rank-number rank-number2">2</div>
				<div class="rank-number rank-number3">3</div>
			</div>
	<div class="mcm-right">
		<ul>
<li>
				<div class="p-img"><a href="goods.php?id=864" title="马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品"><img src="/shop/public/static/index/img/0_thumb_G_1490211620029.jpg" width="130" height="130"></a></div>
				<div class="p-name"><a href="goods.php?id=864" title="马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品">马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品</a></div>
				<div class="p-price">
					<em>¥</em>128.00			</div>
			</li>
<li>
				<div class="p-img"><a href="goods.php?id=863" title="马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98"><img src="/shop/public/static/index/img/0_thumb_G_1490211575591.jpg" width="130" height="130"></a></div>
				<div class="p-name"><a href="goods.php?id=863" title="马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98">马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98</a></div>
				<div class="p-price">
					<em>¥</em>98.00			</div>
			</li>
<li>
				<div class="p-img"><a href="goods.php?id=865" title="美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购"><img src="/shop/public/static/index/img/0_thumb_G_1490211700709.jpg" width="130" height="130"></a></div>
				<div class="p-name"><a href="goods.php?id=865" title="美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购">美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购</a></div>
				<div class="p-price">
					<em>¥</em>89.00			</div>
			</li>
					</ul>
	</div>
</div>
                 
                
                
<div class="mc-main" style="display:block;">
	<div class="mcm-left">
		<div class="spirit"></div>
				<div class="rank-number rank-number1">1</div>
				<div class="rank-number rank-number2">2</div>
				<div class="rank-number rank-number3">3</div>
			</div>
	<div class="mcm-right">
		<ul>
<li>
				<div class="p-img"><a href="goods.php?id=864" title="马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品"><img src="/shop/public/static/index/img/0_thumb_G_1490211620029.jpg" width="130" height="130"></a></div>
				<div class="p-name"><a href="goods.php?id=864" title="马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品">马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品</a></div>
				<div class="p-price">
					<em>¥</em>128.00			</div>
			</li>
<li>
				<div class="p-img"><a href="goods.php?id=863" title="马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98"><img src="/shop/public/static/index/img/0_thumb_G_1490211575591.jpg" width="130" height="130"></a></div>
				<div class="p-name"><a href="goods.php?id=863" title="马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98">马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98</a></div>
				<div class="p-price">
					<em>¥</em>98.00			</div>
			</li>
<li>
				<div class="p-img"><a href="goods.php?id=865" title="美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购"><img src="/shop/public/static/index/img/0_thumb_G_1490211700709.jpg" width="130" height="130"></a></div>
				<div class="p-name"><a href="goods.php?id=865" title="美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购">美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购</a></div>
				<div class="p-price">
					<em>¥</em>89.00			</div>
			</li>
					</ul>
	</div>
</div>
                 
            </div>
        </div>
    </div>


<div class="g-main g-history">
	<div class="mt">
		<h3>最近浏览</h3>
		<a onclick="clear_history()" class="clear_history ftx-05 fr mt10 mr10" href="javascript:void(0);">清空</a>
	</div>
	<div class="mc">
		<div class="mc-warp" id="history_list" ectype="history_mian">
			<ul>
				                				<li>
					<div class="p-img"><a href="goods.php?id=799" target="_blank" title="韩美格2017春秋新款修身大码蕾丝网纱打底衫女长袖薄款圆领女T恤 全店商品 二件减5元 三件减10"><img src="/shop/public/static/index/img/0_thumb_G_1490174858999.jpg" width="170" height="170"></a></div>
<div class="p-name"><a href="goods.php?id=799" target="_blank">韩美格2017春秋新款修身大码蕾丝网纱打底衫女长袖薄款圆领女T恤 全店商品 二件减5元 三件减10</a></div>
					<div class="p-lie">
<div class="p-price">
			<em>¥</em>68.00	</div>
					</div>
				</li>
                				                				<li>
					<div class="p-img"><a href="goods.php?id=626" target="_blank" title="秋冬新款加绒圆领套头卫衣男青年男生韩版潮流学生休闲外套男"><img src="/shop/public/static/index/img/0_thumb_G_1489099544749.jpg" width="170" height="170"></a></div>
<div class="p-name"><a href="goods.php?id=626" target="_blank">秋冬新款加绒圆领套头卫衣男青年男生韩版潮流学生休闲外套男</a></div>
					<div class="p-lie">
<div class="p-price">
			<em>¥</em>168.00	</div>
					</div>
				</li>
                				                				<li>
					<div class="p-img"><a href="goods.php?id=865" target="_blank" title="美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购"><img src="/shop/public/static/index/img/0_thumb_G_1490211700709.jpg" width="170" height="170"></a></div>
<div class="p-name"><a href="goods.php?id=865" target="_blank">美特斯邦威长袖T恤男士2017春装新款时尚印花百搭205064商场同款 1元秒100元优惠券丨限量抢丨立即抢购</a></div>
					<div class="p-lie">
<div class="p-price">
			<em>¥</em>89.00	</div>
					</div>
				</li>
                				                				<li>
					<div class="p-img"><a href="goods.php?id=775" target="_blank" title="韩都衣舍2017韩版女装春装新款条纹显瘦百搭宽松v领七分袖衬衫潮 领券立减/单件包邮/七天无理由退换"><img src="/shop/public/static/index/img/0_thumb_G_1490169281436.jpg" width="170" height="170"></a></div>
<div class="p-name"><a href="goods.php?id=775" target="_blank">韩都衣舍2017韩版女装春装新款条纹显瘦百搭宽松v领七分袖衬衫潮 领券立减/单件包邮/七天无理由退换</a></div>
					<div class="p-lie">
<div class="p-price">
			<em>¥</em>78.00	</div>
					</div>
				</li>
                				                				<li>
					<div class="p-img"><a href="goods.php?id=768" target="_blank" title="韩都衣舍2017韩版女装夏装新款时尚修身显瘦圆领条纹T恤OGY7711娋 显瘦版型 舒适面料 条纹元素"><img src="/shop/public/static/index/img/0_thumb_G_1490169030833.jpg" width="170" height="170"></a></div>
<div class="p-name"><a href="goods.php?id=768" target="_blank">韩都衣舍2017韩版女装夏装新款时尚修身显瘦圆领条纹T恤OGY7711娋 显瘦版型 舒适面料 条纹元素</a></div>
					<div class="p-lie">
<div class="p-price">
			<em>¥</em>88.00	</div>
					</div>
				</li>
                				                				                				                				                				                	</ul>
		</div>
	</div>
</div>




                </div>
                <div class="g-m-detail">
                	<div class="gm-tabbox" ectype="gm-tabs">
	<ul class="gm-tab">
        <li class="curr" ectype="gm-tab-item">商品详情</li>
                <li ectype="gm-tab-item">用户评论（<em class="ReviewsCount">0</em>）</li>
        <li ectype="gm-tab-item">网友讨论圈</li>
    </ul>
    <div class="extra">
    	<div class="item">
		            <div class="si-phone-code">
                <div class="qrcode-wrap">
<div class="qrcode_tit">手机购买<i class="iconfont icon-qr-code"></i></div>
<div class="qrcode_pop">
    <div class="mobile-qrcode"><img src="/shop/public/static/index/img/weixin_code_799.png" alt="商品二维码" title="" width="175"></div>
</div>
                </div>
            </div>
		        	<div class="inner">
            	<a href="javascript:void(0)" class="btn sc-redBg-btn" id="btn-anchor" ectype="tb-tab-anchor">加入购物车</a>
            	<div class="tb-popsku">
                	<span class="arrow-top"></span>
<div class="tb-popsku-content">
	<div class="tb-list">
    	<div class="tb-label">价格：</div>
        <div class="tb-value"><strong class="shop-price" ectype="SHOP_PRICE"></strong></div>
    </div>
    	<div class="tb-list">
    	<div class="tb-label">数量：</div>
<div class="tb-value">
	<div class="amount-warp">
		<input class="text buy-num" ectype="quantity" value="1" name="number" defaultnumber="1">
		<div class="a-btn">
			<a href="javascript:void(0);" class="btn-add" ectype="btnAdd"><i class="iconfont icon-up"></i></a>
			<a href="javascript:void(0);" class="btn-reduce btn-disabled" ectype="btnReduce"><i class="iconfont icon-down"></i></a>
		</div>
		<input name="confirm_type" id="confirm_type" type="hidden" value="3" />
	</div>
	<span class="lh30 ml10">库存&nbsp;<em ectype="goods_attr_num"></em>&nbsp;个</span>
</div>
					</div>
    <div class="tb-list">
    	<div class="tb-label">&nbsp;</div>
        <div class="tb-value">
	<a href="javascript:bool=0;addToCartShowDiv(799)" class="cz-btn cz-btn-true" ectype="btn-append">确定</a>
            <a href="javascript:void(0);" class="cz-btn cz-btn-false" ectype="tb-cancel">取消</a>
        </div>
    </div>
</div>
                </div>
            </div>
        </div>
    </div>
    <div class="gm-tab-qp-bort" ectype="qp-bort"></div>
</div>
<div class="gm-floors" ectype="gm-floors">
    <div class="gm-f-item gm-f-details" ectype="gm-item">
        <div class="gm-title">
            <h3>商品详情</h3>
        </div>
        <div class="goods-para-list">
            <dl class="goods-para">
                <dd class="column"><span>商品名称：韩美格2017春秋新款修身大码蕾丝网纱打底衫女长袖薄款圆领女T恤 全店商品 二件减5元 三件减10</span></dd>
                <dd class="column"><span>商品编号：ECS000799</span></dd>
                <dd class="column"><span>店铺：<a href="" title="童攀课堂" target="_blank">童攀课堂</a></span></dd>
            <dd class="column"><span>重量：0克</span></dd>
        <dd class="column"><span>上架时间：2017-03-23 01:27:47</span></dd>
        </dl>
        
    </div>
        
            </div>
        <div class="gm-f-item gm-f-comment" ectype="gm-item">
        <div class="gm-title">
            <h3>评论晒单</h3>
            <ul class="gm-f-tab" ectype="gmf-tab">
    <li class="curr" rev="0"><a href="javascript:;">全部<em>(0)</em></a></li>
    <li rev="1"><a href="javascript:;">好评<em>(0)</em></a></li>
    <li rev="2"><a href="javascript:;">中评<em>(0)</em></a></li>
    <li rev="3" class="last"><a href="javascript:;">差评<em>(0)</em></a></li>
</ul>        </div>
        <div class="gm-warp">
            <div class="praise-rate-warp">
                <div class="rate">
<strong>100</strong>
<span class="rate-span">
    <span class="tit">好评率</span>
    <span class="bf">%</span>
</span>
                </div>
                <div class="actor-new">
<div class="not_impression">此商品还没有设置买家印象，陪我一起等下嘛~</div>
                </div>
            </div>
            <div class="com-list-main">
            
<div id="ECS_COMMENT"> <div class="no_records no_comments_qt">
    <i class="no_icon no_icon_three"></i>
    <span class="block">暂无评价</span>
</div>

<script type="text/javascript">
	$(function(){
		$("*[ectype='replySubmit']").click(function(){
			var T = $(this);
			var comment_id = T.data("value");
			var reply_content = $("#reply_content" + comment_id).val();
			var user_id = $("#comment_user" + comment_id).val();
			var goods_id = $("#comment_goods" + comment_id).val();
			
			if(reply_content == ''){
				$("#reply-error" + comment_id).html(json_languages.please_message_input);
				return false;
			}

			Ajax.call('comment.php', 'act=comment_reply&comment_id=' + comment_id + '&reply_content=' + reply_content + '&goods_id=' + goods_id + '&user_id=' + user_id, commentReplyResponse, 'POST', 'JSON');
		});
		
		$('.comment_nice').click(function(){
			var T = $(this);
			var comment_id = T.data('commentid');
			var goods_id = T.data('idvalue');
			var type = 'comment';
			
			Ajax.call('comment.php', 'act=add_useful&id=' + comment_id + '&goods_id=' + goods_id + '&type=' + type, niceResponse, 'GET', 'JSON');
		});
	});
	
	function commentReplyResponse(res){
		if(res.err_no == 1){
			var back_url = res.url;
			$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
			return false;
		}else if(res.err_no == 2){
			$("#reply-error" + res.comment_id).html(json_languages.been_evaluated);
		}else{
			$("#reply-error" + res.comment_id).html(json_languages.Add_success);
			$("#reply_content" + res.comment_id).val('');
			$("#reply-textarea" + res.comment_id).addClass('hide');
            $(".reply-count").addClass('red');
		}
		$(".comment-reply" + res.comment_id).html(res.content);
		$(".reply-count" + res.comment_id).html(res.reply_count);
	}
	
	function niceResponse(res){
		if(res.err_no == 1){
			var back_url = res.url;
			$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
			return false;
		}else if(res.err_no == 0){
			$(".reply-nice" + res.id).html(res.useful);
            $(".comment_nice").addClass("selected");
		}
	}
</script></div>            </div>
        </div>
    </div>
    <div class="gm-f-item gm-f-tiezi" ectype="gm-item">
        <div class="gm-title">
    <h3>网友讨论圈</h3>
    <div class="gm-f-tab">
        <a href="javascript:void(0);" class="dis_type curr" rev="0" revType="1">全部帖子(0)</a>
        <a href="javascript:void(0);" class="dis_type" rev="4" revType="1">晒单帖(0)</a>
        <a href="javascript:void(0);" class="dis_type" rev="1" revType="1">讨论帖(0)</a>
        <a href="javascript:void(0);" class="dis_type" rev="2" revType="1">问答帖(0)</a>
        <a href="javascript:void(0);" class="dis_type" rev="3" revType="1">圈子帖(0)</a>
    </div>
</div>        <div class="table" id='discuss_list_ECS_COMMENT'>
                <div class="thead">
        <div class="th td1">主题</div>
        <div class="th td2">回复</div>
        <div class="th td3">浏览</div>
        <div class="th td4">作者</div> 
        <div class="th td5">时间</div>
    </div>
    <div class="tbody">
    	        <div class="no_records no_comments_qt">
            <i class="no_icon no_icon_three"></i>
            <span class="block">暂无讨论帖</span>
        </div>
            </div>
    <div class="clear"></div>
    <div class="s-more">
        <a href="category_discuss.php?id=799" target="_blank"><span class="sm-wrap">点击浏览全部<i class="iconfont icon-right"></i></span></a>
    </div>        </div>
    </div>
</div>
                </div>
                <div class="clear"></div>
                <div class="rection">
                	<div class="ftit"><h3>猜你喜欢</h3></div>
<ul>
            <li>
        <div class="p-img"><a href="goods.php?id=684" target="_blank"><img src="/shop/public/static/index/img/0_thumb_G_1489109583798.jpg" width="134" height="134"></a></div>
        <div class="p-name"><a href="goods.php?id=684" target="_blank">【情侣款】Camel骆驼男靴 时尚潮流英伦风马丁靴高帮皮靴 爆卖1万双！ 情侣马丁靴 好评如潮</a></div>
        <div class="p-price"><em>¥</em>555.00</div>
    </li>
                <li>
        <div class="p-img"><a href="goods.php?id=685" target="_blank"><img src="/shop/public/static/index/img/0_thumb_G_1489109633806.jpg" width="134" height="134"></a></div>
        <div class="p-name"><a href="goods.php?id=685" target="_blank">春季马丁靴男真皮男靴黄靴工装军靴韩版短靴沙漠靴高帮男鞋大黄靴 头层牛皮</a></div>
        <div class="p-price"><em>¥</em>1000.00</div>
    </li>
                <li>
        <div class="p-img"><a href="goods.php?id=679" target="_blank"><img src="/shop/public/static/index/img/0_thumb_G_1489108999364.jpg" width="134" height="134"></a></div>
        <div class="p-name"><a href="goods.php?id=679" target="_blank">特步女鞋2017春季新款运动鞋休闲鞋女慢跑步鞋旅游鞋轻便舒适时尚 早春特惠 爆款休闲女鞋 赠运费险</a></div>
        <div class="p-price"><em>¥</em>200.00</div>
    </li>
                <li>
        <div class="p-img"><a href="goods.php?id=634" target="_blank"><img src="/shop/public/static/index/img/0_thumb_G_1489102753231.jpg" width="134" height="134"></a></div>
        <div class="p-name"><a href="goods.php?id=634" target="_blank">新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮</a></div>
        <div class="p-price"><em>¥</em>300.00</div>
    </li>
                <li>
        <div class="p-img"><a href="goods.php?id=683" target="_blank"><img src="/shop/public/static/index/img/0_thumb_G_1489109337889.jpg" width="134" height="134"></a></div>
        <div class="p-name"><a href="goods.php?id=683" target="_blank">igtt铝框行李箱拉杆箱旅行箱万向轮男女20/24/26寸密码箱登机箱子 铝合金框 加强密码锁 万向轮 终身保修</a></div>
        <div class="p-price"><em>¥</em>330.00</div>
    </li>
    </ul>                </div>
            </div>
        </div>
        
        <div class="hidden">
            
            <div id="notify_box" class="hide">
                <div class="sale-notice">
<div class="prompt">一旦商品在30日内降价，您将收到邮件、短信和手机推送消息！通过手机客户端消息提醒，购买更便捷~</div>
<div class="user-form foreg-form">
    <div class="form-row">
        <div class="form-label"><em class="red">*</em>价格低于：</div>
        <div class="form-value">
            <input type="text" id="price-notice" name="price-notice" class="form-input w120 fl">
            <div class="notic">时，通知我</div>
            <div class="error"></div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-label"><em class="red">*</em>手机号码：</div>
        <div class="form-value">
            <input type="text" class="form-input" id="cellphone" name="cellphone">
            <div class="error"></div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-label"><em class="red">*</em>邮箱地址：</div>
        <div class="form-value">
            <input type="text" class="form-input" id="user_email_notice" name="email">
            <div class="error"></div>
        </div>
    </div>
</div>
                </div>
            </div>
            
            
            <div class="ecsc-cart-popup" id="addtocartdialog">
                <div class="loading-mask"></div>
                <div class="loading">
<div class="center_pop_txt">
    <div class="title"><h3>提示</h3><a href="javascript:loadingClose();" title="关闭" class="loading-x">X</a></div>
</div>
<div class="btns">
    <a href="flow.php" class="ecsc-btn-mini ecsc-btn-orange">去付款</a>
    <a href="javascript:loadingClose();" class="ecsc-btn-mini">继续购物</a>
</div>
                </div>
            </div>
        </div>
        
        	 
		
<div class="duibi_box" id="slideTxtBox">
    <div class="parWarp">
        <div class="parTit">对比栏</div>
        <div class="parBd">
            <div class="slideBox5" id="duibilan">
                <div id="diff-items" class="diff-items clearfix">
<dl class="hasItem" id="compare_goods1">  
    <dt><h1>1</h1></dt>
    <dd><span class="ts">您还可以继续添加</span></dd>
</dl>
<dl class="hasItem" id="compare_goods2">  
    <dt><h1>2</h1></dt>
    <dd><span class="ts">您还可以继续添加</span></dd>
</dl>
<dl class="hasItem" id="compare_goods3">  
    <dt><h1>3</h1></dt>
    <dd><span class="ts">您还可以继续添加</span></dd>
</dl>
<dl class="hasItem" id="compare_goods4">  
    <dt><h1>4</h1></dt>
    <dd><span class="ts">您还可以继续添加</span></dd>
</dl>
                </div>
                <div class="diff-operate">
                	<a id="compare_button" class="compare-active"></a>
					<a id="qingkong" class="del-items">清空对比栏</a>
<a href="javascript:;" class="hide-me" ectype="db_hide">隐藏</a>
                </div>
            </div>
        </div>
    </div>
</div>
        
        
        
  
<div class="tm-dl-overlay tm-dl-overlay-hidden">
	<a href="javascript:void('close')" class="tm-dl-overlay-close"><b></b><i></i></a>
  	<div class="tm-dl-overlay-content"></div>
</div>
<div class="tm-dl-overlay-mask"></div>
     </div>
   	 <div class="footer-new">
    <div class="footer-new-top">
    	<div class="w w1200">
            <div class="service-list">
<div class="service-item">
    <i class="f-icon f-icon-qi"></i>
    <span>七天包退</span>
</div>
<div class="service-item">
    <i class="f-icon f-icon-zheng"></i>
    <span>正品保障</span>
</div>
<div class="service-item">
    <i class="f-icon f-icon-hao"></i>
    <span>好评如潮</span>
</div>
<div class="service-item">
    <i class="f-icon f-icon-shan"></i>
    <span>闪电发货</span>
</div>
<div class="service-item">
    <i class="f-icon f-icon-quan"></i>
    <span>权威荣誉</span>
</div>
            </div>
            <div class="contact">
<div class="contact-item contact-item-first"><i class="f-icon f-icon-tel"></i><span>4000-000-000</span></div>
<div class="contact-item">
	    <a id="IM" im_type="dsc" onclick="openWin(this)" href="javascript:;" class="btn-ctn"><i class="f-icon f-icon-kefu"></i><span>咨询客服</span></a>
    </div>
            </div>
        </div>
    </div>
    <div class="footer-new-con">
    	<div class="fnc-warp">
            <div class="help-list">
<div class="help-item">
    <h3>新手上路 </h3>
    <ul>
            <li><a href="#">售后流程</a></li>
<li><a href="#">购物流程</a></li>
<li><a href="#">订购方式</a></li>
    </ul>

</div>
<div class="help-item">
    <h3>配送与支付 </h3>
    <ul>
            <li><a href="#">货到付款区域</a></li>
<li><a href="#">配送支付智能查询</a></li>
<li><a href="#">支付方式说明</a></li>
    </ul>

</div>
<div class="help-item">
    <h3>会员中心</h3>
    <ul>
            <li><a href="#">资金管理</a></li>
<li><a href="#">我的收藏</a></li>
<li><a href="#">我的订单</a></li>
            </ul>

</div>
<div class="help-item">
    <h3>服务保证 </h3>
    <ul>
            <li><a href="#">退换货原则</a></li>
<li><a href="#">售后服务保证</a></li>
<li><a href="#">产品质量保证</a></li>
            </ul>

</div>
<div class="help-item">
    <h3>联系我们 </h3>
    <ul>
            <li><a href="#">网站故障报告</a></li>
<li><a href="#">选机咨询</a></li>
<li><a href="#">投诉与建议</a></li>
            </ul>

</div>
  
            </div>
            <div class="qr-code">
<div class="qr-item qr-item-first">
    <div class="code_img"><img src="/shop/public/static/index/img/ecjia_qrcode.png"></div>
    <div class="code_txt">官方网址</div>
</div>
<div class="qr-item">
    <div class="code_img"><img src="/shop/public/static/index/img/ectouch_qrcode.png"></div>
    <div class="code_txt">在线课程</div>
</div>
            </div>
    	</div>
    </div>
    <div class="footer-new-bot">
    	<div class="w w1200">
             
            <p class="copyright_links">
<a href="#">首页</a>
 
<span class="spacer"></span>
 
<a href="#">隐私保护</a>
 
<span class="spacer"></span>
 
<a href="#">联系我们</a>
 
<span class="spacer"></span>
 
<a href="#">免责条款</a>
 
<span class="spacer"></span>
 
<a href="#">公司简介</a>
 
<span class="spacer"></span>
 
<a href="#">意见反馈</a>
 
 
            </p>
        
        <p><span>©&nbsp;2015-2017&nbsp;tongpankt.com&nbsp;版权所有&nbsp;&nbsp;</span><span>ICP备案证书号:</span><a href="#">豫ICP备*****号-1</a>&nbsp;<a href="#">POWERED by童攀课堂</a></p>
        
        <p class="copyright_auth">&nbsp;</p>
    </div>
    </div>
    
    
    <div class="hide" id="pd_coupons">
        <span class="success-icon m-icon"></span>
        <div class="item-fore">
            <h3>领取成功！感谢您的参与，祝您购物愉快~</h3>
            <div class="txt ftx-03">本活动为概率性事件，不能保证所有客户成功领取优惠券</div>
        </div>
    </div>
    
    
    <div class="hidden">
        <input name="seller_kf_IM" value="" rev="" ru_id="" type="hidden">
        <input name="seller_kf_qq" value="349488953" type="hidden">
        <input name="seller_kf_tel" value="4000-000-000" type="hidden">
        <input name="user_id" value="62" type="hidden">
    </div>
</div>
     <div class="mui-mbar-tabs">
    <div class="quick_link_mian" data-userid="62">
        <div class="quick_links_panel">
            <div id="quick_links" class="quick_links">
                <ul>
<li>
    <a href="user.php"><i class="setting"></i></a>
    <div class="ibar_login_box status_login">
        <div class="avatar_box">
            <p class="avatar_imgbox">
            <img src="/shop/public/static/index/img/touxiang.jpg" width="100" height="100"/>
        </p>
            <ul class="user_info">
                <li>用户名：86913361-232247</li>
                <li>级&nbsp;别：铜牌</li>
            </ul>
        </div>
        <div class="login_btnbox">
            <a href="user.php?act=order_list" class="login_order">我的订单</a>
            <a href="user.php?act=collection_list" class="login_favorite">我的收藏</a>
        </div>
        <i class="icon_arrow_white"></i>
    </div>
</li>

<li id="shopCart">
    <a href="javascript:void(0);" class="cart_list">
        <i class="message"></i>
        <div class="span">购物车</div>
        <span class="cart_num">1</span>
    </a>
</li>
<li>
    <a href="javascript:void(0);" class="mpbtn_order"><i class="chongzhi"></i></a>
    <div class="mp_tooltip">
        <font id="mpbtn_money" style="font-size:12px; cursor:pointer;">我的订单</font>
        <i class="icon_arrow_right_black"></i>
    </div>
</li>
<li>
    <a href="javascript:void(0);" class="mpbtn_yhq"><i class="yhq"></i></a>
    <div class="mp_tooltip">
        <font id="mpbtn_money" style="font-size:12px; cursor:pointer;">优惠券</font>
        <i class="icon_arrow_right_black"></i>
    </div>
</li>
<li>
    <a href="javascript:void(0);" class="mpbtn_total"><i class="view"></i></a>
    <div class="mp_tooltip" style=" visibility:hidden;">
        <font id="mpbtn_myMoney" style="font-size:12px; cursor:pointer;">我的资产</font>
        <i class="icon_arrow_right_black"></i>
    </div>
</li>
<li>
    <a href="javascript:void(0);" class="mpbtn_history"><i class="zuji"></i></a>
    <div class="mp_tooltip">
        <font id="mpbtn_histroy" style="font-size:12px; cursor:pointer;">我的足迹</font>
        <i class="icon_arrow_right_black"></i>
    </div>
</li>
<li>
    <a href="javascript:void(0);" class="mpbtn_collection"><i class="wdsc"></i></a>
    <div class="mp_tooltip">
        <font id="mpbtn_wdsc" style="font-size:12px; cursor:pointer;">我的收藏</font>
        <i class="icon_arrow_right_black"></i>
    </div>
</li>
<li>
    <a href="javascript:void(0);" class="mpbtn_email"><i class="email"></i></a>
    <div class="mp_tooltip">
        <font id="mpbtn_email" style="font-size:12px; cursor:pointer;">邮箱订阅</font>
        <i class="icon_arrow_right_black"></i>
    </div>
</li>
                </ul>
            </div>
            <div class="quick_toggle">
                <ul>
<li>
    
    
    <a id="IM" IM_type="dsc" onclick="openWin(this)" href="javascript:;"><i class="kfzx"></i></a>
        <div class="mp_tooltip">客服中心<i class="icon_arrow_right_black"></i></div>
    
</li>
<li class="returnTop">
    <a href="javascript:void(0);" class="return_top"><i class="top"></i></a>
</li>
                </ul>

            </div>
        </div>
        <div id="quick_links_pop" class="quick_links_pop"></div>
    </div>
</div>
<div class="email_sub">
    <div class="attached_bg"></div>
    <div class="w1200">
        <div class="email_sub_btn">
            <input type="input" id="user_email" name="user_email" autocomplete="off" placeholder="请输入您的邮箱帐号">
            <a href="javascript:void(0);" onClick="add_email_list();" class="emp_btn">订阅</a>
        </div>
    </div>
</div>    
<script type="text/javascript" src="/shop/public/static/index/js/suggest.js"></script><script type="text/javascript" src="/shop/public/static/index/js/scroll_city.js"></script><script type="text/javascript" src="/shop/public/static/index/js/utils.js"></script>
<script type="text/javascript" src="/shop/public/static/index/js/warehouse.js"></script><script type="text/javascript" src="/shop/public/static/index/js/warehouse_area.js"></script>
    
    <script type="text/javascript" src="/shop/public/static/index/js/jquery.SuperSlide.2.1.1.js"></script><script type="text/javascript" src="/shop/public/static/index/js/jquery.yomi.js"></script><script type="text/javascript" src="/shop/public/static/index/js/common.js"></script><script type="text/javascript" src="/shop/public/static/index/js/compare.js"></script><script type="text/javascript" src="/shop/public/static/index/js/cart_common.js"></script><script type="text/javascript" src="/shop/public/static/index/js/magiczoomplus.js"></script><script type="text/javascript" src="/shop/public/static/index/js/cart_quick_links.js"></script>    <script type="text/javascript" src="/shop/public/static/index/js/calendar.php?lang="></script>
	<script type="text/javascript" src="/shop/public/static/index/js/perfect-scrollbar.min.js"></script>
	<script type="text/javascript" src="/shop/public/static/index/js/dsc-common.js"></script>
    <script type="text/javascript" src="/shop/public/static/index/js/jquery.purebox.js"></script>
    <script type="text/javascript" src="/shop/public/static/index/js/goodsFittings.js"></script>
   
	<script type="text/javascript">
	//商品详情
	goods_desc_floor();
	
	//商品相册小图滚动
	$(".spec-list").slide({mainCell:".spec-items ul",effect:"left",trigger:"click",pnLoop:false,autoPage:true,scroll:1,vis:5,prevCell:".spec-prev",nextCell:".spec-next"});
	
	//右侧看了又看上下滚动
	$(".track_warp").slide({mainCell:".track-con ul",effect:"top",pnLoop:false,autoPlay:false,autoPage:true,prevCell:".sprite-up",nextCell:".sprite-down",vis:3});
	
	//商品搭配切换
	$(".combo-inner").slide({titCell:".tab-nav li",mainCell:".tab-content",titOnClassName:"curr",trigger:"click"});
	
	//商品搭配 多个商品滚动切换
	$(".combo-items").slide({mainCell:".combo-items-warp ul",effect:"left",pnLoop:false,autoPlay:false,autoPage:true,prevCell:".o-prev",nextCell:".o-next",vis:4});
	
	//左侧新品 热销 推荐排行切换
	$(".g-rank").slide({titCell:".mc-tab li",mainCell:".mc-content",titOnClassName:"curr",trigger:"click"});
	
		
	//全局变量
	var seller_id = 0;
	var goods_id = 799;
	var goodsId = 799;
	var goodsattr_style = 1;
	var gmt_end_time = 0;
	var now_time = 1507503012;
	var isReturn = false;
	$(function(){
		
		if(seller_id > 0){
			goods_collect_store(seller_id);
		}
		
		//对比默认加载
		Compare.init();
	});
	
	/******************************************* js方法 start***********************************************/
	
	var add_shop_price = $("*[ectype='add_shop_price']").val();
	
	/* 点击可选属性或改变数量时修改商品价格的函数 */
	function changePrice(onload){
		var qty = $("*[ectype='quantity']").val();
		var goods_attr_id = '';
		var goods_attr = '';
		var attr_id = '';
		var attr = '';
		
		goods_attr_id = getSelectedAttributes(document.forms['ECS_FORMBUY']);
		
		if(onload != 'onload'){
			if(add_shop_price == 0){
				attr_id = getSelectedAttributesGroup(document.forms['ECS_FORMBUY']);
				goods_attr = '&goods_attr=' + attr_id;
			}
			Ajax.call('goods.php', 'act=price&id=' + goodsId + '&attr=' + goods_attr_id + goods_attr + '&number=' + qty + '&warehouse_id=' + 2 + '&area_id=' + 16, changePriceResponse, 'GET', 'JSON');
		}else{
			if(add_shop_price == 1){
				attr = '&attr=' + goods_attr_id;
			}
			Ajax.call('goods.php', 'act=price&id=' + goodsId + attr + '&number=' + qty + '&warehouse_id=' + 2 + '&area_id=' + 16 + '&onload=' + onload, changePriceResponse, 'GET', 'JSON');
		}
	}
	/* 接收返回的信息 回调函数 */
	function changePriceResponse(res){
		if(res.err_msg.length > 0){
			pbDialog(res.err_msg," ",0,450,80,50);
		}else{
			//商品条形码
			if($("#bar_code").length > 0){
				if(res.bar_code){
					$("#bar_code").html(res.bar_code);
					$("#bar_code").parents(".bar_code").removeClass("hide");
				}else{
					$("#bar_code").parents(".bar_code").addClass("hide");
				}
			}
			
			$("#cost-price").html(res.marketPrice_amount);
			
			//更新库存
			if($("*[ectype='goods_attr_num']").length > 0){
				$("*[ectype='goods_attr_num']").html(res.attr_number);
				$("*[ectype='perNumber']").val(res.attr_number);
			}
			
			//更新已购买数量
			if($("#orderG_number").length > 0){
				$("#orderG_number").html(res.orderG_number);
			}
    
			if($("#ECS_SHOPPRICE").length > 0){
				//市场价
				if($("#ECS_MARKETPRICE").length > 0){
					$("#ECS_MARKETPRICE").html(res.result_market);
				}
				
				//商品价格
				if(res.onload == 'onload'){
					$("*[ectype='SHOP_PRICE']").html(res.result);
				}else{
					if(add_shop_price == 1){
$("*[ectype='SHOP_PRICE']").html(res.result);
					}else{
if(res.show_goods == 1){
	$("*[ectype='SHOP_PRICE']").html(res.spec_price);
}else{
	$("*[ectype='SHOP_PRICE']").html(res.result);
}
					}
				}
				
				//搭配 套餐价
				var combo_shop = document.getElementsByName('combo_shopPrice[]');
				var combo_mark = document.getElementsByName('combo_markPrice[]');
				
				for(var i=0; i<combo_shop.length; i++){
					combo_shop[i].innerHTML = res.shop_price;
				}
				
				for(var i=0; i<combo_mark.length; i++){
					combo_mark[i].innerHTML = res.market_price;
				}
			}
			
			if(res.err_no == 2){
				$("#isHas_warehouse_num").html(json_languages.shiping_prompt);
			}else{
				var isHas;
				var is_shipping = Number($("#is_shipping").val());
				
				if($("#isHas_warehouse_num").length > 0){
					if((res.attr_number > 0 || add_shop_price == 0) && (res.attr_number > 0 || res.original_spec_price == res.original_shop_price) && (1 != 0 || is_shipping == 1)){
$("a[ectype='btn-append']").attr('href','javascript:addToCartShowDiv(799)').removeClass('btn_disabled');
$("a[ectype='btn-buynow']").attr('href','javascript:addToCart(799)').removeClass('btn_disabled');
$("a[ectype='byStages']").removeClass('btn_disabled');
$('a').remove('#quehuo');
isHas = '<strong>'+json_languages.Have_goods+'</strong>，'+json_languages.Deliver_back_order;

$("a[ectype='btn-buynow']").show();
$("a[ectype='btn-append']").show();
$("a[ectype='byStages']").show();
					}else{
isHas = '<strong>'+json_languages.No_goods+'</strong>，'+json_languages.goods_over;

$("a[ectype='btn-buynow']").attr('href','javascript:void(0)').addClass('btn_disabled');
$("a[ectype='btn-append']").attr('href','javascript:void(0)').addClass('btn_disabled');
$("a[ectype='byStages']").addClass('btn_disabled');

	if(!document.getElementById('quehuo')){
		if(1 != 0 || is_shipping == 1){
			$("a[ectype='btn-buynow']").hide();
			$("a[ectype='btn-append']").hide();
			$("a[ectype='byStages']").hide();
			$('.choose-btns').append('<a id="quehuo" class="btn-buynow" href="javascript:addToCart(799);">暂时缺货</a>');
		}
	}
					}
  
					if(res.store_type == 1){
$("[ectype='btn-store-pick']").show();
$("[ectype='list-store-pick']").show();
					}else{
$("[ectype='btn-store-pick']").hide();
$("[ectype='list-store-pick']").hide();
					}
					if(is_shipping == 0){
isHas = '<strong>'+json_languages.Have_goods+'</strong>，' + json_languages.shiping_prompt;
					}
					
					$("#isHas_warehouse_num").html(isHas);
				}
			}
		
			if(res.fittings_interval){
				for(var i=0; i<res.fittings_interval.length; i++){
					$("#m_goods_" + res.fittings_interval[i].groupId).html(res.fittings_interval[i].fittings_minMax);
					$("#m_goods_save_" + res.fittings_interval[i].groupId).html(res.fittings_interval[i].save_minMaxPrice);
					$("#m_goods_reference_" + res.fittings_interval[i].groupId).html(res.fittings_interval[i].market_minMax);
				}
			}
		
			if(res.onload == 'onload'){
				$("*[ectype='SHOP_PRICE']").html(res.result);
			}
		
			if(add_shop_price == 1){
				$(".ECS_fittings_interval").html(res.shop_price);
			}else{
				if(res.show_goods == 1){
					$(".ECS_fittings_interval").html(res.spec_price);
				}else{
					$(".ECS_fittings_interval").html(res.shop_price);
				}
			}
			//更新白条分期购每期的价格 start
			if(res.stages){
				var i = 0;
				$.each(res.stages,function(k,v){
					if(k!=1) {
$('#chooseStages dd strong').eq(i).html('￥' + v + '×' + k + qi);
$('#chooseStages dd strong').eq(i).next('span').html(free_desc+'0.00%，￥' + v + '×' + k + qi);
					}
					i++;
				});
			}
		}
		
		isReturn = true;
		
		if(res.onload == "onload"){
			quantity();
		}
	}
	/******************************************* js方法 end***********************************************/	
	</script>
    <script type="text/javascript">
$(function(){
	/* 检测配送地区 */
	seller_shipping_area('0');
	
	//配送区域
	goods_delivery_area();
});

/* 获取配送区域 start*/
function goods_delivery_area(){
	var area = new Object();
	
	area.province_id = '3';
	area.city_id = '37';
	area.district_id = '410';
	area.street_id = '0';
	area.street_list = '0';
	area.goods_id = '799';
	area.user_id = '62';
	area.region_id = '2';
	area.area_id = '16';
	area.merchant_id = '0';

	Ajax.call('ajax_dialog.php?act=goods_delivery_area', 'area=' + $.toJSON(area), goods_delivery_areaResponse, 'POST', 'JSON'); 
	
}

function goods_delivery_areaResponse(result){
	$("#area_address").html(result.content);
	$(".store-warehouse-info").html(result.warehouse_content);
	
	if(result.is_theme == 1){
		get_user_area_shipping(result.goods_id, result.area.region_id, result.area.province_id, result.area.city_id, result.area.district_id, result.area.street_id, result.area.street_list);
	}
}
/* 获取配送区域 end*/

/* 查询用户所在地区是否支持配送 */
function get_user_area_shipping(goods_id, region_id, province_id, city_id, district_id, street_id, street_list){
	
	var area = new Object();
	
	area.goods_id = goods_id;
	area.region_id = region_id;
	area.province_id = province_id;
	area.city_id = city_id;
	area.district_id = district_id;
	area.street_id = street_id;
	area.street_list = street_list;
	
	// Ajax.call('ajax_dialog.php?act=user_area_shipping', 'area=' + $.toJSON(area), user_area_shippingResponse, 'POST', 'JSON'); 
}

function user_area_shippingResponse(result){
	$("#user_area_shipping").html(result.content);
	
	changePrice('onload');
}

/* 检测配送地区 */
function seller_shipping_area(merchant_id){
	Ajax.call('ajax_dialog.php?act=seller_shipping_area','merchant_id=' + merchant_id, ajaxShippingAreaResponse, 'GET', 'JSON');
}

function ajaxShippingAreaResponse(result){}


/* 配送地区 常用地址选择 start*/
// function get_region_change(goods_id, province_id, city_id, district_id){
// 	Ajax.call("ajax_dialog.php", 'id=' + goods_id + '&act=in_stock' + '&province=' + province_id + "&city=" + city_id + "&district=" + district_id, ajax_is_inStock, "GET", "JSON");
// }

function ajax_is_inStock(res){
	var t = '&t=' + parseInt(Math.random()*1000);
	var str_new = window.location.href.replace(/\&t\=\d+/g,t);
	location.href = str_new;
}
/* 配送地区 常用地址选择 end*/
</script></body>
</html>
