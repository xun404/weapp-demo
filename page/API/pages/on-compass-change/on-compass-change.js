Page({
    onShareAppMessage: function() {
        return {
            title: "监听罗盘数据",
            path: "page/API/pages/on-compass-change/on-compass-change"
        };
    },
    data: {
        enabled: !0,
        direction: 0
    },
    onReady: function() {
        var a = this;
        wx.onCompassChange(function(s) {
            a.setData({
                direction: parseInt(s.direction, 10)
            });
        });
    },
    startCompass: function() {
        if (!this.data.enabled) {
            var a = this;
            wx.startCompass({
                success: function() {
                    a.setData({
                        enabled: !0
                    });
                }
            });
        }
    },
    stopCompass: function() {
        if (this.data.enabled) {
            var a = this;
            wx.stopCompass({
                success: function() {
                    a.setData({
                        enabled: !1
                    });
                }
            });
        }
    }
});