import { Config } from './config';

// 游戏开始菜单
export class Menu extends Config {
    private ctx: any;
    private x: any;
    private y: any;
    private ys: any;
    private size: any;
    private playNum: any;
    private times = 0;
    constructor(context) {
        super();
        this.ctx = context;
        this.y = this.screenHeight;
        this.ys = [250, 281];//两个Y坐标，分别对应1p和2p
        this.x = 140;
        this.size = 27;

        this.playNum = 1;
	    this.times = 0;
    }

    draw() {

    }
}
