var partnow;
var pages;
var ye = 1;
var yeshu;
var lastCount;
window.onload = function(){
	document.getElementById('a5').focus();
	displayout('img1');
	kpress();
	Ajax1();
}

var arr = [];
for(var i=0; i<3; i++){
	arr[i] = new Object;
}
function nextAjax(){
	ye+=1;
//	if(lastCount !=0){
//		Ajax11();
//	} else{
//		Ajax1();
//	}
Ajax1();
}
function preAjax(){
	if(ye==1){
		return false;
	}
	if(ye>1){
		ye-=1;
	}else{
		ye=1;
	}
	
	Ajax1();
}
function Ajax11(){
	
            getStr = web_url +"/api/GovInfo?offset="+ye+"&limit=3";
           
            xmlhttp=new XMLHttpRequest();
            xmlhttp.open("get",getStr, true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send();
            xmlhttp.onreadystatechange=function (){
                if (xmlhttp.readyState== 4 && xmlhttp.status== 200){
	                var jsonResponse=xmlhttp.responseText;
	                var prcvinceJsons=eval("("+jsonResponse+")");
	                var conJsons = prcvinceJsons.result;
	                var count = prcvinceJsons.count;
	                yeshu = Math.ceil(parseInt(count)/3);
	                console.log(conJsons.length + " oo");
	                document.getElementById("num").innerHTML = ye + "/" +yeshu;
	                for(var i=0; i<conJsons.length; i++){
	                	if(conJsons[i].title != ""){
	                		document.getElementById("t" + (i+1)).innerHTML = conJsons[i].title;
	                		document.getElementById("t"+ (i+1) +"Date").innerHTML = conJsons[i].add_time;
	                		document.getElementById("tt"+ (i+1)).innerHTML = conJsons[i].intro;
	                		document.getElementById("img"+(i+1)).style.display = "block";
	                		document.getElementById("a"+(i+5)).style.display = "block";
	                		arr[i].id = conJsons[i].id;
	                		pages = ye;
//	                		console.log("id " + arr[i].id);
	                	}
	                }
	                for(var i=(conJsons.length+1);i<4;i++){
	                	document.getElementById("t" + i).innerHTML = "";
                		document.getElementById("t"+ i +"Date").innerHTML = "";
                		document.getElementById("tt"+ i).innerHTML = "";
                		document.getElementById("img"+i).style.display = "none";
                		document.getElementById("a"+(i+4)).style.display = "none";
                		document.getElementById('a5').focus();
	                }
	            }
			}
}
function Ajax1(){
            getStr = web_url+"/api/GovInfo?offset="+ye+"&limit=3";
            xmlhttp=new XMLHttpRequest();
            xmlhttp.open("get",getStr, true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send();
//           document.getElementById("num").innerHTML = "222";
            xmlhttp.onreadystatechange=function (){
            	
                if (xmlhttp.readyState== 4 && xmlhttp.status== 200){
                	 document.getElementById("num").innerHTML = "333";
	                var jsonResponse=xmlhttp.responseText;
	                var prcvinceJsons=eval("("+jsonResponse+")");
	                var conJsons = prcvinceJsons.result;
	                var count = prcvinceJsons.count;
	                yeshu = Math.ceil(parseInt(count)/3);
	                lastCount = parseInt(count)%3;
	                var conJsonsL = conJsons.length;
//					 var conJsonsL = 0;
////	                console.log(yeshu);
	                document.getElementById("num").innerHTML = ye + "/" +yeshu;
	                for(var i=0; i<conJsonsL; i++){
	                	if(conJsons[i].title != ""){
	                		document.getElementById("t" + (i+1)).innerHTML = conJsons[i].title;
	                		document.getElementById("t"+ (i+1) +"Date").innerHTML = conJsons[i].add_time;
	                		document.getElementById("tt"+ (i+1)).innerHTML = conJsons[i].intro;
	                		document.getElementById("a4").style.display = "block";
	                		document.getElementById("img"+(i+1)).style.display = "block";
	                		document.getElementById("gongneng").style.display='block';
	              	 		document.getElementById("a3").style.display='block';
	              	 		document.getElementById("a4").style.display='block';
	              	 		document.getElementById("a"+(i+5)).style.display = "block";
	                		arr[i].id = conJsons[i].id;
	                		pages = ye;
//	                		console.log("id " + arr[i].id);
	                	}
	                	
	                }
	                
	           		document.getElementById('a5').focus();
            		document.getElementById("img1").style.display = "none";
////	                document.getElementById("news-content").innerHTML = prcvinceJsons[0].conent;
////	                document.getElementById("newscontent").style.cssText="left:0;top:0;position:absolute;color: white; font-family: 微软雅黑;font-size: 25px;width: 1030px;line-height: 30px;";
	              	 for(var i=(conJsonsL+1);i<4;i++){
	                	document.getElementById("t" + i).innerHTML = "";
                		document.getElementById("t"+ i +"Date").innerHTML = "";
                		document.getElementById("tt"+ i).innerHTML = "";
                		document.getElementById("img"+i).style.display = "none";
                		document.getElementById("a"+(i+4)).style.display = "none";
                		document.getElementById('a5').focus();
                		
	                }
	              	 if(conJsonsL == 0){
	              	 	document.getElementById('a1').focus();
	              	 	document.getElementById("img1").style.display = "none";
	              	 	document.getElementById("gongneng").style.display='none';
	              	 	document.getElementById("a3").style.display='none';
	              	 	document.getElementById("a4").style.display='none';
	              	 }
	            }
			}
}
function kpress(){
             document.onkeypress = grabEvent1;
             document.onirkeypress = grabEvent1; 
			 document.onkeydown = grabEvent1;
             function grabEvent1(event){
	         var val = event || window.event || arguments.callee.caller.arguments[0];
//	         document.getElementById('test').innerHTML=val.keyCode;
	         switch(val.keyCode){	
	         case 38:  //上	
				if(partnow==1){return false;}   
			    if(partnow==2){return false;} 
			    if(partnow==3){return false;}   
	            if(partnow==4){return false;}
	  			if(partnow==5){partfocus('a1');return false;}
	  			if(partnow==6){partfocus('a5');return false;}
	  			if(partnow==7){partfocus('a6');return false;}
			break;
			
			case 40: //xia
			if(partnow==1){partfocus('a5');return false;}   
			if(partnow==2){partfocus('a5');return false;}         
			if(partnow==3){partfocus('a5');return false;}          
			if(partnow==4){partfocus('a5');return false;} 
			if(partnow==5){partfocus('a6');return false;} 
			if(partnow==6){partfocus('a7');return false;} 
			if(partnow==7){return false;} 
			break;
			
			case 37://zuo
			if(partnow==1){return false;}
			if(partnow==2){partfocus('a1');return false;}          
			if(partnow==3){partfocus('a2');return false;}   
            if(partnow==4){partfocus('a3');return false;}   
            if(partnow==5){return false;} 
			if(partnow==6){return false;} 
			if(partnow==7){return false;} 

			break;

			case 39://you
			if(partnow==1){partfocus('a2');return false;}          
			if(partnow==2){partfocus('a3');return false;}   
			if(partnow==3){partfocus('a4');return false;}
			if(partnow==4){return false;}
			if(partnow==5){return false;}
			if(partnow==6){return false;} 
			if(partnow==7){return false;} 

            break;
            
            case 8:  //返回
			case 340:
//			history.go(-1);
			window.location.href = "../shanghaidichanNew/index.html";
			return false;
			break;
			
			case 13:   //确定 
			break;
			
			case 1:  //上	
			if(partnow==1){return false;}   
		    if(partnow==2){return false;}  
		    if(partnow==3){return false;}                         
            if(partnow==4){return false;}
  			if(partnow==5){partfocus('a1');return false;}
  			if(partnow==6){partfocus('a5');return false;}
  			if(partnow==7){partfocus('a6');return false;}

			break;
			
			case 2: //xia
			if(partnow==1){partfocus('a5');return false;}   
			if(partnow==2){partfocus('a5');return false;}           
			if(partnow==3){partfocus('a5');return false;}           
			if(partnow==4){partfocus('a5');return false;} 
			if(partnow==5){partfocus('a6');return false;} 
			if(partnow==6){partfocus('a7');return false;} 
			if(partnow==7){return false;}  
			break;
			
			case 3://zuo
			if(partnow==1){return false;}
			if(partnow==2){partfocus('a1');return false;}           
			if(partnow==3){partfocus('a2');return false;}   
            if(partnow==4){partfocus('a3');return false;}   
            if(partnow==5){return false;} 
			if(partnow==6){return false;} 
			if(partnow==7){return false;} 
			break;

			case 4://you
			if(partnow==1){partfocus('a2');return false;}          
			if(partnow==2){partfocus('a3');return false;}   
			if(partnow==3){partfocus('a4');return false;}
			if(partnow==4){return false;}
			if(partnow==5){return false;}
			if(partnow==6){return false;} 
			if(partnow==7){return false;} 
			
            break;
            case 4096:
//          history.go(-1);
			window.location.href = "../shanghaidichanNew/index.html";
			return false;
            break;
			case 33:  //上一页
			preAjax();
			return false;
			break;
			
			case 372:  //上一页
			preAjax();
			return false;
			break;
			
			case 34:  //xia一页
//			window.location.href = "../../zfxx2.html";
			nextAjax();
			return false;
			break;
			
			case 373:  //xia一页
//			window.location.href = "../../zfxx2.html";
			nextAjax();
			return false;
			break;
      }			
      }
  }	 
  function partfocus(id){
  	document.getElementById(id).focus();
  }
function addIndex(as, asLength){
	for(var i=0; i< asLength; i++){
		as[i].index = i;
		as[i].onfocus = function(){
			partnow = parseInt(this.index) + 1;
			
			if(partnow >4){
				displayin('im' + (partnow-4));
				displayout('img' + (partnow-4));
			} else{
				displayin('ig' + partnow);
			}
//			overdisplay('img' + partnow);
//			document.getElementById("test").innerHTML = partnow;
		};
		as[i].onblur = function(){
//			outdisplay('img' + partnow);
			if(partnow >4){
				displayin('img' + (partnow-4));
				displayout('im' + (partnow-4));
			} else{
				displayout('ig' + partnow);
			}
		}
	}
}
function part(id){
	partnow = id;
	if(id >4){
		displayin('im' + (partnow-4));
		displayout('img' + (partnow-4));
	} else{
		displayin('ig' + partnow);
	}
}
function part1(id){
	if(partnow >4){
		displayin('img' + (partnow-4));
		displayout('im' + (partnow-4));
		
	} else{
		displayout('ig' + partnow);
	}
}
function displayin(id){
	document.getElementById(id).style.display = "block";
}
function displayout(id){
	document.getElementById(id).style.display = "none";
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