Page({
    onShareAppMessage: function() {
        return {
            title: "map",
            path: "page/component/pages/map/map"
        };
    },
    data: {
        latitude: 23.099994,
        longitude: 113.32452,
        markers: [ {
            latitude: 23.099994,
            longitude: 113.32452,
            name: "T.I.T 创意园"
        } ],
        covers: [ {
            latitude: 23.099994,
            longitude: 113.34452,
            iconPath: "/image/location.png"
        }, {
            latitude: 23.099994,
            longitude: 113.30452,
            iconPath: "/image/location.png"
        } ],
        polygons: [ {
            points: [ {
                latitude: 23.099994,
                longitude: 113.32452
            }, {
                latitude: 23.098994,
                longitude: 113.32352
            }, {
                latitude: 23.098994,
                longitude: 113.32552
            } ],
            strokeWidth: 3,
            strokeColor: "#FFFFFFAA"
        } ],
        subKey: "B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7",
        enable3d: !1,
        showCompass: !1,
        enableOverlooking: !1,
        enableZoom: !0,
        enableScroll: !0,
        enableRotate: !1,
        drawPolygon: !1
    },
    toggle3d: function() {
        this.setData({
            enable3d: !this.data.enable3d
        });
    },
    toggleShowCompass: function() {
        this.setData({
            showCompass: !this.data.showCompass
        });
    },
    toggleOverlooking: function() {
        this.setData({
            enableOverlooking: !this.data.enableOverlooking
        });
    },
    toggleZoom: function() {
        this.setData({
            enableZoom: !this.data.enableZoom
        });
    },
    toggleScroll: function() {
        this.setData({
            enableScroll: !this.data.enableScroll
        });
    },
    toggleRotate: function() {
        this.setData({
            enableRotate: !this.data.enableRotate
        });
    },
    togglePolygon: function() {
        this.setData({
            drawPolygon: !this.data.drawPolygon
        });
    }
});