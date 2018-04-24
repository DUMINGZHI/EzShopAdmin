/*
 * 购物车商品选择js
 * sunle
 * 2017-03-01	
*/

$(function(){
	var 
	ck = "*[ectype='ckList'] input[type='checkbox']",	//所有ckList单选框
	ckGoods = "*[ectype='ckGoods']",         			//单个商品
	ckAll = "*[ectype='ckAll']",	  					//全选
	ckShopAll = "*[ectype='ckShopAll']", 				//每个店铺
	number = 0,											//数量	
	cartValue = $("input[name='cart_value']"),          //保存选中商品Id隐藏域
	cart_value = "", 									//商品购物ID字符串
	favourable_id = 0,									//活动ID
	select_flag = "";									//活动商品选中id拼接字符串
	//购物车选择
	function cartCheckbox(){
		
		//初始化全选状态
		$(ck).prop("checked",true);
		
		cart_value = get_cart_value();
		cartValue.val(cart_value);	
		
		//获取选择的购物车ID的商品信息
		change_cart_goods_number(cart_value);
		
		$("*[ectype='item']").addClass("selected");
		
		//全选
		$(document).on("click",ckAll,function(){
			var t = $(this);
			if(t.prop("checked")==true){
				$(ck).prop("checked",true);
				$(ck).parents("*[ectype='item']").addClass("selected");
			}else{
				$(ck).prop("checked",false);
				$(ck).parents("*[ectype='item']").removeClass("selected");
			}
			
			//购物车选中商品总数量和商品ID
			number = get_checkItem_num();
			cart_value = get_cart_value();
			
			//获取选择的购物车ID的商品信息
			change_cart_goods_number(cart_value);
		});
		
		//每个店铺商品全选
		$(document).on("click",ckShopAll,function(){
			var t = $(this);
			var shopItem = t.parents("*[ectype='shopItem']");
			if(t.prop("checked")==true){
				shopItem.find(ck).prop("checked",true);
				shopItem.find("*[ectype='item']").addClass("selected");
				favourable_id = 0;
			}else{
				shopItem.find(ck).prop("checked",false);
				shopItem.find("*[ectype='item']").removeClass("selected");
			}
			
			//购物车选中商品总数量和商品ID
			number = get_checkItem_num();
			cart_value = get_cart_value();
			
			//获取选择的购物车ID的商品信息
			change_cart_goods_number(cart_value);
			
			//判断是否已经全选
			sfAll();
			
			replace_cart_goods(cart_value,favourable_id,t);
		});
		
		//单个商品勾选
		$(document).on("click",ckGoods,function(){
			var t = $(this);
			var Item = t.parents("*[ectype='item']");
			var shopItem = t.parents("*[ectype='shopItem']");
			var itemlist = shopItem.find("*[ectype='itemList']");
			var length = itemlist.find(ck).length;
			
			var goodsid = Item.data("goodsid");
			
			if(t.prop("checked")==true){
				Item.addClass("selected");
				
				//组合购买配件商品
				$(".m_goods_1_"+goodsid).find("*[ectype='ckGoods']").prop("checked",true);
			}else{
				Item.removeClass("selected");
				
				//组合购买配件商品
				$(".m_goods_1_"+goodsid).find("*[ectype='ckGoods']").prop("checked",false);
			}
			
			//判断店铺商品是否全选
			if(itemlist.find(ck).filter(":checked").length == length){
				shopItem.find(ckShopAll).prop("checked",true);
			}else{
				shopItem.find(ckShopAll).prop("checked",false);
				favourable_id = t.parents("*[ectype='promoItem']").data("actid");
			}
			
			number = get_checkItem_num();
			cart_value = get_cart_value();

			//判断全部商品是否全选
			sfAll();

			replace_cart_goods(cart_value,favourable_id,t);
		});
		
		/**************************************赠品换购活动 start****************************************/
		//点击领取赠品
		$(document).on("click","*[ectype='tradeBtn']",function(){
			var promoItem = $(this).parents("*[ectype='promoItem']");
			var left = $(this).position().left+10;
			var top = $(this).parents("*[ectype='prpmoHeader']").outerHeight();
			var favourable_id = $(this).data("actid");
			var ru_id = $(this).data("ruid");
	
			promoItem.find("*[ectype='giftBox']").show().css({"left":left,"top":top,"z-index":"100"});
			
			//替换此活动的商品
			var gift_input = promoItem.find(ckGoods);
			var str='';
			gift_input.each(function(){
				if($(this).prop('checked')== true){
					var val = $(this).val();
					str += val + ',';
				}
			});
			
			str = str.substring(str.length-1,0);
			
			if(str != ''){
				select_flag = '&sel_id=' + str + '&sel_flag=' + 'cart_sel_flag';
			}

			Ajax.call('flow.php?step=show_gift_div', 'favourable_id=' + favourable_id + '&ru_id=' + ru_id + select_flag, show_gift_div_response, 'POST', 'JSON');
		});
		
		//关闭赠品或换购弹框
		$(document).on("click","*[ectype='close']",function(){
			var promoItem = $(this).parents("*[ectype='promoItem']");
			$(this).parents("*[ectype='giftBox']").hide();
			promoItem.css("z-index","initial");
		});
		
		//赠品或换购商品选择
		$(document).on('click',"*[ectype='giftGoodsCheckbox']",function(){
			var giftGoods = $(this).parents("*[ectype='giftGoods']"),
				num = giftGoods.data("num"),
			    length = giftGoods.find("*[ectype='giftGoodsCheckbox']").filter(":checked").length,
			 	value = $(this).val();
				act_id = $(this).data("actid");
				ru_id = $(this).data("ruid");
				
			$("#cart_gift_goods").find("*[ectype='giftNumber']").html(num);
			if(length > num){
				$(this).prop("checked",false);
				var content = $("#cart_gift_goods").html();			
				pb({
					id:"",
					title:json_languages.pb_title,
					width:455,
					height:58,
					content:content, 	//调取内容
					drag:false,
					foot:false
				});
			}else{
				$("#giftNumber_" + act_id + "_" + ru_id).html(length);
			}
		});
		
		//领取赠品换购商品确定
		$(document).on("click","*[ectype='giftBtn']",function(){
			var act_id = $(this).data('actid');
			var ru_id = $(this).data('ruid');
			add_gift_cart(act_id, ru_id);
		});
		/**************************************赠品活动 start****************************************/
	}

	
	//获取购物车已选商品数量
	function get_checkItem_num(){
		var num = 0,number = 0,selectNum = 0,it = "";
		$("input[name='checkItem']").each(function(index, element) {
			if($(element).is(":checked")){
				it = $(this).parents("*[ectype='item']");
				number = it.find("*[ectype='number']").val();
				selectNum = Number(number);
				
				num += selectNum;
			}
		});
		
		//改变购物车选择商品数量
		$("*[ectype='cartNum']").html(num);
		
		return num;
	}
	
	//获取购物车已选ID
	function get_cart_value(){
		var cart_value = '';
		$("input[name='checkItem']").each(function(index, element) {
			if($(element).is(':checked')){
				cart_value += $(element).val() + ",";
			}
        });
		
		cart_value = cart_value.substring(0,cart_value.length-1)
		
		cartValue.val(cart_value);
		
		return cart_value;
	}
	
	//获取选择商品的信息
	function change_cart_goods_number(rec_id)
	{   
		Ajax.call('flow.php?step=ajax_cart_goods_amount', 'rec_id=' + rec_id, change_cart_goods_response, 'POST','JSON');                
	}
	
	//获取选择商品的信息回调	
	function change_cart_goods_response(result)
	{
		var gTotal = result.goods_amount,
			sTotal = result.save_total_amount,
			num = result.subtotal_number;
		total(gTotal,sTotal,num);
	}
	
	//参加同一个优惠活动切换勾选时判断
	function replace_cart_goods(rec_id, favourable_id, $this)
	{
		var ajax_where = '';
		var select_flag = '';
		var str ='';
		var input = $this.parents("*[ectype='promoItem']").find(ckGoods);
		if(typeof(favourable_id) != 'undefined'){
			ajax_where = '&favourable_id=' + favourable_id;
		}
		
		input.each(function(){
			if($(this).prop('checked')== true){
				var val = $(this).val();
				str += val + ',';
			}
		});
		
		str = str.substring(str.length-1,0);

		if (str != '') {
			select_flag = '&sel_id=' + str + '&sel_flag=' + 'cart_sel_flag';
		}

		Ajax.call('flow.php?step=ajax_cart_goods_amount', 'rec_id=' + rec_id + select_flag + ajax_where, replace_cart_goods_response, 'POST','JSON');                
	}
	
	//点击换购更新换购商品
	function show_gift_div_response(result)
    {
        var giftInfo = $("#gift_box_list_" + result.act_id + "_" + result.ru_id);
        if (giftInfo.length > 0){
        	giftInfo.html(result.content);
        }
    }
	
	function replace_cart_goods_response(result)
	{	
		var gTotal = result.goods_amount,
			sTotal = result.save_total_amount,
			num = result.subtotal_number;
		
			total(gTotal,sTotal,num);
		if(result.act_id > 0){
			$("#product_promo_" + result.ru_id + "_" + result.act_id).html(result.favourable_box_content);
		}
	}
	
	function add_gift_cart(act_id, ru_id)
	{
		var arr ="";
		var gift = $("#product_promo_" + ru_id + "_" + act_id);
		gift.find("*[ectype='giftGoodsCheckbox']").each(function(){
			if($(this).prop("checked")==true){
				var val = $(this).val();
				arr += val+',';
			}
		});
		
		select_gift = arr.substring(0,arr.length-1);

		
		//替换此店铺购物车里的商品
		var gift_input = gift.find(ckGoods);
		var str='';
		gift_input.each(function(){
			if($(this).prop('checked')== true){
				var val = $(this).val();
				str += val + ',';
			}
		});
		
		str = str.substring(str.length-1,0);

		if (str != '') {
			select_flag = '&sel_id=' + str + '&sel_flag=' + 'cart_sel_flag';
		}
		
		Ajax.call('flow.php?step=add_favourable', 'act_id=' + act_id + '&ru_id=' + ru_id + select_flag + '&select_gift=' + select_gift, add_gift_cart_response, 'POST', 'JSON');
	}
	
	//添加赠品到购物车回调函数
	function add_gift_cart_response(result)
	{
		if (result.error){
			pbDialog(result.message,"",0,550,100,50);
			return false;
		}else{
			var cart_favourable_box = document.getElementById('product_promo_' + result.ru_id + "_" + result.act_id);
			if(cart_favourable_box){
				cart_favourable_box.innerHTML = result.content;
			}
		}
		
		cart_value = get_cart_value();
		cartValue.val(cart_value);
		
		var gTotal = result.goods_amount,
			sTotal = result.save_total_amount,
			num = get_checkItem_num();

			total(gTotal,sTotal,num);
	}
	
	//判断是否全选了
	function sfAll(){
		var c = $("*[ectype='cartTboy']").find(ck);
		var length = c.filter(":checked").length;
		if(length == c.length){
			$(ckAll).prop("checked",true);
		}else{
			$(ckAll).prop("checked",false);
		}
	}
	
	function total(goods_total,save_total,cartNum){
		$("*[ectype='goods_total']").html(goods_total); //商品总金额
		$("*[ectype='save_total']").html(save_total); //优惠节省总金额
		$("*[ectype='cartNum']").html(cartNum); //商品总数
	}
	
	cartCheckbox();
});