/* $Id : region.js 4865 2007-01-31 14:04:10Z paulgao $ */

var region = new Object();

region.isAdmin = false;
region.detail = false;

region.loadRegions = function(parent, type, target)
{
  Ajax.call(region.getFileName(), 'type=' + type + '&target=' + target + "&parent=" + parent , region.response, "GET", "JSON");
}

/* *
 * 载入指定的国家下所有的省份
 *
 * @country integer     国家的编号
 * @selName string      列表框的名称
 */
region.loadProvinces = function(country, selName)
{
  var objName = (typeof selName == "undefined") ? "selProvinces" : selName;

  region.loadRegions(country, 1, objName);
}

/* *
 * 载入指定的省份下所有的城市
 *
 * @province    integer 省份的编号
 * @selName     string  列表框的名称
 */
region.loadCities = function(province, selName)
{
  var objName = (typeof selName == "undefined") ? "selCities" : selName;

  region.loadRegions(province, 2, objName);
}
//author guan start
region.changedDis = function(district_id,user_id,d_null)
{
	var province_id = document.getElementById('province_id').value;
	var city_id = document.getElementById('city_id').value;
	var area_div = document.getElementById('area_list');
	var goods_id = document.getElementById('good_id').value;
	
	if(d_null == 1){
		var d_null = "&d_null=" + d_null;
	}else{
		d_null = '';
	}
	area_div.style.display = 'none';
	Ajax.call(region.getGoodsFileName(), 'id=' + goods_id + '&act=in_stock' + '&province=' + province_id + "&city=" + city_id + "&district=" + district_id + "&user_id=" + user_id + d_null, region.is_inStock, "GET", "JSON");

}

region.is_inStock = function(res)
{
	if(!res.goods_id)
	{
		location.reload();
		return false;
	}
	if(res.isRegion == 0){
		
			if(confirm(res.message))  
			  {
				var district_id = document.getElementById('district_id');
				district_id.value = res.district;    
				location.href = 'user.php?act=address_list';
			  }else{
				//location.href = "goods.php?id=" + res.goods_id + "&t=" + parseInt(Math.random()*1000) + "#areaAddress";
				location.reload();
			  }
			
			return false;
	}else{
		//location.href = "goods.php?id=" + res.goods_id + "&t=" + parseInt(Math.random()*1000) + "#areaAddress";
		location.reload();
	}
}

//ecmoban模板堂 --zhuo start 仓库
function warehouse(rId,goodsId,warehouse_type)
{
  Ajax.call(region.getGoodsFileName(), 'act=in_warehouse&pid=' + rId + '&id=' + goodsId + "&warehouse_type=" + warehouse_type, warehouseResponse, 'GET', 'JSON');
}

function warehouseResponse(res){
    if(res.warehouse_type == 'exchange'){
        location.href = "exchange.php?id=" + res.goods_id + "&act=view";
    }else{
        location.href = "goods.php?id=" + res.goods_id;
    }
}

function change_SizePrice(pid,attr_id,goods_id,attr_num,warehouse_id,attr_sid){
	Ajax.call(region.getGoodsFileName(), 'pid=' + pid + '&attr_id=' + attr_id + '&act=in_SizePrice' + '&goods_id=' + goods_id + '&goods_number=' + attr_num + '&warehouse_id=' + warehouse_id + '&attr_sid=' + attr_sid, change_SizePriceResponse, "GET", "JSON");
}
function change_SizePriceResponse(res){
	if(res.err_msg){
		var size_goods = document.getElementById('size_goods');
		var addToCartShowDiv = document.getElementById('addToCartShowDiv');
		
		if(res.product_number == 0){
			size_goods.innerHTML = "<b>"+json_languages.day_not_available+"</b>";
		}else{
			document.getElementById(res.pid).value = res.product_number;
			document.getElementById(res.pid).focus();
			changePrice(); //新增 2014-03-20
			size_goods.innerHTML = "<b>"+json_languages.day_yes_available+"，<font style='font-size:14px; color:#003D79'>" + res.attr_value + res.size_name + "</font>"+json_languages.inventory+"<font style='font-size:14px; color:#E6393D'>" + res.product_number + "</font>"+json_languages.letter+"</b>";
		}
		//addToCartShowDiv.innerHTML = "<a id='buyno1' href='javascript:;'></a>";
	}else{
		//location.reload();
		
		if(res.no_logoin > 0){
			changePrice();
		}else{
			if (confirm(res.logoin_message)){
				location.href = "user.php";
			}else{
				location.href = "goods.php?id=" + res.goods_id + "&t=" + parseInt(Math.random()*1000) + "#areaAddress";
			}
		}
	}
}
//ecmoban模板堂 --zhuo end 仓库

//author guan end

region.getGoodsFileName = function()
{      
    if(region.detail){
        return "presale.php";
    }else{
	return "goods.php";
    }
}

/* *
 * 载入指定的城市下的区 / 县
 *
 * @city    integer     城市的编号
 * @selName string      列表框的名称
 */
region.loadDistricts = function(city, selName)
{
  var objName = (typeof selName == "undefined") ? "selDistricts" : selName;

  region.loadRegions(city, 3, objName);
}

/* *
 * 处理下拉列表改变的函数
 *
 * @obj     object  下拉列表
 * @type    integer 类型
 * @selName string  目标列表框的名称
 */
region.changed = function(obj, type, selName)
{
  var parent = obj.options[obj.selectedIndex].value;

  region.loadRegions(parent, type, selName);
}

region.response = function(result, text_result)
{
  var sel = document.getElementById(result.target);

  sel.length = 1;
  sel.selectedIndex = 0;
  sel.style.display = (result.regions.length == 0 && ! region.isAdmin && result.type + 0 == 3) ? "none" : '';

  if (document.all)
  {
    sel.fireEvent("onchange");
  }
  else
  {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('change', true, true);
    sel.dispatchEvent(evt);
  }

  if (result.regions)
  {
    for (i = 0; i < result.regions.length; i ++ )
    {
      var opt = document.createElement("OPTION");
      opt.value = result.regions[i].region_id;
      opt.text  = result.regions[i].region_name;

      sel.options.add(opt);
    }
  }
}

//@author guan 地区列表 start
region.getRegion = function(parent, type, target, obj, user_id, ru_id)
{
	var house_list = document.getElementById('house_list');
	var city_list_id = document.getElementById('city_list_id');
	var district_list_id = document.getElementById('district_list_id');
	var province_id = document.getElementById('province_id');
	var city_id = document.getElementById('city_id');
	var city_li = document.getElementById('city_li');
	var province_li = document.getElementById('province_li');
	var district_type = document.getElementById('district_type');
	if(type == 2)
	{
		province_id.value = parent;
		province_li.innerHTML = obj.title+'<i class="sc-icon-right"></i>';
		province_li.className = 'select_tab';
		city_li.className = 'select_tab curr';
		district_type.className = 'select_tab';
		
	}
	else if(type == 3)
	{
		city_id.value = parent;
		city_li.innerHTML = obj+'<i class="sc-icon-right"></i>';
		province_li.className = 'select_tab';
		city_li.className = 'select_tab';
		district_type.className = 'select_tab curr';
	}
	
  Ajax.call(region.getFileName(), 'type=' + type + '&target=' + target + "&parent=" + parent + "&user_id=" + user_id+ "&ru_id=" + ru_id , region.rgionResponse, "GET", "JSON");
}

region.rgionResponse = function(result, text_result)
{
	if(result.isRegion == 0){
		if (confirm(result.message))  
		  {
			location.href = 'user.php?act=address_list';
		  }else{
			var province_id = document.getElementById('province_id');
			province_id.value = result.province;    
			location.reload();
		  }	
		
		return false;
	}
	
	if(result.type == 2)
	{
		var div = document.getElementById('city_list');
		var div_district = document.getElementById('district_list');
		div_district.innerHTML = "";
	}
	else if(result.type == 3)
	{
		var div = document.getElementById('district_list');
	}
	
	if (result.regions && result.type == 2)
	  {
		var html = '';
	    for (i = 0; i < result.regions.length; i ++ )
	    {
			if(result.regions[i].choosable){
				html += '<li><a title="'+ result.regions[i].region_name +'" href="javascript:region.getRegion(' + result.regions[i].region_id + ', 3, district_list, ' + '\'' + result.regions[i].region_name + '\'' + ',' + result.user_id + ',' + result.ru_id + ');">' + result.regions[i].region_name + '</a></li>';
			}else{
				html += '<li><a title="'+ result.regions[i].region_name +'" href="javascript:void(0);" class="choosable">' + result.regions[i].region_name + '</a></li>';
			}
	        
	    }
	    div.innerHTML = html;
		city_list_id.style.display = 'block';
		district_list_id.style.display = 'none';
		house_list.style.display = 'none';
		city_li.innerHTML = json_languages.select_city+'<i class="sc-icon-right"></i>';
	  }
	else if(result.regions && result.type == 3)
	{
		if(result.isRegion == 0){
		
			if (confirm(result.message))  
			  {
				location.href = 'user.php?act=address_list';
			  }else{
				var city_region_id = document.getElementById('city_id');
				city_region_id.value = result.city;    
				location.reload();
			  }
			
			return false;
		}
		
		if(result.empty_type == 1){
			district_type.style.display = "none";
			region.changedDis('',result.user_id,1);
		}
		
		var html = '';
	    for (i = 0; i < result.regions.length; i ++ )
	    {
			if(region.detail){
				if(result.regions[i].choosable){
					html += '<li><a title="'+ result.regions[i].region_name +'" href="javascript:region.changedDis_pre(' + result.regions[i].region_id + ',' + result.user_id + ',0,' + result.ru_id + ');">' + result.regions[i].region_name + '</a></li>';
				}else{
					html += '<li><a title="'+ result.regions[i].region_name +'" href="javascript:void(0);" class="choosable" >' + result.regions[i].region_name + '</a></li>';
				}
				
			}else{
				if(result.regions[i].choosable){
					html += '<li><a title="'+ result.regions[i].region_name +'" href="javascript:region.changedDis(' + result.regions[i].region_id + ',' + result.user_id + ',0,' + result.ru_id + ');">' + result.regions[i].region_name + '</a></li>';
				}else{
					html += '<li><a title="'+ result.regions[i].region_name +'" href="javascript:void(0);" class="choosable" >' + result.regions[i].region_name + '</a></li>';
				}
			}
	    }
	    div.innerHTML = html;
		city_list_id.style.display = 'none';
		district_list_id.style.display = 'block';
		house_list.style.display = 'none';
	    
	}
	else
	{
		city_list_id.style.display = 'none';
		district_list_id.style.display = 'none';
		house_list.style.display = 'block';
	}
}

region.selectArea = function(int, type)
{
	var province_li = document.getElementById('province_li');
	var city_li = document.getElementById('city_li');
	var district_type = document.getElementById('district_type');
	var house_list = document.getElementById('house_list');
	var city_list_id = document.getElementById('city_list_id');
	var district_list_id = document.getElementById('district_list_id');

	if(type == 1)
	{
		city_list_id.style.display = 'none';
		district_list_id.style.display = 'none';
		house_list.style.display = 'block';
		province_li.className = 'select_tab curr';
		city_li.className = 'select_tab';
		district_type.className = 'select_tab';
	}
	else if(type == 2)
	{
		city_list_id.style.display = 'block';
		district_list_id.style.display = 'none';
		house_list.style.display = 'none';
		province_li.className = 'select_tab';
		city_li.className = 'select_tab curr';
		district_type.className = 'select_tab';
	}
	else
	{
		city_list_id.style.display = 'none';
		district_list_id.style.display = 'block';
		house_list.style.display = 'none';
		province_li.className = 'select_tab';
		city_li.className = 'select_tab';
		district_type.className = 'select_tab curr';
	}
}


region.closeRegion = function()
{
	var area_list = document.getElementById('area_list');
	var area_address = document.getElementById('area_address');
	area_address.style.borderBottom = '1px solid #cecece';
	area_list.style.borderTop = '1px solid #cecece';
	area_list.style.display = 'none';
}
//@author guan 地区列表 end

region.getFileName = function()
{
  if (region.isAdmin)
  {
    return "../region.php";
  }
  else
  {
    return "region_goods.php";
  }
}