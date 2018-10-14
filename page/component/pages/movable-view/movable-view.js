Page({
    onShareAppMessage: function() {
        return {
            title: "movable-view",
            path: "page/component/pages/movable-view/movable-view"
        };
    },
    data: {
        x: 0,
        y: 0,
        scale: 2
    },
    tap: function() {
        this.setData({
            x: 30,
            y: 30
        });
    },
    tap2: function() {
        this.setData({
            scale: 3
        });
    },
    onChange: function(e) {
        console.log(e.detail);
    },
    onScale: function(e) {
        console.log(e.detail);
    }
});