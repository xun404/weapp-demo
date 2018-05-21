var a = [ [ "camera" ], [ "album" ], [ "camera", "album" ] ], e = [ [ "front" ], [ "back" ], [ "front", "back" ] ], t = Array.apply(null, {
    length: 60
}).map(function(a, e) {
    return e + 1;
});

Page({
    data: {
        sourceTypeIndex: 2,
        sourceType: [ "拍摄", "相册", "拍摄或相册" ],
        cameraIndex: 2,
        camera: [ "前置", "后置", "前置或后置" ],
        durationIndex: 59,
        duration: t.map(function(a) {
            return a + "秒";
        }),
        src: ""
    },
    sourceTypeChange: function(a) {
        this.setData({
            sourceTypeIndex: a.detail.value
        });
    },
    cameraChange: function(a) {
        this.setData({
            cameraIndex: a.detail.value
        });
    },
    durationChange: function(a) {
        this.setData({
            durationIndex: a.detail.value
        });
    },
    chooseVideo: function() {
        var n = this;
        wx.chooseVideo({
            sourceType: a[this.data.sourceTypeIndex],
            camera: e[this.data.cameraIndex],
            maxDuration: t[this.data.durationIndex],
            success: function(a) {
                n.setData({
                    src: a.tempFilePath
                });
            }
        });
    }
});