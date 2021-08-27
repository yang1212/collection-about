> 优化
 
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
> npm包

> 跨域

  1 跨域调用接口，并写入cookie值

  基于跨域资源共享（CORS)
  运维设置：Access-Control-Allow-Credentials为true, Access-Control-Allow-Origin 字段必须指定域名
               （Access-Control-Allow-Credentials: 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie）
               （发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名）  

  前端设置：CORS请求默认不发送Cookie和HTTP认证信息。如果要把Cookie发到服务器，一方面要服务器同意，
               指定Access-Control-Allow-Credentials字段。另一方面，开发者必须在AJAX请求中打开withCredentials属性。
               即设置：axios.defaults.withCredentials = true(基于Vue)

  2 跨域调用第三方接口数据
      node作为中间层实现跨域，因为服务器之间是不存在跨域问题的

  [参考1](https://juejin.im/post/5a2f92c65188253e2470f16d)、
  [参考2](https://juejin.im/post/5c23993de51d457b8c1f4ee1)  
