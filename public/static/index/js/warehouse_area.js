/* $Id : region.js 4865 2007-01-31 14:04:10Z paulgao $ */

function get_region_raId(raId, region_id, key, type){
	
	if(type == 0){
		var extend = document.getElementById('mod_storage_extend_' + raId) ;
		var area_list = document.getElementById('area_list_' + region_id) ;
		var area = document.getElementsByName('area' + key + '_[]');
		var extend_key = document.getElementsByName('extend[]');
		
		extend.style.display = 'block';
		area_list.className = "area_list area_list-on";
		
		for(i=0; i<area.length; i++){
			if(area[i].id != area_list.id){
				area[i].className = '';
			}
		}
		
		for(i=0; i<extend_key.length; i++){
			if(extend_key[i].id != extend.id){
				extend_key[i].style.display = 'none';
			}
			var extend_area = document.getElementsByName('area' + i + '_[]');
			
			for(j=0; j<extend_area.length; j++){
				if(extend_area[j].id == area_list.id){
					extend_area[j].className = "area_list area_list-on";
				}else{
					extend_area[j].className = "";
				}
			}
		}
	}
	
	get_region_child(raId, region_id, type);
	
}

//省、市
function get_region_child(raId, region_id, type){
	
	var region = new Object();
	
	region.ra_id = raId;
	region.region_id = region_id;
	region.type = type;
	
	if(document.getElementById('phpName')){
		var phpName = document.getElementById('phpName').value;
	}
	
	if(phpName != ''){
		Ajax.call(phpName + '?act=select_regionChild', 'region=' + $.toJSON(region), region_childResponse, 'POST', 'JSON');
	}
}
function region_childResponse(result){
	
	if(result.type == 0){
		var city = document.getElementById('mod_storage_city_' + result.ra_id);
		city.innerHTML = result.content;
	}else if(result.type == 1){
		var selCity = document.getElementById('selCity');
		selCity.innerHTML = result.content;
	}else if(result.type == 2){
		if(result.city_list == 0){
			var selDistrict = document.getElementById('selDistrict');
			selDistrict.innerHTML = result.content;
		}else{
			get_district_list(result.region_id, 1);
		}
	}
}

//地区
function get_district_list(region_id, type){
	var region = new Object();
	
	region.region_id = region_id;
	region.type = type;
	
	if(document.getElementById('phpName')){
		var phpName = document.getElementById('phpName').value;
	}
	
	if(phpName != ''){
		Ajax.call(phpName + '?act=select_district_list', 'region=' + $.toJSON(region), district_listResponse, 'POST', 'JSON');
	}
}

function district_listResponse(result){
	if(result.error == 0){
		location.reload();
	}
}