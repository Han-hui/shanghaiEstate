var partnow;
var abutt;
var inpu;
var abuttimg;
var inpuimg;
var prcvinceJsons;
var listL;
var getStr;
//var web_url1 = "http://10.27.97.219";  //用于搜索地址  
//var web_url2 = "http://10.27.97.219";  //用于接受手机端内容
//var web_url3 = "http://10.27.97.219";  //用于读取mac对应地
var web_url1 = "http://192.168.200.46:8170";  //用于搜索地址  
var web_url2 = "http://192.168.200.46:8170";  //用于接受手机端内容
var web_url3 = "http://192.168.200.46:8170";  //用于读取mac对应地
var truemac;

window.onload = function(){
	///document.getElementById('new').style.display = "none";
	//alert(document.getElementById('new_span1').getElementsByTagName('span')[0].offsetWidth);
	onl();     //部分id选取
	press();   //导入按键逻辑
	//getmac();  //获取mac
	//ajax(3);   //获取mac对应真实地址
	inpu.focus();
	//document.getElementById('new').style.display = "none";
}



function fo(id){   //聚焦动作
	partnow = id;
    if(id==1){
    	abuttimg.src="img/gu_f.png";
    } 
    if(id==2){
    	inpuimg.style.display="block";
        if(inpu.value=="请输入您的地址"){inpu.value="";}
    } 
    if(id==3){
    	document.getElementById("new_f").style.display="block";
    	document.getElementById("new_f").style.top="195px";
    } 
    if(id==4){
    	document.getElementById("new_f").style.display="block";
    	document.getElementById("new_f").style.top="290px";
    } 
    if(id==5){
    	document.getElementById("new_f").style.display="block";
    	document.getElementById("new_f").style.top="385px";
    } 
    if(id==6){
    	document.getElementById("new_back").src="img/back_f.png";
    } 
    if(id==100){
    	document.getElementById("index_f").style.display="block";
    } 
    if(id==101){
    	document.getElementById("back_f").style.display="block";
    } 
}

function bu(id){   //失焦动作
    if(id==1){
    	abuttimg.src="img/gu_b.png";
    } 
    if(id==2){
    	inpuimg.style.display="none";
    	if(inpu.value==""){inpu.value="请输入您的地址";}
    } 
    if(id==3){
    	document.getElementById("new_f").style.display="none";
    } 
    if(id==4){
    	document.getElementById("new_f").style.display="none";
    } 
    if(id==5){
    	document.getElementById("new_f").style.display="none";
    } 
    if(id==6){
    	document.getElementById("new_back").src="img/back_n.png";
    } 
    if(id==100){
    	document.getElementById("index_f").style.display="none";
    } 
    if(id==101){
    	document.getElementById("back_f").style.display="none";
    } 
}

function onl(){
	inpu = document.getElementById('inpu');
	abutt = document.getElementById('abutt');
	inpuimg = document.getElementById('input_f');
	abuttimg = document.getElementById('butt');
}

function ajax(id){
	//truemac = 
	if(id==1){getStr = web_url1+"/api/sellHouse/address/"+inpu.value+"?accessToken=8b4088ab78204ba4bcd0b5367683330e";}
	if(id==2){getStr = web_url2+'/api/tv/input?mac='+truemac+'&accessToken=8b4088ab78204ba4bcd0b5367683330e';  }
    if(id==3){getStr = web_url3+"/RemoteBackend/bill/getBillAcct?userId=1&mac="+truemac;}
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("get",getStr, true);	
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send();

    xmlhttp.onreadystatechange=function (){ 
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		var jsonResponse=xmlhttp.responseText;
	    prcvinceJsons=eval("("+jsonResponse+")");
        ajaxfunction(id);
     }
    }
}

function ajaxfunction(id){
	if(id==1){   //用于搜索地址
     ajaxsa();
	}
    if(id==2){   //获取手机端内容
     ajaxget();
	}
	if(id==3){   //用于获取mac对应地址
     ajaxad();
	}
}

function ajaxsa(){  //用于搜索地址
	 document.getElementById('new').style.display = "block";
	 document.getElementById('new_f').style.display = "none";
     listL=prcvinceJsons.length;
     if(listL>3){listL=3;}
     //listL=3;
     if(listL==0){document.getElementById('anewback').focus();}
     else{document.getElementById('anew1').focus();}
     document.getElementById('new_span_top').getElementsByTagName('span')[0].innerHTML = inpu.value;
     document.getElementById('new_span_top').getElementsByTagName('span')[1].innerHTML = listL;
     for(var i=1;i<4;i++){
		var newspan = 'new_span'+i;
		
		document.getElementById(newspan).getElementsByTagName('span')[0].innerHTML = '';
	}
	for(var i=1;i<=listL&i<4;i++){
		var newspan = 'new_span'+i;
		//alert(newspan);
		document.getElementById(newspan).getElementsByTagName('span')[0].innerHTML = prcvinceJsons[i-1].residenceName;
		document.getElementById(newspan).getElementsByTagName('span')[1].innerHTML = prcvinceJsons[i-1].residenceId;
		//document.getElementById(newspan).getElementsByTagName('span')[0].innerHTML = '11111111111111111111111111111111111111111111111111111111111111111111';
	}

}

function newclose(){
	document.getElementById('new').style.display = "none";
	inpu.focus();
}

function ajaxget(){  //获取手机端内容
	var inputre = prcvinceJsons.input;
	if(inputre=='null'){}
	else{
	inpu.value =inputre;
	}
}

function ajaxad(){
	  if(prcvinceJsons.data=='null'){       
         inpu.value = "请输入您的地址";
      }
      else{       
         var regExp = new RegExp('.+苑|小区|公寓|号|弄|村');
         prcvinceJsons.data.address.match(regExp);  
         var right=RegExp.rightContext;
         var left=RegExp.leftContext;
         var ooo = RegExp.lastContext;
         var right1=right.replace(/[0-9]|[a-zA-Z]|[_]/g,"*");
         var addressnew = prcvinceJsons.data.address;//.replace(right,right1);
         inpu.value = addressnew; 
    }
}

function nextpage(id){
	   var nextspan = 'new_span'+id;
	   var residence_id = document.getElementById(nextspan).getElementsByTagName('span')[1].innerHTML;
	   if(residence_id==""){alert('小区id为空')}
	   else{
	   	var nexturl = 'price/index.html?residence_id='+residence_id;
	   	window.location.href = nexturl;
	   }

}

function getmac(){
	  //高清机顶盒获取mac方法
	   var stbMac = network.ethernets[0].MACAddress;
       var Mac = stbMac.split("-");
       var num1 = "";
        for (i=0;i<Mac.length ;i++ ) 
       { 
       truemac = num1+=Mac[i];
       }
     
     //truemac = window.wst.jsGetMac();  //app方法 

}

function inpuf(){
	document.getElementById('inpu').focus();
}


function press(){
             //document.onkeypress = grabEvent1;
             document.onirkeypress = grabEvent1;  
			 document.onkeydown = grabEvent1;
             function grabEvent1(event){
	         var val = event || window.event || arguments.callee.caller.arguments[0];
	         var actid = document.activeElement.id;//获取焦点元素id
	         switch(val.keyCode){

	             case 1:	
		         case 38:
		         if(partnow==1){inpu.focus();return false;}  
		         if(partnow==2){document.getElementById('back').focus();return false;}
		         if(partnow==3){return false;}  
		         if(partnow==4){document.getElementById('anew1').focus();return false;}  
		         if(partnow==5){document.getElementById('anew2').focus();return false;}  
		         if(partnow==6){
		         	if(listL==0){return false;}
		         	if(listL==1){document.getElementById('anew1').focus();return false;}
		         	if(listL==2){document.getElementById('anew2').focus();return false;}
		         	if(listL==3){document.getElementById('anew3').focus();return false;}
		         }   
		         if(partnow==100){return false;} 
		         if(partnow==101){return false;}
				 break;
				
				 case 2:
				 case 40: 
				 if(partnow==1){return false;}  
		         if(partnow==2){abutt.focus();return false;} 
		         if(partnow==3){
		         	if(listL==1){document.getElementById('anewback').focus();return false;}
		         	else{document.getElementById('anew2').focus();return false;}
		         } 
		         if(partnow==4){
		         	if(listL==2){document.getElementById('anewback').focus();return false;}
		         	else{document.getElementById('anew3').focus();return false;}
		         } 
		         if(partnow==5){
		         	document.getElementById('anewback').focus();return false;
		         } 
		         if(partnow==6){return false;} 
		         if(partnow==100){inpu.focus();return false;} 
		         if(partnow==101){inpu.focus();return false;}
	             break;
				 
				 case 3:
				 case 37:
				 //alert(partnow);
				 //if(actid=='inpu')return ture;
				 if(partnow==1){return false;}  
		         if(partnow==2){inpuf();setTimeout('inpuf()',300)} 
		         if(partnow==3){return false;}  
		         if(partnow==4){return false;}  
		         if(partnow==5){return false;}  
		         if(partnow==6){return false;} 
		         if(partnow==100){return false;} 
		         if(partnow==101){document.getElementById('index').focus();return false;} 
			     break;
               
                 case 4:
				 case 39:
				 //if(actid=='inpu')return ture;
				 if(partnow==1){return false;}  
		         if(partnow==2){inpuf();setTimeout('inpuf()',300)}
		         if(partnow==3){return false;}  
		         if(partnow==4){return false;}  
		         if(partnow==5){return false;}   
		         if(partnow==6){return false;} 
		         if(partnow==100){document.getElementById('back').focus();return false;}   
		         if(partnow==101){return false;} 
	             break;
            
            	
			case 340:  //返回
			case 4096:
			//history.go(-1);
			break;
			
			case 13:   //确定
			
			//ajax(2);
			break;

			
      }			
      }
}