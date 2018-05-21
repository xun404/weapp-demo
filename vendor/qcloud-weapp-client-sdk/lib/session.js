var e = "weapp_session_" + require("./constants").WX_SESSION_MAGIC_ID, t = {
    get: function() {
        return wx.getStorageSync(e) || null;
    },
    set: function(t) {
        wx.setStorageSync(e, t);
    },
    clear: function() {
        wx.removeStorageSync(e);
    }
};

module.exports = t;