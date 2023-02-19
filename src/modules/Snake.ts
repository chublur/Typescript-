class Snake{
    // 蛇头
    head:HTMLElement;
    // 蛇身（包括蛇头）
    bodies:HTMLCollection;
    // 获取蛇的容器
    element:HTMLElement;
    constructor(){
        this.element =document.getElementById('snake')!;
        this.head =document.querySelector('#snake>div') as HTMLElement;
        this.bodies=document.getElementById('snake')!.getElementsByTagName('div');
    }

    // 获取蛇头的坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    set X(val:number){
        // 如果新值和旧值相同 则直接返回不再修改
        if (this.X===val) {
            return ;
        }
        // X的合法范围0-290之间
        if(val<0||val>290){
            // 进入判断蛇撞墙死了
            throw new Error('蛇撞墙了！')
        }
        // 禁止蛇原地调头
        if(this.bodies[1] &&(this.bodies[1] as HTMLElement).offsetLeft===val){
            // 如果发生了原地调头 让蛇继续移动 不理它
            if(val >this.X){
                // 如果新值val 大于旧值 X 则说明蛇在向右走 此时发生掉头 应该让蛇继续向左走
                val=this.X-10;
            }else{
                // 向左走 
                val = this.X+10;
            }
        }
        // 移动身体
        this.moveBody()
        this.head.style.left = val+'px'
        // 检查有没有撞到自己
        this.checkHeadBody()
    }
    set Y(val:number){
        if (this.Y===val) {
            return ;
        }
        // Y的合法范围0-290之间
        if(val<0||val>290){
            // 进入判断蛇撞墙死了
            throw new Error('蛇撞墙了！')
        }
        // 禁止蛇原地调头
        if(this.bodies[1] &&(this.bodies[1] as HTMLElement).offsetTop===val){
            // 如果发生了原地调头 让蛇继续移动 不理它
            if(val >this.Y){
                // 如果新值val 大于旧值 X 则说明蛇在向右走 此时发生掉头 应该让蛇继续向左走
                val=this.Y-10;
            }else{
                // 向左走 
                val = this.Y+10;
            }
        }
        // 移动身体
        this.moveBody()
        this.head.style.top = val+'px'
        // 检查有没有撞到自己
        this.checkHeadBody()
    }
    // 设置蛇增加身体的方法
    addBody(){
        // 向element添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
    // 定义一个吃完食物后 增加的身体也移动的方法
    moveBody(){
        // 思路：将后边的身体设置为前边身体的位置
        // 第四节=第三节的位置 第二节位置赋值给第三节 蛇头赋值给第一节
        // 遍历获取所有的身体
        for (let i = this.bodies.length-1; i > 0 ; i--) {
            // 获取前边身体的位置
            let X =(this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            // 将值设置到当前的身体
            (this.bodies[i] as HTMLElement).style.left = X + "px";
            (this.bodies[i] as HTMLElement).style.top = Y + "px";
        }
    }
    // 检查头跟身体有没有相撞
    checkHeadBody(){
        // 获取所有身体 检查其是否和蛇头坐标发生重叠
        for(let i=1;i<this.bodies.length;i++){
            let bd =this.bodies[i] as HTMLElement;
            if (this.X===bd.offsetLeft && this.Y===bd.offsetTop) {
                // 说明蛇头撞到了自己身体
                throw new Error("撞到自己了")
            }
        }
    }
}

export default Snake;