var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, r = require("./constants"), o = require("./utils"), t = require("./session"), n = require("./login"), i = function() {}, u = function(e) {
    var o = {};
    return e && e.id && e.skey && (o[r.WX_HEADER_ID] = e.id, o[r.WX_HEADER_SKEY] = e.skey), 
    o;
}, l = function() {
    function e(e, r) {
        Error.call(this, r), this.type = e, this.message = r;
    }
    return e.prototype = new Error(), e.prototype.constructor = e, e;
}();

module.exports = {
    RequestError: l,
    request: function(s) {
        function c() {
            n.login({
                success: f,
                fail: m
            });
        }
        function f() {
            var e = u(t.get());
            wx.request(o.extend({}, s, {
                header: o.extend({}, _, e),
                success: function(e) {
                    var o = e.data;
                    if (o && o[r.WX_SESSION_MAGIC_ID]) {
                        t.clear();
                        var n, i;
                        if (o.error === r.ERR_INVALID_SESSION) {
                            if (!I) return I = !0, void c();
                            i = "登录态已过期", n = new l(o.error, i);
                        } else i = "鉴权服务器检查登录态发生错误(" + (o.error || "OTHER") + ")：" + (o.message || "未知错误"), 
                        n = new l(r.ERR_CHECK_LOGIN_FAILED, i);
                        m(n);
                    } else S.apply(null, arguments);
                },
                fail: m,
                complete: i
            }));
        }
        if ("object" !== (void 0 === s ? "undefined" : e(s))) {
            var a = "请求传参应为 object 类型，但实际传了 " + (void 0 === s ? "undefined" : e(s)) + " 类型";
            throw new l(r.ERR_INVALID_PARAMS, a);
        }
        var p = s.login, y = s.success || i, E = s.fail || i, d = s.complete || i, _ = s.header || {}, S = function() {
            y.apply(null, arguments), d.apply(null, arguments);
        }, m = function(e) {
            E.call(null, e), d.call(null, e);
        }, I = !1;
        p ? c() : f();
    }
};