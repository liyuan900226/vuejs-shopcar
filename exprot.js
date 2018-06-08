var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
function multiply(x, y) {
    return x * y;
};

//输出的接口和上面的变量必须一一对应
export {firstName, lastName, year};
export {//对外两个接口f1和f2   都是这个函数
    multiply as f1,
    multiply as f2
}

/*       另外三种方法
    // 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
 */