import { Config } from './config';

export class Stage extends Config {
    private ctx: any;
    private level: any;
    private drawHeigth: any;
    private dir: any;
    private isReady: any;
    private temp: any;
    constructor(context, level) {
        super();
        this.ctx = context;
        this.ctx.fillStyle = "#7f7f7f";
	    this.drawHeigth = 15;
        this.level = level;
        this.dir = 1; //中间切换的方向，1：合上，-1：展开
        this.isReady = false;//标识地图是否已经画好
        this.temp = 0;
    }

    draw() {
        if (this.dir == 1) {
            //temp = 15*15 灰色屏幕已经画完
			if(this.temp == 225){
				//78,14为STAGE字样在图片资源中的宽和高，194,208为canvas中的位置
				this.ctx.drawImage(this.RESOURCE_IMAGE, this.POS['stageLevel'][0], this.POS['stageLevel'][1], 78, 14, 194, 208, 78, 14);
				//14为数字的宽和高，308, 208为canvas中的位置
				//this.levelNum.draw(this.level,308, 208);
				//绘制地图,调用main里面的方法
				//initMap();

			}else if(this.temp == 225 + 600){
				//600即调用了600/15次，主要用来停顿
				this.temp = 225;
				this.dir = -1;
				this.START_AUDIO.play();
			}else{
				this.ctx.fillRect(0, this.temp, 512, this.drawHeigth);
				this.ctx.fillRect(0, 448 - this.temp - this.drawHeigth , 512, this.drawHeigth);
			}
        } else {
            if(this.temp >= 0){
				this.ctx.clearRect(0, this.temp , 512, this.drawHeigth);
				this.ctx.clearRect(0, 448 - this.temp - this.drawHeigth, 512, this.drawHeigth);
			}else{
				this.isReady = true;
			}
        }
        this.temp += this.drawHeigth * this.dir;
    }
}
