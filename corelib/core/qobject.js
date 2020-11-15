import { QList } from '../tool/qlist.js'
import { QMap } from '../tool/qmap.js'
function QObject() {
  this.uuid = window.getUUID();
  this.signal_slot = new QMap();

  this.setStyle = function(style, div){
    if(!div){
        div = this.all_div;
    }
    for(var key in style){
        div.style[key] = style[key];
    }
  }

  this.connect = function (src, signal, dst, slot) {
    var key = src.uuid + '_' + signal;
    if (!src.signal_slot[key]) {
      src.signal_slot[key] = new QList();
    }
    src.signal_slot[key].append(window.getInstance(dst)+ '.'+slot); 
  }

  this.emit = function (src, signal, params=[]) {
    var key = this.uuid + '_' + signal;
    if (src.signal_slot[key]) {
      for (var callback of src.signal_slot[key]) {
        var dst = eval('self.'+callback.split('.')[1]);
        var funname = callback.split('.').slice(-1);
        dst[funname](src, params);
        // eval(callback)(dst, src, params);
      }
    }
  }

  this.setInstance = function (o) {
    o.obj = "self.obj_" + o.uuid.replace(/-/g, '_');
    eval(o.obj + "=this");
  }
}

QObject.connect = QObject.prototype.connect;
QObject.emit = QObject.prototype.emit;
QObject.setInstance = QObject.prototype.setInstance;

QObject.extends = function (child, parent, params=null) {
  var o = new parent(params);
  // child.prototype = o;
  // parent.call(child);
  for (var key in o) {
    child[key] = o[key];
  }
  if(o.hasOwnProperty('setChild')){
    o.setChild(child);
  }

  if(child.uuid){
    child.obj = "self.obj_" + child.uuid.replace(/-/g, '_');
    eval(child.obj + "=child");
  }
  
}


export { QObject };

