Page({
    data: {
        background: [ "demo-text-1", "demo-text-2", "demo-text-3" ],
        indicatorDots: !0,
        vertical: !1,
        autoplay: !1,
        interval: 2e3,
        duration: 500
    },
    changeIndicatorDots: function(t) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        });
    },
    changeAutoplay: function(t) {
        this.setData({
            autoplay: !this.data.autoplay
        });
    },
    intervalChange: function(t) {
        this.setData({
            interval: t.detail.value
        });
    },
    durationChange: function(t) {
        this.setData({
            duration: t.detail.value
        });
    }
});