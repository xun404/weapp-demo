Page({
    onShareAppMessage: function() {
        return {
            title: "canvas",
            path: "page/component/pages/canvas/canvas"
        };
    },
    onReady: function() {
        this.position = {
            x: 150,
            y: 150,
            vx: 2,
            vy: 2
        }, this.drawBall(), this.interval = setInterval(this.drawBall, 17);
    },
    drawBall: function() {
        function a(a, t) {
            n.beginPath(0), n.arc(a, t, 5, 0, 2 * Math.PI), n.setFillStyle("#1aad19"), n.setStrokeStyle("rgba(1,1,1,0)"), 
            n.fill(), n.stroke();
        }
        var t = this.position;
        t.x += t.vx, t.y += t.vy, t.x >= 300 && (t.vx = -2), t.x <= 7 && (t.vx = 2), t.y >= 300 && (t.vy = -2), 
        t.y <= 7 && (t.vy = 2);
        var n = wx.createContext();
        a(t.x, 150), a(150, t.y), a(300 - t.x, 150), a(150, 300 - t.y), a(t.x, t.y), a(300 - t.x, 300 - t.y), 
        a(t.x, 300 - t.y), a(300 - t.x, t.y), wx.drawCanvas({
            canvasId: "canvas",
            actions: n.getActions()
        });
    },
    onUnload: function() {
        clearInterval(this.interval);
    }
});