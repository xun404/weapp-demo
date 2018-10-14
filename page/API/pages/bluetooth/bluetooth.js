function e(e, t, c) {
    for (var i = 0; i < e.length; i++) if (e[i][t] === c) return i;
    return -1;
}

function t(e) {
    return Array.prototype.map.call(new Uint8Array(e), function(e) {
        return ("00" + e.toString(16)).slice(-2);
    }).join("");
}

Page({
    onShareAppMessage: function() {
        return {
            title: "蓝牙",
            path: "page/API/pages/bluetooth/bluetooth"
        };
    },
    data: {
        devices: [],
        connected: !1,
        chs: []
    },
    onUnload: function() {
        this.closeBluetoothAdapter();
    },
    openBluetoothAdapter: function() {
        var e = this;
        wx.openBluetoothAdapter({
            success: function(t) {
                console.log("openBluetoothAdapter success", t), e.startBluetoothDevicesDiscovery();
            },
            fail: function(e) {
                10001 === e.errCode && (wx.showModal({
                    title: "错误",
                    content: "未找到蓝牙设备, 请打开蓝牙后重试。",
                    showCancel: !1
                }), wx.onBluetoothAdapterStateChange(function(e) {
                    console.log("onBluetoothAdapterStateChange", e), e.available && this.startBluetoothDevicesDiscovery();
                }));
            }
        });
    },
    getBluetoothAdapterState: function() {
        var e = this;
        wx.getBluetoothAdapterState({
            success: function(t) {
                console.log("getBluetoothAdapterState", t), t.discovering ? e.onBluetoothDeviceFound() : t.available && e.startBluetoothDevicesDiscovery();
            }
        });
    },
    startBluetoothDevicesDiscovery: function() {
        var e = this;
        this._discoveryStarted || (this._discoveryStarted = !0, wx.startBluetoothDevicesDiscovery({
            allowDuplicatesKey: !0,
            success: function(t) {
                console.log("startBluetoothDevicesDiscovery success", t), e.onBluetoothDeviceFound();
            }
        }));
    },
    stopBluetoothDevicesDiscovery: function() {
        var e = this;
        wx.stopBluetoothDevicesDiscovery({
            complete: function() {
                e._discoveryStarted = !1;
            }
        });
    },
    onBluetoothDeviceFound: function() {
        var t = this;
        wx.onBluetoothDeviceFound(function(c) {
            c.devices.forEach(function(c) {
                if (c.name || c.localName) {
                    var i = t.data.devices, o = e(i, "deviceId", c.deviceId), a = {};
                    -1 === o ? a["devices[" + i.length + "]"] = c : a["devices[" + o + "]"] = c, t.setData(a);
                }
            });
        });
    },
    createBLEConnection: function(e) {
        var t = this, c = e.currentTarget.dataset, i = c.deviceId, o = c.name;
        wx.showLoading(), wx.createBLEConnection({
            deviceId: i,
            success: function() {
                t.setData({
                    connected: !0,
                    name: o,
                    deviceId: i
                }), t.getBLEDeviceServices(i);
            },
            complete: function() {
                wx.hideLoading();
            }
        }), this.stopBluetoothDevicesDiscovery();
    },
    closeBLEConnection: function() {
        wx.closeBLEConnection({
            deviceId: this.data.deviceId
        }), this.setData({
            connected: !1,
            chs: [],
            canWrite: !1
        });
    },
    getBLEDeviceServices: function(e) {
        var t = this;
        wx.getBLEDeviceServices({
            deviceId: e,
            success: function(c) {
                for (var i = 0; i < c.services.length; i++) if (c.services[i].isPrimary) return void t.getBLEDeviceCharacteristics(e, c.services[i].uuid);
            }
        });
    },
    getBLEDeviceCharacteristics: function(c, i) {
        var o = this;
        wx.getBLEDeviceCharacteristics({
            deviceId: c,
            serviceId: i,
            success: function(e) {
                console.log("getBLEDeviceCharacteristics success", e.characteristics);
                for (var t = 0; t < e.characteristics.length; t++) {
                    var a = e.characteristics[t];
                    a.properties.read && wx.readBLECharacteristicValue({
                        deviceId: c,
                        serviceId: i,
                        characteristicId: a.uuid
                    }), a.properties.write && (o.setData({
                        canWrite: !0
                    }), o._deviceId = c, o._serviceId = i, o._characteristicId = a.uuid, o.writeBLECharacteristicValue()), 
                    (a.properties.notify || a.properties.indicate) && wx.notifyBLECharacteristicValueChange({
                        deviceId: c,
                        serviceId: i,
                        characteristicId: a.uuid,
                        state: !0
                    });
                }
            },
            fail: function(e) {
                console.error("getBLEDeviceCharacteristics", e);
            }
        }), wx.onBLECharacteristicValueChange(function(c) {
            var i = e(o.data.chs, "uuid", c.characteristicId), a = {};
            -1 === i ? a["chs[" + o.data.chs.length + "]"] = {
                uuid: c.characteristicId,
                value: t(c.value)
            } : a["chs[" + i + "]"] = {
                uuid: c.characteristicId,
                value: t(c.value)
            }, o.setData(a);
        });
    },
    writeBLECharacteristicValue: function() {
        var e = new ArrayBuffer(1);
        new DataView(e).setUint8(0, 255 * Math.random() | 0), wx.writeBLECharacteristicValue({
            deviceId: this._deviceId,
            serviceId: this._deviceId,
            characteristicId: this._characteristicId,
            value: e
        });
    },
    closeBluetoothAdapter: function() {
        wx.closeBluetoothAdapter(), this._discoveryStarted = !1;
    }
});