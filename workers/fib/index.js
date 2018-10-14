function e(r) {
    return r < 1 ? 0 : r <= 2 ? 1 : e(r - 1) + e(r - 2);
}

worker.onMessage(function(r) {
    "execFunc_fib" === r.type && worker.postMessage({
        type: "execFunc_fib",
        result: e(r.params[0])
    });
});