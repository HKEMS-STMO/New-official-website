/*公共引用*/
$(function () {
  $(".header").load("/function/header.html");
  $(".footer").load("/function/footer.html");
  $(".talk").load("/function/talk.html");
});
/*-公共引用-*/


/*像素检测*/
if (screen.width < 300)
  window.location.href = "/function/toonarrow.html";
/*-像素检测-*/


/*ie判断*/
function isIE() {
  if (!!window.ActiveXObject || 'ActiveXObject' in window || navigator.userAgent.indexOf("Edge") > -1) return true
  else return false
}
//获取url上携带的参数
function getURLData() {
  var url = window.location.href
  var theData = new Object()
  if (url.indexOf('?') != -1) {
    var _index = -1
    if (url.indexOf('?') > url.indexOf('#/')) {
      _index = url.length
    } else {
      _index = url.indexOf('#/')
    }

    var str = url.substring(url.indexOf('?') + 1, _index)
    var strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theData[strs[i].split('=')[0]] = strs[i].split('=')[1]
    }
  }
  return theData
}
//获取浏览器版本
function getIEVersion() {
  var system = {};
  var ua = navigator.userAgent.toLowerCase();
  var s;
  return (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? system.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? system.ie = s[1] : 0;
}
// 判断ie版本，如果小于11则跳转到下载chrome页
var IEVersion = getIEVersion()
if (IEVersion && IEVersion < 10) {
  var params = getURLData()
  window.location.href = '/function/browser.html'
}
/*-ie判断-*/


/*写入控制台*/
console.log("欢迎对本站进行F12调试，Bug反馈，优化建议等请联系我们：HKEMS-STMO@outlook.com")
/*-写入控制台-*/


/*点击效果*/
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("厚德","博学","明志","和谐","探索","进取","勤思","创新");
        var $i = $("<span id='click'></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 100,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
/*-点击效果-*/

    $(function() {
    $(".img-responsive").click(function (){
        debugger
        var _this=$(this);
        imgShow("#outerdiv","#innerdiv","#bigimg",_this);
    });
});