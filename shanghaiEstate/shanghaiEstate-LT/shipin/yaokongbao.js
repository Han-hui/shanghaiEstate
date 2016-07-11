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
		case 4096:
		case 8:
			stopPlay();
			getFan();
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
 var vv2;
    function test(){
	if(vv2==1){return false;}
	else{
		 window.location.href = "video.html?video="+vv1+"&f5=1";
	}
}
(function() {
	var Request = new Object();  //取值时使用无需更改
    	Request = GetRequest();  //取值时使用无需更改 需保证GetRequest()存在;
    	vv1 = Request['video'];
    	vv2 = Request['f5'];
    	test();
	ntv.key.keypress_handle = set_listen_handle;
//	document.getElementById("a1").focus();
//	setTimeout(function(){
		var callback_end = function() {};
		var videos = ["http://192.168.200.46:8170/videos/"+vv1, "http://192.168.200.46:8170/videos/"+vv1];
		ocnmediaplayer(128, 72, 1023, 578, videos, "play", "continue", callback_end);
		
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
//	},300)
})();
function stopPlay(){
//	ntv.stb.ipanel.mediaplayer.stop();
	ntv.stb.mediaplayer.stop();
}
window.onload = function(){	
//	document.getElementById("test").innerHTML = "1111"
	document.getElementById("a1").focus();
}
function next1(){
	stopPlay();
	window.location.href = "../fhhouse_detail/fd.html"
}
