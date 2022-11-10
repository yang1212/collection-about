## 概念理解
[1、微信小程序：一文彻底搞懂openid和unionid](https://cloud.tencent.com/developer/article/1708827)
* openid：将用户信息录入数据库中，就得有一个唯一标记区分用户，这个标记就是openid。当一个用户使用了某个微信小程序，微信后台会产生一个openid，并且是唯一的，可以通过这个来区分用户。
* UnionID:  简言之同一用户，对同一个微信开放平台下的不同应用，unionid是相同的



## 配置
[1、小程序内嵌H5业务域名配置](https://www.abwuliu.com/news/99137.html)

[2、微信小程序web-view组件使用及内嵌H5页面注意事项](https://blog.51cto.com/u_12849855/4714799)


## 使用

[1、小程序生命周期](https://blog.csdn.net/qq_37291064/article/details/87913066)
* [小程序中onLoad、onReady的执行顺序， onLoad先于onReady](https://juejin.cn/post/6844903928400707591)
* 小程序执行顺序与原生js方法不一致，原生Js中：onReady代表文档结构加载完成、onLoad代表包含图片等在内的所有元素都加载完成。

[2、webview](https://uniapp.dcloud.net.cn/component/web-view.html#web-view)
* 一个页面只支持配置单个web-view, 可通过v-if控制页面的重载（销毁需要过程，故销毁与重载之间需添加适当的setTimeout, 否则页面会报错不支持多个web-view）

[3、uni-app 中使用 web-view 微信小程序嵌套H5](https://www.aliyue.net/10218.html)

[4、微信小程序与web-view页面双向通信](https://juejin.cn/post/6920840441378275336)

[5、uniapp使用webview嵌套h5，在h5中使用小程序的api使用方法](https://juejin.cn/post/6844904061842653191)

[6、uni-app 全局变量的几种实现方式](https://ask.dcloud.net.cn/article/35021)

[7、小程序内嵌h5中包含腾讯地图定位的接口，打开跳转显示页面访问受限](https://forum.alipay.com/mini-app/post/13701013)
* 需基于小程序授权位置信息，获取经纬度，并通过路由参数将经纬度传给H5

[8、小程序 webview 内嵌 h5 支付、路由跳转](https://developers.weixin.qq.com/community/develop/article/doc/0008e22ff80d088bcd9c8b42156c13)

[9、微信公众号关注组件](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html)

[10、微信小程序获取手机号码](https://www.jianshu.com/p/9aceb1fcb3a0)

11、蓝牙
* [经典蓝牙与低功耗蓝牙](https://zhuanlan.zhihu.com/p/149244010)
