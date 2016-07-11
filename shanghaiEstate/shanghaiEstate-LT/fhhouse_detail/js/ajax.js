var flag = 0;
var arr = [];
function ajaxget(id){
   xmlhttp=new XMLHttpRequest(); 
       var get_url = "/api/Developer/"+building_id+"/DeveloperBulidingOne?select="+id;
       getStr =web_url+get_url;  
       xmlhttp.open("get",getStr, true);
       xmlhttp.send(); 
     
     xmlhttp.onreadystatechange=function () {
       if (xmlhttp.readyState == 4&&xmlhttp.status == 200){
       	     //alert('PASS');
             jsonResponse = xmlhttp.responseText;
             prcvinceJsons = eval("(" + jsonResponse + ")");
//           console.log(prcvinceJsons);
				document.getElementById("part2_noload").style.display = "none";
             ajaxput(id);  //
            }
          }   
     }

 function ajaxput(id){
    //part1及公共信息填充
    
 	if(id==1){
//      document.getElementById("part2_noload").style.display = "none";
 		document.getElementById('name').innerHTML =  prcvinceJsons.building_name;   //左上 名称
 		document.getElementById('district').innerHTML =  prcvinceJsons.building_district;   //左上 区
 		document.getElementById('phonenum').innerHTML =  prcvinceJsons.building_tel;   //中上 电话号码
 		document.getElementById('address_sell').innerHTML =  prcvinceJsons.sale_building_address;  //售楼处地址
 		document.getElementById('time_kf').innerHTML =  prcvinceJsons.earliest_sought;  //现场看房时间
		
		//tupian
		var imagesListL = prcvinceJsons.imageList.length;
//		console.log(imagesList);
		for(var i=0; i<imagesListL;i++){
//			console.log(prcvinceJsons.imageList[i].image);
			document.getElementById("part1_spic"+(i+1)).src = "http://192.168.200.46:8170"+prcvinceJsons.imageList[i].image;
		}
//		document.getElementById("part1_spic"+(i+1))
		document.getElementById("part1_bpic").src = "http://192.168.200.46:8170"+prcvinceJsons.imageList[0].image;
		
		
 		document.getElementById('part1_name').innerHTML =  prcvinceJsons.building_name;  //part1 名称
 		document.getElementById('part1_address').innerHTML =  prcvinceJsons.building_address;  //part1 地址
 		document.getElementById('part1_price').innerHTML =  prcvinceJsons.building_average_price;  //part1 价格/平
        document.getElementById('part1_price').innerHTML =  prcvinceJsons.building_average_price;  //part1 价格/平
        if(prcvinceJsons.earliest_sought==""){document.getElementById('part1_time_kf').innerHTML = "时间暂无"}  //part1 看房时间
        else{document.getElementById('part1_time_kf').innerHTML =  prcvinceJsons.earliest_sought;}	
        if(prcvinceJsons.new_open==""){document.getElementById('part1_time_kp').innerHTML = "时间暂无"}  //part1 开盘时间
        else{document.getElementById('part1_time_kp').innerHTML =  prcvinceJsons.new_open;}	
        if(prcvinceJsons.receive_time==""){document.getElementById('part1_time_jf').innerHTML = "时间暂无"}  //part1 交房时间
        else{document.getElementById('part1_time_jf').innerHTML =  prcvinceJsons.receive_time;}	
        
        for(var i=1;i<7;i++){   //关闭part1中所有a标签及缩略图
        	var part1_anone = "part1_a"+i;
        	var part1_spicnone = "part1_spic"+i;
        	document.getElementById(part1_anone).style.display = "none";
        	document.getElementById(part1_spicnone).style.display = "none";
        }
  
        var part1_spic_length = prcvinceJsons.imageList.length;   //取缩略图数量
        for(var i=1;i<=part1_spic_length&&i<7;i++){   //关闭part1中所有a标签及缩略图
        	var part1_ablock = "part1_a"+i;
        	var part1_spicblock = "part1_spic"+i;
        	document.getElementById(part1_ablock).style.display = "block";
        	document.getElementById(part1_spicblock).style.display = "block";
        	//document.getElementById('part1_spicblock').src = prcvinceJsons.imageList[i-1].image;  //填入图片
        	if(prcvinceJsons.imageList[i-1].video!==""){
        		//alert(prcvinceJsons.imageList[i-1].video);
        		//alert(part1_ablock);
        		document.getElementById(part1_ablock).href="video.html";
        		var p1video = prcvinceJsons.building_video_path;
        		p1video = p1video.substr(8);
        		document.getElementById("part1_a1").href = "../shipin/video.html?video="+p1video;
        	}
        }        
 	}

 	//part2填充
 	if(id==2){
 		
			
	
 	   var part2_spic_length = prcvinceJsons.length;
 	   //判断part2图片是否存在
 	   for(var i=0; i<part2_spic_length;i++){
 	   		arr[i] = new Object;
				if(prcvinceJsons[i].img == ""){
//					alert(11);
				}else{
					arr[flag].img = prcvinceJsons[i].img;
					arr[flag].name = prcvinceJsons[i].name;
					flag++;
					
				}
			}
// 	   console.log(flag);
 	   if(flag == 0){
 	   	document.getElementById("part2").style.display = "none";
 	   	document.getElementById("part2_noload").style.display = "block";
 	   	document.getElementById("a2").focus();
 	   	return false;
 	   }else{
 	   	document.getElementById("part2_a1").focus();
//     part2_page_max = Math.ceil(part2_spic_length/3);
		part2_page_max = Math.ceil(flag/3);
 	   document.getElementById('part2_page_max').innerHTML = part2_page_max;
 	   for(var i=1;i<=flag;i++){
 	   	if(arr[i-1].img == ""){
 	   		return;
 	   	}else{
 	   		part2_name[i-1] = arr[i-1].name;
 	   		part2_img[i-1] = arr[i-1].img;
 	   	}
 	   	
 	   }
 	   for(var i=1;i<=3;i++){
 	   	var part2_a_none = 'part2_a'+i;
 	   	var part2_name_none = 'part2_name'+i;
 	   	document.getElementById(part2_a_none).style.display = "none";
 	   	document.getElementById(part2_name_none).style.display = "none";
 	   }
 	   var a=1;
 	   for(var i=1;i<=3&&i<=flag;i++){
 	   
 	   		var part2_a_block = 'part2_a'+i;
 	   		var part2_name_block = 'part2_name'+i;
// 	   	console.log("i:"+i);
// 	   	var part2_a_block = 'part2_a'+i;
// 	   	var part2_name_block = 'part2_name'+i;
   	   	var part2_f_block = "part2_zs"; 
   	   	
        document.getElementById(part2_a_block).style.display = "block";
   	   	document.getElementById(part2_name_block).style.display = "block";
   	   	document.getElementById(part2_name_block).innerHTML = part2_name[i-1];
   	   	document.getElementById(part2_f_block).src = "http://192.168.200.46:8170"+ part2_img[i-1];
 	   	
 	   }
	}
 	   flag = 0;
 	}

 	if(id==3){
 	   var part3_ht_length = prcvinceJsons.houseType.length;
 	   part3_page_max = Math.ceil(part3_ht_length/6);
 	   var part3_average_price = prcvinceJsons.building_average_price/10000;
 	   for(var i=1;i<=part3_ht_length;i++){
         part3_hx[i-1] = prcvinceJsons.houseType[i-1].house_type_room+"室"+prcvinceJsons.houseType[i-1].house_type_hall+"厅"+prcvinceJsons.houseType[i-1].house_type_guard+"卫";
         part3_cx[i-1] = prcvinceJsons.houseType[i-1].room_toward;
         part3_ms[i-1] = prcvinceJsons.houseType[i-1].unscramble;
         part3_img[i-1] = prcvinceJsons.houseType[i-1].image;
         part3_area[i-1] = prcvinceJsons.houseType[i-1].area;
         part3_price[i-1] = part3_average_price*part3_area[i-1];
        }
 	   for(var i=1;i<=6;i++){
        var part3_a_none = 'part3_a'+i;
 	   	var part3_name_none = 'part3_hx'+i;
 	   	document.getElementById(part3_a_none).style.display = "none";
 	   	document.getElementById(part3_name_none).style.display = "none";
       }
 	   document.getElementById("part3_a1").focus();
       for(var i=1;i<=part3_ht_length&&i<=6;i++){
        var part3_a_block = 'part3_a'+i;
 	   	var part3_name_block = 'part3_hx'+i;
        document.getElementById(part3_a_block).style.display = "block";
 	   	document.getElementById(part3_name_block).style.display = "block";
 	   	document.getElementById(part3_name_block).innerHTML = part3_hx[i-1];
 	   	
       }
       document.getElementById('part3_area').innerHTML = part3_area[0];
       document.getElementById('part3_price').innerHTML = Math.round(part3_price[0]*100)/100;
       document.getElementById('part3_cx').innerHTML = part3_cx[0];
       document.getElementById('part3_ms').innerHTML = part3_ms[0];
       document.getElementById('part3_hxt').src = "http://192.168.200.46:8170"+part3_img[0];
       
 	} 

 	if(id==4){
       document.getElementById('lpmc').innerHTML = prcvinceJsons.building_name;
       document.getElementById('lpdz').innerHTML = prcvinceJsons.building_address;
       document.getElementById('slcdz').innerHTML = prcvinceJsons.sale_building_address;
       document.getElementById('kfs').innerHTML = prcvinceJsons.developer_name;
       document.getElementById('zxkp').innerHTML = prcvinceJsons.new_open;
       if(prcvinceJsons.receive_time==""){document.getElementById('zzjf').innerHTML = "时间暂无"}
       else{document.getElementById('zzjf').innerHTML = prcvinceJsons.receive_time;}
       document.getElementById('cqnx').innerHTML = prcvinceJsons.property;
       document.getElementById('ghhs').innerHTML = prcvinceJsons.plan_households;
       document.getElementById('cwqk').innerHTML = prcvinceJsons.parking_situation;
	   if(prcvinceJsons.decorate_status==1){document.getElementById("zxzk").innerHTML="普装"};
	   if(prcvinceJsons.decorate_status==2){document.getElementById("zxzk").innerHTML="精装"};
	   if(prcvinceJsons.decorate_status==3){document.getElementById("zxzk").innerHTML="毛坯房"};
	   document.getElementById("jzlx").innerHTML="暂无";
	   if(prcvinceJsons.house_type==1){document.getElementById("fwlx").innerHTML="一般住宅"};
	   if(prcvinceJsons.house_type==2){document.getElementById("fwlx").innerHTML="独栋别墅"};
	   if(prcvinceJsons.house_type==3){document.getElementById("fwlx").innerHTML="双拼别墅"};
	   if(prcvinceJsons.house_type==4){document.getElementById("fwlx").innerHTML="联排别墅"};
	   document.getElementById("ckjj").innerHTML=prcvinceJsons.building_average_price+"元/平";

	   document.getElementById('wygs').innerHTML = prcvinceJsons.tenement_company;
       document.getElementById('zdmj').innerHTML = prcvinceJsons.land_area+'平';
       document.getElementById('slcdz').innerHTML = prcvinceJsons.building_area+'平';
       document.getElementById('rjl').innerHTML = prcvinceJsons.plot_ratio;
       document.getElementById('lhl').innerHTML = 100*prcvinceJsons.green_rate+"%";
       document.getElementById('wyfy').innerHTML = prcvinceJsons.property_costs+'元/平/月';
       document.getElementById('gnfs').innerHTML = prcvinceJsons.heat_way;
       document.getElementById('sdmq').innerHTML = prcvinceJsons.hydropower_gas;
 	}
	if(id=5){
		document.getElementById("part5_img").src = "http://192.168.200.46:8170"+prcvinceJsons.bus;
	}
 	if(id==6){
       document.getElementById('lpmc').innerHTML = prcvinceJsons.building_name;
       document.getElementById('lpdz').innerHTML = prcvinceJsons.building_address;
       document.getElementById('slcdz').innerHTML = prcvinceJsons.sale_building_address;
       document.getElementById('kfs').innerHTML = prcvinceJsons.developer_name;
       document.getElementById('zxkp').innerHTML = prcvinceJsons.new_open;
       if(prcvinceJsons.receive_time==""){document.getElementById('zzjf').innerHTML = "时间暂无"}
       else{document.getElementById('zzjf').innerHTML = prcvinceJsons.receive_time;}
       document.getElementById('cqnx').innerHTML = prcvinceJsons.property;
       document.getElementById('ghhs').innerHTML = prcvinceJsons.plan_households;
       document.getElementById('cwqk').innerHTML = prcvinceJsons.parking_situation;
	   if(prcvinceJsons.decorate_status==1){document.getElementById("zxzk").innerHTML="普装"};
	   if(prcvinceJsons.decorate_status==2){document.getElementById("zxzk").innerHTML="精装"};
	   if(prcvinceJsons.decorate_status==3){document.getElementById("zxzk").innerHTML="毛坯房"};
	   document.getElementById("jzlx").innerHTML="暂无";
	   if(prcvinceJsons.house_type==1){document.getElementById("fwlx").innerHTML="一般住宅"};
	   if(prcvinceJsons.house_type==2){document.getElementById("fwlx").innerHTML="独栋别墅"};
	   if(prcvinceJsons.house_type==3){document.getElementById("fwlx").innerHTML="双拼别墅"};
	   if(prcvinceJsons.house_type==4){document.getElementById("fwlx").innerHTML="联排别墅"};
	   document.getElementById("ckjj").innerHTML=prcvinceJsons.building_average_price+"元/平";

	   document.getElementById('wygs').innerHTML = prcvinceJsons.tenement_company;
       document.getElementById('zdmj').innerHTML = prcvinceJsons.land_area+'平';
       document.getElementById('slcdz').innerHTML = prcvinceJsons.building_area+'平';
       document.getElementById('rjl').innerHTML = prcvinceJsons.plot_ratio;
       document.getElementById('lhl').innerHTML = 100*prcvinceJsons.green_rate+"%";
       document.getElementById('wyfy').innerHTML = prcvinceJsons.property_costs+'元/平/月';
       document.getElementById('gnfs').innerHTML = prcvinceJsons.heat_way;
       document.getElementById('sdmq').innerHTML = prcvinceJsons.hydropower_gas;
 	}

 }



 