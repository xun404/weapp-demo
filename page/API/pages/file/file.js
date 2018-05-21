Page({
    onLoad: function() {
        this.setData({
            savedFilePath: wx.getStorageSync("savedFilePath")
        });
    },
    data: {
        tempFilePath: "",
        savedFilePath: "",
        dialog: {
            hidden: !0
        }
    },
    chooseImage: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            success: function(e) {
                t.setData({
                    tempFilePath: e.tempFilePaths[0]
                });
            }
        });
    },
    saveFile: function() {
        if (this.data.tempFilePath.length > 0) {
            var t = this;
            wx.saveFile({
                tempFilePath: this.data.tempFilePath,
                success: function(e) {
                    t.setData({
                        savedFilePath: e.savedFilePath
                    }), wx.setStorageSync("savedFilePath", e.savedFilePath), t.setData({
                        dialog: {
                            title: "保存成功",
                            content: "下次进入应用时，此文件仍可用",
                            hidden: !1
                        }
                    });
                },
                fail: function(e) {
                    t.setData({
                        dialog: {
                            title: "保存失败",
                            content: "应该是有 bug 吧",
                            hidden: !1
                        }
                    });
                }
            });
        }
    },
    clear: function() {
        wx.setStorageSync("savedFilePath", ""), this.setData({
            tempFilePath: "",
            savedFilePath: ""
        });
    },
    confirm: function() {
        this.setData({
            "dialog.hidden": !0
        });
    }
});