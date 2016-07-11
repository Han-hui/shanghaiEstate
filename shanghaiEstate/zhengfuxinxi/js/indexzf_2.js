var partnow;
window.onload = function(){
	document.getElementById('a5').focus();
	kpress();
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
				if(partnow==1){return false;}   
			    if(partnow==2){return false;} 
			    if(partnow==3){return false;}   
	            if(partnow==4){return false;}
	  			if(partnow==5){partfocus('a1');return false;}
			break;
			
			case 40: //xia
			if(partnow==1){partfocus('a5');return false;}   
			if(partnow==2){partfocus('a5');return false;}         
			if(partnow==3){partfocus('a5');return false;}          
			if(partnow==4){partfocus('a5');return false;} 
			if(partnow==5){return false;} 
			

			
			case 37://zuo
			if(partnow==1){return false;}
			if(partnow==2){partfocus('a1');return false;}          
			if(partnow==3){partfocus('a2');return false;}   
            if(partnow==4){partfocus('a3');return false;}   
            if(partnow==5){return false;} 
			if(partnow==6){return false;} 
			if(partnow==7){return false;} 

			break;

			case 39://you
			if(partnow==1){partfocus('a2');return false;}          
			if(partnow==2){partfocus('a3');return false;}   
			if(partnow==3){partfocus('a4');return false;}
			if(partnow==4){return false;}
			if(partnow==5){return false;}
			if(partnow==6){return false;} 
			if(partnow==7){return false;} 

            break;
            
            	
			case 8:  //返回
			window.location.href = "../../../shanghaidichan/index.html";
			break;
			
			case 13:   //确定 
			break;
			
			 case 1:  //上	
			if(partnow==1){return false;}   
		    if(partnow==2){return false;}  
		    if(partnow==3){return false;}                         
            if(partnow==4){return false;}
  			if(partnow==5){partfocus('a1');return false;}
  			if(partnow==6){partfocus('a5');return false;}
  			if(partnow==7){partfocus('a6');return false;}

			break;
			
			case 2: //xia
			if(partnow==1){partfocus('a5');return false;}   
			if(partnow==2){partfocus('a5');return false;}           
			if(partnow==3){partfocus('a5');return false;}           
			if(partnow==4){partfocus('a5');return false;} 
			if(partnow==5){partfocus('a6');return false;} 
			if(partnow==6){partfocus('a7');return false;} 
			if(partnow==7){return false;}  

			
			case 3://zuo
			if(partnow==1){return false;}
			if(partnow==2){partfocus('a1');return false;}           
			if(partnow==3){partfocus('a2');return false;}   
            if(partnow==4){partfocus('a3');return false;}   
            if(partnow==5){return false;} 
			if(partnow==6){return false;} 
			if(partnow==7){return false;} 

			break;

			case 4://you
			if(partnow==1){partfocus('a2');return false;}          
			if(partnow==2){partfocus('a3');return false;}   
			if(partnow==3){partfocus('a4');return false;}
			if(partnow==4){return false;}
			if(partnow==5){return false;}
			if(partnow==6){return false;} 
			if(partnow==7){return false;} 

            break;
            
            	
			case 340:  //返回
			window.location.href = "../../../shanghaidichan/index.html";
			break;
			
			case 33:  //上一页
			break;
			
			case 372:  //上一页
			break;
			
			case 34:  //上一页
			window.location.href = "../../zfxx2.html";
			break;
			
			case 373:  //上一页
			window.location.href = "../../zfxx2.html";
			break;
      }			
      }
  }	 
  function partfocus(id){
  	document.getElementById(id).focus();
  }
function addIndex(as, asLength){
	for(var i=0; i< asLength; i++){
		as[i].index = i;
		as[i].onfocus = function(){
			partnow = parseInt(this.index) + 1;
			
			if(partnow >4){
				displayin('im' + (partnow-4));
				displayout('img' + (partnow-4));
			} else{
				displayin('ig' + partnow);
			}
//			overdisplay('img' + partnow);
			document.getElementById("test").innerHTML = partnow;
		}
		as[i].onblur = function(){
//			outdisplay('img' + partnow);
			if(partnow >4){
				displayin('img' + (partnow-4));
				displayout('im' + (partnow-4));
			} else{
				displayout('ig' + partnow);
			}
		}
	}
}
function part(id){
	partnow = id;
	if(id >4){
		displayin('im' + (partnow-4));
		displayout('img' + (partnow-4));
	} else{
		displayin('ig' + partnow);
	}
}
function part1(id){
	if(partnow >4){
		displayin('img' + (partnow-4));
		displayout('im' + (partnow-4));
		
	} else{
		displayout('ig' + partnow);
	}
}
function displayin(id){
	document.getElementById(id).style.display = "block";
}
function displayout(id){
	document.getElementById(id).style.display = "none";
}

