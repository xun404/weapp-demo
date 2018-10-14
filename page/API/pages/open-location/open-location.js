Page({
    onShareAppMessage: function() {
        return {
            title: "查看位置",
            path: "page/API/pages/open-location/open-location"
        };
    },
    openLocation: function(e) {
        console.log(e);
        var o = e.detail.value;
        console.log(o), wx.openLocation({
            longitude: Number(o.longitude),
            latitude: Number(o.latitude),
            name: o.name,
            address: o.address
        });
    }
});