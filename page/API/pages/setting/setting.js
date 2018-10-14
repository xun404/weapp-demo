Page({
    onShareAppMessage: function() {
        return {
            title: "设置",
            path: "page/API/pages/setting/setting"
        };
    },
    data: {
        setting: {}
    },
    getSetting: function() {
        var t = this;
        wx.getSetting({
            success: function(e) {
                console.log(e), t.setData({
                    setting: e.authSetting
                });
            }
        });
    }
});