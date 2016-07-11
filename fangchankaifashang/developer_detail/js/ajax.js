var jsonResponse;
var prcvinceJsons;
var title;
function ajaxget(id){
   xmlhttp=new XMLHttpRequest(); 
       var get_url = "/api/Developer/"+developerid+"/show";
       getStr =web_url+get_url;  
       xmlhttp.open("get",getStr, true);
       xmlhttp.send(); 
     
     xmlhttp.onreadystatechange=function () {
       if (xmlhttp.readyState == 4&&xmlhttp.status == 200){
             jsonResponse = xmlhttp.responseText;
             prcvinceJsons = eval("(" + jsonResponse + ")");
             ajaxput(id);  //
            }
          }   
     }

//function getTit(){
//	return title;
//}
function ajaxput(id){
  if(id==1){
      document.getElementById('pn').innerHTML = prcvinceJsons.developer_name;
//    title = prcvinceJsons.developer_name;
      if(prcvinceJsons.developer_slogan==""){
        document.getElementById('pi').innerHTML = "|";
      }
      else{
        document.getElementById('pi').innerHTML = prcvinceJsons.developer_slogan;
      }
      var startop = prcvinceJsons.star*24-120;
      document.getElementById('star').style.top = startop+'px';
      document.getElementById('star_num').innerHTML = '('+prcvinceJsons.star_num+')';
      document.getElementById('bn').innerHTML = prcvinceJsons.project_num;
      document.getElementById('part_it').innerHTML = prcvinceJsons.developer_intro;
  } 
}