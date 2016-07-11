var stop=0;
var ctop=3000;
window.onload = function(){
		document.getElementById('shouye1').focus();
		kpress();
		 var Request = new Object();
            Request = GetRequest();
            var idf=Request['id'];
            var pages = Request['pages'];
            Ajax2(idf, pages);
            console.log(idf);
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
function Ajax2(idf,pages){
            getStr = "http://192.168.200.46:8170/api/GovInfo?offset="+pages +"&limit=3";
            var a=1;
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
	                for(var i=0; i<conJsons.length; i++){
	                	if(conJsons[i].id == idf){
	                		a = i;
//	                		console.log("i" +i);
	                		break;
	                	}
	                }
//	                console.log(conJsons);
//	                console.log(conJsons[a].id)
	                document.getElementById("ttl").innerHTML = conJsons[a].title;
            		document.getElementById("date").innerHTML = conJsons[a].add_time;
	             	document.getElementById("news2").innerHTML = conJsons[a].conent;
	            	document.getElementById("newscontent").style.cssText="left:0;top:0;position:absolute;font-family: 微软雅黑;font-size: 25px;color:#fff;width: 1050px;line-height: 30px;height: 530px;overflow: hidden";
//	                document.getElementById("news-content").innerHTML = prcvinceJsons[0].conent;
//	                document.getElementById("newscontent").style.cssText="left:0;top:0;position:absolute;color: white; font-family: 微软雅黑;font-size: 25px;width: 1030px;line-height: 30px;";
	              
	            }
			}

}
function focbtn(id){
	if(id==1){
		partnow=1;
		document.getElementById('cov1').style.display = 'block';
	}
	if(id==2){
		partnow=2;
		document.getElementById('cov2').style.display = 'block';		
	}
}
function blubtn(id){
	if(id==1){
		document.getElementById('cov1').style.display = 'none';
		
		}
	if(id==2){
		document.getElementById('cov2').style.display = 'none';
		}
	}
function getNewsContentHeight(){
            //setTimeout(function(){
//              ctop=document.getElementById("newscontent").clientHeight;
                ctop=530;
               // document.getElementById("date").innerHTML=""+ctop+"";
//              ctop-=350;
            //}, 0);
            return ctop;
        }
function kpress(){
    document.onkeypress = grabEvent1;
    document.onirkeypress = grabEvent1; 
	document.onkeydown = grabEvent1;
    function grabEvent1(event){
        var val = event || window.event || arguments.callee.caller.arguments[0];
         //document.getElementById('text0').innerHTML=val.keyCode;
        switch(val.keyCode){	
	         	
	        case 38:  //上	
//			if(partnow==1){return false;}   //'index'-->'input-search'
//		    if(partnow==2){return false;}   //'index'-->'part1a'
			if(stop>=200){
                stop-=200;
            }
            document.getElementById("newscontent").scrollTop=stop;
//          document.getElementById("test").innerHTML=stop+"";
            return false;
			break;
			case 33://shang yiye
                if(stop>=200){
                    stop-=200;
                }
            document.getElementById("newscontent").scrollTop=stop;
//          document.getElementById("test").innerHTML=stop+"";
            return 0;
            break;
			case 34://xia yi ye
                if(stop<1200){
                    stop+=200;
                }
            document.getElementById("newscontent").scrollTop=stop;
//          document.getElementById("test").innerHTML=stop+"";
            return 0;
            break;
			case 40: //xia
//			if(partnow==1){return false;}   
//			if(partnow==2){return false;}           //'index'-->back
			 if(stop<1200){
                stop+=200;
            }
            document.getElementById("newscontent").scrollTop=stop;
//            document.getElementById("test").innerHTML=stop;
            return 0;
			break;
			case 37://zuo
			if(partnow==1){return false;}else{
				partfocus('shouye1');
			}
//			if(partnow==2){partfocus('shouye1');}           //'index'-->back
			stop=0;
            document.getElementById("newscontent").scrollTop=stop; 
//			 document.getElementById("test").innerHTML=stop+"";
			break;
			case 39://you
			if(partnow==1){partfocus('fanhui1');}           //'index'-->back
			else{
				return false;
			}
//			if(partnow==2){return false;}
			stop=0;
//            document.getElementById("test").innerHTML=stop+"";
            document.getElementById("newscontent").scrollTop=stop;
            break;
            
            case 340:	
			case 8:  //返回
//			history.go(-1);
			window.location.href = "indexzf.html";
			return false;
			break;
			case 4096:
//          history.go(-1);
			window.location.href = "indexzf.html";
			return false;
            break;
			case 13:   //确定 
			break;
        }			
    }
  }	 

  function partfocus(id){
     document.getElementById(id).focus();
  }
  function lastpage(){ 	
 	window.location.href = 'indexzf.html';	
 }