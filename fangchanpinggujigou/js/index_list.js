var partnow;
var pages;
var ye = 1;
var yeshu;
var lastCount;
window.onload = function(){
	document.getElementById('a3').focus();
	kpress();
	var Request = new Object();
    Request = GetRequest();
    var idf=Request['id'];
    var ye = Request['pages'];
//  console.log(ye);
	Ajax1(idf,ye);
}
var arr = [];
for(var i=0; i<3; i++){
	arr[i] = new Object;
}
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function Ajax1(idf,ye){
            getStr = web_url+"/api/ValuerAgent?address='武东路198号'&offset="+ye+"&limit=3";
            var a=1;
            xmlhttp=new XMLHttpRequest();
            xmlhttp.open("get",getStr, true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send();
            xmlhttp.onreadystatechange=function (){
            	if(xmlhttp.readyState== 4 && xmlhttp.status== 500){
            		Ajax1(idf,ye);
            		return false;
            	}
                if (xmlhttp.readyState== 4 && xmlhttp.status== 200){
	                var jsonResponse=xmlhttp.responseText;
	                var prcvinceJsons=eval("("+jsonResponse+")");
	                var conJsons = prcvinceJsons.valuer;
//	                console.log(jsonResponse);
	                var conJsonsL = conJsons.length;
	                for(var i=0; i<conJsonsL;i++){
	                	if(conJsons[i].id == idf){
	                		a = i;
//	                		console.log("i" +i);
	                		break;
	                	}
	                }
	                document.getElementById("listImg").src=web_url+conJsons[a].valuer_agent_logo;
	                document.getElementById("name").innerHTML = conJsons[a].valuer_agent_name;
	                document.getElementById("tel").innerHTML = conJsons[a].valuer_agent_tel;
	                document.getElementById("yinhang").innerHTML = conJsons[a].bank_id;
	                document.getElementById("web").innerHTML = conJsons[a].valuer_agent_website;
	                document.getElementById("quyu").innerHTML = conJsons[a].area_id;
	                document.getElementById("dizhi").innerHTML = conJsons[a].valuer_agent_address;
//	                document.getElementById()
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