/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-02-01 21:06:30
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-02-02 13:46:07
 * @FilePath: \Web-learning\TypeScript\game\src\moduls\ScorePanel.ts
 * @Description: 
 * 
 */
//定义表示记分牌的类
class ScorePanel{
    score = 0;
    level = 1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    //设置一个变量来限制等级
    maxLevel:number;
    //设置一个变量来表示多少分时升级
    upScore:number;

    constructor(maxLevel:number=10,upScore:number=10){
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //设置加分的方法
    addScore(){
        // this.score++;
        this.scoreEle.innerHTML = ++this.score+ '';

        //判断当前的分数
        if(this.score % this.upScore ===0){
            this.levelUp();
        }
    }


    //设置水平的方法
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;