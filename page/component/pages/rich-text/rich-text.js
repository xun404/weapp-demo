Page({
    onShareAppMessage: function() {
        return {
            title: "rich-text",
            path: "page/component/pages/rich-text/rich-text"
        };
    },
    data: {
        htmlSnip: '<div class="div_class">\n  <h1>Title</h1>\n  <p class="p">\n    Life is&nbsp;<i>like</i>&nbsp;a box of\n    <b>&nbsp;chocolates</b>.\n  </p>\n</div>\n',
        nodeSnip: "Page({\n  data: {\n    nodes: [{\n      name: 'div',\n      attrs: {\n        class: 'div_class',\n        style: 'line-height: 60px; color: red;'\n      },\n      children: [{\n        type: 'text',\n        text: 'You never know what you're gonna get.'\n      }]\n    }]\n  }\n})\n",
        renderedByHtml: !1,
        renderedByNode: !1,
        nodes: [ {
            name: "div",
            attrs: {
                class: "div_class",
                style: "line-height: 60px; color: #1AAD19;"
            },
            children: [ {
                type: "text",
                text: "You never know what you're gonna get."
            } ]
        } ]
    },
    renderHtml: function() {
        this.setData({
            renderedByHtml: !0
        });
    },
    renderNode: function() {
        this.setData({
            renderedByNode: !0
        });
    },
    enterCode: function(e) {
        console.log(e.detail.value), this.setData({
            htmlSnip: e.detail.value
        });
    }
});