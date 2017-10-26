function dropList(){
  $('.dropP select').focus(function(){
    var i = $('select').index(this);
    var x = $('.dropSpan').eq(i).html();
    if ($('.dropSpan').eq(i).html() == x) {
      $('.dropSpan').eq(i).html($('select').eq(i).find('option:selected').text());
      $('.dropSpan').eq(i).attr('abc',$('select').eq(i).find('option:selected').attr('abc'));
    }
    $('.dropSpan').eq(i).css('color','#000000');
  })
  $('.dropP select').change(function(){
    var i = $('select').index(this);
    $('.dropSpan').eq(i).html($('select').eq(i).find('option:selected').text());
    $('.dropSpan').eq(i).attr('abc',$('select').eq(i).find('option:selected').attr('abc'));
    $('.dropSpan').eq(i).css('color','#000000');
  })
}
function checkPhone(phone){
  if(!(/^1[34578]\d{9}$/.test(phone))){
      ownModalFun('手机号错误');
      return false;
  }else{
    return true;
  }
}
function checkFun(){
  $('.checkTrue').blur(function(){
    if ($(this).val() != '') {
      console.log($(this));
      if ($(this).attr('class').indexOf('phone') == '0') {
        console.log('手机号');
        checkPhone($(this).val());
      } else if($(this).attr('class').indexOf('email') == '0') {
        checkemail($(this).val());
      } else if($(this).attr('class').indexOf('cardNum') == '0'){
        checkCard($(this).val());
      }
    }
  })
}
//邮箱验证
function checkemail( email_address ){
  var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
  if ( !regex.test( email_address ) ){
    ownModalFun('电子邮件地址不合法');
     return false;
  }else{
    return true;
  }
 }
 //身份证验证
function checkCard(cardNum){
  var reg=/^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
  var reg2 = /^1[45][0-9]{7}|G[0-9]{8}|P[0-9]{7}|S[0-9]{7,8}|D[0-9]+$/;
  if(!reg.test(cardNum)){
    if (!reg2.test(cardNum)) {
      ownModalFun('请输入合法的身份证/护照');
      return false;
    }
  }
}
function ownModalFun(con){
  $('.modalOwn').html(con);
  $('.modalOwn').fadeIn(500);
  setTimeout(function(){
    $('.modalOwn').fadeOut(500);
  },1500);
}
function ownModalEnrollFun(){
  $('.modalEnroll').fadeIn(500);
  setTimeout(function(){
    $('.modalEnroll').fadeOut(500);
  },1500);
}
function saveAjax(url,data){
  $.ajax({
    url: url,
    type: 'POST',
    data:data,
    success: function(data) {
      console.log(data);
      if(data.code==0){
        console.log(data);
        history.go(-1);
      }else{
        alert(data.msg);
      }
    }
  });
}
function downLoadAppFun(){
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    console.log('android');
      // android的跳转市场的链接
      // location.href='';
  }else{
    console.log('Ios');
      // Ios跳转市场的链接
      // location.href=''; 
  }
}
//检索时间是多久前
function timeCheckFun(startTime,endTime){
  var t = endTime-startTime;
  //获取年数时间差
  var year=parseInt((t/(1000*60*60*24))/365);
  //获取月数时间差
  var month=parseInt((t/(1000*60*60*24))/30);
  //获取天数时间差
  var days=parseInt(t/(1000*60*60*24));
  //获取小时时间差
  var HH=parseInt(t/(1000*60*60));
  //获取分钟时间差
  var mm=parseInt(t/(1000*60));
  //获取秒时间差
  var ss=parseInt(t/(1000));
  var gaidongtime;
  if(days<=1){
    if(ss<=60){
      gaidongtime="刚刚";
    }else if(ss>60&&ss<=60*60){
      gaidongtime=mm+"分钟前";
    }else if(ss>60*60&&ss<=60*60*24){
      gaidongtime=HH+"小时前";
    }else{
      gaidongtime=days+"天前";
    }
  }else if(days<30&&days>1){
    gaidongtime=days+"天前";
  }else if(days>=30&&days<365){
    var days1=parseInt(days/30);
    gaidongtime=days1+"月前";
  }else if(days>=365){
    var days2=parseInt(days/365);
    gaidongtime=days2+"年前";
  }else{
    gaidongtime="历史很久远";
  }
  return gaidongtime;
 }
//  声音类型
 function voiceType(x){
  var obj = {
    "1":"女高音",
    "2":"次女高音",
    "3":"女中音",
    "4":"女低音",
    "5":"男高音",
    "6":"男中音",
    "7":"低男中音",
    "8":"男低音",
    "9":"假声男高音"
  }
  return obj[x];
}
function getYearData(x){
  if (isNaN(x)) {
    return x;
  }
  else{
    var d = new Date(x);
    var Y = d.getFullYear();
    var M = d.getMonth()+1;
    if (M<=9) {
      M = '0'+M;
    }else{
      M = M;
    }
    var day = d.getDate();
    if (day<=9) {
      day = '0'+day
    }else{
      day = day;
    }
    var hour = d.getHours();
    if (hour<10) {
      hour = '0' + hour;
    }else{
      hour = hour ;
    }
    var min = d.getMinutes();
    if (min<10) {
      min = '0' + min;
    } else {
      min = min;
    }
    var sec = d.getSeconds();
    if (sec<10) {
      sec = '0'+sec;
    } else {
      sec = sec;
    }
    return  Y+'.'+M+'.'+day;
  }
}
function musicDropList(){
  $('.musicInputDiv select').focus(function(){
    var i = $('select').index(this);
    var x = $('.musicInputS').eq(i).val();
    if ($('.musicInputS').eq(i).val() == x) {
      $('.musicInputS').eq(i).val($('select').eq(i).find('option:selected').text());
      $('.musicInputS').eq(i).attr('abc',$('select').eq(i).find('option:selected').attr('abc'));
    }
    // $('.musicInputS').eq(i).css('color','#000000');
  })
  $('.musicInputDiv select').change(function(){
    var i = $('select').index(this);
    $('.musicInputS').eq(i).val($('select').eq(i).find('option:selected').text());
    $('.musicInputS').eq(i).attr('abc',$('select').eq(i).find('option:selected').attr('abc'));
    // $('.musicInputS').eq(i).css('color','#000000');
  })
}
function tokenFun(i){
  $.ajax({
      url:httpB+'/zr/web/tWXplayer/getUpload_Token.do',
      type:'POST',
      success:function(data){
          if (data.code == 0) {
              console.log(data);
              $('.tokenUrl'+i).val(data.data.upload_token);
          }
      }
  })
}
function fileClickFun(i,num){
  var date =new Date().getTime();
  $('.getTime'+i).val(date);
  $(".upVideoInput"+i).change(function(){
      var formData = new FormData($("#myform"+i)[0]);
      $.ajax({
          url:"http://upload-z1.qiniu.com",
          type:"post",
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success:function(data){
           if (num == 1) {
             $('.huzhao').attr('src','http://cdn.yinyuewujie.com/'+data.key);
             $('.huzhao').attr('abc','/'+data.key);
             $('.upImgBtn').html('更换个人护照照片页');
           }else if(num == 2){  
             $('.headingImg').attr('src','http://cdn.yinyuewujie.com/'+data.key);
             $('.headingImg').attr('abc','/'+data.key);
           }
          },
          error:function(e){
              alert("错误！！");
          }
      });
  });
}