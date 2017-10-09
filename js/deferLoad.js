+(function(){
  var cover = document.createElement('div');
  cover.id = "cover";
  var dote1 = document.createElement('div');
  var dote2 = document.createElement('div');
  var dote3 = document.createElement('div');
  var dote4 = document.createElement('div');
  cover.appendChild(dote1);
  cover.appendChild(dote2);
  cover.appendChild(dote3);
  cover.appendChild(dote4);
  document.documentElement.appendChild(cover);
  cover.style.display = 'block';
})();
function deferLoad(){
  var cover = document.getElementById('cover');
  if(cover && cover.style.display == 'none'){
    cover.style.display = 'block';
    cover.style.opacity = '1';
  }
    setTimeout(function(){
      var num = 1;
      cover.style.opacity = "1";
      var coverT = setInterval(function (){
        if(num  <= 0){
          clearInterval(coverT);
          cover.style.display = "none";
          return;
        }
        num -= 0.1;
        num = num.toFixed(1);
        cover.style.opacity = num;
      },40);
    },200);
}
