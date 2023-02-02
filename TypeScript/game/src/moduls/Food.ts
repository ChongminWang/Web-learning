/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-01 21:05:03
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-02 13:39:38
 * @FilePath: \Web-learning\TypeScript\game\src\moduls\Food.ts
 * @Description: 
 * 
 */
//定义食物类 Food
class Food{
    //定义一个属性表示食物所对应的元素
    element:HTMLElement;

    constructor(){
        //获取页面中的food元素并将其赋值给element
        this.element = document.getElementById("food")!;
    }

    //定义获取食物x轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }

    //定义获取食物y轴坐标的方法
    get Y(){
        return this.element.offsetTop;
    }

    //修改食物的位置
    change(){
        //生成随机的位置
        //食物的位置最小为0，最大为290
        //蛇移动一次就是一格，一格的大小就是10，要求食物的位置为整10
        //0-1之间的随机数
        let top = Math.round(Math.random()*29)*10;
        let left = Math.round(Math.random()*29)*10;

        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}

export default Food;