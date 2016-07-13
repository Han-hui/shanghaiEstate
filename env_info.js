//var web_url ="10.27.107.20"; //production
//var mac_check_url = "http://10.27.107.21:8000/brm/ocn/user/query?userId=11&mac=";//production

//var stbMac = network.ethernets[0].MACAddress;
//var mmdz = "http://192.168.200.103:8880/RemoteBackend/bill/getBillAcct?userId=1&mac=";

//var stbMac = network.ethernets[0].MACAddress;


// // test env
// var web_url = "http://192.168.200.46";//test
// var stbMac = "00-19-68-43-72-59";
// var mac_check_url = "http://192.168.200.35:8000/brm/ocn/user/query?userId=11&mac=";	

//production env
//var web_url ="http://10.27.107.20";// 生产环境
//var web_url ="http://192.168.1.151";
//var stbMac = network.ethernets[0].MACAddress;
//var mac_check_url = "http://10.27.107.21:8000/brm/ocn/user/query?userId=11&mac="; //生产环境
//var mac_check_url = "https://219.233.47.225:8880/RemoteBackend/bill/getBillAcct?userId=1&mac="; 

var web_url = "http://192.168.200.46:8170";//测试环境

var get_mac_address = function(){
	//var Mac = stbMac.split("-");
	//var truemac="";
    //for (var i=0;i<Mac.length ;i++ ) { 
    //	truemac += Mac[i];
    //} 
     //机顶盒类型判断需引入ntv框架
		var browser = ntv.profile.browser;//用于辨别机顶盒类型  ***该方法待测试 如有问题可将下面方法取出分别应用
		
		if(browser == "iPanel"){
		//高清机顶盒获取mac方法
			var stbMac = network.ethernets[0].MACAddress;
		    var Mac = stbMac.split("-");
		    var num1 = "";
		    var truemac;
		    for(i=0;i<Mac.length ;i++ ){ 
		    truemac = num1+=Mac[i];
		    }  
		    return truemac;
	    }

	    else if(browser == "NGB-H"){
	    //智能机顶盒方法 ***待测试
	        var ethernets = Broadband.getAllEthernets();
	        var mac;
			if (ethernets.length > 0) {
				var ethernet = ethernets[0];
				mac = ethernet.MACAddress.replace(/-/g, "");
			} else {
				mac = ethernet.MACAddress.replace(/-/g, "");
			}
			return mac;
	    }

	    else{
	    //pc端方法(写死一条mac地址) 按需要更改
	         return "01";
	    }
    
//  return mac_check_url+'98bc57141529';
}