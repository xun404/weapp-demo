Page({
    onShareAppMessage: function() {
        return {
            title: "页面滚动",
            path: "page/API/pages/page-scroll/page-scroll"
        };
    },
    scrollToTop: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
    scrollToBottom: function() {
        wx.pageScrollTo({
            scrollTop: 3e3,
            duration: 300
        });
    }
});