var partnow;
var pages;
var ye = 1;
var yeshu;
var lastCount;
window.onload = function(){
	document.getElementById('a7').focus();
	document.getElementById("a9").style.display="none";
	document.getElementById("a10").style.display="none";
	document.getElementById("a1").style.display="none";
	kpress();
	xianStar(1,5,168);
	xianStar(2,4,24);
	xianStar(3,3,12);
	xianStar(4,3,21);
	xianStar(5,4,42);
	xianStar(6,3,48);
	Ajax1();
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
		Ajax1();
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
function Ajax11(){
            getStr = web_url+"/api/HouseAgency?offset="+ye+"&limit=" + lastCount;
            xmlhttp=new XMLHttpRequest();
            xmlhttp.open("get",getStr, true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send();
            xmlhttp.onreadystatechange=function (){
                if (xmlhttp.readyState== 4 && xmlhttp.status== 200){
	                var jsonResponse=xmlhttp.responseText;
	                var prcvinceJsons=eval("("+jsonResponse+")");
	                var conJsons = prcvinceJsons.result;
	                
	                document.getElementById("num").innerHTML = ye + "/" +yeshu;
	                for(var i=0; i<conJsons.length; i++){
	                	if(conJsons[i].title != ""){
	                		document.getElementById("t" + (i+1)).innerHTML = conJsons[i].title;
	                		document.getElementById("t"+ (i+1) +"Date").innerHTML = conJsons[i].add_time;
	                		document.getElementById("tt"+ (i+1)).innerHTML = conJsons[i].intro;
	                		arr[i].id = conJsons[i].id;
	                		pages = ye;
//	                		console.log("id " + arr[i].id);
	                	}
	                }
	            }
			}
}
function Ajax1(){
            getStr = web_url+"/api/HouseAgency?address='武东路198号'&select=1&offset="+ye+"&limit=3";
            xmlhttp=new XMLHttpRequest();
            xmlhttp.open("get",getStr, true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send();
            xmlhttp.onreadystatechange=function (){
            	if(xmlhttp.readyState== 4 && xmlhttp.status== 500){
            		Ajax1();
            		return false;
            	}
                if (xmlhttp.readyState== 4 && xmlhttp.status== 200){
	                var jsonResponse=xmlhttp.responseText;
//	                var prcvinceJsons=eval("("+jsonResponse+")");
//	                var conJsons = prcvinceJsons.result;
//	                var count = prcvinceJsons.count;
//	                yeshu = Math.ceil(parseInt(count)/3);
//	                lastCount = parseInt(count)%3;
	                
//	                console.log(yeshu);
//	                document.getElementById("num").innerHTML = ye + "/" +yeshu;
//					console.log(jsonResponse);
					if(jsonResponse == "[]"){
						document.getElementById("nextpre").style.display = "none";
						document.getElementById('a8').focus();
						document.getElementById("none").style.display = "block";
						for(var i=1; i<7; i++){
							document.getElementById("img"+i).style.display= "none" ;
		                	document.getElementById("ig1"+i).style.display= "none" ;
		                	document.getElementById("a"+i).style.display = "none";
		                	document.getElementById("a9").style.display = "none";
		                	document.getElementById("pageNum").innerHTML = "";
		                	partnow = 8;
//		                	document.getElementById('a8').focus();
		                	
		                }
					}
//	                for(var i=1; i<7; i++){
	                
//	                	if(conJsons[i].title != ""){
//	                		document.getElementById("t" + (i+1)).innerHTML = conJsons[i].title;
//	                		document.getElementById("t"+ (i+1) +"Date").innerHTML = conJsons[i].add_time;
//	                		document.getElementById("tt"+ (i+1)).innerHTML = conJsons[i].intro;
//	                		arr[i].id = conJsons[i].id;
//	                		pages = ye;
//	                	}
	                	
//	                }
	           
//	                document.getElementById("news-content").innerHTML = prcvinceJsons[0].conent;
//	                document.getElementById("newscontent").style.cssText="left:0;top:0;position:absolute;color: white; font-family: 微软雅黑;font-size: 25px;width: 1030px;line-height: 30px;";
	              
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
				if(partnow==1){partfocus('a7');return false;}   
			    if(partnow==2){partfocus('a7');return false;} 
			    if(partnow==3){partfocus('a1');return false;}   
	            if(partnow==4){partfocus('a2');return false;}
	  			if(partnow==5){partfocus('a3');return false;}
	  			if(partnow==6){partfocus('a4');return false;}
	  			if(partnow==7){return false;}
	  			if(partnow==8){return false;}
	  			if(partnow==9){return false;}
	  			if(partnow==10){return false;}
			break;
			
			case 40: //xia
				if(partnow==1){partfocus('a3');return false;}   
				if(partnow==2){partfocus('a4');return false;}         
				if(partnow==3){partfocus('a5');return false;}          
				if(partnow==4){partfocus('a6');return false;} 
				if(partnow==5){return false;} 
				if(partnow==6){return false;} 
				if(partnow==7){partfocus('a1');return false;} 
				if(partnow==8){partfocus('a1');return false;} 
				if(partnow==9){partfocus('a1');return false;} 
				if(partnow==10){partfocus('a1');return false;} 
			break;
			
			case 37://zuo
				if(partnow==1){return false;}
				if(partnow==2){partfocus('a1');return false;}          
				if(partnow==3){return false;}   
	            if(partnow==4){partfocus('a3');return false;}   
	            if(partnow==5){return false;} 
				if(partnow==6){partfocus('a5');return false;} 
				if(partnow==7){return false;} 
				if(partnow==8){partfocus('a7');return false;}
				if(partnow==9){partfocus('a8');return false;}
				if(partnow==10){partfocus('a9');return false;}
			break;

			case 39://you
				if(partnow==1){partfocus('a2');return false;}          
				if(partnow==2){return false;}   
				if(partnow==3){partfocus('a4');return false;}
				if(partnow==4){return false;}
				if(partnow==5){partfocus('a6');return false;}
				if(partnow==6){return false;} 
				if(partnow==7){partfocus('a8');return false;} 
				if(partnow==8){partfocus('a9');return false;} 
				if(partnow==9){partfocus('a10');return false;} 
				if(partnow==10){return false;} 
            break;
            
            case 8:  //返回
			case 340:
//			history.go(-1);
			window.location.href = "../index.html";
			return false;
			break;
//			case 8:  //返回
//			break;
			
			case 13:   //确定 
			break;
			
			case 1:  //上	
				if(partnow==1){partfocus('a7');return false;}   
			    if(partnow==2){partfocus('a7');return false;} 
			    if(partnow==3){partfocus('a1');return false;}   
	            if(partnow==4){partfocus('a2');return false;}
	  			if(partnow==5){partfocus('a3');return false;}
	  			if(partnow==6){partfocus('a4');return false;}
	  			if(partnow==7){return false;}
	  			if(partnow==8){return false;}
	  			if(partnow==9){return false;}
	  			if(partnow==10){return false;}

			break;
			
			case 2: //xia
				if(partnow==1){partfocus('a3');return false;}   
				if(partnow==2){partfocus('a4');return false;}         
				if(partnow==3){partfocus('a5');return false;}          
				if(partnow==4){partfocus('a6');return false;} 
				if(partnow==5){return false;} 
				if(partnow==6){return false;} 
				if(partnow==7){partfocus('a1');return false;} 
				if(partnow==8){partfocus('a1');return false;} 
				if(partnow==9){partfocus('a1');return false;} 
				if(partnow==10){partfocus('a1');return false;} 
			break;
			
			case 3://zuo
				if(partnow==1){return false;}
				if(partnow==2){partfocus('a1');return false;}          
				if(partnow==3){return false;}   
	            if(partnow==4){partfocus('a3');return false;}   
	            if(partnow==5){return false;} 
				if(partnow==6){partfocus('a5');return false;} 
				if(partnow==7){return false;} 
				if(partnow==8){partfocus('a7');return false;}
				if(partnow==9){partfocus('a8');return false;}
				if(partnow==10){partfocus('a9');return false;}

			break;

			case 4://you
				if(partnow==1){partfocus('a2');return false;}          
				if(partnow==2){return false;}   
				if(partnow==3){partfocus('a4');return false;}
				if(partnow==4){return false;}
				if(partnow==5){partfocus('a6');return false;}
				if(partnow==6){return false;} 
				if(partnow==7){partfocus('a8');return false;} 
				if(partnow==8){partfocus('a9');return false;} 
				if(partnow==9){partfocus('a10');return false;} 
				if(partnow==10){return false;} 
			
            break;
            case 4096:
//          history.go(-1);
			window.location.href = "../index.html";
			return false;
            break;
            	
//			case 340:  //返回
//			history.go(-1);
//			window.location.href = "../../shanghaidichanNew/index.html";
			//break;
			
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
	document.getElementById("ig" +id).style.display = "block";
	partnow = id;
	if(parseInt(id)<7){
		document.getElementById("name"+id).style.color = "#FFCC1B";
		document.getElementById("juli"+id).style.color = "#FFCC1B";
	}
}
function displayout(id){
	document.getElementById("ig" + id).style.display = "none";
	if(parseInt(id)<7){
		document.getElementById("name"+id).style.color = "#FFFFFF";
		document.getElementById("juli"+id).style.color = "#FFFFFF";
//		document.getElementById("test").innerHTML = document.getElementById("juli"+id).style.color;
	}
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
function xianStar(id,num,startNum){
	document.getElementById("startNum"+id).innerHTML = "("+startNum+")";
	switch(num){
		case 5:break;
		case 4: document.getElementById("star"+id +"55").style.display = "none";
				
		break;
		case 3: document.getElementById("star"+id +"55").style.display = "none";
				document.getElementById("star"+id +"44").style.display = "none";
		break;
		case 2: document.getElementById("star"+id +"55").style.display = "none";
				document.getElementById("star"+id +"44").style.display = "none";
				document.getElementById("star"+id +"33").style.display = "none";
		break;
		case 1: document.getElementById("star"+id +"55").style.display = "none";
				document.getElementById("star"+id +"44").style.display = "none";
				document.getElementById("star"+id +"33").style.display = "none";
				document.getElementById("star"+id +"22").style.display = "none";
		break;
		case 0: document.getElementById("star"+id +"11").style.display = "none";
				document.getElementById("star"+id +"55").style.display = "none";
				document.getElementById("star"+id +"44").style.display = "none";
				document.getElementById("star"+id +"33").style.display = "none";
				document.getElementById("star"+id +"22").style.display = "none";
		break;
	}
}
