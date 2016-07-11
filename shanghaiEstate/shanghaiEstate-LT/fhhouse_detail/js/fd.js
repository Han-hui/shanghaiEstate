var building_id;
var partnow;
var part2_name = new Array();
var part2_img = new Array();
var part2_page_max; //交易中心认证信息 最大页数
var part2_page_now = 1; //交易中心认证信息 目前页数
var part3_area = new Array();
var part3_price = new Array();
var part3_hx = new Array();
var part3_cx = new Array();
var part3_ms = new Array();
var part3_img = new Array();
var part3_page_max; //小区房型 最大页数
var part3_page_now = 1; //小区房型 目前页数

window.onload = function(){
    getid();
	ajaxget(1);
	document.getElementById('a1').focus();
//	ntv.key.keypress_handle = set_listen_handle;
	document.onsystemevent = set_listen_handle;
    document.onkeypress = set_listen_handle;
    document.onirkeypress = set_listen_handle;
	document.onkeydown = set_listen_handle;
}

function ib_f(id){
	if(id==1){
		partnow = 101;
		document.getElementById('ib').style.display = 'block';
		document.getElementById('ib').style.left = '1039px';
	}
	if(id==2){
		partnow = 102;
		document.getElementById('ib').style.display = 'block';
		document.getElementById('ib').style.left = '1105px';
	}
}

function button_fb(id){ 
     if(id==1){
     	partnow = 103;
       document.getElementById('button_f').style.display = "block";
     }
     if(id==2) {
       document.getElementById('button_f').style.display = "none";
     }
}

function ib_b(){
		document.getElementById('ib').style.display = 'none';
}

function part1f(id){
    partnow = 10+id;
    document.getElementById('spic_f').style.left = id*150+140+'px';
    var bpicnow = "part1_spic"+id;
    document.getElementById('part1_bpic').src = document.getElementById(bpicnow).src;
}

function partf(id){
	document.getElementById("part2_noload").style.display = "none";
	for(var i=1;i<6;i++){
		var iconi = "p"+i+"icon";
        var iconisrc = "image/tab_"+i+"_unfocused.png";
        document.getElementById(iconi).src = iconisrc;
	}
	for(var i=1;i<6;i++){
		var parti = "part"+i;
		document.getElementById(parti).style.display = "none";
	}
    var iconnow = "p"+id+"icon";
    var iconsrc = "image/tab_"+id+"_focused.png";
    document.getElementById(iconnow).src = iconsrc;
    var partid = "part"+id;
    document.getElementById(partid).style.display = "block";
    if(id==1){document.getElementById('spic_f').style.display = "block";}
    if(id==2){document.getElementById('part2_f1').style.display = "block";}
    if(id==3){document.getElementById('part3_f1').style.display = "block";}
    if(id==4){document.getElementById('part4_f1').style.display = "block";}
    if(id==6){document.getElementById('part6_f1').style.display = "block";}
}

function partb(id){
    var iconnow = "p"+id+"icon";
    var iconsrc = "image/tab_"+id+"_unfocused.png";
    document.getElementById(iconnow).src = iconsrc;
    if (id==1) {document.getElementById('spic_f').style.display = "none";}
}

function iconf(id){
	partnow = id;
	var icon_fnow = 'icon_f'+id;
	document.getElementById(icon_fnow).style.display = "block";
}

function iconb(id){
	var icon_fnow = 'icon_f'+id;
	document.getElementById(icon_fnow).style.display = "none";
}

function part2f(id){
    partnow = 20+id;
    //alert(partnow);
    document.getElementById('part2_f1').style.left = id*290+30+'px';
}

function part3f(id){
    partnow = 30+id;
    document.getElementById('part3_f1').style.left = id*153+135+'px';
    document.getElementById('part3_area').innerHTML = part3_area[id-1];
    document.getElementById('part3_price').innerHTML = Math.round(part3_price[id-1]*100)/100;
    document.getElementById('part3_cx').innerHTML = part3_cx[id-1];
    document.getElementById('part3_ms').innerHTML = part3_ms[id-1];
     document.getElementById('part3_hxt').src = "http://192.168.200.46:8170"+part3_img[id-1];
}

function part4f(id){
    partnow = 40+id;
    document.getElementById('part4_f1').style.left = id*132+146+'px';
}

function part4h(id){
    if(id==1){
    	document.getElementById('part4_1').style.display = "block";
    	document.getElementById('part4_2').style.display = "none";
    }
    if(id==2){
    	document.getElementById('part4_2').style.display = "block";
    	document.getElementById('part4_1').style.display = "none";
    }
}

function part6f(id){
    partnow = 60+id;
    document.getElementById('part6_f1').style.left = id*150+140+'px';
    var bpicnow = "part6_spic"+id;
    document.getElementById('part6_bpic').src = document.getElementById(bpicnow).src;
}

function part2_page_next(id){
	if(id>part2_page_max){
		id=part2_page_max;
	}
	if(id<1){
		id=1;
	}
    if(id!==part2_page_max){
    	for(var i=1;i<4;i++){
    		var part2_name_i = 3*id-3+i;
            var part2_name_div = "part2_name"+i;
            var part2_a_block = 'part2_a'+i;
 	     	var part2_name_block = 'part2_name'+i;
            document.getElementById(part2_a_block).style.display = "block";
	 	   	document.getElementById(part2_name_block).style.display = "block";
            document.getElementById(part2_name_div).innerHTML = part2_name[part2_name_i-1];
    	}
    	
    }
    else{
    	for(var i=1;i<=3;i++){
 	   	var part2_a_none = 'part2_a'+i;
 	   	var part2_name_none = 'part2_name'+i;
 	   	document.getElementById(part2_a_none).style.display = "none";
 	   	document.getElementById(part2_name_none).style.display = "none";
 	    }
        var part2_max_length = part2_name.length+3-3*part2_page_max; 
        for(var i=1;i<=part2_max_length;i++){
        	var part2_name_i = 3*id-3+i;
        	var part2_a_block = 'part2_a'+i;
	 	   	var part2_name_block = 'part2_name'+i;
	        document.getElementById(part2_a_block).style.display = "block";
	 	   	document.getElementById(part2_name_block).style.display = "block";
	 	   	document.getElementById(part2_name_block).innerHTML = part2_name[part2_name_i-1];
        }

    }
}

function part3_page_next(id){
	if(id>part3_page_max){
		id=part3_page_max;
	}
	if(id<1){
		id=1;
	}
    if(id!==part3_page_max){
    	for(var i=1;i<7;i++){
    		var part3_name_i = 3*id-3+i;
            var part3_name_div = "part3_hx"+i;
            var part3_a_block = 'part3_a'+i;
 	     	var part3_name_block = 'part3_hx'+i;
            document.getElementById(part3_a_block).style.display = "block";
	 	   	document.getElementById(part3_name_block).style.display = "block";
            document.getElementById(part3_name_div).innerHTML = part3_hx[part3_name_i-1];
    	}
    	
    }
    else{
    	for(var i=1;i<=6;i++){
 	   	var part3_a_none = 'part3_a'+i;
 	   	var part3_name_none = 'part3_name'+i;
 	   	document.getElementById(part3_a_none).style.display = "none";
 	   	document.getElementById(part3_name_none).style.display = "none";
 	    }
        var part3_max_length = part3_hx.length+3-3*part3_page_max; 
        for(var i=1;i<=part3_max_length;i++){
        	var part3_name_i = 6*id-6+i;
        	var part3_a_block = 'part3_a'+i;
	 	   	var part3_name_block = 'part3_hx'+i;
	        document.getElementById(part3_a_block).style.display = "block";
	 	   	document.getElementById(part3_name_block).style.display = "block";
	 	   	document.getElementById(part3_name_block).innerHTML = part3_hx[part3_name_i-1];
        }

    }
    document.getElementById('part3_a1').focus();

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
        building_id = Request['id'];      
}

function changepart(id){
    if(id==5){
        partf(5);
        ajaxget(5);
    }
    else{
        if(id!==1){
           ajaxget(id);
        }
        partf(id);
        var part_focus = 'part'+id+'_a1';
        document.getElementById(part_focus).focus();
       document.getElementById("part2_noload").style.display = "none";
//      document.getElementById("test").innerHTML+=part_focus;
    }
}
