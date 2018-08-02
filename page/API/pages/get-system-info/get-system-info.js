Page({
    data: {
        systemInfo: {}
    },
    getSystemInfo: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(s) {
                t.setData({
                    systemInfo: s
                });
            }
        });
    }
});