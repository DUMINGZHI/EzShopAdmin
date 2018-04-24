/*
**Name:dsc-common.js
**Author:ecmoban Team sunle
**Description:Commonly used JS
**Date:2017-02-06 15:30:30
*/
 
/* 全局变量 */ 
var user_id = $("input[name='user_id']").val(), //会员ID
	goods_id = 0,	//商品ID
	ru_id = 0,		//商家ID
	store_id = 0,	//门店ID
	hoverTimer = '',
	outTimer = '',
	doc = $(document);
	
$(function(){
	/************************************** 通用内容start ****************************************/
	// 顶部快捷栏 地区切换 and 网站导航
	$("*[data-ectype='dorpdown']").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	
	//顶部快捷栏 地区选择
	$("#site-nav").jScroll();
	
	// 面包屑
	$(".crumbs-nav-item .menu-drop").hover(function(){
		$(this).addClass("menu-drop-open");
	},function(){
		$(this).removeClass("menu-drop-open");
	});
	
	//返回顶部
	doc.on("click","[ectype='returnTop']",function(){
		$("body,html").animate({scrollTop:0});
	});
	
	//top_banner关闭
	$("*[ectype='close']").click(function(){
		$(this).parents(".top-banner").hide();
	});
	
	//底部二维码切换
	$(".help-scan .tabs li").hover(function(){
		var t = $(this);
		var index = t.index();
		t.addClass("curr").siblings().removeClass("curr");
		$(".code").find(".code_tp").eq(index).show().siblings().hide();
	});
	
	//价格筛选
	$(".fP-box input").click(function(){
		$('.fP-expand').show();
	});
	
	//价格筛选提交
	$('.ui-btn-submit').click(function(){
		var min_price = Number($(".price-min").val());
		var max_price = Number($(".price-max").val());
		
		if(min_price == '' && max_price == ''){
			pbDialog(json_languages.screen_price,"",0);
			return false;
		}else if(min_price == ''){
			pbDialog(json_languages.screen_price_left,"",0);
			return false;
		}else if(max_price == ''){
			pbDialog(json_languages.screen_price_right,"",0);
			return false;
		}else if(min_price > max_price || min_price == max_price){
			pbDialog(json_languages.screen_price_dy,"",0,"","",70);
			return false;
		}
		$("form[name='listform']").submit();
	});
	
	$('.ui-btn-clear').click(function(){
		$("input[name='price_min']").val('');
		$("input[name='price_max']").val('');
	});
	
	//优惠活动价格筛选提交（团购、夺宝奇兵等）
	$('.ui-btn-submit').click(function(){
		$("form[name='listform']").submit();
	});

	//头部搜索
	$.inputPrompt("#keyword",true,$('#keyword').val());
	$.inputPrompt("#keyword2",true,$('#keyword2').val());
	
	//导航栏全部分类展开
	$("*[ectype='cateItem']").on('mouseenter',function(){
		var T = $(this),
			cat_id = T.data('id'),
			eveval = T.data('eveval'),
			layer = T.find("*[ectype='cateLayer']");
		
		if(eveval != 1){
			T.data('eveval', '1');
			/*加载中by wu*/
			layer.find("*[ectype='subitems_" + cat_id + "']").html('<img src="./img/loadGoods.gif" width="200" height="200" class="lazy">');
			$.ajax({
			   type: "GET",
			   url: "ajax_dialog.php",
			   data: "act=getCategoryCallback&cat_id=" + cat_id,
			   dataType:'json',
			   success: function(data){
					var strLength = Number(data.topic_content.length),
						channels = $("*[ectype='channels_" + data.cat_id + "']"),
						subitems = $("*[ectype='subitems_" + data.cat_id + "']"),
						brands = $("*[ectype='brands_" + data.cat_id + "']");
					if(strLength == 2 || strLength == 0){
						channels.hide();
					}
					channels.html(data.topic_content);
					subitems.html(data.cat_content);
					brands.html(data.brands_ad_content);
			   }
			});
		}

		T.addClass("selected");
		layer.show();
	}).on("mouseleave",function(){
		var T = $(this),layer = T.parent().find("*[ectype='cateLayer']");
		T.removeClass("selected");
		layer.hide();
	});
	
	//顶级分类展开（女装模板）
	$("*[ectype='items'] *[ectype='item']").on('mouseenter',function(){
		var T = $(this),
			cat_id = T.data('catid'),
			eveval = T.data('eveval'),
			layer = T.find("*[ectype='cateLayer']"),
            defa = '';
		if(T.data('defa')){
			defa = T.data('defa');
		}
		if(eveval != 1){
			T.data('eveval', '1');
			/*加载中by wu*/
			layer.find("*[ectype='subitems_" + cat_id + "']").html('<img src="./img/loadGoods.gif" width="200" height="200" class="lazy">');
			$.ajax({
			   type: "GET",
			   url: "get_ajax_content.php",
			   data: "act=getCategotyParentTree&cat_id=" + cat_id + "&defa=" + defa,
			   dataType:'json',
			   success: function(data){
				 $("*[ectype='subitems_" + data.cat_id + "']").html(data.brands_content);
			   }
			});
		}

		T.addClass("selected");
		layer.show();
	}).on("mouseleave",function(){
		var T = $(this),layer = T.parent().find("*[ectype='cateLayer']");
		T.removeClass("selected");
		layer.hide();
	});	
	
	//b2b二级导航展开
	$(".b2b-categorys-content li").hover(function(){
		var T = $(this),layer = T.find("*[ectype='cateLayer']");
		layer.show();
	},function(){
		var T = $(this),layer = T.find("*[ectype='cateLayer']");
		layer.hide();
	});
	
	//点击空白处隐藏展开框	
	$(document).click(function(e){
		//购物车更多促销活动
		if(e.target.className !='sales-promotion' && !$(e.target).parents("div").is("[ectype='promInfo']")){
			$("[ectype='promInfo']").removeClass("prom-hover");
		}
		
		if(e.target.id !='price-min' && e.target.id !='price-max'){
			$('.fP-expand').hide();
		}
		
		//仿select
		if(e.target.className !='cite' && !$(e.target).parents("div").is(".imitate_select")){
			$('.imitate_select ul').hide();
		}
		
		if(e.target.id !='btn-anchor' && !$(e.target).parents("div").is(".tb-popsku")){
			$('.tb-popsku').hide();
		}
		
		//首页弹出广告
		if(e.target.className == 'ejectAdvbg' && !$(e.target).parents("div").is(".ejectAdvimg")){
			$("*[ectype='ejectAdv']").hide();
		}
	});
	
	$(".value-item").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
	});
	
	//div仿select下拉选框 start
	$(document).on("click",".imitate_select .cite",function(){
		$(".imitate_select ul").hide();
		$(this).parents(".imitate_select").find("ul").show();
		$(this).siblings("ul").perfectScrollbar("destroy");
		$(this).siblings("ul").perfectScrollbar();
	});
	
	$(document).on("click",".imitate_select li  a",function(){
		var _this = $(this);
		var val = _this.data('value');
		var text = _this.html();
		_this.parents(".imitate_select").find(".cite span").html(text).css("color","#707070");
		_this.parents(".imitate_select").find("input[type=hidden]").val(val);
		_this.parents(".imitate_select").find("ul").hide();
	});
	//div仿select下拉选框 end
	
	//input获得焦点加样式
	$("input.text").focus(function(){
		$(this).parents(".item").addClass("item-focus");
	});
	
	$("input.text").blur(function(){
		$(this).parents(".item").removeClass("item-focus");
	});
	
	/*****************************右侧黑色悬浮栏内容点击触发事件start***************************************/
	//移动图标出现文字提示
	$(".quick_links_panel li").hover(function(){
		$(this).find(".mp_tooltip").stop().animate({left:-92,queue:true});
		$(this).find(".mp_tooltip").css("visibility","visible");
		$(this).find(".ibar_login_box").show();
	},function(){
		$(this).find(".mp_tooltip").css("visibility","hidden");
		$(this).find(".mp_tooltip").stop().animate({left:-121,queue:true});
		$(this).find(".ibar_login_box").hide();
	});
	
	//点击图标判断用户是否登录
	$(".quick_links li").find("a").click(function(){
		var $this = $(this),
			user_id = $this.parents(".quick_link_mian").data("userid");
		
		if(user_id < 1 && !$this.hasClass('cart_list') && !$this.hasClass('mpbtn_history') && !$this.hasClass('mpbtn_email')){
			$.notLogin("get_ajax_content.php?act=get_login_dialog",'');
			return false;
		}
	});
	
	//点击展开邮箱订阅
	$(".mpbtn_email").click(function(){
		var obj = $(".email_sub");
		if(obj.hasClass("show")){
			obj.removeClass("show");
		}else{
			obj.addClass("show");
		}
	});
	
	//判断浏览器下滚还是上滚，向上滚动邮箱验证隐藏
	$(document).ready(function(){
		var p=0,t=0;
		var obj = $(".email_sub");
		$(window).scroll(function(e){
			p = $(this).scrollTop();
			if(t<=p){
				if(obj.hasClass("show")){
					obj.addClass("show");
				}
			}else{
				obj.removeClass("show");
			}
			setTimeout(function(){t = p;},0);		
		});
	});
	/*****************************右侧黑色悬浮栏内容点击触发事件end***************************************/
	
	//关注品牌
	$(document).on("click","*[ectype='coll_brand']",function(){
		var user_id = $("input[name=user_id]").val();
		if(user_id > 0){
			var brand_id = $(this).data('bid');
			if($(this).find("i").hasClass("icon-zan-alts")){
				$(this).find("i").removeClass("icon-zan-alts").addClass("icon-zan-alt");
				$(this).find("*[ectype='follow_span']").html("关注");
				Ajax.call('brandn.php', 'act=cancel&id=' + brand_id +'&user_id='+user_id, collect_brandResponse, 'POST', 'JSON');
			}else{
				$(this).find("i").removeClass("icon-zan-alt").addClass("icon-zan-alts");
				$(this).find("*[ectype='follow_span']").html("已关注");
				Ajax.call('brandn.php', 'act=collect&id=' + brand_id, collect_brandResponse, 'POST', 'JSON');
			}
		}else{
            var back_url = "brand.php";
			$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);	
		}
	});
	
	//关注品牌回调函数
	function collect_brandResponse(result)
	{
        $("#collect_count").html(result.collect_count);
		$("#collect_count_"+result.brand_id).html(result.collect_count);;
	}
	
	/****会员领取优惠券 start***/
	$(document).on("click",".get-coupon",function(){
		var cou_id = $(this).attr('cou_id');
                var coupon = '';
                if($(this).data('coupon')){
                    coupon = $(this).data('coupon');
                }
		receiveCoupon(cou_id,coupon);
	});
	
	function receiveCoupon(cou_id,coupon){
		if(user_id > 0){
			$.post('coupons.php?act=coupons_receive',{'cou_id':cou_id},function(data){
				if(data.status=='ok'){
                    $(".item-fore h3").html(data.msg);
                    $(".success-icon").removeClass("i-icon").addClass("m-icon");
					var content =$("#pd_coupons").html();
					pb({
						id:"coupons_dialog",
						title:json_languages.receive_coupons,
						width:550,
						height:140,
						ok_title:json_languages.Immediate_use, 	//按钮名称
						cl_title:json_languages.close, 	//按钮名称
						content:content, 	//调取内容
						drag:false,
						foot:true,
						onOk:function(){
							location.href="search.php?cou_id="+cou_id
						},
						onCancel:function(){
							$(".cou-data").html(data.content);
							$(".cou-seckill").html(data.content_kill);
						},
					});
					
					$(".pb-ok").addClass("color_df3134");
				}else{
					$(".success-icon").removeClass("m-icon").addClass("i-icon");
					$(".item-fore h3").addClass("red");
					$(".item-fore h3").html(data.msg);
					var content =$("#pd_coupons").html();
					pb({
						id:"coupons_dialog",
						title:json_languages.receive_coupons,
						width:550,
						height:140,
						ok_title:json_languages.close, 	//按钮名称
						content:content, 	//调取内容
						cl_cBtn:false,
						onOk:function(){}
					});
				}
			},'json');
		}else{
                   var back_url = "coupons.php?act=coupons_index";
                   if(coupon == 1){
                       back_url = 'coupons.php?act=coupons_info&id=' + cou_id;
                   }
                    $.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
        	return false;
		}
	}
	/****会员领取优惠券 end***/
	
	
	/* 商品收藏 品牌关注 店铺关注 */
	$(document).on('click',"*[data-dialog='goods_collect_dialog']",function(){
		var url = $(this).data('url'),
			id = $(this).data('goodsid'),
			divId = $(this).data("divid"),
			width = 455,
			height = 58,
			content = "";
		
		if(id > 0){
			Ajax.call(url, 'id=' + id, function(data){
				
				if(data.error > 0){
					if(data.error == 2){
						$.notLogin("get_ajax_content.php?act=get_login_dialog", data.url);
						return false;
					}
					
					pbDialog(data.message,"",0,width,height,65,true,function(){
						location.href = "user.php?act=collection_list";
					},"会员中心");
					
				}else{
					$(".choose-btn-coll").addClass('selected');
					$(".choose-btn-icon").addClass('icon-collection-alt').removeClass('icon-collection');
					$("#collect_count").html(data.collect_count);
					
					pbDialog("您已成功收藏该商品！","",1,width,height,95,false,function(){
						location.href = "user.php?act=collection_list";
					},json_languages.My_collection);
				}
				
			}, 'GET', 'JSON');
		}else{
			if(divId == 'delete_goods_collect'){
				content = "您确定要取消关注该商品吗？"; 
			}else if(divId == "delete_brand_collect"){
				content = "您确定要取消关注该品牌吗？"; 
			}
			
			pbDialog(content,"",0,width,height,95,true,function(){
				location.href = url;
			});
		}		
	});
	
	/* 对比框隐藏 */
	$("[ectype='db_hide']").on("click",function(){
		$("#slideTxtBox").hide();
	});
	
	/* 对比 */
	var db_winWidth = $(window).width();
	var db_left = (db_winWidth-1200)/2;
	$("#slideTxtBox").css({"left":db_left});
	
	$(window).resize(function(){
		db_winWidth = $(this).width();
		if(db_winWidth>1200){
			db_left = (db_winWidth-1200)/2;
			$("#slideTxtBox").css({"left":db_left});
		}else{
			$("#slideTxtBox").css({"left":0});
		}
	});
	
	
	//商品名称title设置了颜色 前台处理title html代码
	if($(".p-name a").length > 0){
		if($(".p-name a").prop("title") != ""){
			var title = $(".p-name a").attr('title');
		
			var newTitle = title.replace(/<\/?[^>]*>/g,''); 
			$(".p-name a").attr('title',newTitle);
		}
	}
	
	/*var brand_select = $(".brand_select_more");
	if(brand_select.length>0){
		brand_select.hover(function(e){
            $(".brand_select_more").perfectScrollbar("destroy");
			$(".brand_select_more").perfectScrollbar();
        });
	}*/
	
	
	
	/************************************** 通用内容end ******************************************/
	
	/************************************** 批发市场 start ******************************************/
	$(document).on(" click","*[ectype='lieMore']",function(){
		var t = $(this);
		var parent = t.parents("*[ectype='lieItems']");
		if(t.hasClass("lie-down")){
			t.removeClass("lie-down");
			t.find("i").addClass("icon-down").removeClass("icon-up");
			parent.find("*[ectype='lieItem']").addClass("hide").eq(0).removeClass("hide");
		}else{
			t.addClass("lie-down");
			t.find("i").removeClass("icon-down").addClass("icon-up");
			parent.find("*[ectype='lieItem']").removeClass("hide");
			
		}
	});
	/************************************** 批发市场 end ******************************************/
	
	/************************************** 首页 start ******************************************/
	
	//首页楼层鼠标移动分类触发事件
	$(document).on("mouseenter","li[ectype='floor_cat_content']",function(){
		get_homefloor_cat_content(this);
	});
	
	//首页品牌 换一批切换
	doc.on('click',"*[ectype='changeBrand']",function(){
		Ajax.call("get_ajax_content.php","act=ajax_change_brands",changeBrandResponse,'GET','JSON');
	});	
	
	function changeBrandResponse(result){
		$("#recommend_brands").html(result.content);
	}
	
	//首页弹出全屏广告
	$(window).load(function(){
		$("*[ectype='ejectAdv']").show();
	});
	
	$("*[ectype='ejectClose']").on("click",function(){
		$("*[ectype='ejectAdv']").hide();
	});

	/************************************** 首页 end ******************************************/
	
	/************************************** 商品列表页start ***************************************/
	$("a[ectype='gstop']").on("click",function(){
		var parent = $(this).parents(".goods-spread");
		var ico = $(this).find("i");
		var goodslist = parent.siblings(".goods-list");
		var right = 0;
		
		var winWidth = $(window).width();
		
		var minWidth = 1160;
		var maxWidth = 1392;
		
		if(winWidth < 1450){
			minWidth = 978;
			maxWidth = 1200;
		}
		
		if(parent.hasClass("goods-spread-fix")){
			goodslist.stop().animate({"width":minWidth},startAnimate);
			goodslist.removeClass("goods-list-w1390");
		}else{
			goodslist.stop().animate({"width":maxWidth});
			
			right = ($(window).width() - maxWidth)/2;
			parent.css("right",right-60);
			
			goodslist.addClass("goods-list-w1390");
			
			parent.addClass("goods-spread-fix");
			ico.removeClass("icon-right").addClass("icon-left");
		}
		
		function startAnimate(){
			parent.removeClass("goods-spread-fix");	
			ico.removeClass("icon-left").addClass("icon-right");
		}
	});
	
	$("*[ectype='fsortTab'] .item").on("click",function(){
		var Item = $(this);
		var type = Item.data("type");
		var main = $("*[ectype='gMain']");
		
		Item.addClass("current").siblings(".item").removeClass("current");
		if(type == "large"){
			main.find(".gl-warp-large").show();
			main.find(".gl-warp-samll").hide();
		}else{
			main.find(".gl-warp-large").hide();
			main.find(".gl-warp-samll").show();
		}
	});
	
	//列表页 相册切换
    $(".sider li").hover(function(){
		var src = $(this).find('img').attr("src");
		$(this).parents(".sider").prev().find("img").attr("src",src);
		$(this).addClass("curr").siblings().removeClass("curr");
	});
	
    //产品列表筛选
    $(".fcheckbox .checkbox_item label").click(function(){
		var check = $(this).prev();
		if(check.prop("checked") == true){
			var input_url = ($(this).nextAll('#input-i2').attr('rev'));
			check.addClass("checkbox-checked");
		}else{
			var input_url = ($(this).nextAll("#input-i1").attr('rev'));
			check.addClass("checkbox-checked");
		}
		location.href = input_url;
    });
	/************************************** 商品列表页(goods_list)end ***************************************/
	
	
	/************************************** 商品详情页(goods_info)start ***************************************/
	//多个促销活动展开
	$("*[ectype='view-prom']").hover(function(){
		var $this = $(this);
		var s_wrap = $this.parents(".summary-price-wrap");
		var w_wrap = $this.parents(".s-p-w-wrap");
		var height = w_wrap.outerHeight();
		
		s_wrap.css("height",height);
		w_wrap.addClass("z-promotions-all-show");
		
	},function(){
		var $this = $(this);
		var w_wrap = $this.parents(".s-p-w-wrap");
		w_wrap.removeClass("z-promotions-all-show");
	});
	
	//配送地区选择展开效果
	$("*[ectype='areaSelect']").hover(function(){
		var $this = $(this);
		$this.find(".area-warp").show();
		$this.addClass("hover");
		$this.find(".iconfont").removeClass("icon-down").addClass("icon-up");
	},function(){
		var $this = $(this);
		$this.find(".area-warp").hide();
		$this.removeClass("hover");
		$this.find(".iconfont").removeClass("icon-up").addClass("icon-down");
	});
	
	//商品属性选择切换
	$("*[ectype='is-attr'] .item").on("click",function(){
		var $this = $(this),
			parent = $this.parents("*[ectype='is-attr']"),
			type = parent.data("type"),
			name = $this.data("name"),
			spec_value = 0;
			
			spec_value = $this.find("input").val();
			Ajax.call('ajax_dialog.php', 'act=getInfo&goods_id=' + goodsId + '&attr_id=' + spec_value, getImgUrl, 'GET', 'JSON');

		if(type == "radio"){
			$this.find("input[type='radio']").prop("checked",true);
			$this.addClass("selected").siblings().removeClass("selected");
			
			$("[data-name="+name+"]").find("input[type='radio']").prop("checked",true);
			$("[data-name="+name+"]").addClass("selected").siblings().removeClass("selected");
		}else if(type == "checkbox"){
			var len = parent.find(".selected").length;
			
			if($this.hasClass("selected")){
				if(len<=1)return;
				$this.removeClass("selected");
				$this.find("input[type='checkbox']").prop("checked",false);
				
				$("[data-name="+name+"]").removeClass("selected");
				$("[data-name="+name+"]").find("input[type='checkbox']").prop("checked",false);
			}else{
				$this.addClass("selected");
				$this.find("input[type='checkbox']").prop("checked",true);		
				
				$("[data-name="+name+"]").addClass("selected");
				$("[data-name="+name+"]").find("input[type='checkbox']").prop("checked",true);
			}
		}else{}
		
		changePrice();
	});
	
	//商品降价通知
	$("*[ectype='priceNotify']").on("click",function(){
		var $this = $(this),
			user_id = $this.data("userid"),
			goods_id = $this.data("goodsid"),
			content = $("#notify_box").html();
		
		//判断是否登录
		if(user_id == 0){
			var back_url = "goods.php?id=" + goods_id;
			$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
			return false;
		}else{
			pb({
				id:"notifyBox",
				title:json_languages.pb_title,
				width:500,
				height:210,
				content:content,
				ok_title:json_languages.determine,
				cl_title:json_languages.cancel,
				drag:false,
				foot:true,
				onOk:function(){
					notifyBox(user_id,goods_id,"#notifyBox");
				}
			});
		}
	});
	
	//白条分期
	$("*[ectype='is-ious'] .item").on("click",function(){
		var $this = $(this),
			val = $this.data("value");
		if($this.hasClass("selected")){
			$this.removeClass("selected");
			$this.siblings("input[name='stages_qishu']").val('');
		}else{
			$this.addClass("selected").siblings().removeClass("selected");
			$this.siblings("input[name='stages_qishu']").val(val);
		}
	});
	
	//分期提交表单
	$("*[ectype='byStages']").on("click",function(){
		var val = $("input[name='stages_qishu']").val();
		var goods_id = $("input[name='good_id']").val();
		var user_id = $("input[name='user_id']").val();

		if(user_id > 0){
			if(val > 0){
				window.location.href ="javascript:bool=1;addToCartStages(goods_id);";
			}else{
				get_goods_prompt_message(json_languages.select_stages_number);
			}
		}else{
			var back_url = "goods.php?id="+ goods_id;
			$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
		}
	});
	
	/*门店取货*/
	function goodsStorePick(){
		var goods_id = $("input[name='good_id']").val(),
			user_id = $("input[name='user_id']").val(),
			back_url = "goods.php?id="+ goods_id,
			formBuy  = document.forms['ECS_FORMBUY'],
			spec_arr = "",
			divId = "";
			
		//门店服务-门店取货弹窗口
		/*未登录 跳转登陆，登陆选择门店*/
		$("*[ectype='seller_store']").on("click",function(){
			//商品属性
			if(formBuy){
				spec_arr = getSelectedAttributes(formBuy);
			}
			
			divId = "storeDialogBody";
			if(user_id > 0){
				Ajax.call("get_ajax_content.php?act=get_store_list&goods_id="+goods_id+ '&spec_arr=' + spec_arr,'back_act='+ back_url, function(data){
					pb({
						id:divId,
						title:json_languages.see_store,
						width:670,
						height:320,
						content:data.content,
						drag:false,
						foot:false
					});
				}, 'POST','JSON');
			}else{
				$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
				return false;
			}
		});
		
		//到店取货弹框
		$("*[ectype='btn-store-pick']").on("click",function(){
			//商品属性
			if(formBuy){
				spec_arr = getSelectedAttributes(formBuy);
			}
			
			divId = "storePick";
			ru_id = $("input[name='merchantId']").val();
			
			/*未登录 跳转登陆，登陆选择门店*/
			if(user_id == 0){
				$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
				return false;
			}
			Ajax.call("get_ajax_content.php?act=storePick",'ru_id='+ ru_id + "&spec_arr=" + spec_arr +"&goods_id=" + goods_id, function(data){
				pb({
					id:divId,
					title:json_languages.store_subscribe,
					width:450,
					height:240,
					ok_title:json_languages.submit_subscribe,
					cl_title:json_languages.cancel,
					content:data.content, 	//调取内容
					drag:false,
					foot:true,
					onOk:function(){
						var store_id = $("input[name='store_id']").val(),
							end_time = $("input[name='end_time']").val(),
							store_mobile = $("input[name='store_mobile']").val();

						if(store_id > 0){
							if(store_mobile == ""){
								pbDialog(json_languages.login_phone_packup_one,"",0);
								$("input[name='store_mobile']").focus();
								return false;
							}else if(!Utils.isTel(store_mobile) || store_mobile.length != 11){
								pbDialog(json_languages.msg_phone_not,"",0);
								$("input[name='store_mobile']").focus();
								return false; 
							}else{
								bool=2;
								addToCart(goods_id,0,0,'','',store_id,end_time,store_mobile);
								return true;
							}
						}else{
							pbDialog(json_languages.select_store,"",0);
							return false;
						}
					}
				});
			}, 'POST','JSON');
		});
	
		/*更换选择门店*/
		$(document).on("click","*[ectype='storeSelect']",function(){
			//商品属性
			if(formBuy){
				spec_arr = getSelectedAttributes(formBuy);
			}
			
			divId = "latelStorePick";
			ru_id = $("input[name='merchantId']").val();
			Ajax.call("get_ajax_content.php?act=storeSelect",'ru_id='+ ru_id +  "&spec_arr=" + spec_arr +"&goods_id=" + goods_id, function(data){
				pb({
					id:divId,
					title:json_languages.store_lately,
					width:900,
					height:410,
					ok_title:json_languages.determine,
					cl_title:json_languages.cancel,
					content:data.content, 	//调取内容
					drag:false,
					foot:true,
					onOk: function () {
						store_id = $("#"+divId).find(".active input[name='store_id']").val();
						if(store_id > 0){
							Ajax.call("get_ajax_content.php?act=replaceStore",'store_id='+ store_id + "&spec_arr=" + spec_arr +"&goods_id=" + goods_id, function(result){
								$(".replaceStore").html(result.content);
							}, 'POST','JSON')
						}
					}
				});
				//$(".select-shop").perfectScrollbar("destroy");
				//$(".select-shop").perfectScrollbar();
			},'POST','JSON');
			
			//筛选城市门店
			regionSelect(ru_id,goods_id);
		});
	}
	
	//门店取货方法调用
	goodsStorePick();
	
	//商品详情页价格阶梯 start
	$("*[ectype='view_priceLadder']").hover(function(){
		/*clearTimeout(outTimer);
		var priceLadder = $(this).siblings("*[ectype='priceLadder']");
		hoverTimer = setTimeout(function(){priceLadder.show()},200);*/
		
		$(this).siblings("*[ectype='priceLadder']").show();
	},function(){
		$(this).siblings("*[ectype='priceLadder']").hide();
	});
	
	/*$("*[ectype='priceLadder']").hover(function(){
		clearTimeout(outTimer);
		$(this).show();
	},function(){
		$(this).hide();
	});*/
	//商品详情页价格阶梯 end
	
	//配送地区 start
	function areaAddress(){
		var $this = $("#area_address");
		var width=0;
		$this.hover(function(){
			width = $(this).outerWidth();
			$(this).find('.area-warp').show();
		},function(){
			$(this).find('.area-warp').hide();
		});
	}
	areaAddress();
	//配送地区 end
	
	//商品举报
	$("*[ectype='report']").on("click", function () {
		var goods_id = $("input[name='good_id']").val(),
			user_id = $("input[name='user_id']").val(),
			back_url = "user.php?act=goods_report&goods_id="+goods_id;
			
		if(user_id > 0) {
		   location.href = back_url;
		}else{
			$.notLogin("get_ajax_content.php?act=get_login_dialog", back_url);
			return false;
		}
	});
	
	//后台购买流程设置点击确定立即购买，并且没有登录会员弹出登录框(后台设置购物流程为一步购物)
	$("*[ectype='btn-buynow']").click(function(){
		var one_step_buy = $(this).data("type"),
			goods_id = $("input[name='good_id']").val();
			
		if(user_id <= 0 && one_step_buy == 1){
			var back_url = "goods.php?id=" + goods_id;
			$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
			return false;
		}
	});
	
	
	//预售详情 预售规则
	$(".sp-rule").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	
	//商品详情页悬浮栏加入购物车 商品规格
	$("*[ectype='tb-tab-anchor']").on("click",function(){
		var t = $(this);
		$(this).siblings(".tb-popsku").show();
	});
	
	$("*[ectype='tb-cancel']").on("click",function(){
		var t = $(this);
		$(this).parents(".tb-popsku").hide();
	});
	
	//商品详情页店铺展开收起
	$(".arrow-show-more").click(function(){
		$(".seller-pop-box,.seller-address").stop(true,false).slideToggle();
	});
	
	//店内分类展开收起
	$("*[ectype='cateOpen'] dt").click(function(){
		var $this = $(this);
		var dl = $this.parent("dl");
		if(dl.hasClass("hover")){
			dl.removeClass("hover");
		}else{
			dl.addClass("hover");
		}
	});
	
	//商品详情页 详情左侧 店铺商品热销、新品、精品排行
	var rankmcli_length = $("*[ectype='rankMcTab']").find("li").length;
	if(rankmcli_length == 1){
		$("*[ectype='rankMcTab']").addClass("mcOne");
	}else if(rankmcli_length == 2){
		$("*[ectype='rankMcTab']").addClass("mcTwo");
	}else if(rankmcli_length == 3){
		$("*[ectype='rankMcTab']").addClass("mcThree");
	}
	

	//评论筛选
	$("*[ectype='gmf-tab'] li").click(function(){
		var rev = $(this).attr("rev");
		var comment = "";
		var goods_id = $("input[name='good_id']").val()
		$(this).addClass("curr").siblings().removeClass("curr");
		
		if(rev == 1){
			comment = 'comment_good';	
		}else if(rev == 2){
			comment = 'comment_middle';
		}else if(rev == 3){
			comment = 'comment_short';
		}else{
			comment = 'comment_all';
		}
		
		goods_id = goods_id + "|" + rev;
		
		Ajax.call('comment.php?act=' + comment, 'id=' + goods_id, get_commentResponse, 'GET', 'JSON');
	});
	
	$("*[ectype='reply']").click(function(){
		if($(this).parents(".com-operate").next().hasClass("hide")){
			$(this).parents(".com-operate").next().removeClass("hide");
		}else{
			$(this).parents(".com-operate").next().addClass("hide");
		}
	});
	
	function get_commentResponse(result){
		$("#ECS_COMMENT").html(result.content);
	}
	
	//网友讨论圈
	$('.dis_type').click(function(){
		var T = $(this);
		var rev = T.attr('rev');
		var dis_sort = T.attr('sort');
		var revType = T.attr('revType');
		var goods_id = $("input[name='good_id']").val();
		
		$(this).addClass('curr').siblings().removeClass('curr');
		
		if(!revType){
			revType = 0; //加载模板
		}
		
		if(dis_sort){
			dis_sort = "|" + dis_sort;
			rev = $("input[name='dis_class']").val();
		}else{
			dis_sort = '';
			$("input[name='dis_class']").val(rev);
		}
		
		goods_id = goods_id + "|" + rev + "|" + revType + dis_sort;
		
		Ajax.call('comment_discuss.php?act=discuss', 'id=' + goods_id, comment_discussResponse, 'GET', 'JSON');
	});

	function comment_discussResponse(result){
		$("#discuss_list_ECS_COMMENT").html(result.content);
	}
	
	/*评论图片展开 start */
	$(document).on("click",".p-thumb-img li",function(){
		var $this = $(this);
		var imgUrl = $this.data("src");
		var viewImg = $this.parents(".p-imgs-warp").find(".p-view-img");
		var length = $this.siblings("li").length + 1;
		var fale = false;
		if($this.hasClass("curr")){
			$this.removeClass("curr");
			fale = false;
		}else{
			$this.addClass("curr").siblings().removeClass("curr");	
			fale = true;
		}
		
		if(fale == true){
			viewImg.show();
			viewImg.find("img").attr("src",imgUrl);
		}else{
			viewImg.hide();
		}
	});
	
	$(document).on("click",".p-view-img img",function(){
		var $this = $(this);
		var viewImg = $this.parents(".p-view-img");
		viewImg.hide();
		viewImg.siblings(".p-thumb-img").find("li").removeClass("curr");
	});
	
	$(document).on("click",".p-view-img a",function(){
		var $this = $(this);
		var imgs = $this.parents(".p-imgs-warp");
		var length = imgs.find("li").length;
		var count = imgs.find(".curr").data("count");
		
		if($this.hasClass("p-prev")){
			if(count>1){
				imgs.find("*[data-count="+(count-1)+"]").click();
			}
		}else{
			if(count != length){
				imgs.find("*[data-count="+(count+1)+"]").click();
			}
		}
	});
	/*评论图片展开end*/
	
	/************************************** 商品详情页(goods_list)end ***************************************/
	
	/************************************** 品牌专区(brand)start *******************************************/
	//品牌专区首页分类筛选
	$(document).on("click", "*[ectype='brandCate'] *[ectype='cateItem']", function(){
		var cat_id = $(this).data('catid');
		
		$(this).addClass('curr').siblings("*[ectype='cateItem']").removeClass('curr');
		
		$.jqueryAjax('brand.php', 'act=filter_category&cat_id='+cat_id, function(data){
			$("*[ectype='brandList'] *[ectype='items']").html(data.content);
		});
	});
	
	//品牌专区 品牌详情页 点击分类展示商品
	$(document).on("click","*[ectype='brandcat'] a",function(){
		var brand_id = $("input[name=brand_id]").val();
		var cat_id = $(this).data("catid");
		
		$(this).addClass("curr").siblings().removeClass("curr");
		$.jqueryAjax('brandn.php', 'act=get_brand_cat_goods&id='+brand_id+'&cat='+cat_id, function(data){
			if(data.content){
				$("*[ectype='goodslist']").html(data.content);
			}
		});
	});
	/************************************** 品牌专区(brand)end *********************************************/
	
	/********************************************* 购物车(cart)start ***************************************/
	$("*[ectype='c-promotion']").on("click",function(){
		var $this = $(this);
		var parent = $this.parent();
		var height = parent.find("*[ectype='promTips'] ul").height();
		if(parent.hasClass("prom-hover")){
			parent.removeClass("prom-hover");
			parent.find("*[ectype='promTips']").css("height",0);
		}else{
			parent.addClass("prom-hover");
			parent.find("*[ectype='promTips']").css("height",height);
		}
	});
	
	//购物车删除和移到收藏弹框
	$(document).on("click", "*[ectype='cartOperation']", function(){
		var user_id = $("#user_id").val();
		
		var ok_title, cl_title, content;
		var obj = $(this).data("value");

		if (obj.divId == 'cart_remove') {
			ok_title = json_languages.remove;
			cl_title = json_languages.move_collection;
			content = $("#dialog_remove").html();
		} else if (obj.divId == 'cart_collect') {
			ok_title = json_languages.follow;
			cl_title = json_languages.cancel;
			content = $("#dialog_collect").html();
		}
		
		if (user_id > 0 || obj.divId == 'cart_remove') {
			pb({
				id: obj.divId,
				title: obj.title,
				width: 455,
				height: 58,
				ok_title: ok_title, //按钮名称
				cl_title: cl_title, //按钮名称
				content: content, //调取内容
				drag: false,
				foot: true,
				onOk: function () {
					location.href = obj.url;
				},
				onCancel: function () {
					if (obj.divId == 'cart_remove') {
						location.href = obj.cancelUrl;
					}
				}
			});
		}else{
			var back_url = "flow.php";
			$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
		}
	});
	
	//购物车批量删除
	$("*[data-dialog='remove_collect_dialog']").click(function(){
		var user_id = $("#user_id").val();
		if(user_id > 0){
			var remove_url = $(this).data('removeurl');
			var collect_url = $(this).data('collecturl');
			var divId = $(this).data('divid');
			var cart_value = $('#cart_value').val();
			var goods_ru = $('#goods_ru').val();
			var url;
			
			if(divId == 'cart-remove-batch'){
				var content = json_languages.drop_goods;
				url = remove_url;
			}else if(divId == 'cart-collect-batch'){
				var content = json_languages.confirm_Move_collection;
				url = collect_url;
			}
			
			pbDialog(content,"",0,450,50,"",true,function(){
				Ajax.call(url, 'cart_value=' + cart_value, function(data){
						location.href = "flow.php";
				}, 'POST','JSON');
			});
		}else{
			var back_url = "flow.php";
			$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
		}
	});
	
	
	//购物车未登录结算弹出登录框
	$("#go_pay").click(function(){
		var back_url=$(this).data("url");
		$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
		return false;
	});

	/********************************************* 购物车(cart)end ***************************************/
	
	/********************************************* 结算页(flow)start ***************************************/
	
	//收货人信息切换
	$(document).on("click","*[ectype='cs-w-item']",function(){
		var $this = $(this);
		var address_id = $this.data('addressid');
		var store_id = 0;
		var shipping_id = get_cart_shipping_id();
		
		$this.addClass("cs-selected").siblings().removeClass("cs-selected");
		
		if(document.getElementById('store_id')){
			store_id = document.getElementById('store_id').value;
			(store_id > 0) ? store_id : 0;
		}
		
		Ajax.call('flow.php?step=edit_consignee_checked', 'address_id=' + address_id+ '&store_id=' +store_id + '&shipping_id=' + $.toJSON(shipping_id), function (result) {
			if(result.error > 0){
				if(result.error == 1){
					var back_url = "flow.php";
					$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
					return false;
				}else{
					alert(result.msg);
					return false;
				}
			}else{
				$('#consignee-addr').html(result.content);
				$('#goods_inventory').html(result.goods_list);//送货清单
				$('#ECS_ORDERTOTAL').html(result.order_total);//费用汇总
			}
		}, 'POST','JSON');
	});
        
	/* 结算页面 用户收货地址 start */
	$(document).on("click","*[ectype='dialog_checkout']",function(){
		var obj = $(this).data("value");
		var parent = $(this).parents(".cs-w-item");
		var length = parent.siblings(".cs-w-item").length;
		if(obj.divId == 'new_address'){
			if((length+1) >= 11){
				pbDialog(json_languages.add_address_10,"",0);
				return false;
			}
		}
		
		if(obj.divId == 'new_address' || obj.divId == 'edit_address'){
			//添加收货地址信息
			Ajax.call(obj.url, 'address_id=' + obj.id, function(data){
				pb({
					id:obj.divId,
					title:obj.title,
					width:obj.width,
					content:data.content, 	//调取内容
					drag:false,
					foot:true,
					ok_title:json_languages.con_Preservation,
					cl_title:json_languages.cancel,
					onOk:function(){
						//方法在consignee_new.lbi里
						if(addUpdate_Consignee("form[name='theForm']") == false){
							addUpdate_Consignee("form[name='theForm']");
							return false;
						}else{
							return true;
						}
					}
				});
				
				if(obj.divId == 'new_address'){
					//新增地区初始化
					$.levelLink(1);
				}else{
					//编辑地区初始化
					$.levelLink(0);
				}
				
			}, 'POST','JSON');
				            
		}else if(obj.divId == 'del_address'){
			//删除收货地址信息
			var content = $('#del_address').html();
			
			pb({
				id:obj.divId,
				title:obj.title,
				width:obj.width,
				height:obj.height,
				ok_title:json_languages.determine, //按钮名称
				cl_title:json_languages.cancel, 	//按钮名称
				content:content, 	//调取内容
				drag:false,
				foot:true,
				onOk:function(){
					Ajax.call('flow.php?step=delete_Consignee', 'address_id=' + obj.id + "&temtype=1&type=1", function(data){
						if(data.error == 2){
							$('#consignee-addr').html(data.content);
						}else{
							$('#consignee-addr').html(data.content);
						}
						
						$('#goods_inventory').html(data.goods_list);//送货清单
                        $('#ECS_ORDERTOTAL').html(data.order_total);//费用汇总
					}, 'POST','JSON');
				}
			});
		}
	});

	/* 结算页面 用户收货地址 end */
	
	/* 门店自提结算页面 修改门店选择 start*/
	$("*[ectype='storeBtn']").on("click",function(){
		$("*[ectype='seller_address']").addClass("hide")
		$("*[ectype='get_seller_sotre']").addClass("show");
	});
	
	/* 门店自提结算页面 修改门店选择 end*/
	
	function paymet(){
		var payment_method = $("*[ectype='paymentType']"),			//结算页面支付方式
			payInput = $("input[name='pay_pwd_error']"),			//结算页面其他信息 支付密码隐藏域
			length = payInput.length,								//结算页面其他信息 支付密码隐藏域 大于0表示开启
			balance = $("#qt_balance"),                             //结算页面其他信息 使用余额
			payPw = $("#qt_onlinepay"),								//结束页面其他信息 支付密码
			integObj = $("#qt_integral"),							//结算页面其他信息 使用积分
			sueplus = balance.find("input[name='surplus']"),		//余额input
			user_sueplus = sueplus.data("yoursurplus"),				//用户可用余额
			integral = integObj.find("input[name='integral']"),		//积分input
			integral_max = integral.data("maxinteg");				//此订单可用积分
		
			//余额和积分初始化方法
			initialize = function(){
			//积分input是否大于0
			if(integral.val() > 0){
				//初始化积分
				integral.val(0);
				//初始化积分为0，总价去除积分抵扣价格
				changeIntegral(0);
			}
			
			//余额input是否大于0
			if(sueplus.val() > 0){
				//初始化余额
				sueplus.val(0);
				//初始化余额为0，总价去除余额抵扣价格
				changeSurplus(0);
			}
		}
		
		payPassword = function(){
			var pay_length = payment_method.find(".item-selected").length;
			if(length > 0 && pay_length > 0){
				var paymet_curr_val = payment_method.find(".item-selected").data("value"),  //结算页面支付方式 默认选中的支付方式value
					paymet_curr_type = paymet_curr_val.type;								//结算页面支付方式 默认选中的支付方式类型
				
				//初始化
				initialize();
				
				if(paymet_curr_type == "balance"){
					//余额支付状态，余额填写区域隐藏
					balance.hide();
					
					//支付状态为在线支付，并且设置了支付密码
					if(payPw.length > 0){
						payPw.show();    //支付密码显示
						payInput.val(1); //支付密码隐藏域值赋值为1
					}
				}else{
					//非余额支付状态，余额填写区域显示
					balance.show();
					
					//用户余额大于0，余额显示
					if(user_sueplus > 0){
						balance.show();
					}else{
						balance.hide();
					}
					
					//此订单可以使用积分，积分显示
					if(integral_max > 0){
						integObj.show();
					}else{
						integObj.hide();
					}
					
					payPw.hide();  //支付密码隐藏
					payInput.val(0); //支付密码隐藏域值赋值为0
				}
			}
		}
		
		initialize(); //初始化方法默认调用
		payPassword();
		
		//支付方式切换
		payment_method.find(".p-radio-item").on("click",function(){
			var t = $(this),
				paymet_curr_val = t.data("value"),			//选中支付方式的value
				paymet_curr_type = paymet_curr_val.type,	//选中支付方式的type
				paymet_curr_id = paymet_curr_val.payid,     //选中支付方式的id
				paymet_curr_allow = paymet_curr_val.allow;  //选中支付方式的allow
			
			//初始化方法调用
			initialize();
			
			//支付方式选中
			t.addClass("item-selected").siblings().removeClass("item-selected");
			t.find('input').prop("checked",true);
			
			if(paymet_curr_type == "balance"){
				//余额支付状态，余额填写区域隐藏
				balance.hide();
				
				//支付状态为在线支付，并且设置了支付密码
				if(payPw.length > 0){
					payPw.show();    //支付密码显示
					payInput.val(1); //支付密码隐藏域值赋值为1
				}
			}else{
				//非余额支付状态，余额填写区域显示
				balance.show();
				
				if(paymet_curr_allow == 1){
					//判断会员是否有余额
					changeSurplus(0);
				}
				
				payPw.hide();  //支付密码隐藏
				payInput.val(0); //支付密码隐藏域值赋值为0
			}
			
			//改变支付方式
			selectPayment(paymet_curr_id);
		});
	}
	paymet();
	
	//发票修改
	$(document).on("click","*[ectype='invEdit']",function(){
		var obj = $(this).data("value");
		var invoice_type = $("#inv_content").find("input[name='invoice_type']").val();
		Ajax.call(obj.url,'invoice_type=' + invoice_type ,invoiceResponse, 'POST', 'JSON');
		function invoiceResponse(data){
			if(data.error == 0){
				pb({
					id:obj.divid,
					title:obj.title,
					width:675,
					height:278,
					ok_title:json_languages.invoice_ok, 	//按钮名称
					cl_title:json_languages.cancel, 		//按钮名称
					content:data.content, 	//调取内容
					drag:false,
					foot:true,
					onOk:function(){
						var invoice_val  = $("#edit_invoice .selected").find("input[name='invoice_id']").val();
						var inv_content  = $("#edit_invoice .radio-list .item-selected").find("input[name='inv_content']").val();
						var invoice_type = $("#edit_invoice .tab-nav").find(".item-selected").data('value');
						var store_id 	 = $("#store_id").val();
						var tax_id = $("#tax_id").val();
						var warehouse_id = $(".checkout-foot").find("input[name='warehouse_id']").val();
						var area_id = $(".checkout-foot").find("input[name='area_id']").val();
						var cfrom = $("#inv_content").find("input[name='from']").val();
						var shipping_id = get_cart_shipping_id();
						
						if(typeof invoice_val == 'undefined' || invoice_val == ""){
							pbDialog(json_languages.invoice_packup,"",0);
							return false;
						}
						if(!$("*[ectype='tax']").is(":hidden") && tax_id == ""){
							pbDialog(json_languages.invoice_tax_null,"",0);
							return false;
						}
						
						Ajax.call('ajax_dialog.php?act=gotoInvoice','inv_content='+encodeURIComponent(inv_content)+'&invoice_id='+invoice_val + '&from='+ cfrom +'&warehouse_id='+warehouse_id +'&area_id='+area_id +'&store_id='+store_id +'&invoice_type='+invoice_type + '&tax_id=' + tax_id + '&shipping_id=' + $.toJSON(shipping_id),gotoInvoiceResponse, 'POST', 'JSON');
									  	
						function gotoInvoiceResponse(result){
							if(result.error != ""){
								pbDialog(result.error,"",0);
								return false;
							}else{
								if(result.type){
									$("#inv_content .inv_payee").html('');
									$("#inv_content .inv_content").html('');
									$("#inv_content .invoice_type").html(result.invoice_type);
									$("#inv_content").find("input[name=inv_payee]").val('');
									$("#inv_content").find("input[name=inv_content]").val('');	
									$("#inv_content").find("input[name=invoice_type]").val(invoice_type);									
								}else{
									$("#inv_content .inv_payee").html(result.inv_payee);
									$("#inv_content .inv_content").html(result.inv_content);
									$("#inv_content .invoice_type").html(result.invoice_type);
									$("#inv_content").find("input[name=inv_payee]").val(result.inv_payee);
									$("#inv_content").find("input[name=inv_content]").val(result.inv_content);
									$("#inv_content").find("input[name=invoice_type]").val(invoice_type);
									$("#inv_content").find("input[name=tax_id]").val(result.tax_id);
									
									
									$("#common_button").find("input[name=inv_payee]").val(result.inv_payee);
									$("#common_button").find("input[name=inv_content]").val(result.inv_content);
									$("#common_button").find("input[name=invoice_type]").val(invoice_type);
									$("#common_button").find("input[name=tax_id]").val(result.tax_id);
									$("#ECS_ORDERTOTAL").html(result.content);									
								}
							}
						}
					}
				});
				
				//选中效果 by wu start
				var inv_payee = $("#inv_content").find("input[name=inv_payee]").val();
				var inv_content = $("#inv_content").find("input[name=inv_content]").val();
				$("#edit_invoice .invoice-list").find("input[value='"+inv_payee+"']").parents(".invoice-item").addClass("selected").siblings().removeClass("selected");
				$("#edit_invoice .invoice-list").find("input[value='"+inv_payee+"']").siblings("input[name='invoice_id']").prop("checked",true);
				$("#edit_invoice .radio-list").find("input[value='"+inv_content+"']").parents("li").addClass("item-selected").siblings().removeClass("item-selected");
				$("#edit_invoice .radio-list").find("input[value='"+inv_content+"']").prop("checked",true);
				//选中效果 by wu end
				
				invoice();	
			}else if(data.error == 1){
				pbDialog(data.content,"",0,"","",50);
			}
		}
		
		//跳转手机端
		browserRedirect();
	});
	
	/* 跳转手机端 start */
	function browserRedirect() {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		
		if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) == true ){
			window.location.href="/mobile";
		}
	}
	/* 跳转手机端 end */
	
	//编辑发票弹窗内容
	function invoice(){
		var invoice = "#edit_invoice",
			invoiceItem = ".invoice-item",
			addBtn = ".add-invoice-btn",
			editBtn = ".edit-tit",
			updateBtn = ".update-tit",
			delBtn = ".del-tit",
			radioList = $(invoice).find(".radio-list");
			
		if($(".invoice-item").hasClass("selected")){
			
			var invoiceid = $(".invoice-thickbox .selected").data('invoiceid');
			
			var tax_id = $(":input[name='invoice_tax_" + invoiceid + "']").val();
			
			$("#tax_id").val(tax_id);
		}

		$(".invoice-list").on("click",invoiceItem,function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			$(this).find("input[name='invoice_id']").prop("checked", true); 
			
			var invoice_id = $(this).find(":input[name='invoice_id']").val();
			if(invoice_id > 0){
				var tax_id = $(this).find('[ectype=taxId]').val();
			}else{
				var tax_id = $("#tax_id").val();
			}
			
			$("#tax_id").val(tax_id);

			checked(invoice_id);
		});
		
		function checked(invoice_id){
			if($(invoiceItem).length <= 1 || invoice_id == 0){
				$("*[ectype='tax']").hide();
				$("#tax_id").val('');
			}else{
				$("*[ectype='tax']").show();
			}
		}
		checked($(invoiceItem).find("input[name='invoice_id']:checked").val());
		
		//新增公司发票
		$(invoice).find(addBtn).on("click",function(){
			var $this = $(this),
				f_item = "";
			$this.addClass("hide");
			$(invoiceItem).removeClass("selected");
			
			f_item = $(invoiceItem).length;
		
			if(f_item < 4){
				var div = "<div class='invoice-item selected'><span><input type='text' name='inv_payee' class='inv_payee'  placeholder='"+json_languages.add_invoice+"' value=''><input name='invoice_id' type='radio' class='hide' value='" +0+ "'><b></b></span><div class='btns'><a href='javascript:void(0);' class='ftx-05 edit-tit hide'>"+json_languages.edit+"</a><a href='javascript:void(0);' class='ftx-05 update-tit'>"+json_languages.Preservation+"</a><a href='javascript:void(0);' class='ftx-05 ml10 del-tit hide'>"+json_languages.drop+"</a></div>";
				$this.parent().prev().append(div);
				
				$(invoiceItem).eq(f_item).find("input.inv_payee").focus();
				
				$("div[ectype='tax']").hide();
				$("div[ectype='tax']").find("input[name='tax_id']").val('');
			}else{
				pbDialog(json_languages.invoice_desc_number,"",0);
				
				$(invoiceItem).eq(0).addClass("selected");
				$this.removeClass("hide");
			}
		});
		
		//编辑公司名称
		$(".invoice-list").on('click',editBtn,function(){
			var $this = $(this),
				obj = $this.parent().prev(),
				val = 0;
			
			obj.find("input").removeAttr("readonly");
			obj.find("input").focus();
			
			$this.addClass("hide").next().removeClass("hide");

			val = obj.find("input[name='invoice_id']").val();
		});
		
		$(".invoice-list").on('click',updateBtn,function(){
			var $this = $(this),
				obj = $this.parent().prev(),
				inv_payee = obj.find("input[name=inv_payee]").val(),
				invoice_id = obj.find("input[name=invoice_id]").val(),
				tax_id = $("#tax_id").val();
				
			if(inv_payee==""){
				
				pbDialog(json_languages.invoice_desc_null,"",0);
				return false;
				
			}else{
				Ajax.call('ajax_dialog.php?act=update_invoicename', 'inv_payee=' + encodeURIComponent(inv_payee) + '&invoice_id=' + invoice_id + '&tax_id=' + tax_id, function (result) {
					if(result.error == 0){
						obj.find("input[name=invoice_id]").val(result.invoice_id);
					
						$("#tax_id").val(result.tax_id);
						
						checked(result.invoice_id);
					}else{	
						pbDialog(result.msg,"",0);
						
					}

				},'POST','JSON');

				obj.find("input").attr("readonly", true);
				
				$this.addClass("hide").siblings().removeClass("hide");
				
				$(addBtn).removeClass("hide");
				
				$this.find("input[name='invoice_id']").prop("checked", true);
			}
		});
		
		$(".invoice-list").on("click",delBtn,function(){
			var $this = $(this),
				obj = $this.parents(invoiceItem),
				invoice_id = obj.find("input[name=invoice_id]").val(),
				length = 0;
			if (invoice_id == 0) {
				obj.remove();
				
				length = $(invoice).find(invoiceItem).length;

				if(length == 1) {
					$(invoice).find(invoiceItem).addClass("selected");
					$(invoice).find(invoiceItem).find("input[name=invoice_id]").prop("checked", true);
				}
			
			}else{
				Ajax.call('ajax_dialog.php?act=del_invoicename', 'invoice_id=' + invoice_id, function (result) {
					if(result.error == 1) {
						
						pbDialog(result.msg,"",0);
						return false;
						
					}else{
						obj.remove();
						$(invoice).find(invoiceItem).eq(0).addClass("selected");
						$(invoice).find(invoiceItem).eq(0).find("input[name=invoice_id]").click();
						$("#tax_id").val('');
					}
				},'POST', 'JSON');
			}
		});
		
		radioList.find("li").click(function(){
			$(this).addClass("item-selected").siblings().removeClass("item-selected");
			$(this).find('input').prop("checked", true);
		});

		/*发票切换*/
		$(".invoice-dialog").slide({titCell:".tab-nav li",mainCell:".invoice-thickbox",titOnClassName:"item-selected",trigger:"click"});
		
		/*下一步*/
		$("*[ectype='nextStep']").on("click",function(){
			var type = $(this).data("type"),				
				steps = $(this).parents(".steps"),
				fald = true,
				frm = $(this).parents("form[name='inv_form']"),
				act = frm.find("input[name='action']").val(),
				msg = new Object;
				
				msg.company_name = frm.find("input[name='company_name']").val();
				msg.tax_id = frm.find("input[name='tax_id']").val();
				msg.company_address = frm.find("input[name='company_address']").val();
				msg.company_telephone = frm.find("input[name='company_telephone']").val();
				msg.bank_of_deposit = frm.find("input[name='bank_of_deposit']").val();
				msg.bank_account = frm.find("input[name='bank_account']").val();
				msg.consignee_name = frm.find("input[name='consignee_name']").val();
				msg.consignee_mobile_phone = frm.find("input[name='consignee_mobile_phone']").val();
				msg.country = frm.find("input[name='country']").val();
				msg.province = frm.find("input[name='province']").val();
				msg.city = frm.find("input[name='city']").val();
				msg.district = frm.find("input[name='district']").val();
				msg.consignee_address = frm.find("input[name='consignee_address']").val();
				console.log(msg);
			if(type != 1){
				var step = steps.find(".step").eq(type-1);
				
				step.find("input[type='text']").each(function(v,k){
					if($(this).val() == ""){
						iValid($(this).attr("name"),$(this).val(),type);
						fald = false;
					}else{
						fald = true;
					}
				});
			}else{
				fald = true;
			}
			
			if(fald == true){
				steps.find(".step").eq(type).show().siblings().hide();	
				
			if(type == 3){
					Ajax.call('user.php?act=' + act, 'msg=' + $.toJSON(msg),function(data){
						var icon = 1;
						if(data.error == 1){
							icon = 3;
						}
						
						var html = '<div class="iis-state-warp"><i class="icon icon-iis-'+icon+'"></i><div class="iis-state-info"><div class="tit">'+data.content+'</div><div class="iis-btn"></div></div></div>';
						
						$("*[ectype='invReturn']").html(html);	
					},'POST','JSON');
				}
			}
		});

		/*返回*/
		$("*[ectype='backStep']").on("click",function(){
			var type = $(this).data("type"),				
				steps = $(this).parents(".steps");
			steps.find(".step").eq((type-2)).show().siblings().hide();	
		});
		
		function iValid(name,val,type){
			if(val == "" && type == 2){
				switch(name){
					case 'company_name':
					$("input[name='"+ name +"']").siblings(".form_prompt").html("请填写增值发票单位名称");
					break;
					
					case 'tax_id':
					$("input[name='"+ name +"']").siblings(".form_prompt").html("请填写纳税人识别码");
					break;
					
					case 'company_address':
					$("input[name='"+ name +"']").siblings(".form_prompt").html("请填写注册地址");
					break;
					
					case 'company_telephone':
					$("input[name='"+ name +"']").siblings(".form_prompt").html("请填写联系电话");
					break;
					
					case 'bank_of_deposit':
					$("input[name='"+ name +"']").siblings(".form_prompt").html("请填写开户行名称");
					break;
					
					case 'bank_account':
					$("input[name='"+ name +"']").siblings(".form_prompt").html("请填写银行卡卡号");
					break;
					
					default:
					return true;
				}
			}else if(val == "" && type == 3){
				switch(name){
					case 'consignee_name':
					$("input[name='"+ name +"']").siblings(".form_prompt").html("请填写收发票人名称");
					break;
					
					case 'consignee_mobile_phone':
					$("input[name='"+ name +"']").siblings(".form_prompt").html("请填写收票人手机号码");
					break;
					
					case 'consignee_province':
					$("input[name='"+ name +"']").siblings(".form_prompt").html("请填写收票人地址");
					break;
					
					case 'consignee_address':
					$("input[name='"+ name +"']").siblings(".form_prompt").html("请填写收票人详细地址");
					break;
					
					default:
					return true;
				}	
			}
		}
	}
	
	//优惠券/储值卡/红包
	$("*[ectype='ck-toggle']").on("click",function(){
		var $this = $(this);
		$this.siblings(".ck-step-cont").slideToggle(300,function(){
			if($this.hasClass("ck-toggle-off")){
				$this.removeClass("ck-toggle-off")
					 .addClass("ck-toggle-on")
					 .find(".iconfont")
					 .removeClass(".icon-down")
					 .addClass("icon-up");
			}else{
				$this.removeClass("ck-toggle-on")
					 .addClass("ck-toggle-off")
					 .find(".iconfont")
					 .removeClass("icon-up")
					 .addClass("icon-down");
			}
		});
	});
	
	//优惠券/储值卡/红包 选择切换
	$("*[ectype='panlItem']").on("click",function(){
		var $this = $(this);
		var shipping_id = get_cart_shipping_id();
		var warehouse_id = $(".checkout-foot").find("input[name='warehouse_id']").val();
		var area_id = $(".checkout-foot").find("input[name='area_id']").val();
						
		//没填收货地址不允许选择
		var uc_id = $this.data('ucid');
		var type = $this.data("type");
	   
		if ($('#consignee-addr').length == 0) {
			pbDialog(json_languages.checked_address,"",0);
			return false;
		}
		if ($this.hasClass("selected")) {
			$this.removeClass("selected").siblings().removeClass("selected");
			//优惠券
			if(type == 'coupons'){
				$.getJSON("flow.php?step=change_coupons&uc_id=0", '&warehouse_id=' + warehouse_id + '&area_id=' + area_id + '&shipping_id=' + $.toJSON(shipping_id),function(data){
					orderSelectedResponse(data)
				},'json');
				$('#uc_id').val('');
			}
			//红包
			else if(type == 'bonus'){
			   $('#bonus_id').val('');
				changeBonus(0);
			}
			//储值卡
			else if(type == 'value_card'){
				$('#ECS_VALUE_CARD').val('');
				changeVcard(0);
			}
		} else {
			$this.addClass("selected").siblings().removeClass("selected");
			//优惠券
			 if(type == 'coupons'){
				$('#uc_id').val(uc_id);
				$.getJSON("flow.php?step=change_coupons&uc_id=" + uc_id, '&warehouse_id=' + warehouse_id + '&area_id=' + area_id + '&shipping_id=' + $.toJSON(shipping_id), function (data) {
					orderSelectedResponse(data);
				}, 'json')
			}
			//红包
			else if(type == 'bonus'){
				$('#bonus_id').val(uc_id);
				changeBonus(uc_id);
			}
			//储值卡
			else if(type == 'value_card'){
				$('#ECS_VALUE_CARD').val(uc_id);
				changeVcard(uc_id);
			}
		}
	});
	
	//配送方式选择
	function logistics(){
		var t = "", 
			parents = "",
			_html = "",
			index = 0,
			ru_id = 0,
			type = 0,
			shipping = "",
			shipping_id = 0,
			shipping_code = "",
			text = "";
		
		//展开配送方式
		doc.on('mouseenter','.mode-tab-item',function(){
			clearTimeout(outTimer);
			var width = 0;
			t = $(this);
			
			width = t.parents("ul").outerWidth();
			
			shipping_code = t.data('shippingcode');
			parents = t.parents("[ectype='disInfo']");
			
			hoverTimer = setTimeout(function(){
				if(shipping_code == "cac"){
					parents.find("*[ectype='since']").show();
					parents.find("*[ectype='logistics']").hide();
				}else{
					parents.find("*[ectype='logistics']").css("right",width-100);
					parents.find("*[ectype='logistics']").show();
					parents.find("*[ectype='since']").hide();
				}
			},200);
		})
		.on('mouseleave','.mode-tab-item',function(){
			clearTimeout(hoverTimer);
			t = $(this);
			
			shipping_code = t.data('shippingcode');
			parents = t.parents();
			
			outTimer = setTimeout(function(){
				parents.find("*[ectype='since']").hide();
				parents.find("*[ectype='logistics']").hide();
			},100);	
		})
		.on('mouseenter','.mwapper',function(){
			clearTimeout(outTimer);
		})
		.on('mouseleave','.mwapper',function(){
			$(this).hide();
		});
		
		//展开配送方式end

		//切换配送方式 start
		$(document).on("click",".logistics_li",function(){
			t = $(this);
			index = t.index();
			ru_id = t.data('ruid');
			type = t.data('type');
			shipping_id = t.data('shipping');
			shipping_code = t.data('shippingcode');
			parents = t.parents("*[ectype='disInfo']");
			shipping = "";
			var warehouse_id = $(".checkout-foot").find("input[name='warehouse_id']").val();
			var area_id = $(".checkout-foot").find("input[name='area_id']").val();
			
			if(shipping_code != 'cac')
			{
				_html = t.data("text");
				parents.find("*[ectype='tabLog']").addClass("item-selected").siblings().removeClass("item-selected");
			}
			
			//console.log(index,ru_id,type,shipping_id,shipping_code,_html);
			
			t.addClass("item-selected").siblings().removeClass("item-selected");
			
			$(".shipping_" + ru_id).val(shipping_id);
			$(".shipping_code_" + ru_id).val(shipping_code);
			
			if(_html != "")
			{
				parents.find("*[ectype='tabLog'] span").html(_html);
				parents.find("*[ectype='tabLog']").attr("data-shipping",shipping_id).attr("data-shippingcode", shipping_code).attr("data-ruid", ru_id).attr("data-type", type);
			}
			
			t.parents("*[ectype='logistics']").hide();
			
			/* 选择配送方式 start */
			$("*[ectype='shoppingList']").each(function(index, element) {
				var li_shinpping_id = $(element).find("*[ectype='disInfo'] li.item-selected").attr("data-shipping");
				var seller_shipping = Number(li_shinpping_id);

				if(index > 0){
					shipping += ",";
				}
				
				shipping += li_shinpping_id;
			});
			/* 选择配送方式 end */
			
			Ajax.call('ajax_dialog.php?act=shipping_type', 'ru_id=' + ru_id + '&shipping_id='+ shipping_id + '&warehouse_id='+ warehouse_id + '&area_id='+ area_id +'&type=' + type +'&shipping=' + shipping, changeShippingResponse, 'POST','JSON');
		});
		//切换配送方式 end
		
		doc.on("click",".mode-tab-item",function(){
			t = $(this);
			index = t.index();
			shippingcode = t.data("shippingcode");
			shipping = "";
			var warehouse_id = $(".checkout-foot").find("input[name='warehouse_id']").val();
			var area_id = $(".checkout-foot").find("input[name='area_id']").val();
			
			t.addClass('item-selected').siblings().removeClass('item-selected');
			
			/* 选择配送方式 start */
			$("*[ectype='shoppingList']").each(function(index, element) {
				var li_shinpping_id = $(element).find("*[ectype='disInfo'] li.item-selected").attr("data-shipping");
				var seller_shipping = Number(li_shinpping_id);
				
				if(index > 0){
					shipping += ",";
				}
				
				shipping += seller_shipping;
			});
			/* 选择配送方式 end */	
			
			if(shippingcode == 'cac'){
				ru_id = t.data('ruid');
				type = t.data('type');
				shipping_id = t.data('shipping');
				
				Ajax.call('ajax_dialog.php?act=shipping_type', 'ru_id=' + ru_id + '&shipping_id='+ shipping_id + '&warehouse_id='+ warehouse_id + '&area_id='+ area_id +'&type=' + type +'&shipping=' + shipping, changeShippingResponse, 'POST','JSON');		
			}else{
				parents = t.parents("[ectype='disInfo']");
				parents.find(".logistics_li").each(function(index, element) {
					var $this = $(this);
					if($this.hasClass("item-selected")){
						ru_id = $this.data("ruid");
						type = $this.data("type");
						shipping_id = $this.data("shipping");
						
						Ajax.call('ajax_dialog.php?act=shipping_type', 'ru_id=' + ru_id + '&shipping_id='+ shipping_id + '&warehouse_id='+ warehouse_id + '&area_id='+ area_id +'&type=' + type +'&shipping=' + shipping, changeShippingResponse, 'POST','JSON');		
					}
				});
			}
	
		});
		
		//自提点
		doc.on("click","*[ectype='flow_dialog']",function(){
			var value,ok_title,cl_title,url,title,width,height,divId,mark,ajax_picksite;
			
			value = $(this).data("value");
			
			url = value.url; //删除连接地址
			title = value.title;
			width = value.width;
			height = value.height;
			divId = value.divid;
			mark = value.mark; //区分提货站与日期修改
			
			ok_title = json_languages.save;
			cl_title = json_languages.cancel;
			
			$("*[ectype='tabCac']").click();
			
			Ajax.call(url,'',shopResponse, 'POST', 'JSON');
			function shopResponse(result){
				pb({
					id:divId,
					title:title,
					width:width,
					height:height,
					ok_title:ok_title, 	//按钮名称
					cl_title:cl_title, 	//按钮名称
					content:result.result, 	//调取内容
					drag:false,
					foot:true,
					onOk:function(){ //保存回调函数
						if(mark == 0){
							var district = $("#pickRegion_select").val();
							var picksite_id = $("input[name='picksite_radio']:checked").val();
							ajax_picksite = 'district='+ district +'&picksite_id='+ picksite_id + 'mark=' + mark ;
	
							if(typeof(picksite_id) == "undefined"){
								pbDialog(json_languages.delivery_Prompt,"",0);
								return false;
							}
						}else{
							var shipping_date = $("input[name='shipping_date']:checked").attr('data-shippingDate');
							var time_range = $("input[name='shipping_date']:checked").attr('data-range');
		
							if(typeof(shipping_date) == "undefined"){
								pbDialog(json_languages.delivery_Prompt_two,"",0);
								return false;
							}
							ajax_picksite = 'shipping_date='+ shipping_date + '&time_range='+ time_range +'&mark=' + mark ;
						}
						
						Ajax.call('flow.php?step=select_picksite', ajax_picksite, selectPicksiteResponse, 'POST', 'JSON');
					},
					onCancel:function(){ //取消回调函数
					}
				});
			}
		});
	}
	//配送方式方法
	logistics();
	
	
	/* 支付订单页 */
	$("*[ectype='opened']").on("click",function(){
		var $this = $(this);
		var div = $this.parents(".o-list-info").next();
		if(div.is(":hidden")){
			$this.html(json_languages.down_detail+"</span><i class='iconfont icon-up'></i>");
		}else{
			$this.html(json_languages.order_detail+"</span><i class='iconfont icon-down'></i>");
		}
		div.slideToggle();
	});
	
	//银行卡切换
	$("*[ectype='bankList'] li").on("click",function(){
		var $this = $(this);
		var parent = $(this).parents("*[ectype='bankList']");
		$this.addClass("selected").siblings().removeClass("selected");
		
		if(parent.find(".selected").length>0){
			$("#alipay_bank").find(".noBtn").hide();
			$("#alipay_bank").find("input").show().css({"background-color":"#f42424"});
		}
	});
	
	$(document).on("click",".no_goods", function(){
		var rec_number = $("input[name='rec_number_str']").val();
		var url = $(this).data('url');
		if(rec_number != ''){
			url = url + "&rec_number=" + rec_number;
		}
		
		Ajax.call(url,'',noGoods, 'POST', 'JSON');
		function noGoods(result){
			if(result.error == 1){
				pb({
					id:'noGoods',
					title:No_goods,
					width:670,
					ok_title:go_up, 	//按钮名称
					cl_title:back_cart, 	//按钮名称
					content:result.content, 	//调取内容
					drag:false,
					foot:true,
					onOk:function(){
						$("form[name='stockFormCart']").submit();
					},
					onCancel:function(){
						location.href = "flow.php";
					}
				});
				$('.pb-ok').addClass('color_df3134');
			}else{
				$("form[name='doneTheForm']").submit();
			}
		}
	});
	
	$(document).on("click",".no_shipping", function(){
		var shipping_prompt = $("input[name='shipping_prompt_str']").val();
		var url = $(this).data('url');
		if(shipping_prompt != ''){
			url = url + "&shipping_prompt=" + shipping_prompt;
		}
		
		Ajax.call(url,'',noShipping, 'POST', 'JSON');
		function noShipping(result){
			if(result.error == 1){
				pb({
					id:'noGoods',
					title:json_languages.No_shipping,
					width:670,
					ok_title:json_languages.go_up, 	//按钮名称
					cl_title:json_languages.back_cart, 	//按钮名称
					content:result.content, 	//调取内容
					drag:false,
					foot:true,
					onOk:function(){
						$("form[name='stockFormCart']").submit();
					},
					onCancel:function(){
						location.href = "flow.php";
					}
				});
				$('.pb-ok').addClass('color_df3134');
			}else{
				$("form[name='doneTheForm']").submit();
			}}
	});
    
	/********************************************* 结算页(flow)end ***************************************/
	

	/********************************************* 促销模块（团购，优惠，夺宝，礼包等）start************************/
	//优惠活动
	$(document).on('click', "*[ectype='actFilter'] a", function(){
		var actType = $(this).data('acttype');
		var i = 0;
		
		$(this).addClass('curr').siblings().removeClass('curr');
		
		$("*[ectype='actList'] li").each(function(){
			var li_acttype = $(this).data('acttype');
			if(li_acttype == actType || actType == -1){
				i++;
				$(this).show();
			}else{
				$(this).hide();
			}
		});
		
		if(i == 0){
			$(".no_records").show()
		}else{
			$(".no_records").hide()
		}
	});
	
	
	//团购详情页 立即团购
    $("*[ectype='btn-group-buy']").on('click',function(){
		var quantity = Number($("*[ectype='quantity']").val()),
			perNumber =Number($("*[ectype='perNumber']").val()),
			restrictShop = Number($("*[ectype='restrictShop']").val()),
			ogNumber = Number($("*[ectype='orderGNumber']").data("value"));
		
		if(user_id > 0){
			if(perNumber == 0 || quantity > perNumber){
                            
				pbDialog(json_languages.Stock_goods_null,"",0);
				return false;
			}else if((quantity+ogNumber) > restrictShop  && restrictShop > 0){
				pbDialog(json_languages.purchasing_prompt_two,"",0,500);
				return false;
			}else{
				$("form[name='ECS_FORMBUY']").submit();
			}
		}else{
			var group_buy_id = $("input[name='group_buy_id']").val();
			var back_url = "group_buy.php?act=view&id=" + group_buy_id;
			$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
			return false;
		}
    });

	/********************************************* 促销模块（团购，优惠，夺宝，礼包等）end************************/

	
	/********************************************* 文章页start ***************************************/
	$(".menu-item div.item-hd").on("click",function(){
		var t = $(this);
		$(this).siblings("ul").slideToggle(500,function(){
			if($(this).is(":hidden")){
				t.find(".iconfont").removeClass("icon-down").addClass("icon-up");
			}else{
				t.find(".iconfont").addClass("icon-down").removeClass("icon-up");
			}
		});
	});
	/********************************************* 文章页end ***************************************/
	
	/********************************************* 用户中心页(user) start *********************************/
	//用户中心右侧最小高度和左侧栏高度一样
	$(window).ready(function(e) {
        var height = $("*[ectype='userSide']").height(),
			action = $("*[ectype='userMain']").data("action");
		
		if(action == "default"){
			$("*[ectype='userMain'] .user-mod").css({"min-height":height-298});
		}else{
			$("*[ectype='userMain'] .user-mod").css({"min-height":height-70});
		}
    });
	
	//点击其他地方关闭选择列表模块
	$("body").on('click', function(e){
		var target = $(e.target);
		var opened = $(".mod-select.mod-select-open");
		if(opened.length > 0){
			if(target.parents(".mod-select").length == 0){
				opened.removeClass("mod-select-open");
			}
		}
	});

	// 用户菜单展开效果
	$(".user-side .side-menu dt .square").click(function(){
		var $this = $(this);
		var dd = $this.parent("dt").siblings("dd");
		$this.toggleClass("square-plus");
		dd.slideToggle();
	});
	
	//订单多个产品展开
	$("[ectype='opm']").click(function(){
		$(this).prevAll("[ectype='c-goods']").show();
		$(this).prev().hide();
		$(this).hide();
	});
	
	/* 跟踪包裹start */
	var hoverTimer, outTimer,hoverTimer2;
	$(document).on('mouseenter',"*[ectype='track-packages-btn']",function(){
		clearTimeout(outTimer);
		var $this = $(this);
		hoverTimer = setTimeout(function(){
			$this.find("*[ectype='track-packages-info']").show();
		},50);
	});
	
	$(document).on('mouseleave',"*[ectype='track-packages-btn']",function(){
		clearTimeout(hoverTimer);
		var $this = $(this);
		outTimer = setTimeout(function(){
			$this.find("*[ectype='track-packages-info']").hide();
		},50); 
	});
	$(document).on('mouseenter',"*[ectype='track-packages-info']",function(){
		clearTimeout(outTimer);
		hoverTimer2 = setTimeout(function(){
			$(this).show();
		});
	});
	$(document).on('mouseleave',"*[ectype='track-packages-info']",function(){
		$(this).hide();
	});
	/* 虚拟商品卡密end*/
	
	/* 评论晒单 start */
	function userComment(){
		var t = "",
		parent = "",
		divId = "commentDialog";
		
		//点击评论弹出框
		doc.on("click","a[ectype='btn-comment']",function(){
			var rec_id = $(this).data('recid');
			var sign = $(this).data('sign');
			var size = $(this).data('size');
			var start = $(this).data('start');
			var foot = $(this).data('foot');
			
			Ajax.call('ajax_user.php?act=comments_form', 'rec_id=' + rec_id + '&sign=' + sign + '&start=' + start + '&size=' + size, commentsFormResponse, 'POST', 'JSON');
			
			function commentsFormResponse(data){
				var content = data.content;
				pb({
					id:divId,
					title:json_languages.comment_goods,
					content:content,
					ok_title:json_languages.determine,
					cl_title:json_languages.cancel,
					drag:false,
					foot:foot,
					onOk:function(){
						commentForm(divId);
					}
				});
			}
		});
		
		//评价星级
		doc.on("click","*[ectype='p_rate'] a",function(){
			t = $(this);
			parent = t.parents("*[ectype='rates']");
			val = t.data("value");
			
			parent.find(".error").hide();
			t.addClass("selected").siblings().removeClass("selected");
			
			parent.find("input[type='hidden']").val(val);
			
			if(parent.find(".degree-text").length>0){
				parent.find(".degree-text").show();
				parent.find(".comt-error").hide();
				parent.find("*[ectype='number']").html(val);
			}
		});
		
		//买家印象标签切换
		doc.on("click","*[ectype='itemTab']",function(){
			var val = "",recid = "";
			t = $(this);
			
			if(t.hasClass("selected")){
				t.removeClass("selected");
			}else{
				t.addClass("selected");
			}
			
			t.parent().find(".selected").each(function(){
				var tag_val = $(this).data('val');
				var tag_recid = $(this).data('recid');
				
				val += tag_val +",";
				recid += tag_recid +",";
			});
	
			val = val.substring(0,val.length-1);
			recid = recid.substring(0,recid.length-1);
			
			$("input[name='impression']").val(val);
		});
		
		//删除图片
		doc.on("click","*[ectype='cimg-remove']",function(){
			var $this = $(this);
			var cur_imgId = $this.data("imgid");
			var order_id = $("input[name='order_id']").val();
			var goods_id = $("input[name='goods_id']").val();
			var ul = $this.parents(".img-list-ul");
			var num = ul.parents(".img-lists").find("*[ectype='num']").text();
			var num1 = ul.parents(".img-lists").find("*[ectype='ima_number']").text();
			
			if(cur_imgId == ""){
				pbDialog(json_languages.parameter_error,"",0);
				return false;
			}
			Ajax.call('comment.php?act=del_pictures', 'cur_imgId=' + cur_imgId+'&order_id='+order_id+'&goods_id='+goods_id, delCommentImgResponse, 'POST', 'JSON');

			function delCommentImgResponse(data){
				ul.html(data.content);
				ul.parents(".img-lists").find("*[ectype='num']").html(Number(num)-1);
				ul.parents(".img-lists").find("*[ectype='ima_number']").html(Number(num1)+1);
				 
			}
		});
	}
	userComment();
	
	//用户评论提交方法
	function commentForm(obj){
		var obj = $("#"+obj),
			comment_id = "",
			comment_rank = "",
			content = "",
			impression = "",
			is_impression = "",
            captcha = "",
			cmt = new Object;
			
		comment_id = obj.find("input[name='comment_id']").val();
		comment_rank = obj.find("input[name='comment_rank']").val();
		content = obj.find("textarea[name='content']").val();
		impression = obj.find("input[name='impression']").val();
		is_impression = obj.find("input[name='is_impression']").val();
		captcha = obj.find("input[name='captcha']").val();
                
		cmt.comment_rank = (typeof(comment_rank) == "undefined") ? 0 : comment_rank ;
		cmt.comment_id = (typeof(comment_id) == "undefined") ? 0 : comment_id ;
		cmt.impression = (typeof(impression) == "undefined") ? '' : impression ;
		cmt.content = (typeof(content) == "undefined") ? '' : content ;
        cmt.captcha = (typeof(captcha) == "undefined") ? '' : captcha ;
                
		cmt.order_id = obj.find("input[name='order_id']").val();
		cmt.goods_id = obj.find("input[name='goods_id']").val();
		cmt.rec_id = obj.find("input[name='rec_id']").val();
		cmt.sign = obj.find("input[name='sign']").val();
		
		if(cmt.comment_rank == 0 && cmt.sign == 0){
			pbDialog(json_languages.select_pf,"",0);
			return false;
		}else if(cmt.impression == '' && cmt.sign == 0 && is_impression == 1){
			pbDialog(json_languages.Label_number_null,"",0);
			return false;
		}else if((cmt.content == '' || cmt.content.length > 500) && cmt.sign == 0){
			if(cmt.content == ''){
				pbDialog(json_languages.content_not,"",0);
			}else{
				pbDialog(json_languages.word_number,"",0);
			}
			return false;
		}else if(cmt.captcha == '' && typeof(captcha) != "undefined"){
			pbDialog(json_languages.null_captcha_login,"",0);
			return false;
		}else{	
			Ajax.call('comment.php?act=comm_order_goods', 'cmt=' + $.toJSON(cmt), commentSignOneResponse, 'POST', 'JSON');
		}
	}
	
	//回调函数
	function commentSignOneResponse(result){
		var sign = '';
		var left = 0;
		if(result.sign > 0){
			sign = "&sign=" + result.sign;
		}
		
		if(result.sign > 0){
			left = 100;
		}else{
			left = 60;
		}
		
		var hrefCont = "user.php?act=comment_list" + sign;

		if(result.error > 0){
			pbDialog(result.message,"",0);
		}else{
			pbDialog(result.message,json_languages.comments_Other,1,"","",left,false,function commentOk(){location.href = hrefCont});
		}
	}
	
	//店铺满意度提交
	$("[ectype='storeRateBtn']").on("click",function(){
		var rank = new Object;
			
		rank.order_id = $(this).data('orderid');
		rank.desc_rank = $(this).parents(".score").find("input[name=desc_rank]").val();
		rank.service_rank = $(this).parents(".score").find("input[name=service_rank]").val();
		rank.delivery_rank = $(this).parents(".score").find("input[name=delivery_rank]").val();
		rank.sender_rank = $(this).parents(".score").find("input[name=sender_rank]").val();
		
		if(rank.desc_rank == 0){
			$("input[name=desc_rank]").nextAll(".comt-error").show();
			return false;
		}else if(rank.desc_ran==0){
			$("input[name=desc_ran]").nextAll(".comt-error").show();
			return false;
		}else if(rank.service_rank==0){
			$("input[name=service_rank]").nextAll(".comt-error").show();
			return false;
		}else if(rank.delivery_rank==0){
			$("input[name=delivery_rank]").nextAll(".comt-error").show();
			return false;
		}else if(rank.sender_rank==0){
			$("input[name=sender_rank]").nextAll(".comt-error").show();
			return false;
		}else{
			Ajax.call('comment.php?act=satisfaction_degree', 'rank=' + $.toJSON(rank), SatisfactionDegreeResponse, 'POST', 'JSON');
		}
	});
	
	function SatisfactionDegreeResponse(result)
	{
		if(result.error > 0){
			pbDialog(result.msg,"",0);
			return false;
		}else{
			var _html = '<h3><s class="icon-02"></s><span>'+json_languages.comments_think+'</span></h3>';
			$(".votelist-content").find(".service-rcol").html(_html);
		}
	}
	/* 评论晒单 end */
	
	
	/* 虚拟商品卡密start */
	var hoverTimer, outTimer,hoverTimer2;
	$(document).on('mouseenter','.virtual_title',function(){
		clearTimeout(outTimer);
		var parents = $(this).parents('.virtual_div');
		hoverTimer = setTimeout(function(){
			parents.find(".virtual_info").show();
		},200);
	});
	
	$(document).on('mouseleave','.virtual_title',function(){
		clearTimeout(hoverTimer);
		var parents = $(this).parents('.virtual_div');
		outTimer = setTimeout(function(){
			parents.find(".virtual_info").hide();
		},100); 
	});
	$(document).on('mouseenter','.virtual_info',function(){
		clearTimeout(outTimer);
		hoverTimer2 = setTimeout(function(){
			$(this).show();
		});
	});
	$(document).on('mouseleave','.virtual_info',function(){
		$(this).hide();
	});
	/* 虚拟商品卡密end*/
	
	
	/* 银行卡号每隔4位空格 by yanxin start */
	var bank_card = $("*[ectype='bank_card']");
	if(bank_card.length > 0){
		//默认加载银行卡号 4位数后空格隔开
		var card = bank_card.val();		
		var ncard = "";
		
		card = card.replace(/\D/g,'');
		
		for(var i = 0; i < card.length; i = i+4){
			ncard += card.substring(i,i+4)+" ";
		}
		
		bank_card.val(ncard.replace(/(\s*$)/g,""));
		
		//银行卡输入后4位数后空格隔开
		bank_card.keyup(function(e){
			var obj = e , bankVal;
			if(obj.keyCode != 8){             				//判断是否为Backspace键，若不是执行函数；
				bankVal = $(this).val();   					//定义变量input  value值
				bankVal = bankVal.replace(/[^\d\s]/g,"");   //正则表达式：如果输入框中输入的不是数字或者空格，将不会显示；
				$(this).val(bankVal);       				//把新得到得value值赋值给输入框；
				for(n=1;n<=4;n++){
					if(bankVal.length <= 5*n-2 || bankVal.length>5*n-1){   //判断是否是该加空格的时候，若不会，还是原来的值；
						bankVal = bankVal;
					}else{
						bankVal += " ";                         //给value添加一个空格；
						$(this).val(bankVal);  					//赋值给输入框新的value
					}
				}
			}
		});
		
		bank_card.blur(function(e){
			var $this = $(this).parents("div.value");
            bankCard = bank_card.val();
			bankCard = bankCard.replace(/\s+/g, "");
			$.getJSON("./data/bankData.json", {}, function (data) { 
				var bankBin = 0; 
				var isFind = false; 
				for (var key = 10; key >= 2; key--) { 
					bankCard = bankCard.toString();
					bankBin = bankCard.substring(0, key); 
					$.each(data, function (i, item) { 
						if (item.bin == bankBin) { 
							isFind = true; 
							bName = item.bankName; 
							$this.find(".notic").hide();
							$this.find("*[ectype='bname']").html(bName).show();
						} 
					}); 
					if (isFind) { 
						break; 
					} 
				} 
				if (!isFind) { 
					$this.find(".notic").hide();
					$this.find("*[ectype='bname']").html("请填写正确卡号").show();
				} 
			}); 
        });
	}
	/* 银行卡号每隔4位空格 by yanxin end */
	
	/* 举报start */
    $(document).on("click", "*[ectype='cancel_report']", function(){
        var _this = $(this);
        var id = _this.data("id");
        var type = _this.data("type");
        var state = _this.data("state");
        var back_href = '';
        if(type == 1 || state == 3){
            back_href = 'user.php?act=illegal_report';
        }else{
            back_href = "user.php?act=goods_report&report_id=" + id;
        }
        if(confirm("确定执行此操作吗？执行后数据将不能找回！请谨慎操作！")){
            Ajax.call('ajax_user.php?act=check_report_state', 'report_id=' + id + "&state=" + state , function(data){
                if(data.error > 0){
                    pbDialog(data.message,"",0);
                }else{
                    location.href = back_href;
                }
             }, 'POST', 'JSON');
        }
    });
	/* 举报end */
	
	/* 缺货登记 取消 */
	$("*[ectype='goods_del_booking']").on("click",function(){
		var url = $(this).data("url");
		
		pbDialog("您确定要取消订购信息？","",0,455,58,"",true,function(){
			location.href = url;
		});
	});
	
	/* 提现手续费 */
	$("*[ectype='deposit_amout']").blur(function(){
		var val = $(this).val();
		var deposit_fee = $(this).parents('form').find("input[name='deposit_fee']").val();
		var deposit_money = 0;
		var input = '';
		//parseInt(val);
		if(deposit_fee > 0 && val > 0 && !isNaN(val)){
			deposit_money = parseInt(val)*parseInt(deposit_fee)/100;
			if(deposit_money > 0){
				input = '<input type="hidden" value="' + deposit_money + '" name="deposit_money" />';
				$("*[ectype='deposit_fee']").find("*[ectype='deposit_fee_value']").html(deposit_money+input);
				$("*[ectype='deposit_fee']").removeClass('hide');
			}else{
				$("*[ectype='deposit_fee']").find("*[ectype='deposit_fee_value']").html('');
				$("*[ectype='deposit_fee']").addClass('hide');
			}
		}else{
			$("*[ectype='deposit_fee']").find("*[ectype='deposit_fee_value']").html('');
				$("*[ectype='deposit_fee']").addClass('hide');
		}
	});
	
	$(".user-purchase .item").each(function(){
		var height_l = $(this).find(".itemc-left").height();
		var height_r = $(this).find(".itemc-right").height();
		
		
		if(height_l < height_r){
			$(this).find(".itemc-right").addClass("borderLeft");
		}else if(height_l > height_r){
			$(this).find(".itemc-left").addClass("borderRight");
		}else{
			$(this).find(".itemc-left").addClass("borderRight");
		}
	});
	
	//会员中心储值卡
    $("*[ectype='value_see']").hover(function(){
        $("[ectype='value_shop']").show();
    },function(){
		$("[ectype='value_shop']").hide();
	});
	/********************************************* 用户中心页(user) end ***********************************/
	
	
	/********************************************* 入驻切换头部导航start ***********************************/
	$("*[ ectype='merchants_article']").on("click",function(){
		var _this = $(this);
		var title = _this.html();
		
		Ajax.call('ajax_dialog.php?act=merchants_article','title='+title, function(data){
			if(data.error == 1){
				_this.parents('li').addClass("curr").siblings().removeClass("curr");;
				$(".container").html(data.content);
			}else{
				pbDialog(data.message,"",0);
			}
		}, 'POST', 'JSON');
	})
	/********************************************* 入驻切换头部导航end *************************************/
	
	
	/********************************************* 促销活动页面 start *************************************/
	$("*[ectype='snatchType']").on("click",function(){
		$("#detail-slide").find(".hd li:eq(1)").click();
	});
	/********************************************* 促销活动页面 end***************************************/
	
	/********************************************* 众筹页面 start ****************************************/
	$("#parent_catagory li a").on("click",function(){
		var textTypeIndex = $(this).parent().index();
		var vsecondlist = $(".v-second-list");
		$(this).parent().addClass("current").siblings().removeClass("current");
		$(this).parents(".v-fold").next().show();
		var index = textTypeIndex-1;
		if(index >= 0){
			vsecondlist.show();
			vsecondlist.children(".s-list").eq(index).show().siblings().hide();
		}else{
			vsecondlist.hide();
			vsecondlist.children(".s-list").hide();
		}
	});
	
	$("#sort li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
	});
	
	$(".v-option").click(function(){
		if($(this).hasClass('slidedown')){
			$(this).removeClass('slidedown').addClass('v-close');
			$(this).html("<b></b><span>"+json_languages.Pack_up+"</span>");
			$(this).next().css("height","auto");
		}else{
			$(this).removeClass('v-close').addClass('slidedown');
			$(this).html("<b></b><span>"+json_languages.more+"</span>");
			$(this).next().css("height","26px");
		}
	});
	/********************************************* 众筹页面 end ****************************************/
	
	/***********************************************秒杀 start*****************************************/
	$(document).on("mouseenter","*[ectype='skmuMove']",function(){
		clearTimeout(outTimer);
		hoverTimer = setTimeout(function(){
			$("[ectype='skmuMcate']").addClass("skmu-mcate-active");
		},200);
	});
	
	$(document).on("mouseleave","*[ectype='skmuMove']",function(){
		clearTimeout(hoverTimer);
		outTimer = setTimeout(function(){
			$("[ectype='skmuMcate']").removeClass("skmu-mcate-active");
		},100); 
	});
	$(document).on("mouseenter","[ectype='skmuMcate']",function(){
		clearTimeout(outTimer);
		hoverTimer2 = setTimeout(function(){
			$(this).addClass("skmu-mcate-active");
		});
	});
	$(document).on("mouseleave","[ectype='skmuMcate']",function(){
		$(this).removeClass("skmu-mcate-active");
	});
});

/****************************************** js通用方法start *************************************************/

/* 商品详情信息 详情、评论、讨论圈滚动悬浮栏 start */

(function($){
	$.fn.jfloor = function(itemHeight,bHeight){
		if(itemHeight == null){
			var itemHeight = 0;
		}
		if(bHeight == null){
			var bHeight = 0;
		}
		return this.each(function(){
			var winHeight = $(window).width();
				floors = $(this).find("*[ectype='gm-floors']"),
				flooritem = floors.find("*[ectype='gm-item']"),
				axis = $(this).find("*[ectype='gm-tabs']"),
				layer = axis.find("*[ectype='gm-tab-item']"),
				bor = axis.find("*[ectype='qp-bort']"),
				floorsTop =  parseInt(floors.offset().top-itemHeight);
			
			layer.click(function(){
				var index = layer.index(this);
				var top = parseInt(flooritem.eq(index).offset().top-itemHeight);
				$("body,html").stop().animate({scrollTop:top});
			});
			
			$(window).scroll(function(){
				var top = $(document).scrollTop();
				
				if(top >= floorsTop-itemHeight){
					axis.addClass("detail-hd-fixed");
					
					if(bor.length>0){
						bor.css({"width":winHeight,"left":-((winHeight-1200)/2 + floors.position().left)});
					}
				}else{
					axis.removeClass("detail-hd-fixed");
				}
				
				for(var i=0;i<flooritem.length;i++){
					var flooritemTop =  parseInt(flooritem.eq(i).offset().top-itemHeight);
					if(top >= flooritemTop-bHeight){
						layer.eq(i).addClass("curr").siblings().removeClass("curr");
					}
				}
			});
		});
	}
})(jQuery);

/* 商品详情描述 规格参数切换 */
function goods_desc_floor(){
	var winHeight = $(window).width(),
		floors = $("*[ectype='gm-floors']"),
		flooritem = floors.find("*[ectype='gm-item']"),
		axis = $("*[ectype='gm-tabs']"),
		layer = axis.find("*[ectype='gm-tab-item']"),
		bor = axis.find("*[ectype='qp-bort']"),
		floorsTop =  parseInt(floors.offset().top);
	
	$("*[ectype='gm-tabs'] .gm-tab li").on("click",function(){
		var t = $(this),
			index = t.index();
		
		t.addClass("curr").siblings().removeClass("curr");
		
		if(index == 0){
			flooritem.eq(1).hide().siblings().show();
		}else if(index == 1){
			flooritem.eq(0).hide().siblings().show();
		}else if(index == 2){
			flooritem.eq(0).hide();
			flooritem.eq(1).hide();
			flooritem.eq(2).show();
			flooritem.eq(3).show();
		}else if(index == 3){
			flooritem.eq(3).show().siblings().hide();
		}
		
		$("body,html").stop().animate({scrollTop:(floorsTop-80)});
	});
	
	$("*[ectype='product-detail']").on("click",function(){
		$("*[ectype='gm-tabs'] li").eq(1).click();
	});
	
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		
		if(top >= floorsTop){
			axis.addClass("detail-hd-fixed");
			
			if(bor.length>0){
				bor.css({"width":winHeight,"left":-((winHeight-1200)/2 + floors.position().left)});
			}
		}else{
			axis.removeClass("detail-hd-fixed");
		}
	});
}
/* 商品详情信息 详情、评论、讨论圈滚动悬浮栏 end */


/* 商品详情页 清空浏览历史记录 */
function clear_history(){
	Ajax.call('user.php', 'act=clear_history',function(){
		$("*[ectype='history_mian']").html('<div class="history_tishi">'+json_languages.no_history+'<br /><a href="index.php" class="ftx-05">'+json_languages.go_shoping+'</a></div>');
	}, 'GET', 'TEXT',1,1);
}

/* jq仿select带返回函数 start */

jQuery.divselect = function(divselectid,inputselectid,fn) {
	var inputselect = $(inputselectid);
	$(document).on('click',divselectid+" .cite",function(event){
		$(".imitate_select").find("ul").hide();
		event.stopImmediatePropagation();
		var ul = $(divselectid+" ul");
		if(ul.css("display")=="none"){
			ul.css("display","block");
		}else{
			ul.css("display","none");
		}
		$(this).siblings("ul").perfectScrollbar("destroy");
		$(this).siblings("ul").perfectScrollbar();
	});
	$(document).on("click",divselectid+" ul li a",function(event){
		event.stopImmediatePropagation();
		var txt = $(this).text();
		$(divselectid+" .cite span").html(txt);
		var value = $(this).data("value");
		inputselect.val(value);
		$(divselectid+" ul").hide();
		if(fn){
			fn($(this));
		}		
	});
	$(document).on("click",function(){
		$(divselectid+" ul").hide();
	});
};

/* jq仿select带返回函数 end */

/* 未登录弹出框 start */
jQuery.notLogin = function(actUrl,backUrl){
	if(backUrl != null){
		if(backUrl.indexOf('&amp;') > -1){
			var backUrl = backUrl.replace("&amp;","|");
		}else if(backUrl.indexOf('&') > -1){
			var backUrl = backUrl.replace("&","|");
		}
	}
	Ajax.call(actUrl,'back_act='+ backUrl, function(data){
		pb({
			id:"loginDialogBody",
			title:json_languages.not_login,
			width:380,
			height:430,
			content:data.content, 	//调取内容
			drag:false,
			foot:false
		});
	}, 'POST','JSON');
}

/* 未登录弹出框 end */
function checkstore_search_cmt(store_search_cmt){
	$("input[name='store_search_cmt']").val(store_search_cmt);
}

function checkSearchForm(){
	var keywords = $("input[name='keywords']").val();
	if(keywords == ''){		
		divId = "keywords_html";
		var content = '<div id="' + divId + '">' + 
							'<div class="tip-box icon-box">' +
								'<span class="warn-icon m-icon"></span>' + 
								'<div class="item-fore">' +
									'<h3 class="rem ftx-04">' + no_keywords + '</h3>' +
								'</div>' +
							'</div>' +
						'</div>';
		
		pb({
			id:divId,
			title:sys_msg,
			width:445,
			height:58,
			content:content,
			drag:false,
			foot:false
		});	
		
		return false;
	}
}

//购物车点击去结算判断是否选择商品
function get_toCart(){
	var num = 0;
	$("input[name='checkItem']").each(function(index, element) {
		if ($(element).is(":checked")){
			num ++;
		}
	});
	if (num == 0){
		var content = $("#flow_add_cart").html();
		pb({
			id:"flow_add_cart",
			title:json_languages.pb_title,
			width:455,
			height:58,
			content:content,
			drag:false,
			foot:false
		});
		return false;
	}
}

//购物车和结算页面 结算按钮悬浮显示start
function cartScroll(){
	var winHeight = $(window).height();
	var toolbar = $(".cart-toolbar");
	var toolbarTop = toolbar.offset().top;
	$(window).resize(function(){
		winHeight = $(window).height();
	});
	
	if(toolbarTop>winHeight){
		toolbar.addClass("fixed-bottom");
	}
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop+winHeight>toolbarTop){
			toolbar.removeClass("fixed-bottom");
		}else{
			toolbar.addClass("fixed-bottom");
		}
	});
}
//购物车和结算页面 结算按钮悬浮显示end

/*商品降价通知 提交*/
function notifyBox(user_id,goods_id,divid){
	var hopeDiscount = $(divid).find("input[name='price-notice']").val();
	var cellphone = $(divid).find("input[name='cellphone']").val();
	var email = $(divid).find("input[name='email']").val();

	//var res = checkform(hopeDiscount,cellphone,email);

	/*if(!res){
		return false;
	}*/

	jQuery.ajax({
		url: 'ajax_dialog.php?act=price_notice',
		type: 'post',
		dataType: 'json',
		data: {
			'user_id': user_id,
			'goods_id': goods_id,
			'hopeDiscount': hopeDiscount,
			'cellphone':cellphone,
			'email': email
		},
		cache: false,
		success: function (result) {
			if (result.status == 0) {
				pbDialog(result.msg,"",0);
			}else{
				pbDialog(result.msg,"",0);
			}
		},
		error: function () {
		}
	})
}

/****************************结算页面收货地址修改新增 保存方法 start*****************************/
function addUpdate_Consignee(frm){
	var obj = $(frm);
	var info_return = 0;
	var csg = new Object;
	var fale = false;
	var shipping_id = get_cart_shipping_id();
	
	csg.goods_flow_type = obj.find("input[name='goods_flow_type']").val(); //商品类型 虚拟100|实体101
	
	csg.consignee 		= obj.find("[name='consignee']").val();
	if(csg.goods_flow_type == 101){
		csg.country 		= obj.find("[name='country']").val();
		csg.province 		= obj.find("[name='province']").val();
		csg.city 			= obj.find("[name='city']").val();
		csg.district 		= obj.find("[name='district']").val();
		csg.street 			= obj.find("[name='street']").val();
		csg.address 		= obj.find("[name='address']").val();
		csg.zipcode 		= obj.find("[name='zipcode']").val();
		csg.sign_building 	= obj.find("[name='sign_building']").val();
		csg.best_time 		= obj.find("[name='best_time']").val();
	}
	
	csg.mobile 			= obj.find("[name='mobile']").val();
	csg.tel 			= obj.find("[name='tel']").val();
	csg.email 			= obj.find("[name='email']").val();
	csg.address_id 		= obj.find("[name='address_id']").val();
	
	if(csg.consignee == ''){
		pbDialog(json_languages.input_Consignee_name,'',0);
	}else if(!Utils.isTel(csg.mobile) || csg.mobile.length != 11){
		pbDialog(json_languages.msg_phone_not,'',0);
		return false;
	}else if(csg.country == 0 && csg.goods_flow_type == 101){
		pbDialog(json_languages.select_consigne,'',0);
		return false;
	}else if(csg.province == 0 && csg.goods_flow_type == 101){
		pbDialog(json_languages.Province,'',0);
		return false;
	}else if(csg.city == 0 && csg.goods_flow_type == 101){
		pbDialog(json_languages.City,'',0);
		return false;
	}else if(!$('#selDistricts_').is(":hidden") &&csg.district == 0 && csg.goods_flow_type == 101){
		pbDialog(json_languages.District,'',0);
		return false;
	}else if(!$('#selStreets_').is(":hidden") && csg.street == 0 && csg.goods_flow_type == 101){
		pbDialog(json_languages.Street,'',0);
		return false;
	}else if(csg.address == '' && csg.goods_flow_type == 101){
		pbDialog(json_languages.Detailed_address_null,'',0);
		return false;
	}/*else if(csg.email != '' && !Utils.isEmail(csg.email)){
		pbDialog("邮箱不能为空",'',0);
		console.log(10);
	}*/else{
		
		//修改新增地址 延迟加载效果
		$("#consignee-addr").html("<div class='load'>"+load_icon+"</div>");
		
		Ajax.call('flow.php', 'step=insert_Consignee&csg=' + $.toJSON(csg) + '&shipping_id=' + $.toJSON(shipping_id), addUpdate_ConsigneeResponse, 'POST', 'JSON');
		
		fale = true;
	}
	
	return fale;
}

//回调
function addUpdate_ConsigneeResponse(result){
	if(result.error > 0){
		if(result.error == 2){
			pbDialog(result.message,"",0);
			location.href = "user.php";
		}
		
		if(result.error == 4){
			$('#consignee-addr').html(result.content);
		}
	}else{
		$('#consignee-addr').html(result.content);
		$('#goods_inventory').html(result.goods_list);//送货清单
		$('#ECS_ORDERTOTAL').html(result.order_total);//费用汇总
	}
	
	if(result.error == 4){
		var ok_title,cl_title;
		var width = 455; 
		var height = 58;
		var divId = "address_div_id";
		
		ok_title = json_languages.determine;
		cl_title = json_languages.cancel;
		
		var content = '<div id="' + divId + '">' + 
							'<div class="tip-box icon-box">' +
								'<span class="warn-icon m-icon"></span>' + 
								'<div class="item-fore">' +
									'<h3 class="rem ftx-04">' + result.message + '</h3>' +
								'</div>' +
							'</div>' +
						'</div>';
					
		pb({
			id:divId,
			title:json_languages.Prompt_info,
			width:width,
			height:height,
			ok_title:ok_title, 	//按钮名称
			cl_title:cl_title, 	//按钮名称
			content:content, 	//调取内容
			drag:false,
			foot:true,
			onOk:function(){
				$('#' + divId).remove();
			},
			onCancel:function(){
				$('#' + divId).remove();
			}
		});
		
		$('.pb-ok').addClass('color_df3134');
	}
	$('#shipping_list').html(result.shipping_content);
}
/****************************结算页面收货地址修改新增 保存方法 start*****************************/

/******************************门店选择 切换城市*******************************/
function regionSelect(ru_id,goods_id){
	var hoverTimer,outTimer,_this,level=0,id=0,name="";
	var changeCity = "#latelStorePick .change-shop-city",
		changeBoxinfo = ".city-box-info",
		tab = ".city-tab .city-item",
		cityItem = ".city-box .city-item",
        catyHst = ".city-hot .city-item",
		shopitem = ".select-shop-box .shop-info-item",
		doc = $(document);
		
	//鼠标移动到切换城市展开所有城市选择
	doc.on("mouseenter",changeCity,function(){
		clearTimeout(outTimer);
		_this = $(this);
		hoverTimer = setTimeout(function(){
			_this.parents(".city-box-tit").siblings(".city-box-info").show()
		},100);
	})
	.on("mouseleave",changeCity,function(){
		clearTimeout(hoverTimer);
		_this = $(this);
		outTimer = setTimeout(function(){
			_this.parents(".city-box-tit").siblings(".city-box-info").hide();
		},100);	
	})
	.on('mouseenter',changeBoxinfo,function(){
		clearTimeout(outTimer);
		_this = $(this);
		_this.show();
	})
	.on('mouseleave',changeBoxinfo,function(){
		_this = $(this);
		_this.hide();
	})
	.off("click",catyHst).on('click',catyHst,function(){
		var spec_arr = '';
		var formBuy = document.forms['ECS_FORMBUY'];
		if (formBuy)
		{
			spec_arr = getSelectedAttributes(formBuy);
		}
		_this = $(this),level = _this.data("level"),id = _this.data("id"),name = _this.data("name");
		
		var province = 0,city = 0,district = 0;
		if(level == 1){
			province = id;
		}else if(level == 2){
			city = id;
		}else{
			district = id;
		}
		check_store(province,city,district,goods_id,spec_arr);
	})
	.off("click",tab).on("click",tab,function(){
		var spec_arr = '';
		var formBuy = document.forms['ECS_FORMBUY'];
		if (formBuy)
		{
			spec_arr = getSelectedAttributes(formBuy);
		}
		//地区三级联动切换
		_this = $(this),level = _this.data("level"),id = _this.data("id"),name = _this.data("name");
		_this.addClass("curr").siblings().removeClass("curr");
			Ajax.call("get_ajax_content.php?act=get_parent_regions",'value='+ id + "&level=" + level + "&ru_id=" + ru_id+ '&goods_id=' + goods_id + "&spec_arr="+spec_arr , function(data){
			$(".city-box").html(data.html);
		}, 'POST','JSON');
	})
	.off("click",cityItem).on("click",cityItem,function(){
		/*获取属性*/
		var spec_arr = '';
		var formBuy = document.forms['ECS_FORMBUY'];
		if (formBuy)
		{
			spec_arr = getSelectedAttributes(formBuy);
		}
		//地区选择
		_this = $(this),level = _this.data("level"),id = _this.data("id"),name = _this.data("name");
		
		var cityTab = _this.parents(".city-box").siblings(".city-tab");
		
		cityTab.find("[data-level="+(level+1)+"]").addClass("curr").siblings().removeClass("curr");
		
		cityTab.find("[data-level="+level+"]").html(name).attr("data-id",id).attr("data-name",name);
		
		if(level < 3){
			Ajax.call("get_ajax_content.php?act=getstoreRegion",'value='+ id + "&level=" + level + "&ru_id=" + ru_id + '&goods_id=' + goods_id + "&spec_arr="+spec_arr, function(data){
				$(".city-box").html(data.html);
			}, 'POST','JSON');
	    }else{
			var str ="";
			
			$(tab).each(function(){
				name = $(this).attr("data-name");
				str += name + "&nbsp;";
			});
			
			$(changeBoxinfo).hide();
			$(changeCity).find("em").html(str);
		   
			var province = 0,city = 0,district = 0;
			
			if(level == 1) {
				province = id;
			}else if(level == 2) {
				city = id;
			}else{
				district = id;
			}
			
			check_store(province,city,district,goods_id,spec_arr);
		}
	})
	.off("click",shopitem).on("click",shopitem,function(){
		_this = $(this);
		_this.addClass("active").siblings().removeClass("active");
	});
}

function check_store(province,city,district,goods_id,spec_arr){
    Ajax.call("ajax_dialog.php?act=get_store_list", 'country=' + province + '&city=' + city + '&district=' + district + '&goods_id=' + goods_id + "&spec_arr=" + spec_arr + "&type=store_select_shop", function (data) {
         $(".select-shop").html(data.content);
    }, 'POST', 'JSON');
}
/******************************门店选择 切换城市*******************************/

/******************************结算页面 门店选择 start*******************************/

//门店结算页面切换门店时间 start
function checked_store_info(){
	var end_time = $("input[name='take_time']").val();
	var store_mobile = $("input[name='store_mobile']").val();
	var cart_value = $("input[name='done_cart_value']").val();
	var store_mobile_data = $("input[name='store_mobile']").data('val');
	if(store_mobile == ''){
		$("input[name='store_mobile']").val(store_mobile_data);
		pbDialog(json_languages.login_phone_packup_one,"",0);
		$("input[name='store_mobile']").focus();
		return false;
	}else if(!Utils.isTel(store_mobile) || store_mobile.length != 11){
		pbDialog(json_languages.msg_phone_not,"",0);
		$("input[name='store_mobile']").focus();
		return false; 
	}else{
		Ajax.call("get_ajax_content.php?act=checked_store_info", 'end_time=' + end_time + '&store_mobile=' + store_mobile + "&cart_value=" + cart_value, function(data){
			if(data.error == 1){
				pbDialog(data.message,"",0);
			}
		}, 'POST','JSON');
	}
}
//门店结算页面切换门店时间 end

//获取门店
function get_store_list(obj,type,cart_value){
    var province = $("#selProvinces").val();
    var city = $("#selCities").val();
    var district = obj.value;
	
    if(district > 0){
        Ajax.call('ajax_dialog.php?act=get_store_list', 'province=' + province + '&city=' + city + '&district=' + district + '&cart_value='+cart_value + '&type=' + type, get_store_listResponse, 'GET', 'JSON'); 
    }
}
function get_store_listResponse(result){
	var div = $("*[ectype='get_seller_sotre']");
    if(result.error > 0){
        div.find("*[ectype='seller_soter']").html(result.content);
		div.find(".error").html('');
    }else{
       div.find("*[ectype='seller_soter']").html('');
	   div.find(".error").html('<i class="s_icon"></i>该地区没有门店');
    }
}

//切换门店，处理点单页面刷新，检查商品库存
function edit_offline_store(obj){
	var store_id = obj.value;
	$("input[name='store_id']").val(store_id);
	var cart_value = $("input[name='done_cart_value']").val();
	
	if(store_id > 0){
		Ajax.call('flow.php?step=edit_offline_store', 'store_id=' + store_id + '&cart_value=' + cart_value , edit_offline_storeResponse, 'GET', 'JSON'); 
	}
}
function edit_offline_storeResponse(result){
	if(result.error > 0){
		if(result.error == 1){
			var back_url = "flow.php";
			$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
			return false;
		}else{
			pbDialog(result.msg,"",0);
			return false;
		}
	}else{
		$('#goods_inventory').html(result.goods_list);//送货清单
		$('#ECS_ORDERTOTAL').html(result.order_total);//费用汇总
		$("input[name='store_id']").val();
	}
}
/******************************结算页面 门店选择 end*******************************/

//配送方式切换计算运费
function changeShippingResponse(result){
	$(".shipping_" + result.ru_id).val(result.shipping_id);
	$(".shipping_code_" + result.ru_id).val(result.shipping_code);
	$(".shipping_type_" + result.ru_id).val(result.shipping_type);
	
	if (result.error)
	{
	  pbDialog(result.massage,"",0);
	  location.href = './';
	}

	try
	{
	  var layer = document.getElementById("ECS_ORDERTOTAL");
	  layer.innerHTML = (typeof result == "object") ? result.content : result;
	}
	catch (ex) { }
}

//自提点回调函数
function selectPicksiteResponse(result){
	if(result.error == 0){
		$("#goods_inventory").html(result.content);
	}else{
		pbDialog(result.massage,"",0);
		location.href = './';
	}
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

//商品属性图片和商品相册关联切换 start
function getImgUrl(result)
{
	if(result.t_img != ''){
		$('#Zoomer').attr({ href:"" +result.t_img+ "" });
		$('#J_prodImg').attr({ src:"" +result.t_img+ "" });
		$('.MagicBoxShadow').eq(0).find('img').eq(0).attr({ src:"" +result.t_img+ "" });
		$('.MagicThumb-expanded').find('img').attr({ src:"" +result.t_img+ "" });
	}
}
//商品属性图片和商品相册关联切换 end

//input文本框 提示文字
jQuery.inputPrompt = function(s,c,v){
	var s = $(s);
	s.focus(function(){
		if($(this).val() == v){
			$(this).val("");
			if(c==true){
				$(this).css("color","#666");
			}
		}
	});
	s.blur(function(){
		if($(this).val()==''){
			$(this).val(v);
			if(c==true){
				$(this).css("color","#999");
			}
		}else{
			if(c==true){
				$(this).css("color","#666")
			}
		}
	});
}

//返回顶部（品牌专区使用到）
$.scrollTop = function(mode,obj){
	var right = ($(window).width()-1200)/2 - 30;
	var top = $(window).height() - 100;
	var blTop = $(mode).offset().top;
	$(obj).css({"right":right,"top":top});
	
	$(window).scroll(function(){
		var sTop = $(window).scrollTop();
		if(sTop > blTop){
			$(obj).removeClass("returnHide");
		}else{
			$(obj).addClass("returnHide");
		}
	});
	
	$(obj).click(function(){
		$("body,html").stop().animate({scrollTop:0});
	});
}

//邮箱订阅
function add_email_list(){
	var email = $('#user_email').val();
	
	if(Utils.isEmail(email)){
		Ajax.call('user.php?act=email_list&job=add&email=' + email, '',function(text){
			
			pbDialog(text,"",0);
			
		},'GET', 'TEXT');
	}else{
		pbDialog(json_languages.email_error,"",0);
		return false;
	}
}

/****************************************** js通用方法 end *************************************************/


/**************************************店铺街(store_street)end ***************************************/
$(function(){
    $("#res_store_user").val('');
    $("#res_store_province").val('');
    $("#res_store_city").val('');
    $("#res_store_district").val('');

    var orderName='ASC';
    $("*[ ectype='seller_sort']").on("click",function(){
        var T = $(this);
		var sortName = T.data('sort');
		if(orderName=='ASC')
		{
			orderName='DESC';
			T.children('i').removeClass("icon-up1").addClass("icon-down1");
		}
		else
		{
			orderName='ASC';
			T.children('i').removeClass("icon-down1").addClass("icon-up1");
		}
		T.addClass('curr').siblings().removeClass('curr');
		var area_list = $("input[name='area_list']").val();
		var strText = area_list + "|" + "sort-" + sortName + "|" + "order-" + orderName;
		store_shop_gotoPage_new(1, strText, 0);
    })
	
    $(document).on("click","*[ ectype='street_area']",function(){
		var _this = $(this),
			store_user = $("#res_store_user").val(),
			store_province = $("#res_store_province").val(),
			store_city = $("#res_store_city").val(),
			store_district = $("#res_store_district").val(),
			val = _this.data('val'),
			search_type = _this.data('type'),
			region_type = _this.data('region');
			
			var area        	= new Object();
			area.region_id   	= val;
			area.region_type  = region_type;
			area.store_user  = store_user;
			area.store_province  = store_province;
			area.store_city  = store_city;
			area.store_district  = store_district;

			Ajax.call('store_street.php?act=' + search_type, 'area=' + $.toJSON(area), function (result) {
				var store_user='',
					province='',
					city='',
					district='';

				if(result.error == 0){
					if(result.region_type == 2){
						$('#store_city').html(result.content);
						$('#store_district').html('');
					}else if(result.region_type == 3){
						$('#store_district').html(result.content);
					}
				}

				if(result.store_province){
					province = result.store_province;
				}

				if(result.store_city){
					city = result.store_city;
				}

				if(result.store_district){
					district = result.store_district;
				}

				if(result.store_user){
					store_user = result.store_user;
				}

				$("#res_store_user").val(store_user);
				$("#res_store_province").val(province);
				$("#res_store_city").val(city);
				$("#res_store_district").val(district);
                _this.parents("li").addClass('curr').siblings().removeClass('curr');
				$("*[ ectype='seller_sort']").first().addClass('curr').siblings().removeClass('curr');
				$("input[name='area_list']").val(result.id);
				store_shop_gotoPage_new(1, result.id, 0);
				slClick();
		   }, 'POST', 'JSON'); //兼容jQuery by mike
    })  
    slClick();
	
    $(document).on("click", "*[ectype='collect_store']", function(){
        var _this = $(this),
			value = _this.data("value"),
			ru_id = value.storeid,
			user_id = value.userid,
			site_domain = value.sitedomain,
			jsonp = value.jsonp,
			type = 0,
			msgtitle = "";

        if($(this).hasClass("selected")){
            type = 1;
        }
		
        if(user_id > 0){
            if(type == 1){
				msgtitle = json_languages.Focus_prompt_four;
            }else{
				msgtitle = json_languages.Focus_prompt_three;
            }
			
			pbDialog(msgtitle,"",0,455,78,"",true,function(){ajax_collect_store(ru_id, type, _this, site_domain)});
        }else{
			var back_url = _this.data("url");
			
			if(jsonp && site_domain){
				$.ajax({
				   type: "GET",
				   url: site_domain + "ajax_dialog.php",
				   data: "act=get_login_dialog&is_jsonp=" + jsonp + '&back_act='+ back_url,
				   dataType:'jsonp',
				   jsonp:"jsoncallback",
				   success: function(data){
						pb({
							id:"loginDialogBody",
							title:not_login,
							width:380,
							height:430,
							content:data.content, 	//调取内容
							drag:false,
							foot:false
						});
				   }
				});
			
			}else{
				$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
			}

			return false;  //by yanxin 弹框登录，不跳转到登录页
			//pbDialog(json_languages.Focus_prompt_login,"",0,455,78,"",true,function(){location.href = 'user.php'});
        }
    });
	
	/* *
	 * 店铺街列表
	 */
	function store_shop_gotoPage_new(page, id, type, libType)
	{
		Ajax.call('ajax_dialog.php?act=store_shop_gotoPage', 'page=' + page + '&id=' + id + '&type=' + type + '&libType=' + libType, store_shop_gotoPageResponse, 'GET', 'JSON');
	}
	
	function store_shop_gotoPageResponse(result)
	{
		$("*[ectype='store_shop_list']").html(result.content);
		$("*[ectype='pages_ajax']").html(result.pages);
		street();
	}

});

function slClick(){
	$(".s-l-v-list li").find("a").click(function(){
		$(this).parent().addClass("curr").siblings().removeClass("curr");
	})
}

function ajax_collect_store(ru_id,type,obj, site_domain){
	var url = '';
	
	if(site_domain!= "" && site_domain != null && site_domain != "undefined"){
		url = site_domain + 'get_ajax_content.php?act=ajax_store_collect';
	}else{
		url = 'get_ajax_content.php?act=ajax_store_collect';
	}
	
    Ajax.call(url, 'ru_id=' + ru_id + '&type=' + type , function(data){
		if(data.error == 1){
			pbDialog(json_languages.Focus_prompt_one,"",0);
		}else{
            var type = obj.data("type");

			if(data.type == 1){
				if(type == 'goods'){
					$("[ectype='collect_store']").each(function(){
						obj.removeClass("selected");
						obj.html("<i class='iconfont icon-zan-alt'></i>关注");
					});
				}else if(type == 'store'){
					obj.removeClass("selected");
					obj.html("<span>关注</span><i class='iconfont icon-zan-alt'></i>");
				}else{
					obj.removeClass("selected");
					obj.html("<i class='iconfont icon-zan-alt'></i>关注");
				}
			}else{
				if(type == 'goods'){
					$("[ectype='collect_store']").each(function(){
						obj.addClass("selected");
						obj.html("<i class='iconfont icon-zan-alts'></i>已关注");
					})
				}else if(type == 'store'){
					obj.addClass("selected");
					obj.html("<span>已关注</span><i class='iconfont icon-zan-alts'></i>");
				}else{
					obj.addClass("selected");
					obj.html("<i class='iconfont icon-zan-alts'></i>已关注");
				}
			}
		}
	}, 'GET', 'JSON');
}
/************************************** 店铺街(store_street)end ***************************************/

//jqueryAjax异步加载
$.jqueryAjax = function(url, data, ajaxFunc, type, dataType)
{
	var baseData = "is_ajax=1&";
	var baseFunc = function(){}
	
	if(!url)
	{
		url = "index.php";
	}
	
	if(!data)
	{
		data = "";
	}
	
	if(!type)
	{
		type = "get";
	}
	
	if(!dataType)
	{
		dataType = "json";
	}
	
	if(!ajaxFunc)
	{
		ajaxFunc = baseFunc;
	}
	
	data = baseData + data;
	
	$.ajax({
		type:type,
		url:url,
		data:data,
		dataType:dataType,
		success:ajaxFunc.success? ajaxFunc.success:ajaxFunc,
		error:ajaxFunc.error? ajaxFunc.error:baseFunc,
		beforeSend:ajaxFunc.beforeSend? ajaxFunc.beforeSend:baseFunc,
		complete:ajaxFunc.complete? ajaxFunc.complete:baseFunc,
		//dataFilter:ajaxFunc.dataFilter? ajaxFunc.dataFilter:baseFunc
	});	
}

//提示弹框
function pbDialog(msgTitle,msg,state,width,height,left,cBtn,onOk,ok_title,cl_title){
	//msgTitle 主提示信息
	//msg 次标题信息
	//state 状态 0表示感叹 1表示正确 2表示错误
	//width 弹出框宽度
	//height 弹出框高度
	//left 右边距
	//cBtn 弹出框取消按钮是否显示
	//onOk 点击确定返回函数
	var content = "",
		icon = "m-icon",
		msgTit = "",
		msgSpan = ""
		css  = "",
		foot = true,
		color = "ftx-04";

	if(state == 0){
		icon = "m-icon";
	}else if(state == 1){
		icon = "m-icon warn-icon-ok";
		color = "ftx-16"
	}else if(state == 2){
		icon = "m-icon warn-icon-error";
		color = "ftx-01"
	}
	
	if(msgTitle != ""){
		if(msg != ""){
			msgTit = "<h3 class='"+color+"'>"+ msgTitle +"</h3>";
		}else{
			msgTit = "<h3 class='"+color+" rem'>"+ msgTitle +"</h3>";
		}
	}
	
	if(msg != ""){
		msgSpan = "<span class='ftx-03'>"+ msg +"</span>";
	}
	
	if(width == null || width == ""){
		width = 450;
	}
	
	if(height == null || height == ""){
		height = 80;
	}

	if(left == null || left == ""){
		left = 100;
	}
	
	if(onOk == null || onOk ==""){
		foot = false;
	}
	
	if(ok_title == null || ok_title == ""){
		ok_title = json_languages.determine;
	}
	
	if(cl_title == null || cl_title == ""){
		cl_title = json_languages.cancel;
	}
	
	if(typeof(height) == "string"){
		content = '<div class="tip-box icon-box" style="min-height:'+ height +'px; padding-left:'+ left +'px;"><span class="warn-icon '+ icon +'"></span><div class="item-fore">'+ msgTit + msgSpan +'</div></div>';
	}else{
		content = '<div class="tip-box icon-box" style="height:'+ height +'px; padding-left:'+ left +'px;"><span class="warn-icon '+ icon +'"></span><div class="item-fore">'+ msgTit + msgSpan +'</div></div>';
	}

	pb({
		id:"pbDialog",
		title:json_languages.pb_title,
		width:width,
		height:height,
		content:content,
		drag:false,
		foot:foot,
		ok_title:ok_title,
		cl_title:cl_title,
		cl_cBtn:cBtn,
		onOk:onOk
	});
	
	var tipbox = $('#pbDialog .tip-box'),
		item_height = tipbox.find(".item-fore").height();
	
	if(item_height > 48){
		tipbox.find('h3').css({"line-height":"30px"});
	}
	
	if(typeof(height) == "string"){
		tipbox.parents(".pb-ct").css({"height":"auto","min-height":height});
	}
	
	tipbox.css({"padding-left":left});
}

/* 首页楼层分类切换函数 */
function get_homefloor_cat_content(f_this){
	var obj = $(f_this).data('value');
	var eveval = $(f_this).data("flooreveval");
	var visualhome = $(f_this).data("visualhome");//可视化模板标识
	var visualItme = $(f_this).parents("*[ectype='visualItme']");
	var identi = $(f_this).data("identi");
	
	var cat_id = '',
		floor_num = '',
		goods_ids = '',
		warehouse_id = '',
		floorcat = 0,
		seller_id = 0,
		area_id = '';
		
	if(visualhome == 1){
		cat_id = $(f_this).data('id');
		floor_num = $(f_this).data('floornum');
		warehouse_id = $("input[name='warehouse_id']").val();
		area_id = $("input[name='area_id']").val();
		goods_ids = $(f_this).data("catgoods");
		floorcat = $(f_this).data("floorcat");
		seller_id = $("input[name='merchantId']").val();
	}else{
		cat_id = obj.id;
		floor_num = obj.floornum;
		warehouse_id = obj.warehouse;
		area_id =obj.area;
	}
	
	if(floorcat == 2){
		eveval = 0;
	}
	
	if(eveval == 0){
		$.ajax({
			type: "POST",
			url: "get_ajax_content.php",
			data: "act=floor_cat_content&cat_id=" + cat_id + "&floor_num=" + floor_num + "&warehouse_id=" + warehouse_id + "&area_id=" + area_id + "&goods_ids=" + goods_ids + "&floorcat=" + floorcat + "&seller_id=" + seller_id,
			dataType:'json',
			success: function(data){
				if(visualItme.length > 0){
					if(floorcat == 2){
						var goods = data.content;
						var implement = visualItme.find("*[ectype='pList'] .li");
						if(identi == 1){
							implement = $(f_this).find("li");
						}
						implement.each(function(k){
						   var _this = $(this);
						   if(goods.length > 0){
								for(var i = 0; i < goods.length; i++){
								   var html = '';
								   if(k == i){
									   var goods_price = '';
									   if(goods[i].promote_price != ''){
										   goods_price = goods[i].promote_price;
									   }else{
										   goods_price = goods[i].shop_price;
									   }
									   if(identi == 1){
											html = '<div class="p-img"><a href="'+goods[i].url+'" target="_blank"><img src="'+goods[i].goods_thumb+'"></a></div><div class="p-info"><div class="p-name"><a href="'+goods[i].url+'" target="_blank">'+goods[i].goods_name+'</a></div><div class="p-price">' + goods_price + '</div></div>';
									   }else{
											html = '<div class="product"><div class="p-img"><a href="'+goods[i].url+'" target="_blank"><img src="'+goods[i].goods_thumb+'"></a></div><div class="p-name"><a href="'+goods[i].url+'" target="_blank">'+goods[i].goods_name+'</a></div><div class="p-price"><div class="shop-price">' + goods_price + '</div> </div></div>';
									   }
										_this.html(html);
									}else if(k > i){
										/*if(identi == 1){
											_this.html('<div class="p-img"><a href="#" target="_blank"><img src="data/gallery_album/visualDefault/zhanwei.png"></a></div><div class="p-info"><div class="p-name"><a href="#" target="_blank">请选择商品...</a></div><div class="p-price"><em>¥</em>0.00</div></div>');
										}else{
											_this.html('<div class="product"><div class="p-img"><a href="#" target="_blank"><img src="data/gallery_album/visualDefault/zhanwei.png"></a></div><div class="p-name"><a href="#" target="_blank">请选择商品...</a></div><div class="p-price"><em>¥</em>0.00</div></div>');
										}*/
									}
								}
							}else{
								/*if(identi == 1){
									_this.html('<div class="p-img"><a href="#" target="_blank"><img src="data/gallery_album/visualDefault/zhanwei.png"></a></div><div class="p-info"><div class="p-name"><a href="#" target="_blank">请选择商品...</a></div><div class="p-price"><em>¥</em>0.00</div></div>');
								}else{
									_this.html('<div class="product"><div class="p-img"><a href="#" target="_blank"><img src="data/gallery_album/visualDefault/zhanwei.png"></a></div><div class="p-name"><a href="#" target="_blank">请选择商品...</a></div><div class="p-price"><em>¥</em>0.00</div></div>');
								}*/
							}
						});
					}else{
						if(floorcat == 1){
							visualItme.find("[ectype='floor_cat_" + data.cat_id + "']").append(data.content);
						}else{
							visualItme.find("[ectype='floor_cat_" + data.cat_id + "']").html(data.content);
						}
						visualItme.find("*[ectype='floorTit'] li[data-id='" + data.cat_id + "']").data("flooreveval", 1);
					}
				}else{
					$("#floor_cat_" + data.cat_id).html(data.content);
					$("*[ectype='floorTit']").find("li[data-id='" + data.cat_id + "']").data("flooreveval", 1);
				}
			}
		});
	}
}

/* IM客服点击弹出框 */
function openWin(obj){
	var where_goods = '',
		where_seller = '',
		where = '',
		url = '';
		
	var	name = 'webcall',
		iWidth = 700,
		iHeight = 500,
		iTop = '',
		iLeft = '';
	
	if($(obj).attr('goods_id')){
		where_goods = '&goods_id=' + $(obj).attr('goods_id');
	}
	
	if($(obj).attr('ru_id')){
		where_seller = '&ru_id=' + $(obj).attr('ru_id');
	}

	if($(obj).attr('IM_type') != 'dsc'){
		where = where_goods + where_seller;
	}
	
	//转向网页的地址;
	url = 'online.php?act=service' + where;

	//获得窗口的垂直位置
	iTop = (window.screen.availHeight - 30 - iHeight) / 2;
	
	//获得窗口的水平位置
	var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
	
	window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
}

/* 详情页 数量选择(商品详情页、团购详情页、秒杀详情页、积分商品详情页、预售详情页)*/
function quantity(){
	var quantity = $("*[ectype='quantity']"),	//数量input
		btnReduce = $("[ectype='btnReduce']"),	//数量 减
		btnAdd = $("[ectype='btnAdd']"),		//数量 加
		message = '';							//提示文字
	
	var qNumber = Number(quantity.val()),									//购买选择的数量
		perNumber = Number($("*[ectype='perNumber']").val()),	   			//库存数量
		perMinNumber = Number($("*[ectype='perMinNumber']").val()),			//最小值 默认为1
		restrictShop = Number($("*[ectype='restrictShop']").val()),			//是否开启限购 1为开启；0为未开启
		rNumber = Number($("*[ectype='restrictNumber']").data("value")),	//限购数量
		ogNumber = Number($("*[ectype='orderGNumber']").data("value"));		//限购已购数量
	
	//商品数量减少
	btnReduce.on("click",function(){
		if(qNumber>perMinNumber){
			qNumber-=1;
			
			quantity.val(qNumber);
			
			if(qNumber == 1){
				$(this).addClass("btn-disabled");
			}
		}else{
			quantity.val(perMinNumber);
		}
	});
	
	//商品数量增加
	btnAdd.on("click",function(){
		if(perNumber > qNumber){
			qNumber+=1;
			restrictShopFunc();
		}else{
			if(perNumber == 0){
				perNumber = 1;
			}
			quantity.val(perNumber);
		}
	});
	
	//商品数量修改
	quantity.on('blur',function(){
		if($(this).val() > 0){
			qNumber = Number($(this).val());
		}else{
			qNumber = 1;
		}
		restrictShopFunc();
		//changePrice();
	});
	
	restrictShopFunc = function(){
		//限购
		if(restrictShop > 0){
			if(ogNumber >= rNumber){
				message = json_languages.Already_buy + ogNumber + json_languages.Already_buy_two;
				
				pbDialog(message,"",0,550,"");
				qNumber = 1;
			}else if(qNumber > rNumber && rNumber > 0){
				message = json_languages.Purchase_quantity;
				
				pbDialog(message,"",0);
				qNumber = 1;
			}
		}
		quantity.val(qNumber);
		btnReduce.removeClass("btn-disabled");
	}
};

//积分兑换商品详情 立刻兑换
function get_exchange(){
	/* by kong start 改  */
	var quantity = Number($("*[ectype='quantity']").val());  //购买数量
	var number = Number($("*[ectype='perNumber']").val());	 //库存
	var payPoints = $("*[ectype='payPoints']").val();//会员积分
	var ei= $("*[ectype='exchange_integral']").val();//兑换商品需要积分值
	if(user_id > 0){
		if(quantity > number){
			var message = json_languages.most_exchange + number + json_languages.Piece_goods;
			pbDialog(message,"",0);
			return false;
		}
		
		if(ei*quantity > payPoints){
			pbDialog(json_languages.exchange_error_one,"",0,550,80);
			return false;
		}
	}else{
		var goods_id = $("input[name='good_id']").val();
		var back_url = "exchange.php?act=view&id=" + goods_id;
		$.notLogin("get_ajax_content.php?act=get_login_dialog",back_url);
		return false;
	}
	/*by kong*/
}

//商城右侧悬浮黑导航栏展开高度只适应
function tbplHeigth(){
	var winHeight = $(window).height();
	var chaHeight = $("*[ectype='tbpl-content']").data("height");
	
	$("*[ectype='tbpl-main']").css({"height":winHeight-38});
	$("*[ectype='tbpl-content']").css({"height":winHeight-chaHeight});

	$(window).resize(function(){
		winHeight = $(this).height();
		$("*[ectype='tbpl-main']").css({"height":winHeight-38});
		$("*[ectype='tbpl-content']").css({"height":winHeight - chaHeight});
	});
}

//加载中
function ajaxLoadFunc(obj){
	var html = "<div class='dsc-load-mask'></div><div class='dsc-loadding'><img src='images/dsc-loadding.gif'><p>正在拼命加载中...</p></div>";
	$("body").append(html);
}

/* 店铺关注 */
function goods_collect_store(seller_id){
	Ajax.call('ajax_dialog.php', 'act=goods_collect_store&seller_id=' + seller_id, goodsCollectStorenResponse, 'GET', 'JSON');
}

function goodsCollectStorenResponse(res){
	
	if(res.error > 0){
		
		if($(".gz-store").length > 0){
			$(".gz-store").html('<i class="iconfont icon-zan-alts"></i>已关注');
			$(".gz-store").addClass('selected');
		}
		
		if($(".gz-store-top").length > 0){
			$(".gz-store-top").html('<span>已关注</span><i class="iconfont icon-zan-alts"></i>');
			$(".gz-store-top").addClass('selected');
		}
	}else{
		
		if($(".gz-store").length > 0){
			$(".gz-store").html('<i class="iconfont icon-zan-alt"></i>关注');
			$(".gz-store").removeClass('selected');
		}
		
		if($(".gz-store-top").length > 0){
			$(".gz-store-top").html('<span>关注</span><i class="iconfont icon-zan-alt"></i>');
			$(".gz-store-top").removeClass('selected');
		}
	}
}