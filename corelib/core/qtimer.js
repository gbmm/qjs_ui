import {QObject} from './qobject.js'

function QTimer(){
    QObject.extends(this, QObject);

    this.obj="self.obj_"+this.uuid.replace(/-/g,'_');
    eval(this.obj+"=this");
    this.timer_id = null;
    this._isActive = false;

    this.start = function(millsec){
        this._isActive = true;
        this.timer_id = self.setInterval(this.obj+'.timeout()', millsec); 
    }

    this.stop = function(){
        if(!this.timer_id){
            return
        }
        this._isActive = false;
        window.clearInterval(this.timer_id);
    }

    this.timerId = function(){
        return this.timer_id;
    }

    this.isActive = function(){
        return this._isActive;
    }

    ////////////////////////////////////// signal
    this.timeout = function(){
        this.emit(this, 'timeout');
    }
}

export {QTimer};