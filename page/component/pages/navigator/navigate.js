Page({
    onShareAppMessage: function() {
        return {
            title: "navigatePage",
            path: "page/component/pages/navigator/navigate"
        };
    },
    onLoad: function(t) {
        console.log(t), this.setData({
            title: t.title
        });
    }
});