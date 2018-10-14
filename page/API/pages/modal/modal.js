Page({
    onShareAppMessage: function() {
        return {
            title: "模态弹窗",
            path: "page/API/pages/modal/modal"
        };
    },
    data: {
        modalHidden: !0,
        modalHidden2: !0
    },
    modalTap: function() {
        wx.showModal({
            title: "弹窗标题",
            content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
            showCancel: !1,
            confirmText: "确定"
        });
    },
    noTitlemodalTap: function() {
        wx.showModal({
            content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
            confirmText: "确定",
            cancelText: "取消"
        });
    }
});