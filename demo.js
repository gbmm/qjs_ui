import {QApplication} from './corelib/core/qapplication.js'
import {MyWidget} from './mywidget.js'
import {CalcultorWidget} from './sample/calculator.js'
import {CalcultorLayoutWidget} from './sample/calculator_layout.js'
import {VLayoutWidget} from './sample/widget_vlayout.js'
import {HLayoutWidget} from './sample/widget_hlayout.js'

function main(){
    var app = new QApplication();
    // var w = new MyWidget();
    // var w = new CalcultorWidget();
    var w = new CalcultorLayoutWidget();
    // var w = new VLayoutWidget();
    // var w = new HLayoutWidget();
    // w.show();
    app.exec();
} 

window.onload=function(){
    main();
};