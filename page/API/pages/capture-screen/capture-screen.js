Page({
    onShareAppMessage: function() {
        return {
            title: "用户截屏事件",
            path: "page/API/pages/capture-screen/capture-screen"
        };
    },
    data: {
        captured: !1
    },
    onLoad: function() {
        var e = this;
        wx.onUserCaptureScreen(function() {
            e.setData({
                captured: !0
            });
        });
    }
});