var o = [ "demo1", "demo2", "demo3" ];

Page({
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
    scrollToTop: function(o) {
        this.setAction({
            scrollTop: 0
        });
    },
    tap: function(t) {
        for (var e = 0; e < o.length; ++e) if (o[e] === this.data.toView) {
            this.setData({
                toView: o[e + 1],
                scrollTop: 200 * (e + 1)
            });
            break;
        }
    },
    tapMove: function(o) {
        this.setData({
            scrollTop: this.data.scrollTop + 10
        });
    }
});