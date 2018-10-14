Page({
    onShareAppMessage: function() {
        return {
            title: "扫码",
            path: "page/API/pages/scan-code/scan-code"
        };
    },
    data: {
        result: ""
    },
    scanCode: function() {
        var e = this;
        wx.scanCode({
            success: function(s) {
                e.setData({
                    result: s.result
                });
            },
            fail: function() {}
        });
    }
});