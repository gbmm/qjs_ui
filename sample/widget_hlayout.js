import {QWidget} from '../corelib/gui/qwidget.js'
import {QObject} from '../corelib/core/qobject.js'
import {QButton} from '../corelib/gui/qbutton.js'
import {QLineEdit} from '../corelib/gui/qlineedit.js'
import {QHLayout} from '../corelib/gui/qlayout.js'
import {QVLayout} from '../corelib/gui/qlayout.js'
import {Qt} from '../corelib/core/qt.js'

function HLayoutWidget(){
    QObject.extends(this, QWidget);
    this.setInstance(this);

    this.Constructor = function(){
        this.resize(600,600);
       
        this.hlayout = new QHLayout(this);
        this.vlayout1 = new QVLayout(this.hlayout);
        this.vlayout2 = new QVLayout(this.hlayout);
        this.hlayout.addElement(this.vlayout1);
        this.hlayout.addElement(this.vlayout2);

        var btn1 = new QButton(this);
        btn1.setText('btn1');
        var btn2 = new QButton(this);
        btn2.setText('btn2');
        var btn3 = new QButton(this);
        btn3.setText('btn3');
        this.vlayout1.addElement(btn1);
        this.vlayout1.addElement(btn2);
        this.vlayout1.addElement(btn3);

        var btn4 = new QButton(this);
        btn4.setText('btn4')
        var btn5 = new QButton(this);
        btn5.setText('btn5');
        var btn6 = new QButton(this);
        btn6.setText('btn6');
        this.vlayout2.addElement(btn4);
        this.vlayout2.addElement(btn5);
        this.vlayout2.addElement(btn6);

        this.hlayout.update();
    }
    

    this.Constructor();
}

export {HLayoutWidget};