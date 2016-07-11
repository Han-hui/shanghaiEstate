var partnow;
var ib_f_style = new Array("85px","152px","946px","1105px");
var count;//数据数目
var pagemax;//最大页数
var pagenow=1;//现页数
var address_list = new Array;
var video_url_list = new Array("http://192.168.200.46:8170/videos/DFJR-001.mp4","http://192.168.200.46:8170/videos/DFJR-002.mp4","http://192.168.200.46:8170/videos/DFJR-003.mp4","http://192.168.200.46:8170/videos/DFJR-004.mp4");
var video_time_list = new Array("120000","120000","120000","120000");//13 375  23 320 
//var video_time_list = new Array("7000","7000","7000","7000");
var video_time;
var listlength;
var setTime;
var building_id = new Array;
var developerid = "q";
var tit = "";
var vv2;
    function test(){
	if(vv2==1){return false;}
	else{
		 window.location.href = "fl.html?id="+developerid+"&f5=1";
		 
	}
}
(function(){
	var Request = new Object();  //取值时使用无需更改
    	Request = GetRequest();  //取值时使用无需更改 需保证GetRequest()存在;
    	developerid = Request["id"];
//  	alert(tit)
    	vv2 = Request['f5'];
    	
	test();
})();
window.onload = function(){
	
	
	
	ajaxget(1);
	ntv.key.keypress_handle = set_listen_handle;
	document.getElementById('a1').focus();
		
//  	test();
	//nextvideo();
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

function part_fo(id){
	//alert(partnow);
	partnow = id;
	if(id<100){
    //alert(id);
	  stopPlay1();
	//video_now = id-1;
	  clearTimeout(setTime);	
	  document.getElementById('part_f').style.display = "block";
    document.getElementById('part_f').style.top = 129*id-2+"px";
    var parts_name ="part"+id+"_name";
    var parts_district ="part"+id+"_district";
    var parts_price ="part"+id+"_price";
    var parts_img = "part_img"+id;
    document.getElementById('part_video_name').innerHTML = document.getElementById(parts_name).innerHTML;
    document.getElementById('part_video_price').innerHTML = document.getElementById(parts_price).innerHTML;
    document.getElementById('part_video_address').innerHTML = address_list[id-1];
    document.getElementById('part_video_pic').src = document.getElementById(parts_img).src;
    setTime = setTimeout('nextfocus()',video_time_list[partnow-1]);
    video(id);
    
    }
    if(id>100){
	  document.getElementById('ib_f').style.display = "block";
    document.getElementById('ib_f').style.left = ib_f_style[id-101];
    }
}

function part_br(){
	document.getElementById('part_f').style.display = "none";
	document.getElementById('ib_f').style.display = "none";
 }


function video(id){
	 stopPlay1();
     var callback_end = function(){};
	 var videos = [video_url_list[id-1],video_url_list[id-1]];
	 ocnmediaplayer(108,147,692,393,videos,"play","continue",callback_end);
	}

function stopPlay1(){
      ntv.stb.mediaplayer.stop();
    }
/*function nextvideo(){
   clearTimeout(setTime); 
   video_now++;
   if(pagenow<pagemax&&video_now>4){
    nextpage(1);
    video_now=1;
   }
   if(pagenow==pagemax&&video_now>listlength){
    pagenow = 1;
    nextpage(3);
    video_now=1;
   }
   alert(video_now);
   var video_a = "a"+video_now;
   document.getElementById(video_a).focus();
   setTime = setTimeout("nextvideo()",video_time_list[video_now-1]);
   video(video_now);
   //
}
*/
function nextfocus(){
   partnow++;
   //alert(partnow);
   if(pagenow<pagemax&&partnow>4){
    nextpage(1);
    partnow=1;
    //setTimeout(setTimef(),300);
   }
   if(pagenow==pagemax&&partnow>listlength){
    pagenow = 1;
    nextpage(3);
    partnow=1;
    setTime = setTimeout('nextfocus()',video_time_list[partnow-1]);
    video(1);
   }
    setTimef();
}  

function setTimef(){
  var focus_a = "a"+partnow;
  document.getElementById(focus_a).focus();
} 


function nextpage(id){
   if(id==1){   //往后
     pagenow++;
     if(pagenow>=pagemax){
       pagenow=pagemax;
     }
   }
   if(id==2){   //往后
     pagenow--;
      if(pagenow<=1){
       pagenow=1;
     } 
   }
    ajaxget(1);
}

function fdpage(id){
  window.location.href='../fhhouse_detail/fd.html?id='+building_id[id-1];
}



