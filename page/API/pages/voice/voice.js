var e, a, t = require("../../../../util/util.js");

Page({
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
        var e = this;
        a = setInterval(function() {
            var a = e.data.recordTime += 1;
            e.setData({
                formatedRecordTime: t.formatTime(e.data.recordTime),
                recordTime: a
            });
        }, 1e3), wx.startRecord({
            success: function(a) {
                e.setData({
                    hasRecord: !0,
                    tempFilePath: a.tempFilePath,
                    formatedPlayTime: t.formatTime(e.data.playTime)
                });
            },
            complete: function() {
                e.setData({
                    recording: !1
                }), clearInterval(a);
            }
        });
    },
    stopRecord: function() {
        wx.stopRecord();
    },
    stopRecordUnexpectedly: function() {
        var e = this;
        wx.stopRecord({
            success: function() {
                console.log("stop record success"), clearInterval(a), e.setData({
                    recording: !1,
                    hasRecord: !1,
                    recordTime: 0,
                    formatedRecordTime: t.formatTime(0)
                });
            }
        });
    },
    playVoice: function() {
        var a = this;
        e = setInterval(function() {
            var e = a.data.playTime + 1;
            console.log("update playTime", e), a.setData({
                playing: !0,
                formatedPlayTime: t.formatTime(e),
                playTime: e
            });
        }, 1e3), wx.playVoice({
            filePath: this.data.tempFilePath,
            success: function() {
                clearInterval(e);
                console.log("play voice finished"), a.setData({
                    playing: !1,
                    formatedPlayTime: t.formatTime(0),
                    playTime: 0
                });
            }
        });
    },
    pauseVoice: function() {
        clearInterval(e), wx.pauseVoice(), this.setData({
            playing: !1
        });
    },
    stopVoice: function() {
        clearInterval(e), this.setData({
            playing: !1,
            formatedPlayTime: t.formatTime(0),
            playTime: 0
        }), wx.stopVoice();
    },
    clear: function() {
        clearInterval(e), wx.stopVoice(), this.setData({
            playing: !1,
            hasRecord: !1,
            tempFilePath: "",
            formatedRecordTime: t.formatTime(0),
            recordTime: 0,
            playTime: 0
        });
    }
});