/*---公共部分引用开始---*/
$(function () {
  $(".header").load("/function/header.html");
  $(".footer").load("/function/footer.html");
});
/*---公共部分引用结束---*/

/*屏幕像素检测开始*/
if (screen.width < 368)
  window.location.href = "/function/toonarrow.html";
/*屏幕像素检测结束*/

/*---ie判断开始---*/
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

/*---ie判断结束---*/