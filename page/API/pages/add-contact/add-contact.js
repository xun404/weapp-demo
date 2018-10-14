var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
};

Page({
    onShareAppMessage: function() {
        return {
            title: "新增联系人",
            path: "page/API/pages/add-contact/add-contact"
        };
    },
    submit: function(a) {
        var e = a.detail.value;
        wx.addPhoneContact(t({}, e, {
            success: function() {
                wx.showToast({
                    title: "联系人创建成功"
                });
            },
            fail: function() {
                wx.showToast({
                    title: "联系人创建失败"
                });
            }
        }));
    }
});