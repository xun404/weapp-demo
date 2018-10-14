Page({
    onShareAppMessage: function() {
        return {
            title: "页面跳转",
            path: "page/API/pages/navigator/navigator"
        };
    },
    navigateTo: function() {
        wx.navigateTo({
            url: "./navigator"
        });
    },
    navigateBack: function() {
        wx.navigateBack();
    },
    redirectTo: function() {
        wx.redirectTo({
            url: "./navigator"
        });
    },
    switchTab: function() {
        wx.switchTab({
            url: "/page/component/index"
        });
    },
    reLaunch: function() {
        wx.reLaunch({
            url: "/page/component/index"
        });
    }
});