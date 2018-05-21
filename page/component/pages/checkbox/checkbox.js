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
    checkboxChange: function(e) {
        console.log("checkbox发生change事件，携带value值为：", e.detail.value);
        for (var a = this.data.items, t = e.detail.value, l = 0, c = a.length; l < c; ++l) {
            a[l].checked = !1;
            for (var n = 0, u = t.length; n < u; ++n) if (a[l].value == t[n]) {
                a[l].checked = !0;
                break;
            }
        }
        this.setData({
            items: a
        });
    }
});