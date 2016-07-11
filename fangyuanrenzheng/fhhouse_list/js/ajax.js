var jsonResponse;
var prcvinceJsons;


var jsonResponse1;
var prcvinceJsons1;
var title;
function ajaxget1(id){
   xmlhttp=new XMLHttpRequest(); 
       var get_url = "/api/Developer/"+id+"/show";
       getStr =web_url+get_url;  
       xmlhttp.open("get",getStr, true);
       xmlhttp.send(); 
     
     xmlhttp.onreadystatechange=function () {
//   	console.log(xmlhttp.readyState)
       if (xmlhttp.readyState == 4&&xmlhttp.status == 200){
             jsonResponse1 = xmlhttp.responseText;
             prcvinceJsons1 = eval("(" + jsonResponse1 + ")");
//           console.log(prcvinceJsons1);
             ajaxput1(id);  //
            }
          }   
     }

//function getTit(){
//	return title;
//}
function ajaxput1(id){
  if(id==1){
      title = prcvinceJsons1.developer_name;
      if(title){
		document.getElementById("tit").style.display = "block";
		document.getElementById("title").style.display = "none";
		document.getElementById("tit").innerHTML = title;
//		alert()
	}
//    alert()
  } 
}





function ajaxget(id){
   xmlhttp=new XMLHttpRequest(); 
       var get_url = "/api/developerBuilding?offset="+pagenow+"&limit=4";
       getStr =web_url+get_url;  
       xmlhttp.open("get",getStr, true);
       xmlhttp.send(); 
     
     xmlhttp.onreadystatechange=function () {
       if (xmlhttp.readyState == 4&&xmlhttp.status == 200){
             jsonResponse = xmlhttp.responseText;
             prcvinceJsons = eval("(" + jsonResponse + ")");
             var Request = new Object();  //取值时使用无需更改
		    	Request = GetRequest();  //取值时使用无需更改 需保证GetRequest()存在;
		    	developerid = Request["id"];
			if(developerid !="q"){
				
				ajaxget1(developerid);
		//		alert()
				
			}
             ajaxput(id);  //
            }
          }   
     }


function ajaxput(id){
  if(id==1){
      count = prcvinceJsons.count;
      pagemax = Math.ceil(count/4);
     
//    alert(title)
      document.getElementById('pagenow').innerHTML = pagenow;
      document.getElementById('pagemax').innerHTML = pagemax;
        listlength=4;
      if(pagenow==pagemax){
        listlength = count-4*pagenow+4;
        //alert(listlength);
      }
      for(var i=1;i<=4;i++){
        var a_none = 'a'+i;
        var part_none = 'part'+i;
        document.getElementById(a_none).style.display = 'none';
        document.getElementById(part_none).style.display = 'none';
      }
      for(var i=1;i<=listlength;i++){
        var a_block = 'a'+i;
        var part_block = 'part'+i;
        document.getElementById(a_block).style.display = 'block';
        document.getElementById(part_block).style.display = 'block';
        var parts_name ="part"+i+"_name";
        var parts_district ="part"+i+"_district";
        var parts_price ="part"+i+"_price";
        building_id[i-1] = prcvinceJsons.listBuilding[i-1].id;
        document.getElementById(parts_name).innerHTML = prcvinceJsons.listBuilding[i-1].building_name;
        document.getElementById(parts_district).innerHTML = prcvinceJsons.listBuilding[i-1].building_district;
        document.getElementById(parts_price).innerHTML = prcvinceJsons.listBuilding[i-1].building_average_price;
        address_list[i-1] = prcvinceJsons.listBuilding[i-1].building_address;
        document.getElementById('part_video_address').innerHTML = address_list[0];
      }
      document.getElementById('part_video_name').innerHTML = prcvinceJsons.listBuilding[0].building_name;
      document.getElementById('part_video_price').innerHTML = prcvinceJsons.listBuilding[0].building_average_price;
      document.getElementById('part_video_address').innerHTML = address_list[0];
      document.getElementById('part_video_pic').src = document.getElementById('part_img1').src;
	  document.getElementById('a1').focus();
  } 
}




function GetRequest() {    
			var url = location.search; //获取url中"?"符后的字串
			var theRequest = new Object();
			if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
				for(var i = 0; i < strs.length; i++){
					theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
				}
					}
			return theRequest;
			}