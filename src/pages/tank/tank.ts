import { Component, ViewChild, ElementRef } from '@angular/core';
import { Config } from './config';
import { Menu } from './menu';
import { Stage } from './stage';

@Component({
    templateUrl: './tank.html'
})

export class Tank extends Config {
    @ViewChild('stageCanvas') stageCanvas: ElementRef;
    private gameState: any;
    private menu: any;
    private stage: any;
    private level: any;
    constructor() {
        super();
        this.gameState = this.GAME_STATE_MENU;
        this.level = 1;
    }

    ngAfterViewInit() {
        this.initStage();

        setInterval(() => {
            this.gameLoop();
        }, 20);

        document.onkeydown = (e) => {
            this.keyEvent(e.keyCode);
        }
    }

    initStage() {
        this.stageCanvas.nativeElement.setAttribute('width', this.screenWidth);
        this.stageCanvas.nativeElement.setAttribute('height', this.screenHeight);
        this.stageCtx = this.stageCanvas.nativeElement.getContext('2d');
        this.menu = new Menu(this.stageCtx);
        this.stage = new Stage(this.stageCtx, this.level);
    }

    gameLoop() {
        switch (this.gameState) {
            case this.GAME_STATE_MENU:
                this.menu.draw();
                break;
            case this.GAME_STATE_INIT:
                this.stage.draw();
                break;
        }
    }

    keyEvent(keyCode) {
        switch(this.gameState) {
            case this.GAME_STATE_MENU:
                this.selectTank(keyCode);
                break;
        }
    }

    selectTank(keyCode) {
        switch(keyCode) {
            case this.KEY_ENTER:
                this.gameState = this.GAME_STATE_INIT;
                break;
            case this.KEY_UP:
                this.menu.next(1);
                break;
            case this.KEY_DOWN:
                this.menu.next(-1);
                break;
        }
    }
}
