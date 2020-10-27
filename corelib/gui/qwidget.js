import {QList} from '../tool/qlist.js'
import {QCanvas} from './qcanvas.js'
import {QObject} from '../core/qobject.js'

function QWidget(parent){
    QObject.extends(this, QObject);
    this.x = 200;
    this.y = 100;
    this.width = 600;
    this.height = 480;
    this.titleHeight = 30;
    this.isShow = false;
    this.canvas = null;
    this.children = new QList();


    /////////////////////////////////
    this.Constructor = function(){
        this.all_div = document.createElement("DIV");
        this._title_div = document.createElement("DIV");
        this._content_div = document.createElement("DIV");
        this._canvas = new QCanvas(this.x, this.y, this.width, this.height-this.titleHeight);
        this.canvas = this._canvas.getCanvas();
        this._content_div.appendChild(this.canvas);
        this.initUI();
        if(!parent){
            document.body.appendChild(this.all_div);
        }
    }

    this.initUI = function(){
        this.setStyle({
            "width": this.width,
            "height": this.height,
            "left": this.x,
            'top': this.y,
            'position': "absolute",
            'border': "1px solid #a8a8a8",
            'boxShadow': '5px 5px 3px #b8b8b8'
        })

        this.setStyle({
            "width": this.width,
            "height": this.titleHeight,
            "backgroundColor":"#A7C0DC"
        }, this._title_div);
        this.setStyle({
            "width": this.width,
            "height": this.height-this.titleHeight
        }, this._content_div);
        this.all_div.appendChild(this._title_div);
        this.all_div.appendChild(this._content_div);
    }

    this.resize = function(w,h){
        this.width = w;
        this.height = h;
        this.initUI();
    }
    
    this.appendChild = function(child){
        this._content_div.appendChild(child);
    }

    /**
     * 是否包含 x y 坐标
     * @param {*} x 
     * @param {*} y 
     */
    this.in = function(x, y){
        return x>=this.x && y>=this.y && x<=this.width && y<=this.height;
    }

    this.show = function(){
        this.isShow = true;
    }
    /////////////////////////////////
    this.Constructor();
}

export {QWidget};