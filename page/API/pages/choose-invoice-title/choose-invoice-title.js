Page({
    onShareAppMessage: function() {
        return {
            title: "获取发票抬头",
            path: "page/API/pages/choose-invoice-title/choose-invoice-title"
        };
    },
    data: {
        type: "",
        title: "",
        taxNumber: "",
        companyAddress: "",
        telephone: "",
        bankName: "",
        bankAccount: ""
    },
    chooseInvoiceTitle: function() {
        var e = this;
        wx.chooseInvoiceTitle({
            success: function(t) {
                e.setData({
                    type: t.type,
                    title: t.title,
                    taxNumber: t.taxNumber,
                    companyAddress: t.companyAddress,
                    telephone: t.telephone,
                    bankName: t.bankName,
                    bankAccount: t.bankAccount
                });
            },
            fail: function(e) {
                console.error(e);
            }
        });
    }
});