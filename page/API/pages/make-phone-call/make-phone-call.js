Page({
    data: {
        disabled: !0
    },
    bindInput: function(e) {
        this.inputValue = e.detail.value, this.inputValue.length > 0 ? this.setData({
            disabled: !1
        }) : this.setData({
            disabled: !0
        });
    },
    makePhoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: this.inputValue,
            success: function() {
                console.log("成功拨打电话");
            }
        });
    }
});