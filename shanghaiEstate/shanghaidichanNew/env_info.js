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
var web_url ="http://192.168.1.151";
//var stbMac = network.ethernets[0].MACAddress;
//var mac_check_url = "http://10.27.107.21:8000/brm/ocn/user/query?userId=11&mac="; //生产环境
var mac_check_url = "https://219.233.47.225:8880/RemoteBackend/bill/getBillAcct?userId=1&mac="; 

var get_mac_address = function(){
	//var Mac = stbMac.split("-");
	//var truemac="";
    //for (var i=0;i<Mac.length ;i++ ) { 
    //	truemac += Mac[i];
    //} 
    return mac_check_url+'98bc57141529';
}