var a = wx.getSystemInfoSync();

Page({
    onShareAppMessage: function() {
        return {
            title: "ad",
            path: "page/component/pages/ad/ad"
        };
    },
    data: {
        platform: a.platform
    }
});