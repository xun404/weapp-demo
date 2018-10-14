Page({
    onShareAppMessage: function() {
        return {
            title: "label",
            path: "page/component/pages/label/label"
        };
    },
    data: {
        checkboxItems: [ {
            name: "USA",
            value: "美国"
        }, {
            name: "CHN",
            value: "中国",
            checked: "true"
        } ],
        radioItems: [ {
            name: "USA",
            value: "美国"
        }, {
            name: "CHN",
            value: "中国",
            checked: "true"
        } ],
        hidden: !1
    },
    checkboxChange: function(e) {
        for (var a = e.detail.value, t = {}, c = 0; c < this.data.checkboxItems.length; c++) -1 !== a.indexOf(this.data.checkboxItems[c].name) ? t["checkboxItems[" + c + "].checked"] = !0 : t["checkboxItems[" + c + "].checked"] = !1;
        this.setData(t);
    },
    radioChange: function(e) {
        for (var a = e.detail.value, t = {}, c = 0; c < this.data.radioItems.length; c++) -1 !== a.indexOf(this.data.radioItems[c].name) ? t["radioItems[" + c + "].checked"] = !0 : t["radioItems[" + c + "].checked"] = !1;
        this.setData(t);
    },
    tapEvent: function() {
        console.log("按钮被点击");
    }
});