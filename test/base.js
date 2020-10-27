function assert(condition, name, msg, err){
    if(condition){
        console.log('-  Test', name + ' ' + msg,' -');
    }else{
        throw Error(name+' '+ err);
    }
}

export {assert};