var s = getApp();

Page({
    data: {
        hasUserInfo: !1
    },
    getUserInfo: function() {
        function e() {
            wx.getUserInfo({
                success: function(s) {
                    a.setData({
                        hasUserInfo: !0,
                        userInfo: s.userInfo
                    }), a.update();
                }
            });
        }
        var a = this;
        !1 === s.globalData.hasLogin ? wx.login({
            success: e
        }) : e();
    },
    clear: function() {
        this.setData({
            hasUserInfo: !1,
            userInfo: {}
        });
    }
});