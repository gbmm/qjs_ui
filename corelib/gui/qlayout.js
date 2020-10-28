import {QList} from '../tool/qlist.js'

function QGridLayout(parent){
    this.rows = 0;
    this.cols = 0
    this.datas = new QList();
    this.parent = parent; 
    this.rowSpace = 0;
    this.colSpace = 0;

    this.Constructor = function(){

    } 
    
    this.setParent = function(parent){
        this.parent = parent;
    }

    this.setGrid = function(rows, cols, rowSpace=0, colSpace=0){
        this.rows = rows;
        this.cols = cols;
        this.rowSpace = rowSpace;
        this.colSapce = colSpace;
    }

    this.addElement = function(row, col, element){
        this.datas.append({row: row, col: col, el: element});
    }

    this.update = function(){
        var w = this.parent.width - this.rowSpace*this.rows;
        var h = this.parent.height - this.colSpace*this.cols;
        var ew =  Math.floor(w/this.rows);
        var eh =  Math.floor(h/this.cols);
        for(var item of this.datas){
            var o = item.el;
            o.setPosition(item.row*(ew+this.rowSpace),item.col*(eh+this.colSapce),ew,eh);
        }
    }
} 

function QVLayout(){

}

function QHLayout(){

}

export {QGridLayout};