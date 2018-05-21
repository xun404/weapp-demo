Page({
    data: {
        hasNetworkType: !1
    },
    getNetworkType: function() {
        var e = this;
        wx.getNetworkType({
            success: function(t) {
                console.log(t), e.setData({
                    hasNetworkType: !0,
                    networkType: t.subtype || t.networkType
                }), e.update();
            }
        });
    },
    clear: function() {
        this.setData({
            hasNetworkType: !1,
            networkType: ""
        });
    }
});