var a = {
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    backgroundColor: "#ffffff"
};

Component({
    data: {
        hasSetTabBarBadge: !1,
        hasShownTabBarRedDot: !1,
        hasCustomedStyle: !1,
        hasCustomedItem: !1,
        hasHiddenTabBar: !1
    },
    attached: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        });
    },
    detached: function() {
        this.removeTabBarBadge(), this.hideTabBarRedDot(), this.showTabBar(), this.removeCustomStyle(), 
        this.removeCustomItem();
    },
    methods: {
        navigateBack: function() {
            this.triggerEvent("unmount");
        },
        setTabBarBadge: function() {
            this.data.hasSetTabBarBadge ? this.removeTabBarBadge() : (this.setData({
                hasSetTabBarBadge: !0
            }), wx.setTabBarBadge({
                index: 1,
                text: "1"
            }));
        },
        removeTabBarBadge: function() {
            this.setData({
                hasSetTabBarBadge: !1
            }), wx.removeTabBarBadge({
                index: 1
            });
        },
        showTabBarRedDot: function() {
            this.data.hasShownTabBarRedDot ? this.hideTabBarRedDot() : (this.setData({
                hasShownTabBarRedDot: !0
            }), wx.showTabBarRedDot({
                index: 1
            }));
        },
        hideTabBarRedDot: function() {
            this.setData({
                hasShownTabBarRedDot: !1
            }), wx.hideTabBarRedDot({
                index: 1
            });
        },
        showTabBar: function() {
            this.setData({
                hasHiddenTabBar: !1
            }), wx.showTabBar();
        },
        hideTabBar: function() {
            this.data.hasHiddenTabBar ? this.showTabBar() : (this.setData({
                hasHiddenTabBar: !0
            }), wx.hideTabBar());
        },
        customStyle: function() {
            this.data.hasCustomedStyle ? this.removeCustomStyle() : (this.setData({
                hasCustomedStyle: !0
            }), wx.setTabBarStyle({
                color: "#FFF",
                selectedColor: "#1AAD19",
                backgroundColor: "#000000"
            }));
        },
        removeCustomStyle: function() {
            this.setData({
                hasCustomedStyle: !1
            }), wx.setTabBarStyle(a);
        },
        customItem: function() {
            this.data.hasCustomedItem ? this.removeCustomItem() : (this.setData({
                hasCustomedItem: !0
            }), wx.setTabBarItem({
                index: 1,
                text: "API"
            }));
        },
        removeCustomItem: function() {
            this.setData({
                hasCustomedItem: !1
            }), wx.setTabBarItem({
                index: 1,
                text: "接口"
            });
        }
    }
});