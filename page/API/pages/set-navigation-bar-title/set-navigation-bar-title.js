Page({
    onShareAppMessage: function() {
        return {
            title: "设置页面标题",
            path: "page/API/pages/set-navigation-bar-title/set-navigation-bar-title"
        };
    },
    setNaivgationBarTitle: function(t) {
        var e = t.detail.value.title;
        return console.log(e), wx.setNavigationBarTitle({
            title: e,
            success: function() {
                console.log("setNavigationBarTitle success");
            },
            fail: function(t) {
                console.log("setNavigationBarTitle fail, err is", t);
            }
        }), !1;
    }
});