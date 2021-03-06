var e = require("../../../../config").downloadExampleUrl;

Page({
    onShareAppMessage: function() {
        return {
            title: "下载文件",
            path: "page/API/pages/download-file/download-file"
        };
    },
    downloadImage: function() {
        var o = this;
        wx.downloadFile({
            url: e,
            success: function(e) {
                console.log("downloadFile success, res is", e), o.setData({
                    imageSrc: e.tempFilePath
                });
            },
            fail: function(e) {
                var o = e.errMsg;
                console.log("downloadFile fail, err is:", o);
            }
        });
    }
});