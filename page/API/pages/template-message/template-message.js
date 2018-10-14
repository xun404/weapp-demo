var e = require("../../../../config").templateMessageUrl, s = getApp(), t = {
    address: "T.I.T 造舰厂",
    time: "2017.01.09",
    name: "帝国歼星舰",
    serial: "123456789"
};

Page({
    onShareAppMessage: function() {
        return {
            title: "模板消息",
            path: "page/API/pages/template-message/template-message"
        };
    },
    onLoad: function() {
        this.setData({
            formData: t
        });
    },
    submitForm: function(t) {
        var a = this, o = t.detail.formId, i = t.detail.value;
        console.log("form_id is:", o), a.setData({
            loading: !0
        }), s.getUserOpenId(function(s, t) {
            s ? console.log("err:", s) : wx.request({
                url: e,
                method: "POST",
                data: {
                    formId: o,
                    openid: t,
                    formData: i
                },
                success: function(e) {
                    console.log("submit form success", e), wx.showToast({
                        title: "发送成功",
                        icon: "success"
                    }), a.setData({
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