exports.extend = function(r) {
    for (var t = Array.prototype.slice.call(arguments, 1), e = 0; e < t.length; e += 1) {
        var n = t[e];
        for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o]);
    }
    return r;
};