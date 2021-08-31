## 浏览器

1、[浏览器渲染页面过程以及工作原理](https://segmentfault.com/a/1190000010298038) ( 相关拓展如下 )

* [五大主流浏览器内核的源起](https://blog.csdn.net/Summer_15/article/details/71249203)

* [DOMContentLoaded与load的区别](https://www.cnblogs.com/caizhenbo/p/6679478.html)

* [浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

2、[浏览器的多进程到JS的单线程](https://segmentfault.com/a/1190000012925872)

3、[V8垃圾回收机制](https://juejin.im/post/5c8b89f55188257e8e232d99) 

<br/>

## 网络
1、[TCP 与 UDP](https://www.huaweicloud.com/articles/b49c0ecd9fc1d91730566082918b3d48.html)

2、[关于TCP三次握手，以及为啥是三次握手](https://juejin.im/post/5ce39af36fb9a07ed136a9bc)

3、[为什么说http协议是无状态协议](https://www.cnblogs.com/Jadie/p/6877392.html)

4、[HTTP协议包含哪几个部分&常见响应码](http://caibaojian.com/http.html)

5、[理解Https](https://mp.weixin.qq.com/s/StqqafHePlBkWAPQZg3NrA)

6、[Web Worker](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

7、[keep-alive 与 多路复用](https://juejin.cn/post/6944639173621973005)
   ```
   Http1.0 一次连接只能对应一个请求
   Http1.1 一次连接可对应多个请求，下一次的请求不需要等待上一个响应来之后再发送，但响应的顺序遵循先入先出，基于connection: keep-alive
   Http2.0 一次连接可对应多个请求，无需有对应顺序，基于多路复用
   ```

   拓展：

   浏览器发起的最大请求数为一般为6个

   不同域名的请求不可共用一个TCP连接

   [HTTP/2 相比 1.0 有哪些重大改进](https://www.zhihu.com/question/34074946/answer/75364178)
   
   多路复用/头部压缩/服务端推送

<br/>

## 安全

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