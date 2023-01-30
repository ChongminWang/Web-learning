let a;
a = 10;
a = 'hello';

//声明一个变量，同时指定其类型
let b : number;
// b = 'welcome';
b = 10;

let c : string;
c = 'welcome';

//声明变量直接进行赋值   当变量于赋值是同时进行时，TS会自动检测变量的类型
let d : boolean = false;

//函数返回值的类型 ：number
function sum(e:number,f:number) : number {
    return e + f;
}

console.log(sum(111,222));