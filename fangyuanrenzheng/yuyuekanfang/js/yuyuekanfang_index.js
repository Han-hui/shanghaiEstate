window.onload = function(){
		document.getElementById('fh').focus();
		kpress();
		
   }
 function focbtn(id){
	
	if(id==1){
		partnow=1;
		document.getElementById('shouye').style.display = 'block';

	}
	if(id==2){
		partnow=2;
		document.getElementById('fanhui').style.display = 'block';		
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
             function grabEvent1(event){
	         var val = event || window.event || arguments.callee.caller.arguments[0];
	         //document.getElementById('text0').innerHTML=val.keyCode;
	         switch(val.keyCode){	
	         		                           
			case 1:
			case 38://shang
			if(partnow==1){partfocus('sy');return false;}
			if(partnow==2){partfocus('fh');return false;} 
			break;
			
			case 2:
			case 40:
			if(partnow==1){partfocus('sy');return false;}
			if(partnow==2){partfocus('fh');return false;} 
			break;
			
			case 3://zuo
			case 37://zuo
			if(partnow==1){partfocus('sy');return false;}
			if(partnow==2){partfocus('sy');return false;}           //'index'-->back
			break;
			
			case 4:
			case 39://you
			if(partnow==1){partfocus('fh');return false;}           //'index'-->back
			if(partnow==2){partfocus('fh');return false;}   
            break;
            	
			case 8:  //返回
			history.go(-1);
			break;
			
			case 340:  //返回
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
  