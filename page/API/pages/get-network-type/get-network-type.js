Page({
    onShareAppMessage: function() {
        return {
            title: "获取手机网络状态",
            path: "page/API/pages/get-network-type/get-network-type"
        };
    },
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
                });
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