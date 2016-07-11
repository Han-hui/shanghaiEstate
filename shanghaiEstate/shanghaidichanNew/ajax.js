//stbMac = network.ethernets[0].MACAddress;高清
//生活缴费首页

var userId;//用户Id
//var mac=getMac();
var mac = "0019682AB8B1";
var timeCha; //时间差

//判断用户是否手机遥控宝用户
function AjaxUserShouji(){
			getStr = "http://192.168.1.58:8081/tv-common/v2.0.0/user/macUserInfo?mac="+mac;
            xmlhttp=new XMLHttpRequest();
            xmlhttp.open("get",getStr, true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send();
            xmlhttp.onreadystatechange=function (){
                if (xmlhttp.readyState== 4 && xmlhttp.status== 200){
	                var jsonResponse=xmlhttp.responseText;
	                var prcvinceJsons=eval("("+jsonResponse+")");
	                var data = prcvinceJsons.data;
	                
	                if(data == ""){
//	                	
//	                	console.log("error");
	                	
	                }else if(isEmptyObject(data)){
	                	window.location.href = "../shanghaiEstate-LT/shenghuojiaofei630/xiazaibangka.html";
//	                	console.log("kong");
	                }else{
	                	var lastOperationTime = data.lastOperationTime;
	                	var currentServerTime = data.currentServerTime;
	                	userId = data.entityNo;
	                	timeCha = parseInt(shijian(currentServerTime)-shijian(lastOperationTime))/1000;
	                	if(timeCha<=5000){
	                		AjaxUserBangka(userId)
	                	}else{
	                		window.location.href = "../shanghaiEstate-LT/shenghuojiaofei630/xiazaibangka.html";
	                	}
//	                	console.log(timeCha);
	                	
//	                	AjaxUserBangka(userId)
	                }
	                
	            }
			}
}
//判断遥控宝用户是否绑卡
function AjaxUserBangka(userid){
	getStr = "http://192.168.1.58:8081/tv-common/v2.0.0/user/macUserInfo?entityNo="+userid+"&mac=0019682AB8B1";
            xmlhttp=new XMLHttpRequest();
            xmlhttp.open("get",getStr, true);
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.send();
            xmlhttp.onreadystatechange=function (){
                if (xmlhttp.readyState== 4 && xmlhttp.status== 200){
	                var jsonResponse=xmlhttp.responseText;
	                var prcvinceJsons=eval("("+jsonResponse+")");
	                var data = prcvinceJsons.data;
	                
	                if(data == ""){
//	                	console.log("error");
	                	
	                }else if(isEmptyObject(data)){
	                	window.location.href = "../shanghaiEstate-LT/shenghuojiaofei630/xiazaibangka.html";
//	                	console.log("kong");
	                }else{
	                	var cardNum = data.cardNum;
	                	if(cardNum>0){
	                		
	                		window.location.href = "../shanghaiEstate-LT/shenghuojiaofei630/shenghuojiaofei_zhangdan_index.html?mac="+mac+"&userId="+userId;
	                	}
//	                	console.log(cardNum);
	                }
	                
	            }
			}
}


//判断对象是否为空
function isEmptyObject(e) {  
    var t;  
    for (t in e)  
        return !1;  
    return !0  
}  
//判断年，月， 日，小时，分钟，秒  20160630154401
function shijian(str){
	var year = str.substr(0,4);
	var mouth = str.substr(4,2);
	var day = str.substr(6,2);
	var hour = str.substr(8,2);
	var min = str.substr(10,2);
	var s = str.substr(12,2);
	var dateStr = year+"/"+mouth+"/"+day+" "+hour+":"+min+":"+s;
	var date = new Date(dateStr).getTime();
	return date;
}
