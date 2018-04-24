/* $Id : common.js 4865 2007-01-31 14:04:10Z paulgao $ */

//@模板堂-bylu
var bool =0;//此为变量声明，加在第一行，用于判断是加入购物车还是直接购买的一个变量

/* *
 * 添加商品到购物车 并且停留当前页 显示出DIV
 */
function addToCartShowDiv(goodsId, script_name,goods_recommend,parentId)
{
 
  if(!script_name)
  {
	script_name = 0;	  
  }
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  var number       = 1;
  var formBuy      = document.forms['ECS_FORMBUY'];
  var quick		   = 0;
 

  // 检查是否有商品规格 
  if (formBuy)
  {
    spec_arr = getSelectedAttributes(formBuy);

    if (formBuy.elements['number'])
    {
      number = formBuy.elements['number'].value;
    }

	quick = 1;
  }
  
  //ecmoban模板堂 --zhuo 仓库ID start
  if(document.getElementById('region_id')){
	  var warehouse_id = document.getElementById('region_id').value;
	  goods.warehouse_id   = warehouse_id; 
  }
  
  //地区ID
  if(document.getElementById('area_id')){
	  var area_id = document.getElementById('area_id').value;
	  goods.area_id = area_id; 
  }
  //ecmoban模板堂 --zhuo 仓库ID end

  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goodsId;
  goods.number   = number;
 
  goods.script_name   = (typeof(script_name) == "undefined") ? 0 : parseInt(script_name);
  goods.goods_recommend   = (typeof(goods_recommend) == "undefined") ? '' : goods_recommend;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
  
  //商品属性组是否有选中
	var attr_list = 0;
	var is_selected = 0;
	$(".goods_info_attr").each(function(index, element) {
		attr_list = index + 1;
		
		if($(this).find("li.item").hasClass("selected")){
			is_selected = is_selected + 1
		} 
	});
	
	//@模板堂-bylu 获取分期数  start
	if(document.getElementById("chooseStages")){
		if($("#chooseStages").find("li").hasClass("selected")){
			goods.stages_qishu = $("#chooseStages").find(":input[name='stages_qishu']").val();
		}
	}
	//@模板堂-bylu  end

  if($(".goods_info_attr").length > 0){
	  if(attr_list == is_selected){
		  Ajax.call('flow.php?step=add_to_cart_showDiv', 'goods=' + $.toJSON(goods), addToCartShowDivResponse, 'POST', 'JSON');
	  }else{
		  get_goods_prompt_message(json_languages.Product_spec_prompt);
	  }
  }else{
	  Ajax.call('flow.php?step=add_to_cart_showDiv', 'goods=' + $.toJSON(goods), addToCartShowDivResponse, 'POST', 'JSON');
  }
}

/* *
 * 处理添加商品到购物车并且停留当前页显示出DIV反馈信息
 */
function addToCartShowDivResponse(result)
{
  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
		pbDialog(result.message," ",0,450,80,50,true,function(){
			location.href = 'user.php?act=add_booking&id=' + result.goods_id + '&spec=' + result.product_spec;
		});
    }
    // 没选规格，弹出属性选择框
    else if (result.error == 6)
    {	
      openSpeDivShowDiv(result.message, result.goods_id, result.parent, result.script_name,result.goods_recommend);
    }
    else
    {
	  pbDialog(result.message,"",0,500,"80",50);
    }
  }
  else
  {
    var cartInfo = document.getElementById('ECS_CARTINFO');
    var cart_url = 'flow.php?step=cart';
    if (cartInfo)
    {
      cartInfo.innerHTML = result.content;
    }
	
	if(result.goods_recommend && result.goods_recommend !='')
	{
		goods_recommend = "_"+result.goods_recommend;
	}
	else
	{
		goods_recommend = "";
	}
	
	if(result.script_name == 1)
	{
		$("#addtocartdialog_retui_"+result.goods_id+goods_recommend).html(result.show_info);
		
		if(result.show_info != ''){
			$("#addtocartdialog_retui_"+result.goods_id+goods_recommend).show();
		}
	}
	else
	{
		$("#addtocartdialog .center_pop_txt").html(result.show_info);
		if(result.show_info != ''){
			$("#addtocartdialog").show();
			var $this = $("#addtocartdialog .loading");
			var top = ($(window).height()-$this.outerHeight())/2;
			var left = ($(window).width() -$this.outerWidth())/2;
			$this.css({"left":left,"top":top});
		}
	}
	
	$(".ibar_plugin_content").html(result.cart_content);
	$(".cart_num").html(result.cart_num);
  }
}

//生成属性选择层
function openSpeDivShowDiv(message, goods_id, parent,script_name ,goods_recommend) 
{

  var _id = "speDiv";
  var m = "mask";
  if (docEle(_id)) document.removeChild(docEle(_id));
  if (docEle(m)) document.removeChild(docEle(m));
  //计算上卷元素值
  var scrollPos; 
  if (typeof window.pageYOffset != 'undefined') 
  { 
    scrollPos = window.pageYOffset; 
  } 
  else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') 
  { 
    scrollPos = document.documentElement.scrollTop; 
  } 
  else if (typeof document.body != 'undefined') 
  { 
    scrollPos = document.body.scrollTop; 
  }

  var i = 0;
  var sel_obj = document.getElementsByTagName('select');
  while (sel_obj[i])
  {
    sel_obj[i].style.visibility = "hidden";
    i++;
  }

  // 新激活图层
  var newDiv = document.createElement("div");
  newDiv.id = _id;
  newDiv.style.position = "absolute";
  newDiv.style.zIndex = "10000";
  newDiv.style.width = "300px";
  newDiv.style.height = "260px";
  newDiv.style.top = (parseInt(scrollPos + 200)) + "px";
  newDiv.style.left = (parseInt(document.body.offsetWidth) - 200) / 2 + "px"; // 屏幕居中
  newDiv.style.overflow = "auto"; 
  newDiv.style.background = "#FFF";
  newDiv.style.border = "3px solid #59B0FF";
  newDiv.style.padding = "5px";

  //生成层内内容
  newDiv.innerHTML = '<h4 style="font-size:14; margin:15 0 0 15;">' + json_languages.select_spe + "</h4>";

  for (var spec = 0; spec < message.length; spec++)
  {
      newDiv.innerHTML += '<hr style="color: #EBEBED; height:1px;"><h6 style="text-align:left; background:#ffffff; margin-left:15px;">' +  message[spec]['name'] + '</h6>';

      if (message[spec]['attr_type'] == 1)
      {
        for (var val_arr = 0; val_arr < message[spec]['values'].length; val_arr++)
        {
          if (val_arr == 0)
          {
            newDiv.innerHTML += "<input style='margin-left:15px;' type='radio' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' checked /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + '</font> [' + message[spec]['values'][val_arr]['format_price'] + ']</font><br />';      
          }
          else
          {
            newDiv.innerHTML += "<input style='margin-left:15px;' type='radio' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + '</font> [' + message[spec]['values'][val_arr]['format_price'] + ']</font><br />';      
          }
        } 
        newDiv.innerHTML += "<input type='hidden' name='spec_list' value='" + val_arr + "' />";
      }
      else
      {
        for (var val_arr = 0; val_arr < message[spec]['values'].length; val_arr++)
        {
          newDiv.innerHTML += "<input style='margin-left:15px;' type='checkbox' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + ' [' + message[spec]['values'][val_arr]['format_price'] + ']</font><br />';     
        }
        newDiv.innerHTML += "<input type='hidden' name='spec_list' value='" + val_arr + "' />";
      }
  }
  newDiv.innerHTML += "<br /><center>[<a href='javascript:submit_div_show_div(" + goods_id + "," + parent + ","+script_name+',"'+goods_recommend+'"'+")' class='f6' >" + btn_buy + "</a>]&nbsp;&nbsp;[<a href='javascript:cancel_div()' class='f6' >" + cancel + "</a>]</center>";
  document.body.appendChild(newDiv);


  // mask图层
  var newMask = document.createElement("div");
  newMask.id = m;
  newMask.style.position = "absolute";
  newMask.style.zIndex = "9999";
  newMask.style.width = document.body.scrollWidth + "px";
  newMask.style.height = document.body.scrollHeight + "px";
  newMask.style.top = "0px";
  newMask.style.left = "0px";
  newMask.style.background = "#FFF";
  newMask.style.filter = "alpha(opacity=30)";
  newMask.style.opacity = "0.40";
  document.body.appendChild(newMask);
} 

//获取选择属性后，再次提交到购物车
function submit_div_show_div(goods_id, parentId ,script_name,goods_recommend) 
{
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  var number       = 1;
  var input_arr      = document.getElementsByTagName('input'); 
  var quick		   = 1;


  var spec_arr = new Array();
  var j = 0;

  for (i = 0; i < input_arr.length; i ++ )
  {
    var prefix = input_arr[i].name.substr(0, 5);

    if (prefix == 'spec_' && (
      ((input_arr[i].type == 'radio' || input_arr[i].type == 'checkbox') && input_arr[i].checked)))
    {
      spec_arr[j] = input_arr[i].value;
      j++ ;
    }
  }

  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goods_id;
  goods.number   = number;
  goods.script_name   = (typeof(script_name) == "undefined") ? 0 : parseInt(script_name);
  goods.goods_recommend   = (typeof(goods_recommend) == "undefined") ? '' : goods_recommend;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);

  Ajax.call('flow.php?step=add_to_cart_showDiv', 'goods=' + $.toJSON(goods), addToCartShowDivResponse, 'POST', 'JSON');

  document.body.removeChild(docEle('speDiv'));
  document.body.removeChild(docEle('mask'));

  var i = 0;
  var sel_obj = document.getElementsByTagName('select');
  while (sel_obj[i])
  {
    sel_obj[i].style.visibility = "";
    i++;
  }

}
/*关闭悬浮窗*/
function loadingClose(){
	$('.ecsc-cart-popup').hide();
}

/* *
 * 添加商品到购物车 
 */
var client_x=0,client_y=0,img_url=0,divId="",store_id=0,end_time='',store_mobile='';
function addToCart(goodsId, parentId,event,obj,divId,store_id,end_time,store_mobile)
{
	if(typeof(obj) != "undefined" && event)
	{
		img_url=obj.rev;
		client_x=event.clientX;
		client_y=event.clientY;
	}
	
	var goods        = new Object();
	var spec_arr     = new Array();
	var fittings_arr = new Array();
	var number       = 1;
	var formBuy      = document.forms['ECS_FORMBUY'];
	var quick		   = 0;
	var state 	   = $(obj).parents(".goodslistForm").data('state');
	var confirm_type = $(obj).data('confirm_type');
	
	// 检查是否有商品规格 
	if (formBuy)
	{
		spec_arr = getSelectedAttributes(formBuy);
	
		if (formBuy.elements['number'])
		{
			number = formBuy.elements['number'].value;
		}
	
		quick = 1;
	}
	
	if(state == 1){
	  	number = document.getElementById("product_num_"+goodsId).value;
	}
  
	//ecmoban模板堂 --zhuo 仓库ID start
	if(document.getElementById('region_id')){
	  	var warehouse_id = document.getElementById('region_id').value;
	  	goods.warehouse_id   = warehouse_id; 
	}
	
	//地区ID
	if(document.getElementById('area_id')){
	  	var area_id = document.getElementById('area_id').value;
	  	goods.area_id = area_id; 
	}
	//ecmoban模板堂 --zhuo 仓库ID end
  
	if(document.getElementById('confirm_type')){
	  	var confirm_type = document.getElementById('confirm_type').value;
	  	goods.confirm_type   = confirm_type; 
	}
	
	if(confirm_type){
	  	goods.confirm_type   = confirm_type;
	}
	
	if(store_id > 0){
                if(end_time){
                    goods.end_time = end_time;
                }
                if(store_mobile){
                    goods.store_mobile = store_mobile;
                }
	  	goods.store_id = store_id;
	}
	
	goods.quick    = quick;
	goods.spec     = spec_arr;
	goods.goods_id = goodsId;
	goods.number   = number;
	if(divId){goods.divId    = divId;}
	goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
  
  	//商品属性组是否有选中
	var attr_list = 0;
	var is_selected = 0;
	$(".goods_info_attr").each(function(index, element) {
		attr_list = index + 1;
		
		if($(this).find("li.item").hasClass("selected")){
			is_selected = is_selected + 1
		} 
	});

	if($(".goods_info_attr").length > 0){
		if(attr_list == is_selected){
			Ajax.call('flow.php?step=add_to_cart', 'goods=' + $.toJSON(goods), addToCartResponse, 'POST', 'JSON');
		}else{
			get_goods_prompt_message(json_languages.Product_spec_prompt);
		}
	}else{
		Ajax.call('flow.php?step=add_to_cart', 'goods=' + $.toJSON(goods), addToCartResponse, 'POST', 'JSON');
	}
}

function addToCartStages(goodsId)
{
	var goods        = new Object();
	var spec_arr     = new Array();
	var fittings_arr = new Array();
	var number       = 1;
	var formBuy      = document.forms['ECS_FORMBUY'];
	var quick		   = 0;

	// 检查是否有商品规格 
	if (formBuy)
	{
		spec_arr = getSelectedAttributes(formBuy);
	
		if (formBuy.elements['number'])
		{
			number = formBuy.elements['number'].value;
		}
	
		quick = 1;
	}
	
	//ecmoban模板堂 --zhuo 仓库ID start
	if(document.getElementById('region_id')){
	  	var warehouse_id = document.getElementById('region_id').value;
	  	goods.warehouse_id   = warehouse_id; 
	}
	
	//地区ID
	if(document.getElementById('area_id')){
	  	var area_id = document.getElementById('area_id').value;
	  	goods.area_id = area_id; 
	}
	//ecmoban模板堂 --zhuo 仓库ID end
  
	goods.quick    = quick;
	goods.spec     = spec_arr;
	goods.goods_id = goodsId;
	goods.number   = number;
	goods.parent   = 0;
  
  	//商品属性组是否有选中
	var attr_list = 0;
	var is_selected = 0;
	$(".goods_info_attr").each(function(index, element) {
		attr_list = index + 1;
		
		if($(this).find("li.item").hasClass("selected")){
			is_selected = is_selected + 1
		} 
	});

	//@模板堂-bylu 获取分期数  start
	if($("input[name='stages_qishu']").val()){
		goods.stages_qishu = $("input[name='stages_qishu']").val();		
	}
	//@模板堂-bylu  end
	
	if($(".goods_info_attr").length > 0){
		if(attr_list == is_selected){
			Ajax.call('flow.php?step=add_to_cart', 'goods=' + $.toJSON(goods), addToCartResponse, 'POST', 'JSON');
		}else{
			get_goods_prompt_message(json_languages.Product_spec_prompt);
		}
	}else{
		Ajax.call('flow.php?step=add_to_cart', 'goods=' + $.toJSON(goods), addToCartResponse, 'POST', 'JSON');
	}
}

/* *
 * 处理添加商品到购物车的反馈信息
 */
function addToCartResponse(result)
{
  var buy_num = parseInt(result.number);	
  var cart_num = parseInt($(".cart_num").eq(0).html());

  if(buy_num > 0){
	  cart_num =cart_num + buy_num;
  }else{
	  cart_num=cart_num=='0'?1:parseInt(cart_num)+1;
  }

  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
		pbDialog(result.message," ",0,450,80,50,true,function(){
			location.href = 'user.php?act=add_booking&id=' + result.goods_id + '&spec=' + result.product_spec;
		});
    }
    // 没选规格，弹出属性选择框
    else if (result.error == 6)
    {	
      openSpeDiv(result.message, result.goods_id, result.parent, result.warehouse_id, result.area_id,result.divId,result.confirm_type,result.number);
    }
    else
    {
		pbDialog(result.message,"",0,500,"80",50);
    }
  }
  else
  {
    var cart_url = 'flow.php?step=cart';
    if (result.one_step_buy == '1')
    {
      location.href = cart_url;
    }
    else
    {
        //@模板堂-bylu 白条分期购买 start
        if(bool == 1) {
            location.href = 'flow.php?step=checkout&act=stages&cart_value=' + result.cart_value;//跳转到订单确认页 bylu;
            //@模板堂-bylu  end
        }else if(bool == 2){
            location.href = 'flow.php?step=checkout&store_id='+result.store_id+'&cart_value=' + result.cart_value;//跳转到订单确认页  by kong 20160721  门店一步购物
        }else{
            switch(result.confirm_type)
            {
                case '1' :
                    if (confirm(result.message)) location.href = cart_url;
                    break;
                case '2' :
                    if (!confirm(result.message)) location.href = cart_url;
                    break;
                case '3' :
                    location.href = cart_url;
                    break;
                default :
                    flyCart(client_x,client_y,img_url,cart_num,result,result.divId);
                    break;
            }
        }
    }
  }
}

/**
 * 获得选定的商品属性
 */
function getSelectedAttributes(formBuy)
{
  var spec_arr = new Array();
  var j = 0;

  for (i = 0; i < formBuy.elements.length; i ++ )
  {
    var prefix = formBuy.elements[i].name.substr(0, 5);
	
    if (prefix == 'spec_' && (
      ((formBuy.elements[i].type == 'radio' || formBuy.elements[i].type == 'checkbox') && formBuy.elements[i].checked) ||
      formBuy.elements[i].tagName == 'SELECT'))
    {
      spec_arr[j] = formBuy.elements[i].value;
      j++ ;
    }
  }

  return spec_arr;
}

/**
 * 获得选定的商品属性组
 */
function getSelectedAttributesGroup(formBuy)
{
  var spec_arr = new Array();
  var j = 0;
  
  $("form[name='ECS_FORMBUY'] :input[name='spec_list']").each(function(index, element) {
	  spec_arr[j] = $(this).val();
	  j++ ;
  });

  return spec_arr;
}

/* *
 * 添加商品到收藏夹
 */
function collect(goodsId)
{
	var where = '';
	var cat_id = $("input[name='category']").val();
	var merchant_id = $("input[name='merchant_id']").val();
	var script_name = $("input[name='script_name']").val();
	var cur_url = $("input[name='cur_url']").val();
	var keywords = $("input[name='keywords']").val();
	
	if(cat_id > 0 && cat_id != 'undefined'){
		where = "&cat_id=" + cat_id + "&script_name=" + script_name;
	}else if(script_name != '' && (script_name == 'merchants_shop' || script_name == 'search') && cur_url != ''){
		where = "&script_name=" + script_name + "&cur_url=" + cur_url;
	}else if(script_name != '' && script_name == 'merchants_store_shop'){
		where = "&script_name=" + script_name + "&merchant_id=" + merchant_id;
	}
	
  	Ajax.call('user.php?act=collect', 'id=' + goodsId + where, collectResponse, 'GET', 'JSON');
}

/* *
 * 处理收藏商品的反馈信息
 */
function collectResponse(result)
{
	if(result.error != 2){
		
		var divId = 'flow_add_cart';
		var content = '<div id="flow_add_cart">' + 
							'<div class="tip-box icon-box">' +
								'<span class="warn-icon m-icon"></span>' + 
								'<div class="item-fore">' +
									'<h3 class="rem ftx-04">' + result.message + '</h3>' +
								'</div>' +
							'</div>' +
						'</div>';
		pb({
			id:divId,
			title:json_languages.title,
			width:455,
			height:58,
			ok_title:json_languages.determine, 	//按钮名称
			cl_title:json_languages.My_collection, 	//按钮名称
			content:content, 	//调取内容
			drag:false,
			foot:true,
			onOk:function(){
				if(result.error != 1){
					location.reload();
				}
			},
			onCancel:function(){
				location.href = "user.php?act=collection_list";
			}
		});
		
		$('#' + divId + ' .item-fore').css({
			'padding-top' : '12px'
		});
		
		$('#' + divId + ' .pb-ft .pb-ok').addClass('color_df3134');
	}else{
		var back_url = result.url;
		$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
	}
}

/* *
 * 处理会员登录的反馈信息
 */
function signInResponse(result)
{
  toggleLoader(false);

  var done    = result.substr(0, 1);
  var content = result.substr(2);

  if (done == 1)
  {
    document.getElementById('member-zone').innerHTML = content;
  }
  else
  {
    alert(content);
  }
}

/* *
 * 评论的翻页函数
 */
function gotoPage(page, id, type)
{
  Ajax.call('comment.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type, gotoPageResponse, 'GET', 'JSON');
}

function gotoPageResponse(result)
{
	document.getElementById("ECS_COMMENT").innerHTML = result.content;
  	
	if($(".pinglun").length>0){
		var t = $('.pinglun').offset().top;
		$(window).scrollTop(t);
	}
}

/* *
 * 评论的翻页函数 
 */
function reply_comment_gotoPage(page, id, type, libType)
{
  Ajax.call('comment_reply.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&libType=' + libType, reply_comment, 'GET', 'JSON');
}

function reply_comment(result)
{
  document.getElementById("reply_comment_ECS_COMMENT" + result.comment_id).innerHTML = result.content;
}

/* *
 * 评论的翻页函数  by guan 晒单评价
 */
function single_gotoPage(page, id, type)
{
  Ajax.call('comment_single.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type, single_gotoPageResponse, 'GET', 'JSON');
}

function single_gotoPageResponse(result)
{
  document.getElementById("single_ECS_COMMENT").innerHTML = result.content;
}

/* *
 * 评论的翻页函数
 */
function discuss_gotoPage(page, id, type)
{
  Ajax.call('comment_single.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type, discuss_gotoPageResponse, 'GET', 'JSON');
}

function discuss_gotoPageResponse(result)
{
  document.getElementById("discuss_ECS_COMMENT").innerHTML = result.content;
}

/* *
 * 晒单评论回复的翻页函数  by guan 晒单评价
 */
function single_reply_gotoPage(page, id, type, libType)
{
  Ajax.call('comment_reply_single.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&libType=' + libType, single_reply_gotoPageResponse, 'GET', 'JSON');
}

function single_reply_gotoPageResponse(result)
{
  if(document.getElementById("reply-lz_single_" + result.comment_id)){
  	document.getElementById("reply-lz_single_" + result.comment_id).innerHTML = result.content;
  }
  
  if(document.getElementById("reply-ajax")){
	  document.getElementById("reply-ajax").innerHTML = result.content;
  }
}

/* *
 * 评论的翻页函数  by guan 晒单评价
 */
function discuss_gotoPage(page, id, type)
{
  Ajax.call('comment_discuss.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type, discuss_gotoPageResponse, 'GET', 'JSON');
}

function discuss_gotoPageResponse(result)
{
  document.getElementById("discuss_ECS_COMMENT").innerHTML = result.content;
}

/* *
 * 论坛信息列表
 */
function discuss_list_gotoPage(page, id, type)
{
  Ajax.call('comment_discuss.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type, discuss_list_gotoPageResponse, 'GET', 'JSON');
}

function discuss_list_gotoPageResponse(result)
{
  document.getElementById("discuss_list_ECS_COMMENT").innerHTML = result.content;
}

/* *
 * 会员夺宝奇兵
 */
function user_snatch_gotoPage(page, id, type)
{
  Ajax.call('ajax_dialog.php?act=user_snatch_gotopage', 'page=' + page + '&id=' + id + '&type=' + type, user_snatch_gotoPageResponse, 'GET', 'JSON');
}

function user_snatch_gotoPageResponse(result)
{
   $("#user-snatch-list").html(result.content);
}

/* *
 * 会员拍卖列表
 */
function user_auction_gotoPage(page, id, type)
{
  Ajax.call('ajax_dialog.php?act=user_auction_gotopage', 'page=' + page + '&id=' + id + '&type=' + type, user_auction_gotoPageResponse, 'GET', 'JSON');
}

function user_auction_gotoPageResponse(result)
{
   $("#user-auction-list").html(result.content);
}

/* *
 * 会员订单列表
 */
function user_order_gotoPage(page, id, type)
{
  Ajax.call('ajax_dialog.php?act=user_order_gotopage', 'page=' + page + '&id=' + id + '&type=' + type, user_order_gotoPageResponse, 'GET', 'JSON');
}

function user_order_gotoPageResponse(result)
{
   $("#user_order_list").html(result.content);
}

/* *
 * 会员拍卖订单列表
 */
function user_auction_order_gotoPage(page, id, type)
{
  Ajax.call('ajax_dialog.php?act=user_auction_order_gotopage', 'page=' + page + '&id=' + id + '&type=' + type, user_auction_order_gotoPageResponse, 'GET', 'JSON');
}

function user_auction_order_gotoPageResponse(result)
{
   $("#user_order_list").html(result.content);
}

/* *
 * 会员我的发票列表
 */
function user_inv_gotoPage(page, id, type)
{
  Ajax.call('ajax_dialog.php?act=user_inv_gotopage', 'page=' + page + '&id=' + id + '&type=' + type, user_inv_gotoPageResponse, 'GET', 'JSON');
}

function user_inv_gotoPageResponse(result)
{
   $("#user_inv_list").html(result.content);
}

/* *
 * 会员批发订单列表
 */
function wholesale_order_gotoPage(page, id, type)
{
  Ajax.call('ajax_dialog.php?act=wholesale_order_gotopage', 'page=' + page + '&id=' + id + '&type=' + type, wholesale_order_gotoPageResponse, 'GET', 'JSON');
}

function wholesale_order_gotoPageResponse(result)
{
   $("#user_order_list").html(result.content);
   
   $(".user-purchase .itemc-left-info").perfectScrollbar("destroy");
   $(".user-purchase .itemc-left-info").perfectScrollbar();
}

/* *
 * 店铺街列表
 */
function store_shop_gotoPage(page, id, type, libType)
{
  Ajax.call('ajax_dialog.php?act=store_shop_gotoPage', 'page=' + page + '&id=' + id + '&type=' + type + '&libType=' + libType, store_shop_gotoPageResponse, 'GET', 'JSON');
}

function store_shop_gotoPageResponse(result)
{
	if(document.getElementById("store_shop_list")){
		document.getElementById("store_shop_list").innerHTML = result.content;
	}
	
	if(document.getElementById("pages_ajax")){
		document.getElementById("pages_ajax").innerHTML = result.pages;
		street();
	}
  
  //var t = $('.street-filter-wapper').offset().top;
  //$(window).scrollTop(t);
}

/* *
 * 商品购买记录的翻页函数
 */
function gotoBuyPage(page, id)
{
  Ajax.call('goods.php?act=gotopage', 'page=' + page + '&id=' + id, gotoBuyPageResponse, 'GET', 'JSON');
}

function gotoBuyPageResponse(result)
{
  document.getElementById("ECS_BOUGHT").innerHTML = result.result;
}

/* *
 * 礼品卡 可用
 */
function bouns_available_gotoPage(page, id, type, libType)
{
  Ajax.call('bouns_available.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&libType=' + libType, bouns_available_gotoPageResponse, 'GET', 'JSON');
}

function bouns_available_gotoPageResponse(result)
{
  var card = document.getElementById('gift_card_list_1');
  card.innerHTML = result.content;
  //qmark_tip();
}

/* *
 * 礼品卡 即将到期
 */
function bouns_expire_gotoPage(page, id, type, libType)
{
  Ajax.call('bouns_expire.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&libType=' + libType, bouns_expire_gotoPageResponse, 'GET', 'JSON');
}

function bouns_expire_gotoPageResponse(result)
{
  var card = document.getElementById('gift_card_list_2');
  card.innerHTML = result.content;
}

/* *
 * 礼品卡 已可用
 */
function bouns_useup_gotoPage(page, id, type, libType)
{
  Ajax.call('bouns_useup.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&libType=' + libType, bouns_useup_gotoPageResponse, 'GET', 'JSON');
}

function bouns_useup_gotoPageResponse(result)
{
  var card = document.getElementById('gift_card_list_3');
  card.innerHTML = result.content;
}

/* *
 * 商品关注
 */
function collection_goods_gotoPage(page, id, type, libType)
{
  Ajax.call('collection_goods.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&libType=' + libType, collection_goods_gotoPageResponse, 'GET', 'JSON');
}

function collection_goods_gotoPageResponse(result)
{
  $(".c-tab-box-ajax").html(result.content);
  
  if(document.getElementById('pages_ajax')){
	  $("#pages_ajax").html(result.pages);
  }
}

/* *
 * 关注品牌 qin
 */
function collection_brands_gotoPage(page, id, type, libType)
{
  Ajax.call('collection_brands.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&libType=' + libType, collection_brands_gotoPageResponse, 'GET', 'JSON');
}

function collection_brands_gotoPageResponse(result)
{
  $(".c-tab-box-ajax").html(result.content);
  
  if(document.getElementById('pages_ajax')){
	  $("#pages_ajax").html(result.pages);
  }
}

/* *
 * 店铺关注
 */
function collection_store_gotoPage(page, id, type, libType)
{
  Ajax.call('collection_store.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&libType=' + libType, collection_store_gotoPageResponse, 'GET', 'JSON');
}

function collection_store_gotoPageResponse(result)
{
  $(".c-tab-box-ajax").html(result.content);
  
  if(document.getElementById('pages_ajax')){
	  $("#pages_ajax").html(result.pages);
  }else{
	  load_collection_store();
  }
}

/* *
 * 取得格式化后的价格
 * @param : float price
 */
function getFormatedPrice(price)
{
  if (currencyFormat.indexOf("%s") > - 1)
  {
    return currencyFormat.replace('%s', advFormatNumber(price, 2));
  }
  else if (currencyFormat.indexOf("%d") > - 1)
  {
    return currencyFormat.replace('%d', advFormatNumber(price, 0));
  }
  else
  {
    return price;
  }
}

/* *
 * 夺宝奇兵会员出价
 */

function bid(step){
	var price = '';
	var msg   = '';
	if(step != - 1){
		var frm = document.forms['formBid'];
		price   = frm.elements['buy-price'].value;
		id = frm.elements['snatch_id'].value;
		
		if (price.length == 0){
			pbDialog(bid_prompt_null,"",0);
			msg += bid_prompt_null + '\n';
		}else{
			var reg = /^[\.0-9]+/;
			if (!reg.test(price)){
				pbDialog(bid_prompt_number,"",0);
				msg += bid_prompt_number + '\n';
			}
		}
	}else{
		price = step;
	}

  	if(msg.length > 0){
    	return ;
	}
	 
	Ajax.call('snatch.php?act=bid&id=' + id, 'price=' + price, bidResponse, 'POST', 'JSON');
}

/* *
 * 夺宝奇兵会员出价反馈
 */
function bidResponse(result){
	if(result.error == 0){
		document.getElementById('records-list').innerHTML = result.content;
		document.getElementById('ECS_PRICE_LIST').innerHTML = result.content_price;
		//刷新价格列表
		newPrice(result.id);
		
		pbDialog("恭喜您！出价成功了","",1);
	}else{
		if(result.prompt == 1){
			$.notLogin("get_ajax_content.php?act=get_login_dialog",result.back_url);
		}else{
			pbDialog(result.content,"",0);
		}
	}
}

/* *
 * 夺宝奇兵最新出价
 */

function newPrice(id)
{
  Ajax.call('snatch.php?act=new_price_list&id=' + id, '', newPriceResponse, 'POST', 'JSON');
}

/* *
 * 夺宝奇兵最新出价反馈
 */

function newPriceResponse(result)
{
  document.getElementById('ECS_PRICE_LIST').innerHTML = result.content;
}

/* *
 *  返回属性列表
 */
function getAttr(cat_id)
{
  var tbodies = document.getElementsByTagName('tbody');
  for (i = 0; i < tbodies.length; i ++ )
  {
    if (tbodies[i].id.substr(0, 10) == 'goods_type')tbodies[i].style.display = 'none';
  }

  var type_body = 'goods_type_' + cat_id;
  try
  {
    document.getElementById(type_body).style.display = '';
  }
  catch (e)
  {
  }
}

/* *
 * 截取小数位数
 */
function advFormatNumber(value, num) // 四舍五入
{
  var a_str = formatNumber(value, num);
  var a_int = parseFloat(a_str);
  if (value.toString().length > a_str.length)
  {
    var b_str = value.toString().substring(a_str.length, a_str.length + 1);
    var b_int = parseFloat(b_str);
    if (b_int < 5)
    {
      return a_str;
    }
    else
    {
      var bonus_str, bonus_int;
      if (num == 0)
      {
        bonus_int = 1;
      }
      else
      {
        bonus_str = "0."
        for (var i = 1; i < num; i ++ )
        bonus_str += "0";
        bonus_str += "1";
        bonus_int = parseFloat(bonus_str);
      }
      a_str = formatNumber(a_int + bonus_int, num)
    }
  }
  return a_str;
}

function formatNumber(value, num) // 直接去尾
{
  var a, b, c, i;
  a = value.toString();
  b = a.indexOf('.');
  c = a.length;
  if (num == 0)
  {
    if (b != - 1)
    {
      a = a.substring(0, b);
    }
  }
  else
  {
    if (b == - 1)
    {
      a = a + ".";
      for (i = 1; i <= num; i ++ )
      {
        a = a + "0";
      }
    }
    else
    {
      a = a.substring(0, b + num + 1);
      for (i = c; i <= b + num; i ++ )
      {
        a = a + "0";
      }
    }
  }
  return a;
}

/* *
 * 根据当前shiping_id设置当前配送的的保价费用，如果保价费用为0，则隐藏保价费用
 *
 * return       void
 */
function set_insure_status()
{
  // 取得保价费用，取不到默认为0
  var shippingId = getRadioValue('shipping');
  var insure_fee = 0;
  if (shippingId > 0)
  {
    if (document.forms['theForm'].elements['insure_' + shippingId])
    {
      insure_fee = document.forms['theForm'].elements['insure_' + shippingId].value;
    }
    // 每次取消保价选择
    if (document.forms['theForm'].elements['need_insure'])
    {
      document.forms['theForm'].elements['need_insure'].checked = false;
    }

    // 设置配送保价，为0隐藏
    if (document.getElementById("ecs_insure_cell"))
    {
      if (insure_fee > 0)
      {
        document.getElementById("ecs_insure_cell").style.display = '';
        setValue(document.getElementById("ecs_insure_fee_cell"), getFormatedPrice(insure_fee));
      }
      else
      {
        document.getElementById("ecs_insure_cell").style.display = "none";
        setValue(document.getElementById("ecs_insure_fee_cell"), '');
      }
    }
  }
}

/* *
 * 当支付方式改变时出发该事件
 * @param       pay_id      支付方式的id
 * return       void
 */
function changePayment(pay_id)
{
  // 计算订单费用
  calculateOrderFee();
}

function getCoordinate(obj)
{
  var pos =
  {
    "x" : 0, "y" : 0
  }

  pos.x = document.body.offsetLeft;
  pos.y = document.body.offsetTop;

  do
  {
    pos.x += obj.offsetLeft;
    pos.y += obj.offsetTop;

    obj = obj.offsetParent;
  }
  while (obj.tagName.toUpperCase() != 'BODY')

  return pos;
}

function showCatalog(obj)
{
  var pos = getCoordinate(obj);
  var div = document.getElementById('ECS_CATALOG');

  if (div && div.style.display != 'block')
  {
    div.style.display = 'block';
    div.style.left = pos.x + "px";
    div.style.top = (pos.y + obj.offsetHeight - 1) + "px";
  }
}

function hideCatalog(obj)
{
  var div = document.getElementById('ECS_CATALOG');

  if (div && div.style.display != 'none') div.style.display = "none";
}

function sendHashMail()
{
  Ajax.call('user.php?act=send_hash_mail', '', sendHashMailResponse, 'GET', 'JSON')
}

function sendHashMailResponse(result)
{
  alert(result.message);
}

/* 订单查询 */
function orderQuery()
{
  var order_sn = document.forms['ecsOrderQuery']['order_sn'].value;

  var reg = /^[\.0-9]+/;
  if (order_sn.length < 10 || ! reg.test(order_sn))
  {
    alert(invalid_order_sn);
    return;
  }
  Ajax.call('user.php?act=order_query&order_sn=s' + order_sn, '', orderQueryResponse, 'GET', 'JSON');
}

function orderQueryResponse(result)
{
  if (result.message.length > 0)
  {
    alert(result.message);
  }
  if (result.error == 0)
  {
    var div = document.getElementById('ECS_ORDER_QUERY');
    div.innerHTML = result.content;
  }
}

function display_mode(str)
{
    document.getElementById('display').value = str;
    setTimeout(doSubmit, 0);
    function doSubmit() {document.forms['listform'].submit();}
}

function display_mode_wholesale(str)
{
    document.getElementById('display').value = str;
    setTimeout(doSubmit, 0);
    function doSubmit() 
    {
        document.forms['wholesale_goods'].action = "wholesale.php";
        document.forms['wholesale_goods'].submit();
    }
}

/* 修复IE6以下版本PNG图片Alpha */
function fixpng()
{
  var arVersion = navigator.appVersion.split("MSIE")
  var version = parseFloat(arVersion[1])

  if ((version >= 5.5) && (document.body.filters))
  {
     for(var i=0; i<document.images.length; i++)
     {
        var img = document.images[i]
        var imgName = img.src.toUpperCase()
        if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
        {
           var imgID = (img.id) ? "id='" + img.id + "' " : ""
           var imgClass = (img.className) ? "class='" + img.className + "' " : ""
           var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
           var imgStyle = "display:inline-block;" + img.style.cssText
           if (img.align == "left") imgStyle = "float:left;" + imgStyle
           if (img.align == "right") imgStyle = "float:right;" + imgStyle
           if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
           var strNewHTML = "<span " + imgID + imgClass + imgTitle
           + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
           + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
           + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
           img.outerHTML = strNewHTML
           i = i-1
        }
     }
  }
}

function hash(string, length)
{
  var length = length ? length : 32;
  var start = 0;
  var i = 0;
  var result = '';
  filllen = length - string.length % length;
  for(i = 0; i < filllen; i++)
  {
    string += "0";
  }
  while(start < string.length)
  {
    result = stringxor(result, string.substr(start, length));
    start += length;
  }
  return result;
}

function stringxor(s1, s2)
{
  var s = '';
  var hash = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var max = Math.max(s1.length, s2.length);
  for(var i=0; i<max; i++)
  {
    var k = s1.charCodeAt(i) ^ s2.charCodeAt(i);
    s += hash.charAt(k % 52);
  }
  return s;
}

var evalscripts = new Array();
function evalscript(s)
{
  if(s.indexOf('<script') == -1) return s;
  var p = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/ig;
  var arr = new Array();
  while(arr = p.exec(s)) appendscript(arr[1], '', arr[2], arr[3]);
  return s;
}

function $$(id)
{
    return document.getElementById(id);
}

function appendscript(src, text, reload, charset)
{
  var id = hash(src + text);
  if(!reload && in_array(id, evalscripts)) return;
  if(reload && $$(id))
  {
    $$(id).parentNode.removeChild($$(id));
  }
  evalscripts.push(id);
  var scriptNode = document.createElement("script");
  scriptNode.type = "text/javascript";
  scriptNode.id = id;
  //scriptNode.charset = charset;
  try
  {
    if(src)
    {
      scriptNode.src = src;
    }
    else if(text)
    {
      scriptNode.text = text;
    }
    $$('append_parent').appendChild(scriptNode);
  }
  catch(e)
  {}
}

function in_array(needle, haystack)
{
  if(typeof needle == 'string' || typeof needle == 'number')
  {
    for(var i in haystack)
    {
      if(haystack[i] == needle)
      {
        return true;
      }
    }
  }
  return false;
}

var pmwinposition = new Array();

var userAgent = navigator.userAgent.toLowerCase();
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko') && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);
function pmwin(action, param)
{
  var objs = document.getElementsByTagName("OBJECT");
  if(action == 'open')
  {
    for(i = 0;i < objs.length; i ++)
    {
      if(objs[i].style.visibility != 'hidden')
      {
        objs[i].setAttribute("oldvisibility", objs[i].style.visibility);
        objs[i].style.visibility = 'hidden';
      }
    }
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
    var scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    var pmwidth = 800;
    var pmheight = clientHeight * 0.9;
    if(!$$('pmlayer'))
    {
      div = document.createElement('div');div.id = 'pmlayer';
      div.style.width = pmwidth + 'px';
      div.style.height = pmheight + 'px';
      div.style.left = ((clientWidth - pmwidth) / 2) + 'px';
      div.style.position = 'absolute';
      div.style.zIndex = '999';
      $$('append_parent').appendChild(div);
      $$('pmlayer').innerHTML = '<div style="width: 800px; background: #666666; margin: 5px auto; text-align: left">' +
        '<div style="width: 800px; height: ' + pmheight + 'px; padding: 1px; background: #FFFFFF; border: 1px solid #7597B8; position: relative; left: -6px; top: -3px">' +
        '<div onmousedown="pmwindrag(event, 1)" onmousemove="pmwindrag(event, 2)" onmouseup="pmwindrag(event, 3)" style="cursor: move; position: relative; left: 0px; top: 0px; width: 800px; height: 30px; margin-bottom: -30px;"></div>' +
        '<a href="###" onclick="pmwin(\'close\')"><img style="position: absolute; right: 20px; top: 15px" src="images/close.gif" title="'+close+'" /></a>' +
        '<iframe id="pmframe" name="pmframe" style="width:' + pmwidth + 'px;height:100%" allowTransparency="true" frameborder="0"></iframe></div></div>';
    }
    $$('pmlayer').style.display = '';
    $$('pmlayer').style.top = ((clientHeight - pmheight) / 2 + scrollTop) + 'px';
    if(!param)
    {
        pmframe.location = 'pm.php';
    }
    else
    {
        pmframe.location = 'pm.php?' + param;
    }
  }
  else if(action == 'close')
  {
    for(i = 0;i < objs.length; i ++)
    {
      if(objs[i].attributes['oldvisibility'])
      {
        objs[i].style.visibility = objs[i].attributes['oldvisibility'].nodeValue;
        objs[i].removeAttribute('oldvisibility');
      }
    }
    hiddenobj = new Array();
    $$('pmlayer').style.display = 'none';
  }
}

var pmwindragstart = new Array();
function pmwindrag(e, op)
{
  if(op == 1)
  {
    pmwindragstart = is_ie ? [event.clientX, event.clientY] : [e.clientX, e.clientY];
    pmwindragstart[2] = parseInt($$('pmlayer').style.left);
    pmwindragstart[3] = parseInt($$('pmlayer').style.top);
    doane(e);
  }
  else if(op == 2 && pmwindragstart[0])
  {
    var pmwindragnow = is_ie ? [event.clientX, event.clientY] : [e.clientX, e.clientY];
    $$('pmlayer').style.left = (pmwindragstart[2] + pmwindragnow[0] - pmwindragstart[0]) + 'px';
    $$('pmlayer').style.top = (pmwindragstart[3] + pmwindragnow[1] - pmwindragstart[1]) + 'px';
    doane(e);
  }
  else if(op == 3)
  {
    pmwindragstart = [];
    doane(e);
  }
}

function doane(event)
{
  e = event ? event : window.event;
  if(is_ie)
  {
    e.returnValue = false;
    e.cancelBubble = true;
  }
  else if(e)
  {
    e.stopPropagation();
    e.preventDefault();
  }
}

/* *
 * 添加礼包到购物车
 */
function addPackageToCart(packageId)
{
  var package_info = new Object();
  var number       = 1;

  package_info.package_id = packageId
  package_info.number     = number;
  
  if(document.getElementById('confirm_type')){
	  var confirm_type = document.getElementById('confirm_type').value;
	  package_info.confirm_type   = confirm_type; 
  }
  
  if(document.getElementById('warehouse_id')){
	  var warehouse_id = document.getElementById('warehouse_id').value;
	  package_info.warehouse_id   = warehouse_id; 
  }
  
  if(document.getElementById('area_id')){
	  var area_id = document.getElementById('area_id').value;
	  package_info.area_id   = area_id; 
  }

  Ajax.call('flow.php?step=add_package_to_cart', 'package_info=' + $.toJSON(package_info), addPackageToCartResponse, 'POST', 'JSON');
}

/* 购物车加减 */
function addPackageToCartFlow(packageId, rec_id, diff, warehouse_id, area_id, type)
{
  var package_info = new Object();
  
  if(type == 1){
	  var number = Number($('#goods_number_' + rec_id).val()) + Number(diff);  
  }else if(type == 2){
	  var number = Number(diff);  
  }
  

  package_info.package_id = packageId
  package_info.number     = number;
  package_info.confirm_type   = 3; 
  package_info.warehouse_id   = warehouse_id; 
  package_info.area_id   = area_id;
  package_info.type   = type;
  
  Ajax.call('flow.php?step=add_package_to_cart', 'package_info=' + $.toJSON(package_info), addPackageToCartResponse, 'POST', 'JSON');
}

/* *
 * 处理添加礼包到购物车的反馈信息
 */
function addPackageToCartResponse(result)
{
  if (result.error > 0)
  {
    pbDialog(result.message,"",0);
  }
  else
  {
    var cartInfo = document.getElementById('ECS_CARTINFO');
    var cart_url = 'flow.php?step=cart';
	
    if (cartInfo)
    {
      cartInfo.innerHTML = result.content;
    }

    if (result.one_step_buy == '1')
    {
      location.href = cart_url;
    }
    else
    {
      switch(result.confirm_type)
      {
        case '1' :
          if (confirm(result.message)) location.href = cart_url;
          break;
        case '2' :
          if (!confirm(result.message)) location.href = cart_url;
          break;
        case '3' :
          location.href = cart_url;
          break;
        default :
          break;
      }
    }
  }
}

function setSuitShow(suitId)
{
    var suit    = document.getElementById('suit_'+suitId);
    if(suit == null)
    {
        return;
    }
    if(suit.style.display=='none')
    {
        suit.style.display='';
    }
    else
    {
        suit.style.display='none';
    }
}


/* 以下四个函数为属性选择弹出框的功能函数部分 */
//检测层是否已经存在
function docEle() 
{
  return document.getElementById(arguments[0]) || false;
}

//生成属性选择层
function openSpeDiv(message, goods_id, parent, warehouse_id, area_id,divId,confirm_type,number) 
{
	pb({
		id:'addCartLog',
		title:json_languages.Select_attr,
		width:500,
		content:message,
		ok_title:json_languages.determine,
		cl_title:json_languages.cancel,
		drag:false,
		foot:true,
		onOk:function(){
			submit_div(goods_id, parent, warehouse_id, area_id,divId,confirm_type,number);	
		}
	});
	
	$(".attr_list .item li").click(function(){
		var type=$(this).find("input").attr("type");
		if(type == "checkbox")
		{
			var length = 0;
			if($(this).hasClass("selected"))
			{
				$(this).removeClass("selected");
				$(this).find("input[type='checkbox']").prop("checked",false);
				length =$(this).parent().find(".selected").length;
				if(length<1){
					pbDialog(json_languages.Select_attr,"",0);
					$(this).addClass("selected");
					$(this).find("input[type='checkbox']").prop("checked",true);	
				}
			}
			else
			{
				$(this).addClass("selected");
				$(this).find("input[type='checkbox']").prop("checked",true);	
			}
		}
		else
		{
			$(this).addClass("selected").siblings().removeClass("selected");
			$(this).find("input[type='radio']").prop("checked",true);
		}
		
		cat_changePrice();
	});
} 

//获取选择属性后，再次提交到购物车
function submit_div(goods_id, parentId, warehouse_id, area_id,divId,confirm_type,number) 
{
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  var input_arr      = $(".attr_list").find("input"); 
  var number	   = $("#quantity_" + goods_id).val();
  var quick		   = 1;
  
  if(!number){
	  var number = 1;
  }

  var spec_arr = new Array();
  var j = 0;
  for (i = 0; i < input_arr.length; i ++ )
  {
   	
    if((input_arr[i].type == 'radio' || input_arr[i].type == 'checkbox') && input_arr[i].checked)
    {
      spec_arr[j] = input_arr[i].value;
      j++ ;
    }
  }


  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goods_id;
  goods.warehouse_id = warehouse_id;
  goods.area_id = area_id;
  goods.number   = number;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
  goods.divId    = divId;
  goods.confirm_type = confirm_type;
  
  //商品属性组是否有选中
	var attr_list = 0;
	var is_selected = 0;
	$(".goods_info_attr").each(function(index, element) {
		attr_list = index + 1;
		
		if($(this).find("div.dd ul li").hasClass("selected")){
			is_selected = is_selected + 1
		} 
	});
	
	if($(".goods_info_attr").length > 0){
	  if(attr_list == is_selected){
		  Ajax.call('flow.php?step=add_to_cart', 'goods=' + $.toJSON(goods), addToCartResponse, 'POST', 'JSON');
	  }else{
		  get_goods_prompt_message(json_languages.Product_spec_prompt);
	  }
	}else{
	  Ajax.call('flow.php?step=add_to_cart', 'goods=' + $.toJSON(goods), addToCartResponse, 'POST', 'JSON');
	}
}

// 关闭mask和新图层
function cancel_div() 
{
  document.body.removeChild(docEle('speDiv'));
  document.body.removeChild(docEle('mask'));

  var i = 0;
  var sel_obj = document.getElementsByTagName('select');
  while (sel_obj[i])
  {
    sel_obj[i].style.visibility = "";
    i++;
  }
}

/**
 * 根据元素clsssName得到元素集合
 * @param fatherId 父元素的ID，默认为document
 * @tagName 子元素的标签名
 * @className 用空格分开的className字符串
 */
function getElementsByClassName(fatherId,tagName,className){
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

function flyCart(client_x,client_y,img_url,cart_num,result,divId){
	var cartInfo = document.getElementById('ECS_CARTINFO');
	if(client_x&&client_y&&img_url)
	{
		var b_v = navigator.appVersion;
		var IE7 = b_v.search(/MSIE 7/i) != -1;
		// 元素以及其他一些变量
		if(IE7){
			var eleFlyElement = document.getElementById(divId), eleShopCart = document.getElementById("shopCart");
		}else{
			var eleFlyElement = document.querySelector("#"+divId), eleShopCart = document.querySelector("#shopCart");
		}
		
		// 抛物线运动
		var myParabola = funParabola(eleFlyElement, eleShopCart, {
			speed: 500, //抛物线速度
			curvature: 0.001, //控制抛物线弧度
			complete: function() {
				eleFlyElement.style.visibility = "hidden";
				if(IE7){
					eleShopCart.lastChild.innerHTML = ++numberItem;
				}else{
					$("#ECS_CARTINFO").html(result.content);
					$(".cart_num").html(cart_num);
				}
			}
		});
		
		// 滚动大小
			var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
				scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
				eleFlyElement.firstChild.src = img_url;
				eleFlyElement.style.left = client_x + scrollLeft + "px";
				eleFlyElement.style.top = client_y + scrollTop + "px";
				eleFlyElement.style.visibility = "visible";
			
			// 需要重定位
			myParabola.position().move();	
	}
	else
	{
		if (cartInfo)
		{
		  cartInfo.innerHTML = result.content;
		}
		$(".cart_num").html(cart_num);
	}
	
}


function get_collect_store(type, ru_id){
	var ftx_div = '';
	var message = '';
	var merchant_id = $(".merchantId").val();
	var ok_title = json_languages.determine;
	var cl_title = json_languages.cancel;
	var divId = "dialog_public_collect_store";
	var foot = true;
	var width = 455;
	var height = 78;
	var execute = 1;
    var error = $("#error").val();
	
	if(error == 1){
	   pbDialog(json_languages.Focus_prompt_one,"",0);
    }
	if(ru_id > 0){
		merchant_id = ru_id;
	}
	
	Ajax.call('merchants_store.php?act=ajax_collect_store', 'merchant_id=' + merchant_id + '&type=' + type + '&execute=' + execute, function(res){
		if(res.error == 1){
			message = json_languages.Focus_prompt_one;
			foot = false;
		}else if(res.error == 2){
			message = json_languages.Focus_prompt_login;
			ftx_div = '<div class="ftx-03">'+json_languages.Focus_prompt_two+'</div>';
			foot = true;
		}
		
		if(res.error > 0 && res.error < 3){
                    
			var content = '<div id="' + divId + '">' + 
								'<div class="tip-box icon-box">' +
									'<span class="warn-icon m-icon"></span>' + 
									'<div class="item-fore">' +
										'<h3 class="rem ftx-04">' + message + '</h3>' +
										ftx_div + 
									'</div>' +
								'</div>' +
							'</div>';
			
			pb({
				id:divId,
				title:json_languages.store_focus,
				width:width,
				height:height,
				content:content, 	//调取内容
				ok_title:ok_title, 	//按钮名称
				cl_title:cl_title, 	//按钮名称
				drag:false,
				foot:foot,
				onOk:function(){
					if(res.error == 2){
						location.href = 'user.php';
					}
				}
			});
			
			$('#' + divId + ' .pb-ft .pb-ok').addClass('color_df3134');
			
			if(res.error == 2){
				$('#' + divId + ' .item-fore').css({
					'height' : '68px'
				});
				
				$('.pb-ok').addClass('color_df3134');
			}
		}else if(res.error == 3){
			if(type == 0){
				message = json_languages.Focus_prompt_three;
			}else if(type == 1){
				message = json_languages.Focus_prompt_four;
			}else if(type == 2){
                                
				message = json_languages.Focus_prompt_five;
			}
			var content = '<div id="' + divId + '">' + 
							'<div class="tip-box icon-box">' +
								'<span class="warn-icon-wen m-icon"></span>' + 
								'<div class="item-fore">' +
									'<h3 class="rem ftx-04">' + message + '</h3>' +
								'</div>' +
							'</div>' +
						'</div>';
			pb({
				id:divId,
				title:json_languages.store_focus,
				width:455,
				height:58,
				ok_title:ok_title, 	//按钮名称
				cl_title:cl_title, 	//按钮名称
				content:content, 	//调取内容
				drag:false,
				foot:foot,
				onOk:function(){
                                    
					Ajax.call('merchants_store.php?act=ajax_collect_store', 'merchant_id=' + merchant_id + '&type=' + type, function(res){
						if(res.type == 2){
							location.reload();
							$("#error").val(1);
						}else{
							$("#error").val(2);
							location.href = 'user.php?act=store_list';
						}
					}, 'GET', 'JSON');
				}
			});	
			
			$('#' + divId + ' .pb-ft .pb-ok').addClass('color_df3134');
		}
	}, 'GET', 'JSON');
}

//众筹支持者列表 by wu
function get_backer_list(zcid,page)
{
	$.ajax({
		type:'get',
		url:'crowdfunding.php',
		data:'act=get_backer_list&zcid='+zcid+"&page="+page,
		dataType:'json',
		success:function(data){
			$("#backer_list").html(data.content);
		}		
	})
} 

//众筹话题列表 by wu
function get_topic_list(zcid,page)
{
	$.ajax({
		type:'get',
		url:'crowdfunding.php',
		data:'act=get_topic_list&zcid='+zcid+"&page="+page,
		dataType:'json',
		success:function(data){
			$("#topic_list").html(data.content);
		}		
	})
}

//购物提示错误信息
function get_goods_prompt_message(text){
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
