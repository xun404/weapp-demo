Page({
    onShareAppMessage: function() {
        return {
            title: "剪切板",
            path: "page/API/pages/clipboard-data/clipboard-data"
        };
    },
    data: {
        value: "edit and copy me",
        pasted: ""
    },
    valueChanged: function(a) {
        this.setData({
            value: a.detail.value
        });
    },
    copy: function() {
        wx.setClipboardData({
            data: this.data.value,
            success: function() {
                wx.showToast({
                    title: "复制成功",
                    icon: "success",
                    duration: 1e3
                });
            }
        });
    },
    paste: function() {
        var a = this;
        wx.getClipboardData({
            success: function(t) {
                a.setData({
                    pasted: t.data
                }), wx.showToast({
                    title: "粘贴成功",
                    icon: "success",
                    duration: 1e3
                });
            }
        });
    }
});