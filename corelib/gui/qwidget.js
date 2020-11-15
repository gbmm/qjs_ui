import {QList} from '../tool/qlist.js'
import {QCanvas} from './qcanvas.js'
import {QObject} from '../core/qobject.js'
import {Qt} from '../core/qt.js'
import {QButton} from './qbutton.js' 

function QWidget(parent){
    QObject.extends(this, QObject);
    this.x = 200;
    this.y = 100;
    this.width = 700;
    this.height = 420;
    this.oriX = this.x;
    this.oriY = this.y;
    this.oriWidth = this.width;
    this.oriHeight = this.height;
    this.titleHeight = 30;
    this.isShow = false;
    this.canvas = null;
    this.status = Qt.Normal;
    this.type = Qt.Widget;
    this.layout = null;
    this.children = new QList();


    /////////////////////////////////
    this.Constructor = function(){
        this.all_div = document.createElement("DIV");
        this._title_div = document.createElement("DIV");
        this._content_div = document.createElement("DIV");
        this._canvas = new QCanvas(this.x, this.y, this.width, this.height);
        this.canvas = this._canvas.getCanvas();
        this._content_div.appendChild(this.canvas);
        this.initTitle();
        this.initUI();
        
        if(!parent){
            document.body.appendChild(this.all_div);
        }

        // this._title_div.that = this;

        this.all_div.onmousedown = function(ev){
            this.that.onmousedown(ev);
        }

        this.all_div.onmouseup = function(ev){
            this.that.onmouseup(ev);
        }

        this.all_div.onmousemove = function(ev){
            this.that.onmousemove(ev);
        }

        // this._title_div.onmousedown = function(ev){
        //     this.titlepress = true;
        //     this.start = ev;
        //     this.style.cursor = 'move';
        // }
        // this._title_div.onmousemove = function(ev){
        //     if(this.titlepress){
        //         this.style.cursor = 'move';
        //         var px = ev.screenX - this.start.screenX;
        //         var py = ev.screenY - this.start.screenY;
        //         this.that.setStyle({"left": this.that.x+px,'top': this.that.y+py}, this.that.all_div);
        //     }
        // }
        // this._title_div.onmouseout = function(ev){
        //     if(ev && this.titlepress){
        //         var px = ev.screenX - this.start.screenX;
        //         var py = ev.screenY - this.start.screenY;
        //         this.that.x = this.that.x+px;
        //         this.that.y = this.that.y+py;
        //     }
        //     this.titlepress = false;
        //     this.style.cursor = 'default';
        // }
        // this._title_div.onmouseup = function(ev){
        //     if(ev && this.titlepress){
        //         var px = ev.screenX - this.start.screenX;
        //         var py = ev.screenY - this.start.screenY;
        //         this.that.x = this.that.x+px;
        //         this.that.y = this.that.y+py;
        //     }
        //     this.titlepress = false;
        //     this.style.cursor = 'default';
        // }
    }

    this.initUI = function(){
        this.setStyle({
            "width": this.width,
            "height": this.height+this.titleHeight,
            "left": this.x,
            'top': this.y,
            'position': "absolute",
            'border': "1px solid #a8a8a8",
            'boxShadow': '5px 5px 3px #b8b8b8'
        }, this.all_div);

        this.setStyle({
            "width": this.width,
            "height": this.titleHeight,
            "backgroundColor":"#A7C0DC"
        }, this._title_div);
        this.setStyle({
            "width": this.width,
            "height": this.height,
            'position': "absolute"
        }, this._content_div);
        this.all_div.appendChild(this._title_div);
        this.all_div.appendChild(this._content_div);
        this._canvas.resize(this.width, this.height);

        this.miniBtn.setPosition(this.width-100, -this.titleHeight, 30,30);
        this.maxBtn.setPosition(this.width-65, -this.titleHeight, 30,30);
        this.closeBtn.setPosition(this.width-30, -this.titleHeight, 30,30);
    }


    this.initTitle = function(){
        this.miniBtn = new QButton(this);
        this.miniBtn.setFont('18px bold 宋体');
        this.miniBtn.setRadius(5);
        this.miniBtn.setLinearGradientColor(['#BED3E9', '#FFF', '#AFEEEE']);
        this.miniBtn.setPressColor('rgb(190,255,255)');
        this.miniBtn.setText('ー');
        this.connect(this.miniBtn,'click',this,'miniClick');

        this.maxBtn = new QButton(this);
        this.maxBtn.setFont('18px bold 宋体');
        this.maxBtn.setRadius(5);
        this.maxBtn.setLinearGradientColor(['#BED3E9', '#FFF', '#AFEEEE']);
        this.maxBtn.setPressColor('rgb(190,255,255)');
        this.maxBtn.setText('ㇿ');
        this.connect(this.maxBtn,'click',this,'maxClick');

        this.closeBtn = new QButton(this);
        this.closeBtn.setFont('18px bold 宋体');
        this.closeBtn.setRadius(5);
        this.closeBtn.setLinearGradientColor(['#E6A395', '#FFF', '#E6A395']);
        this.closeBtn.setPressColor('rgb(255,0,0)');
        this.closeBtn.setText('×');
        this.connect(this.closeBtn,'click',this,'close');
    }

    this.miniClick = function(){
        if(this.status !== Qt.Mininum){
            var _h = window.document.body.clientHeight - this.titleHeight;
            var _w = 110;
            var x = -this.x-_w;
            if(x+_w <= _w){
                x = 0;
            }
            this.resize(110, this.titleHeight, x, _h, this.status!=Qt.Maxinum);
            this.setStyle({"display": "none"}, this._content_div);
            this.status = Qt.Mininum;
        } 
    }

    this.maxClick = function(){
        if( this.status === Qt.Mininum){
            this.resize(this.oriWidth, this.oriHeight, this.oriX, this.oriY);
            this.setStyle({"display": "inline"}, this._content_div);
            this.status = Qt.Normal;
            return;
        }
        if(this.status === Qt.Normal){
            var _w = window.document.body.clientWidth-20;
            var _h = window.document.body.clientHeight-40;
            this.resize(_w, _h, 0, 0);
            this.status = Qt.Maxinum;
            return;
        }
        if(this.status === Qt.Maxinum){
            this.resize(this.oriWidth, this.oriHeight, this.oriX, this.oriY);
            this.status = Qt.Normal;
            return;
        }
    }

    this.close = function(){
        this.all_div.parentNode.removeChild(this.all_div);
        this.all_div = null;
    }

    this.setLayout = function(layout){
        this.layout = layout;
    }

    this.resize = function(w,h,x=null,y=null, flag=true){
        if(flag){
            this.oriWidth = this.width;
            this.oriHeight = this.height;
        }
        this.width = w;
        this.height = h;
        if(x!==null){
            if(flag){
                this.oriX = this.x;
                this.oriY = this.y;
            }
            this.x = x;
            this.y = y;
        }
        this.update();
    }

    this.update  = function(){
        this.initUI();
        if(this.layout){
            this.layout.update();
        }
    }
    
    this.setWindowFlags = function(x){
        switch(x){
            case Qt.FramelessWindowHint:
                this.setStyle({"display": "none",}, this._title_div);
                this.titleHeight = 0;
                this.resize(this.width, this.height);
                break;
            case Qt.LessWidgetEdge:
                this.setStyle({"boxShadow": "none",}, this.all_div);
                break;
        }

    }

    this.appendChild = function(child){
        this._content_div.appendChild(child);
        this.children.append(child.that);
    }

    /**
     * 是否包含 x y 坐标
     * @param {*} x 
     * @param {*} y 
     */
    this.in = function(x, y, child){
        return x>=child.x && y>=child.y && x<=child.width+child.x && y<=child.height+child.y;
    }

    this.show = function(){
        this.isShow = true;
    }

    this.onmousedown = function(ev){
        this.findChild(ev, 'onmousedown');
    }

    this.onmouseup = function(ev){
        this.findChild(ev, 'onmouseup');
    }

    this.onmousemove = function(ev){
        // console.log('mousemove', ev);
    }

    this.findChild = function(ev, funname){
        let x = ev.clientX - this.x;
        let y = ev.clientY - this.y - this.titleHeight;
        for(let child of this.children){
            if(this.in(x,y,child)){
                if(child.hasOwnProperty(funname)){
                    child[funname]();
                }
            }
        }
    }

    this.setChild = function(o){
        this.all_div.that = o;
    }

    /////////////////////////////////
    this.Constructor();
    // this.all_div.that = this;
}

export {QWidget};