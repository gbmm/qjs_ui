import {QWidget} from '../corelib/gui/qwidget.js'
import {QObject} from '../corelib/core/qobject.js'
import {QButton} from '../corelib/gui/qbutton.js'
import {QLineEdit} from '../corelib/gui/qlineedit.js'
import {QVLayout} from '../corelib/gui/qlayout.js'
import {Qt} from '../corelib/core/qt.js'

function VLayoutWidget(){
    QObject.extends(this, QWidget);
    this.setInstance(this);

    this.Constructor = function(){
        this.resize(100,600);
       
        this.vlayout = new QVLayout(this);
        this.vlayout.setPercents([1,1,2,3]);
        var btn1 = new QButton(this);
        btn1.setText('btn1');
        var btn2 = new QButton(this);
        btn2.setText('btn2');
        var btn3 = new QButton(this);
        btn3.setText('btn3');
        this.vlayout.addElement(btn1);
        this.vlayout.addElement(Qt.LayoutSpace)
        this.vlayout.addElement(btn2);
        this.vlayout.addElement(btn3);
        this.vlayout.update();
    }
    

    this.Constructor();
}

export {VLayoutWidget};