var o = require("../../../../util/util.js").formatLocation;

Page({
    onShareAppMessage: function() {
        return {
            title: "使用原生地图选择位置",
            path: "page/API/pages/choose-location/choose-location"
        };
    },
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