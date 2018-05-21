var e = require("./utils"), n = require("./constants"), s = require("./session"), i = function() {
    function e(e, n) {
        Error.call(this, n), this.type = e, this.message = n;
    }
    return e.prototype = new Error(), e.prototype.constructor = e, e;
}(), r = function(e) {
    wx.login({
        success: function(s) {
            wx.getUserInfo({
                success: function(n) {
                    e(null, {
                        code: s.code,
                        encryptedData: n.encryptedData,
                        iv: n.iv,
                        userInfo: n.userInfo
                    });
                },
                fail: function(s) {
                    var r = new i(n.ERR_WX_GET_USER_INFO, "获取微信用户信息失败，请检查网络状态");
                    r.detail = s, e(r, null);
                }
            });
        },
        fail: function(s) {
            var r = new i(n.ERR_WX_LOGIN_FAILED, "微信登录失败，请检查网络状态");
            r.detail = s, e(r, null);
        }
    });
}, o = function() {}, t = {
    method: "GET",
    success: o,
    fail: o,
    loginUrl: null
};

module.exports = {
    LoginError: i,
    login: function(o) {
        if (o = e.extend({}, t, o), t.loginUrl) {
            var c = function() {
                return r(function(e, r) {
                    if (e) o.fail(e); else {
                        var t = r.userInfo, c = r.code, l = r.encryptedData, u = r.iv, a = {};
                        a[n.WX_HEADER_CODE] = c, a[n.WX_HEADER_ENCRYPTED_DATA] = l, a[n.WX_HEADER_IV] = u, 
                        wx.request({
                            url: o.loginUrl,
                            header: a,
                            method: o.method,
                            data: o.data,
                            success: function(e) {
                                var r = e.data;
                                if (r && r[n.WX_SESSION_MAGIC_ID]) if (r.session) r.session.userInfo = t, s.set(r.session), 
                                o.success(t); else {
                                    var c = "登录失败(" + r.error + ")：" + (r.message || "未知错误"), l = new i(n.ERR_LOGIN_SESSION_NOT_RECEIVED, c);
                                    o.fail(l);
                                } else {
                                    var c = "登录请求没有包含会话响应，请确保服务器处理 `" + o.loginUrl + "` 的时候正确使用了 SDK 输出登录结果", l = new i(n.ERR_LOGIN_SESSION_NOT_RECEIVED, c);
                                    o.fail(l);
                                }
                            },
                            fail: function(e) {
                                var s = new i(n.ERR_LOGIN_FAILED, "登录失败，可能是网络错误或者服务器发生异常");
                                o.fail(s);
                            }
                        });
                    }
                });
            }, l = s.get();
            l ? wx.checkSession({
                success: function() {
                    o.success(l.userInfo);
                },
                fail: function() {
                    s.clear(), c();
                }
            }) : c();
        } else o.fail(new i(n.ERR_INVALID_PARAMS, "登录错误：缺少登录地址，请通过 setLoginUrl() 方法设置登录地址"));
    },
    setLoginUrl: function(e) {
        t.loginUrl = e;
    }
};