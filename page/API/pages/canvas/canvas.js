var a = require("./example.js");

Page({
    onShareAppMessage: function() {
        return {
            title: "创建画布",
            path: "page/API/pages/canvas/canvas"
        };
    },
    onLoad: function() {
        this.context = wx.createContext();
        var t = Object.keys(a);
        this.setData({
            methods: t
        });
        var n = this;
        t.forEach(function(t) {
            n[t] = function() {
                a[t](n.context);
                var e = n.context.getActions();
                wx.drawCanvas({
                    canvasId: "canvas",
                    actions: e
                });
            };
        });
    },
    toTempFilePath: function() {
        wx.canvasToTempFilePath({
            canvasId: "canvas",
            success: function(a) {
                console.log(a);
            },
            fail: function(a) {
                console.log(a);
            }
        });
    }
});