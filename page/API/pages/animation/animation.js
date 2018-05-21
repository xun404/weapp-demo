Page({
    onReady: function() {
        this.animation = wx.createAnimation();
    },
    rotate: function() {
        this.animation.rotate(720 * Math.random() - 360).step(), this.setData({
            animation: this.animation.export()
        });
    },
    scale: function() {
        this.animation.scale(2 * Math.random()).step(), this.setData({
            animation: this.animation.export()
        });
    },
    translate: function() {
        this.animation.translate(100 * Math.random() - 50, 100 * Math.random() - 50).step(), 
        this.setData({
            animation: this.animation.export()
        });
    },
    skew: function() {
        this.animation.skew(90 * Math.random(), 90 * Math.random()).step(), this.setData({
            animation: this.animation.export()
        });
    },
    rotateAndScale: function() {
        this.animation.rotate(720 * Math.random() - 360).scale(2 * Math.random()).step(), 
        this.setData({
            animation: this.animation.export()
        });
    },
    rotateThenScale: function() {
        this.animation.rotate(720 * Math.random() - 360).step().scale(2 * Math.random()).step(), 
        this.setData({
            animation: this.animation.export()
        });
    },
    all: function() {
        this.animation.rotate(720 * Math.random() - 360).scale(2 * Math.random()).translate(100 * Math.random() - 50, 100 * Math.random() - 50).skew(90 * Math.random(), 90 * Math.random()).step(), 
        this.setData({
            animation: this.animation.export()
        });
    },
    allInQueue: function() {
        this.animation.rotate(720 * Math.random() - 360).step().scale(2 * Math.random()).step().translate(100 * Math.random() - 50, 100 * Math.random() - 50).step().skew(90 * Math.random(), 90 * Math.random()).step(), 
        this.setData({
            animation: this.animation.export()
        });
    },
    reset: function() {
        this.animation.rotate(0, 0).scale(1).translate(0, 0).skew(0, 0).step({
            duration: 0
        }), this.setData({
            animation: this.animation.export()
        });
    }
});