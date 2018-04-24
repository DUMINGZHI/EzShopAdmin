/* $Id: compare.js 15469 2008-12-19 06:34:44Z testyang $ */
var Compare = new Object();

Compare = {
  add : function(obj, goodsId, goodsName, type, goodsImg, shopPrice, maketPrice, del, is_sub)
  {
	  if(del)
	  {
		del = 1;
	  }
	  else
	  {
		del = 0;
	  }

	  if(is_sub)
	  {
		is_sub = 1;
	  }
	  else
	  {
		is_sub = 0;
	  }

	  
	  //判断是否选中，选中则取消，反之添加
	  if(is_sub == 0)
	  {
		  if(!obj.checked || del == 1)
		  {
			  obj.parentNode.id = 'compareLink';
			  Compare.remove(0, goodsId);
			  return;
		  }
	  }
	  else
	  {
		if(document.getElementById('history_select'+goodsId).value == 1)
		{
			obj.parentNode.id = 'compareLink';
			Compare.remove(0, goodsId);
			return;
		}
	  }

    var count = 0;
    for (var k in this.data)
    {
		if(count == 3)
		{
			if(is_sub == 0)
			{
				obj.checked = '';
			}
			pbDialog(json_languages.Prompt_add_one,"",0);
			return;
		}
      if (typeof(this.data[k]) == "function")
      continue;
      if (this.data[k].t != type) {
		if(is_sub == 0)
		{
			obj.checked = '';
		}
        pbDialog(json_languages.goods_type_different.replace("%s", goodsName)," ",0,"",90,10);
        return;
      }
      count++;
    }
    if (this.data[goodsId])
    {
	  if(is_sub == 0)
	  {
		obj.checked = '';
	  }
      pbDialog(json_languages.exist.replace("%s",goodsName)," ",0,"",90,10);
      return;
    }
    else
    {
      this.data[goodsId] = {n:goodsName,t:type,g:goodsImg,s:shopPrice,m:maketPrice,d:goodsId};
    }

    this.save();
    this.init();
  },

  remove : function(int, goodsId)
  {
	  if(goodsId)
	  {
//		window.location.reload();
		var cUl = document.getElementById('diff-items');
		var cLi = cUl.getElementsByTagName('dl');
		var m = 1;
		for(var c=0; c<4; c++)
		{
			cLi[c].innerHTML = '<dt><h1>' + m + '</h1></dt><dd><span class="ts">'+json_languages.Prompt_add_two+'</span></dd>';
			if(document.getElementById(goodsId))
			{
				document.getElementById(goodsId).checked = false;
				document.getElementById(goodsId).parentNode.id = 'compareLink';
			}

		    if(document.getElementById('history_select' + goodsId))
		    {
				document.getElementById('history_select' + goodsId).value = 0;
				document.getElementById('history_btn' + goodsId).className = 'btn-compare-s';
				document.getElementById('duibilan').style.display = 'block';
		    }
			m++;
			if(document.getElementById('slideTxtBox'))
			{
				//document.getElementById('slideTxtBox').style.display = 'none';
			}
		}
		delete this.data[goodsId];
                this.save();
                this.init();
                return;
	  }

	for(var j=1; j<int; j++)
	{
      var compare_goods = document.getElementById('compare_goods' + j);
      var del = document.getElementById('del_img_' + j);
      var checkBoxId = document.getElementById(del.className);
      if(checkBoxId)
      {
          checkBoxId.checked = '';
		  checkBoxId.parentNode.id = 'compareLink';
      }
		

      compare_goods.innerHTML = '<dt><h1>' + j + '</h1></dt><dd><span class="ts">'+json_languages.Prompt_add_two+'</span></dd>';
      document.getElementById("compareList").removeChild(del.parentNode);
      delete this.data[del.className];
	}
        this.save();
        this.init();

	return;
  },
  init : function(){
    this.data = new Object();
    var cookieValue = document.getCookie("compareItems");

    if (cookieValue != null) {
      this.data = $.evalJSON(cookieValue);
	  
    }
    if (!this.compareBox)
    {
      var compare_button = document.getElementById('compare_button');
      this.compareBox = document.createElement("DIV");
      var submitBtn = document.createElement("INPUT");
      this.compareList = document.createElement("UL");
      this.compareBox.id = "compareBox";
      this.compareBox.style.display = "none";
      this.compareBox.style.top = "200px";
      this.compareBox.align = "center";
      this.compareList.id = "compareList";
      submitBtn.type = "button";
      submitBtn.value = json_languages.contrast;
      submitBtn.id = "duibiBtn";
	  this.compareBox.appendChild(this.compareList);
	  compare_button.appendChild(submitBtn);
		
      submitBtn.onclick = function() {
        var cookieValue = document.getCookie("compareItems");
        var obj = $.evalJSON(cookieValue);
		
        var url = document.location.href;
		var urlArr = url.split('?');
        url = urlArr[0].substring(0,urlArr[0].lastIndexOf('/')+1) + "category_compare.php";
        var i = 0;
        for(var k in obj)
        {
          if(typeof(obj[k])=="function")
          continue;
          if(i==0)
            url += "?goods[]=" + k;
          else
            url += "&goods[]=" + k;
          i++;
        }
        if(i<2)
        {
          pbDialog(json_languages.compare_no_goods," ",0,"","",10);
          return ;
        }
        document.location.href = url;
      }
      //compare_goods.appendChild(this.compareBox);
      document.body.appendChild(this.compareBox);
    }
    this.compareList.innerHTML = "";
    var qingkong = document.getElementById('qingkong');
    var self = this;
    var i = 1;
    var k = 0;
    var compare_ul = document.getElementById('diff-items');
    var compare_li = compare_ul.getElementsByTagName('dl');

    for (var key in this.data)
    {
      var compare_goods = document.getElementById('compare_goods' + i);
//      var goods_img1 = document.getElementById('goods_img' + i);
      if(typeof(this.data[key]) == "function")
        continue;
      var li = document.createElement("LI");
      var span = document.createElement("SPAN");
      span.style.overflow = "hidden";
      span.style.width = "100px";
      span.style.height = "20px";
      span.style.display = "block";
      span.innerHTML = this.data[key].n;
      li.appendChild(span);
      li.style.listStyle = "none";
      var delBtn = document.createElement("IMG");
      delBtn.src = "";
      compare_goods.innerHTML = '<dt><a target="_blank" href="goods.php?id=' + this.data[key].d + '"><img src="' + this.data[key].g + '" width="60" height="60"></a></dt><dd><a target="_blank" class="diff-item-name" href="goods.php?id=' + this.data[key].d + '">' + this.data[key].n + '</a><div class="p-org"><span class="p-price">' + this.data[key].s + '</span><a class="del-comp-item" OnClick="Compare.add(this,' + this.data[key].d + ', 0, 0, 0, 0, 0, 1)">'+json_languages.remove+'</a></div></dd>';
      if(document.getElementById('history_select' + this.data[key].d))
	  {
		document.getElementById('history_select' + this.data[key].d).value = 1;
		document.getElementById('history_btn' + this.data[key].d).className = 'btn-compare-s_red';
		//document.getElementById('duibilan_text').className = ' on';
		//document.getElementById('cat_history_text').className = '';
		document.getElementById('duibilan').style.display = 'block';
		//document.getElementById('cat_history').style.display = 'none';
	  }

	  document.getElementById('slideTxtBox').style.display = 'block';
	  k = i - 1;
      compare_li[k].className = key;
      var checkBoxId = document.getElementById(key);
      if(checkBoxId)
      {
		  if(checkBoxId.parentNode.id)
		  {
			checkBoxId.parentNode.id = 'compareLink_on';
		  }
          checkBoxId.checked = true;
      }
	  else
	  {
//		  if(checkBoxId.parentNode.id)
//		  {
//			checkBoxId.parentNode.id = 'compareLink';
//		  }
	  }
      delBtn.className = key;
      delBtn.id = 'del_img_' + i;
      delBtn.onclick = function(){
        document.getElementById("compareList").removeChild(this.parentNode);
        delete self.data[this.className];
        self.save();
        self.init();
      }
      li.insertBefore(delBtn,li.childNodes[0]);
      this.compareList.appendChild(li);
      i++;
    }

    var slideTxtBox = document.getElementById('slideTxtBox');
	document.getElementById('qingkong').innerHTML = '<span onclick="Compare.remove(' + i + ');" id="compare_clear" href="javascript:void(0);" class="del-items">'+json_languages.empty_contrast+'</span>';
//	qingkong.setAttribute = ('onclick', 'Compare.remove('+i+');');
    if (this.compareList.childNodes.length > 0)
    {

        slideTxtBox.style.display = "block";
      this.compareBox.style.display = "";
    }
    else
    {
      slideTxtBox.style.display = "none";
      this.compareBox.style.display = "none";
      window.clearInterval(this.timer);
      this.timer = 0;
    }
  },
  save : function()
  {
    var date = new Date();
    date.setTime(date.getTime() + 99999999);
    document.setCookie("compareItems", $.toJSON(this.data));
  },
  lastScrollY : 0
}