"use strict";
/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-30 15:34:25
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-30 15:42:13
 * @FilePath: \Web-learning\TypeScript\first\04_types.ts
 * @Description:
 *
 */
// object表示一个js对象
var a;
a = {};
a = function () {
};
// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
var b;
b = { name: '孙悟空', age: 18 };
// [propName: string]: any 表示任意类型的属性
var c;
c = { name: '猪八戒', age: 18, gender: '男', index: true };
/*
*   设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
var d;
// d = function (n1: string, n2: string): number{
//     return 10;
// }
/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组
var e;
e = ['a', 'b', 'c'];
// number[] 表示数值数值
var f;
var g;
g = [1, 2, 3];
/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
var h;
h = ['hello', 123];
/*
* enum 枚举
*
* */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'
};
// console.log(i.gender === Gender.Male);
// &表示同时
var j;
var k;
var l;
var m;
k = 2;
