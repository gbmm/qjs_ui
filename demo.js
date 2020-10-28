import {QApplication} from './corelib/core/qapplication.js'
import {MyWidget} from './mywidget.js'
import {CalcultorWidget} from './sample/calculator.js'
import {CalcultorLayoutWidget} from './sample/calculator_layout.js'

function main(){
    var app = new QApplication();
    // var w = new MyWidget();
    // var w = new CalcultorWidget();
    var w = new CalcultorLayoutWidget();
    // w.show();
    app.exec();
} 

window.onload=function(){
    main();
};