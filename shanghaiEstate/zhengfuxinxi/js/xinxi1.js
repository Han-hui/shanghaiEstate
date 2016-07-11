var partnow;
window.onload = function(){
	document.getElementById('a1').focus();
	kpress();
}


function kpress(){
             
             document.onirkeypress = grabEvent1; 
			 document.onkeydown = grabEvent1;
             function grabEvent1(event){
	         var val = event || window.event || arguments.callee.caller.arguments[0];
	         //document.getElementById('text0').innerHTML=val.keyCode;
	         switch(val.keyCode){	
	         	
	         case 38:  //上	
			if(partnow==1){return false;}   //'index'-->'input-search'
		    if(partnow==2){return false;}   //'index'-->'part1a'

			break;
			
			case 40: //xia
			if(partnow==1){return false;}   
			if(partnow==2){return false;}           //'index'-->back

			
			case 37://zuo
			if(partnow==1){return false;}
			if(partnow==2){partfocus('a1');return false;}           //'index'-->back
			break;
			case 39://you
			if(partnow==1){partfocus('a2');return false;}           //'index'-->back
			if(partnow==2){return false;}   
            break;
            
            	
			case 8:  //返回
			history.go(-1);
			break;
			
			case 13:   //确定 
			break;
      }			
      }
  }	 
   function partfocus(id){
  	document.getElementById(id).focus();
  }
function part(id){
	partnow = id;
	displayin('img' + partnow);
}
function part1(id){
		displayout('img' + partnow);
}
function displayin(id){
	document.getElementById(id).style.display = "block";
}
function displayout(id){
	document.getElementById(id).style.display = "none";
}