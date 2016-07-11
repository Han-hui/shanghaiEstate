 var partnow;
 var bnlist = new Array;
 var cnlist = new Array;
 var vv2;
window.onload = function(){
		document.getElementById('yhxzk').focus();		
		var Request = new Object();  //取值时使用无需更改
        Request = GetRequest();  //取值时使用无需更改 需保证GetRequest()存在;
        var vv1 = decodeURI(Request['s1']);
        vv2 = '51000006505486';
        //vv2 = decodeURI(Request['s2']);
        document.getElementById('zfnum').innerHTML = vv1;
        ajaxget();

        function GetRequest() {    
			var url = location.search; //获取url中"?"符后的字串
			var theRequest = new Object();
				if (url.indexOf("?") != -1){
					var str = url.substr(1);
			        strs = str.split("&");
			        	for(var i = 0; i < strs.length; i ++) {
			            	theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
			            }
			           }
			  return theRequest;
		}
		kpress();
	}
function focbtn(id){	
	partnow=id;
	if(id==1){
		document.getElementById('xk').src = 'image_shenghuojiaofei/22.png';
	}
	if(id==2){
		document.getElementById('syfoc').style.display = 'block';
	}
	if(id==3){
		document.getElementById('fhfoc').style.display = 'block';
	}
	if(id==4){
		document.getElementById('yhpic1').style.display = 'block';
	}
	if(id==5){
		document.getElementById('yhpic2').style.display = 'block';
		//document.getElementById('mont1').style.display = 'none';
	}
	if(id==6){
		document.getElementById('yhpic3').style.display = 'block';
		//document.getElementById('mont1').style.display = 'none';
}
}
function blubtn(id){
	if(id==1){
		 document.getElementById('xk').src= 'image_shenghuojiaofei/21.png';
		}
	if(id==2){
		 document.getElementById('syfoc').style.display = 'none';
		}
	if(id==3){
		 document.getElementById('fhfoc').style.display = 'none';
		}
	if(id==4){
		document.getElementById('yhpic1').style.display = 'none';
	}
	if(id==5){
		document.getElementById('yhpic2').style.display = 'none';
	}
	if(id==6){
		document.getElementById('yhpic3').style.display = 'none';
	}
}
function kpress(){          
	document.onkeydown = grabEvent1;
	document.onkeypress = grabEvent1;
	document.onirkeypress = grabEvent1;  
	function grabEvent1(event){
	var val = event || window.event || arguments.callee.caller.arguments[0];
	switch(val.keyCode){	
		
	         case 38:  //上	
			if(partnow==1){partfocus('fh');return false;}   
		    if(partnow==2){partfocus('sy');return false;} 
		    if(partnow==3){partfocus('fh');return false;}
		    if(partnow==4){partfocus('xz1');return false;} 
		    if(partnow==5){partfocus('xz2');return false;} 
		    if(partnow==6){partfocus('xz3');return false;} 
			break;
			
			 case 1:  //上	
			if(partnow==1){partfocus('fh');return false;}   
		    if(partnow==2){partfocus('sy');return false;} 
		    if(partnow==3){partfocus('fh');return false;}
		    if(partnow==4){partfocus('xz1');return false;} 
		    if(partnow==5){partfocus('xz2');return false;} 
		    if(partnow==6){partfocus('xz3');return false;} 
			break;
			           
			case 40: //xia
			if(partnow==1){partfocus('yhxzk');return false;}   
			if(partnow==2){partfocus('yhxzk');return false;}          
			if(partnow==3){partfocus('yhxzk');return false;}
			if(partnow==4){partfocus('xz1');return false;}
			if(partnow==5){partfocus('xz2');return false;}   
			if(partnow==6){partfocus('xz3');return false;} 
			break; 
			
			case 2: //xia
			if(partnow==1){partfocus('yhxzk');return false;}   
			if(partnow==2){partfocus('yhxzk');return false;}          
			if(partnow==3){partfocus('yhxzk');return false;}
			if(partnow==4){partfocus('xz1');return false;}
			if(partnow==5){partfocus('xz2');return false;}   
			if(partnow==6){partfocus('xz3');return false;} 
			break; 
			
			case 37://zuo
			//alert(partnow);
			if(partnow==1){partfocus('yhxzk');return false;}
			if(partnow==2){partfocus('sy');return false;}   
			if(partnow==3){partfocus('sy');return false;} 
			if(partnow==4){partfocus('xz1');return false;} 
			if(partnow==5){partfocus('xz1');return false;}
			if(partnow==6){partfocus('xz2');return false;} 
			break;
			
			case 3://zuo
			//alert(partnow);
			if(partnow==1){partfocus('yhxzk');return false;}
			if(partnow==2){partfocus('sy');return false;}   
			if(partnow==3){partfocus('sy');return false;} 
			if(partnow==4){partfocus('xz1');return false;} 
			if(partnow==5){partfocus('xz1');return false;}
			if(partnow==6){partfocus('xz2');return false;} 
			break;

			case 39://you
			//alert(partnow);
			if(partnow==1){partfocus('yhxzk');return false;} 
			if(partnow==2){partfocus('fh');return false;}   
			if(partnow==3){partfocus('fh');return false;}
			if(partnow==4){partfocus('xz2');return false;} 
			if(partnow==5){partfocus('xz3');return false;} 
			if(partnow==6){partfocus('xz3');return false;} 
            break;
            
            case 4://you
			//alert(partnow);
			if(partnow==1){partfocus('yhxzk');return false;} 
			if(partnow==2){partfocus('fh');return false;}   
			if(partnow==3){partfocus('fh');return false;}
			if(partnow==4){partfocus('xz2');return false;} 
			if(partnow==5){partfocus('xz3');return false;} 
			if(partnow==6){partfocus('xz3');return false;} 
            break;
            
			case 8://返回
			history.go(-1);
			break;
			
			case 13://确定 
			break;
      }			
      }
  }	 

function partfocus(id){
	document.getElementById(id).focus();
 } 
 
 function openzd(){
 	document.getElementById('xzyh1').style.display ='block';
 	document.getElementById('xz1').focus();
 }
 function afterchosenyh1(){
 	document.getElementById('xzyh1').style.display ='none';
 	var yhname=document.getElementById('yh1').innerHTML;
 	var tnum=document.getElementById('wh1').innerHTML;	
 	document.getElementById('yhmc').innerHTML = yhname;
 	document.getElementById('whnum').innerHTML = tnum;
 	document.getElementById('yhxzk').focus();
 }
 function afterchosenyh2(){
 	document.getElementById('xzyh1').style.display ='none';
 	var yhname=document.getElementById('yh2').innerHTML;
 	var tnum=document.getElementById('wh2').innerHTML;	
 	document.getElementById('yhmc').innerHTML = yhname;
 	document.getElementById('whnum').innerHTML = tnum;
 	document.getElementById('yhxzk').focus();
 }
  function afterchosenyh3(){//选择账期按钮
 	document.getElementById('xzyh1').style.display ='none';
 	var yhname=document.getElementById('yh3').innerHTML;
 	var tnum=document.getElementById('wh3').innerHTML;	
 	document.getElementById('yhmc').innerHTML = yhname;
 	document.getElementById('whnum').innerHTML = tnum;
 	document.getElementById('yhxzk').focus();
 }
 function back(){
 	history.go(-1);
 }
 var time=0;
	function wait(){
     time++;
     if(time>3){time=1;}
     if(time==1){document.getElementById('zfword2').innerHTML="."}
     if(time==2){document.getElementById('zfword2').innerHTML=".."}
     if(time==3){document.getElementById('zfword2').innerHTML="..."}
  }
 function url(){
		var tot = document.getElementById('zfnum').innerHTML;
		window.location.href ='shenghuojiaofei_zhifuchenggong.html?s1='+tot;
	}
function zhifuzhong(){
	document.getElementById('xzyh2').style.display ='block';
	setInterval('wait()',1000);
	setTimeout('url()',5000);
	
}


 function ajaxget(){
               xmlhttp=new XMLHttpRequest();
                   //var entityNo = document.getElementById('inpu').value;
                   var poststr = "entityNo="+vv2;
                   var post_url = "http://192.168.1.58:8081/tv-common/v2.0.0/user/queryVerifyBankCardInfo";
                   xmlhttp.open("post",post_url, true);
                   xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                   xmlhttp.send(poststr);



                 
                 xmlhttp.onreadystatechange=function () {

                   if (xmlhttp.readyState == 4&&xmlhttp.status == 200){
                         //alert('ok');
                         jsonResponse = xmlhttp.responseText;
                         prcvinceJsons = eval("(" + jsonResponse + ")");
                         var strs= new Array(); //定义一数组 
                         var bnnum= new Array(); //定义一数组 
                         bnnum  = prcvinceJsons.data.split("[");
                         //alert(bnnum.length-1);//取得银行卡数量
                         for(var i=1;i<bnnum.length;i++){
                         strs=bnnum[i].split(","); //字符分割 
                         var bn = strs[7].replace(/"bankName":"/,"");
                         bn = bn.replace(/"/,"");//取得银行名称
                         var cn = strs[9].replace(/"cardnosuf":"/,"");
                         cn = cn.replace(/"/,"");//取得银行卡后四位
                         bnlist[i-1] = bn;
                         cnlist[i-1] = cn;
                          }
                           document.getElementById('yhmc').innerHTML = bnlist[0];
                           document.getElementById('whnum').innerHTML = cnlist[0];
                           if(bnnum.length-1==1){
                           	document.getElementById('yhxzk').href = 'javascript:void(0);';
                           } 
                           else{
                           	var banknum = bnnum.length-1;
                           	for(var i=1;i<=3&&i<=banknum;i++){
                           		document.getElementById('xz'+i).style.display = 'block';
                           		document.getElementById('yh'+i).style.display = 'block';
                           		document.getElementById('yhwh'+i).style.display = 'block';
                           		document.getElementById('yh'+i).innerHTML = bnlist[i-1];
                           		document.getElementById('wh'+i).innerHTML = cnlist[i-1];
                           	}

                           }
                        }
                      }
                     
                 }


