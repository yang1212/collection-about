## 有意思的周刊
[1、weekly-每周一篇](https://github.com/ruanyf/weekly)

[2、freecodecamp-英文版](https://www.freecodecamp.org/news/search)

<br/>

## 场景
**[1、监控和埋点方案](https://github.com/forthealllight/blog/issues/23)**

  * PV/UV:PV(page view)，即页面浏览量或点击量。UV:指访问某个站点或点击某条新闻的不同IP地址的人数
  * 前端监控可以分为三类：数据监控、性能监控和异常监控
  * 前端埋点方法分为三种：代码埋点、可视化埋点和无痕埋点
  * [前端埋点体系怎么搭建](https://github.com/closertb/closertb.github.io/issues/46)

**[2、base64编码原理](https://juejin.cn/post/6844903663459106829)**

   * base64编码本质上就是将二进制转化为文本数据的方案
   
   * Base64编码的主要的作用不在于安全性，而在于让内容能在各个网关间无错的传输，这才是Base64编码的核心作用

**3、组件设计**

1）优化原则
  * 多使用内存和缓存
  * 减少CPU计算量，减少网络耗时
  
2）设计原则
  * 从功能上拆分层次
  * 容器组件（只管理数据）&& UI组件（只显示视图）
  
3）[package.json: browser、main 与 module](https://juejin.cn/post/6844903862977953806)
  
  * -browser : 定义 npm 包在 browser 环境下的入口文件；
  * -main : browser 环境和 node 环境均可使用，定义了 npm 包的入口文件；
  * -module : browser 环境和 node 环境均可使用，定义 npm 包的 ESM 规范的入口文件；
     
  * -web端加载优先级: browser > module > main 

4）[npm install 原理分析](https://cloud.tencent.com/developer/article/1555982) 

**4、npm**

* [1、怎样挑选一个好的 NPM 包](https://www.infoq.cn/article/wad44vl8vgbfzvj4hnpp)

* [2、npm install 原理分析](https://cloud.tencent.com/developer/article/1555982)

* [3、node_modules 困境](https://zhuanlan.zhihu.com/p/137535779)

**5、登录注册**

H5(微信、支付宝)：
* -登录：跳转微信定向地址, url参数中包含回调地址
* -手机号码：基于验证码绑定

小程序(微信)：
* -登录：wx.getUserProfile获取用户信息后调用后端接口
* -手机号码：open-type="getPhoneNumber"触发调用后端接口

**5、支付**
* H5(微信):  window.WeixinJSBridge.invoke( 'getBrandWCPayRequest', ...）
* H5(支付宝): ap.tradePay
* 小程序(微信):  wx.requestPayment

<br/>

## 优化

1、性能优化：包括加载速度、渲染性能等方面的优化，如减少资源大小、合并和压缩文件、使用 CDN 加速、优化图片、懒加载和按需加载等

2、用户体验优化：优化网站或应用的用户界面和交互设计，包括页面加载速度、响应时间、页面布局、颜色和字体搭配、易用性等，提升用户体验和满意度

3、搜索引擎优化：通过合理的网页结构、关键字优化、页面标题和描述、友好的 URL 结构等手段，提升网站在搜索引擎中的排名，增加曝光度和流量。

4、代码优化：提高代码质量和可维护性，包括优化算法、减少冗余代码、模块化和组件化、代码分割和懒加载、合理的缓存策略等。

5、安全性优化：防止常见的安全漏洞，如 XSS 攻击、CSRF 攻击、SQL 注入等，采用安全的身份验证和授权机制，保护用户数据的安全性。

<br/>

## 拓展
**[1、Flutter](https://www.jianshu.com/p/51e989500ca3)**

* 用于构建跨平台的手机App的SDK。写一份代码，在Android 和iOS平台上都可以运行。

**[2、同构渲染](https://juejin.cn/post/6844903512296390664)**

* 一套代码，浏览器能渲染，服务端能渲染

**[3、serverless](https://cloud.tencent.com/developer/article/1672933)**

* 无服务器架构，即在无需管理服务器等底层资源的情况下完成应用的开发和运行

**[4、微前端](https://tech.meituan.com/2020/02/27/meituan-waimai-micro-frontends-practice.html)**


**[5、nginx](https://juejin.cn/post/6844904129987526663)**
   

**[6、编译型与解释型语言](https://www.tspweb.com/key/%E7%BC%96%E8%AF%91%E8%AF%AD%E8%A8%80.html)**


**[7、Rust](https://zhuanlan.zhihu.com/p/62057547)**


**[8、主流X86-ARM-RISC-V-MIPS芯片架构分析](https://www.cnblogs.com/wujianming-110117/p/16578486.html)**

**[9、浅谈vpn、vps、Proxy以及shadowsocks之间的联系和区别](https://medium.com/@thomas_summon/%E6%B5%85%E8%B0%88vpn-vps-proxy%E4%BB%A5%E5%8F%8Ashadowsocks%E4%B9%8B%E9%97%B4%E7%9A%84%E8%81%94%E7%B3%BB%E5%92%8C%E5%8C%BA%E5%88%AB-b0198f92db1b)**






