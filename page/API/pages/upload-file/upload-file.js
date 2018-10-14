var e = require("../../../../config").uploadFileUrl;

Page({
    onShareAppMessage: function() {
        return {
            title: "上传文件",
            path: "page/API/pages/upload-file/upload-file"
        };
    },
    chooseImage: function() {
        var s = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album" ],
            success: function(o) {
                console.log("chooseImage success, temp path is", o.tempFilePaths[0]);
                var a = o.tempFilePaths[0];
                wx.uploadFile({
                    url: e,
                    filePath: a,
                    name: "data",
                    success: function(e) {
                        console.log("uploadImage success, res is:", e), wx.showToast({
                            title: "上传成功",
                            icon: "success",
                            duration: 1e3
                        }), s.setData({
                            imageSrc: a
                        });
                    },
                    fail: function(e) {
                        var s = e.errMsg;
                        console.log("uploadImage fail, errMsg is", s);
                    }
                });
            },
            fail: function(e) {
                var s = e.errMsg;
                console.log("chooseImage fail, err is", s);
            }
        });
    }
});