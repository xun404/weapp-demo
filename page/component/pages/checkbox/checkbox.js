Page({
    onShareAppMessage: function() {
        return {
            title: "checkbox",
            path: "page/component/pages/checkbox/checkbox"
        };
    },
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
        for (var a = this.data.items, t = e.detail.value, c = 0, n = a.length; c < n; ++c) {
            a[c].checked = !1;
            for (var l = 0, h = t.length; l < h; ++l) if (a[c].value === t[l]) {
                a[c].checked = !0;
                break;
            }
        }
        this.setData({
            items: a
        });
    }
});