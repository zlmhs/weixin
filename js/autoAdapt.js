function resetZoom(){
    var winW = document.documentElement.clientWidth;
    var winH = document.documentElement.clientHeight;
    var wrap = document.getElementsByClassName('wrap')[0];
    var scale = winW/750;
    // var realH = winH/scale;
    document.body.style.zoom = scale;
    // wrap.style.height = realH-108 +'px';
}
window.onresize = window.onload = function () {
    resetZoom();
}
// function resetFont(){
//   var html=document.getElementsByTagName("html")[0];
//   var width=document.documentElement.clientWidth;
//   var scale = width*100/750;
//   html.style.fontSize=scale + "px";
//   console.log(scale);
// }
// window.onresize=window.onload=function(){
//   resetFont;
// }
