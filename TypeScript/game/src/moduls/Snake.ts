/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-01 21:08:51
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-02 13:49:22
 * @FilePath: \Web-learning\TypeScript\game\src\moduls\Snake.ts
 * @Description: 
 * 
 */
class Snake{
    //获取蛇头元素
    head:HTMLElement;
    //获取蛇的身体(包括蛇头)
    bodies:HTMLCollection;
    //获取蛇的容器
    element:HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }


    //获取蛇的坐标（蛇头坐标）
    get X(){
        return this.head.offsetLeft;
    }
    //获取蛇的Y轴坐标
    get Y(){
        return this.head.offsetTop;
    }

    //设置蛇头的坐标
    set X(value){
        //如果新值和旧值相同，则直接返回，不再修改
        if (this.X ===value){
            return
        }
        //X的值是否在合法范围内
        if(value < 0 ||value >290){
            throw new Error("错错了")
        }
        //修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft ===value){
            //如果发生了掉头，让蛇向反方向继续移动
            if(value > this.X){
                //如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.X -10;

            }else{
                value = this.X +10;
            }

        }

        //移动身体
        this.moveBody();

        this.head.style.left = value + 'px';
        //检查有没有撞到自己
        this.checkHeadBody();
    }

    set Y(value){
        if(this.Y === value){
            return
        }
        //Y的值是否在合法范围内
        if(value < 0 ||value >290){
            throw new Error("错错了")
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop ===value){
            //如果发生了掉头，让蛇向反方向继续移动
            if(value > this.Y){
                //如果新值value大于旧值X，则说明蛇在向上走，此时发生掉头，应该使蛇继续向左走
                value = this.Y -10;

            }else{
                value = this.Y +10;
            }

        }
        //移动身体
        this.moveBody();

        this.head.style.top = value + 'px';
        //检查有没有撞到自己
        this.checkHeadBody();
    }

    //设置蛇增加身体的方法
    addBody(){
        //向element中添加一个div
        this.element.insertAdjacentHTML('beforeend','<div></div>');
    }

    //添加一个蛇身体移动的方法
    moveBody(){
        /**
         * 将后边的身体设置为前边身体 的位置
         * 例如: 第四节 = 第三节的位置
         *       第三节 = 二节的位置
         */
        //遍历获取所有的身体
        for(let i=this.bodies.length-1;i>0;i--){
            //获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            //设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + "px";
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';

        }
    }

    checkHeadBody() {
        //获取所有的身体，检查其是否和蛇头坐标发生重叠
        for( let i=1;i<this.bodies.length;i++){
            if(this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop) {
                throw new Error('撞到自己了');
            }
        }
    }
}

export default Snake;