## 概念理解

> 浏览器渲染页面过程以及工作原理

[参考1](https://segmentfault.com/a/1190000010298038)、
[参考2](https://www.cnblogs.com/caizhenbo/p/6679478.html)、
[参考3](https://www.cnblogs.com/Tiboo/p/12317123.html)、
[参考4](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

<br>

> 五大主流浏览器内核的源起以及国内各大浏览器内核总结

[参考](https://blog.csdn.net/Summer_15/article/details/71249203)

<br>


> 浏览器的多进程到JS的单线程

[参考](https://segmentfault.com/a/1190000012925872) 

<br>


## 其他
> Web Worker

[参考](http://www.ruanyifeng.com/blog/2018/07/web-worker.html) 

<br>

> V8垃圾回收机制 

[参考](https://juejin.im/post/5c8b89f55188257e8e232d99)


> 关于TCP三次握手，以及为啥是三次握手

[参考](https://juejin.im/post/5ce39af36fb9a07ed136a9bc)

<br/>

> 为什么说http协议是无状态协议

无状态是指协议对于事务处理没有记忆功能。缺少状态意味着，假如后面的处理需要前面的信息，则前面的信息必须重传，
这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要前面信息时，应答就较快。直观地说，就是每个请求都是独立的，与前面的请求和后面的请求都是没有直接联系的。

[参考](https://www.cnblogs.com/Jadie/p/6877392.html)

<br/>

> HTTP协议包含哪几个部分&常见响应码

[参考](http://caibaojian.com/http.html) 

<br/>

> 理解Https？

[参考](https://mp.weixin.qq.com/s/StqqafHePlBkWAPQZg3NrA)

<br/>

> 反向代理Nginx  

[参考](https://juejin.im/entry/57fb07b0816dfa0056c0ada8)

<br/>


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

<br/>

> 前端安全

  1） XSS攻击(跨站脚本攻击)

  2） CSRF攻击(跨站请求伪造)

  3） 网络劫持攻击

  4） 控制台注入代码

  5） 钓鱼

  [参考1](https://tech.meituan.com/2018/09/27/fe-security.html)、
  [参考2](https://segmentfault.com/a/1190000006672214)、
  [参考3](https://zhuanlan.zhihu.com/p/25486768?group_id=820705780520079360)、
  [参考4](https://www.tuicool.com/articles/7Ff2EbZ)、
  [参考5](https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)