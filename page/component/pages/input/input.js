Page({
    data: {
        focus: !1,
        inputValue: ""
    },
    bindKeyInput: function(e) {
        this.setData({
            inputValue: e.detail.value
        });
    },
    bindReplaceInput: function(e) {
        var a = e.detail.value, t = e.detail.cursor;
        return -1 !== t && (t = e.detail.value.slice(0, t).replace(/11/g, "2").length), 
        {
            value: a.replace(/11/g, "2"),
            cursor: t
        };
    },
    bindHideKeyboard: function(e) {
        "123" === e.detail.value && wx.hideKeyboard();
    }
});