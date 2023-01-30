"use strict";
/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-30 15:39:08
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-30 15:39:14
 * @FilePath: \Web-learning\TypeScript\second\接口.ts
 * @Description:
 *
 */
(function () {
    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    * */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好~~');
        }
    }
})();
