// 定义记分牌的类
class ScorePanel {
    // 默认值
    score = 0;
    level = 1;
    // 分数和等级所在的元素 再构造函数中进行初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    // 设置一个变量限制等级
    maxLevel:number;
    // 设置一个变量表示多少分时升级
    upScore:number;
    // 默认为10
    constructor(maxLevel:number=10,upScore:number=10) {
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
    }
    // 设置一个加分的方法
    addScore() {
        // 使分数自增
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数是多少 每10分升一级
        if(this.score%this.upScore===0){
            this.levelup()
        }
    }
    // 提升等级的方法
    levelup() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel