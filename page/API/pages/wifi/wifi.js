Page({
    onShareAppMessage: function() {
        return {
            title: "Wi-Fi",
            path: "page/API/pages/wifi/wifi"
        };
    },
    data: {
        wifiList: []
    },
    onUnload: function() {
        this.stopSearch();
    },
    startSearch: function() {
        var t = this, i = function() {
            wx.getWifiList({
                success: function() {
                    wx.onGetWifiList(function(i) {
                        var n = i.wifiList.sort(function(t, i) {
                            return i.signalStrength - t.signalStrength;
                        }).map(function(t) {
                            var i = Math.ceil(4 * t.signalStrength);
                            return Object.assign(t, {
                                strength: i
                            });
                        });
                        t.setData({
                            wifiList: n
                        });
                    });
                },
                fail: function(t) {
                    console.error(t);
                }
            });
        }, n = function() {
            wx.startWifi({
                success: i,
                fail: function(t) {
                    console.error(t);
                }
            });
        };
        wx.getSystemInfo({
            success: function(t) {
                "ios" === t.platform ? wx.showModal({
                    title: "提示",
                    content: "由于系统限制，iOS用户请手动进入系统WiFi页面，然后返回小程序。",
                    showCancel: !1,
                    success: function() {
                        n();
                    }
                }) : n();
            }
        });
    },
    stopSearch: function() {
        wx.stopWifi({
            success: function(t) {
                console.log(t);
            },
            fail: function(t) {
                console.error(t);
            }
        });
    }
});