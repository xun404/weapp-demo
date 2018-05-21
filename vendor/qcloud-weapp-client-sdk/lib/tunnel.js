function t(p) {
    function R() {
        return Q.status === i;
    }
    function O() {
        return Q.status === s;
    }
    function d() {
        return Q.status === u;
    }
    function m(t) {
        Q.status !== t && (Q.status = t);
    }
    function _(t, n) {
        Z.forEach(function(e) {
            var o = e[0], c = e[1];
            "*" === o ? c(t, n) : o === t && c(n);
        });
    }
    function g(t, n) {
        W.indexOf(t) > -1 && (t = "@" + t), _(t, n);
    }
    function y() {
        function t(t) {
            $ ? (m(c), _("error", {
                code: r,
                message: "连接信道服务失败，网络错误或者信道服务没有正确响应",
                detail: t || null
            })) : K(t);
        }
        tt || (tt = !0, m($ ? i : u), n.request({
            url: p,
            method: "GET",
            success: function(n) {
                200 == +n.statusCode && n.data && n.data.url ? I(Q.socketUrl = n.data.url) : t(n);
            },
            fail: t,
            complete: function() {
                return tt = !1;
            }
        }));
    }
    function I(t) {
        e.listen({
            onOpen: k,
            onMessage: v,
            onClose: B,
            onError: P
        }), wx.connectSocket({
            url: t
        }), $ = !1;
    }
    function k() {
        R() ? _("connect") : d() && (_("reconnect"), X()), m(s), U(), j();
    }
    function v(t) {
        M(t.data);
    }
    function A(t) {
        O() ? w(t) : nt.push(t);
    }
    function w(t) {
        var n = [ t.type ];
        t.content && n.push(JSON.stringify(t.content)), wx.sendSocketMessage({
            data: n.join(":"),
            fail: P
        });
    }
    function U() {
        nt.forEach(A), nt.length = 0;
    }
    function x() {
        A({
            type: E
        });
    }
    function G() {
        A({
            type: N
        });
    }
    function M(t) {
        var n = t.split(":"), e = n.shift(), o = n.join(":") || null, c = {
            type: e
        };
        if (o) try {
            c.content = JSON.parse(o);
        } catch (t) {}
        switch (c.type) {
          case l:
            b(c);
            break;

          case T:
            V(c);
            break;

          case C:
            q(c);
            break;

          case N:
            Y(c);
            break;

          default:
            z(c);
        }
    }
    function b(t) {
        var n = t.content;
        g(n.type, n.content);
    }
    function q(t) {
        var n = 1e3 * t.content;
        isNaN(n) || (et = n, D());
    }
    function V(t) {
        j();
    }
    function j() {
        clearTimeout(ot), clearTimeout(ct), ot = setTimeout(D, et);
    }
    function D() {
        O() && (x(), ct = setTimeout(J, et));
    }
    function J() {
        K("服务器已失去响应");
    }
    function K(t) {
        it >= st ? (F(), _("error", {
            code: a,
            message: "重连失败",
            detail: t
        })) : (wx.closeSocket(), ut += rt, m(u), at = setTimeout(L, ut)), 0 === it && _("reconnecting"), 
        it += 1;
    }
    function L() {
        y();
    }
    function X() {
        it = 0, ut = 0;
    }
    function Y(t) {
        F();
    }
    function z(t) {}
    function B() {
        ft || O() && K("链接已断开");
    }
    function F() {
        ft = !0, H(), m(c), X(), $ = !1, clearTimeout(ot), clearTimeout(ct), clearTimeout(at), 
        _("close"), ft = !1;
    }
    function H(t) {
        O() && !1 !== t && G(), wx.closeSocket();
    }
    function P(n) {
        switch (Q.status) {
          case t.STATUS_CONNECTING:
            _("error", {
                code: f,
                message: "连接信道失败，网络错误或者信道服务不可用",
                detail: n
            });
        }
    }
    if (o && o.status !== c) throw new Error("当前有未关闭的信道，请先关闭之前的信道，再打开新信道");
    o = this;
    var Q = this;
    this.serviceUrl = p, this.socketUrl = null, this.status = null, this.open = y, this.on = function(t, n) {
        "function" == typeof n && Z.push([ t, n ]);
    }, this.emit = function(t, n) {
        A({
            type: l,
            content: {
                type: t,
                content: n
            }
        });
    }, this.close = F, this.isClosed = function() {
        return Q.status === c;
    }, this.isConnecting = R, this.isActive = O, this.isReconnecting = d, m(c);
    var W = "connect,close,reconnecting,reconnect,error".split(","), Z = [], $ = !0, tt = !1, nt = [], et = 15e3, ot = 0, ct = 0, it = 0, st = t.MAX_RECONNECT_TRY_TIMES || h, ut = 0, rt = t.RECONNECT_TIME_INCREASE || S, at = 0, ft = !1;
}

var n = require("./request"), e = require("./wxTunnel"), o = null, c = t.STATUS_CLOSED = "CLOSED", i = t.STATUS_CONNECTING = "CONNECTING", s = t.STATUS_ACTIVE = "ACTIVE", u = t.STATUS_RECONNECTING = "RECONNECTING", r = t.ERR_CONNECT_SERVICE = 1001, a = (t.ERR_CONNECT_SOCKET = 1002, 
t.ERR_RECONNECT = 2001), f = t.ERR_SOCKET_ERROR = 3001, l = "message", E = "ping", T = "pong", C = "timeout", N = "close", h = 5, S = 1e3;

module.exports = t;