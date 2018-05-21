var t = require("../../../../util/util.js").formatLocation;

Page({
    data: {
        hasLocation: !1
    },
    getLocation: function() {
        var a = this;
        wx.getLocation({
            success: function(o) {
                console.log(o), a.setData({
                    hasLocation: !0,
                    location: t(o.longitude, o.latitude)
                });
            }
        });
    },
    clear: function() {
        this.setData({
            hasLocation: !1
        });
    }
});