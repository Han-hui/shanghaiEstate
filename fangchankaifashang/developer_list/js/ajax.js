var jsonResponse;
var prcvinceJsons;

function ajaxget(id){
   xmlhttp=new XMLHttpRequest(); 
       var get_url = "/api/Developer?offset="+pagenow+"&limit=6";
       getStr =web_url+get_url;  
       xmlhttp.open("get",getStr, true);
       xmlhttp.send(); 
     
     xmlhttp.onreadystatechange=function () {
       if (xmlhttp.readyState == 4&&xmlhttp.status == 200){
             jsonResponse = xmlhttp.responseText;
             prcvinceJsons = eval("(" + jsonResponse + ")");
//           console.log(prcvinceJsons);
             if(prcvinceJsons.length ==0){
             	for(var i=1;i<=6;i++){
			        var a_none = 'a'+i;
			        var part_none = 'part'+i;
			        document.getElementById(a_none).style.display = 'none';
			        document.getElementById(part_none).style.display = 'none';
			      }
             	document.getElementById("back").focus();
             	document.getElementById("previous").style.display = 'none';
		        document.getElementById("next").style.display = 'none';
		        document.getElementById("pg").style.display = 'none';
		        document.getElementById("none").style.display = 'block';
             	return false;
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
      pagemax = Math.ceil(count/6);
      document.getElementById("pg").style.display = "block";
      document.getElementById('pagenow').innerHTML = pagenow;
      document.getElementById('pagemax').innerHTML = pagemax;
        listlength=4;
      if(pagenow==pagemax){
        listlength = count-6*pagenow+6;
        //alert(listlength);
      }
      for(var i=1;i<=6;i++){
        var a_none = 'a'+i;
        var part_none = 'part'+i;
        document.getElementById(a_none).style.display = 'none';
        document.getElementById(part_none).style.display = 'none';
      }
      for(var i=1;i<=listlength;i++){
        var a_block = 'a'+i;
        var part_block = 'part'+i;
        document.getElementById(a_block).style.display = 'block';
        document.getElementById(part_block).style.display = 'block';
        var parts_dn ="dn"+i;
        var parts_di ="di"+i;
        var parts_sn ="sn"+i;
        var parts_bn ="bn"+i;
        var parts_star ="star"+i;
        var startop = prcvinceJsons.lists[i-1].star*22-110;
        document.getElementById(parts_star).style.top = startop+'px';
        document.getElementById(parts_dn).innerHTML = prcvinceJsons.lists[i-1].developer_name;
        document.getElementById(parts_di).innerHTML = prcvinceJsons.lists[i-1].developer_slogan;
        document.getElementById(parts_sn).innerHTML = '('+prcvinceJsons.lists[i-1].star_num+')';
        document.getElementById(parts_bn).innerHTML = prcvinceJsons.lists[i-1].project_num;
        developerid[i-1] = prcvinceJsons.lists[i-1].id;
      }
     

  } 
}