for (var a = new Date(), e = [], t = [], s = [], i = 1990; i <= a.getFullYear(); i++) e.push(i);

for (var r = 1; r <= 12; r++) t.push(r);

for (var n = 1; n <= 31; n++) s.push(n);

Page({
    onShareAppMessage: function() {
        return {
            title: "picker-view",
            path: "page/component/pages/picker-view/picker-view"
        };
    },
    data: {
        years: e,
        year: a.getFullYear(),
        months: t,
        month: 2,
        days: s,
        day: 2,
        value: [ 9999, 1, 1 ],
        isDaytime: !0
    },
    bindChange: function(a) {
        var e = a.detail.value;
        this.setData({
            year: this.data.years[e[0]],
            month: this.data.months[e[1]],
            day: this.data.days[e[2]],
            isDaytime: !e[3]
        });
    }
});