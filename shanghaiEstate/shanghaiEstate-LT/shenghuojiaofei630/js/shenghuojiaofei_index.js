var partnow;
var billTypelist = new Array;
var billMonthlist = new Array;
var billAmtlist = new Array;
var pagenow = 1;
var pagemax;
var datalength;
var pricet=0;
var entityNo;
window.onload = function(){
		document.getElementById('butqr').focus();
		kpress();
		getyongfuinfo();
	}


var macNum ='001968341A66';



function getzhangqi(id){
	var billper=id;
	pricet=0;
	xmlhttp=new XMLHttpRequest(); 
	//var poststr = "phoneNo="+phonesend+"&goldNum="+golnum+"&medalNum="+mednum+"&olympicDay="+noday+"&entryStamp=TV&vCode="+yanzhengnumsend;
	var poststr = "mac="+macNum+"&billsPeriord="+billper;
	xmlhttp.open("post","http://192.168.1.58:8081/tv-common/v2.0.0/user/billBindQuery",true);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(poststr);	

	xmlhttp.onreadystatechange=function(){
		//alert(xmlhttp.readyState+ xmlhttp.status); 
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
		var jsonResponse=xmlhttp.responseText;
		var prcvinceJsons=eval("("+jsonResponse+")");
		datalength = prcvinceJsons.data.length;
        //alert(prcvinceJsons.data);
		if(prcvinceJsons.data==''){
			//alert('ok');
			document.getElementById('zdk1').style.display = 'none';
			document.getElementById('zdk2').style.display = 'block';
			document.getElementById('queren').style.display = 'none';
			document.getElementById('butqr').style.display = 'none';
			document.getElementById('next').style.display = 'none';
			document.getElementById('butxzzq').focus();
		}
		else{
			document.getElementById('zdk1').style.display = 'block';
			document.getElementById('zdk2').style.display = 'none';
			document.getElementById('queren').style.display = 'block';
			document.getElementById('butqr').style.display = 'block';
			document.getElementById('next').style.display = 'block';
		for(var i=0;i<datalength;i++){
            if(prcvinceJsons.data[i].billType=='ZD'){billTypelist[i]='基础收视费'}
            var datanum = prcvinceJsons.data[i].billMonth;
            var datanums = new Array();
            datanums=datanum.split("");
            var datayear = datanums[0]+datanums[1]+datanums[2]+datanums[3];
            var datamo = datanums[4]+datanums[5];
            billMonthlist[i] = datayear+'年'+datamo+'月';
            //alert(billMonthlist[i]);
            var yuan = prcvinceJsons.data[i].billAmt/100;
            billAmtlist[i] = yuan.toFixed(2);
            pricet += yuan;
            //alert(billAmtlist[i]);
		}
		pricet = pricet.toFixed(2);
		document.getElementById('itemnum').innerHTML = datalength;
		document.getElementById('pri4').innerHTML = pricet;
		for(var i=1;i<=3;i++){
			var zdk1_partnum = 'zdk1_part'+i;
			document.getElementById(zdk1_partnum).style.display = 'none';
		}
		pagemax = Math.ceil(datalength/3);
		//alert(pagemax);
	    pagechange();
	    }
		//alert(prcvinceJsons.data);
		/*if(prcvinceJsons.data==''){
			document.getElementById('zdk1').style.display = 'none';
			document.getElementById('zdk2').style.display = 'block';
			document.getElementById('queren').style.display = 'none';
			document.getElementById('butqr').style.display = 'none';
			document.getElementById('next').style.display = 'none';
		}
		else{
			document.getElementById('zdk1').style.display = 'block';
			document.getElementById('zdk2').style.display = 'none';
			document.getElementById('queren').style.display = 'block';
			document.getElementById('butqr').style.display = 'block';
			var zdnum = datalength;
			if(zdnum<=3){
				document.getElementById('xy').style.display = 'none';
				document.getElementById('next').style.display = 'none';
			}
			if(zdnum>3){
				document.getElementById('next').style.display = 'block';
			}
			if(prcvinceJsons.data.billType='ZD'){
			document.getElementById('tt1') = '基础收视费';
			}
			var zhangqi = prcvinceJsons.data.billMonth;
			var date= new Array();
        	date=zhangqi.split(""); //字符分割 
			var year = date[0]+date[1]+date[2]+date[3];
			var mo = date[4]+date[5];
			var zqq = year+'年'+mo+'月';
			document.getElementById('dat1').innerHTML = zqq ;
			
			
		}*/
   		}
   	}
  }


function getyongfuinfo(){
	xmlhttp = new XMLHttpRequest();  
	xmlhttp.open("get",'http://192.168.1.58:8081/tv-common/v2.0.0/tv/tvPayMark/get?stbMac='+macNum, true);
	xmlhttp.send(); 
	xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState == 4&&xmlhttp.status == 200){

		var jsonResponse1 = xmlhttp.responseText;
		var prcvinceJsons1 = eval("(" + jsonResponse1 + ")");
		document.getElementById('num').innerHTML = prcvinceJsons1.data.userCertId;
		document.getElementById('name').innerHTML = prcvinceJsons1.data.userName;
		entityNo = prcvinceJsons1.data.entityNo; 
		var tim = prcvinceJsons1.data.currentServerTime;
        var date= new Array();
        date=tim.split(""); //字符分割 
		var year = date[0]+date[1]+date[2]+date[3];
		var mo = date[4]+date[5];
		//var da = date[6]+date[7];
		var zq = year+'年'+mo+'月';
		document.getElementById('da').innerHTML = zq ;
		document.getElementById('tm1').innerHTML = zq ;
		document.getElementById('tm22').innerHTML = zq ;
		document.getElementById('tm32').innerHTML = zq ;
		if(mo-3<=0){
			mo2=mo-3+12;
			year=year-1;
			var zq2 = year+'年'+mo2+'月';
			document.getElementById('tm21').innerHTML = zq2 ;
		}
		if(mo-3>0){
			mo2=mo-3;
			var zq2 = year+'年'+mo2+'月';
			document.getElementById('tm21').innerHTML = zq2 ;
		}
		if(mo-6<=0){
			mo3=mo-6+12;
			year=year-1;
			var zq3 = year+'年'+mo3+'月';
			document.getElementById('tm31').innerHTML = zq3 ;
			}
		if(mo-6>0){
			mo3=mo-6;
			var zq3 = year+'年'+mo3+'月';
			document.getElementById('tm31').innerHTML = zq3 ;
		}

			getzhangqi(1);
           }             
          } 
         }
          
            
function focbtn(id){	
	partnow=id;
	if(id==1){
		document.getElementById('queren').src = 'image_shenghuojiaofei/11.png';
	}
	if(id==2){
		document.getElementById('xzfoc').style.display = 'block';
	}
	if(id==3){
		document.getElementById('jyjlfoc').style.display = 'block';
	}
	if(id==4){
		document.getElementById('fhfoc').style.display = 'block';
	}
	if(id==5){
		document.getElementById('syfoc').style.display = 'block';
	}
	if(id==6){
		document.getElementById('mont1').style.display = 'block';
	}
	if(id==7){
		document.getElementById('mont2').style.display = 'block';
		//document.getElementById('mont1').style.display = 'none';
	}
	if(id==8){
		document.getElementById('mont3').style.display = 'block';
		//document.getElementById('mont1').style.display = 'none';
	}
	if(id==9){

	}
	if(id==10){
		document.getElementById('xyyfoc').style.display = 'block';
	}
}
function blubtn(id){
	if(id==1){
		 document.getElementById('queren').src= 'image_shenghuojiaofei/10.png';
		}
	if(id==2){
		 document.getElementById('xzfoc').style.display = 'none';
		}
	if(id==3){
		 document.getElementById('jyjlfoc').style.display = 'none';
		}
	if(id==4){
		 document.getElementById('fhfoc').style.display = 'none';
		}
	if(id==5){
		document.getElementById('syfoc').style.display = 'none';
		}
	if(id==6){
		document.getElementById('mont1').style.display = 'none';
	}
	if(id==7){
		document.getElementById('mont2').style.display = 'none';
	}
	if(id==8){
		document.getElementById('mont3').style.display = 'none';
	}
	if(id==9){
	}
	if(id==10){
		document.getElementById('xyyfoc').style.display = 'none';
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
			if(partnow==1){partfocus('butxzzq');return false;}   
		    if(partnow==2){partfocus('butfh');return false;} 
		    if(partnow==3){partfocus('butjyjl');return false;}
		    if(partnow==4){partfocus('butfh');return false;} 
		    if(partnow==5){partfocus('butsy');return false;} 
		    if(partnow==6){partfocus('m1');return false;} 
		    if(partnow==7){partfocus('m2');return false;} 
		    if(partnow==8){partfocus('m3');return false;} 
		    if(partnow==9){partfocus('m4');return false;} 
		    if(partnow==10){partfocus('butfh');return false;} 
			break;

			           
			case 40: //xia
			case 2: //xia
			if(partnow==1){partfocus('butqr');return false;}   
			if(partnow==2){partfocus('butqr');return false;}          
			if(partnow==3){partfocus('butxzzq');return false;}
			if(partnow==4){partfocus('butxzzq');return false;}
			if(partnow==5){partfocus('butxzzq');return false;}   
			if(partnow==6){partfocus('m1');return false;} 
		    if(partnow==7){partfocus('m2');return false;} 
		    if(partnow==8){partfocus('m3');return false;}
		    if(partnow==9){partfocus('m4');return false;}  
		    if(partnow==10){partfocus('butqr');return false;} 
		    break;
		    
			case 37://zuo
			case 3:
			//alert(partnow);
			if(partnow==1){partfocus('butqr');return false;}
			if(partnow==2){partfocus('butxzzq');return false;}   
			if(partnow==3){partfocus('butfh');return false;} 
			if(partnow==4){partfocus('butsy');return false;} 
			if(partnow==5){partfocus('butsy');return false;}
			if(partnow==6){partfocus('m1');return false;} 
		    if(partnow==7){partfocus('m1');return false;} 
		    if(partnow==8){partfocus('m2');return false;} 
		    if(partnow==9){partfocus('m4');return false;} 
		    if(partnow==10){partfocus('butxzzq');return false;} 
			break;
			

			case 39://you
			case 4://you
			//alert(partnow);
			if(partnow==1){partfocus('butqr');return false;} 
			if(partnow==2){partfocus('xy');return false;}   
			if(partnow==3){partfocus('butjyjl');return false;}
			if(partnow==4){partfocus('butjyjl');return false;} 
			if(partnow==5){partfocus('butfh');return false;} 
			if(partnow==6){partfocus('m2');return false;} 
		    if(partnow==7){partfocus('m3');return false;} 
		    if(partnow==8){partfocus('m3');return false;} 
		    if(partnow==9){partfocus('m4');return false;} 
		    if(partnow==10){partfocus('xy');return false;} 
            break;
            
            
			case 8://返回
			history.go(-1);
			break;
			
			case 13://确定 
			break;
            
            case 56:
			case 33:
			case 372:
            pagenow--;
            if(pagenow<1){pagenow=1}
            pagechange();
            return false;
			break;
            
            case 57:
			case 34:
			case 373:
            pagenow++;
            if(pagenow>pagemax){pagenow=pagemax}
            pagechange();
            return false;
			break;
      }			
      }
  }	 

function partfocus(id){
	document.getElementById(id).focus();
 } 
 
 function openzd(){
 	document.getElementById('popuop2').style.display ='block';
 	document.getElementById('m1').focus()
 }
 function afterchosenmonth1(){
 	document.getElementById('popuop2').style.display ='none';
 	var mont=document.getElementById('benyue').innerHTML;
 	var date=document.getElementById('tm1').innerHTML;	
 	document.getElementById('byzd').innerHTML = mont;
 	document.getElementById('da').innerHTML = date;
 	document.getElementById('butxzzq').focus();
 	getzhangqi(1);
 	
 }
 function afterchosenmonth2(){
 	document.getElementById('popuop2').style.display ='none';
 	var mont=document.getElementById('sanyue').innerHTML;
 	var date=document.getElementById('tm2').innerHTML;	
 	document.getElementById('byzd').innerHTML = mont;
 	document.getElementById('da').innerHTML = date;
 	document.getElementById('da').style.left = '810px';
 	document.getElementById('butxzzq').focus();
 	getzhangqi(3);
 }
  function afterchosenmonth3(){//选择账期按钮
 	document.getElementById('popuop2').style.display ='none';
 	var mont=document.getElementById('bannian').innerHTML;
 	var date=document.getElementById('tm3').innerHTML;	
 	document.getElementById('byzd').innerHTML = mont;
 	document.getElementById('da').innerHTML = date;
 	document.getElementById('da').style.left = '790px';
 	document.getElementById('butxzzq').focus();
 	getzhangqi(100);
 }
 
 function queren(){//确认按钮
 	var tot=document.getElementById('pri4').innerHTML;
 	if(tot>=500){
 		document.getElementById('popuop3').style.display ='block';
 		document.getElementById('queren').style.display ='none';
 		document.getElementById('gong').style.left = '886px';
 		document.getElementById('hj').style.left = '948px';
 		document.getElementById('price4').style.left = '998px';
 		document.getElementById('m4').focus();
 	}
	else{
		toyinhangka();
	}
	}
 
function toyinhangka(){
	var tot = document.getElementById('pri4').innerHTML;
    window.location.href = 'shenghuojiaofei_yinhangka.html?s1='+tot+'&s2='+entityNo;
}
function manefanhui(){//关闭满额提示
	document.getElementById('popuop3').style.display ='none';
	document.getElementById('butxzzq').focus();
}

function jisyijilu(){
	window.location.href='shenghuojiaofei_jiaoyijilu.html';
}

function pagechange(){
        //alert('pagenow='+pagenow+'pagemax='+pagemax);
		if (pagenow==pagemax) {
			//alert('max');
			var maxpagelength = datalength+3-pagemax*3;
			//alert('maxpagelength='+maxpagelength);
			for(var i=1;i<=maxpagelength;i++){
				var zdk1_partnum = 'zdk1_part'+i;
				document.getElementById(zdk1_partnum).style.display = 'block';
                var listnum = 3*pagemax-4+i;
                document.getElementById('tt'+i).innerHTML =  billTypelist[listnum];
                document.getElementById('dat'+i).innerHTML = billMonthlist[listnum];
                document.getElementById('pri'+i).innerHTML = billAmtlist[listnum];
			}
		}
		else{
			//alert('else');
			for(var i=1;i<=3;i++){
				var zdk1_partnum = 'zdk1_part'+i;
				document.getElementById(zdk1_partnum).style.display = 'block';
                var listnum = 3*pagenow-4+i;
                document.getElementById('tt'+i).innerHTML =  billTypelist[listnum];
                document.getElementById('dat'+i).innerHTML = billMonthlist[listnum];
                document.getElementById('pri'+i).innerHTML = billAmtlist[listnum];
			}
		}

}
