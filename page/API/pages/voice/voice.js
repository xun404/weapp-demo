var e = require("../../../../util/util.js"), a = void 0, t = void 0;

Page({
    onShareAppMessage: function() {
        return {
            title: "录音",
            path: "page/API/pages/voice/voice"
        };
    },
    data: {
        recording: !1,
        playing: !1,
        hasRecord: !1,
        recordTime: 0,
        playTime: 0,
        formatedRecordTime: "00:00:00",
        formatedPlayTime: "00:00:00"
    },
    onHide: function() {
        this.data.playing ? this.stopVoice() : this.data.recording && this.stopRecordUnexpectedly();
    },
    startRecord: function() {
        this.setData({
            recording: !0
        });
        var a = this;
        t = setInterval(function() {
            var t = a.data.recordTime += 1;
            a.setData({
                formatedRecordTime: e.formatTime(a.data.recordTime),
                recordTime: t
            });
        }, 1e3), wx.startRecord({
            success: function(t) {
                a.setData({
                    hasRecord: !0,
                    tempFilePath: t.tempFilePath,
                    formatedPlayTime: e.formatTime(a.data.playTime)
                });
            },
            complete: function() {
                a.setData({
                    recording: !1
                }), clearInterval(t);
            }
        });
    },
    stopRecord: function() {
        wx.stopRecord();
    },
    stopRecordUnexpectedly: function() {
        var a = this;
        wx.stopRecord({
            success: function() {
                console.log("stop record success"), clearInterval(t), a.setData({
                    recording: !1,
                    hasRecord: !1,
                    recordTime: 0,
                    formatedRecordTime: e.formatTime(0)
                });
            }
        });
    },
    playVoice: function() {
        var t = this;
        a = setInterval(function() {
            var a = t.data.playTime + 1;
            console.log("update playTime", a), t.setData({
                playing: !0,
                formatedPlayTime: e.formatTime(a),
                playTime: a
            });
        }, 1e3), wx.playVoice({
            filePath: this.data.tempFilePath,
            success: function() {
                clearInterval(a);
                console.log("play voice finished"), t.setData({
                    playing: !1,
                    formatedPlayTime: e.formatTime(0),
                    playTime: 0
                });
            }
        });
    },
    pauseVoice: function() {
        clearInterval(a), wx.pauseVoice(), this.setData({
            playing: !1
        });
    },
    stopVoice: function() {
        clearInterval(a), this.setData({
            playing: !1,
            formatedPlayTime: e.formatTime(0),
            playTime: 0
        }), wx.stopVoice();
    },
    clear: function() {
        clearInterval(a), wx.stopVoice(), this.setData({
            playing: !1,
            hasRecord: !1,
            tempFilePath: "",
            formatedRecordTime: e.formatTime(0),
            recordTime: 0,
            playTime: 0
        });
    }
});