# weapp-demo
## 微信小程序官方组件展示(持续更新)

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

