//引入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//游戏控制器，控制其他所有类
class GameControl{
    //定义三个属性
    //蛇
    snake:Snake;
    //食物
    food:Food;
    //积分牌
    scorePanel:ScorePanel;

    //创建一个属性用来存储蛇的移动方向（按键的方向）
    direction:string='';

    //创建一个属性来记录游戏是否结束
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2);

        this.init();
    }

    //游戏的初始化方法，调用后游戏即开始
    init(){
        //绑定键盘按键按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.run();
    }

    //创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        //需要检查event.key是否合法

        //修改direction属性
        this.direction = event.key;
    }

    //创建一个控制蛇移动的方法
    run(){
        //获取蛇当前的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch(this.direction){
            case 'ArrowUp':
            case 'Up':
                Y -=10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y +=10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -=10;
                break;
            case 'ArrowRight':
            case 'Right':
                X +=10;
                break;
            }

            //检查蛇是否吃到了食物
            this.checkEat(X,Y);

            try{
                //修改蛇的X和Y的值
                this.snake.X = X;
                this.snake.Y = Y;
            }catch(e:any){
                alert(e.message+' GAME OVER!');
                this.isLive = false;
            }


            //开启一个定时调用
            this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);

    }

    //定义一个方法用来检测蛇是否吃到食物
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            //食物位置重置
            this.food.change();
            //蛇增加一节
            this.snake.addBody();
            //分数增加
            this.scorePanel.addScore();
            
        } 
    }
}

export default GameControl;