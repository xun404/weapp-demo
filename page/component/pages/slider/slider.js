for (var e = {}, n = 1; n < 5; ++n) !function(n) {
    e["slider" + n + "change"] = function(e) {
        console.log("slider" + n + "发生change事件，携带值为", e.detail.value);
    };
}(n);

Page(e);