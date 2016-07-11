var partnow;
var vv5;
var agent_id;

window.onload = function(){
	    getid();
	    ajaxget(1);
		document.getElementById('fh').focus();
		getLength();
		kpress();
		     
			}
              
	

function getid(){
        var Request = new Object();  //取值时使用无需更改
        Request = GetRequest();  //取值时使用无需更改 需保证GetRequest()存在;          
        agent_id = Request['id'];      
}

function getLength(){
	var total = document.getElementById('lenum3').innerHTML;
	var halfyear = document.getElementById('lenum1').innerHTML;
	var oneyear = document.getElementById('lenum2').innerHTML;
	document.getElementById('lincov1').style.width=88*(halfyear/total);
	document.getElementById('lincov2').style.width=88*(oneyear/total);
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
