import {QObject} from '../core/qobject.js'
import {QPen, QPainter} from './qpainter.js'

function QCanvas(x, y, w, h){
    QObject.extends(this, QObject);

    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.text = '';
    this.canvas = document.createElement("canvas");
    this.canvas.width = w;
    this.canvas.height = h;
    this.pen = new QPen();
    this.painter = new QPainter(this.canvas);
    // this.canvas.style.backgroundColor='#000000';

    this.getCanvas = function(){
        return this.canvas;
    }

    this.initStyle = function(){

    }
    
    this.resize = function(w,h){
        this.canvas.width = w;
        this.canvas.height = h;
    }

    this.setPosition = function(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.resize(w,h);
        this.setStyle({
            "left": x,
            'top': y,
            'position': "absolute",
            'zIndex': "10",
        }, this.canvas);
        this.initStyle();
    }

    this._setBackgroundColor = function(color){
        this.canvas.style.backgroundColor=color;
        this.pen.bgcolor = color;
    }

    this._setText = function(text){
        this.painter.setPen(this.pen);
        var fontSize = this.pen.font.split(' ')[0].replace('px', '');
        this.painter.drawText(
            (this.width - Number(fontSize)*text.length)/2, 
            Number(fontSize)+(this.height-Number(fontSize))/2, text);
    }

    this._clear = function(){
        this.painter.clearRect(0,0,this.width,this.height);
    }
}


export {QCanvas};