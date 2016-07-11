var partnow;
var vv1;
var set_listen_handle = function(keycode) {
	//document.getElementById('text1').innerHTML = keycode;
	switch (keycode) {
		case 1:
//			keyPartNow();
			break;
		case 2:
//			keyPartNow();
			break;
		case 3:
//			keyPartNow();
			break;
		case 4:
//			keyPartNow();
			break;
		case 340: //返回
			stopPlay();
			break;
		case 513: //导视
			stopPlay();
			break;
		case 258: //待机
			stopPlay();
			break;
		case 339: //退出
			stopPlay();
			break;
		case 1038: //电视
			stopPlay();
			break;
	}
};
function keyPartNow(){
	if (partnow == 1) {
		document.getElementById('a1').focus();
		return false;
	}
	if (partnow == 2) {
		document.getElementById('a2').focus();
		return false;
	}
	if (partnow == 3) {
		document.getElementById('a3').focus();
		return false;
	}
	if (partnow == 4) {
		document.getElementById('a4').focus();
		return false;
	}
	if (partnow == 5) {
		document.getElementById('a5').focus();
		return false;
	}
}
function addIndex(as, asLength){
	for(var i=0; i< asLength; i++){
		as[i].index = i;
		as[i].onfocus = function(){
			partnow = parseInt(this.index) + 1;
			overdisplay('img' + partnow);
			document.getElementById("test").innerHTML = partnow;
		}
		as[i].onblur = function(){
			outdisplay('img' + partnow);
		}
	}
}
(function() {
	ntv.key.keypress_handle = set_listen_handle;
	setTimeout(function(){
		var callback_end = function() {};
		var videos = ["http://192.168.1.180/shanghaidichanNew/yaokongbao.mp4", "http://192.168.1.180/shanghaidichanNew/yaokongbao.mp4"];
		ocnmediaplayer(416, 100, 448, 252, videos, "play", "continue", callback_end);
				/*
       参数顺序及代表的含义
       x：横坐标
       y：纵坐标
       w：宽度
       h：高度
       url：HTTP视频播放地址
       status:播放状态
       type：播放类型
    */
     //视频循环
	},300)
})();
function stopPlay(){
//	ntv.stb.ipanel.mediaplayer.stop();
	ntv.stb.mediaplayer.stop();
}
window.onload = function(){	
//	var as = document.getElementsByTagName("a");	
//	var asLength = as.length;
//	document.getElementById("a1").focus();
	
	accessRecord("insurance-index.html");
	var Request = new Object(); //取值时使用无需更改
	Request = GetRequest(); //取值时使用无需更改 需保证GetRequest()存在;
	vv1 = Request["from"]; //定义变量取s1的值  当数据中不包括汉字的时候使用 
	function GetRequest() {
		var url = location.search; //获取url中"?"符后的字串
		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}
}
function next1(){
	stopPlay();
	window.location.href="lingqubaoxian/indexNew.html?from=" + vv1;
}
function next2(){
	stopPlay();
	window.location.href = "tangniaobing/taiping_index.html?from=" + vv1;
}
function next3(){
	stopPlay();
	window.location.href="lingqubaoxian/index.html";
}
function next4(){
	stopPlay();
	window.location.href="../shanghaiEstate/shenghuojiaofei.html";
}
function next5(){
	stopPlay();
	window.location.href="../shanghaiEstate/shipin/shanghaiEstate_video.html";
}