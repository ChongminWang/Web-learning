/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-29 21:03:32
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-29 21:10:37
 * @FilePath: \Web-learning\TypeScript\first\03_types.ts
 * @Description: 
 * 
 */
//直接使用字面量进行赋值
let a :10;
// a = 11 ;

//使用 | 来链接多个类型
let b :number | string;

//any 表示任意类型 变量设置为any后，相当于对该变量关闭了TS的类型检测
//当声明变量不赋值时，TS解析器会将该变量的类型判断为any（隐式any）
let c :any;
c = 10;
c = "we";

//unknown,表示未知类型的值 
//unknown 实际为一个安全类型的any ，它不能直接赋值给其它变量
let d : unknown;


//当一个变量的类型为any时，它可以赋值给任意变量
let s :string;
s =c;
// s=d

if (typeof d=='string')
{
    s=d;
}

//类型断言
/**
 * 语法：
 *     变量 as 类型
 *      <类型>变量
 */
s = d as string;

//void 表示为空，以函数为例，就表示没有返回值的函数
function fun():void{
    // return 10; null 与 undefined 不会报错
}
//never 表示永远不会返回结果
function fun2():never{
    throw new Error('报错了！');
}