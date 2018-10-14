function t(t, e) {
    wx.showModal({
        title: t,
        content: e,
        showCancel: !1
    });
}

function e(t) {
    wx.showToast({
        title: t,
        icon: "success",
        duration: 1e3
    });
}

Page({
    onShareAppMessage: function() {
        return {
            title: "Web Socket",
            path: "page/API/pages/web-socket/web-socket"
        };
    },
    data: {
        socketStatus: "closed"
    },
    onLoad: function() {
        this.setData({
            hasLogin: !0
        });
    },
    onUnload: function() {
        this.closeSocket();
    },
    toggleSocket: function(t) {
        var e = t.detail.value;
        if (e && "closed" === this.data.socketStatus) this.openSocket(); else if (!e && "connected" === this.data.socketStatus) {
            this.closeSocket(!0);
        }
    },
    openSocket: function() {
        var o = this;
        wx.onSocketOpen(function() {
            console.log("WebSocket 已连接"), e("Socket已连接"), o.setData({
                socketStatus: "connected",
                waitingResponse: !1
            });
        }), wx.onSocketClose(function() {
            console.log("WebSocket 已断开"), o.setData({
                socketStatus: "closed"
            });
        }), wx.onSocketError(function(e) {
            t("发生错误", JSON.stringify(e)), console.error("socket error:", e), o.setData({
                loading: !1
            });
        }), wx.onSocketMessage(function(t) {
            e("收到信道消息"), console.log("socket message:", t), o.setData({
                loading: !1
            });
        }), wx.connectSocket({
            url: "wss://echo.websocket.org"
        });
    },
    closeSocket: function() {
        var t = this;
        "connected" === this.data.socketStatus && wx.closeSocket({
            success: function() {
                e("Socket已断开"), t.setData({
                    socketStatus: "closed"
                });
            }
        });
    },
    sendMessage: function() {
        "connected" === this.data.socketStatus && wx.sendSocketMessage({
            data: "Hello, Miniprogram!"
        });
    }
});