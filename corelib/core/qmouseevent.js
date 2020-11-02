var QMouseEvent = function(type, x, y){
    this.type=type;   // 事件类型
    this.x = x;     // 窗口坐标
    this.y = y;     // 窗口坐标
}

function sendMouseEvent(type, x, y){
    var event = new QMouseEvent(type,x,y);
    var se = new CustomEvent(type, {detail: event});
    window.dispatchEvent(se);
}
