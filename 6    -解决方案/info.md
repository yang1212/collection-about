> 优化原则
 
* 多使用内存和缓存

* 减少CPU计算量，减少网络耗时
```
   基于Vue框架：
   
   1、合理使用v-show和v-if

   2、合理使用compouted

   3、v-for时加key
   
   4、自定义事件、dom事件及时销毁

   5、合理使用异步组件

   6、合理使用keep-alive

   7、data层级不要太深
```
```
   基于webpack配置：
   
   loader配置缓存，基于 thread-loader, cache-loader

   抽离CSS

   抽离公共代码

   开启压缩

   Tree-Shaking 用于描述移除 JavaScript 上下文中的未引用代码

   bableRc文件配置

   按需引入第三方组件

   小图片基于base64：减少http请求

   输出文件基于Hash, 命中缓存

   路由懒加载

   组件懒加载
```
> [npm](https://juejin.cn/post/6844904083241828360)
