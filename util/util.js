function t(r) {
    return r < 1 ? 0 : r <= 2 ? 1 : t(r - 1) + t(r - 2);
}

module.exports = {
    formatTime: function(t) {
        if ("number" != typeof t || t < 0) return t;
        var r = parseInt(t / 3600, 10);
        return t %= 3600, [ r, parseInt(t / 60, 10), t = parseInt(t % 60, 10) ].map(function(t) {
            return (t = t.toString())[1] ? t : "0" + t;
        }).join(":");
    },
    formatLocation: function(t, r) {
        return "string" == typeof t && "string" == typeof r && (t = parseFloat(t), r = parseFloat(r)), 
        t = t.toFixed(2), r = r.toFixed(2), {
            longitude: t.toString().split("."),
            latitude: r.toString().split(".")
        };
    },
    fib: t
};