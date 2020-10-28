import {QWidget} from '../corelib/gui/qwidget.js'
import {QObject} from '../corelib/core/qobject.js'
import {QButton} from '../corelib/gui/qbutton.js'
import {QLineEdit} from '../corelib/gui/qlineedit.js'
import {QGridLayout} from '../corelib/gui/qlayout.js'

function CalcultorLayoutWidget(){
    QObject.extends(this, QWidget);
    this.setInstance(this);

    this.first = '';
    this.second = '';
    this.oper = '';

    this.Constructor = function(){
        this.resize(400,500);
        this.gridLayout = new QGridLayout(this);
        this.gridLayout.setGrid(3,3,5,5);
        for(var col=0; col<3; col++){
            for(var row=0; row<3; row++){
                var btn = new QButton(this);
                // btn.setPosition(0+row*100, 100+col*100, 99, 99);
                this.gridLayout.addElement(row, col, btn);
                btn.setFont('28px bold 宋体');
                btn.setBackground('rgb(182,194,154)');
                btn.setPressColor('rgb(138,151,123)');
                btn.setText(((row)+(col)*3+1).toString());
            }
        }
        this.gridLayout.update();
    }
    
   

    this.Constructor();
}

export {CalcultorLayoutWidget};