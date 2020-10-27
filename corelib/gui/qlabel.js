import {QList} from '../tool/qlist.js'
import {QCanvas} from './qcanvas.js'
import {QObject} from '../core/qobject.js'
import {QPainter,QPen, QPoint} from './qpainter.js'

function QLabel(parent){
    QObject.extends(this, QCanvas);
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 100;
    this.parent = parent;
    this.parent.appendChild(this.canvas);

    this.Constructor = function(){
        this.canvas.that = this;
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
    }
}

export {QLabel};