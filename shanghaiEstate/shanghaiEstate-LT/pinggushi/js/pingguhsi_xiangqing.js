var partnow;
var vv5;
window.onload = function(){
		document.getElementById('fh').focus();
		kpress();
		var Request = new Object();  //取值时使用无需更改
               Request = GetRequest();  //取值时使用无需更改 需保证GetRequest()存在;
               var vv1 = decodeURI(Request['name']);  //定义变量取s1的值  当数据中包括汉字的时候使用  decodeURI()用于将编码转化为汉字
               var vv2 = decodeURI(Request['phon']);  //定义变量取s1的值  当数据中不包括汉字的时候使用  
               var vv3 = decodeURI(Request['jg']);  //定义变量取s1的值  当数据中包括汉字的时候使用  decodeURI()用于将编码转化为汉字
               var vv4 = decodeURI(Request['md1']);  //定义变量取s1的值  当数据中包括汉字的时候使用  decodeURI()用于将编码转化为汉字
               var vv5 = Request['num'];
               document.getElementById('zygwnm').innerHTML = vv1;
               document.getElementById('bk').innerHTML = vv2;
               document.getElementById('zygwjg').innerHTML = vv3;
               document.getElementById('md1').innerHTML = vv4;
               changepict();
               function changepict(){
               if(vv5==1){
               	document.getElementById('jjrphot').src='image_pinggushi/04.png';
               }
               if(vv5==2){
               	document.getElementById('jjrphot').src='image_pinggushi/05.png';
               }
               if(vv5==3){
               	document.getElementById('jjrphot').src='image_pinggushi/06.png';
               }
               if(vv5==4){
               	document.getElementById('jjrphot').src='image_pinggushi/07.png';
               }
               if(vv5==5){
               	document.getElementById('jjrphot').src='image_pinggushi/08.png';
               }
               if(vv5==6){
               	document.getElementById('jjrphot').src='image_pinggushi/09.png';
               }
			}
              function GetRequest() {    
			        var url = location.search; //获取url中"?"符后的字串
			        var theRequest = new Object();
			        if (url.indexOf("?") != -1) {
			          var str = url.substr(1);
			              strs = str.split("&");
			              for(var i = 0; i < strs.length; i ++) 
			        {
			              theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
			              }
			           }
			       return theRequest;
			     }
	}

function focbtn(id){	
	partnow=id;
	if(id==1){
		document.getElementById('shouye').style.display = 'block';
		//document.getElementById('mont1').style.display = 'none';
	}
	if(id==2){
		document.getElementById('fanhui').style.display = 'block';
		//document.getElementById('mont1').style.display = 'none';
	}
}
function blubtn(id){
	if(id==1){
		document.getElementById('shouye').style.display = 'none';
	}
	if(id==2){
		document.getElementById('fanhui').style.display = 'none';
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
	         case 1: 
			if(partnow==1){partfocus('sy');return false;}   
		    if(partnow==2){partfocus('fh');return false;} 
			break;
			
			           
			case 40: //xia
			case 2:
			if(partnow==1){partfocus('sy');return false;}   
			if(partnow==2){partfocus('fh');return false;}          
			
		    break;
		    
		    
			case 37://zuo
			case 3:
			//alert(partnow);
			if(partnow==1){partfocus('sy');return false;}
			if(partnow==2){partfocus('sy');return false;}   
			break;
			
			

			case 39://you
			case 4:
			if(partnow==1){partfocus('fh');return false;} 
			if(partnow==2){partfocus('fh');return false;}   
            break;
            
            
			case 8://返回
			case 4096:
			case 340:
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

function lastpage(){
	history.go(-1);
}

