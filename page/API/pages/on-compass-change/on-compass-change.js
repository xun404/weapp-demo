Page({
    data: {
        enabled: !0,
        direction: 0
    },
    onReady: function() {
        var t = this;
        wx.onCompassChange(function(a) {
            t.setData({
                direction: parseInt(a.direction)
            });
        });
    },
    startCompass: function() {
        if (!this.data.enabled) {
            var t = this;
            wx.startCompass({
                success: function() {
                    t.setData({
                        enabled: !0
                    });
                }
            });
        }
    },
    stopCompass: function() {
        if (this.data.enabled) {
            var t = this;
            wx.stopCompass({
                success: function() {
                    t.setData({
                        enabled: !1
                    });
                }
            });
        }
    }
});