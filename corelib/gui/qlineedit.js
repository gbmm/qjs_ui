import {QList} from '../tool/qlist.js'
import {QCanvas} from './qcanvas.js'
import {QObject} from '../core/qobject.js'
import {QPainter,QPen, QPoint} from './qpainter.js'

function QLineEdit(parent){
    QObject.extends(this, QObject);
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 100;
    this.parent = parent;
    this.input = document.createElement("input");

    this.Constructor = function(){
        this.input.that = this;
        this.parent.appendChild(this.input);
    }

    this.setPosition = function(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.setStyle({
            "left": x,
            'top': y,
            'width': w,
            'height': h,
            'position': "absolute",
            'zIndex': "10",
        }, this.input);
    }

    this.setFont = function(font){
        this.setStyle({"font": font}, this.input);
    }

    this.setColor = function(color){
        this.setStyle({'color': color}, this.input);
    }

    this.getText = function(){
        return this.input.value;
    }

    this.setText = function(txt){
        this.input.value = txt;
    }

    Object.defineProperty(this,'text',{
        set:function(t){
            this.setText(t);
        },
        get:function(){
            return this.getText();
        }
    }) 
    this.Constructor();
}

export {QLineEdit};