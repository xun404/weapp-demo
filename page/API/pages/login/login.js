var a = getApp();

Page({
    onLoad: function() {
        this.setData({
            hasLogin: a.globalData.hasLogin
        });
    },
    data: {},
    login: function() {
        var t = this;
        wx.login({
            success: function(n) {
                a.globalData.hasLogin = !0, t.setData({
                    hasLogin: !0
                });
            }
        });
    }
});