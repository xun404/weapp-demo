Page({
    onReady: function() {
        this.position = {
            x: 150,
            y: 150,
            vx: 2,
            vy: 2
        }, this.drawBall(), this.interval = setInterval(this.drawBall, 17);
    },
    drawBall: function() {
        function t(t, a) {
            n.beginPath(0), n.arc(t, a, 5, 0, 2 * Math.PI), n.setFillStyle("#1aad19"), n.setStrokeStyle("rgba(1,1,1,0)"), 
            n.fill(), n.stroke();
        }
        var a = this.position;
        a.x += a.vx, a.y += a.vy, a.x >= 300 && (a.vx = -2), a.x <= 7 && (a.vx = 2), a.y >= 300 && (a.vy = -2), 
        a.y <= 7 && (a.vy = 2);
        var n = wx.createContext();
        t(a.x, 150), t(150, a.y), t(300 - a.x, 150), t(150, 300 - a.y), t(a.x, a.y), t(300 - a.x, 300 - a.y), 
        t(a.x, 300 - a.y), t(300 - a.x, a.y), wx.drawCanvas({
            canvasId: "canvas",
            actions: n.getActions()
        });
    },
    onUnload: function() {
        clearInterval(this.interval);
    }
});