Page({
    onShareAppMessage: function() {
        return {
            title: "camera",
            path: "page/component/pages/camera/camera"
        };
    },
    data: {
        src: "",
        videoSrc: "",
        position: "back",
        mode: "scanCode",
        result: {}
    },
    onLoad: function() {
        this.ctx = wx.createCameraContext();
    },
    takePhoto: function() {
        var t = this;
        this.ctx.takePhoto({
            quality: "high",
            success: function(o) {
                t.setData({
                    src: o.tempImagePath
                });
            }
        });
    },
    startRecord: function() {
        this.ctx.startRecord({
            success: function() {
                console.log("startRecord");
            }
        });
    },
    stopRecord: function() {
        var t = this;
        this.ctx.stopRecord({
            success: function(o) {
                t.setData({
                    src: o.tempThumbPath,
                    videoSrc: o.tempVideoPath
                });
            }
        });
    },
    togglePosition: function() {
        this.setData({
            position: "front" === this.data.position ? "back" : "front"
        });
    },
    error: function(t) {
        console.log(t.detail);
    }
});