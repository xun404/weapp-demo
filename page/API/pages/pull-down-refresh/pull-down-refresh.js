Page({
    onShareAppMessage: function() {
        return {
            title: "下拉刷新",
            path: "page/API/pages/pull-down-refresh/pull-down-refresh"
        };
    },
    onPullDownRefresh: function() {
        wx.showToast({
            title: "loading...",
            icon: "loading"
        }), console.log("onPullDownRefresh", new Date());
    },
    stopPullDownRefresh: function() {
        wx.stopPullDownRefresh({
            complete: function(e) {
                wx.hideToast(), console.log(e, new Date());
            }
        });
    }
});