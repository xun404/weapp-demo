Page({
    onLoad: function(t) {
        console.log(t), this.setData({
            title: t.title
        });
    }
});