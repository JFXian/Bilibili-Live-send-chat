
/*
    Bilibili Live Room.
    © 2014 - 2020 Bilibili Live Department.
    Powered By Fantastic Artwork Vue.js @ Evan You.
    Build: 2020.08.24 - 15:41:21
    Verison: 4.0.0
    Env: production
    ===
    「あなたに逢えなくなって、錆びた時計と泣いたけど…」
    # Carry Your World #
*/
// 实际发送到B站服务器的和在本地显示的似乎不匹配，所以没什么用
//间隔时间
var time = 1000;
// 发送内容
var output = '厉害啊';
// 字符截取
if(output.length > 30)
{
    output = output.slice(0,30);
}

// var inp = document.getElementById('');
// 文本框
var inp = document.getElementsByClassName('chat-input border-box');
// 发送按键
var button = document.getElementsByClassName('bl-button live-skin-highlight-button-bg bl-button--primary bl-button--small');
// 输入事件
var ev = new Event('input');

function sendTxt(){
    inp[0].value = output;
    //模拟输入事件，使能发送按键
    inp[0].dispatchEvent(ev);
    $(button).click();
}

var hdl = window.setInterval(function(){sendTxt();},time);

//终止发送
// window.clearInterval(hdl)；