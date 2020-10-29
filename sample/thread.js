var sleep = function(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};

function work(){
    var a = 1;
    var b = a+1;
    console.log(a+b);
    while(true){
        var startTime = new Date().getTime() + parseInt(1000, 10);
    while(new Date().getTime() < startTime) {}
        console.log('thread');
    }
}

function functionName(fun) {
    var ret = fun.toString();
    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    return ret;
  }

// console.log(work.toString(), functionName(work));
// eval(functionName(work)+'()');

var ret = work.toString();
console.log(ret.indexOf('{'));
var start = ret.indexOf('{');
var code = ret.substring(start+1,ret.length-1);

// var script = "";
//     script += "var a = 0;";
//     script += "a++;";
//     script += "console.log(a)";
    
var blob = new Blob([code] , {
    type: 'text/javascript'
});
var src = URL.createObjectURL(blob);
var w = new Worker(src);