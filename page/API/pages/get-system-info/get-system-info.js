Page({
    onShareAppMessage: function() {
        return {
            title: "获取手机系统信息",
            path: "page/API/pages/get-system-info/get-system-info"
        };
    },
    data: {
        systemInfo: {}
    },
    getSystemInfo: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    systemInfo: e
                });
            }
        });
    }
});