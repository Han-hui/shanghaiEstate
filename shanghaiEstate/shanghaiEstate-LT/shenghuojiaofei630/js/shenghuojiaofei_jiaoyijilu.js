var partnow;
window.onload = function(){
		document.getElementById('fh').focus();
		kpress();
	}
function focbtn(id){	
	partnow=id;
	if(id==1){
		document.getElementById('fhfoc').style.display = 'block';
	}
	if(id==2){
		document.getElementById('syfoc').style.display = 'block';
	}
}
function blubtn(id){
	if(id==1){
		 document.getElementById('fhfoc').style.display = 'none';
		}
	if(id==2){
		 document.getElementById('syfoc').style.display = 'none';
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
			if(partnow==1){partfocus('fh');return false;}   
		    if(partnow==2){partfocus('sy');return false;} 
			break;
			case 1:  //上	
			if(partnow==1){partfocus('fh');return false;}   
		    if(partnow==2){partfocus('sy');return false;} 
			break;
			           
			case 40: //xia
			if(partnow==1){partfocus('fh');return false;}   
			if(partnow==2){partfocus('sy');return false;}
			break;    
			case 2: //xia
			if(partnow==1){partfocus('fh');return false;}   
			if(partnow==2){partfocus('sy');return false;}
			break;      
			
			case 37://zuo
			//alert(partnow);
			if(partnow==1){partfocus('sy');return false;}
			if(partnow==2){partfocus('sy');return false;}    
			break;
			case 3://zuo
			//alert(partnow);
			if(partnow==1){partfocus('sy');return false;}
			if(partnow==2){partfocus('sy');return false;}    
			break;


			case 39://you
			//alert(partnow);
			if(partnow==1){partfocus('fh');return false;} 
			if(partnow==2){partfocus('fh');return false;}   
            break;
            case 4://you
			//alert(partnow);
			if(partnow==1){partfocus('fh');return false;} 
			if(partnow==2){partfocus('fh');return false;}   
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
