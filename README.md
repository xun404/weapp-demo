# weapp-demo
微信小程序官方组件展示(持续更新)

- 2018.06.14 v23 基础库更新（2.1.0）
    A 新增 API wx.loadFontFace 支持动态加载字体 详情
    A 新增 API wx.getLogManager 可记录用户操作日志，供用户提交意见反馈内容时，提交给开发者协助定位问题 详情
    A 新增 组件 <camera /> 的 scanCode 模式，支持识别一维码 详情
    U 更新 API wx.createSelectorQuery 可获取节点的样式信息 详情
    U 更新 API wx.scanCode 返回参数新增 rawData 字段 详情
    U 更新 API wx.createLivePusher 新增 toggleTorch 方法支持切换闪光灯 详情
    U 更新 组件 <button /> 可以嵌套在原生组件内，显示在原生组件之上 详情
    U 更新 组件 <button /> 新增 open-type 值为 feedback，打开“意见反馈”页面 详情
    U 更新 组件 <cover-view /> <cover-image /> 新增 scroll-top 属性 详情
    U 更新 组件 <cover-view /> <cover-image /> 支持 rotate 和 scale 的样式设置 详情
    U 更新 组件 <cover-image /> 新增 bindload 和 binderror 事件 详情
    U 更新 组件 <movable-view /> 新增 animation 属性 详情
    U 更新 组件 <live-pusher /> 新增 zoom 属性支持调整焦距 详情
    U 更新 组件 <input /> 在 bindinput 时返回 keyCode 键值 详情
    F 修复 API wx.reportAnalytics 在插件下调用异常的问题
    F 修复 API wx.hideToast 在 iOS 下无法让前面的 showLoading 消失的问题
    F 修复 组件 <image /> 在连续更新src时导致显示不正确的问题
    F 修复 组件 <image /> 设置 border-radius 出现闪动的问题
    F 修复 组件 <canvas /> 设置的shadow会影响fillStyle的问题
    F 修复 组件 <movable-view /> 缩放的问题 详情
    F 修复 组件 <input /> 在某些情况下未被正常销毁的问题 详情
    F 修复 组件 <video /> 设置 playbackRate 为 1.25 无效的问题
    F 修复 组件 <map /> 在开发者工具双击地图缩放不触发 bindregionchange 的问题 详情
    F 修复 框架 在 video 全屏后有setData操作时导致字体变大的问题
    
- 2018.05.21 v22 更新

