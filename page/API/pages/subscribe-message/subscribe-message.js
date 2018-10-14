var s = require("../../../../config").subscribeMessageUrl, e = getApp();

Page({
    onShareAppMessage: function() {
        return {
            title: "订阅消息",
            path: "page/API/pages/subscribe-message/subscribe-message"
        };
    },
    data: {
        hasAuth: !1,
        authType: 0
    },
    onShow: function() {
        var s = this;
        wx.getSetting({
            success: function(e) {
                e.authSetting && (!0 !== e.authSetting["scope.subscribemsg"] && !1 !== e.authSetting["scope.subscribemsg"] || s.setData({
                    hasAuth: !0,
                    authType: e.authSetting["scope.subscribemsg"] ? 0 : 1
                }));
            }
        });
    },
    openSetting: function() {
        wx.openSetting({});
    },
    onsubscribe: function(s) {
        console.log(s.detail.errMsg), "subscribeMessage:fail auth deny" === s.detail.errMsg && this.setData({
            hasAuth: !0,
            authType: 1
        }), "subscribeMessage:ok" === s.detail.errMsg && this.setData({
            hasAuth: !0,
            authType: 0
        });
    },
    dosendmsg: function() {
        var t = this;
        this.setData({
            loading: !0
        }), e.getUserOpenId(function(e, a) {
            e ? console.log("err:", e) : wx.request({
                url: s,
                method: "POST",
                data: {
                    openid: a
                },
                success: function(s) {
                    console.log("send subscribe message success", s), wx.showToast({
                        title: "发送成功",
                        icon: "success"
                    }), t.setData({
                        loading: !1
                    });
                },
                fail: function(s) {
                    var e = s.errMsg;
                    console.log("send subscribe message fail, errMsg is:", e);
                }
            });
        });
    }
});