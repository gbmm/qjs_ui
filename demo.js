import {QApplication} from './corelib/core/qapplication.js'
import {MyWidget} from './mywidget.js'
import {CalcultorWidget} from './sample/calculator.js'

function main(){
    var app = new QApplication();
    // var w = new MyWidget();
    var w = new CalcultorWidget();
    // w.show();
    app.exec();
} 

window.onload=function(){
    main();
};