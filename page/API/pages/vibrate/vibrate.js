Page({
    onShareAppMessage: function() {
        return {
            title: "振动",
            path: "page/API/pages/vibrate/vibrate"
        };
    },
    vibrateShort: function() {
        wx.vibrateShort({
            success: function(o) {
                console.log(o);
            },
            fail: function(o) {
                console.error(o);
            },
            complete: function() {
                console.log("completed");
            }
        });
    },
    vibrateLong: function() {
        wx.vibrateLong({
            success: function(o) {
                console.log(o);
            },
            fail: function(o) {
                console.error(o);
            },
            complete: function() {
                console.log("completed");
            }
        });
    }
});