import { Config } from './config';

// 游戏开始菜单
export class Menu extends Config {
    private ctx: any;
    private x: any;
    private y: any;
    private ys: any;
    private size: any;
    private playNum: any;
    private times: number;
    constructor(context) {
        super();
        this.ctx = context;
        this.y = this.screenHeight;
        this.ys = [250, 281];//两个Y坐标，分别对应1p和2p
        this.size = 27;

        this.playNum = 1;
        this.times = 0;
    }

    draw() {
        this.times++;

        let temp = 0;
        if (parseInt(String(this.times / 6)) % 2 == 0) {
            temp = 0;
        } else {
            temp = this.size;
        }

        if (this.y <= 0) {
            this.y = 0;
        } else {
            this.y -= 5;
        }

        this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
        this.ctx.save();

        //画背景
        this.ctx.drawImage(this.MENU_IMAGE, 0, this.y);

        //画选择坦克
        this.ctx.drawImage(this.RESOURCE_IMAGE, this.POS["selectTank"][0], this.POS["selectTank"][1] + temp, this.size, this.size,
            140, this.y + this.ys[this.playNum - 1], this.size, this.size);

        this.ctx.restore();
    }

    // 选择坦克上下移动
    next(n) {
        this.playNum += n;
        if (this.playNum > 2) {
            this.playNum = 1;
        } else if (this.playNum < 1) {
            this.playNum = 2;
        }
    }
}
