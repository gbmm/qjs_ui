import {QList} from '../tool/qlist.js'

function QPoint(x,y){
    this.x = x;
    this.y = y;
    this.setPoint = function(x,y){
        this.x = x;
        this.y = y;
    } 
}

function QPen(color=null, width=null,ib=null){
    this.color = color || "#000000";
    this.bgcolor = null;
    this.width = width || 1;
    this.isBrush = ib || false;
    this.font = "18px bold 宋体";
    this.fillStyle = null;
    this.setPenStyle =function(color='#000000', width=1, ib=false){
        this.color = color;
        this.width = width;
        this.isBrush = ib;
    }
    this.setFont = function(font){
        this.font = font;
    }
    this.setFillStyle = function(st){
        this.fillStyle = st;
    }
}

function QPainter(c){
    this.canvas = c;
    this.pen = new QPen();

    this.setPen = function(pen){
        this.pen = pen;
    }

    this.drawLine = function(x1, y1, x2, y2){
        var ctx=this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.strokeStyle = this.pen.color;   
        ctx.lineWidth = this.pen.width;
        ctx.stroke();
    }

    this.drawLines = function(points){
        if(points.count() < 1){
            return;
        }
        var ctx=this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(points[0].x,points[0].y);
        for(var i = 0; i < points.length-1; i++){
            ctx.lineTo(points[i+1].x,points[i+1].y);
            ctx.strokeStyle = this.pen.color;   
            ctx.lineWidth = this.pen.width;
            ctx.stroke();
        }
    }

    this.drawRect = function(x,y,w,h){
        var ctx=this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.lineWidth = 20;
        ctx.lineWidth = this.pen.width;
        if(this.pen.isBrush){
            if(this.pen.fillStyle){
                ctx.fillStyle=this.pen.fillStyle;
            }else{
                ctx.fillStyle=this.pen.color;
            }
            ctx.fillRect(x,y,w,h);
        }else{
            ctx.strokeStyle = this.pen.color; 
            ctx.rect(x,y,w,h);
        }
        ctx.stroke();
    }

    this.drawText = function(x,y,txt){
        var ctx=this.canvas.getContext("2d");
        ctx.font = this.pen.font;
        ctx.fillStyle = this.pen.color;   
        ctx.fillText(txt, x, y);
    }

    this.drawImage = function(url){
        
    }
    
    this.clearRect = function(x,y,w,h){
        var ctx=this.canvas.getContext("2d");
        ctx.clearRect(x,y,w,h);
    }

    this.fillRoundRect = function(x, y, width, height, radius) {
        //圆的直径必然要小于矩形的宽高          
        if (2 * radius > width || 2 * radius > height) { return false; }
        var ctx=this.canvas.getContext("2d");
        ctx.save();
        ctx.translate(x, y);  
        this.drawRoundRectPath(ctx, width, height, radius);
        ctx.fillStyle = this.pen.color || "#000"; //若是给定了值就用给定的值否则给予默认值  
        if(this.pen.fillStyle){
            ctx.fillStyle=this.pen.fillStyle;
        }else{
            ctx.fillStyle=this.pen.color;
        }
        ctx.fill();
        ctx.restore();
    }

    this.strokeRoundRect = function(x, y, width, height, radius) {
        //圆的直径必然要小于矩形的宽高          
        if (2 * radius > width || 2 * radius > height) { return false; }
        var cxt=this.canvas.getContext("2d");
        cxt.save();
        cxt.translate(x, y);
        //绘制圆角矩形的各个边  
        this.drawRoundRectPath(cxt, width, height, radius);
        cxt.lineWidth = this.pen.width || 2; //若是给定了值就用给定的值否则给予默认值2  
        cxt.strokeStyle = this.pen.color || "#000";
        cxt.stroke();
        cxt.restore();
    }

    this.drawRoundRectPath = function(cxt, width, height, radius) {
        var cxt=this.canvas.getContext("2d");
        cxt.beginPath(0);
        cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
        cxt.lineTo(radius, height);
        cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
        cxt.lineTo(0, radius); 
        cxt.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
        cxt.lineTo(width - radius, 0);
        cxt.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);
        cxt.lineTo(width, height - radius);
        cxt.closePath();
    }
}


export {QPainter, QPen, QPoint};