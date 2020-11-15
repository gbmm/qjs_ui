import {QList} from '../tool/qlist.js'
import {QCanvas} from './qcanvas.js'
import {QObject} from '../core/qobject.js'
import {QPainter,QPen, QPoint} from './qpainter.js'

function QCombobox(parent){
    // parent is div
    QObject.extends(this, QCanvas);
    this.x = 0;
    this.y = 0;
    this.width = 40;
    this.height = 40;
    this.parent = parent;

    this.Constructor = function(){
        this.div = document.createElement("DIV");
        this.input = document.createElement("input");
        this.div.appendChild(this.input);
        this.div.appendChild(this.canvas);
        this.canvas.style.backgroundColor='#000000';
        this.initUI();
        this.div.that = this;
        this.parent.appendChild(this.div);
        this.input.that = this;
        this.input.onfocus = function(ev){
            this.that.showDrop(true);
        }
        this.input.onblur = function(ev){
            this.that.showDrop(false);
        }
    }

    this.initUI = function(){
        this.setStyle({
            "width": this.width,
            "height": this.height,
            "left": this.x,
            'top': this.y,
            'position': "absolute",
        }, this.div);
        this.setStyle({
            "width": this.width,
            "height": this.height
        }, this.input);
        this.setStyle({
            "width": this.width,
            "height": 60
        }, this.canvas);
    }

    this.resize = function(w,h){
        this.width = w;
        this.height = h;
        this.canvas.width = w;
        // this.canvas.height = h;
    }

    this.showDrop = function(flag){
        if(flag){
            this.setStyle({"display": "inline"}, this.canvas);
        }else{
            this.setStyle({"display": "none"}, this.canvas);
        }
    }

    this.setPosition = function(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.initUI(); 
    }

    this.Constructor();
}

export {QCombobox};