Page({
    data: {
        items: [ {
            value: "USA",
            name: "美国"
        }, {
            value: "CHN",
            name: "中国",
            checked: "true"
        }, {
            value: "BRA",
            name: "巴西"
        }, {
            value: "JPN",
            name: "日本"
        }, {
            value: "ENG",
            name: "英国"
        }, {
            value: "FRA",
            name: "法国"
        } ]
    },
    radioChange: function(e) {
        console.log("radio发生change事件，携带value值为：", e.detail.value);
        for (var a = this.data.items, t = 0, l = a.length; t < l; ++t) a[t].checked = a[t].value == e.detail.value;
        this.setData({
            items: a
        });
    }
});