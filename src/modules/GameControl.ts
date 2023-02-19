// 游戏控制器 控制我们所有类
// 引入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
class GameControls {
    // 定义属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction: string = 'Right';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;
    constructor() {
        this.snake = new Snake()
        this.food = new Food();
        this.scorePanel = new ScorePanel()
        this.init();
    }
    // 游戏的初始化方法 调用后游戏开始
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        // 调用run方法 让蛇移动

        this.run()
    }

    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // 检查按键是否符合游戏设计规定 上下左右

        this.direction = event.key;
    }

    // 创建一个控制蛇移动的方法
    run() {
        //  获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        // 根据按键的方向修改值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        // 检查蛇是否吃到了食物
        this.checkEat(X,Y);


        // 修改蛇的xy值
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch(e:any) {
            alert(e.message+' GAME OVER!');
            this.isLive=false;
        }

        // 蛇活着才开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
    // 定义方法检查蛇是否吃到了食物
    checkEat(X:number,Y:number){
         if (X===this.food.X && Y===this.food.Y) {
            // 吃到了食物的话 食物位置进行重置 分数增加 蛇身增长
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
         }
        

    }

}

export default GameControls;