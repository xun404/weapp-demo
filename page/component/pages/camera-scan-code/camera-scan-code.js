Page({
    onShareAppMessage: function() {
        return {
            title: "camera",
            path: "page/component/pages/camera-scan-code/camera-scan-code"
        };
    },
    data: {
        result: {}
    },
    onReady: function() {
        wx.showModal({
            title: "提示",
            content: "将摄像头对准一维码即可扫描",
            showCancel: !1
        });
    },
    scanCode: function(a) {
        console.log("scanCode:", a), this.setData({
            result: a.detail
        });
    },
    navigateBack: function() {
        wx.navigateBack();
    },
    error: function(a) {
        console.log(a.detail);
    }
});