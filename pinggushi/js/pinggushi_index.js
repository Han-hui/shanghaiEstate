var partnow;
var page_all; //总页数
var page_now = 1; //目前页数
window.onload = function(){
	    ajaxget(1);
		document.getElementById('sy').focus();
		document.getElementById("syy").style.display = "none";
		document.getElementById("k1").style.display = "none";
		kpress();
	}
	function focbtn(id){	
	partnow=id;
	if(id==1){
		document.getElementById('bjk1').src = 'image_pinggushi/01.png';
	}
	if(id==2){
		document.getElementById('bjk2').src = 'image_pinggushi/01.png';
	}
	if(id==3){
		document.getElementById('bjk3').src = 'image_pinggushi/01.png';
	}
	if(id==4){
		document.getElementById('bjk4').src = 'image_pinggushi/01.png';
	}
	if(id==5){
		document.getElementById('bjk5').src = 'image_pinggushi/01.png';
	}
	if(id==6){
		document.getElementById('bjk6').src = 'image_pinggushi/01.png';
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
}
function blubtn(id){
	if(id==1){
		 document.getElementById('bjk1').src = 'image_pinggushi/02.png';
		}
	if(id==2){
		 document.getElementById('bjk2').src = 'image_pinggushi/02.png';
		}
	if(id==3){
		 document.getElementById('bjk3').src = 'image_pinggushi/02.png';
		}
	if(id==4){
		 document.getElementById('bjk4').src = 'image_pinggushi/02.png';
		}
	if(id==5){
		document.getElementById('bjk5').src = 'image_pinggushi/02.png';
		}
	if(id==6){
		document.getElementById('bjk6').src = 'image_pinggushi/02.png';
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
		    if(partnow==9){partfocus('syy');return false;} 
		    if(partnow==10){partfocus('xyy');return false;} 
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
	var s1;
	var s2;
	var s3;
	var s4;
	var s5=id;
	if(id==1){
	s1=document.getElementById('name1').innerHTML;
	s2=document.getElementById('lxf1').innerHTML;
	s3=document.getElementById('jigou1').innerHTML;
	s4=document.getElementById('zyb1').innerHTML;
	}
	if(id==2){
	s1=document.getElementById('name2').innerHTML;
	s2=document.getElementById('lxf2').innerHTML;
	s3=document.getElementById('jigou2').innerHTML;
	s4=document.getElementById('zyb2').innerHTML;
	}
	if(id==3){
	s1=document.getElementById('name3').innerHTML;
	s2=document.getElementById('lxf3').innerHTML;
	s3=document.getElementById('jigou3').innerHTML;
	s4=document.getElementById('zyb3').innerHTML;
	}
	if(id==4){
	s1=document.getElementById('name4').innerHTML;
	s2=document.getElementById('lxf4').innerHTML;
	s3=document.getElementById('jigou4').innerHTML;
	s4=document.getElementById('zyb4').innerHTML;
	}
	if(id==5){
	s1=document.getElementById('name5').innerHTML;
	s2=document.getElementById('lxf5').innerHTML;
	s3=document.getElementById('jigou5').innerHTML;
	s4=document.getElementById('zyb5').innerHTML;
	}
	if(id==6){
	s1=document.getElementById('name6').innerHTML;
	s2=document.getElementById('lxf6').innerHTML;
	s3=document.getElementById('jigou6').innerHTML;
	s4=document.getElementById('zyb6').innerHTML;
	}
	window.location.href='pinggushi_xiangqing.html?name='+s1+"&phon="+s2+"&jg="+s3+"&md1="+s4+"&num="+s5;
}
