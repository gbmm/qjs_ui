import {QWidget} from '../corelib/gui/qwidget.js'
import {QObject} from '../corelib/core/qobject.js'
import {QButton} from '../corelib/gui/qbutton.js'
import {QLineEdit} from '../corelib/gui/qlineedit.js'
import {QHLayout} from '../corelib/gui/qlayout.js'
import {Qt} from '../corelib/core/qt.js'

function HLayoutWidget(){
    QObject.extends(this, QWidget);
    this.setInstance(this);

    this.Constructor = function(){
        this.resize(600,100);
       
        this.hlayout = new QHLayout(this);
        this.hlayout.setPercents([1,1,2,3]);
        var btn1 = new QButton(this);
        btn1.setText('btn1');
        var btn2 = new QButton(this);
        btn2.setText('btn2');
        var btn3 = new QButton(this);
        btn3.setText('btn3');
        this.hlayout.addElement(btn1);
        this.hlayout.addElement(Qt.LayoutSpace)
        this.hlayout.addElement(btn2);
        this.hlayout.addElement(btn3);
        this.hlayout.update();
    }
    

    this.Constructor();
}

export {HLayoutWidget};