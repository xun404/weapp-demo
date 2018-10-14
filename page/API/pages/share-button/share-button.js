Page({
    onShareAppMessage: function() {
        return {
            title: "转发按钮",
            path: "page/API/pages/share-button/share-button"
        };
    },
    handleTapShareButton: function() {
        "function" == typeof wx.canIUse && wx.canIUse("button.open-type.share") || wx.showModal({
            title: "当前版本不支持转发按钮",
            content: "请升级至最新版本微信客户端",
            showCancel: !1
        });
    }
});