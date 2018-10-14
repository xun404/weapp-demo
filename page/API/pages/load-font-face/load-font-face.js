Page({
    onShareAppMessage: function() {
        return {
            title: "动态加载字体",
            path: "page/API/pages/load-font-face/load-font-face"
        };
    },
    data: {
        fontFamily: "Bitstream Vera Serif Bold",
        loaded: !1
    },
    onLoad: function() {
        this.setData({
            loaded: !1
        });
    },
    loadFontFace: function() {
        var t = this;
        wx.loadFontFace({
            family: this.data.fontFamily,
            source: 'url("https://sungd.github.io/Pacifico.ttf")',
            success: function(a) {
                console.log(a.status), t.setData({
                    loaded: !0
                });
            },
            fail: function(t) {
                console.log(t.status);
            },
            complete: function(t) {
                console.log(t.status);
            }
        });
    },
    clear: function() {
        this.setData({
            loaded: !1
        });
    }
});