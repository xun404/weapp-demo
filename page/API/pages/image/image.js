var e = [ [ "camera" ], [ "album" ], [ "camera", "album" ] ], a = [ [ "compressed" ], [ "original" ], [ "compressed", "original" ] ];

Page({
    data: {
        imageList: [],
        sourceTypeIndex: 2,
        sourceType: [ "拍照", "相册", "拍照或相册" ],
        sizeTypeIndex: 2,
        sizeType: [ "压缩", "原图", "压缩或原图" ],
        countIndex: 8,
        count: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    },
    sourceTypeChange: function(e) {
        this.setData({
            sourceTypeIndex: e.detail.value
        });
    },
    sizeTypeChange: function(e) {
        this.setData({
            sizeTypeIndex: e.detail.value
        });
    },
    countChange: function(e) {
        this.setData({
            countIndex: e.detail.value
        });
    },
    chooseImage: function() {
        var t = this;
        wx.chooseImage({
            sourceType: e[this.data.sourceTypeIndex],
            sizeType: a[this.data.sizeTypeIndex],
            count: this.data.count[this.data.countIndex],
            success: function(e) {
                console.log(e), t.setData({
                    imageList: e.tempFilePaths
                });
            }
        });
    },
    previewImage: function(e) {
        var a = e.target.dataset.src;
        wx.previewImage({
            current: a,
            urls: this.data.imageList
        });
    }
});