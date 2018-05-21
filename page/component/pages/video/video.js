function t() {
    for (var t = [], o = 0; o < 3; ++o) {
        var e = Math.floor(256 * Math.random()).toString(16);
        e = 1 == e.length ? "0" + e : e, t.push(e);
    }
    return "#" + t.join("");
}

Page({
    onReady: function(t) {
        this.videoContext = wx.createVideoContext("myVideo");
    },
    inputValue: "",
    data: {
        src: "",
        danmuList: [ {
            text: "第 1s 出现的弹幕",
            color: "#ff0000",
            time: 1
        }, {
            text: "第 3s 出现的弹幕",
            color: "#ff00ff",
            time: 3
        } ]
    },
    bindInputBlur: function(t) {
        this.inputValue = t.detail.value;
    },
    bindButtonTap: function() {
        var t = this;
        wx.chooseVideo({
            sourceType: [ "album", "camera" ],
            maxDuration: 60,
            camera: [ "front", "back" ],
            success: function(o) {
                t.setData({
                    src: o.tempFilePath
                });
            }
        });
    },
    bindSendDanmu: function() {
        this.videoContext.sendDanmu({
            text: this.inputValue,
            color: t()
        });
    },
    videoErrorCallback: function(t) {
        console.log("视频错误信息:"), console.log(t.detail.errMsg);
    }
});