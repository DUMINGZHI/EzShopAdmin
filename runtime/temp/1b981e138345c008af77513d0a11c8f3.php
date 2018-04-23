<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:58:"E:\xampp\htdocs\shop./application/index\view\cate\cate.htm";i:1524407266;s:59:"E:\xampp\htdocs\shop\application\index\view\common\head.htm";i:1524403739;s:64:"E:\xampp\htdocs\shop\application\index\view\common\cate_left.htm";i:1524407621;s:61:"E:\xampp\htdocs\shop\application\index\view\common\footer.htm";i:1524402711;}*/ ?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="Keywords" content="dumingzhi.com" />
<meta name="Description" content="dumingzhi.com" />
<title>dumingzhi.com</title>
<link rel="shortcut icon" href="favicon.ico" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/base.css" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/style.css" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/iconfont.css" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/purebox.css" />
<link rel="stylesheet" type="text/css" href="/shop/public/static/index/css/quickLinks.css" />
<script type="text/javascript" src="/shop/public/static/index/js/jquery-1.9.1.min.js"></script><script type="text/javascript" src="/shop/public/static/index/js/jquery.json.js"></script><script type="text/javascript" src="/shop/public/static/index/js/transport_jquery.js"></script>
<script type="text/javascript">
var json_languages = {"ok":"\u786e\u5b9a","determine":"\u786e\u5b9a","cancel":"\u53d6\u6d88","drop":"\u5220\u9664","edit":"\u7f16\u8f91","remove":"\u79fb\u9664","follow":"\u5173\u6ce8","pb_title":"\u63d0\u793a","Prompt_information":"\u63d0\u793a\u4fe1\u606f","title":"\u63d0\u793a","not_login":"\u60a8\u5c1a\u672a\u767b\u5f55","close":"\u5173\u95ed","cart":"\u8d2d\u7269\u8f66","js_cart":"\u8d2d\u7269\u8f66","all":"\u5168\u90e8","go_login":"\u53bb\u767b\u9646","select_city":"\u8bf7\u9009\u62e9\u5e02","comment_goods":"\u8bc4\u8bba\u5546\u54c1","submit_order":"\u63d0\u4ea4\u8ba2\u5355","sys_msg":"\u7cfb\u7edf\u63d0\u793a","no_keywords":"\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u8bcd\uff01","adv_packup_one":"\u8bf7\u53bb\u540e\u53f0\u5e7f\u544a\u4f4d\u7f6e","adv_packup_two":"\u91cc\u9762\u8bbe\u7f6e\u5e7f\u544a\uff01","more":"\u66f4\u591a","Please":"\u8bf7\u53bb","set_up":"\u8bbe\u7f6e\uff01","login_phone_packup_one":"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801","more_options":"\u66f4\u591a\u9009\u9879","Pack_up":"\u6536\u8d77","no_attr":"\u6ca1\u6709\u66f4\u591a\u5c5e\u6027\u4e86","search_Prompt":"\u53ef\u8f93\u5165\u6c49\u5b57,\u62fc\u97f3\u67e5\u627e\u54c1\u724c","most_input":"\u6700\u591a\u53ea\u80fd\u9009\u62e95\u9879","multi_select":"\u591a\u9009","checkbox_Packup":"\u8bf7\u6536\u8d77\u5168\u90e8\u591a\u9009","radio_Packup":"\u8bf7\u6536\u8d77\u5168\u90e8\u5355\u9009","contrast":"\u5bf9\u6bd4","empty_contrast":"\u6e05\u7a7a\u5bf9\u6bd4\u680f","Prompt_add_one":"\u6700\u591a\u53ea\u80fd\u6dfb\u52a04\u4e2a\u54e6^_^","Prompt_add_two":"\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0","button_compare":"\u6bd4\u8f83\u9009\u5b9a\u5546\u54c1","exist":"\u60a8\u5df2\u7ecf\u9009\u62e9\u4e86%s","count_limit":"\u6700\u591a\u53ea\u80fd\u9009\u62e94\u4e2a\u5546\u54c1\u8fdb\u884c\u5bf9\u6bd4","goods_type_different":"%s\u548c\u5df2\u9009\u62e9\u5546\u54c1\u7c7b\u578b\u4e0d\u540c\u65e0\u6cd5\u8fdb\u884c\u5bf9\u6bd4","compare_no_goods":"\u60a8\u6ca1\u6709\u9009\u5b9a\u4efb\u4f55\u9700\u8981\u6bd4\u8f83\u7684\u5546\u54c1\u6216\u8005\u6bd4\u8f83\u7684\u5546\u54c1\u6570\u5c11\u4e8e 2 \u4e2a\u3002","btn_buy":"\u8d2d\u4e70","is_cancel":"\u53d6\u6d88","select_spe":"\u8bf7\u9009\u62e9\u5546\u54c1\u5c5e\u6027","Province":"\u8bf7\u9009\u62e9\u6240\u5728\u7701\u4efd","City":"\u8bf7\u9009\u62e9\u6240\u5728\u5e02","District":"\u8bf7\u9009\u62e9\u6240\u5728\u533a\u57df","Street":"\u8bf7\u9009\u62e9\u6240\u5728\u8857\u9053","Detailed_address_null":"\u8be6\u7ec6\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a","Select_attr":"\u8bf7\u9009\u62e9\u5c5e\u6027","Focus_prompt_one":"\u60a8\u5df2\u5173\u6ce8\u8be5\u5e97\u94fa\uff01","Focus_prompt_login":"\u60a8\u5c1a\u672a\u767b\u5f55\u5546\u57ce\u4f1a\u5458\uff0c\u4e0d\u80fd\u5173\u6ce8\uff01","Focus_prompt_two":"\u767b\u5f55\u5546\u57ce\u4f1a\u5458\u3002","store_focus":"\u5e97\u94fa\u5173\u6ce8\u3002","Focus_prompt_three":"\u60a8\u786e\u5b9e\u8981\u5173\u6ce8\u6240\u9009\u5e97\u94fa\u5417\uff1f","Focus_prompt_four":"\u60a8\u786e\u5b9e\u8981\u53d6\u6d88\u5173\u6ce8\u5e97\u94fa\u5417\uff1f","Focus_prompt_five":"\u60a8\u8981\u5173\u6ce8\u8be5\u5e97\u94fa\u5417\uff1f","Purchase_quantity":"\u8d85\u8fc7\u9650\u8d2d\u6570\u91cf.","My_collection":"\u6211\u7684\u6536\u85cf","shiping_prompt":"\u8be5\u5730\u533a\u6682\u4e0d\u652f\u6301\u914d\u9001","Have_goods":"\u6709\u8d27","No_goods":"\u65e0\u8d27","No_shipping":"\u65e0\u6cd5\u914d\u9001","Deliver_back_order":"\u4e0b\u5355\u540e\u7acb\u5373\u53d1\u8d27","Time_delivery":" \u65f6\u53d1\u8d27","goods_over":"\u6b64\u5546\u54c1\u6682\u65f6\u552e\u5b8c","Stock_goods_null":"\u5546\u54c1\u5e93\u5b58\u4e0d\u8db3","purchasing_prompt_two":"\u5bf9\u4e0d\u8d77\uff0c\u8be5\u5546\u54c1\u5df2\u7ecf\u7d2f\u8ba1\u8d85\u8fc7\u9650\u8d2d\u6570\u91cf","day_not_available":"\u5f53\u65e5\u65e0\u8d27","day_yes_available":"\u5f53\u65e5\u6709\u8d27","Already_buy":"\u5df2\u8d2d\u4e70","Already_buy_two":"\u4ef6\u5546\u54c1\u8fbe\u5230\u9650\u8d2d\u6761\u4ef6,\u65e0\u6cd5\u518d\u8d2d\u4e70","Already_buy_three":"\u4ef6\u8be5\u5546\u54c1,\u53ea\u80fd\u518d\u8d2d\u4e70","goods_buy_empty_p":"\u5546\u54c1\u6570\u91cf\u4e0d\u80fd\u5c11\u4e8e1\u4ef6","goods_number_p":"\u5546\u54c1\u6570\u91cf\u5fc5\u987b\u4e3a\u6570\u5b57","search_one":"\u8bf7\u586b\u5199\u7b5b\u9009\u4ef7\u683c","search_two":"\u8bf7\u586b\u5199\u7b5b\u9009\u5de6\u8fb9\u4ef7\u683c","search_three":"\u8bf7\u586b\u5199\u7b5b\u9009\u53f3\u8fb9\u4ef7\u683c","search_four":"\u5de6\u8fb9\u4ef7\u683c\u4e0d\u80fd\u5927\u4e8e\u6216\u7b49\u4e8e\u53f3\u8fb9\u4ef7\u683c","jian":"\u4ef6","letter":"\u4ef6","inventory":"\u5b58\u8d27","move_collection":"\u79fb\u81f3\u6211\u7684\u6536\u85cf","select_shop":"\u8bf7\u9009\u62e9\u5957\u9910\u5546\u54c1","Parameter_error":"\u53c2\u6570\u9519\u8bef","screen_price":"\u8bf7\u586b\u5199\u7b5b\u9009\u4ef7\u683c","screen_price_left":"\u8bf7\u586b\u5199\u7b5b\u9009\u5de6\u8fb9\u4ef7\u683c","screen_price_right":"\u8bf7\u586b\u5199\u7b5b\u9009\u53f3\u8fb9\u4ef7\u683c","screen_price_dy":"\u5de6\u8fb9\u4ef7\u683c\u4e0d\u80fd\u5927\u4e8e\u6216\u7b49\u4e8e\u53f3\u8fb9\u4ef7\u683c","invoice_ok":"\u4fdd\u5b58\u53d1\u7968\u4fe1\u606f","invoice_desc_null":"\u8f93\u5165\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\uff01","invoice_desc_number":"\u60a8\u6700\u591a\u53ef\u4ee5\u6dfb\u52a03\u4e2a\u516c\u53f8\u53d1\u7968\uff01","invoice_packup":"\u8bf7\u9009\u62e9\u6216\u586b\u5199\u53d1\u7968\u62ac\u5934\u90e8\u5206\uff01","invoice_tax_null":"\u8bf7\u586b\u5199\u7eb3\u7a0e\u4eba\u8bc6\u522b\u7801","add_address_10":"\u6700\u591a\u53ea\u80fd\u6dfb\u52a010\u4e2a\u6536\u8d27\u5730\u5740","msg_phone_not":"\u624b\u673a\u53f7\u7801\u4e0d\u6b63\u786e","captcha_not":"\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a","captcha_xz":"\u8bf7\u8f93\u51654\u4f4d\u6570\u7684\u9a8c\u8bc1\u7801","captcha_cw":"\u9a8c\u8bc1\u7801\u9519\u8bef","Detailed_map":"\u8be6\u7ec6\u5730\u56fe","email_error":"\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e\uff01","bid_prompt_null":"\u4ef7\u683c\u4e0d\u80fd\u4e3a\u7a7a!","bid_prompt_error":"\u4ef7\u683c\u8f93\u5165\u683c\u5f0f\u4e0d\u6b63\u786e\uff01","mobile_error_goods":"\u624b\u673a\u683c\u5f0f\u4e0d\u6b63\u786e\uff01","null_email_goods":"\u90ae\u7bb1\u4e0d\u80fd\u4e3a\u7a7a","select_store":"\u8bf7\u9009\u62e9\u95e8\u5e97\uff01","Product_spec_prompt":"\u8bf7\u9009\u62e9\u5546\u54c1\u89c4\u683c\u7c7b\u578b","reply_desc_one":"\u56de\u590d\u5e16\u5b50\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a","go_shoping":"\u53bb\u8d2d\u7269","highest_price":"\u5df2\u662f\u6700\u9ad8\u4ef7\uff01","lowest_price":"\u5df2\u662f\u6700\u4f4e\u4ef7\uff01","no_history":"\u60a8\u5df2\u6e05\u7a7a\u6700\u8fd1\u6d4f\u89c8\u8fc7\u7684\u5546\u54c1","receive_coupons":"\u9886\u53d6\u4f18\u60e0\u5238","Immediate_use":"\u7acb\u5373\u4f7f\u7528","no_enabled":"\u5173\u95ed"};
//加载效果
var load_cart_info = '<img src="/shop/public/static/index/img/load/loadGoods.gif" height="108" class="ml100">';
var load_icon = '<img src="/shop/public/static/index/img/load/load.gif" width="200" height="200">';
</script></head>
<body class="bg-ligtGary">
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
    <div class="w <?php if(isset($show_right)){echo 'w1200'; }else{echo 'w1390';}?>">
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
<div class="content article-content">
    <div class="w w1200 clearfix">
        <div class="article-side">
            <dl class="article-menu">
                <dt class="am-t"><a href="<?php echo url('index/Cate/index'); ?>">文章分类列表</a></dt>
                <!-- 系统分类 -->
                <dd class="am-c">
                    <div class="menu-item active">
                        <div class="item-hd"><a href="#">系统分类</a><i class="iconfont icon-down"></i></div>
                            <?php if($helpCates): ?>
                            <ul class="item-bd">
                                <?php if(is_array($helpCates) || $helpCates instanceof \think\Collection || $helpCates instanceof \think\Paginator): $i = 0; $__LIST__ = $helpCates;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$helpCates): $mod = ($i % 2 );++$i;?>
                                <li><a href="<?php echo url('index/Cate/index',array('id'=>$helpCates['id'])); ?>"><?php echo $helpCates['cate_name']; ?></a></li>
                                <?php endforeach; endif; else: echo "" ;endif; ?>
                            </ul>
                            <?php endif; ?>
                    </div>
                </dd>
                <!-- 普通分类 -->
                <dd class="am-c">
                    <?php if(is_array($comCates) || $comCates instanceof \think\Collection || $comCates instanceof \think\Paginator): $i = 0; $__LIST__ = $comCates;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$comCates): $mod = ($i % 2 );++$i;?>
                    <div class="menu-item active">
                        <div class="item-hd"><a href="<?php echo url('index/Cate/index',array('id'=>$comCates['id'])); ?>"><?php echo $comCates['cate_name']; ?></a><i class="iconfont icon-down"></i></div>
                        <?php if($comCates['children']): ?>
                        <ul class="item-bd">
                            <?php if(is_array($comCates['children']) || $comCates['children'] instanceof \think\Collection || $comCates['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $comCates['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$childCate): $mod = ($i % 2 );++$i;?>
                            <li><a href="<?php echo url('index/Cate/index',array('id'=>$childCate['id'])); ?>"><?php echo $childCate['cate_name']; ?></a></li>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                        </ul>
                        <?php endif; ?>
                    </div>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </dd>
            </dl>
</div>
        <div class="article-main">
            <div class="am-hd">
                <h2><?php echo $cates['cate_name']; ?></h2>
            </div>
            
            <div class="am-bd">
                <ul class="artilce-list">
                    <?php if(is_array($artRes) || $artRes instanceof \think\Collection || $artRes instanceof \think\Paginator): $i = 0; $__LIST__ = $artRes;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$artRes): $mod = ($i % 2 );++$i;?>
                    <li>
                        <h3><a href="#" title="隐私声明"><?php echo $artRes['title']; ?></a></h3>
                        <p></p>
                    </li>
                    <?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div>
            
<script type="Text/Javascript" language="JavaScript">
<!--
function selectPage(sel)
{
  sel.form.submit();
}
//-->
</script>
        </div>
        
    </div>
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
                <?php if(is_array($helpCateRes) || $helpCateRes instanceof \think\Collection || $helpCateRes instanceof \think\Paginator): $i = 0; $__LIST__ = $helpCateRes;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$helpCateRes): $mod = ($i % 2 );++$i;?>
                <div class="help-item">
                    <h3><?php echo $helpCateRes['cate_name']; ?></h3>
                    <ul>
                        <?php if(is_array($helpCateRes['arts']) || $helpCateRes['arts'] instanceof \think\Collection || $helpCateRes['arts'] instanceof \think\Paginator): $i = 0; $__LIST__ = $helpCateRes['arts'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$arts): $mod = ($i % 2 );++$i;?>
                        <li><a href="#"><?php echo $arts['title']; ?></a></li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                </div>
                <?php endforeach; endif; else: echo "" ;endif; ?>
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
<script type="text/javascript" src="/shop/public/static/index/js/suggest.js"></script><script type="text/javascript" src="/shop/public/static/index/js/scroll_city.js"></script><script type="text/javascript" src="/shop/public/static/index/js/utils.js"></script>
<script type="text/javascript" src="/shop/public/static/index/js/warehouse.js"></script><script type="text/javascript" src="/shop/public/static/index/js/warehouse_area.js"></script>
<script type="text/javascript" src="/shop/public/static/index/js/jquery.SuperSlide.2.1.1.js"></script><script type="text/javascript" src="/shop/public/static/index/js/dsc-common.js"></script>
<script type="text/javascript">
	document.getElementById('cur_url').value = window.location.href;
</script>
<script type="text/javascript">
	$(function(){
		$(".article-side .side-goods").slide({
			effect: 'leftLoop'
		});
	});
</script>
</body>
</html>
