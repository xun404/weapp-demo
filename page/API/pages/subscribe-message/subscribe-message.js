Page({
    data: {
        hasAuth: !1,
        authType: 0
    },
    onShow: function() {
        var t = this;
        wx.getSetting({
            success: function(e) {
                e.authSetting && (!0 !== e.authSetting["scope.subscribemsg"] && !1 !== e.authSetting["scope.subscribemsg"] || t.setData({
                    hasAuth: !0,
                    authType: e.authSetting["scope.subscribemsg"] ? 0 : 1
                }));
            }
        });
    },
    openSetting: function() {
        wx.openSetting({});
    },
    onsubscribe: function(t) {
        console.log(t.detail.errMsg), "subscribeMessage:fail auth deny" === t.detail.errMsg && this.setData({
            hasAuth: !0,
            authType: 1
        }), "subscribeMessage:ok" === t.detail.errMsg && this.setData({
            hasAuth: !0,
            authType: 0
        });
    }
});