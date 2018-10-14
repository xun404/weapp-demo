Page({
    onShareAppMessage: function() {
        return {
            title: "操作菜单",
            path: "page/API/pages/action-sheet/action-sheet"
        };
    },
    actionSheetTap: function() {
        wx.showActionSheet({
            itemList: [ "item1", "item2", "item3", "item4" ],
            success: function(e) {
                console.log(e.tapIndex);
            }
        });
    }
});