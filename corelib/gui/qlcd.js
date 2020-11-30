import {QList} from '../tool/qlist.js'
import {QCanvas} from './qcanvas.js'
import {QObject} from '../core/qobject.js'
import {QPainter,QPen, QPoint} from './qpainter.js'

function QLcd(parent){
    QObject.extends(this, QCanvas);
    this.parent = parent;
    this.number = 1;
    this.linewidth = 8;

    this.Constructor = function(){
        this.canvas.that = this;
        this.initUI();
        this.parent.appendChild(this.canvas);
    }

    this.initUI = function(){
        this.draw();
    }

    this.update = function(){
        this.draw();
    }

    this.draw = function(){
        var points1 = [];
        points1.push(new QPoint(0,0));
        points1.push(new QPoint(this.width,0));
        points1.push(new QPoint(this.width-this.linewidth,this.linewidth));
        points1.push(new QPoint(this.linewidth,this.linewidth));
        points1.push(new QPoint(0,0));
        this.painter.drawLines(points1);

        var points2 = [];
        points2.push(new QPoint(0,this.linewidth));
        points2.push(new QPoint(this.linewidth,this.linewidth*2));
        points2.push(new QPoint(this.linewidth,this.height/2-this.linewidth));
        points2.push(new QPoint(0,this.height/2));
        points2.push(new QPoint(0,this.linewidth));
        this.painter.drawLines(points2);

        var points3 = [];
        points3.push(new QPoint(this.width,this.linewidth));
        points3.push(new QPoint(this.width,this.height/2));
        points3.push(new QPoint(this.width-this.linewidth,this.height/2-this.linewidth));
        points3.push(new QPoint(this.width-this.linewidth,this.linewidth*2));
        points3.push(new QPoint(this.width,this.linewidth));
        this.painter.drawLines(points3);

        var points4 = [];
        points4.push(new QPoint(this.linewidth*2,this.height/2-this.linewidth));
        points4.push(new QPoint(this.width-this.linewidth*2,this.height/2-this.linewidth));
        points4.push(new QPoint(this.width-this.linewidth,this.height/2));
        points4.push(new QPoint(this.linewidth,this.height/2));
        points4.push(new QPoint(this.linewidth*2,this.height/2-this.linewidth));
        this.painter.drawLines(points4);
    }

    this.Constructor();
}

export {QLcd};