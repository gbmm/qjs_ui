import {QList} from '../tool/qlist.js'
import {QCanvas} from './qcanvas.js'
import {QObject} from '../core/qobject.js'
import {QPainter,QPen, QPoint} from './qpainter.js'

function QButton(parent){
    // parent is div
    QObject.extends(this, QCanvas);
    this.x = 0;
    this.y = 0;
    this.width = 40;
    this.height = 30;
    this.radius = 0;
    this.pressColor = ''
    this.background = ''
    this.parent = parent;
    this.linearGradientColor = ['#e7e7e7', '#ddd', '#a7a7a7'];

    this.Constructor = function(){
        this.canvas.that = this;
        this.initStyle();
        this.parent.appendChild(this.canvas);
    }

    this.setFont = function(font){
        this.pen.font = font;
        this.initStyle();
    }

    this.setRadius = function(x){
        this.radius = x;
    }

    this.setBackground =function(color){
        this.background = color;
        this.initStyle();
    }

    this.setLinearGradientColor = function(colors){
        this.linearGradientColor = colors;
    }

    this.setPressColor = function(color){
        this.pressColor = color;
    }

    this.initStyle = function(){
        var ctx = this.canvas.getContext('2d')
        var painter = new QPainter(this.canvas);
        painter.clearRect(0,0,this.width,this.height);
        if(this.background){
            var pen = new QPen(this.background,1, true);
            painter.setPen(pen);
            painter.fillRoundRect(0,0,this.width,this.height,this.radius);
        }else{
            var pen = new QPen('#0000ff',1, true);
            var linear = ctx.createLinearGradient( 0, 0, 0, this.height);
            linear.addColorStop(0,this.linearGradientColor[0]);
            linear.addColorStop(0.5,this.linearGradientColor[1]);
            linear.addColorStop(1,this.linearGradientColor[2]);
            pen.setFillStyle(linear);
            painter.setPen(pen);
            painter.fillRoundRect(0,0,this.width,this.height,this.radius);
            pen.color = '#a0a0a0'
            pen.width = 1;
            painter.strokeRoundRect(0,0,this.width, this.height, this.radius);
        }
        this._setText(this.text);
    }

    this.pressStyle = function(){
        if(this.pressColor){
            var painter = new QPainter(this.canvas);
            painter.clearRect(0,0,this.width,this.height);
            var pen = new QPen(this.pressColor,1, true);
            painter.setPen(pen);
            painter.fillRoundRect(0,0,this.width,this.height,this.radius);
        }else{
            var painter = new QPainter(this.canvas);
            painter.clearRect(0,0,this.width,this.height);
            var pen = new QPen('#0000ff',1, true);
            pen.color = "#b7b7b7";
            painter.setPen(pen);
            painter.fillRoundRect(0,0,this.width,this.height,this.radius);
            pen.color = '#a0a0a0'
            pen.width = 1;
            painter.strokeRoundRect(0,0,this.width, this.height, this.radius);
        }
        this._setText(this.text);
    }

    this.onmousedown = function(ev){
        this.pressStyle();
    }

    this.onmouseup = function(ev){
        this.initStyle();
        this.emit(this, 'click');
    }

    this.onmousemove = function(ev){
        // console.log('mousemove', ev);
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

    this.setText = function(txt){
        this._clear()
        this.text = txt;
        this.initStyle();
        this._setText(txt);
    }

    this.Constructor();

    /////////////////////////// signal
}

export {QButton};