var o = [ "demo1", "demo2", "demo3" ];

Page({
    onShareAppMessage: function() {
        return {
            title: "scroll-view",
            path: "page/component/pages/scroll-view/scroll-view"
        };
    },
    data: {
        toView: "green"
    },
    upper: function(o) {
        console.log(o);
    },
    lower: function(o) {
        console.log(o);
    },
    scroll: function(o) {
        console.log(o);
    },
    scrollToTop: function() {
        this.setAction({
            scrollTop: 0
        });
    },
    tap: function() {
        for (var t = 0; t < o.length; ++t) if (o[t] === this.data.toView) {
            this.setData({
                toView: o[t + 1],
                scrollTop: 200 * (t + 1)
            });
            break;
        }
    },
    tapMove: function() {
        this.setData({
            scrollTop: this.data.scrollTop + 10
        });
    }
});