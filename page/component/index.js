Page({
    data: {
        list: [ {
            id: "view",
            name: "视图容器",
            open: !1,
            pages: [ "view", "scroll-view", "swiper" ]
        }, {
            id: "content",
            name: "基础内容",
            open: !1,
            pages: [ "text", "icon", "progress" ]
        }, {
            id: "form",
            name: "表单组件",
            open: !1,
            pages: [ "button", "checkbox", "form", "input", "label", "picker", "radio", "slider", "switch", "textarea" ]
        }, {
            id: "nav",
            name: "导航",
            open: !1,
            pages: [ "navigator" ]
        }, {
            id: "media",
            name: "媒体组件",
            open: !1,
            pages: [ "image", "audio", "video" ]
        }, {
            id: "map",
            name: "地图",
            pages: [ "map" ]
        }, {
            id: "canvas",
            name: "画布",
            pages: [ "canvas" ]
        }, {
            id: "ad",
            name: "广告组件",
            pages: [ "ad" ]
        } ]
    },
    kindToggle: function(e) {
        for (var a = e.currentTarget.id, i = this.data.list, n = 0, t = i.length; n < t; ++n) i[n].id == a ? i[n].open = !i[n].open : i[n].open = !1;
        this.setData({
            list: i
        });
    }
});