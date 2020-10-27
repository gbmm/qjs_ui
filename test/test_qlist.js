import {QList} from '../corelib/tool/qlist.js'
import {assert} from './base.js'

function TestQList(){
    this.name = "TestQList";

    this.test_append = function(){
        var list = new QList();
        list.append(1);
        assert(list.indexOf(1)>=0, 'append','Success','Fail');
    }

    this.test_at = function(){
        var list = new QList(1,2,3,4);
        assert(list.at(1)===2, 'at','Success','Fail');
    }

    this.test_clear = function(){
        var list = new QList(1,2,3,4);
        list.clear();
        assert(list.length===0, 'clear','Success','Fail');
    }

    this.test_contains = function(){
        var list = new QList(1,2,3,4);
        assert(list.contains(3), 'contains','Success','Fail');
    }
}

export {TestQList};
