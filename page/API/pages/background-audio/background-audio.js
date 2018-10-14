var a = getApp(), t = require("../../../../util/util.js"), e = "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46";

Page({
    onShareAppMessage: function() {
        return {
            title: "背景音乐",
            path: "page/API/pages/background-audio/background-audio"
        };
    },
    onLoad: function() {
        this._enableInterval(), a.globalData.backgroundAudioPlaying && this.setData({
            playing: !0
        });
    },
    data: {
        playing: !1,
        playTime: 0,
        formatedPlayTime: "00:00:00"
    },
    play: function() {
        var t = this;
        wx.playBackgroundAudio({
            dataUrl: e,
            title: "此时此刻",
            coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
            complete: function() {
                t.setData({
                    playing: !0
                });
            }
        }), this._enableInterval(), a.globalData.backgroundAudioPlaying = !0;
    },
    seek: function(a) {
        clearInterval(this.updateInterval);
        var t = this;
        wx.seekBackgroundAudio({
            position: a.detail.value,
            complete: function() {
                setTimeout(function() {
                    t._enableInterval();
                }, 2e3);
            }
        });
    },
    pause: function() {
        var t = this;
        wx.pauseBackgroundAudio({
            dataUrl: e,
            success: function() {
                t.setData({
                    playing: !1
                });
            }
        }), a.globalData.backgroundAudioPlaying = !1;
    },
    stop: function() {
        var n = this;
        wx.stopBackgroundAudio({
            dataUrl: e,
            success: function() {
                n.setData({
                    playing: !1,
                    playTime: 0,
                    formatedPlayTime: t.formatTime(0)
                });
            }
        }), a.globalData.backgroundAudioPlaying = !1;
    },
    _enableInterval: function() {
        function a() {
            wx.getBackgroundAudioPlayerState({
                success: function(a) {
                    e.setData({
                        playTime: a.currentPosition,
                        formatedPlayTime: t.formatTime(a.currentPosition + 1)
                    });
                }
            });
        }
        var e = this;
        a(), this.updateInterval = setInterval(a, 500);
    },
    onUnload: function() {
        clearInterval(this.updateInterval);
    }
});