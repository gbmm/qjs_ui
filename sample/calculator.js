import {QWidget} from '../corelib/gui/qwidget.js'
import {QObject} from '../corelib/core/qobject.js'
import {QButton} from '../corelib/gui/qbutton.js'
import {QLineEdit} from '../corelib/gui/qlineedit.js'

function CalcultorWidget(){
    QObject.extends(this, QWidget);
    this.setInstance(this);

    this.first = '';
    this.second = '';
    this.oper = '';

    this.Constructor = function(){
        this.resize(400,500);
        this.setWindowFlags(Qt.FramelessWindowHint);
        this.lineedit = new QLineEdit(this);
        this.lineedit.setPosition(0,0,400,100);
        this.lineedit.setColor('#ff0000');
        this.lineedit.setFont('38px bold 宋体');
        
        for(var col=0; col<3; col++){
            for(var row=0; row<3; row++){
                var btn = new QButton(this);
                btn.setPosition(0+row*100, 100+col*100, 99, 99);
                btn.setFont('28px bold 宋体');
                btn.setBackground('rgb(182,194,154)');
                btn.setPressColor('rgb(138,151,123)');
                btn.setText(((row)+(col)*3+1).toString());
                this.connect(btn,'click',this,'btnClick');
            }
        }

        var btn = new QButton(this);
        btn.setPosition(0, 4*100, 199, 99);
        btn.setText('0');
        btn.setFont('28px bold 宋体');
        btn.setBackground('rgb(229,131,8)');
        btn.setPressColor('rgb(138,151,123)');
        this.connect(btn,'click',this,'btnClick');

        var btn = new QButton(this);
        btn.setPosition(200, 4*100, 99, 99);
        btn.setBackground('rgb(69,137,148)');
        btn.setPressColor('rgb(138,151,123)');
        btn.setText('=');
        btn.setFont('28px bold 宋体');
        this.connect(btn,'click',this,'btnClick');

        var btn = new QButton(this);
        btn.setPosition(300, 100, 99, 99);
        btn.setText('+');
        btn.setFont('28px bold 宋体');
        btn.setBackground('rgb(229,131,8)');
        btn.setPressColor('rgb(138,151,123)');
        this.connect(btn,'click',this,'btnClick');

        var btn = new QButton(this);
        btn.setPosition(300, 200, 99, 99);
        btn.setText('-');
        btn.setFont('28px bold 宋体');
        btn.setBackground('rgb(229,131,8)');
        btn.setPressColor('rgb(138,151,123)');
        this.connect(btn,'click',this,'btnClick');

        var btn = new QButton(this);
        btn.setPosition(300, 300, 99, 99);
        btn.setText('*');
        btn.setFont('28px bold 宋体');
        btn.setBackground('rgb(229,131,8)');
        btn.setPressColor('rgb(138,151,123)');
        this.connect(btn,'click',this,'btnClick');

        var btn = new QButton(this);
        btn.setPosition(300, 400, 99, 99);
        btn.setText('/');
        btn.setFont('28px bold 宋体');
        btn.setBackground('rgb(229,131,8)');
        btn.setPressColor('rgb(138,151,123)');
        this.connect(btn,'click',this,'btnClick');

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

export {CalcultorWidget};