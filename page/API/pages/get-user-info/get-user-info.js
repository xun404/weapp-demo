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
    getUserInfo: function(e) {
        var s = e.detail.userInfo;
        this.setData({
            userInfo: s,
            hasUserInfo: !0
        });
    },
    clear: function() {
        this.setData({
            hasUserInfo: !1,
            userInfo: {}
        });
    }
});