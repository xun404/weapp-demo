function t() {
    for (var t = [], e = 0; e < 3; ++e) {
        var o = Math.floor(256 * Math.random()).toString(16);
        o = 1 === o.length ? "0" + o : o, t.push(o);
    }
    return "#" + t.join("");
}

Page({
    onShareAppMessage: function() {
        return {
            title: "video",
            path: "page/component/pages/video/video"
        };
    },
    onReady: function() {
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
            success: function(e) {
                t.setData({
                    src: e.tempFilePath
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