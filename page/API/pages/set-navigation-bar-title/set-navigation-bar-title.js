Page({
    setNaivgationBarTitle: function(t) {
        var i = t.detail.value.title;
        return console.log(i), wx.setNavigationBarTitle({
            title: i,
            success: function() {
                console.log("setNavigationBarTitle success");
            },
            fail: function(t) {
                console.log("setNavigationBarTitle fail, err is", t);
            }
        }), !1;
    }
});