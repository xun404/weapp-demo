Page({
    onShareAppMessage: function() {
        return {
            title: "屏幕亮度",
            path: "page/API/pages/screen-brightness/screen-brightness"
        };
    },
    data: {
        screenBrightness: 0
    },
    onLoad: function() {
        this._updateScreenBrightness();
    },
    changeBrightness: function(e) {
        var s = this, t = Number.parseFloat(e.detail.value.toFixed(1));
        wx.setScreenBrightness({
            value: t,
            success: function() {
                s._updateScreenBrightness();
            }
        });
    },
    _updateScreenBrightness: function() {
        var e = this;
        wx.getScreenBrightness({
            success: function(s) {
                e.setData({
                    screenBrightness: Number.parseFloat(s.value.toFixed(1))
                });
            },
            fail: function(e) {
                console.error(e);
            }
        });
    }
});