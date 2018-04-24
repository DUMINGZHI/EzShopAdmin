//顶级分类页楼层异步加载信息start
jQuery.catTopLoad = function(tpl){
	var load_num=0;
	var execute=true;
	var $minUl = $("*[ectype='catetopWarp']");
	var wrapHeight = $minUl.height();
	var wrapTop = $minUl.offset().top;
	var items = $("*[ectype='items']").find("*[ectype='item']");
	function load_cat_top(key)
	{
		var region_id = $("input[name='region_id']").val();
		var area_id = $("input[name='area_id']").val();
		var cat_id = items.eq(key).data('catid');
		var prent_id = $("input[name='cat_id']").val();
		if(items.length>key){
			execute = true;
		}else{
			execute = false;
		}
			
		if(execute&&key<items.length)
		{
			$.ajax({
			   type: "POST",
			   url: "get_ajax_content.php",
			   data: "act=get_cat_top_list&tpl="+ tpl +"&cat_id=" + cat_id + "&rome_key=" + load_num + "&prent_id=" + prent_id + "&region_id=" + region_id + "&area_id=" + area_id,
			   dataType:'json',
			   success: function(data){
				   $("*[ectype='floor-loading']").hide();
				   load_brand_response(data);
			   },
			   beforeSend : function(){
				   $("*[ectype='floor-loading']").show();
			   }
			});
			execute=false;
		}
	}
	
	load_cat_top(load_num); //默认显示品牌

	$(window).on("scroll",function(){
		var scrollTop = $(window).scrollTop();			
		if(scrollTop > wrapHeight-200){
			if(execute)
			{
				load_cat_top(load_num);
				execute=false;
			}
		}
	});
	
	function load_brand_response(result)
	{
		if(!result.error)
		{
			load_num+=1;
			$("*[ectype='goods_cat_level']").append(result.content);

			loadCategoryTop(load_num);
			
			if(result.maxindex)
			{
				$.catetopLift();
				execute=false;
			}
			else
			{
				execute=true;	
			}
		}
	}
}
//顶级分类页楼层异步加载信息start

//首页楼层异步加载信息start
jQuery.homefloorLoad =function(){
	var load_num=0;
	var execute = true;
	var wrapTop = $("*[ectype='goods_cat_level']").position().top;
	var winHeight = $(window).height();
	var fh = 668; //楼层高度
	
	$(window).on("scroll",function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop + winHeight > wrapTop + (fh*load_num)){
			if(execute)
			{	
				load_goods_cat(load_num);
				execute=false;
			}
		}
	});
	
	
	function load_goods_cat(key)
	{	
		if(execute)
		{
			$.ajax({
			   type: "POST",
			   url: "get_ajax_content.php",
			   data: "act=get_index_goods_cat&rome_key=" + load_num,
			   dataType:'json',
			   success: function(data){
				   $("*[ectype='floor-loading']").hide();
				   load_goods_cat_response(data);
			   },
			   beforeSend : function(){
				   $("*[ectype='floor-loading']").show();
			   }
			});
			execute=false;
		}
	}		
	
	load_goods_cat(load_num);
	
	function load_goods_cat_response(result)
	{
		
		if(!result.error)
		{
			$("*[ectype='goods_cat_level']").append(result.content);
			
			load_num+=1;
			load_js_content(load_num);
			if(result.maxindex)
			{
				$.catetopLift();
				execute=false;
				
			}
			else
			{
				execute=true;	
			}
		}
		else
		{
			load_js_content();
			execute=false;	
		}
	}
}
//首页楼层异步加载信息end

//商品列表异步加载瀑布流
jQuery.itemLoad =function(obj,it,best,query_string,model){
	var execute=true,
		obj = $(obj),
		count = 0,
		sec_count = 0,
		wrapHeight,
		scrollTop,
		loading = $("*[ectype='floor-loading']");
	
	//判断it值是否存在
	if(!it)it = "li";
	
	$(window).on("scroll",function(){
		//判断best是否存在
		if(best){
			sec_count  = $(best).find("ul li").length; 
		}else{
			sec_count = 0;
		}
		count = obj.find(it).length;
		wrapHeight = obj.height();
		scrollTop = $(window).scrollTop();
		
		if(scrollTop > wrapHeight){
			if(execute)
			{
				load_more_goods(count, sec_count);
				execute=false;
			}
		}
	});
	
	function load_more_goods(count, sec_count)
	{
		$.ajax({
			type:'get',
			url:window.location.href.replace(/\?.+/g,''),
			data:query_string+'&act=load_more_brand&goods_num='+count+'&best_num='+sec_count +'&model=' + model,
			dataType:'json',
			success:function(data)			
			{
				loading.hide();
				if(data.cat_goods)
				{	
					obj.find("*[ectype='items']").append(data.cat_goods);
					if(data.best_goods)
					{
						$(best).find("ul").append(data.best_goods);
					}
					sildeImg(count);
					execute=true;
				}
			},
			beforeSend : function(){
			   if(count>20){	
			   		loading.show();
			   }
		   }
		});
	}
}
//商品列表异步加载瀑布流end


//首页极顶级分类页楼层导航 函数
jQuery.catetopLift = function(){
	// dom
	var lift = $("*[ectype='lift']");
	var lift_item = lift.find("*[ectype='liftItem']");
	var floor_wp = $("*[ectype='goods_cat_level']");
	var floorItem = floor_wp.find("*[ectype='floorItem']");
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	
	//楼层对应框总个数
	var length = lift_item.length;
	
	//楼层对应框
	var lift_floor_item = "lift-floor-item";
	
	//放回顶部
	var returnTop = "lift-item-top";
	
	//隐藏样式
	var hideClass = "lift-hide";
	
	var left = 0;
	
	
	if(winWidth<1400){
		left = ((winWidth-1200)/2 - lift.width())/2;
	}else{
		left = (winWidth-1200)/2 - lift.width() - 50;
	}
	
	var top = "50%";
	
	lift.css({"left":left,"top":top});
	
	// init
	function init(){
		var bstop = $(window).scrollTop();
		var i = 0;
		var firstItem = "";
		var firstTarget;

		//判断首页内容滚动层级首个层级是否存在
		if(lift_item.eq(0).is(":hidden")){
			lift_item.each(function(index, element){
				if($(element).is(":hidden")){
					i++;
				}
			});
		}
		
		firstItem = lift_item.eq(i);
		
		if(firstItem.hasClass(lift_floor_item)){
			firstTarget = floor_wp;
		}else{
			firstTarget = $(firstItem.attr("data-target"));
		}

		if(bstop > firstTarget.offset().top - 100){
			if(lift.hasClass(hideClass)){
				lift.removeClass(hideClass);
			}
		}else{
			if(!lift.hasClass(hideClass)){
				lift.addClass(hideClass)
			}
		}
		lift_item.each(function(i, el){
			var $el = $(el);
			var $target = $($el.attr("data-target")).eq(0);
			var dom;
			var actClass = "lift-item-current";
			if($target.length){
				dom = $target;
			}else if($el.hasClass(lift_floor_item)){
				var index = $("." + lift_floor_item).index($el);
				dom = floorItem.eq(index);
			}else{
				return;
			}
			dotop = dom.offset().top;
			if(dotop - 150 > bstop){
				if($el.hasClass(actClass)){
					$el.removeClass(actClass);
				}
			}else{
				if(!$el.hasClass(actClass)){
					$el.addClass(actClass).siblings().removeClass(actClass);
				}
			}
		});
	}
	
	// scroll
	$(window).scroll(init);
	
	// click
	$(document).on("click","*[ectype='liftItem']",function(){
		var $this = $(this);
		var target = $this.attr("data-target");
		var $target = $(target).eq(0);
		var oftop;
		
		if($this.hasClass(returnTop)){
			oftop = 0;
		}else if($this.hasClass(lift_floor_item)){
			// 分类楼层
			var index = $("." + lift_floor_item).index($this);
			oftop = floorItem.eq(index).offset().top + 30;
		}else{
			// 其它
			if(!$target.length) return;
			oftop = $target.offset().top;
		}
		$("body,html").stop().animate({scrollTop:oftop-60});
	});
		
	$(window).resize(function(){
		winWidth = $(this).width();
		left = ((winWidth-1200)/2 - lift.width())/2;
		top = "50%";
		
		if(winWidth<1400){
			left = 20;
		}else{
			left = (winWidth-1200)/2 - lift.width() - 50;
		}
		
		lift.css({"left":left,"top":top});
	});
}

//品牌专区 异步加载
//main:主框架，list:列框架，child:子成员
$.scrollLoad = function(main, list, child, info){
	//开始执行
	var execute = true;
	//切换分类（自定义部分，可修改）
	$(document).on("click", "*[ectype='brandCate'] *[ectype='cateItem']", function(){
		execute = true;
	});
	
	//滚动效果
	$(document).on('scroll', window, function(){
		var st = $(window).scrollTop(); //滚动距离
		var wh = window.innerHeight; //窗口高度
		var ot = $(main).offset().top; //上边距
		var oh = $(main).outerHeight(); //总高度
		if((st+wh)>(ot+oh)){
			if(execute){
				execute = false;
				//异步操作
				var cat_id = $("*[ectype='brandCate'] a.curr").data("catid"); //获取分类id（自定义部分，可修改）
				var have_num = $(list).find(child).length;
				var load_num = 8;
				if(info.data){
					info.data = info.data.replace(/\&cat_id\=\d+/g, '');
					info.data = info.data.replace(/\&have_num\=\d+/g, '');
					info.data = info.data.replace(/\&load_num\=\d+/g, '');
					info.data += '&cat_id='+cat_id+'&have_num='+have_num+'&load_num='+load_num;
				}
				$.jqueryAjax(info.url, info.data, function(data){
					if(data.content){
						$(list).append(data.content);
						execute = true;
					}
				});
			}
		}
	})	
}


