Page({
    onShareAppMessage: function() {
        return {
            title: "监听重力感应数据",
            path: "page/API/pages/on-accelerometer-change/on-accelerometer-change"
        };
    },
    data: {
        x: 0,
        y: 0,
        z: 0,
        enabled: !0
    },
    onReady: function() {
        this.drawBigBall();
        var a = this;
        this.position = {
            x: 151,
            y: 151,
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0
        }, wx.onAccelerometerChange(function(t) {
            a.setData({
                x: t.x.toFixed(2),
                y: t.y.toFixed(2),
                z: t.z.toFixed(2)
            }), a.position.ax = Math.sin(t.x * Math.PI / 2), a.position.ay = -Math.sin(t.y * Math.PI / 2);
        }), this.interval = setInterval(function() {
            a.drawSmallBall();
        }, 17);
    },
    drawBigBall: function() {
        var a = wx.createContext();
        a.beginPath(0), a.arc(151, 151, 140, 0, 2 * Math.PI), a.setFillStyle("#ffffff"), 
        a.setStrokeStyle("#aaaaaa"), a.fill(), wx.drawCanvas({
            canvasId: "big-ball",
            actions: a.getActions()
        });
    },
    drawSmallBall: function() {
        var a = this.position, t = "rgba(1,1,1,0)";
        a.x += a.vx, a.y += a.vy, a.vx += a.ax, a.vy += a.ay, Math.sqrt(Math.pow(Math.abs(a.x) - 151, 2) + Math.pow(Math.abs(a.y) - 151, 2)) >= 115 && (a.x > 151 && a.vx > 0 && (a.vx = 0), 
        a.x < 151 && a.vx < 0 && (a.vx = 0), a.y > 151 && a.vy > 0 && (a.vy = 0), a.y < 151 && a.vy < 0 && (a.vy = 0), 
        t = "#ff0000");
        var e = wx.createContext();
        e.beginPath(0), e.arc(a.x, a.y, 15, 0, 2 * Math.PI), e.setFillStyle("#1aad19"), 
        e.setStrokeStyle(t), e.fill(), wx.drawCanvas({
            canvasId: "small-ball",
            actions: e.getActions()
        });
    },
    startAccelerometer: function() {
        if (!this.data.enabled) {
            var a = this;
            wx.startAccelerometer({
                success: function() {
                    a.setData({
                        enabled: !0
                    });
                }
            });
        }
    },
    stopAccelerometer: function() {
        if (this.data.enabled) {
            var a = this;
            wx.stopAccelerometer({
                success: function() {
                    a.setData({
                        enabled: !1
                    });
                }
            });
        }
    },
    onUnload: function() {
        clearInterval(this.interval);
    }
});