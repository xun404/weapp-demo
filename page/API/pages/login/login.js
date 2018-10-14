var a = getApp();

Page({
    onShareAppMessage: function() {
        return {
            title: "微信登录",
            path: "page/API/pages/login/login"
        };
    },
    onLoad: function() {
        this.setData({
            hasLogin: a.globalData.hasLogin
        });
    },
    data: {},
    login: function() {
        var t = this;
        wx.login({
            success: function() {
                a.globalData.hasLogin = !0, t.setData({
                    hasLogin: !0
                });
            }
        });
    }
});