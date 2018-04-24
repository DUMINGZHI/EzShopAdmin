/* $Id : shopping_flow.js 4865 2007-01-31 14:04:10Z paulgao $ */

var selectedShipping = null;
var selectedPayment  = null;
var selectedPack     = null;
var selectedCard     = null;
var selectedSurplus  = '';
var selectedBonus    = 0;
var selectedVcard    = 0;
var selectedIntegral = 0;
var selectedOOS      = null;
var alertedSurplus   = false;

var groupBuyShipping = null;
var groupBuyPayment  = null;

/* *
 * 改变配送方式
 */
function selectShipping(obj)
{
  if (selectedShipping == obj)
  {
    return;
  }
  else
  {
    selectedShipping = obj;
  }

  var supportCod = obj.attributes['supportCod'].value + 0;
  var theForm = obj.form;

  for (i = 0; i < theForm.elements.length; i ++ )
  {
    if (theForm.elements[i].name == 'payment' && theForm.elements[i].attributes['isCod'].value == '1')
    {
      if (supportCod == 0)
      {
        theForm.elements[i].checked = false;
        theForm.elements[i].disabled = true;
      }
      else
      {
        theForm.elements[i].disabled = false;
      }
    }
  }

  if (obj.attributes['insure'].value + 0 == 0)
  {
    document.getElementById('ECS_NEEDINSURE').checked = false;
    document.getElementById('ECS_NEEDINSURE').disabled = true;
  }
  else
  {
    document.getElementById('ECS_NEEDINSURE').checked = false;
    document.getElementById('ECS_NEEDINSURE').disabled = false;
  }
  
  var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
  var area_id = $("#theForm").find("input[name='area_id']").val();

  var now = new Date();
  Ajax.call('flow.php?step=select_shipping', 'shipping=' + obj.value + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id, orderShippingSelectedResponse, 'GET', 'JSON');
}

/**
 *
 */
function orderShippingSelectedResponse(result)
{
  if (result.need_insure)
  {
    try
    {
      document.getElementById('ECS_NEEDINSURE').checked = true;
    }
    catch (ex)
    {
      alert(ex.message);
    }
  }

  try
  {
    if (document.getElementById('ECS_CODFEE') != undefined)
    {
      document.getElementById('ECS_CODFEE').innerHTML = result.cod_fee;
    }
  }
  catch (ex)
  {
    alert(ex.message);
  }

  orderSelectedResponse(result);
}

/* *
 * 改变支付方式
 */
function selectPayment(value)
{
  if (selectedPayment == value)
  {
    return;
  }
  else
  {
    selectedPayment = value;
  }
  
  var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
  var area_id = $("#theForm").find("input[name='area_id']").val();
  var shipping_id = get_cart_shipping_id();
  
    /*by kong 门店id*/
  var store_id = document.getElementById('store_id').value;
  (store_id > 0) ? store_id : 0;
   var store_seller = document.getElementById('store_seller').value;
  Ajax.call('flow.php?step=select_payment', 'payment=' + value + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id + '&store_id=' +store_id + '&store_seller='+store_seller + '&shipping_id=' + $.toJSON(shipping_id), orderSelectedResponse, 'GET', 'JSON');
}
/* *
 * 团购购物流程 --> 改变配送方式
 */
function handleGroupBuyShipping(obj)
{
  if (groupBuyShipping == obj)
  {
    return;
  }
  else
  {
    groupBuyShipping = obj;
  }

  var supportCod = obj.attributes['supportCod'].value + 0;
  var theForm = obj.form;

  for (i = 0; i < theForm.elements.length; i ++ )
  {
    if (theForm.elements[i].name == 'payment' && theForm.elements[i].attributes['isCod'].value == '1')
    {
      if (supportCod == 0)
      {
        theForm.elements[i].checked = false;
        theForm.elements[i].disabled = false;
      }
      else
      {
        theForm.elements[i].disabled = false;
      }
    }
  }

  if (obj.attributes['insure'].value + 0 == 0)
  {
    document.getElementById('ECS_NEEDINSURE').checked = false;
    document.getElementById('ECS_NEEDINSURE').disabled = true;
  }
  else
  {
    document.getElementById('ECS_NEEDINSURE').checked = false;
    document.getElementById('ECS_NEEDINSURE').disabled = false;
  }

  Ajax.call('group_buy.php?act=select_shipping', 'shipping=' + obj.value, orderSelectedResponse, 'GET');
}

/* *
 * 团购购物流程 --> 改变支付方式
 */
function handleGroupBuyPayment(obj)
{
  if (groupBuyPayment == obj)
  {
    return;
  }
  else
  {
    groupBuyPayment = obj;
  }

  Ajax.call('group_buy.php?act=select_payment', 'payment=' + obj.value, orderSelectedResponse, 'GET');
}

/* *
 * 改变商品包装
 */
function selectPack(obj)
{
  if (selectedPack == obj)
  {
    return;
  }
  else
  {
    selectedPack = obj;
  }
  
  var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
  var area_id = $("#theForm").find("input[name='area_id']").val();

  Ajax.call('flow.php?step=select_pack', 'pack=' + obj.value + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id, orderSelectedResponse, 'GET', 'JSON');
}

/* *
 * 改变祝福贺卡
 */
function selectCard(obj)
{
  if (selectedCard == obj)
  {
    return;
  }
  else
  {
    selectedCard = obj;
  }
  
  var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
  var area_id = $("#theForm").find("input[name='area_id']").val();

  Ajax.call('flow.php?step=select_card', 'card=' + obj.value + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id, orderSelectedResponse, 'GET', 'JSON');
}

/* *
 * 选定了配送保价
 */
function selectInsure(needInsure)
{
  needInsure = needInsure ? 1 : 0;
  
  var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
  var area_id = $("#theForm").find("input[name='area_id']").val();

  Ajax.call('flow.php?step=select_insure', 'insure=' + needInsure + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id, orderSelectedResponse, 'GET', 'JSON');
}

/* *
 * 团购购物流程 --> 选定了配送保价
 */
function handleGroupBuyInsure(needInsure)
{
  needInsure = needInsure ? 1 : 0;

  Ajax.call('group_buy.php?act=select_insure', 'insure=' + needInsure, orderSelectedResponse, 'GET', 'JSON');
}

/* *
 * 回调函数
 */
function orderSelectedResponse(result)
{
  if (result.error)
  {
	
	var foot = false;
	
	if(result.error == 1){
		var divId = 'no-goods-cart';
		var title = json_languages.cart;
		var content = $('#no_goods_cart').html();
	}else if(result.error == 2){
		var divId = 'no-address-cart';
		var title = json_languages.Shipping_address;
		var content = $('#no_address_cart').html();
	}
	
	pb({
		id:divId,
		title:title,
		width:450,
		height:50,
		content:content, 	//调取内容
		drag:false,
		foot:foot
	});
	
	$('#' + divId + ' .ftx-04').css({'padding': '11px 0px 0px 10px'});
	$('#' + divId + ' .tip-box').css({
		'width': '330px',
		'height': '50px',
		'padding': '0px 0px 10px 0px'
	});
	$('#' + divId + ' .item-fore').css({
		'margin': '0px 0px 0px 47px'
	});
	
	$('#' + divId + ' .pb-bd').css({
		'padding-left': '65px'
	});
  }

  try
  {
    var layer = document.getElementById("ECS_ORDERTOTAL");
    var goods_inventory = document.getElementById("goods_inventory");
    layer.innerHTML = (typeof result == "object") ? result.content : result;
	
	if(result.goods_list)
	{
		goods_inventory.innerHTML = (typeof result == "object") ? result.goods_list : result;
	}   
    
    if (result.payment != undefined)
    {
      var surplusObj = document.getElementById('ECS_SURPLUS'); //ecmoban模板堂 --zhuo 
      if (surplusObj != undefined)
      {
      //  surplusObj.disabled = result.pay_code == 'balance';
      }
    }
  }
  catch (ex) { }
}

/* *
 * 改变余额
 */
function changeSurplus(val)
{	
	
	var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
   	var area_id = $("#theForm").find("input[name='area_id']").val();
	var payPw = $("#qt_onlinepay");	  //支付密码
    var shipping_id = get_cart_shipping_id();
	
	/*获取 价格 by yanxin*/
	var sur = $(".sur").val();
	var shipping = $(".shipping").val();
	sur = sur.replace(/<[^<>]+>/g,'');
	sur = sur.replace('¥','');
	
	shipping = shipping.replace(/<[^<>]+>/g,'');
	shipping = shipping.replace('¥','');
	total_price = parseFloat(sur) + parseFloat(shipping);
	/*获取 价格 by yanxin*/
	
	if(selectedSurplus === val && val != 0){
		return;
	}else{
		if(val > total_price){
			 $("#ECS_SURPLUS").val(total_price)
		}else{
			selectedSurplus = val;
		}
	}
  
	//验证支付密码
	if(payPw.length > 0){
		//非在线支付状态，使用余额抵扣，余额输入框大于0，支付密码填写框展示
		if(val > 0){
			//支付密码显示
			payPw.show();
			
			//初始化支付密码
			payPw.find("input[name='pay_pwd']").val("");
			
			//支付密码隐藏域值赋值为1
			payPw.find("input[name='pay_pwd_error']").val(1);
		}else{
			//支付密码隐藏
			payPw.hide();
			
			//支付密码隐藏域值赋值为0
			payPw.find("input[name='pay_pwd_error']").val(0);
		}
	}

	Ajax.call('flow.php?step=change_surplus', 'surplus=' + val + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id + '&shipping_id=' + $.toJSON(shipping_id), changeSurplusResponse, 'GET', 'JSON');
}

/* *
 * 改变余额回调函数
 */
function changeSurplusResponse(obj)
{
  if (obj.error)
  {
    try
    {
      document.getElementById("ECS_SURPLUS_NOTICE").innerHTML = obj.error;
      document.getElementById('ECS_SURPLUS').value = '0';
      document.getElementById('ECS_SURPLUS').focus();
    }
    catch (ex) { }
  }
  else
  {
    try
    {
      document.getElementById("ECS_SURPLUS_NOTICE").innerHTML = '';
    }
    catch (ex) { }
    orderSelectedResponse(obj.content);
  }
}

/* *
 * 改变积分
 */
function changeIntegral(val)
{
	var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
	var area_id = $("#theForm").find("input[name='area_id']").val();
	var payPw = $("#qt_onlinepay");	  //支付密码
	var shipping_id = get_cart_shipping_id();

	if(selectedIntegral === val && val != 0){
		
		return;
	}else{
		selectedIntegral = val;
	}
  
	Ajax.call('flow.php?step=change_integral', 'points=' + val + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id + '&shipping_id=' + $.toJSON(shipping_id), changeIntegralResponse, 'GET', 'JSON');
}

/* *
 * 改变积分回调函数
 */
function changeIntegralResponse(obj)
{
  if (obj.error)
  {
    try
    {
      document.getElementById('ECS_INTEGRAL_NOTICE').innerHTML = obj.error;
      document.getElementById('ECS_INTEGRAL').value = '0';
      document.getElementById('ECS_INTEGRAL').focus();
    }
    catch (ex) { }
  }
  else
  {
    try
    {
      document.getElementById('ECS_INTEGRAL_NOTICE').innerHTML = '';
    }
    catch (ex) { }
    orderSelectedResponse(obj.content);
  }
}

/* *
 * 改变红包
 */
function changeBonus(val)
{
	var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
   	var area_id = $("#theForm").find("input[name='area_id']").val();
	var shipping_id = get_cart_shipping_id();
	
  if (selectedBonus == val)
  {
    return;
  }
  else
  {
    selectedBonus = val;
  }

  Ajax.call('flow.php?step=change_bonus', 'bonus=' + val + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id + '&shipping_id=' + $.toJSON(shipping_id), changeBonusResponse, 'GET', 'JSON');
}

/* *
 * 改变红包的回调函数
 */
function changeBonusResponse(obj)
{
  orderSelectedResponse(obj);
}

/* *
 * 改变储值卡
 */
function changeVcard(val)
{
	var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
   	var area_id = $("#theForm").find("input[name='area_id']").val();
	var store_id = $("#theForm").find("input[name='store_id']").val();
	var shipping_id = get_cart_shipping_id();
    
	if (selectedVcard == val){
		return;
	}else{
		selectedVcard = val;
	}
	
	Ajax.call('flow.php?step=change_value_card', 'value_card=' + val + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id + '&store_id=' + store_id + '&shipping_id=' + $.toJSON(shipping_id), changeVcardResponse, 'GET', 'JSON');
}

/* *
 * 改变储值卡的回调函数
 */
function changeVcardResponse(obj)
{
	if(document.getElementById('ECS_VALUE_CARD').value > 0){
		if(document.getElementById('value_card_psd')){
			document.getElementById('value_card_psd').disabled = true;	
			document.getElementById('value_card_psd').value = '';
		}		
	}else{
		if(document.getElementById('value_card_psd')){
			document.getElementById('value_card_psd').disabled = false;
		}
	}
	
	orderSelectedResponse(obj);
}

/**
 * 验证红包序列号
 * @param string bonusSn 红包序列号
 */
function validateBonus(bonusPsd)
{
	
	var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
   	var area_id = $("#theForm").find("input[name='area_id']").val();
	var shipping_id = get_cart_shipping_id();
	
	Ajax.call('flow.php?step=validate_bonus', 'bonus_psd=' + bonusPsd + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id + '&shipping_id=' + $.toJSON(shipping_id), validateBonusResponse, 'GET', 'JSON');
}

function validateBonusResponse(obj)
{

if (obj.error)
  {
    alert(obj.error);
    orderSelectedResponse(obj.content);
    try
    {
      document.getElementById('ECS_BONUSN').value = '0';
    }
    catch (ex) { }
  }
  else
  {
    orderSelectedResponse(obj.content);
  }
}

/**
 * 验证并绑定储值卡
 * @param string vc_psd 储值卡密码
 */
function validateVcard(vc_psd)
{
	var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
   	var area_id = $("#theForm").find("input[name='area_id']").val();
	var shipping_id = get_cart_shipping_id();
	
	Ajax.call('flow.php?step=validate_value_card', 'vc_psd=' + vc_psd + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id + '&shipping_id=' + $.toJSON(shipping_id), validateVcardResponse, 'GET', 'JSON');
}

function validateVcardResponse(obj)
{

if (obj.error)
  {
    alert(obj.error);
    orderSelectedResponse(obj.content);
    try
    {
      document.getElementById('ECS_BONUSN').value = '0';
    }
    catch (ex) { }
  }
  else
  {
	document.getElementById('ECS_VALUE_CARD').value = '0';
    orderSelectedResponse(obj.content);
  }
}

/* *
 * 改变发票的方式
 */
function changeNeedInv()
{
  var obj        = document.getElementById('ECS_NEEDINV');
  var objType    = document.getElementById('ECS_INVTYPE');
  var objPayee   = document.getElementById('ECS_INVPAYEE');
  var objContent = document.getElementById('ECS_INVCONTENT');
  var needInv    = obj.checked ? 1 : 0;
  var invType    = obj.checked ? (objType != undefined ? objType.value : '') : '';
  var invPayee   = obj.checked ? objPayee.value : '';
  var invContent = obj.checked ? objContent.value : '';
  objType.disabled = objPayee.disabled = objContent.disabled = ! obj.checked;
  if(objType != null)
  {
    objType.disabled = ! obj.checked;
  }
  
  var warehouse_id = $("#theForm").find("input[name='warehouse_id']").val();
  var area_id = $("#theForm").find("input[name='area_id']").val();

  Ajax.call('flow.php?step=change_needinv', 'need_inv=' + needInv + '&inv_type=' + encodeURIComponent(invType) + '&inv_payee=' + encodeURIComponent(invPayee) + '&inv_content=' + encodeURIComponent(invContent) + '&warehouse_id=' + warehouse_id + '&area_id=' + area_id, orderSelectedResponse, 'GET');
}

/* *
 * 改变发票的方式
 */
function groupBuyChangeNeedInv()
{
  var obj        = document.getElementById('ECS_NEEDINV');
  var objPayee   = document.getElementById('ECS_INVPAYEE');
  var objContent = document.getElementById('ECS_INVCONTENT');
  var needInv    = obj.checked ? 1 : 0;
  var invPayee   = obj.checked ? objPayee.value : '';
  var invContent = obj.checked ? objContent.value : '';
  objPayee.disabled = objContent.disabled = ! obj.checked;

  Ajax.call('group_buy.php?act=change_needinv', 'need_idv=' + needInv + '&amp;payee=' + invPayee + '&amp;content=' + invContent, null, 'GET');
}

/* *
 * 改变缺货处理时的处理方式
 */
function changeOOS(obj)
{
  if (selectedOOS == obj)
  {
    return;
  }
  else
  {
    selectedOOS = obj;
  }

  Ajax.call('flow.php?step=change_oos', 'oos=' + obj.value, null, 'GET');
}

/* //ecmoban模板堂 --zhuo 仓库 start
 * 根据元素clsssName得到元素集合
 * @param fatherId 父元素的ID，默认为document
 * @tagName 子元素的标签名
 * @className 用空格分开的className字符串
 */
function getElementsByClassName_zhuo(fatherId,tagName,className){
	node = fatherId&&document.getElementById(fatherId) || document;
	tagName = tagName || "*";
	className = className.split(" ");
	var classNameLength = className.length;
	for(var i=0,j=classNameLength;i<j;i++){
		//创建匹配类名的正则
		className[i]= new RegExp("(^|\\s)" + className[i].replace(/\-/g, "\\-") + "(\\s|$)");
	}
	var elements = node.getElementsByTagName(tagName);
	var result = [];
	for(var i=0,j=elements.length,k=0;i<j;i++){//缓存length属性
		var element = elements[i];
		while(className[k++].test(element.className)){//优化循环
			if(k === classNameLength){
				result[result.length] = element;
				break;
			}  
		}
		k = 0;
	}
	return result;
}

/* *
 * 检查提交的订单表单
 */
function checkOrderForm(frm)
{

  var paymentSelected = false;
  var shippingSelected = false;
  var pay_type = 0;
  var divId, title, ok_title, cl_title, content;
  var width = 450;
  var height = 50;
  
  //店铺id
  var store_id = $("#store_id").val();
  (store_id > 0) ? store_id : 0;
  
  //会员id
  var user_id = $("input[name='user_id']").val();
  
  //ecmoban模板堂 --zhuo 收获地址 start
  var input_length = $("#consignee-addr input[name='consignee_radio']").size();
  var numChecked = 0;
  
  $("#consignee-addr input[name='consignee_radio']").each(function(index, element) {
  		if($(this).is(':checked')){
			numChecked += 1;
		}else{
			numChecked += 0;
		} 
  });

  if(user_id > 0 && store_id == 0){
	  if(input_length == 0 || numChecked == 0){
		  	
			var divId = "cart-address-not";
			content = $('#cart_address_not').html();
			ok_title = json_languages.add_shipping_address;
			
			pb({
				id:divId,
				title:title,
				width:width,
				width:width,
				ok_title:ok_title,
				content:content, 	//调取内容
				drag:false,
				cl_cBtn:false, 
				foot:true,
				onOk:function(){
					$('.dialog_checkout').focus();
				}
			});
			
			$('#' + divId + ' .ftx-04').css({'padding': '11px 0px 0px 10px'});
			$('#' + divId + ' .tip-box').css({
				'width': '330px',
				'height': '50px',
				'padding': '0px 0px 10px 0px'
			});
			$('#' + divId + ' .item-fore').css({
				'margin': '0px 0px 0px 47px'
			});
			
			$('#' + divId + ' .pb-bd').css({
				'padding-left': '65px'
			});
				
		  	return false;
	  }
  }
  
  //ecmoban模板堂 --zhuo 收获地址 end

  // 检查是否选择了支付配送方式
  var is_address = $("form[name='doneTheForm'] input[name='is_address']").val();
  var goods_flow_type = $("form[name='doneTheForm'] input[name='goods_flow_type']").val();
  var shipping = $("form[name='doneTheForm'] input[name='shipping[]']");
  var ru_name = $("form[name='doneTheForm'] input[name='ru_name[]']");
  var store_seller = $("input[name='store_seller']").val();
  var shipping_divId = "dialog_not_user";				
  
  if(is_address == 0){
	  for(var i=0; i<shipping.length; i++){
		  if(shipping[i].value == 0 && goods_flow_type == 101&&store_id==0){
			  
				var content = '<div id="dialog_not_user">' + 
									'<div class="tip-box icon-box">' +
										'<span class="warn-icon m-icon"></span>' + 
										'<div class="item-fore">' +
											'<h3 class="rem ftx-04">' + ru_name[i].value + '</h3>' +
											'<div class="ftx-03">'+json_languages.no_delivery+'</div>' +
										'</div>' +
									'</div>' +
								'</div>';
					
				pb({
					id:shipping_divId,
					title:json_languages.delivery_information,
					width:455,
					height:78,
					content:content, 	//调取内容
					drag:false,
					foot:false,
					cl_cBtn:false
				});
				
				$('#' + shipping_divId + ' .item-fore').css({
					'height' : '68px'
				});
				
			  return false;
		  }
	  }
  }
  
  for (i = 0; i < frm.elements.length; i ++ )
  {
    if (frm.elements[i].name == 'payment' && frm.elements[i].checked)
    {
      paymentSelected = true;
    }
  }

 //门店订单  验证是否选择门店  by kong
 if(is_address == 1){
	if(store_id == 0){
		get_flow_prompt_message(json_languages.select_store);
		return false;
	}
	//提交订单验证门店 是否填写手机号码
	if(checked_store_info() == false){
		return false;	
	}	
 }

  //ecmoban模板堂 --zhuo start 
  if(document.getElementById('sel_pay_type')){
	  pay_type = document.getElementById('sel_pay_type').value;
  }

  if(pay_type == 0){
	  if ( ! paymentSelected)
	  {
		get_flow_prompt_message(json_languages.flow_no_payment);
		return false;
	  }
  }
  
  //ecmoban模板堂 --zhuo end 
  
  //验证支付密码
  var payPw = $("#qt_onlinepay");	  //支付密码
  
  if(payPw.length > 0){
	  var pay_pwd = payPw.find("input[name='pay_pwd']").val();
	  var pwd_error = payPw.find("input[name='pay_pwd_error']").val();
	  if(pwd_error == 1){
		  $("#ECS_PAY_PAYPWD").html(json_languages.pay_password_packup_null);
		  pbDialog(json_languages.pay_password_packup_null,"",0);
		  return false;
	  }else if(pwd_error == 2){
		  $("#ECS_PAY_PAYPWD").html(json_languages.pay_password_packup_error);
		  pbDialog(json_languages.pay_password_packup_error,"",0);
		  return false;
	  }else{
		  /*var payment_method_value = $("*[ectype='paymentType']").find(".item-selected").data("value"),
			  payment_code = payment_method_value.type,
			  sueplus = $("input[name='surplus']"),
			  integral = $("input[name='integral']");
		  
		  if(payment_code == 'onlinepay'){
			  if(pay_pwd == ''){
				$("#ECS_PAY_PAYPWD").html(json_languages.pay_password_packup_null);
				pbDialog(json_languages.pay_password_packup_null,"",0);
				return false;
			  }
		  }*/
		  
		  /*if(sueplus.length > 0 && sueplus.val() > 0){
			  if(pay_pwd == ''){
				$("#ECS_PAY_PAYPWD").html(json_languages.pay_password_packup_null);
				return false;
			  }
		  }*/
	  }
  }
  
  // 检查用户输入的余额
  if (document.getElementById("ECS_SURPLUS"))
  {
    var surplus = document.getElementById("ECS_SURPLUS").value;
    var error   = Utils.trim(Ajax.call('flow.php?step=check_surplus', 'surplus=' + surplus, null, 'GET', 'TEXT', false));

    if (error)
    {
      try
      {
        document.getElementById("ECS_SURPLUS_NOTICE").innerHTML = error;
      }
      catch (ex)
      {
      }
      return false;
    }
  }

  // 检查用户输入的积分
  if (document.getElementById("ECS_INTEGRAL"))
  {
    var integral = document.getElementById("ECS_INTEGRAL").value;
    var error    = Utils.trim(Ajax.call('flow.php?step=check_integral', 'integral=' + integral, null, 'GET', 'TEXT', false));

    if (error)
    {
      return false;
      try
      {
        document.getElementById("ECS_INTEGRAL_NOTICE").innerHTML = error;
      }
      catch (ex)
      {
      }
    }
  }

  frm.action = frm.action + '?step=done';
  return true;
}

//支付密
function get_pay_pwd(val, type){
	
	var pwd_error; 
	if(val == ''){
		$("form[name='doneTheForm'] :input[name='pay_pwd_error']").val(1);
	}else{
		Ajax.call('flow.php?step=pay_pwd', 'pay_pwd='+ val + "&type=" + type, function(result){
			$("form[name='doneTheForm'] :input[name='pay_pwd_error']").val(result.error);
			
			if(result.error == 0){
				$("#ECS_PAY_PAYPWD").html('');
			}
		}, 'POST', 'JSON');
		
	}
}

/* *
 * 检查收货地址信息表单中填写的内容
 */
function checkConsignee(frm)
{
  var err = false;

  if (frm.elements['province'] && frm.elements['province'].value == 0)
  {
    err = true;
    $(".area_error").removeClass("hide").addClass("show").html(json_languages.Province);
  }

  if (frm.elements['city'] && frm.elements['city'].value == 0)
  {
    err = true;
    $(".area_error").removeClass("hide").addClass("show").html(json_languages.City);
  }
  
  var district = frm.elements['district'].style.display;
  if (frm.elements['district'] && frm.elements['district'].value == 0 && district != 'none')
  {
    if (frm.elements['district'].value == 0)
    {
      err = true;
      $(".area_error").removeClass("hide").addClass("show").html(json_languages.District);
    }
  }
  
  var street = frm.elements['street'].style.display;
  if (frm.elements['street'] && frm.elements['street'].value == 0 && street != 'none')
  {
    if (frm.elements['street'].value == 0)
    {
      err = true;
      $(".area_error").removeClass("hide").addClass("show").html(json_languages.Street);
    }
  }

  if (Utils.isEmpty(frm.elements['consignee'].value))
  {
    err = true;
    $(".consignee_error").removeClass("hide").addClass("show");
  }
  
  if(frm.elements['email']){
  
	if ( frm.elements['email'].value != '' && !Utils.isEmail(frm.elements['email'].value))
	{
	  err = true;
	  $(".email_error").removeClass("hide").addClass("show").html(json_languages.email_error);
	}
  }	

  if (frm.elements['address'] && Utils.isEmpty(frm.elements['address'].value))
  {
    err = true;
    $(".address_error").removeClass("hide").addClass("show");
  }

  if(frm.elements['mobile'] && frm.elements['tel']){
	if(Utils.isEmpty(frm.elements['mobile'].value) && Utils.isEmpty(frm.elements['tel'].value)){
		$(".phone_error").removeClass("hide").addClass("show");
		err = true;
	}else{
		if (!Utils.isPhone(frm.elements['mobile'].value) && frm.elements['mobile'].value)
		{
			  err = true;
			  $(".phone_error").removeClass("hide").addClass("show").html(json_languages.Mobile_error);
		}
		
		if(frm.elements['tel'].value){
			if (!Utils.isTel(frm.elements['tel'].value) && frm.elements['tel'].value)
			{
				  err = true;
				  $(".phone_error").removeClass("hide").addClass("show").html(json_languages.phone_error);
			}
		}
	}
  }else if(frm.elements['mobile']){
	if(Utils.isEmpty(frm.elements['mobile'].value)){
		$(".phone_error").removeClass("hide").addClass("show");
		err = true;
	}else{
		if (!Utils.isPhone(frm.elements['mobile'].value) && frm.elements['mobile'].value)
		{
			  err = true;
			  $(".phone_error").removeClass("hide").addClass("show").html(json_languages.Mobile_error);
		}
	}
  }
    
  return !err;
}

/**
* 获取购物车配送方式
*/
function get_cart_shipping_id(){
	
	/*获取配送方式 by kong */
    var arr =[];
    $("*[ectype='shoppingList']").each(function(k,v){
        var arr2 = [];
        var ru_id = $(this).find("input[name='ru_id[]']").val();
        var shipping = $(this).find("input[name='shipping[]']").val(); 
        arr2.push(ru_id);
        arr2.push(shipping);
        arr[k] = arr2;
    });
	
	return arr;
}

//购物提示错误信息
function get_flow_prompt_message(text){
	var ok_title = json_languages.determine;
	var cl_title = json_languages.cancel;
	var title = json_languages.Prompt_information;
	var width = 455; 
	var height = 58;
	var divId = "email_div";
	
	var content = '<div id="' + divId + '">' +
						'<div class="tip-box icon-box">' +
							'<span class="warn-icon m-icon"></span>' +
							'<div class="item-fore">' +
								'<h3 class="ftx-04">' + text + '</h3>' + 
							'</div>' +
						'</div>' +
					'</div>';
	
	pb({
		id:divId,
		title:title,
		width:width,
		height:height,
		ok_title:ok_title, 	//按钮名称
		cl_title:cl_title, 	//按钮名称
		content:content, 	//调取内容
		drag:false,
		foot:true,
		onOk:function(){              
		},
		onCancel:function(){
		}
	});
	
	$('.pb-ok').addClass('color_df3134');
	$('#' + divId + ' .pb-ct .item-fore').css({
		'height' : '58px'
	});
	
	if(text.length <= 15){
		$('#' + divId + ' .pb-ct .item-fore').css({
			"padding-top" : '10px'
		});
	}
}