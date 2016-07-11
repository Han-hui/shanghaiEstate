var ib_f_style = new Array("85px","152px");
var partnow;
var developerid = 1;


window.onload = function(){
    getid();
    document.getElementById('a1').focus();
    ntv.key.keypress_handle = set_listen_handle;
    ajaxget(1);
}

function part_fo(id){
	partnow = id;
	if(id<100){
     document.getElementById("bg_s").src = 'image/bg_s_focus.png';
    }
    if(id>100){
	document.getElementById('ib_f').style.display = "block";
    document.getElementById('ib_f').style.left = ib_f_style[id-101];
    }
}

function part_br(id){
    if(id<100){
	 document.getElementById("bg_s").src = 'image/bg_s_blur.png';
    }
     if(id>100){
     document.getElementById('ib_f').style.display = "none";
    }
 }



function GetRequest() {    
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) 
            {
                theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
             }
         }
        return theRequest;
    }

function getid(){
        var Request = new Object();  //取值时使用无需更改
        Request = GetRequest();  //取值时使用无需更改 需保证GetRequest()存在;          
        developerid = Request['id'];      
}

function fl(){
//	var tit = getTit();
//	alert(tit);
    var fl_url = "../fhhouse_list/fl.html?id="+developerid;
    window.location.href = fl_url;
}