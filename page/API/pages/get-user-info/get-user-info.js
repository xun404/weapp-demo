var e = getApp();

Page({
    onShareAppMessage: function() {
        return {
            title: "获取用户信息",
            path: "page/API/pages/get-user-info/get-user-info"
        };
    },
    data: {
        hasUserInfo: !1
    },
    getUserInfo: function() {
        function s() {
            wx.getUserInfo({
                success: function(e) {
                    n.setData({
                        hasUserInfo: !0,
                        userInfo: e.userInfo
                    });
                }
            });
        }
        var n = this;
        !1 === e.globalData.hasLogin ? wx.login({
            success: s
        }) : s();
    },
    clear: function() {
        this.setData({
            hasUserInfo: !1,
            userInfo: {}
        });
    }
});