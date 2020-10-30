import {QWidget} from '../corelib/gui/qwidget.js'
import {QObject} from '../corelib/core/qobject.js'
import {QButton} from '../corelib/gui/qbutton.js'
import {QLineEdit} from '../corelib/gui/qlineedit.js'
import {QGridLayout} from '../corelib/gui/qlayout.js'
import {Qt} from '../corelib/core/qt.js'

function CalcultorLayoutWidget(){
    QObject.extends(this, QWidget);
    this.setInstance(this);

    this.first = '';
    this.second = '';
    this.oper = '';

    this.Constructor = function(){
        this.resize(400,500);
        this.setWindowFlags(Qt.FramelessWindowHint);
        this.setWindowFlags(Qt.LessWidgetEdge);
        this.gridLayout = new QGridLayout(this);
        this.gridLayout.setGrid(5,4,2,2);

        this.lineedit = new QLineEdit(this);
        this.gridLayout.addElement(0, 0, this.lineedit, 1, 4);
        this.lineedit.setColor('#ff0000');
        this.lineedit.setFont('38px bold 宋体');
        for(var col=0; col<3; col++){
            for(var row=0; row<3; row++){
                var btn = new QButton(this);
                this.gridLayout.addElement(row+1, col, btn);
                btn.setFont('28px bold 宋体');
                btn.setBackground('rgb(182,194,154)');
                btn.setPressColor('rgb(138,151,123)');
                btn.setText(((row)*3+(col)+1).toString());
                this.connect(btn,'click',this,'btnClick');
            }
        }
        var btn = new QButton(this);
        this.gridLayout.addElement(4, 0, btn, 1, 2);
        btn.setText('0');
        btn.setFont('28px bold 宋体');
        btn.setBackground('rgb(229,131,8)');
        btn.setPressColor('rgb(138,151,123)');
        this.connect(btn,'click',this,'btnClick');

        var btn = new QButton(this);
        this.gridLayout.addElement(4, 2, btn);
        btn.setBackground('rgb(69,137,148)');
        btn.setPressColor('rgb(138,151,123)');
        btn.setText('=');
        btn.setFont('28px bold 宋体');
        this.connect(btn,'click',this,'btnClick');

        var btn = new QButton(this);
        this.gridLayout.addElement(1, 3, btn);
        btn.setText('+');
        btn.setFont('28px bold 宋体');
        btn.setBackground('rgb(229,131,8)');
        btn.setPressColor('rgb(138,151,123)');
        this.connect(btn,'click',this,'btnClick');

        var btn = new QButton(this);
        this.gridLayout.addElement(2, 3, btn);
        btn.setText('-');
        btn.setFont('28px bold 宋体');
        btn.setBackground('rgb(229,131,8)');
        btn.setPressColor('rgb(138,151,123)');
        this.connect(btn,'click',this,'btnClick');

        var btn = new QButton(this);
        this.gridLayout.addElement(3, 3, btn);
        btn.setText('*');
        btn.setFont('28px bold 宋体');
        btn.setBackground('rgb(229,131,8)');
        btn.setPressColor('rgb(138,151,123)');
        this.connect(btn,'click',this,'btnClick');

        var btn = new QButton(this);
        this.gridLayout.addElement(4, 3, btn);
        btn.setText('/');
        btn.setFont('28px bold 宋体');
        btn.setBackground('rgb(229,131,8)');
        btn.setPressColor('rgb(138,151,123)');
        this.connect(btn,'click',this,'btnClick');

        this.gridLayout.update();
    }
    
    this.btnClick = function(that, sender, params){
        if(sender.text === '=' && that.oper){
            var s = that.first + that.oper+that.second;
            that.lineedit.setText(eval(s).toString());
            that.first = '';
            that.second = '';
            that.oper = '';
            return;
        }

        if(sender.text === '+' || sender.text === '-'
        || sender.text === '*' || sender.text === '/'){
            that.oper = sender.text;
            that.lineedit.setText('');
            return;
        }

        if(!that.first || !that.oper){
            that.first += sender.text;
            that.lineedit.setText(that.first);
        }else if (!that.second && that.oper){
            that.second += sender.text;
            that.lineedit.setText(that.second);
        }
    }

    this.Constructor();
}

export {CalcultorLayoutWidget};