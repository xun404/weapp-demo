Page({
    onShareAppMessage: function() {
        return {
            title: "生物认证",
            path: "page/API/pages/soter-authentication/soter-authentication"
        };
    },
    startAuth: function() {
        var t = function() {
            wx.startSoterAuthentication({
                requestAuthModes: [ "fingerPrint" ],
                challenge: "test",
                authContent: "小程序示例",
                success: function() {
                    wx.showToast({
                        title: "认证成功"
                    });
                },
                fail: function(t) {
                    console.error(t), wx.showModal({
                        title: "失败",
                        content: "认证失败",
                        showCancel: !1
                    });
                }
            });
        }, e = function() {
            wx.checkIsSoterEnrolledInDevice({
                checkAuthMode: "fingerPrint",
                success: function(e) {
                    console.log(e), parseInt(e.isEnrolled, 10) <= 0 ? wx.showModal({
                        title: "错误",
                        content: "您暂未录入指纹信息，请录入后重试",
                        showCancel: !1
                    }) : t();
                },
                fail: function(t) {
                    console.error(t);
                }
            });
        };
        wx.checkIsSupportSoterAuthentication({
            success: function(t) {
                console.log(t), e();
            },
            fail: function(t) {
                console.error(t), wx.showModal({
                    title: "错误",
                    content: "您的设备不支持指纹识别",
                    showCancel: !1
                });
            }
        });
    }
});