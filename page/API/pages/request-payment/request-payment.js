var e = require("../../../../config").paymentUrl, t = getApp();

Page({
    onShareAppMessage: function() {
        return {
            title: "发起支付",
            path: "page/API/pages/request-payment/request-payment"
        };
    },
    onLoad: function() {},
    requestPayment: function() {
        var a = this;
        a.setData({
            loading: !0
        }), t.getUserOpenId(function(t, n) {
            t ? (console.log("err:", t), a.setData({
                loading: !1
            })) : wx.request({
                url: e,
                data: {
                    openid: n
                },
                method: "POST",
                success: function(e) {
                    console.log("unified order success, response is:", e);
                    var t = e.data.payargs;
                    wx.requestPayment({
                        timeStamp: t.timeStamp,
                        nonceStr: t.nonceStr,
                        package: t.package,
                        signType: t.signType,
                        paySign: t.paySign
                    }), a.setData({
                        loading: !1
                    });
                }
            });
        });
    }
});