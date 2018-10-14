Page({
    onShareAppMessage: function() {
        return {
            title: "swiper",
            path: "page/component/pages/swiper/swiper"
        };
    },
    data: {
        background: [ "demo-text-1", "demo-text-2", "demo-text-3" ],
        indicatorDots: !0,
        vertical: !1,
        autoplay: !1,
        interval: 2e3,
        duration: 500
    },
    changeIndicatorDots: function() {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        });
    },
    changeAutoplay: function() {
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