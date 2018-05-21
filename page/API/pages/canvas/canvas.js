var t = require("./example.js");

Page({
    onLoad: function() {
        this.context = wx.createContext();
        var a = Object.keys(t);
        this.setData({
            methods: a
        });
        var n = this;
        a.forEach(function(a) {
            n[a] = function() {
                t[a](n.context);
                var c = n.context.getActions();
                wx.drawCanvas({
                    canvasId: "canvas",
                    actions: c
                });
            };
        });
    },
    toTempFilePath: function() {
        wx.canvasToTempFilePath({
            canvasId: "canvas",
            success: function(t) {
                console.log(t);
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});