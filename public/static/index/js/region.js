/**
 * 地区联动js
 * @return
 */
jQuery.levelLink = function (type){
	
	var regionLinkage = "*[ectype='regionLinkage']",
	opt = "*[ectype='layer']",
	Item = "*[ectype='ragionItem']",
	txt = "*[ectype='txt']",
	input = 'input[type="hidden"]',
	dropdown = "*[ectype='smartdropdown']";
	
	if(type == ""){
		type = 0;
	}
	
	$(opt).hover(function(){
		$(this).perfectScrollbar("destroy");
		$(this).perfectScrollbar();
	});
	
    //select下拉默认值赋值
	if($(dropdown).parents(regionLinkage).length>0){
		$(regionLinkage).each(function(){
			var T = $(this);
			T.find(dropdown).each(function(k,v){
				//默认加载国家、省份、市区3级
				if(k > 4){
					return false;
				}else{
					var t = $(this);
					var val = 0;
					
					//type == 1 表示新增，type==0 表示编辑
					if(type == 1){
						//新增默认选中中国
						if(k == 0){
							val = t.find(Item).eq(0).data("value");
						}
					}else{
						//编辑获取当前地区
						val = t.find(input).val();
						
						if(t.find(input).val() == 0){
							t.hide();
						}else{
							t.show();
						}
					}
					
					Ajax.call('region.php?act=consigne', 'type='+(k+1)+'&parent=' + val, function (data) {
						t.next().find(opt).html(data.content);
						
						t.next().find(opt).perfectScrollbar("destroy");
						t.next().find(opt).perfectScrollbar();
						
						if(data.region_name != ''){
							t.find(txt).html(data.region_name);
							t.find(input).val(val);
						}
					}, 'POST', 'JSON');

					t.find(Item).each(function(){	
						if($(this).data('value') == val){
							t.find(txt).html($(this).data("text"));
						}				
					});
				}
			});
		});  
	}else{
		/*$(dropdown).each(function(){
			var T = $(this)
			var V = T.find('input[type=hidden]').val();
			T.find(Item).each(function(){
				if($(this).data('value') == V){
					T.find(txt).html($(this).html());
				}
			})
		});*/
	}
	$(document).find(txt).on('click',$(dropdown),function(){
		
		var t = $(this);
		$(dropdown).removeClass("visible");
		if(t.parent(dropdown).hasClass("visible")){
			t.parents(dropdown).removeClass("visible");
			t.nextAll(opt).hide();
		}else{
			t.parents(dropdown).addClass("visible");
			t.parents(dropdown).find(opt).show();
			t.parents(dropdown).siblings().removeClass("visible");
			t.parents(dropdown).siblings().find(opt).hide();
		}
	});
	
	$(document).on('click',Item,function(){
		var t = $(this),
			text = t.data("text"),
			value = t.data("value"),
			type = t.data("type"),
			parents = t.parents(dropdown),
			index = parents.index(),
			old_val = parents.find(input).attr("name");
			
		if(old_val != value){
			var nextAll = parents.nextAll(dropdown);
			
			
			//初始化后面地区的值
			nextAll.find("input").val(0);
			
			//初始化后面地区名称
			nextAll.each(function(k,v){
				var name = $(this).find(input).attr("name");
				if(name == "province"){
					$(this).find(txt).html("省/直辖市");
				}else if(name == "city"){
					$(this).find(txt).html("市");
				}else if(name == "district"){
					$(this).find(txt).html("区/县");
					$(this).hide();
				}else if(name == "street"){
					$(this).find(txt).html("街道");
					$(this).hide();
				}
			});
		}

		Ajax.call('region.php?act=consigne', 'type='+type+'&parent=' + value, function (data) {
			//判断当前地区是否有下一级地区
			if(data.regions.length>0){
				parents.next().find(opt).html(data.content);
				
				if(parents.next().length > 0){
					parents.next().show();
					parents.next().find(opt).show();
				}else{
					//验证赋值 在没有使用5级地区时
					if(t.parents(regionLinkage).next("input[name='validate_region']")){
						t.parents(regionLinkage).next("input[name='validate_region']").val(1);
					}
				}
				
				parents.next().find(opt).perfectScrollbar("destroy");
				parents.next().find(opt).perfectScrollbar();
			}else{
				parents.next().hide();
				
				//验证赋值 在使用到5级地区时
				if(t.parents(regionLinkage).next("input[name='validate_region']")){
					t.parents(regionLinkage).next("input[name='validate_region']").val(1);
				}
			}
			
		}, 'POST', 'JSON');

		parents.find(input).val(value);
		parents.find(txt).html(text);
		t.parents(opt).hide();
		//parents.removeClass("visible");	
	});

	$(document).click(function(e){
		if(e.target.className !='txt'){
			$(opt).hide();
			//$(dropdown).removeClass("visible");
		}
	});
	
	/*var i = 100;
	$(".smartdropdown").each(function(index, element) {
        $(this).css({"z-index":i--});
    });*/
}