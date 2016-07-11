var partnow;
var pages;
var ye = 1;
var yeshu;
var lastCount;
window.onload = function(){
	document.getElementById('a3').focus();
	kpress();
//	Ajax1();
}

var arr = [];
for(var i=0; i<3; i++){
	arr[i] = new Object;
}
function nextAjax(){
	ye+=1;
	if(lastCount !=0){
//		Ajax11();
	} else{
//		Ajax1();
	}
}
function preAjax(){
	if(ye>1){
		ye-=1;
	}else{
		ye=1;
	}
	
//	Ajax1();
}
//function Ajax11(){
//          getStr = "http://192.168.200.46:8170/api/GovInfo?offset="+ye+"&limit=" + lastCount;
//          xmlhttp=new XMLHttpRequest();
//          xmlhttp.open("get",getStr, true);
//          xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//          xmlhttp.send();
//          xmlhttp.onreadystatechange=function (){
//              if (xmlhttp.readyState== 4 && xmlhttp.status== 200){
//	                var jsonResponse=xmlhttp.responseText;
//	                var prcvinceJsons=eval("("+jsonResponse+")");
//	                var conJsons = prcvinceJsons.result;
//	                
//	                document.getElementById("num").innerHTML = ye + "/" +yeshu;
//	                for(var i=0; i<conJsons.length; i++){
//	                	if(conJsons[i].title != ""){
//	                		document.getElementById("t" + (i+1)).innerHTML = conJsons[i].title;
//	                		document.getElementById("t"+ (i+1) +"Date").innerHTML = conJsons[i].add_time;
//	                		document.getElementById("tt"+ (i+1)).innerHTML = conJsons[i].intro;
//	                		arr[i].id = conJsons[i].id;
//	                		pages = ye;
////	                		console.log("id " + arr[i].id);
//	                	}
//	                }
//	            }
//			}
//}
//function Ajax1(){
//          getStr = "http://192.168.200.46:8170/api/GovInfo?offset="+ye+"&limit=3";
//          xmlhttp=new XMLHttpRequest();
//          xmlhttp.open("get",getStr, true);
//          xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//          xmlhttp.send();
//          xmlhttp.onreadystatechange=function (){
//              if (xmlhttp.readyState== 4 && xmlhttp.status== 200){
//	                var jsonResponse=xmlhttp.responseText;
//	                var prcvinceJsons=eval("("+jsonResponse+")");
//	                var conJsons = prcvinceJsons.result;
//	                var count = prcvinceJsons.count;
//	                yeshu = Math.ceil(parseInt(count)/3);
//	                lastCount = parseInt(count)%3;
//	                
////	                console.log(yeshu);
////	                document.getElementById("num").innerHTML = ye + "/" +yeshu;
//	                for(var i=0; i<conJsons.length; i++){
//	                	if(conJsons[i].title != ""){
//	                		document.getElementById("t" + (i+1)).innerHTML = conJsons[i].title;
//	                		document.getElementById("t"+ (i+1) +"Date").innerHTML = conJsons[i].add_time;
//	                		document.getElementById("tt"+ (i+1)).innerHTML = conJsons[i].intro;
//	                		arr[i].id = conJsons[i].id;
//	                		pages = ye;
////	                		console.log("id " + arr[i].id);
//	                	}
//	                	
//	                }
//	           
////	                document.getElementById("news-content").innerHTML = prcvinceJsons[0].conent;
////	                document.getElementById("newscontent").style.cssText="left:0;top:0;position:absolute;color: white; font-family: 微软雅黑;font-size: 25px;width: 1030px;line-height: 30px;";
//	              
//	            }
//			}
//}
function kpress(){
             document.onkeypress = grabEvent1;
             document.onirkeypress = grabEvent1; 
			 document.onkeydown = grabEvent1;
             function grabEvent1(event){
	         var val = event || window.event || arguments.callee.caller.arguments[0];
//	         document.getElementById('test').innerHTML=val.keyCode;
//	         alert(val.keyCode);
	         switch(val.keyCode){	
	         case 38:  //上	
				if(partnow==1){return false;}   
			    if(partnow==2){return false;} 
			    if(partnow==3){partfocus('a1');return false;}  
			break;
			
			case 40: //xia
				if(partnow==1){partfocus('a3');return false;}   
				if(partnow==2){partfocus('a3');return false;}         
				if(partnow==3){return false;}          
			break;
			
			case 37://zuo
				if(partnow==1){return false;}
				if(partnow==2){partfocus('a1');return false;}          
				if(partnow==3){return false;}   
			break;

			case 39://you
				if(partnow==1){partfocus('a2');return false;}          
				if(partnow==2){return false;}   
				if(partnow==3){return false;}
            break;
            
            
			
			case 13:   //确定 
			break;
			
			case 1:  //上	
				if(partnow==1){return false;}   
			    if(partnow==2){return false;} 
			    if(partnow==3){partfocus('a1');return false;}  

			break;
			
			case 2: //xia
				if(partnow==1){partfocus('a3');return false;}   
				if(partnow==2){partfocus('a3');return false;}         
				if(partnow==3){return false;}   
			break;
			
			case 3://zuo
				if(partnow==1){return false;}
				if(partnow==2){partfocus('a1');return false;}          
				if(partnow==3){return false;}

			break;

			case 4://you
				if(partnow==1){partfocus('a2');return false;}          
				if(partnow==2){return false;}   
				if(partnow==3){return false;}
			
            break;
            case 8:  //返回
			case 340:
//				history.go(-1);
				window.location.href = "index.html";
				return false;
			break;
            case 4096:
//          	alert(1111);
//          	history.go(-1);
				window.location.href = "index.html";
				return false;
            break;
			
			case 33:  //上一页
			break;
			
			case 372:  //上一页
			break;
			
			case 34:  //上一页
//			window.location.href = "../../zfxx2.html";
			break;
			
			case 373:  //上一页
//			window.location.href = "../../zfxx2.html";
			break;
      }			
      }
  }	 
  function partfocus(id){
  	document.getElementById(id).focus();
  }

function displayin(id){
	document.getElementById("img" +id).style.display = "block";
	partnow = id;
}
function displayout(id){
	document.getElementById("img" + id).style.display = "none";
}
function x1(){
	window.location.href="xinwen2.html?id="+arr[0].id + "&pages=" + pages;
}
function x2(){
	window.location.href="xinwen2.html?id="+arr[1].id + "&pages=" + pages;
}
function x3(){
	window.location.href="xinwen2.html?id="+arr[2].id + "&pages=" + pages;
}