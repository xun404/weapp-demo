Page({
    onShareAppMessage: function() {
        return {
            title: "收货地址",
            path: "page/API/pages/choose-address/choose-address"
        };
    },
    data: {
        addressInfo: null
    },
    chooseAddress: function() {
        var s = this;
        wx.chooseAddress({
            success: function(e) {
                s.setData({
                    addressInfo: e
                });
            },
            fail: function(s) {
                console.log(s);
            }
        });
    }
});