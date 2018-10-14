Page({
    onShareAppMessage: function() {
        return {
            title: "标题栏加载动画",
            path: "page/API/pages/navigation-bar-loading/navigation-bar-loading"
        };
    },
    showNavigationBarLoading: function() {
        wx.showNavigationBarLoading();
    },
    hideNavigationBarLoading: function() {
        wx.hideNavigationBarLoading();
    }
});