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
