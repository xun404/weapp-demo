Page({
    data: {
        result: ""
    },
    scanCode: function() {
        var s = this;
        wx.scanCode({
            success: function(t) {
                s.setData({
                    result: t.result
                });
            },
            fail: function(s) {}
        });
    }
});