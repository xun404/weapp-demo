var o = require("../../../../util/util.js").formatLocation;

Page({
    data: {
        hasLocation: !1
    },
    chooseLocation: function() {
        var t = this;
        wx.chooseLocation({
            success: function(a) {
                console.log(a), t.setData({
                    hasLocation: !0,
                    location: o(a.longitude, a.latitude),
                    locationAddress: a.address
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