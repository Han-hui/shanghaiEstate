var agent_address  = "瑞阳苑";
var valuer_agent_id = new Array();
var jsonResponse;
var prcvinceJsons;

function ajaxget(id){
   xmlhttp=new XMLHttpRequest(); 
       var get_url = "/api/Valuer?offset=1&limit=6&address="+agent_address;
       getStr =web_url+get_url;  
       xmlhttp.open("get",getStr, true);
       xmlhttp.send(); 
     
     xmlhttp.onreadystatechange=function () {
       if (xmlhttp.status == 500){ajaxget(1);return false;}
       if (xmlhttp.readyState == 4&&xmlhttp.status == 200){
             jsonResponse = xmlhttp.responseText;
             prcvinceJsons = eval("(" + jsonResponse + ")");
             if(prcvinceJsons.length<=0){
             	for(var i=1;i<=6;i++){
			        var a_none = "k"+i;
			        var part_none = "jjr"+i;
			        document.getElementById(a_none).style.display = "none";
			        document.getElementById(part_none).style.display = "none";
			      }
             	document.getElementById("page").style.display = "none";
             	document.getElementById("syy").style.display = "none";
             	document.getElementById("xyy").style.display = "none";
             	document.getElementById("none").style.display = "block";
             	document.getElementById("fh").focus();
             }else{
             	ajaxput(id);
             }
               //
            }
          }   
     }


function ajaxput(id){
  if(id==1){
      count = prcvinceJsons.count;
      page_all = Math.ceil(count/6);
      document.getElementById("page").style.display = "block";
      document.getElementById('pag1').innerHTML = page_now;
      document.getElementById('pagall').innerHTML = page_all;
      var listlength=6;
      if(page_now==page_all){
        listlength = count-6*page_now+6;
        //alert(listlength);
      }
      for(var i=1;i<=6;i++){
        var a_none = "k"+i;
        var part_none = "jjr"+i;
        document.getElementById(a_none).style.display = "none";
        document.getElementById(part_none).style.display = "none";
      }
      for(var i=1;i<=listlength;i++){
        var a_block = "k"+i;
        var part_block = "jjr"+i;
        document.getElementById(a_block).style.display = "block";
        document.getElementById(part_block).style.display = "block";
        var parts_name ="name"+i;
        var parts_jg ="jigou"+i;
        //var parts_wz ="wz"+i;
        var parts_zyb = "zyb"+i;
        var parts_lxf = "lxf"+i;
        var parts_star = "star"+i;
        var parts_st = "st"+i; 
        valuer_agent_id[i-1] =  prcvinceJsons.valuer[i-1].id;
        document.getElementById(parts_name).innerHTML = prcvinceJsons.valuer[i-1].valuer_name;
        //if(prcvinceJsons.agent[i-1].company_short_name==null){
        //document.getElementById(parts_jg).innerHTML = '|';  
        //}
        //else{
        //document.getElementById(parts_jg).innerHTML = prcvinceJsons.valuer[i-1].valuer_agent_name; 
       // }
        //document.getElementById(parts_wz).innerHTML = prcvinceJsons.agent[i-1].store_name;
        document.getElementById(parts_lxf).innerHTML = prcvinceJsons.valuer[i-1].phone;
        document.getElementById(parts_star).src = "image_pinggushi/star0"+prcvinceJsons.valuer[i-1].credit_stat+".png";
        document.getElementById(parts_st).src = "image_pinggushi/star0"+prcvinceJsons.valuer[i-1].satisfaction_stat+".png";
        //var plate_name = '';
        //var plate_name_length = prcvinceJsons.agent[i-1].plate_name.length;
        //alert(plate_name_length);
        //for(var q=1;q<2;q++){
          //alert(q);
        //  plate_name += prcvinceJsons.agent[i-1].plate_name[q-1].area_name+'&nbsp'+prcvinceJsons.agent[i-1].plate_name[q-1].plate_name+'&nbsp';
        //}
       // document.getElementById(parts_zyb).innerHTML = plate_name;
      }
      
  } 
}

function pgsindex(id){
    if(id==1){
       page_now++;
       if(page_now>page_all){
        page_now = page_all;
       }
       ajaxget(1);       
    }
    if(id==2){
       page_now--;
       if(page_now<1){
        page_now = 1;
       }
       ajaxget(1);       
    }
}

