Page({
    onShareAppMessage: function() {
        return {
            title: "数据存储",
            path: "page/API/pages/storage/storage"
        };
    },
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
        var t = this.data, a = t.key, e = t.data, i = void 0;
        0 === a.length ? this.setData({
            key: a,
            data: e,
            "dialog.hidden": !1,
            "dialog.title": "读取数据失败",
            "dialog.content": "key 不能为空"
        }) : "" === (i = wx.getStorageSync(a)) ? this.setData({
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
            "dialog.content": "data: '" + i + "'"
        });
    },
    setStorage: function() {
        var t = this.data, a = t.key, e = t.data;
        0 === a.length ? this.setData({
            key: a,
            data: e,
            "dialog.hidden": !1,
            "dialog.title": "保存数据失败",
            "dialog.content": "key 不能为空"
        }) : (wx.setStorageSync(a, e), this.setData({
            key: a,
            data: e,
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