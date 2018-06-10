/*
var numReg = /^[1-9]\d*$/,//正整数正则表达式
    telReg = /^1[3|4|5|7|8][0-9]{9}$/, //手机号正则表达式
    qqReg = /^[1-9][0-9]{4,14}$/,//qq验证
    priceReg=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
    emailReg= /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;//邮箱验证
    //  ^[a-zA-Z0-9_]{1,}$      // 所有包含一个以上的字母、数字或下划线的字符串
    //  ^[1-9][0-9]{0,}$        // 所有的正整数
    //  ^\-{0,1}[0-9]{1,}$      // 所有的整数
    //  ^[-]?[0-9]+\.?[0-9]+$   // 所有的浮点数
 */
var base = function() {

    return {
        isPC:function(){//判断设备
            var userAgentInfo = navigator.userAgent;
            var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
            }
            return flag;
        },
        scrollreveal:function(){
            if(this.isPC()){//pc端执行hover事件
                window.scrollReveal = new scrollReveal({reset:true});
            }else{ //手机端执行click事件
                window.scrollReveal = new scrollReveal();
            }
        }
    }
}
