import {QList} from '../tool/qlist.js'
import {QCanvas} from './qcanvas.js'
import {QObject} from '../core/qobject.js'
import {QPainter,QPen, QPoint} from './qpainter.js'

function QCheckBox(parent){
    QObject.extends(this, QCanvas);
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 100;
    this.parent = parent;
    this.checked = false;
    this.press = false;
    
    this.Constructor = function(){
        this.canvas.that = this;
        this.initUI();
        this.parent.appendChild(this.canvas);
    }

    this.initUI = function(){
        // this.painter.setPen(pen);
        this.pen.setPenStyle('#0000ff',2,false);
        var h = this.height * 0.5;
        this.painter.drawRect(0,this.height * 0.25,h,h);
        this.setCheckable(true);
    }
    
    this.setBackgroundColor = function(color){
        if(color){
            this._setBackgroundColor(color);
        }
    }

    this.setText = function(txt){
        if(!txt){
            return;
        }
        this._clear()
        this.text = txt;
        this.setBackgroundColor(this.pen.bgcolor);
        this._setText(txt);
        this.initUI();
    }

    this.onmousedown = function(ev){
        this.press = true;
    }

    this.onmouseup = function(ev){
        if(this.press){

        }
        this.press = false;
        // this.emit(this, 'click');
    }

    this.setCheckable = function(flag){
        var font = this.pen.font;
        this.pen.setFont("28px bold 宋体");
        this.painter.drawText(2, this.height * 0.7, "✔");
        this.pen.setFont(font);
    }

    this.Constructor();
}

export {QCheckBox};