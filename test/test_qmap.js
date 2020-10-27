import {QMap} from '../corelib/tool/qmap.js'
import {assert} from './base.js'

function TestQMap(){
    this.name = "TestQMap";

    this.test_contains = function(){
        var map = new QMap();
        map['a'] = 1;
        map['b'] = 2;
        assert(map.contains('b')>=0, 'contains','Success','Fail');
    }
}

export {TestQMap};