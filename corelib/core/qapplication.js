import {QList} from '../tool/qlist.js'
import {QMap} from '../tool/qmap.js'
import {} from '../tool/utils.js'

function QApplication(){
    window.app = this;
    
    this.exec = function(){
        
    }

    this.say = function(){
        console.log("this is application");
    }
    // this.postEvent

    // this.connect = function(uuid, name, params){
    //     if(this.signalSlots.contains(uuid+name)){
    //         this.signalSlots[uuid+name].append()
    //     }
    //     this.signalSlots
    //     var numargs = arguments.length; 
        
    //     for (i =1 ; i < numargs; i++){ // 获取参数内容。
    //     s += " 第" + i + "个参数是：" + arguments[i] + "\n";
    //     }
    // }
}

export {QApplication};