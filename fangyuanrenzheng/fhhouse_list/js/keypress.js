var set_listen_handle = function(keycode){
//   document.getElementById('key').innerHTML += keycode;
     switch(keycode)
         {
            
            case 1:
            case 38:
            if(partnow==101){document.getElementById('index').focus();return false;}
            if(partnow==102){document.getElementById('back').focus();return false;}
            if(partnow==103){document.getElementById('previous').focus();return false;}
            if(partnow==104){document.getElementById('next').focus();return false;}

            if(partnow==1){document.getElementById('back').focus();return false;}
            if(partnow==2){document.getElementById('a1').focus();return false;}
            if(partnow==3){document.getElementById('a2').focus();return false;}
            if(partnow==4){document.getElementById('a3').focus();return false;}
            
            
            break;

            case 2:
            case 40:

            if(partnow==101){document.getElementById('a1').focus();return false;}
            if(partnow==102){document.getElementById('a1').focus();return false;}
            if(partnow==103){document.getElementById('a1').focus();return false;}
            if(partnow==104){document.getElementById('a1').focus();return false;}

            if(partnow==1){document.getElementById('a2').focus();return false;}
            if(partnow==2){document.getElementById('a3').focus();return false;}
            if(partnow==3){document.getElementById('a4').focus();return false;}
            if(partnow==4){document.getElementById('a4').focus();return false;}

            break;
            

            case 3:
            case 37:

            if(partnow==101){document.getElementById('index').focus();return false;}
            if(partnow==102){document.getElementById('index').focus();return false;}
            if(partnow==103){document.getElementById('back').focus();return false;}
            if(partnow==104){document.getElementById('previous').focus();return false;}

            if(partnow==1){document.getElementById('a1').focus();return false;}
            if(partnow==2){document.getElementById('a2').focus();return false;}
            if(partnow==3){document.getElementById('a3').focus();return false;}
            if(partnow==4){document.getElementById('a4').focus();return false;}

            break;
            

            
            case 4:
            case 39:
                   
            if(partnow==101){document.getElementById('back').focus();return false;}
            if(partnow==102){document.getElementById('previous').focus();return false;}
            if(partnow==103){document.getElementById('next').focus();return false;}
            if(partnow==104){document.getElementById('next').focus();return false;}

            if(partnow==1){document.getElementById('a1').focus();return false;}
            if(partnow==2){document.getElementById('a2').focus();return false;}
            if(partnow==3){document.getElementById('a3').focus();return false;}
            if(partnow==4){document.getElementById('a4').focus();return false;}

            break;
            
			case 8:
            case 340:
            case 4096:
			getFan();
            break;


            case 593:
            case 4111:
            history.go(0);
            return false;
            break;

             case 372:
            case 33:
            nextpage(2);
            break;

            case 373:
            case 34:
            nextpage(1);
            break;
          
            
   }
 }; 
 function getFan(){
    //机顶盒类型判断需引入ntv框架
		var browser = ntv.profile.browser;//用于辨别机顶盒类型  ***该方法待测试 如有问题可将下面方法取出分别应用
		
		if(browser == "iPanel"){
		//高清机顶盒获取mac方法
			history.go(-1);
			return false;
	    }

	    else{
	    }
}