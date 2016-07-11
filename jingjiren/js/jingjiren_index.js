var partnow;
var page_all; //总页数
var page_now = 1; //目前页数
var count;
window.onload = function(){
		document.getElementById('sy').focus();
		document.getElementById("syy").style.display = "none";
		document.getElementById("k1").style.display = "none";
		kpress();
		ajaxget(1);
	}
function focbtn(id){	
	partnow=id;
	if(id==1){
		document.getElementById('bjk1').src = 'jingjiren_image/03.png';
	}
	if(id==2){
		document.getElementById('bjk2').src = 'jingjiren_image/03.png';
	}
	if(id==3){
		document.getElementById('bjk3').src = 'jingjiren_image/03.png';
	}
	if(id==4){
		document.getElementById('bjk4').src = 'jingjiren_image/03.png';
	}
	if(id==5){
		document.getElementById('bjk5').src = 'jingjiren_image/03.png';
	}
	if(id==6){
		document.getElementById('bjk6').src = 'jingjiren_image/03.png';
	}
	if(id==7){
		document.getElementById('shouye').style.display = 'block';
		//document.getElementById('mont1').style.display = 'none';
	}
	if(id==8){
		document.getElementById('fanhui').style.display = 'block';
		//document.getElementById('mont1').style.display = 'none';
	}
	if(id==9){
		document.getElementById('shangyiye').style.display = 'block';
	}
	if(id==10){
		document.getElementById('xiayiye').style.display = 'block';
	}
	if(id==11){
		if(document.getElementById('shuru').value=='请输入楼盘地址/经纪人姓名'){
		document.getElementById('shuru').value = '';
		}
	}
}
function blubtn(id){
	if(id==1){
		 document.getElementById('bjk1').src = 'jingjiren_image/05.png';
		}
	if(id==2){
		 document.getElementById('bjk2').src = 'jingjiren_image/05.png';
		}
	if(id==3){
		 document.getElementById('bjk3').src = 'jingjiren_image/05.png';
		}
	if(id==4){
		 document.getElementById('bjk4').src = 'jingjiren_image/05.png';
		}
	if(id==5){
		document.getElementById('bjk5').src = 'jingjiren_image/05.png';
		}
	if(id==6){
		document.getElementById('bjk6').src = 'jingjiren_image/05.png';
	}
	if(id==7){
		document.getElementById('shouye').style.display = 'none';
	}
	if(id==8){
		document.getElementById('fanhui').style.display = 'none';
	}
	if(id==9){
		document.getElementById('shangyiye').style.display = 'none';
	}
	if(id==10){
		document.getElementById('xiayiye').style.display = 'none';
	}
	if(id==11){
		if(document.getElementById('shuru').value==''){
		document.getElementById('shuru').value = '请输入楼盘地址/经纪人姓名';
		}
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
			if(partnow==1){partfocus('fh');return false;}   
		    if(partnow==2){partfocus('fh');return false;} 
		    if(partnow==3){partfocus('syy');return false;}
		    if(partnow==4){partfocus('k1');return false;} 
		    if(partnow==5){partfocus('k2');return false;} 
		    if(partnow==6){partfocus('k3');return false;} 
		    if(partnow==7){partfocus('sy');return false;} 
		    if(partnow==8){partfocus('fh');return false;} 
		    if(partnow==9){partfocus('shuru');return false;} 
		    if(partnow==10){partfocus('shuru');return false;} 
		    if(partnow==11){partfocus('shuru');return false;} 
			break;
			
			           
			case 40: //xia
			case 2:
			if(partnow==1){partfocus('k4');return false;}   
			if(partnow==2){partfocus('k5');return false;}          
			if(partnow==3){partfocus('k6');return false;}
			if(partnow==4){partfocus('k4');return false;}
			if(partnow==5){partfocus('k5');return false;}   
			if(partnow==6){partfocus('k6');return false;} 
		    if(partnow==7){partfocus('k1');return false;} 
		    if(partnow==8){partfocus('k1');return false;}
		    if(partnow==9){partfocus('k3');return false;}  
		    if(partnow==10){partfocus('k3');return false;} 
		    if(partnow==11){partfocus('fh');return false;} 
		    break;
		    
		    
			case 37://zuo
			case 3:
			//alert(partnow);
			if(partnow==1){partfocus('k1');return false;}
			if(partnow==2){partfocus('k1');return false;}   
			if(partnow==3){partfocus('k2');return false;} 
			if(partnow==4){partfocus('k4');return false;} 
			if(partnow==5){partfocus('k4');return false;}
			if(partnow==6){partfocus('k5');return false;} 
		    if(partnow==7){partfocus('sy');return false;} 
		    if(partnow==8){partfocus('sy');return false;} 
		    if(partnow==9){partfocus('fh');return false;} 
		    if(partnow==10){partfocus('syy');return false;} 
		    if(partnow==11){partfocus('shuru');return false;} 
			break;
			
			

			case 39://you
			case 4:
			if(partnow==1){partfocus('k2');return false;} 
			if(partnow==2){partfocus('k3');return false;}   
			if(partnow==3){partfocus('k3');return false;}
			if(partnow==4){partfocus('k5');return false;} 
			if(partnow==5){partfocus('k6');return false;} 
			if(partnow==6){partfocus('k6');return false;} 
		    if(partnow==7){partfocus('fh');return false;} 
		    if(partnow==8){partfocus('syy');return false;} 
		    if(partnow==9){partfocus('xyy');return false;} 
		    if(partnow==10){partfocus('xyy');return false;} 
		    if(partnow==11){partfocus('xshuru');return false;} 
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
 
function nextpage(id){
	//alert(agent_id[id-1]);
	window.location.href='jingjiren_xiangqing.html?id='+agent_id[id-1];
}
