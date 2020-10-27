var QMap = Object;

Object.defineProperty(QMap.prototype, "clear", {
    value: function() {
        for (k in this) {
            if (this.hasOwnProperty(k)) {
                delete this[k];
            }
        }
    }
});

// QMap.contains()
Object.defineProperty(QMap.prototype, "contains", {
    value: function(val) {
        for(var k in this) {
            if(this.hasOwnProperty(k) && this[k] === val) {
                return true;
            }
        }
        return false;
    }
});

// QMap.count()
Object.defineProperty(QMap.prototype, "count", {
    value: function() {
        return Object.keys(this).length;
    }
});

export {QMap};