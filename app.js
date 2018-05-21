var o = require("./config").openIdUrl;

App({
    onLaunch: function(o) {
        console.log("App Launch", o);
    },
    onShow: function(o) {
        console.log("App Show", o);
    },
    onHide: function() {
        console.log("App Hide");
    },
    globalData: {
        hasLogin: !1,
        openid: null
    },
    getUserOpenId: function(n) {
        var l = this;
        l.globalData.openid ? n(null, l.globalData.openid) : wx.login({
            success: function(e) {
                wx.request({
                    url: o,
                    data: {
                        code: e.code
                    },
                    success: function(o) {
                        console.log("拉取openid成功", o), l.globalData.openid = o.data.openid, n(null, l.globalData.openid);
                    },
                    fail: function(o) {
                        console.log("拉取用户openid失败，将无法正常使用开放接口等服务", o), n(o);
                    }
                });
            },
            fail: function(o) {
                console.log("wx.login 接口调用失败，将无法正常使用开放接口等服务", o), n(o);
            }
        });
    }
});