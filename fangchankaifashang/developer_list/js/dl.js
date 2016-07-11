var ib_f_style = new Array("85px","152px","946px","1105px");
var partnow;
var pagenow = 1;
var pagemax;
var developerid = new Array;


window.onload = function(){
    ajaxget(1);
    ntv.key.keypress_handle = set_listen_handle;
    document.getElementById('index').focus();
    document.getElementById("previous").style.display = "none";
    document.getElementById("next").style.display = "none";
	document.getElementById("a1").style.display = "none";
}

function part_fo(id){
	//alert(partnow);
	partnow = id;
	if(id<100){
     var part_f = 'part_bg'+id;  
     document.getElementById(part_f).src = 'image/part_focus.png';
    }
    if(id>100){
	document.getElementById('ib_f').style.display = "block";
    document.getElementById('ib_f').style.left = ib_f_style[id-101];
    }
}

function part_br(id){
    if(id<100){
	 var part_b = 'part_bg'+id;  
     document.getElementById(part_b).src = 'image/part_blur.png';
    }
     if(id>100){
     document.getElementById('ib_f').style.display = "none";
    }
 }

 function nextpage(id){
    if(id==1){
        pagenow++;
        if(pagenow>pagemax){
            pagenow = pagemax;
            ajaxget(1);
        }
    }
    if(id==2){
        pagenow--;
        if(pagenow<1){
            pagenow = 1;
            ajaxget(1);
        }
    }
 }

 function dd(id){
    var dd_url = "../developer_detail/dd.html?id="+developerid[id-1]; 
    window.location.href = dd_url;
 }