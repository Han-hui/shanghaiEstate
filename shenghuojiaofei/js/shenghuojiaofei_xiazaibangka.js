var partnow;
window.onload = function(){
		document.getElementById('butfh').focus();
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
	         case 1:  //上 
			if(partnow==1){partfocus('butfh');return false;}   
		    if(partnow==2){partfocus('butsy');return false;}  
			break;
			           
			case 40: //xia
			case 2: //xia
			if(partnow==1){partfocus('butfh');return false;}   
			if(partnow==2){partfocus('butsy');return false;}          
		    break;
		    
			case 37://zuo
			case 3:
			if(partnow==1){partfocus('butsy');return false;} 
			if(partnow==2){partfocus('butsy');return false;} 
			break;
			

			case 39://you
			case 4://you
			  
			if(partnow==1){partfocus('butfh');return false;}
			if(partnow==2){partfocus('butfh');return false;}   
            break;
            
            case 8:
			case 340:  //返回
			case 4096:
			window.location.href = "../../index.html"
			break;
			
			case 13://确定 
			break;
      }			
      }
  }	 

function partfocus(id){
	document.getElementById(id).focus();
 } 
 