Page({
    data: {
        isConnected: !1
    },
    onLoad: function() {
        var e = this;
        wx.onNetworkStatusChange(function(n) {
            e.setData({
                isConnected: n.isConnected,
                networkType: n.networkType
            });
        });
    },
    onShow: function() {
        var e = this;
        wx.getNetworkType({
            success: function(n) {
                e.setData({
                    isConnected: "none" !== n.networkType,
                    networkType: n.networkType
                });
            }
        });
    }
});