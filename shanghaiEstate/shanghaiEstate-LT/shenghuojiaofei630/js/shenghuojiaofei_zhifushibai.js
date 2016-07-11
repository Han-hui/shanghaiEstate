var partnow;
window.onload = function(){
		document.getElementById('wanc').focus();	
				var Request = new Object();  //取值时使用无需更改
        Request = GetRequest();  //取值时使用无需更改 需保证GetRequest()存在;
        var vv1 = decodeURI(Request['s1']);
        document.getElementById('zfe').innerHTML = vv1;
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
		document.getElementById('wancheng').src= 'image_shenghuojiaofei/28.png';
	}
	if(id==2){
		document.getElementById('syfoc').style.display = 'block';
	}
	if(id==3){
		document.getElementById('fhfoc').style.display = 'block';
	}
}
function blubtn(id){
	if(id==1){
		document.getElementById('wancheng').src= 'image_shenghuojiaofei/29.png';
	}
	if(id==2){
		 document.getElementById('syfoc').style.display = 'none';
		}
	if(id==3){
		 document.getElementById('fhfoc').style.display = 'none';
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
	        if(partnow==1){partfocus('sy');return false;}  
			if(partnow==2){partfocus('sy');return false;}   
		    if(partnow==3){partfocus('fh');return false;} 
			break;
			
			  case 1:  //上	
	        if(partnow==1){partfocus('sy');return false;}  
			if(partnow==2){partfocus('sy');return false;}   
		    if(partnow==3){partfocus('fh');return false;} 
			break;
			           
			case 40: //xia
			if(partnow==1){partfocus('wanc');return false;}
			if(partnow==2){partfocus('wanc');return false;}   
			if(partnow==3){partfocus('wanc');return false;} 
			break;  
			
			case 2: //xia
			if(partnow==1){partfocus('wanc');return false;}
			if(partnow==2){partfocus('wanc');return false;}   
			if(partnow==3){partfocus('wanc');return false;} 
			break;        
			
			case 37://zuo
			//alert(partnow);
			if(partnow==1){partfocus('wanc');return false;}
			if(partnow==2){partfocus('sy');return false;}
			if(partnow==3){partfocus('sy');return false;}    
			break;
			
			case 3://zuo
			//alert(partnow);
			if(partnow==1){partfocus('wanc');return false;}
			if(partnow==2){partfocus('sy');return false;}
			if(partnow==3){partfocus('sy');return false;}    
			break;

			case 39://you
			//alert(partnow);
			if(partnow==1){partfocus('wc');return false;}
			if(partnow==2){partfocus('fh');return false;} 
			if(partnow==3){partfocus('fh');return false;}   
            break;
            
            case 4://you
			//alert(partnow);
			if(partnow==1){partfocus('wc');return false;}
			if(partnow==2){partfocus('fh');return false;} 
			if(partnow==3){partfocus('fh');return false;}   
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
function back(){
	history.go(-1);
}
