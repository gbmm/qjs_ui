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
    this.lineHeight = 30;
    this.items = [];

    this.Constructor = function(){
        this.enter = false;
        this.div = document.createElement("DIV");
        this.input = document.createElement("input");
        this.div.appendChild(this.input);
        this.div.appendChild(this.canvas);
        this.canvas.style.border='1px solid #000';
        this.initUI();
        this.div.that = this;
        this.parent.appendChild(this.div);
        this.input.that = this;
        this.showDrop(false);
        this.input.onfocus = function(ev){
            this.that.showDrop(true);
        }
        this.input.onblur = function(ev){
            if(!this.that.enter){
                this.that.showDrop(false);
            }
        }

        this.canvas.that = this; 
        this.canvas.onmousedown = function(ev){
            this.that.enter = true;
        }

        this.canvas.onmouseup = function(ev){
            var index = Math.round((ev.layerY + 5)/this.that.lineHeight) - 1;
            if(index>=0 && index<this.that.items.length){
                this.that.setText(this.that.items[index]);
            }
            this.that.enter = false;
            this.that.showDrop(false);
        }
        this.canvas.onmousemove = function(ev){
            var index = Math.round((ev.layerY + 5)/this.that.lineHeight) - 1;
            
            if(index>=0 && index<this.that.items.length){
                this.that.clearCavans();
                this.that.pen.isBrush = true;
                this.that.pen.color = '#ff0';
                this.that.painter.drawRect(0, this.that.lineHeight*(index), this.that.width, this.that.lineHeight);
                this.that.pen.color = '#000';
                this.that.showItems();
            }
        }
        
    }

    this.setText = function(txt){
        this.input.value = txt;
    }

    this.addItem = function(item){
        this.items.push(item);
        this.update();
    }

    this.addItems = function(items){
        for(var item of items){
            this.items.push(item);
        }
        this.update();
    }

    this.update = function(){
        this.setStyle({
            "width": this.width,
            "height": this.height,
            "left": this.x,
            'top': this.y,
            'position': "absolute",
        }, this.div);
        this.setStyle({
            "width": this.width+2,
            "height": this.height
        }, this.input);
        this.setStyle({
            "width": this.width,
            "height": this.lineHeight*this.items.length
        }, this.canvas);
        this.resize(this.width, this.height);
        this.showItems();
    }

    this.initUI = function(){
        this.update();
    }

    this.resize = function(w,h){
        this.width = w;
        this.height = h;
        this.canvas.width = w;
        this.canvas.height = this.lineHeight*this.items.length;
    }

    this.clearCavans = function(){
        this.painter.clearRect(0,0,this.width,this.lineHeight*this.items.length);
    }

    this.showItems = function(){
        for(var i=0; i<this.items.length; i++){
            this.painter.drawText(5, this.lineHeight*(i+1)-5, this.items[i]);
        }
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