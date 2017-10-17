import { Component, ViewChild, ElementRef } from '@angular/core';
import { config } from './config';

@Component({
    templateUrl: './tank.html'
})

export class Tank extends config {
    @ViewChild('stageCanvas') stageCanvas: ElementRef;
    constructor() {
        super();
    }

    ngAfterViewInit() {
        this.stageCtx = this.stageCanvas.nativeElement.getContext("2d");
    }
}
