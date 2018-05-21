var e = require("../../../../config").templateMessageUrl, s = getApp(), o = {
    address: "T.I.T 造舰厂",
    time: "2017.01.09",
    name: "帝国歼星舰",
    serial: "123456789"
};

Page({
    onLoad: function() {
        this.setData({
            formData: o
        });
    },
    submitForm: function(o) {
        var t = this, a = o.detail.formId, i = o.detail.value;
        console.log("form_id is:", a), t.setData({
            loading: !0
        }), s.getUserOpenId(function(s, o) {
            s ? console.log("err:", s) : wx.request({
                url: e,
                method: "POST",
                data: {
                    form_id: a,
                    openid: o,
                    formData: i
                },
                success: function(e) {
                    console.log("submit form success", e), wx.showToast({
                        title: "发送成功",
                        icon: "success"
                    }), t.setData({
                        loading: !1
                    });
                },
                fail: function(e) {
                    var s = e.errMsg;
                    console.log("submit form fail, errMsg is:", s);
                }
            });
        });
    }
});