var QList = Array;

// QList.append
QList.prototype.append = function(val){
    this.push(val);
}

// QList.at
QList.prototype.at = function(idx){
    if(idx >= 0 && idx < this.length) {
        return this[idx];
    } else {
        throw new Error('Invalid index');
    }
}

// QList.clear
QList.prototype.clear = function(){
    this.length = 0;
}

// QList.contains
QList.prototype.contains = function(val){
    return this.indexOf(val) !== -1;
}

// QList.count
QList.prototype.count = function(val){
    if(val) { return this.filter(function(item){ return item == val; }).length }
        return this.length;
}

// QList.empty
QList.prototype.empty = function(){
    return this.length === 0;
}

// QList.endsWith
Object.defineProperty(Array.prototype, "endsWith", {
    value: function(val) { return this[this.length - 1] == val }
});

// QList.first
Object.defineProperty(Array.prototype, "first", {
    value: function() { return this[0]; }
});

// QList.insert
Object.defineProperty(Array.prototype, "insert", {
    value: function(idx, val) {
        this.splice(idx, 0, val);
    }
});

// QList.isEmpty
Object.defineProperty(Array.prototype, "isEmpty", {
    value: function() { return this.length == 0 }
});

// QList.last
Object.defineProperty(Array.prototype, "last", {
    value: function() { return this[this.length - 1]; }
});

// QList.mid
Object.defineProperty(Array.prototype, "mid", {
    value: function(pos, length) {
        var end;
        length = length || -1;

        if(length != -1) {
            end = pos + length;
        }

        return this.slice(pos, end);
    }
});

// QList.move
Object.defineProperty(Array.prototype, "move", {
    value: function(from, to) {
        var item = this.splice(from, 1)[0];
        this.splice(to, 0, item);
    }
});

// QList.prepend
Object.defineProperty(Array.prototype, "prepend", {
    value: function(val) {
        this.splice(0, 0, val);
    }
});

// QList.removeAll
Object.defineProperty(Array.prototype, "removeAll", {
    value: function(val) {
        for(var idx = 0; idx < this.length; idx++) {
            if(this[idx] == val) {
                this.splice(idx, 1);
            }
        }
    }
});

// QList.removeAt
Object.defineProperty(Array.prototype, "removeAt", {
    value: function(pos) {
        this.splice(pos, 1);
    }
});

// QList.removeFirst
Object.defineProperty(Array.prototype, "removeFirst", {
    value: function() {
        this.splice(0, 1);
    }
});

// QList.removeLast
Object.defineProperty(Array.prototype, "removeLast", {
    value: function() {
        this.splice(this.length - 1, 1);
    }
});

// QList.removeOne
Object.defineProperty(Array.prototype, "removeOne", {
    value: function(val) {
        for(var idx = 0; idx < this.length; idx++) {
            if(this[idx] == val) {
                this.splice(idx, 1);
                return true;
            }
        }
        return false;
    }
});

// QList.replace
Object.defineProperty(Array.prototype, "replace", {
    value: function(pos, val) {
        this.splice(pos, 1, val);
    }
});

// QList.size
Object.defineProperty(Array.prototype, "size", {
    value: function() {
        return this.length;
    }
});

// QList.startsWith
Object.defineProperty(Array.prototype, "startsWith", {
    value: function(val) {
        return this[0] == val;
    }
});

// QList.swap
Object.defineProperty(Array.prototype, "swap", {
    value: function(i, j) {
        if(Array.isArray(i))
        {
            var other = this.splice.apply(this, [0, this.length].concat(i));
            i.splice.apply(i, [0, i.length].concat(other));
        } else {
            var elem = this[i];
            this[i] = this[j];
            this[j] = elem;
        }
    }
});

// QList.takeAt
Object.defineProperty(Array.prototype, "takeAt", {
    value: function(idx) {
        return this.splice(idx, 1)[0];
    }
});

// QList.takeFirst
Object.defineProperty(Array.prototype, "takeFirst", {
    value: function() {
        return this.splice(0, 1)[0];
    }
});

// QList.takeLast
Object.defineProperty(Array.prototype, "takeLast", {
    value: function() {
        return this.splice(this.length - 1, 1)[0];
    }
});

// QList.value
Object.defineProperty(Array.prototype, "value", {
    value: function(idx, def) {
        if(idx >= 0 && idx < this.length) {
            return this[idx];
        } else {
            return def;
        }
    }
});


export {QList};