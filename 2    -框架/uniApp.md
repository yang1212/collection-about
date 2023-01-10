## 使用

[1、小程序生命周期](https://blog.csdn.net/qq_37291064/article/details/87913066)

onLoad、onReady的执行顺序

* [小程序中： onLoad先于onReady，onReady在页面初次渲染完调用。为啥就要另起炉灶与原生JS不一样，wtm大雨。](https://juejin.cn/post/6844903928400707591)
* 原生JS中： onReady先于onLoad, onReady代表文档结构加载完成、onLoad代表页面初次渲染完。

[2、webview](https://uniapp.dcloud.net.cn/component/web-view.html#web-view)
* 一个页面只支持配置单个web-view, 可通过v-if控制页面的重载（销毁需要过程，故销毁与重载之间需添加适当的setTimeout, 否则页面会报错不支持多个web-view）
* [webview -微信小程序嵌套H5](https://www.aliyue.net/10218.html)
* [webview -与微信小程序双向通信](https://juejin.cn/post/6920840441378275336)
* [webview -在h5中使用小程序的api使用方法](https://juejin.cn/post/6844904061842653191)
* [webview -内嵌 h5 支付、路由跳转](https://developers.weixin.qq.com/community/develop/article/doc/0008e22ff80d088bcd9c8b42156c13)


[3、uni-app 全局变量的几种实现方式](https://ask.dcloud.net.cn/article/35021)

[4、小程序内嵌h5中包含腾讯地图定位的接口，打开跳转显示页面访问受限](https://forum.alipay.com/mini-app/post/13701013)
* 需基于小程序授权位置信息，获取经纬度，并通过路由参数将经纬度传给H5

[5、微信公众号关注组件](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html)

[6、微信小程序获取手机号码](https://www.jianshu.com/p/9aceb1fcb3a0)

7、蓝牙
* [经典蓝牙与低功耗蓝牙](https://zhuanlan.zhihu.com/p/149244010)
* [小程序-支付宝](https://opendocs.alipay.com/mini/api/bluetooth-intro)
* [小程序-微信](https://developers.weixin.qq.com/miniprogram/dev/framework/device/ble.html)([api](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html))
* [小程序-uniApp](https://uniapp.dcloud.net.cn/api/system/bluetooth.html)

[8、支付宝小程序互跳](https://opendocs.alipay.com/mini/0090ty)

[9、自定义tabBar](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)

[10、uniApp scroll-view自定义下拉刷新](https://blog.csdn.net/houruoyu3/article/details/112481762)

[11、微信小程序转发&分享朋友圈](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object)
* [H5微信自定义分享只在对应场景才生效](https://developers.weixin.qq.com/community/develop/doc/00004c7ff500f8527f2d9656951800)

<br/>

## 概念理解
[1、微信小程序：一文彻底搞懂openid和unionid](https://cloud.tencent.com/developer/article/1708827)
* openid：将用户信息录入数据库中，就得有一个唯一标记区分用户，这个标记就是openid。
* UnionID:  简言之同一用户，对同一个微信开放平台下的不同应用，unionid是相同的

<br/>

## 配置
[1、小程序内嵌H5业务域名配置](https://www.abwuliu.com/news/99137.html)

[2、微信小程序web-view组件使用及内嵌H5页面注意事项](https://blog.51cto.com/u_12849855/4714799)

[3、微信公众号如何绑定/关联小程序](https://help.youzan.com/displaylist/detail_4_4-2-1056) 、[小程序与公众号如何关联](https://juejin.cn/post/6993622759175618590)

* 公众号可关联同一主体的10个小程序，不同主体的3个小程序；

* 小程序可最多被500个公众号关联；

<br/>


## 踩坑记录
1、The 'request' method of platform '支付宝小程序' does not support option 'responseType'
* uniApp基于axios： 在微信中请求正常，在支付宝中报错。（替换为uni.request）

2、uniApp选择默认模板无package.json下载依赖包
* 在当前项目下执行命令： npm init -y

3、蓝牙相关API

* onBLEConnectionStateChange： 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等。支付宝对应api: onBLEConnectionStateChanged多1个d...

