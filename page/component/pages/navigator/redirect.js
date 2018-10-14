Page({
    onShareAppMessage: function() {
        return {
            title: "redirectPage",
            path: "page/component/pages/navigator/redirect"
        };
    },
    onLoad: function(e) {
        console.log(e), this.setData({
            title: e.title
        });
    }
});