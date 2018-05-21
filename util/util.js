module.exports = {
    formatTime: function(t) {
        if ("number" != typeof t || t < 0) return t;
        var r = parseInt(t / 3600);
        return t %= 3600, [ r, parseInt(t / 60), t = parseInt(t % 60) ].map(function(t) {
            return (t = t.toString())[1] ? t : "0" + t;
        }).join(":");
    },
    formatLocation: function(t, r) {
        return "string" == typeof t && "string" == typeof r && (t = parseFloat(t), r = parseFloat(r)), 
        t = t.toFixed(2), r = r.toFixed(2), {
            longitude: t.toString().split("."),
            latitude: r.toString().split(".")
        };
    }
};