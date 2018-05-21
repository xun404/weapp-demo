Page({
    data: {
        focus: !1
    },
    bindTextAreaBlur: function(e) {
        console.log(e.detail.value);
    }
});