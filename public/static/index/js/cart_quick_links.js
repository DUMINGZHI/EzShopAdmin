jQuery(function($){
	//创建DOM
	var 
	quickHTML = document.querySelector("div.quick_link_mian"),
	quickShell = $(document.createElement('div')).html(quickHTML).addClass('quick_links_wrap'),
	quickLinks = quickShell.find('.quick_links');
	quickPanel = quickLinks.next();
	quickShell.appendTo('.mui-mbar-tabs');
	open_tb = $(".J-open-tb");
	
	//具体数据操作 
	var 
	quickPopXHR,
	loadingTmpl = '<div class="loading" style="padding:30px 80px"><i></i><span>Loading...</span></div>',
	popTmpl = '<a href="javascript:;" class="ibar_closebtn" title="关闭"></a><div class="ibar_plugin_title"><h3><%=title%></h3></div><div class="pop_panel"><%=content%></div><div class="arrow"><i></i></div><div class="fix_bg"></div>',
	historyListTmpl = '<ul><%for(var i=0,len=items.length; i<5&&i<len; i++){%><li><a href="<%=items[i].productUrl%>" target="_blank" class="pic"><img alt="<%=items[i].productName%>" src="<%=items[i].productImage%>" width="60" height="60"/></a><a href="<%=items[i].productUrl%>" title="<%=items[i].productName%>" target="_blank" class="tit"><%=items[i].productName%></a><div class="price" title="单价"><em>&yen;<%=items[i].productPrice%></em></div></li><%}%></ul>',
	newMsgTmpl = '<ul><li><a href="#"><span class="tips">新回复<em class="num"><b><%=items.commentNewReply%></b></em></span>商品评价/晒单</a></li><li><a href="#"><span class="tips">新回复<em class="num"><b><%=items.consultNewReply%></b></em></span>商品咨询</a></li><li><a href="#"><span class="tips">新回复<em class="num"><b><%=items.messageNewReply%></b></em></span>我的留言</a></li><li><a href="#"><span class="tips">新通知<em class="num"><b><%=items.arrivalNewNotice%></b></em></span>到货通知</a></li><li><a href="#"><span class="tips">新通知<em class="num"><b><%=items.reduceNewNotice%></b></em></span>降价提醒</a></li></ul>',
	quickPop = quickShell.find('#quick_links_pop'),
	quickDataFns = {
		//购物信息
		cart_list: {
			title: '购物车',
			content: null,
			init:$.noop
		},
		mpbtn_total:{
			title: '我的资产',
			content: null,
			init:$.noop
		},
		mpbtn_history:{
			title: '我的足迹',
			content:'',
			init: $.noop
		},
		mpbtn_collection:{
			title: '我的收藏',
			content: null ,
			init: $.noop
		},
		mpbtn_order:{
			title: '我的订单',
			content: null,
			init: $.noop
		},
		mpbtn_yhq:{
			title: '优惠券',
			content: null,
			init: $.noop
		}
	};
	
	//showQuickPop
	var 
	prevPopType,
	prevTrigger,
	doc = $(document),
	popDisplayed = false,
	popDisplayed2 = false,
	//初始化和点击收起
	hideQuickPop = function(){
		if(prevTrigger){
			prevTrigger.removeClass('current');
		}
		popDisplayed = false;
		prevPopType = '';
		quickShell.css({width:40});
	},
	//点击展开
	showQuickPop = function(type){
		if(quickPopXHR && quickPopXHR.abort){
			quickPopXHR.abort();
		}
		if(type !== prevPopType){
			var fn = quickDataFns[type];
			
			quickShell.css({width:320});
			
			Ajax.call('get_ajax_content.php?act=get_content', 'data_type=' + type, return_content, 'POST', 'JSON');
			
			function return_content(result)
			{
				fn.content=result.content;
				quickPop.html(ds.tmpl(popTmpl, fn));
				fn.init.call(this, fn);
				
				tbplHeigth();
			}
		}
		//doc.unbind('click.quick_links').one('click.quick_links', hideQuickPop);
		
		quickPop[0].className = 'quick_links_pop quick_' + type;
		popDisplayed = true;
		prevPopType = type;
		quickPop.show();
	};
	quickShell.bind('click.quick_links', function(e){
		e.stopPropagation();
	});
	//关闭按钮
	quickPop.delegate('a.ibar_closebtn','click',function(){
		if(prevTrigger){
			prevTrigger.removeClass('current');
		}
		popDisplayed = false;
		prevPopType='';
		quickShell.css({width:40});
	});
	
	//通用事件处理
	var 
	view = $(window),
	quickLinkCollapsed = !!ds.getCookie('ql_collapse'),
	getHandlerType = function(className){
		return className.replace(/current/g, '').replace(/\s+/, '');
	},
	showPopFn = function(obj){
		if(obj == null){
			var type = getHandlerType(this.className);
			
			if(popDisplayed && type === prevPopType){
				return hideQuickPop();
			}
			
			showQuickPop(this.className);
		}else{
			var type = getHandlerType(obj);
			
			if(popDisplayed && type === prevPopType){
				return hideQuickPop();
			}
			
			showQuickPop(obj);
		}
		if(prevTrigger){
			prevTrigger.removeClass('current');
		}
		prevTrigger = $(this).addClass('current');
	},
	quickHandlers = {
		//购物车，最近浏览，商品咨询
		my_qlinks: showPopFn,
		cart_list: showPopFn,
		mpbtn_total: showPopFn,
		leave_message: showPopFn,
		mpbtn_history:showPopFn,
		mpbtn_order:showPopFn,
		mpbtn_collection:showPopFn,
		mpbtn_yhq:showPopFn,
		//返回顶部
		return_top: function(){
			ds.scrollTo(0, 0);
			hideReturnTop();
		}
	};
	
	quickShell.delegate('a', 'click', function(e){
		var type = getHandlerType(this.className);
		if(type && quickHandlers[type]){
			quickHandlers[type].call(this);
			e.preventDefault();
		}
	});
	
	open_tb.bind('click.J-open-tb',function(e){
		var type = $(".mpbtn_yhq").attr("class");
		showPopFn(type);
	});
	
	doc.click(function(e){
		var target = $(e.target);
		if(target.closest(".J-open-tb,.quick_links").length == 0){
			hideQuickPop();
		}
	});
	
	//Return top
	var scrollTimer, resizeTimer, minWidth = 1350;

	function resizeHandler(){
		clearTimeout(scrollTimer);
		scrollTimer = setTimeout(checkScroll, 160);
	}
	
	function checkResize(){
		quickShell[view.width() > 1340 ? 'removeClass' : 'addClass']('quick_links_dockright');
	}
	function scrollHandler(){
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(checkResize, 160);
	}
	function checkScroll(){
		view.scrollTop()>100 ? showReturnTop() : hideReturnTop();
	}
	function showReturnTop(){
		quickPanel.addClass('quick_links_allow_gotop');
	}
	function hideReturnTop(){
		quickPanel.removeClass('quick_links_allow_gotop');
	}
	
	view.bind('scroll.go_top', resizeHandler).bind('resize.quick_links', scrollHandler);
	quickLinkCollapsed && quickShell.addClass('quick_links_min');
	resizeHandler();
	scrollHandler();
});