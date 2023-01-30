"use strict";
var a;
a = 10;
a = 'hello';
//声明一个变量，同时指定其类型
var b;
// b = 'welcome';
b = 10;
var c;
c = 'welcome';
//声明变量直接进行赋值   当变量于赋值是同时进行时，TS会自动检测变量的类型
var d = false;
//函数返回值的类型 ：number
function sum(e, f) {
    return e + f;
}
console.log(sum(111, 222));
