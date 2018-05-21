var e = require("../../../../config").requestUrl;

Page({
    makeRequest: function() {
        var s = this;
        s.setData({
            loading: !0
        }), wx.request({
            url: e,
            data: {
                noncestr: Date.now()
            },
            success: function(e) {
                wx.showToast({
                    title: "请求成功",
                    icon: "success",
                    mask: !0,
                    duration: 2e3
                }), s.setData({
                    loading: !1
                }), console.log("request success", e);
            },
            fail: function(e) {
                var t = e.errMsg;
                console.log("request fail", t), s.setData({
                    loading: !1
                });
            }
        });
    }
});