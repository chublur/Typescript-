// 定义食物类
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;
    constructor() {
        // 获取页面中的food元素赋值给element 后面的！表示该获取的dom元素不可能找不到
        this.element = document.getElementById('food')!;
    }
    // 判断蛇是否吃到食物 坐标相同就行
    // 定义一个获取食物x轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }
    // 定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }
    // 修改食物位置的方法
    change() {
        // 生成随机的位置
        // 食物的位置 最小是0 最大是290
        // 蛇移动一次就是一格 一格就是10 所以食物的坐标必须是整10
        let top = Math.floor(Math.random() * 30) * 10
        let left = Math.floor(Math.random() * 30) * 10
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;