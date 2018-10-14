Page({
    onShareAppMessage: function() {
        return {
            title: "iBeacon",
            path: "page/API/pages/ibeacon/ibeacon"
        };
    },
    data: {
        uuid: "",
        beacons: []
    },
    onUnload: function() {
        this.stopSearch();
    },
    enterUuid: function(a) {
        this.setData({
            uuid: a.detail.value
        });
    },
    startSearch: function() {
        var a = this;
        this._searching || (this._searching = !0, wx.startBeaconDiscovery({
            uuids: [ this.data.uuid ],
            success: function(e) {
                console.log(e), wx.onBeaconUpdate(function(e) {
                    var t = e.beacons;
                    a.setData({
                        beacons: t
                    });
                });
            },
            fail: function(a) {
                console.error(a);
            }
        }));
    },
    stopSearch: function() {
        this._searching = !1, wx.stopBeaconDiscovery();
    }
});