### [前端监控和前端埋点方案设计](https://github.com/forthealllight/blog/issues/23) 

  * PV/UV:PV(page view)，即页面浏览量或点击量。UV:指访问某个站点或点击某条新闻的不同IP地址的人数
  * 前端监控可以分为三类：数据监控、性能监控和异常监控
  * 前端埋点方法分为三种：代码埋点、可视化埋点和无痕埋点
  * [前端埋点体系怎么搭建](https://github.com/closertb/closertb.github.io/issues/46)

### [base64编码原理](https://juejin.cn/post/6844903663459106829)

   * base64编码本质上就是将二进制转化为文本数据的方案
   
   * Base64编码的主要的作用不在于安全性，而在于让内容能在各个网关间无错的传输，这才是Base64编码的核心作用

### 组件设计
* 优化原则
  * 多使用内存和缓存
  * 减少CPU计算量，减少网络耗时
* 设计原则
  * 从功能上拆分层次
  * 容器组件（只管理数据）&& UI组件（只显示视图）
  
* [package.json: browser、main 与 module](https://juejin.cn/post/6844903862977953806)
  
  * browser : 定义 npm 包在 browser 环境下的入口文件；
  * main : browser 环境和 node 环境均可使用，定义了 npm 包的入口文件；
  * module : browser 环境和 node 环境均可使用，定义 npm 包的 ESM 规范的入口文件；
     
  * web端加载优先级: browser > module > main 

* [npm install 原理分析](https://cloud.tencent.com/developer/article/1555982) 
  
  

<br/>

## 懵懂的名词

### [1、同构渲染](https://juejin.cn/post/6844903512296390664)

* 一套代码，浏览器能渲染，服务端能渲染

### [2、微前端](https://tech.meituan.com/2020/02/27/meituan-waimai-micro-frontends-practice.html)

### [3、serverless](https://cloud.tencent.com/developer/article/1672933)

* 无服务器架构，即在无需管理服务器等底层资源的情况下完成应用的开发和运行


### [4、nginx](https://juejin.cn/post/6844904129987526663)
   

### [5、Flutter](https://www.jianshu.com/p/51e989500ca3)

* 用于构建跨平台的手机App的SDK。写一份代码，在Android 和iOS平台上都可以运行。


### [6、编译型与解释型语言](https://www.tspweb.com/key/%E7%BC%96%E8%AF%91%E8%AF%AD%E8%A8%80.html)


### [7、Rust](https://zhuanlan.zhihu.com/p/62057547)

* 编译型语言


<br/>

## 踩坑
[1、Date.parse()获取时间戳iOS无法获取](https://blog.csdn.net/mayuko2012/article/details/78181484?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-78181484-blog-91863886.pc_relevant_3mothn_strategy_recovery&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-78181484-blog-91863886.pc_relevant_3mothn_strategy_recovery&utm_relevant_index=1)

