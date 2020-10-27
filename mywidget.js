import {QWidget} from './corelib/gui/qwidget.js'
import {QButton} from './corelib/gui/qbutton.js'
import {QLabel} from './corelib/gui/qlabel.js'
import {QLineEdit} from './corelib/gui/qlineedit.js'
import {QPainter,QPen, QPoint} from './corelib/gui/qpainter.js'
import {QObject} from './corelib/core/qobject.js'
import {QTimer} from './corelib/core/qtimer.js'
import {QList} from './corelib/tool/qlist.js'

function MyWidget(){
    
    QObject.extends(this, QWidget);
    this.setInstance(this);

    var btn = new QButton(this);
    btn.setPosition(300,300, 60, 40);
    btn.setText('测试')
    this.connect(btn,'click',this,'btn_click');

    this.label = new QLabel(this);
    this.label.setPosition(100,200, 160, 140);
    this.label.setBackgroundColor('#ff9900');

    this.lineedit = new QLineEdit(this);
    this.lineedit.setPosition(100,100, 100,50);
    this.lineedit.setColor('#ff0000');
    this.lineedit.setFont('28px bold 宋体');

    var t = new QTimer();
    this.connect(t,'timeout',this,'test_drawText');
    t.start(1000);

    this.num = 0;

    this.Constructor = function(){
        this.run();
    }

    this.rev_timeout = function(that, params){
        console.log('rev timeout now',that.num);
        that.num+=1;
    }

    this.btn_click = function(that, params){
        console.log('this btn click');
        if(that.num % 2 == 0){
            that.label.setBackgroundColor('#009900');
        }else{
            that.label.setBackgroundColor('#ff9900');
        }
        console.log(that.lineedit.getText());
        that.label.setText(that.lineedit.getText());
        that.num = 0;
    }

    this.test_drawText = function(that){
        if(!that)that = this;
        var painter = new QPainter(that.canvas);
        var pen = new QPen('#ff0000',1);
        pen.setFont("40px 宋体");
        painter.setPen(pen);
        painter.clearRect(0,0,150,150);
        painter.drawText(20, 30, that.num);
        that.num+=1;
    }

    this.test_drawLine = function(){
        var painter = new QPainter(this.canvas);
        console.log(0,100, this.width, this.height);
        painter.drawLine(0,0, 400, 200);
    }

    this.test_drawLines = function(){
        var painter = new QPainter(this.canvas);
        var pen = new QPen('#00ff00',1);
        painter.setPen(pen);
        var point1 = new QPoint(10,10);
        var point2 = new QPoint(10,100);
        var point3 = new QPoint(100,100);
        var point4 = new QPoint(10,10);
        var list = QList(point1,point2,point3,point4);
        painter.drawLines(list);
    }

    this.test_drawRect = function(){
        var painter = new QPainter(this.canvas);
        var pen = new QPen('#0000ff',1, true);
        painter.setPen(pen);
        painter.drawRect(100,100,30,30);
        pen.setPenStyle('#0000ff',2,false);
        painter.drawRect(200,100,30,30);
        // this.setBackgroundColor('#003300');
    }

    this.run = function(){
        for(var key in this){
            if(key.startsWith('test_')){
                this[key]();
            }
        }
    }

    this.Constructor();
}

export {MyWidget};


