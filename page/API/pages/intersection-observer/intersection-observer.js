Page({
    onShareAppMessage: function() {
        return {
            title: "WXML节点布局相交状态",
            path: "page/API/pages/intersection-observer/intersection-observer"
        };
    },
    data: {
        appear: !1
    },
    onLoad: function() {
        var e = this;
        this._observer = wx.createIntersectionObserver(this), this._observer.relativeTo(".scroll-view").observe(".ball", function(t) {
            console.log(t), e.setData({
                appear: t.intersectionRatio > 0
            });
        });
    },
    onUnload: function() {
        this._observer && this._observer.disconnect();
    }
});