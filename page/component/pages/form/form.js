Page({
    onShareAppMessage: function() {
        return {
            title: "form",
            path: "page/component/pages/form/form"
        };
    },
    data: {
        pickerHidden: !0,
        chosen: ""
    },
    pickerConfirm: function(e) {
        this.setData({
            pickerHidden: !0
        }), this.setData({
            chosen: e.detail.value
        });
    },
    pickerCancel: function() {
        this.setData({
            pickerHidden: !0
        });
    },
    pickerShow: function() {
        this.setData({
            pickerHidden: !1
        });
    },
    formSubmit: function(e) {
        console.log("form发生了submit事件，携带数据为：", e.detail.value);
    },
    formReset: function(e) {
        console.log("form发生了reset事件，携带数据为：", e.detail.value), this.setData({
            chosen: ""
        });
    }
});