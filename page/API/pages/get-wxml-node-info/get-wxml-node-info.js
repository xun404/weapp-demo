Page({
    onShareAppMessage: function() {
        return {
            title: "获取WXML节点信息",
            path: "page/API/pages/get-wxml-node-info/get-wxml-node-info"
        };
    },
    data: {
        metrics: []
    },
    onReady: function() {
        this.getNodeInfo();
    },
    getNodeInfo: function() {
        var e = this, t = wx.createSelectorQuery();
        t.select(".target").boundingClientRect(), t.exec(function(t) {
            var a = t[0];
            if (a) {
                var n = [];
                for (var i in a) if ("id" !== i && "dataset" !== i) {
                    var o = a[i];
                    n.push({
                        key: i,
                        val: o
                    });
                }
                e.setData({
                    metrics: n
                });
            }
        });
    }
});