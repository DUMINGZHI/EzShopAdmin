/*
**
**商品配件和人气组合js
**
*/

jQuery(function($){
	var goods_id = $("input[name='good_id']").val(),
		region_id = $("input[name='region_id']").val(),
		area_id = $("input[name='area_id']").val();
		
	//变更选购的配件
	$("*[ectype='checkbox']").click(function(){
		var itemName = $(this).attr('item'),
			val = $(this).val();
			
		if($(this).prop('checked')){
			//新增配件(组,配件,主件);
			ec_group_addToCart(itemName, val, goods_id, region_id, area_id, '');
		}else{
			//删除基本件(组,配件,主件)
			ec_group_delInCart(itemName, val, goods_id, region_id, area_id, '');
		}
	});
	
	//套餐数量
	$(".combo_stock").keyup(function(){
		var form = $(this).parents('form');
		//根据套餐获取该套餐允许购买的最大数
		getMaxStock(form, 1);
	});
	
	//设置配件初始未选状态
	$("*[ectype='checkbox']").each(function(i){
		this.checked = false;
	});
	
	//配件购买 弹出框
	$("*[ectype='comboBuy']").on("click",function(){
		var str = '';
		var group = '';

		str = $(this).attr('rev');
		str = str.split('_');
		group = str[0] + "_" + str[1] + "_" + str[2]; //获取主件组名
		
		//判断是否勾选套餐
		if(!$("."+group).is(':checked')){
			pbDialog(json_languages.select_shop,"",0);
			return false;
		}else{
			get_cart_combo_list($(this).attr('rev'),group);
		}
	});
	
	//关闭 配件购买 弹出框
	$(".tm-dl-overlay-close,.tm-dl-overlay-mask").click(function(e){
		$(".tm-dl-overlay-mask,.tm-dl-overlay").hide();
	});
	
	//弹窗内选择搭配商品
	$(document).on("click",".tm-combo-item_div",function(){
		var group = new Object(),
			fitt_goods = [];	 //删除之前组合配件商品ID
		
		var enable = $(this).find(".tm-enable");
	
		group.group_rev = enable.attr("rev");
		
		//搭配商品的id
		$(".tm-meta").each(function(index, element) {
			fitt_goods.push($(element).attr('rev'));  
		});
			
		group.fitt_goods = fitt_goods;	
		
		var str, str1, tsr2;
		str = group.group_rev;
		str1 = str.split('|');

		
		var goods_id = str1[0];
		var region_id = str1[1];
		var area_id = str1[2];
		
		str2 = str1[3];
		str2 = str2.split('=');
		var group_item = str2[0];
		var parent_id = str2[1];
		
		var group_arr = group_item.split('_');
		var group_id = group_arr[2];
		
		var m_goods_list = $('.m_goods_list_' + group_item + "_" + goods_id).val();
		
		var add_group = group_item + "_" + parent_id  + "_" + region_id  + "_" + area_id;
		group.add_group = add_group;
		
		var clasSName = $(this).find('.tm-enable').attr('class');
		
		if(enable.hasClass("selected")){
			enable.removeClass('selected');
			
			if(m_goods_list == goods_id){
				$('.m_goods_list_' + group_item + "_" + goods_id).prop("checked", false);
			}

			Ajax.call('flow.php?step=add_del_cart_combo_list', 'group=' + $.toJSON(group), add_delResponse, 'POST', 'JSON');
		}else{
			enable.addClass('selected');
			
			if(m_goods_list == goods_id){
				$('.m_goods_list_' + group_item + "_" + goods_id).prop("checked", true);
			}
			
			//新增配件(组,配件,主件)
			ec_group_addToCart(group_item, goods_id, parent_id, region_id, area_id, add_group, fitt_goods);
		}
	});
	
	//可以购买套餐的最大数量
	$(document).on("keyup","#J_SComboAmount_group",function(){
		var form = $(this).parents('form');
		getMaxStock(form, 2);//根据套餐获取该套餐允许购买的最大数
	});
});

/******************************搭配组合购买触发弹出前 处理js start***************************************/
//允许购买套餐的最大数量
function getMaxStock(form, type){
	var group_result = form.attr("name"),
		number_input = form.find('input[name="' + group_result + '_number"]'),
		number = parseInt(Number(number_input.val())),
		stock = form.find("input[name='stock']").val(),
		check = form.find("*[ectype='enable'] input[type='checkbox']");
	
	//是否是数字
	if(isNaN(number)){
		number = 1;
		number_input.val(number);
	}

	//更新
	number = (number < 1) ? 1 : number;
	
	if(stock > 0){
		if(number > stock){
			$("#stock_number").html(stock);
			number_input.val(stock);
		}
	}else{
		number = (number >= 100) ? 100 : number;
		number_input.val(number);
	}
	if(type == 2){
		$(".combo_stock").val(number_input.val());
	}
}

//统计套餐价格
function display_Price(_item,indexTab){
	var _size = $('.'+_item).size();
	var _amount_shop_price = 0;
	var _amount_spare_price = 0;
	indexTab = indexTab - 1;
	for(i=0; i<_size; i++){
		obj = $('.'+_item).eq(i);
		if(obj.prop('checked')){
			_amount_shop_price += parseFloat(obj.attr('data')); //原件合计
			_amount_spare_price += parseFloat(obj.attr('spare')); //优惠合计
		}
	}
	var tip_spare = $('.tip_spare:eq('+indexTab+')');//节省文本
	if(_amount_spare_price > 0){//省钱显示提示信息
		tip_spare.show();
		tip_spare.children('strong').text(_amount_spare_price);
	}else{
		tip_spare.hide();
	}
	//显示总价
	$('.combo_price:eq('+indexTab+')').text(_amount_shop_price);
}

//处理添加商品到购物车
function ec_group_addToCart(group,goodsId,parentId, warehouse_id, area_id, add_group, fitt_goods){
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  var number       = 1;
  var quick		   = 0;
  var group_item   = goodsId;
  var goods_attr = getSelectedAttributes(document.forms['ECS_FORMBUY']);  //获取主件商品属性
  
  goods.goods_attr   	= goods_attr;
  goods.quick    		= quick;
  goods.spec     		= spec_arr;
  goods.goods_id 		= goodsId;
  goods.warehouse_id 	= warehouse_id;
  goods.area_id 		= area_id;
  goods.number   		= number;
  goods.parent   		= parentId;
  goods.group 			= group + '_' + parentId;//组名
  goods.add_group 		= add_group;
  
  if(fitt_goods){
  	  goods.fitt_goods 		= fitt_goods;
  }

  Ajax.call('flow.php?step=add_to_cart_combo', 'goods=' + $.toJSON(goods), ec_group_addToCartResponse, 'POST', 'JSON'); //兼容jQuery by mike
}

//处理添加商品到购物车的反馈信息
function ec_group_addToCartResponse(result)
{
  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
		pbDialog(result.message," ",0,500,100,20);
		cancel_checkboxed(result.goods_group, result.goods_id);//取消checkbox
    }
    // 没选规格，弹出属性选择框
    /*else if (result.error == 6)
    {
	  //商品搭配购买，搭配商品是没有单独选择商品属性，此处所以删除sunle
      ec_group_openSpeDiv(result.message, result.group, result.goods_id, result.parent, result.warehouse_id, result.area_id, result.goods_attr);
	}*/
    else
    {
		pbDialog(result.message," ",0,500,100,20);
	  	cancel_checkboxed(result.goods_group, result.goods_id);//取消checkbox
    }
  }
  else
  {
	//套餐价、参考价、优惠价格异步替换
	$("#m_goods_" + result.groupId).html(result.fittings_minMax);
	$("#m_goods_save_" + result.groupId).html(result.save_minMaxPrice);
	$("#m_goods_reference_" + result.groupId).html(result.market_minMax);
	
	if(result.add_group != ''){
		if(result.add_group){
			get_cart_combo_open_list(result.add_group, result.fitt_goods);
		}else{
			get_cart_combo_open_list(result.add_group);
		}
	}
  }
}

//处理取消勾选搭配商品
function ec_group_delInCart(group,goodsId,parentId, warehouse_id, area_id){
  var goods        = new Object();
  var group_item   = (typeof(parentId) == "undefined") ? goodsId : parseInt(parentId);

  goods.goods_id = goodsId;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
  goods.group = group + '_' + group_item;//组名
  goods.goods_attr = getSelectedAttributes(document.forms['ECS_FORMBUY']);  //获取主件商品属性
  goods.warehouse_id = warehouse_id;
  goods.area_id = area_id;


  Ajax.call('flow.php?step=del_in_cart_combo', 'goods=' + $.toJSON(goods), ec_group_delInCartResponse, 'POST', 'JSON'); //兼容jQuery by mike
}

//处理取消勾选搭配商品的反馈信息
function ec_group_delInCartResponse(result)
{
	var group = result.group;
	if (result.error > 0){
		pbDialog(json_languages.data_not_complete,"",0);
	}else if(result.parent == 0){
		$('.'+group).attr("checked",false);
	}
	
	$("#m_goods_" + result.groupId).html(result.fittings_minMax);
	$("#m_goods_save_" + result.groupId).html(result.save_minMaxPrice);
	$("#m_goods_reference_" + result.groupId).html(result.market_minMax);
}

//处理添加商品到组合购买购物车
function get_cart_combo_open_list(rev, fitt_goods){
	var group = new Object();
		group.rev = rev;
	
	if(fitt_goods){
		group.fitt_goods = fitt_goods;
	}
	
	Ajax.call('flow.php?step=add_cart_combo_list', 'group=' + $.toJSON(group), get_cart_combo_openResponse, 'POST', 'JSON');
}

//处理添加商品到组合购买购物车的反馈信息
function get_cart_combo_openResponse(result){
	if(result.list_select != 1){
		$("#fittings_minMax_top").html(result.fittings_minMax);
		$("#list_select").html(result.null_money);
	}else{
		$(".fittings_minMax").html(result.fittings_minMax);
	}
	
	$(".goods_fittings_main").find(".fitts_body").html(result.content_type);
	
	$(".save_minMaxPrice").html(result.save_minMaxPrice);
	$(".market_minMax").html(result.market_minMax);
	$(".collocation_number").html(result.collocation_number);
	
	$(".fittings_minMax").html(result.fittings_minMax);
	$('strong[name="combo_savePrice[]"]').html(result.save_minMaxPrice);
	$('span[name="combo_shopPrice[]"]').html(result.fittings_minMax);
	$('span[name="combo_markPrice[]"]').html(result.market_minMax);
	
	$(".tm-combo-content").hover(function(){
		$(".tm-combo-content").perfectScrollbar("destroy");
		$(".tm-combo-content").perfectScrollbar();
	});
}

//判断搭配商品是否缺货状态 如果是则取消勾选此商品
function cancel_checkboxed(group, goods_id){
	var check = $("form[name='"+group+"']").find("*[ectype='checkbox']");
	check.each(function(index){
		if($(this).val() == goods_id){
			$(this).prop("checked",false);
			
			//弹窗内无货搭配商品选择
			if($(".combo_goods_"+goods_id).length > 0){
				$(".combo_goods_"+goods_id).parents(".tm-img").siblings(".tm-enable").removeClass("selected");
			}
		}
	});
}

//购买搭配组合弹出窗口
function get_cart_combo_list(rev,group_type){
	var number = $('input[name="' + group_type + '_number"]').val();
	var group  = new Object();
	
	group.rev     = rev;
	group.number  = number;
	
	Ajax.call('flow.php?step=add_cart_combo_list', 'group=' + $.toJSON(group), ec_group_goodsListResponse, 'POST', 'JSON'); //兼容jQuery by mike
}

//购买搭配组合弹出窗口回调
function ec_group_goodsListResponse(result)
{
    if(result.spe_conut > 0){
        if(result.error == 0){
			$(".tm-dl-overlay-content").html(result.content);
			
			$("#m_goods_" + result.groupId).html(result.fittings_minMax);
			$("#m_goods_save_" + result.groupId).html(result.save_minMaxPrice);
			$("#m_goods_reference_" + result.groupId).html(result.market_minMax);
			
			$(".fittings_minMax").html(result.fittings_minMax);
			
			$(".tm-dl-overlay-mask,.tm-dl-overlay").show();
		}
    }else{
        addMultiToCart(result.group, result.goods_id, result.warehouse_id, result.area_id,1);
    }
}
/******************************搭配组合购买触发弹出前 处理js end***************************************/



/******************************搭配组合购买弹窗内处理js start***************************************/

/* 点击属性触发方法 */
function fitt_changeAtt(t, spec_key, group_rev, type, fittings_goods){
	$(t).addClass("selected").siblings().removeClass("selected");
	$(t).find("input").prop("checked",true);
	$(t).siblings().find("input").prop("checked", false);
	
	var fittings_attr = getSelectedAttributesFittings(fittings_goods), //获取主商品属性ID
		img = $(t).find("img"), //属性下图片
		imglength = img.length, //属性图片是否存在
		imgUrl = "";			//属性图片url
	
	//属性图片是否存在
	if(imglength > 0){
		imgUrl = img.attr("src");
		
		$(".combo_goods_" + spec_key).find("img").attr({src:"" +imgUrl+ ""});
		
		get_cart_combo_goodsAttr(spec_key, group_rev, imgUrl, type, fittings_goods, fittings_attr);
	}else{
		get_cart_combo_goodsAttr(spec_key, group_rev, '', type, fittings_goods, fittings_attr);
	}
}

/* 处理添加商品属性到组合购买购物车 */
function get_cart_combo_goodsAttr(spec_key, group_rev, tImg, type, fittings_goods, fittings_attr){
	var fitt_goods = [];
	var attr = fitt_getSelectedAttributes(document.forms['ECS_FORMBUY_' + spec_key]);
	var group = new Object();
	
	//所有搭配商品id
	$(".tm-meta").each(function(index, element) {
		fitt_goods.push($(element).attr('rev'));  
	});
	
	group.fitt_goods		= fitt_goods;
	group.attr				= attr;
	group.group_rev			= group_rev;
	group.goods_id			= spec_key;
	group.tImg				= tImg;
	group.type				= type;
	group.fittings_goods	= fittings_goods;
	group.fittings_attr 	= fittings_attr;
	
	Ajax.call('flow.php?step=add_cart_combo_goodsAttr', 'group=' + $.toJSON(group), ec_group_goodsAttrResponse, 'POST', 'JSON'); //兼容jQuery by mike
}

/* 处理添加商品属性到组合购买购物车的反馈信息 */
function ec_group_goodsAttrResponse(result)
{
	if(result.error == 0){
		//选择商品属性的库存
		if(result.message != ''){
			$('.tm-stock_' + result.goods_id).html(result.attr_number);
		}else{
			$('.tm-stock_' + result.goods_id).html(result.attr_number);
		}
		
		//库存数量是否为0，为0则出现提示信息
		if(result.attr_number > 0){
			$('.tm-stock_title_' + result.goods_id).hide();
		}else{
			$('.tm-stock_title_' + result.goods_id).show();
		}
		
		//判断商品属性是否选择,如果没有选择属性 提示需要选择属性提示信息
		if(result.attr_equal == 1){
			$('#tm-combo-item_' + result.goods_id).removeClass('hover');
		}
		
		//价格变化
		if(result.amount > 0){
			$('.fittings_minMax').html(result.goods_amount);
			$('.market_minMax').html(result.goods_market_amount);
			$('.save_minMaxPrice').html(result.save_amount);
			
			$("#m_goods_" + result.groupId).html(result.goods_amount);
			$("#m_goods_reference_" + result.groupId).html(result.goods_market_amount);
			$("#m_goods_save_" + result.groupId).html(result.save_amount);
		}
		
		//有属性的搭配商品是否选择属性，如果选择了则提示框隐藏
		if(result.list_select == 1){
			$('.tm-combo-notice').hide();
		}
	}
}

/* 获得选定的商品属性封装函数 */
function fitt_getSelectedAttributes(formBuy){
	var spec_arr = new Array();
	var j = 0;
	
	for (i = 0; i < formBuy.elements.length; i ++ ){
		var prefix = formBuy.elements[i].name.substr(0, 10);
	
	if (prefix == 'fitt_spec_' && (
		((formBuy.elements[i].type == 'radio' || formBuy.elements[i].type == 'checkbox') && formBuy.elements[i].checked) ||
		formBuy.elements[i].tagName == 'SELECT')){
			spec_arr[j] = formBuy.elements[i].value;
			j++;
		}
	}
	
	return spec_arr;
}

/* 获得选定的商品属性组 */
function getSelectedAttributesFittings(fittings_goods){
	var spec_arr = new Array();
	var j = 0;
	
	$("#tm-combo-item_" + fittings_goods + " li").each(function(index, element) {
		if($(this).hasClass("selected")){
			spec_arr[j] = $(this).find("input").val();
			j++;
		}
	});
	
	return spec_arr;
}

/* 套餐提交到购物车 */
function addMultiToCart(group,goodsId,warehouse_id,area_id,type){
	var goods     = new Object();
	var number    = $('input[name="'+group+'_number"]').val();

	goods.group = group;
	goods.goods_id = goodsId;
	goods.warehouse_id = warehouse_id;
	goods.area_id = area_id;
	goods.number = (number < 1) ? 1:number;
	
	//判断是否勾选套餐
	if(!$("."+group).is(':checked')){
		pbDialog(json_languages.select_shop,"",0);
		return location.reload();	
	}
	
	var i_add = 0; 
	var y_add;

	$('.tm-meta').each(function(i) {
		var t = $(this);
		t.find('.fitt_input').each(function(j) {
			var f = $(this);
			f.find('li').each(function(y) {
                var b = $(this);
				if(b.find(':radio').is(':checked')){
					y_add = j + 1;
					var goods_id = b.parents(".tm-meta").attr('rev');
					$('.fitt_jq_' + goods_id).val(y_add);
				}
            });
		});
		
		var group_fitt_input = t.find('.fitt_input').size(); //每一组属性的长度
		var t_goods_id = t.attr('rev');
		var t_input = $('.fitt_jq_' + t_goods_id).val();
		var goods_stock = $('.tm-stock_' + t_goods_id).html();
		
		if(group_fitt_input != t_input){
			t.parent().addClass('hover');
		}else{
			if(goods_stock < 1 || goods_stock == ''){
				t.parent().addClass('hover');
				$('.tm-stock_title_' + t_goods_id).html('<font style="color:#F00;">(该商品暂无库存，无法购买!)</font>');
			}else{
				t.parent().removeClass('hover');
			}
		}
    });
	
	var group_hover = $(".goods_fittings_main").find(".hover").size();
	

	if(group_hover < 1 || type == 1){

		ajaxLoadFunc(); //加载中
		
		Ajax.call('flow.php?step=add_to_cart_group', 'goods=' + $.toJSON(goods), addMultiToCartResponse, 'POST', 'JSON'); //兼容jQuery by mike
	}else{
		$('.tm-combo-notice').show();
	}
}

//套餐提交到购物车 回调
function addMultiToCartResponse(result){
	if(result.error > 0){
		pbDialog(result.message,"",0);
	}else{
		window.location.href = "flow.php";
	}
}

//取消弹出内搭配商品勾选 回调
function add_delResponse(result){
	get_cart_combo_open_list(result.add_group, result.fitt_goods);
}
/******************************搭配组合购买弹窗内处理js end***************************************/