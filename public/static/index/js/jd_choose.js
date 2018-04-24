/*
*   JQuery版本： jquery1.9.1
*   名称：仿大商创多条件筛选插件JS效果
*   时间：2014-12-15 15:23:29
*   拼音插件：    pinyin.js
*   css:样式文件  select.css
*   颜色和品牌 单独从数组里获取的 样式和 下面的是分开的 写的比较繁琐见谅
*/

$(function(){
	var choose_more = $(".choose_more"),
		choose_open = $(".choose_open"),
		brands = $(".brand_img"),
		same_li = $(".same_li"),
		click_more = $(".click_more"),
		attr_father = $(".attr_father"),
		color_list_color = $(".color_list_color"),
		sure_color = $(".sure_color"),
		item_list = $(".item_list"),
		no_btn = $(".no_btn"),
		sameHeight = 0;
		
	//隐藏更多属性
	same_li.find(".attr_son").each(function() {
		var $this = $(this);
		var height = 0;
        sameHeight = $this.outerHeight();
		
		if($this.hasClass("s-l-value")){
			height = 28;
		}else{
			height = 40;
		}

		if(sameHeight > height){
			$this.find('.item_list').addClass('ohide');
			$this.parents('.same_li').find('.choose_open').show();
		}
		
    });

    // 选中商品属性时 出现
    if($('.u_cloose dl dd div').length==0){
       $('.u_cloose').css('display','none');
    }

    // 超过5项隐藏 给添加属性
    if($('.attr_father > li').length>5){
       $('.click_more .strong').text();
       $('.attr_father > li:gt(4)').css('display','none');
       $('.attr_father > li').eq(4).find(".attr_son").css({"border-bottom":0});
       $('.attr_father > li:gt(4)').attr('donone','do_none');
    }

    if($('.attr_father > li').length<=5){
       $('.click_more,.click_more span').css('display','none');
    }

    // 获取被隐藏的选项栏目名称
    var li_none=$(".attr_father >li[donone='do_none']");
    var k_name="";
    for (var i = 0; i < li_none.length; i++) {
       k_name+=li_none.eq(i).find('dt').text().replace(" :","")+"、";
    };
    k_name=k_name.substring(0,k_name.length-1);
    $('.click_more strong').text(json_languages.more_options);

    // 隐藏更多选项
    click_more.click(function(){
		var gt =$('.attr_father > li:gt(4)');
		if( gt.is(':hidden')){
			gt.show();
			$(this).find('i').addClass('up');
			$(this).find('strong').text(json_languages.Pack_up);
			$('.u_get').parents('li').remove();
			if($(".attr_father .same_li").length<=2){
				alert(json_languages.no_attr);
				$(".click_more").find("span").remove();
			}
		}else{
			gt.hide();
			$(this).find('i').removeClass('up');
			$('.click_more strong').text(json_languages.more_options);
		}
    })

    // 可选项只有1项时 隐藏多选框
    choose_more.each(function(){
		var this_bt=$(this).siblings('.attr_son').find('.ietm_list').find('dd').length;
		if(this_bt==1){
			$(this).hide();
		}
    })

    var lt_a=$(".get_item").length;
    var lt_b=$(".attr_father>li").length+2;
    if(lt_a>=lt_b){
    	$('.click_more').remove();
    }
    
    // 品牌搜索
    $(".input_search input").keyup(function(){
      //多选拼音中文搜索
      var pinyin = codefans_net_CC2PY($(this).val());
      $('.get_more li').css('display','none');
      $('.get_more li a').each(function(){
          if(codefans_net_CC2PY($(this).text()).toLowerCase()==pinyin.toLowerCase()){
            $(this).parents('li').css('display','block');
          }
    })

	// 单项中文拼音搜索 
	if($('.wrap_brand').is(':visible')){
		  $('.brand_img_word').css('display','none');	
		  $('.brand_img_word').each(function(){
			if(codefans_net_CC2PY($(this).find('strong').text()).toLowerCase()==pinyin.toLowerCase()){
				$(this).css('display','block');
			}
			
			if(codefans_net_CC2PY($(this).find('b').text()).toLowerCase()==pinyin.toLowerCase()){
				$(this).css('display','block');
			  }
		  })
		}
	});

    // 品牌单选多选跳转
    $('.yes_bt').click(function(){
        var brand_total=$('.is_yes').length;
        if(brand_total==1){
          var brand_url=$('.is_yes').find('a').data("url");
          window.location=brand_url;
        }
        if(brand_total>1){
          var brand_arr=new Array();
          var bra="";
          for (var d = 0; d < brand_total; d++) {
            brand_arr[d]=$('.is_yes').eq(d).attr('url_id');
          };

          for (var e = 0; e < brand_arr.length; e++) {
            bra+=brand_arr[e]+",";
          };
		  
          bra=bra.substring(0,bra.length-1);
		  
		  var site_rewrite = $(".right-extra").attr('rewrite');  
          var brand_url=$('.is_yes').find('a').eq(1).data("url");  
			
		  if(site_rewrite > 0 && brand_url.indexOf("search") < 0){ //伪静态
			  burl=brand_url.substring(brand_url.indexOf("b"));
			  
			  bra="b"+bra;
          	  burl=brand_url.replace(burl,bra) + ".html";
		  }else{
			  burl=brand_url.substring(brand_url.indexOf("brand="));
			  
			  bra="brand="+bra;
          	  burl=brand_url.replace(burl,bra);
		  }
		  
          window.location=burl;
        }
    })
	
    // 其他多选
    $('.sure_I').each(function(){
        $(this).click(function(){
            var get_this=$(this).parents(".tw_buttom").siblings(".item_list").find(".selected");
            if(get_this.length==1){
              var g_href=$('.selected a').data("url");
              window.location=g_href;
            }
			if(get_this.length>1){
				var selected_lenght = get_this.length;
				var selected_array=new Array();
				var on="";
				for (var a = 0; a < selected_lenght; a++) {
					selected_array[a]=get_this.eq(a).attr('url_id');
				};
				for (var b = 0; b < selected_array.length; b++) {
					on+=selected_array[b]+",";
				};
				on=on.substring(0,on.length-1);
				var o_url_id=get_this.eq(1).attr('url_id');
				var o_url =  get_this.find('a').eq(1).data("url");
				if(o_url.indexOf(o_url_id)>0){
					o_url=o_url.replace(o_url_id,on);
				}
				window.location=o_url;
			}
        })
    })

    // 颜色 单选和多项情况下的确定
    sure_color.click(function(){
       var selected = color_list_color.find('.selected');
       if(selected.length==1){
          window.location=selected.find("a").data("url");
       }
       if(selected.length>1){
          var color_arr=new Array();
          var cc="";
          for (var i = 0; i < selected.length; i++) {
              color_arr[i]= selected.eq(i).attr('url_id');
          };
          for (var k = 0; k < color_arr.length; k++) {
             cc+=color_arr[k]+",";
          }; 
          cc=cc.substring(0,cc.length-1);
          var url_id=selected.eq(1).attr('url_id');
          var c_url=selected.find("a").eq(1).data("url");
          if(c_url.indexOf(url_id)>0){
              c_url=c_url.replace(url_id,cc);
          }
          window.location=c_url;
       }
    })

    // 还原选项
    $('.get_item').click(function(){
      window.location=$(this).find('a').attr('href');
    });

    $('.u_get').each(function() {
        $(this).parents('li').css('display','none'); // 隐藏选项
    });
	
    $('.input_search input').blur(function(){
      $(this).val(json_languages.search_Prompt);
    }).focus(function(){
      $(this).val('');
    });

    $('.attr_father > li:last').find(".attr_son").css({"border-bottom":0});
	
    $('.brand_div .brand_img_word:gt(21)').css('display','none');  // 隐藏大于8索引的品牌图片保留需要的1排
	
	$('.s-l-value .brand_div .brand_img_word:gt(17)').css('display','none');  // 隐藏大于8索引的品牌图片保留需要的1排
  
    $('.brand_div > div').mouseover(function(){
      $(this).find('img').css('display','none');
      $(this).find('strong').css('display','block');
    }).mouseout(function(){
      $(this).find('img').css('display','block');
      $(this).find('strong').css('display','none');
    });

    choose_open.click(function(){
		var $this = $(this),
			brands = $this.parents(".brand_img"),
			attr_list = $this.parents('.attr_list');
	  
		function All(){
			if(attr_list.hasClass("extend")){
				brands.removeClass("extend");
				brands.find('.brand_img_word').show();
				brands.find('.brand_div .brand_img_word:gt(21)').hide();
				
				//2017模板新增判断
				brands.find('.s-l-value .brand_div .brand_img_word:gt(17)').hide();
				
				if($this.hasClass("s-l-more")){
					$this.html("<i class='iconfont icon-down'></i>");
					
					$(".brand_select_more").perfectScrollbar("destroy");
				}else{
					$this.children().removeClass("icon_down");
				}
				
				attr_list.removeClass("extend");
			}else{
				attr_list.addClass("extend");
				//brands.find('.input_search').children().val('可输入汉字,拼音查找品牌');
				brands.find('.brand_img_word').show();
				
				//2017模板新增判断
				if($this.hasClass("s-l-more")){
					$this.html("<i class='iconfont icon-up'></i>");
					
					$(".brand_select_more").perfectScrollbar("destroy");
					$(".brand_select_more").perfectScrollbar();
				}else{
					$this.children().addClass("icon_down");
				}
			}
		}
	  
	  	if(!attr_list.hasClass("multiple")){
			All();
		}else{
			alert(json_languages.checkbox_Packup);
		}
	})  

	$('.get_more li').click(function(){
		var $this = $(this),length;
		if($this.hasClass('is_no')){
			$this.removeClass('is_no').addClass('is_yes');
		}else{
			$this.removeClass('is_yes').addClass('is_no');
		}
		
		length = $this.parent().find('.is_yes').length;
		if(length == 0){
			$(".yes_bt").addClass("disabled");
		}else if(length>0&&length<5){
			$(".yes_bt").removeClass("disabled");
		}else if(length>5){
			$(this).attr("class","is_no");
			alert(json_languages.most_input);
			return false;
		}
	});
	
	$('.no_bt').click(function(){
		$(this).parents('.brand_img').removeClass('multiple');
        $('.get_more li').css('display','block');
		$(this).parents('.brand_img').find(".sl-ext").removeClass("down");
		$(this).parents('.brand_img').find(".choose_more").html("<i class='icon'></i>"+json_languages.multi_select);
    });

    choose_more.click(function(){
		var $this = $(this);
		var brands = $this.parents(".brand_img");
		var attr_list = $this.parents(".attr_list");
		var same_li = $this.parents(".same_li");
		var slExt = $this.parent();
		
		function slext(){
			var li = attr_list.addClass("multiple").parents("li");
			if(slExt.hasClass("down")){
				slExt.removeClass("down");
				
				//2017模板新增判断
				if($this.hasClass("s-l-multiple")){
					$this.html("<i class='iconfont icon-plus'></i>"+json_languages.multi_select);
					
					$(".brand_select_more").perfectScrollbar("destroy");
				}else{
					$this.html("<i class='icon'></i>"+json_languages.multi_select);
				}
				
				brands.removeClass("multiple");
				attr_list.removeClass("multiple");
				attr_list.find("dd").removeClass("get_me");
				attr_list.find("a").each(function() {
                    var url = $(this).data('url');
					$(this).attr('href',url);
                });
			}else{
				slExt.addClass("down");
				
				//2017模板新增判断
				if($this.hasClass("s-l-multiple")){
					$this.html("<i class='iconfont icon-reduce'></i>"+json_languages.Pack_up);
					
					$(".brand_select_more").perfectScrollbar("destroy");
					$(".brand_select_more").perfectScrollbar();
				}else{
					$this.html("<i class='icon'></i>"+json_languages.Pack_up);
				}
				
				brands.find(".get_more li").removeClass("is_yes").addClass("is_no");
				brands.find(".yes_bt").addClass("disabled");
				
				brands.removeClass("extend");
				brands.find(".icon_all").removeClass("icon_down");
				brands.find('.brand_img_word:gt(21)').css('display','none');
				
				brands.find('.s-l-value .brand_div .brand_img_word:gt(17)').css('display','none');
				
				brands.addClass("multiple").parents("li").siblings().find(".multiple").removeClass("multiple");
				
				attr_list.find("a").removeAttr('href');
				
				same_li.find("dd").addClass("get_me");
				
				li.siblings().find(".multiple").removeClass("multiple");
				li.siblings().find("dd").removeClass("get_me");
				li.siblings().find(".sure").addClass("disabled");
				li.siblings().find("dd").removeClass("selected");
				li.siblings().find("a").removeAttr('onclick');
				li.siblings().find(".sl-ext").removeClass("down");
				li.siblings().find(".choose_more").html("<i class='icon'></i>"+json_languages.multi_select);
				li.siblings().find(".choose_more").html("<i class='iconfont icon-plus'></i>"+json_languages.multi_select);
			}
		}
		
		if(!attr_list.hasClass("extend")){
			slext();
		}else{
			alert(json_languages.radio_Packup);
		}	
    });
	
	//其他多选属性
	item_list.find("dd").click(function(){
		var length;
		if($(this).hasClass("selected")){
			$(this).removeClass("selected");
		}else{
			$(this).addClass("selected");
		}
		
		length = $(this).parents(".item_list").find(".selected").length;
		
		if(length == 0){
			$(this).parents('.attr_list').find(".sure").addClass("disabled");
		}else if(length>0 && length<5){
			$(this).parents('.attr_list').find(".sure").removeClass("disabled");
		}else if(length>5){
			alert(json_languages.most_input);
			$(this).removeClass("selected");
			return false;
		}
	});

    // 价格的文本框验证是否为数字 以及小数转换 非负 非小数 
    $('.price_auto input').blur(function(){
        if($(this).val().length>0){
          $(this).css('border','#ccc 1px solid');
        }
        if(isNaN($(this).val())){
          $(this).val("");
        }else{
          var in_num=Math.abs(Math.floor($(this).val()));           //自动转换为正整数
          if(in_num==0){
            in_num="";
          }
          $(this).val(in_num);
        }
    })

    // 输入的值做安全验证以及大小值交换处理 为空提示
    $('.price_ok').click(function(){  
      if($('.price_min').val().length==0||$('.price_max').val().length==0){
          if($('.price_min').val().length==0){
            $('.price_min').css('border','#ff0000 1px solid');
          }else{
            $('.price_min').css('border','#ccc 1px solid');
          }
          if($('.price_max').val().length==0){
            $('.price_max').css('border','#ff0000 1px solid');
          }else{
            $('.price_max').css('border','#ccc 1px solid');
          }
        return false;
      }else{
        min_p=parseInt($('.price_min').val()); 
        max_p=parseInt($('.price_max').val());      
        if(min_p>max_p){             
              price_arr=[min_p,max_p];
              min_p=price_arr[1];
              max_p=price_arr[0];
              }else if(min_p==max_p){
              min_p=1;
              }     
        }
		
		var site_rewrite = $(".right-extra").attr('rewrite');
        var site_link = window.location.href;
		
		if(site_link.indexOf("search.php")){
			var min_price = Number($(":input[name='price_min']").val());
			var max_price = Number($(":input[name='price_max']").val());
			
			if(min_price == '' && max_price == ''){
				alert('请填写筛选价格');
				return false;
			}else if(min_price == ''){
				alert('请填写筛选左边价格');
				return false;
			}else if(max_price == ''){
				alert('请填写筛选右边价格');
				return false;
			}else if(min_price > max_price || min_price == max_price){
				alert('左边价格不能大于或等于右边价格');
				return false;
			}else{
				$(".price-min").val(min_price);
				$(".price-max").val(max_price);
			}
			
			$("form[name='listform']").submit();
			return false;
		}
		
		if(site_rewrite > 0 && site_link.indexOf("search") < 0){
			var str_link = site_link.split("-");
			var lk = "-min" + min_p + "-max" + max_p;          // 获取的 url
			
			var site_url = str_link[0] + "-" + str_link[1]
			site_url = site_url.replace('.html', '');
			site_link= site_url + lk + ".html";
			
			window.location=site_link;
		}else{
			
			var lk = "&price_min=" + min_p + "&price_max=" + max_p;          // 获取的 url
			site_link = site_link + lk;

			window.location=site_link;
		}
    })

    // 取消当前多选选项
	no_btn.click(function(){
		var attr_list = $(this).parents(".attr_list");
		attr_list.removeClass("multiple");
		attr_list.find("dd").removeClass("selected");
		attr_list.find("dd").find("a").each(function() {
            var url = $(this).data('url');
			$(this).attr('href',url);
        });
		attr_list.find("dd").removeClass("get_me");
		attr_list.find(".sl-ext").removeClass("down");
		attr_list.find(".choose_more").html("<i class='icon'></i>"+json_languages.multi_select);
		
		//2017模板新增判断
		attr_list.find(".s-l-multiple").html("<i class='iconfont icon-plus'></i>"+json_languages.multi_select);
	});
	
    // 放字母上下面的其他品牌隐藏
	$('.a_z li').mouseover(function(){
		var brands = choose_more.parents(".brand_img");
		
		$(this).addClass("curr").siblings().removeClass("curr");
		if(brands.hasClass("multiple")){
			$('.all_brand').mouseover(function(){
				$('.get_more li').css('display','block');
			});
			$('.a_z li').css('background','');
			var M=$(this).data("key");
			$('.get_more li').css('display','none');
			$('.get_more li').each(function(){
				if($(this).attr("brand") == M){
					$(this).css('display','block');
				}
			});
		}else{
			$('.all_brand').mouseover(function(){
				$('.brand_img_word').css('display','block');
			});
            var N=$(this).data("key");
            $('.brand_img_word').css('display','none');
			$('.brand_img_word').each(function(){
				if($(this).attr("brand") == N){
					$(this).css('display','block');
				}
			});
		}
		$('.other_brand').mouseover(function(){
			$('.get_more li[brand=""]').css('display','block');
			$('.brand_div .brand_img_word[brand=""]').css('display','block');
			});
		})

		$('.all_brand').mouseover(function(){
			$('.a_z li').css('background','');
		})

		function brand_letter(){  // 0、品牌字母初始化
			$('.a_z li').css('background','');
			$('.brand_img_word').css('display','block');
			$('.brand_div .brand_img_word:gt(21)').css('display','none');
			
			$('.s-l-value .brand_div .brand_img_word:gt(17)').css('display','none');
			
		}

    // 几种主要选项样式初始化
    $('.ietm_list a').removeAttr('onclick');
    function close_div(){     // 1、品牌样式初始化
      $('.attr_father li').eq(0).css('background','');
      $('.get_more li').attr('class','is_no');
      $('.wrap_brand,.choose_open,.choose_more').css('display','block');
      $('.brand_div .brand_img_word:gt(21),.all_a_z,.enter_yes_no,.zimu_list,.all_a_z').css('display','none');
	  
	  $('.s-l-value .brand_div .brand_img_word:gt(17)').css('display','none');
      $('.brand_div').css('margin','0px');
      $('.wrap_brand').css('border','0 none').css('padding','0').css('height','auto');
      $('.attr_color').find('b').removeClass('choose_color');
      $('.price_auto input').css('border','#ccc 1px solid');  
    }

    function color_choose(){  // 2、颜色多选项初始化
      $('.Color_CS').css('display','block');
      $('.Color_CS').parents('li').css('background','');
      $('.Color_CS').parents('li').find('.tw_buttom').css('display','none');
      $('.Color_CS').parents('li').find('b').removeAttr('class');
      $('.color_list_color dd a').removeAttr('onclick');
    }

    function not_color(){     // 4、颜色下面的LI的当前选项状态初始化
      $('.tw_buttom').css('display','none');
      $('.attr_father li').css('background','');
      $('.choose_more2').css('display','block');
      $('.ietm_list dd').removeAttr('class');
    }


   function GetQueryString(name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
     var r = window.location.search.substr(1).match(reg);
     if (r!=null) return unescape(r[2]); return null;
    }
})