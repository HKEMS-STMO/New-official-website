var testV = 3;
var error = 0;
var Correspondingpassword = '';
var accountlist = ['MQSI4818', 'Admin'];
var passwordlist = ['481855MQSI', 'HKEMS-STMO-Admin'];
function verify() {
    var account = AandP.account.value;
    var password = AandP.password.value;
    var sumverify = 0;
    if(testV > 1){
        if(accountlist.indexOf(account) == -1){
            error += 1;
        }
        else{
            sumverify += 1
            var Correspondingpassword = passwordlist[accountlist.indexOf(account)];
        }
        if(sumverify == 1 && Correspondingpassword == password){
            sumverify += 1
        }
        else{
            error += 1;
        }
        if(sumverify == 2){
            overlayverify.style.display = "none";
        }
        else if(error >= 0){
            testV -= 1
            out.innerHTML = '账号或密码错误，你还剩'+ testV+ '次机会';
        }
    }
    else{
        out.innerHTML = '登陆冻结，请刷新或联系管理员';
    }
    document.getElementById("AandP").reset();
}

function dontknow() {
    window.location.href = '/function/Validation-failed.html'
}