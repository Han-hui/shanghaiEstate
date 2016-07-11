var partnow;
var pages;
var ye = 1;
var yeshu;
var lastCount;
window.onload = function(){
//	document.getElementById('a1').focus();
document.getElementById("a7").focus();
	document.getElementById("ig1").style.display = "none";
	document.getElementById('pageNum').style.display = "none";
	document.getElementById('nextpre').style.display = "none";
	document.getElementById('a9').style.display = "none";
	document.getElementById('a1').style.display = "none";
	kpress();
	Ajax1();
}

var arr = [];
for(var i=0; i<3; i++){
	arr[i] = new Object;
}
function nextAjax(){
	if(ye >=yeshu){
		return false;
	}else{
		ye+=1;
		Ajax1();
	}
	
}
function preAjax(){
	if(ye>1){
		ye-=1;
	}else{
		ye=1;
	}
	
	Ajax1();
}

function Ajax1(){
            getStr = web_url+"/api/ValuerAgent?address='武东路198号'&offset="+ye+"&limit=3";
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
	                var prcvinceJsons=eval("("+jsonResponse+")");
//	               console.log(prcvinceJsons.length);
	               if(prcvinceJsons.length == 0){
	               	document.getElementById("a8").focus();
	               	document.getElementById('pageNum').style.display = "none";
	               	document.getElementById('nextpre').style.display = "none";
	               	document.getElementById('ig1').style.display = "none";
	               	document.getElementById('a1').style.display = "none";
	               	document.getElementById('a2').style.display = "none";
	               	document.getElementById('a3').style.display = "none";
	               	document.getElementById('a9').style.display = "none";
	               	document.getElementById('a10').style.display = "none";
	               	document.getElementById("none").style.display = "block";
	               	return false;
	               }
	                var conJsons = prcvinceJsons.valuer;
	                
	                var conJsonsL = conJsons.length;
//	                 console.log(conJsons);
	                var count = prcvinceJsons.count;
	                yeshu = Math.ceil(parseInt(count)/3);
	                
					document.getElementById("pageNum").innerHTML = ye + "/" +yeshu;
					var x="x";
						for(var i=1; i<conJsonsL+1; i++){
							document.getElementById("img"+i).style.display= "block";
							document.getElementById("ig1"+i).style.display= "block";
							document.getElementById("logo"+i).src = web_url+conJsons[i-1].valuer_agent_logo;
							document.getElementById("title"+i).innerHTML = conJsons[i-1].valuer_agent_name;
							document.getElementById("fuwu"+i).innerHTML = conJsons[i-1].bank_id;
							document.getElementById("zhuban"+i).innerHTML = conJsons[i-1].area_id;
							x+=conJsons[i-1].distance
							document.getElementById("juNum"+i).innerHTML = x.substr(1,2);
//							document.getElementById("dengji"+i).innerHTML = conJsons.
							arr[i-1].id = conJsons[i-1].id;
							pages = ye;
//		                	partnow = 8;
		                	document.getElementById('a1').focus();
//		                	document.getElementById("test").innerHTML = partnow;
//		                	document.getElementById("ig1").style.display="block";
		                }
	                	for(var i=conJsonsL+1;i<4;i++){
	                		document.getElementById("img"+i).style.display = "none";
	                		document.getElementById("a"+i).style.display = "none";
	                		document.getElementById("ig1"+i).style.display= "none";
//	                		console.log(i);
	                	}
	                	if(conJsonsL==0){
	                		document.getElementById("a7").focus();
	                		document.getElementById("pageNum").style.display = "none";
	                		document.getElementById("nextpre").style.display = "none";
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
				if(partnow==1){partfocus('a7');return false;}   
			    if(partnow==2){partfocus('a1');return false;} 
			    if(partnow==3){partfocus('a2');return false;}  
	  			if(partnow==7){return false;}
	  			if(partnow==8){return false;}
	  			if(partnow==9){return false;}
	  			if(partnow==10){return false;}
			break;
			
			case 40: //xia
				if(partnow==1){partfocus('a2');return false;}   
				if(partnow==2){partfocus('a3');return false;}         
				if(partnow==3){return false;}  
				if(partnow==7){partfocus('a1');return false;} 
				if(partnow==8){partfocus('a1');return false;} 
				if(partnow==9){partfocus('a1');return false;} 
				if(partnow==10){partfocus('a1');return false;} 
			break;
			
			case 37://zuo
				if(partnow==1){return false;}
				if(partnow==2){return false;}          
				if(partnow==3){return false;}   
				if(partnow==7){return false;} 
				if(partnow==8){partfocus('a7');return false;}
				if(partnow==9){partfocus('a8');return false;}
				if(partnow==10){partfocus('a9');return false;}
			break;

			case 39://you
				if(partnow==1){return false;}          
				if(partnow==2){return false;}   
				if(partnow==3){return false;}
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
			case 13:   //确定 
			break;
			case 1:  //上	
				if(partnow==1){partfocus('a7');return false;}   
			    if(partnow==2){partfocus('a1');return false;} 
			    if(partnow==3){partfocus('a2');return false;}  
	  			if(partnow==7){return false;}
	  			if(partnow==8){return false;}
	  			if(partnow==9){return false;}
	  			if(partnow==10){return false;}
			break;
			case 2: //xia
				if(partnow==1){partfocus('a2');return false;}   
				if(partnow==2){partfocus('a3');return false;}         
				if(partnow==3){return false;}  
				if(partnow==7){partfocus('a1');return false;} 
				if(partnow==8){partfocus('a1');return false;} 
				if(partnow==9){partfocus('a1');return false;} 
				if(partnow==10){partfocus('a1');return false;} 
			break;
			case 3://zuo
				if(partnow==1){return false;}
				if(partnow==2){return false;}          
				if(partnow==3){return false;}   
				if(partnow==7){return false;} 
				if(partnow==8){partfocus('a7');return false;}
				if(partnow==9){partfocus('a8');return false;}
				if(partnow==10){partfocus('a9');return false;}
			break;
			case 4://you
				if(partnow==1){return false;}          
				if(partnow==2){return false;}   
				if(partnow==3){return false;}
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
			case 33:  //上一页
			preAjax();
			return false;
			break;			
			case 372:  //上一页
			preAjax();
			return false;
			break;		
			case 34:  //xia一页
			nextAjax();
			return false;
			break;		
			case 373:  //xia一页
			nextAjax();
			return false;
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
	if(parseInt(id)<4){
		document.getElementById("juli" + id).style.top = "70px";
		document.getElementById("juli"+id).style.color = "#ffec1b";
	}
}
function displayout(id){
	document.getElementById("ig" + id).style.display = "none";
	if(parseInt(id)<4){
		document.getElementById("juli" + id).style.top = "95px";
		document.getElementById("juli" + id).style.color = "#ffffff";
	}
}
function x1(){
	window.location.href="index_list.html?id="+arr[0].id + "&pages=" + pages;
}
function x2(){
	window.location.href="index_list.html?id="+arr[1].id + "&pages=" + pages;
}
function x3(){
	window.location.href="index_list.html?id="+arr[2].id + "&pages=" + pages;
}