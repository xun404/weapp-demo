Page({
    onShareAppMessage: function() {
        return {
            title: "监听手机网络变化",
            path: "page/API/pages/on-network-status-change/on-network-status-change"
        };
    },
    data: {
        isConnected: !1
    },
    onLoad: function() {
        var e = this;
        wx.onNetworkStatusChange(function(t) {
            e.setData({
                isConnected: t.isConnected,
                networkType: t.networkType
            });
        });
    },
    onShow: function() {
        var e = this;
        wx.getNetworkType({
            success: function(t) {
                e.setData({
                    isConnected: "none" !== t.networkType,
                    networkType: t.networkType
                });
            }
        });
    }
});