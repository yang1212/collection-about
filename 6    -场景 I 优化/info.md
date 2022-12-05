## 优化

> **优化原则**
 
* 多使用内存和缓存

* 减少CPU计算量，减少网络耗时

*  基于Vue框架：
   ```
      1、合理使用v-show和v-if

      2、合理使用compouted

      3、v-for时加key

      4、自定义事件、dom事件及时销毁

      5、合理使用异步组件

      6、合理使用keep-alive

      7、data层级不要太深
   ```
* 基于webpack配置：
  ``` 
     loader配置缓存，基于 thread-loader, cache-loader

     抽离CSS

     抽离公共代码

     开启压缩

     Tree-Shaking 用于描述移除 JavaScript 上下文中的未引用代码

     按需引入第三方组件

     小图片基于base64：减少http请求

     输出文件基于Hash, 命中缓存

     路由懒加载

     组件懒加载
  ```

> **组件**
> 
  1）组件设计
  ```
  从功能上拆分层次
  
  容器组件（只管理数据）&& UI组件（只显示视图）
  ```
  2）[package.json 中的browser、main 与 module](https://juejin.cn/post/6844903862977953806)
  
  ```
  browser : 定义 npm 包在 browser 环境下的入口文件
  main : 定义了 npm 包的入口文件，browser 环境和 node 环境均可使用
  module : 定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用
     
  web端加载优先级:
  browser > module > main 
  ```
  3）[npm install 原理分析](https://cloud.tencent.com/developer/article/1555982) 
  
  4）[npm与yarn的区别](https://zhuanlan.zhihu.com/p/27449990)
  
### [微信登录](https://www.jianshu.com/p/322035a9f05d)

<br/>

## 踩坑
[1、Date.parse()获取时间戳iOS无法获取](https://blog.csdn.net/mayuko2012/article/details/78181484?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-78181484-blog-91863886.pc_relevant_3mothn_strategy_recovery&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-78181484-blog-91863886.pc_relevant_3mothn_strategy_recovery&utm_relevant_index=1)

