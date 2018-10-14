Page({
    onShareAppMessage: function() {
        return {
            title: "input",
            path: "page/component/pages/input/input"
        };
    },
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
        var t = e.detail.value, a = e.detail.cursor;
        return -1 !== a && (a = e.detail.value.slice(0, a).replace(/11/g, "2").length), 
        {
            value: t.replace(/11/g, "2"),
            cursor: a
        };
    },
    bindHideKeyboard: function(e) {
        "123" === e.detail.value && wx.hideKeyboard();
    }
});