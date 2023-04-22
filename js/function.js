/*---公共部分引用开始---*/
$(function () {
  $(".header").load("/function/header.html");
  $(".footer").load("/function/footer.html");
});
/*---公共部分引用结束---*/

/*屏幕像素检测开始*/
if (screen.width < 368)
  window.location.href = "https://cn.bing.com";
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

/*--用户协议判断开始--*/
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
  }
  return "";
}
function checkCookie() {
  var useagreement = getCookie("popagreement");
  //未同意用户协议
  if (useagreement != "1") {
      overlay.style.display = "block";
  }
  //已同意用户协议及其他状态
  else {
      overlay.style.display = "none";
  }
}
/*--用户协议判断结束--*/

/*--下拉栏与图标变换部分开始--*/
function pull() {
  $(function () {
    $('.collapse').collapse('hide');
  })
  searchpackup();
  wpull.innerHTML = "<button onclick='packup()' style='border-style: none;' class='navbar-toggler text-nowrap'><img alt='packup' src='/images/UI/packup.svg'/></button>";
}
function searpull() {
  $(function () {
    $('.collapse').collapse('hide');
  })
  packup();
  searchpull.innerHTML = "<button onclick='searchpackup()' style='border-style: none;' class='navbar-toggler text-nowrap'><img alt='packup' src='/images/UI/packup.svg'/></button>";
}
function packup() {
  $(function () {
    $('.collapse').collapse('hide');
  })
  wpull.innerHTML = "<button onclick='pull()' class='navbar-toggler collapsed text-nowrap' style='border-style: none;' type='button' data-bs-toggle='collapse' data-bs-target='#pull-down-menu' aria-controls='pull-down-menu' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button>";
}
function searchpackup() {
  $(function () {
    $('.collapse').collapse('hide');
  })
  searchpull.innerHTML = "<button onclick='searpull()' class='navbar-toggler collapsed text-nowrap' style='border-style: none;' type='button' data-bs-toggle='collapse' data-bs-target='#pull-down-search' aria-controls='pull-down-search' aria-expanded='false' aria-label='Toggle navigation'><img alt='packup' src='/images/UI/search.svg'/></button>";
}
function psearch() {
  wsearch.innerHTML = "<a class='nav-link' href='#search' data-bs-toggle='collapse' onclick='csearch()''><img alt='search' src='/images/UI/search.svg'></a>";
  $(function () {
    $('.collapse').collapse('hide');
  })
}
function csearch() {
  wsearch.innerHTML = "<a onclick='psearch()' class='nav-link'><img alt='search pakeup' src='/images/UI/left.svg'></a>";
}
/*---下拉栏与图标变换部分结束---*/

/*--弹窗部分开始--*/
function agree() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  //写入同意条款的cookie，过期时间2043年
  document.cookie = "popagreement = 1; expires=Thu, 18 Dec 2043 12:00:00 GMT ; path=/";
  //初始化位置，避免穿透滑动造成的不在开头
  window.location.href = '#top'
}
function disagree() {
  var params = getURLData()
  window.location.href = 'https://cn.bing.com'
}
/*---弹窗部分结束---*/

/*--搜索函数部分开始--*/
var OurJS = window.OurJS = window.OurJS || {};
OurJS.Search = (function () {
  var $siteSearchForm = $('.site-search')
  var $inputQuery = $siteSearchForm.find('input')
  var $realQuery = $siteSearchForm.find('.realQuery')
  var $btnSubmit = $siteSearchForm.find('.btn')
  var updateQuery = function (e) {
    var query = $inputQuery.val()
    $realQuery.val(query + ' site:hkems-stmo.top ')
  }
  $inputQuery.on('keyup', updateQuery)
  $btnSubmit.on('click', updateQuery)
  updateQuery()
})();
/*--搜索函数部分结束--*/