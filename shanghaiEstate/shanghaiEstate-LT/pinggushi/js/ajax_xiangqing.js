var jsonResponse;
var prcvinceJsons;

function ajaxget(id){
   xmlhttp=new XMLHttpRequest(); 
       var get_url = "/api/Agent/"+agent_id+"/show";
       getStr =web_url+get_url;  
       xmlhttp.open("get",getStr, true);
       xmlhttp.send(); 
     
     xmlhttp.onreadystatechange=function () {
       if (xmlhttp.status == 500){ajaxget(1);return false;}
       if (xmlhttp.readyState == 4&&xmlhttp.status == 200){
             jsonResponse = xmlhttp.responseText;
             prcvinceJsons = eval("(" + jsonResponse + ")");
             ajaxput(id);  //
            }
          }   
     }

function ajaxput(id){
      document.getElementById('phnum').innerHTML = prcvinceJsons.store_tel;
      document.getElementById('zygwnm').innerHTML = prcvinceJsons.agent_name;
      if(prcvinceJsons.company_short_name==null){
        document.getElementById('md1').innerHTML = '|';
      }
      else{
        document.getElementById('md1').innerHTML = prcvinceJsons.company_short_name;
      }
      document.getElementById('md2').innerHTML = prcvinceJsons.store_name;
      if(prcvinceJsons.levelquality==1){document.getElementById("dj").innerHTML= "资格经纪人";}
      if(prcvinceJsons.levelquality==2){document.getElementById("dj").innerHTML= "注册经纪人";}
       var plate_name = '';
       var plate_name_length = prcvinceJsons.plate_name.length;
    
      for(var q=1;q<=plate_name_length;q++){
          plate_name += prcvinceJsons.plate_name[q-1].area_name+'&nbsp'+prcvinceJsons.plate_name[q-1].plate_name+'&nbsp';
      }
      document.getElementById('bk').innerHTML = plate_name;
      document.getElementById('nx').innerHTML = prcvinceJsons.working_years+'年';
      document.getElementById('sta1').src = "jingjiren_image/star0"+prcvinceJsons.credit_stat+".png";
      document.getElementById('sta2').src = "jingjiren_image/star0"+prcvinceJsons.satisfaction_stat+".png";
      document.getElementById('onestar1').innerHTML = "("+prcvinceJsons.one_credit_star+')';
      document.getElementById('twostar1').innerHTML = "("+prcvinceJsons.two_credit_star+')';
      document.getElementById('threestar1').innerHTML = "("+prcvinceJsons.three_credit_star+')';
      document.getElementById('fourstar1').innerHTML = "("+prcvinceJsons.four_credit_star+')';
      document.getElementById('fivestar1').innerHTML = "("+prcvinceJsons.five_credit_star+')';
      document.getElementById('onestar2').innerHTML = "("+prcvinceJsons.one_satisfaction_star+')';
      document.getElementById('twostar2').innerHTML = "("+prcvinceJsons.two_satisfaction_star+')';
      document.getElementById('threestar2').innerHTML = "("+prcvinceJsons.three_satisfaction_star+')';
      document.getElementById('fourstar2').innerHTML = "("+prcvinceJsons.four_satisfaction_star+')';
      document.getElementById('fivestar2').innerHTML = "("+prcvinceJsons.five_satisfaction_star+')';
      var total1 = prcvinceJsons.five_credit_star+prcvinceJsons.four_credit_star+prcvinceJsons.three_credit_star+prcvinceJsons.two_credit_star+prcvinceJsons.one_credit_star;
      document.getElementById('totsta1').innerHTML = "("+total1+')';
      var total2 = prcvinceJsons.five_satisfaction_star+prcvinceJsons.four_satisfaction_star+prcvinceJsons.three_satisfaction_star+prcvinceJsons.two_satisfaction_star+prcvinceJsons.one_satisfaction_star;
      document.getElementById('totsta2').innerHTML = "("+total2+')';
      if(prcvinceJsons.volume3==0){
        document.getElementById('lenum1').innerHTML = '0';
        document.getElementById('lenum2').innerHTML = '0';
        document.getElementById('lenum3').innerHTML = '0';
        document.getElementById('lincov1').style.width = "0px";
        document.getElementById('lincov2').style.width = "0px";
        document.getElementById('lin3').style.width = "0px";
      }
      else{
        document.getElementById('lenum1').innerHTML = prcvinceJsons.volume1;
        document.getElementById('lenum2').innerHTML = prcvinceJsons.volume2;
        document.getElementById('lenum3').innerHTML = prcvinceJsons.volume3;
      }
     }