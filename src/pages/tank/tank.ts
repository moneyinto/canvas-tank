import { Component, ViewChild, ElementRef } from '@angular/core';
import { Config } from './config';
import { Menu } from './menu';

@Component({
    templateUrl: './tank.html'
})

export class Tank extends Config {
    @ViewChild('stageCanvas') stageCanvas: ElementRef;
    constructor() {
        super();
    }

    ngAfterViewInit() {
        this.initStage();
    }

    initStage() {
        this.stageCanvas.nativeElement.setAttribute('width', this.screenWidth);
        this.stageCanvas.nativeElement.setAttribute('width', this.screenHeight);
        this.stageCtx = this.stageCanvas.nativeElement.getContext('2d');
        new Menu(this.stageCtx);
    }
}
