import {QWidget} from '../corelib/gui/qwidget.js'
import {QObject} from '../corelib/core/qobject.js'
import {QCheckBox} from '../corelib/gui/qcheckbox.js'
import {QLineEdit} from '../corelib/gui/qlineedit.js'

function TWidget(){
    QObject.extends(this, QWidget);

    this.first = '';
    this.second = '';
    this.oper = '';

    this.Constructor = function(){
        this.resize(600,600);
        this.checkbox = new QCheckBox(this);
        this.checkbox.setPosition(100,100,100,50);
        this.checkbox.setText('测试');
        this.connect(this.checkbox,'checked',this,'revChange');
    }

    this.revChange = function(sender,checked){
        console.log(checked);
    }

    this.Constructor();
}

export {TWidget};