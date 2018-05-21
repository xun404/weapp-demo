Page({
    data: {
        key: "",
        data: "",
        dialog: {
            title: "",
            content: "",
            hidden: !0
        }
    },
    keyChange: function(t) {
        this.data.key = t.detail.value;
    },
    dataChange: function(t) {
        this.data.data = t.detail.value;
    },
    getStorage: function() {
        var t, a = this.data.key, e = this.data.data;
        0 === a.length ? this.setData({
            key: a,
            data: e,
            "dialog.hidden": !1,
            "dialog.title": "读取数据失败",
            "dialog.content": "key 不能为空"
        }) : "" === (t = wx.getStorageSync(a)) ? this.setData({
            key: a,
            data: e,
            "dialog.hidden": !1,
            "dialog.title": "读取数据失败",
            "dialog.content": "找不到 key 对应的数据"
        }) : this.setData({
            key: a,
            data: e,
            "dialog.hidden": !1,
            "dialog.title": "读取数据成功",
            "dialog.content": "data: '" + t + "'"
        });
    },
    setStorage: function() {
        var t = this.data.key, a = this.data.data;
        0 === t.length ? this.setData({
            key: t,
            data: a,
            "dialog.hidden": !1,
            "dialog.title": "保存数据失败",
            "dialog.content": "key 不能为空"
        }) : (wx.setStorageSync(t, a), this.setData({
            key: t,
            data: a,
            "dialog.hidden": !1,
            "dialog.title": "存储数据成功"
        }));
    },
    clearStorage: function() {
        wx.clearStorageSync(), this.setData({
            key: "",
            data: "",
            "dialog.hidden": !1,
            "dialog.title": "清除数据成功",
            "dialog.content": ""
        });
    },
    confirm: function() {
        this.setData({
            "dialog.hidden": !0,
            "dialog.title": "",
            "dialog.content": ""
        });
    }
});