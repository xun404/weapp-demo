var t = require("../../../../util/util.js").fib;

Page({
    onShareAppMessage: function() {
        return {
            title: "多线程Worker",
            path: "page/API/pages/worker/worker"
        };
    },
    data: {
        res: "",
        input: 35
    },
    onLoad: function() {
        this._worker = wx.createWorker("workers/fib/index.js");
    },
    onUnload: function() {
        clearInterval(this.interval), this._worker && this._worker.terminate();
    },
    bindInput: function(t) {
        var e = Number(t.detail.value);
        return e > 40 ? {
            value: 40
        } : Number.isNaN(e) ? {
            value: 33
        } : void this.setData({
            input: e
        });
    },
    reset: function() {
        this.setData({
            res: ""
        });
    },
    compute: function() {
        this.reset(), wx.showLoading({
            title: "计算中..."
        });
        var e = +Date.now(), a = t(this.data.input), i = +Date.now();
        wx.hideLoading(), this.setData({
            res: a,
            time: i - e
        });
    },
    multiThreadCompute: function() {
        var t = this;
        this.reset(), wx.showLoading({
            title: "计算中..."
        });
        var e = +Date.now();
        this._worker.postMessage({
            type: "execFunc_fib",
            params: [ this.data.input ]
        }), this._worker.onMessage(function(a) {
            if ("execFunc_fib" === a.type) {
                wx.hideLoading();
                var i = +Date.now();
                t.setData({
                    res: a.result,
                    time: i - e
                });
            }
        });
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
        function t(t, e) {
            a.beginPath(0), a.arc(t, e, 5, 0, 2 * Math.PI), a.setFillStyle("#1aad19"), a.setStrokeStyle("rgba(1,1,1,0)"), 
            a.fill(), a.stroke();
        }
        var e = this.position;
        e.x += e.vx, e.y += e.vy, e.x >= 300 && (e.vx = -2), e.x <= 7 && (e.vx = 2), e.y >= 300 && (e.vy = -2), 
        e.y <= 7 && (e.vy = 2);
        var a = wx.createContext();
        t(e.x, 150), t(150, e.y), t(300 - e.x, 150), t(150, 300 - e.y), t(e.x, e.y), t(300 - e.x, 300 - e.y), 
        t(e.x, 300 - e.y), t(300 - e.x, e.y), wx.drawCanvas({
            canvasId: "canvas",
            actions: a.getActions()
        });
    }
});