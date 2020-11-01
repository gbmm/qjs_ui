import {QList} from '../tool/qlist.js'
import {QObject} from '../core/qobject.js'
import { Qt } from '../core/qt.js';

function QLayout(parent){
    this.datas = new QList();
    this.parent = parent;
    this.type = Qt.Layout;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    this.Constructor = function(){
    } 
    
    this.setParent = function(parent){
        this.parent = parent;
    }

    this.update = function(){

    }

    this.setLayoutPosition = function(x,y,w, h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    this.setLayout = function(){

    }
}

function QGridLayout(parent){
    QObject.extends(this, QLayout, parent);
    if(this.parent){
        this.parent.setLayout(this);
    } 
    this.rows = 0;
    this.cols = 0
    this.rowSpace = 0;
    this.colSpace = 0;

    this.setGrid = function(rows, cols, rowSpace=0, colSpace=0){
        this.rows = cols;
        this.cols = rows;
        this.rowSpace = rowSpace;
        this.colSpace = colSpace;
    }

    this.addElement = function(row, col, element, rowspan=1, colspan=1){
        this.datas.append({row: row, col: col, el: element, rowsapn: rowspan, colspan: colspan});
    }

    this.update = function(){
        var w = this.parent.width - this.rowSpace*(this.rows-1);
        var h = this.parent.height - this.colSpace*(this.cols-1);
        var ew =  Math.floor(w/this.rows);
        var eh =  Math.floor(h/this.cols);
        for(var item of this.datas){
            var o = item.el;
            var x = item.col*ew + item.col*this.rowSpace;
            var y = item.row*eh + item.row*this.colSpace;
            var _w = ew*item.colspan;
            if(item.colspan > 1){
                _w = _w + this.colSpace * (item.colspan-1);
            }
            var _h = eh*item.rowsapn;
            if(item.rolspan > 1){
                _h = _h + this.rowSpace * (item.rowsapn-1);
            }
            o.setPosition(x, y, _w, _h);
        }
    }
} 

function QVLayout(parent){
    QObject.extends(this, QLayout, parent); 
    if(this.parent){
        this.parent.setLayout(this);
    } 
    this.percents = new QList();

    this.addElement = function(element){
        this.datas.append(element);
    }

    this.setPercents = function(ps){
        this.percents = ps;
    }

    this.update = function(){
        if(this.parent.type === Qt.Widget){
           this.setLayoutPosition(0, 0, this.parent.width, this.parent.height);
        }
        
        var sum = 0;
        var eq = true;
        if(this.percents.length != this.datas.length){
            sum = this.datas.length;
            eq = false;
        }else{
            for(var i of this.percents){
                sum+=i;
            }
        }
        
        var x = this.x;
        var y = this.y;
        var per = 1;
        var ew = this.width;
        for(var i=0; i<this.datas.count(); i++){
            if (eq){
                per = this.percents[i] / sum;
            }else{
                per = 1 / sum;
            }
            var eh = this.height * per;
            if(this.datas[i].hasOwnProperty('setPosition')){
                this.datas[i].setPosition(x,y,ew,eh);
            }
            if(this.datas[i].type === Qt.Layout){
                this.datas[i].setLayoutPosition(x, y, ew, eh);
                this.datas[i].update();
            }
            y += eh;
        }
    }
}

function QHLayout(parent){
    QObject.extends(this, QLayout, parent); 
    if(this.parent){
        this.parent.setLayout(this);
    } 
    this.percents = new QList();

    this.addElement = function(element){
        this.datas.append(element);
    }

    this.setPercents = function(ps){
        this.percents = ps;
    }

    this.update = function(){
        if(this.parent.type === Qt.Widget){
            this.setLayoutPosition(0, 0, this.parent.width, this.parent.height);
        }
        var sum = 0;
        var eq = true;
        if(this.percents.length != this.datas.length){
            sum = this.datas.length;
            eq = false;
        }else{
            for(var i of this.percents){
                sum+=i;
            }
        }
        
        var x = 0;
        var y = 0;
        var per = 1;
        var eh = this.height;
        for(var i=0; i<this.datas.count(); i++){
            if (eq){
                per = this.percents[i] / sum;
            }else{
                per = 1 / sum;
            }
            var ew = this.width * per;
            if(this.datas[i].hasOwnProperty('setPosition')){
                this.datas[i].setPosition(x,y,ew,eh);
            }
            if(this.datas[i].type === Qt.Layout){
                this.datas[i].setLayoutPosition(x, y, ew, eh);
                this.datas[i].update();
            }
            x += ew;
        }
    }
}

export {QGridLayout, QVLayout, QHLayout};