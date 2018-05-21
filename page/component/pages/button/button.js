for (var a = [ "default", "primary", "warn" ], t = {
    data: {
        defaultSize: "default",
        primarySize: "default",
        warnSize: "default",
        disabled: !1,
        plain: !1,
        loading: !1
    },
    setDisabled: function(a) {
        this.setData({
            disabled: !this.data.disabled
        });
    },
    setPlain: function(a) {
        this.setData({
            plain: !this.data.plain
        });
    },
    setLoading: function(a) {
        this.setData({
            loading: !this.data.loading
        });
    }
}, i = 0; i < a.length; ++i) !function(a) {
    t[a] = function(t) {
        var i = a + "Size", e = {};
        e[i] = "default" === this.data[i] ? "mini" : "default", this.setData(e);
    };
}(a[i]);

Page(t);