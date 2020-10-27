import {TestQList} from './test_qlist.js'
import {TestQMap} from './test_qmap.js'

var tests = [
    new TestQList(),
    new TestQMap(),
];


for(var obj of tests){
    console.log('===========', obj.name, "===========");
    for(var key in obj){
        if(key.startsWith('test')){
            obj[key]();
        }
    }
}

