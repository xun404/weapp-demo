# weapp-demo
## 微信小程序官方组件展示(持续更新)

[查看小程序基础库更新日志](https://developers.weixin.qq.com/miniprogram/dev/framework/release.html)

### v2.4.2 (2018.12.04)

```
U 更新 API SelectorQuery 支持选取 VideoContext、CanvasContext、LivePlayerContext、MapContext 详情
F 修复 框架 iOS 10.0.2 某些情况下 crash 的问题
F 修复 框架 存在 tabbar 时进行 reLaunch 没有对 tabbar 其他页面执行 unload 反馈详情
F 修复 框架 异步方法中的错误，上报后显示错误的页面和方法的问题 反馈详情
F 修复 框架 module.export 为 falsy 值时 require 返回 undefined 反馈详情
F 修复 组件 <live-pusher> 工具上出现两次录音授权弹窗的问题 反馈详情
F 修复 组件 <map> 工具上显示鉴权失败的问题 反馈详情
F 修复 组件 <video> 工具上使用 setData 设置 src 无效的问题 反馈详情
F 修复 组件 <input> iOS 下更新 value 失效的问题 反馈详情
F 修复 组件 <image> iOS 下圆形的样式会先闪一下方形的问题
F 修复 API wx.previewImage 请求时没有带小程序的 referer 反馈详情
F 修复 API RequestTask.abort 不生效的问题
```

### v2.4.1 (2018.11.21)

```
U 更新 插件 插件支持云开发 详情
U 更新 插件 改进插件功能页的取消回调
U 更新 组件 <rich-text> 支持连续空格 详情
U 更新 组件 <progress> 增加动画完成事件 详情
F 修复 框架 iOS下 原生组件插入<scroll-view> 等滚动元素，会导致小程序 webview 无法回收的问题
F 修复 框架 rpx 负数转换和正数不一致的问题 反馈详情
F 修复 框架 分享完成拿到 shareTicket 为 undefined 的问题
F 修复 组件 <video> iOS 下全屏卡死的问题
F 修复 组件 <official-account> 扫体验版二维码进入小程序不显示的问题
F 修复 组件 <swiper> 滑动导致卡死的问题
F 修复 组件 <video> iOS 下 initial-time 失效的问题 反馈详情
F 修复 API wx.off* 未能正确取消绑定监听的问题
F 修复 API wx.canIUse 未能正确判断部分新增接口的问题
F 修复 API MapContext.getScale 开发者工具上获取不准确的问题
F 修复 API InnerAudioContext 获取 paused 值不准确的问题
F 修复 API iOS 下 wx.getLocation 没读取入参 altitude 的内容的问题
```

### 2018.09.10 v29 基础库更新（2.3.0）

```
A 新增 框架 分包加载支持独立分包 详情
A 新增 框架 支持基于配置的分包预下载 详情
A 新增 框架 在 iPad 上运行的小程序可以旋转屏幕 详情
A 新增 插件 支持 <live-player> 和 <live-pusher> 组件详情
A 新增 API wx.onWindowResize wx.offWindowResize 在 iPad 下可监听/取消监听屏幕旋转事件 详情
A 新增 API wx.chooseInvoice 选择发票 详情
A 新增 API wx.setInnerAudioOption 设置 InnerAudio 的播放选项 详情
A 新增 API 监听陀螺仪 详情
A 新增 API 监听设备方向的角度的变化 详情
U 更新 API wx.getRecorderManager 新增 onInterruptionBegin， onInterruptionEnd 监听录音被系统中断 详情
U 更新 API wx.startBeaconDiscovery 增加 ignoreBluetoothAvailable 参数，在 iOS 下可跳过蓝牙开关校验 详情
U 更新 API fileSystem.stat fileSystem.mkdir fileSystem.mkdirSync fileSystem.rmdir fileSystem.rmdirSync 增加 recursive 参数，支持递归 详情
U 更新 API 云函数调用返回云函数执行 ID（requestID）详情
U 更新 组件 <map> bindpoitap 用来监听 POI 点击事件回调 详情
U 更新 组件 <map> markers 支持网络图片 详情
U 更新 组件 <map> markers 支持通过 zIndex 控制层级 详情
U 更新 组件 <map> callout 支持设置边框和透明背景 详情
U 更新 组件 <map> 增加 show-compass 属性，控制是否显示指南针 详情
U 更新 组件 <map> 增加 enable-3D 属性，控制是否展示3D楼块 详情
U 更新 组件 <map> 增加 enable-overlooking 属性，控制是否支持俯视 详情
U 更新 组件 <map> 增加 polygons 属性，可以在地图上画出多边形区域 详情
U 更新 组件 <map> 增加 subkey 属性，可以自定义底图样式 详情
U 更新 组件 <map> 增加 enable-zoom, enable-scroll, enable-rotate 属性，可以控制组件的缩放、滑动、旋转行为 详情
U 更新 组件 <map> bindregionchange 回调增加 causedBy 参数区分事件来源 详情
U 更新 组件 <live-pusher> 新增 device-position 属性初始设置前后摄像头 详情
U 更新 组件 <live-pusher> 属性 waiting-image 支持网络路径、临时文件和包内路径 详情
U 更新 组件 <web-view> 新增 bindload 和 binderror事件监听 详情
F 修复 组件 <input> 在 iOS 下搜狗输入法触发 focus 问题 反馈详情
F 修复 组件 <input> 安卓某些机型 input 事件 value 为空值问题 反馈详情
F 修复 组件 <input> 在 iOS 下右滑返回后点击无法响应的问题
F 修复 组件 <video> 在 iOS 下全屏后右滑返回上一页点击无响应问题 反馈详情
F 修复 组件 <video 安卓下设置了 initial-time 不会自动播放的问题
F 修复 组件 <video> 带空格的 src 在 iOS 下无法播放的问题 反馈详情
F 修复 组件 <live-player> 安卓下移除后仍会继续播放问题 反馈详情
F 修复 组件 <camera> 在 iOS 下边录制边播放背景音乐无声音问题 反馈详情
F 修复 组件 <canvas> 安卓下用 transform 做旋转会错乱问题
F 修复 组件 <canvas> iOS 绘图结果错误问题 反馈详情
F 修复 组件 <textarea> 安卓下 <input> 输入内容后 <textarea> 无法输入问题 反馈详情
F 修复 组件 <input> iOS 下输入时无法选字，导致输入失效问题 反馈详情
F 修复 组件 <map> iOS 下 polyline 设置 arrowLine 属性无效问题
F 修复 组件 <map> 安卓上 label 未设置 bgColor 时无法显示问题
F 修复 组件 <web-view> 华为 MATE 9 下页面里的 tel:// 链接无法弹起电话本的问题
F 修复 组件 <textarea> 安卓 adjust-positon 属性设置无效的问题 反馈详情
F 修复 API wx.createCameraContext 安卓下返回前一页面后调用无效问题 反馈详情
F 修复 API wx.scanCode 三端扫码返回 scanType 不一致问题 反馈详情
F 修复 API wx.previewImage 安卓下闪退问题 反馈详情
F 修复 API wx.writeFile iOS 下 encoding=hex 时调用失败问题
F 修复 API wx.showMoal 安卓下内容过长时，头部内容会无法显示问题 反馈详情
F 修复 API wx.chooseImage iOS 下选择 iCloud 图片时，返回数组可能丢失 iCloud 图片的问题 反馈详情
F 修复 API wx.showModal 安卓点击模态框外部可以取消的问题 反馈详情
F 修复 API wx.showModal 安卓点击 back 键取消情况下，cancel 返回了 false 问题
F 修复 API wx.chooseImage iOS 下调用选择图片并压缩时，图片乱序的问题
F 修复 API wx.getRecorderManager 在安卓下录音暂停两次之后停止，返回时长不正确的问题 反馈详情
F 修复 API wx.hideLoading可以关闭wx.showToast的弹窗问题 反馈详情
F 修复 API canvasContext.drawImage 在安卓上绘制错误问题
F 修复 API updateManager.onCheckForUpdate 安卓某些场景下不触发的问题
F 修复 API BackgroundAudioManager iOS 语音下载本地在 4G 环境无法播放问题 反馈详情
F 修复 小游戏 BannerAd 下载卡片点击 button 样式下移问题
F 修复 小游戏 RewardedVideoAd 跳转小游戏返回时会出现关闭广告样式与退出按钮重叠的问题
F 修复 小游戏 API onTouch* 触摸事件时间戳参数名称不一致问题 反馈详情
F 修复 安卓从分享页面进入小程序，进入下一级页面，再点右上回到首页，tabBar 不显示问题 反馈详情
F 修复 安卓强制更新的对话框可以点击蒙层取消的问题 反馈详情
F 修复 小游戏 开放数据域下设置 image.onload 为 null 报错问题
```

### 2018.07.23 v24 基础库更新（2.2.1）
1. `F` 修复 远程调试模式下，基础库调用 accessSync 引起的卡顿问题
2. `F` 修复 组件 `<video>` iOS系统其中一个 `<video>` 组件全屏退出后其他 `<video>` 组件展示异常的问题
3. `F` 修复 组件 `<button>` 某些场景下无法正常跳转 APP 的问题
4. `F` 修复 API BackgroundAudioManager.paused Android系统下某些情况下不正确的问题 详情
5. `F` 修复 API 小程序进入后台后音视频播放没有正常停止的问题
6. `F` 修复 API 小游戏 wx.onError 回调函数执行两次的问题
7. `F` 修复 插件 功能页回调事件被多次触发的问题
8. `A` 新增 API 小游戏跳小程序 wx.navigateToMiniProgram 详情
9. `F` 修复 API wx.scanCode 在安卓平台返回 scanType 错误问题 详情


### 2018.06.14 v23 基础库更新（2.1.0）
1. `A` 新增 API `wx.loadFontFace` 支持动态加载字体 [详情](https://developers.weixin.qq.com/miniprogram/dev/api/media-fontFace.html)
2. `A` 新增 API `wx.getLogManager` 可记录用户操作日志，供用户提交意见反馈内容时，提交给开发者协助定位问题 [详情](https://developers.weixin.qq.com/miniprogram/dev/api/getLogManager.html)
3. `A` 新增 组件 `<camera />` 的 `scanCode` 模式，支持识别一维码 [详情](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html)
4. `U` 更新 API `wx.createSelectorQuery` 可获取节点的样式信息 [详情](https://developers.weixin.qq.com/miniprogram/dev/api/wxml-nodes-info.html)
5. `U` 更新 API `wx.scanCode` 返回参数新增 `rawData` 字段 [详情](https://developers.weixin.qq.com/miniprogram/dev/api/scancode.html)
6. `U` 更新 API `wx.createLivePusher` 新增 `toggleTorch` 方法支持切换闪光灯 [详情](https://developers.weixin.qq.com/miniprogram/dev/api/api-live-pusher.html)
7. `U` 更新 组件 `<button />` 可以嵌套在原生组件内，显示在原生组件之上 [详情](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
8. `U` 更新 组件 `<button />` 新增 `open-type` 值为 `feedback`，打开“意见反馈”页面 [详情](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
9. `U` 更新 组件 `<cover-view />` `<cover-image />` 新增 `scroll-top` 属性 [详情](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)
10. `U` 更新 组件 `<cover-view />` `<cover-image />` 支持 rotate 和 scale 的样式设置 [详情](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)
11. `U` 更新 组件 `<cover-image />` 新增 `bindload` 和 `binderror` 事件 [详情](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html)
12. `U` 更新 组件 `<movable-view />` 新增 `animation` 属性 [详情](https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html)
13. `U` 更新 组件 `<live-pusher />` 新增 `zoom` 属性支持调整焦距 [详情](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)
14. `U` 更新 组件 `<input />` 在 `bindinput` 时返回 `keyCode` 键值 [详情](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)
15. `F` 修复 API `wx.reportAnalytics` 在插件下调用异常的问题
16. `F` 修复 API `wx.hideToast` 在 iOS 下无法让前面的 `showLoading` 消失的问题
17. `F` 修复 组件 `<image />` 在连续更新src时导致显示不正确的问题
18. `F` 修复 组件 `<image />` 设置 border-radius 出现闪动的问题
19. `F` 修复 组件 `<canvas />` 设置的shadow会影响fillStyle的问题
20. `F` 修复 组件 `<movable-view />` 缩放的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000ecad1f3c210c5bbc67ea8750000)
21. `F` 修复 组件 `<input />` 在某些情况下未被正常销毁的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000a8c18c480908ed8c641ac75f400)
22. `F` 修复 组件 `<video />` 设置 playbackRate 为 1.25 无效的问题
23. `F` 修复 组件 `<map />` 在开发者工具双击地图缩放不触发 `bindregionchange` 的问题 [详情](https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000c64a0f388b0f19fa6fe2cb51c00)
24. `F` 修复 框架 在 video 全屏后有setData操作时导致字体变大的问题

### 2018.05.21 v22 更新

