for (var t = [ "default", "primary", "warn" ], a = {
    data: {
        defaultSize: "default",
        primarySize: "default",
        warnSize: "default",
        disabled: !1,
        plain: !1,
        loading: !1
    },
    onShareAppMessage: function() {
        return {
            title: "button",
            path: "page/component/pages/button/button"
        };
    },
    setDisabled: function() {
        this.setData({
            disabled: !this.data.disabled
        });
    },
    setPlain: function() {
        this.setData({
            plain: !this.data.plain
        });
    },
    setLoading: function() {
        this.setData({
            loading: !this.data.loading
        });
    }
}, i = 0; i < t.length; ++i) !function(t) {
    a[t] = function() {
        var a = t + "Size", i = {};
        i[a] = "default" === this.data[a] ? "mini" : "default", this.setData(i);
    };
}(t[i]);

Page(a);