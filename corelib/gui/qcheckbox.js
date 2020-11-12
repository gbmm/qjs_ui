import {QList} from '../tool/qlist.js'
import {QCanvas} from './qcanvas.js'
import {QObject} from '../core/qobject.js'
import {QPainter,QPen, QPoint} from './qpainter.js'

function QCheckBox(parent){
    QObject.extends(this, QCanvas);
    this.parent = parent;
    this.checked = false;
    this.press = false;
    
    this.Constructor = function(){
        this.canvas.that = this;
        this.initUI();
        this.parent.appendChild(this.canvas);
    }

    this.initUI = function(){
        var h = this.height * 0.5;
        this.rect = [1,this.height * 0.25,h,h]
        this.pen.setPenStyle('#0000ff',2,false);
        this.painter.drawRect(this.rect[0], this.rect[1], this.rect[2], this.rect[3]);
        this.setCheckable(this.checked);
    }

    this.update = function(){
        this.initUI();
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
            this.checked = !this.checked;
            this.setCheckable(this.checked);
        }
        this.press = false;
        this.emit(this, 'checked', this.checked);
    }

    this.setCheckable = function(flag){
        if(flag){
            var font = this.pen.font;
            this.pen.setFont("28px bold 宋体");
            this.painter.drawText(2, this.height * 0.7, "✔");
            this.pen.setFont(font);
        }else{
            this.painter.clearRect(this.rect[0], this.rect[1], this.rect[2], this.rect[3]);
        }
    }

    this.Constructor();
}

export {QCheckBox};