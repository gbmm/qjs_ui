import {QWidget} from '../corelib/gui/qwidget.js'
import {QObject} from '../corelib/core/qobject.js'
import {QCheckBox} from '../corelib/gui/qcheckbox.js'
import {QCombobox} from '../corelib/gui/qcombobox.js'

function TWidget(){
    QObject.extends(this, QWidget);

    this.first = '';
    this.second = '';
    this.oper = '';

    this.Constructor = function(){
        this.resize(600,400);
        this.checkbox = new QCheckBox(this);
        this.checkbox.setColor('#000');
        this.checkbox.setFont("20px bold 宋体");
        this.checkbox.setPosition(100,100,100,50);
        this.checkbox.setText('测试');
        this.connect(this.checkbox,'checked',this,'revChange');

        this.combox = new QCombobox(this);
        this.combox.setPosition(210,100,100,30);
    }

    this.revChange = function(sender,checked){
        console.log('选择',checked);
    }

    this.Constructor();
}

export {TWidget};8