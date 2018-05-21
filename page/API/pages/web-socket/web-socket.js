function t(t, o) {
    wx.showModal({
        title: t,
        content: o,
        showCancel: !1
    });
}

function o(t) {
    wx.showToast({
        title: t,
        icon: "success",
        duration: 1e3
    });
}

var e = require("../../../../vendor/qcloud-weapp-client-sdk/index"), s = require("../../../../config").loginUrl, n = require("../../../../config").tunnelUrl;

Page({
    data: {
        socketStatus: "closed"
    },
    onLoad: function() {
        var t = this;
        e.setLoginUrl(s), e.login({
            success: function(o) {
                console.log("登录成功", o), t.setData({
                    hasLogin: !0
                });
            },
            fail: function(t) {
                console.log("登录失败", t);
            }
        });
    },
    onUnload: function() {
        this.closeSocket();
    },
    toggleSocket: function(t) {
        var o = t.detail.value;
        if (o && "closed" == this.data.socketStatus) this.openSocket(); else if (!o && "connected" == this.data.socketStatus) {
            this.closeSocket(!0);
        }
    },
    openSocket: function() {
        var s = this, c = this.socket = new e.Tunnel(n);
        c.on("connect", function() {
            console.log("WebSocket 已连接"), o("Socket已连接"), s.setData({
                socketStatus: "connected",
                waitingResponse: !1
            });
        }), c.on("close", function() {
            console.log("WebSocket 已断开"), s.setData({
                socketStatus: "closed"
            });
        }), c.on("error", function(o) {
            t("发生错误", JSON.stringify(o)), console.error("socket error:", o), s.setData({
                loading: !1
            });
        }), c.on("message", function(t) {
            o("收到信道消息"), console.log("socket message:", t), s.setData({
                loading: !1
            });
        }), c.open();
    },
    closeSocket: function(t) {
        this.socket && this.socket.close(), t && o("Socket已断开"), this.setData({
            socketStatus: "closed"
        });
    },
    sendMessage: function() {
        this.socket && this.socket.isActive() && (this.socket.emit("message", {
            content: "Hello, 小程序!"
        }), this.setData({
            loading: !0
        }));
    }
});