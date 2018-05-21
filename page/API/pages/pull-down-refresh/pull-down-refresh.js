Page({
    onPullDownRefresh: function() {
        wx.showToast({
            title: "loading...",
            icon: "loading"
        }), console.log("onPullDownRefresh", new Date());
    },
    stopPullDownRefresh: function() {
        wx.stopPullDownRefresh({
            complete: function(o) {
                wx.hideToast(), console.log(o, new Date());
            }
        });
    }
});