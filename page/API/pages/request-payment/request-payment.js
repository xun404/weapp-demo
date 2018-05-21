var e = require("../../../../config").paymentUrl, a = getApp();

Page({
    onLoad: function() {},
    requestPayment: function() {
        var n = this;
        n.setData({
            loading: !0
        }), a.getUserOpenId(function(a, t) {
            a ? (console.log("err:", a), n.setData({
                loading: !1
            })) : wx.request({
                url: e,
                data: {
                    openid: t
                },
                method: "POST",
                success: function(e) {
                    console.log("unified order success, response is:", e);
                    var a = e.data.payargs;
                    wx.requestPayment({
                        timeStamp: a.timeStamp,
                        nonceStr: a.nonceStr,
                        package: a.package,
                        signType: a.signType,
                        paySign: a.paySign
                    }), n.setData({
                        loading: !1
                    });
                }
            });
        });
    }
});