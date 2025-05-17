
## 网络协议

**1、网络**
* [了解IP地址](https://www.jianshu.com/p/ad7cd1d5be45)
* [关于TCP三次握手，以及为啥是三次握手](https://juejin.im/post/5ce39af36fb9a07ed136a9bc)

  
**2、协议**

[1）理解HTTP](http://caibaojian.com/http.html)
  * [为什么说HTTP协议是无状态协议](https://www.cnblogs.com/Jadie/p/6877392.html)
  * 浏览器发起的最大请求数为一般为6个、不同域名的请求不可共用一个TCP连接；
  * [content-type常见类型](https://www.jianshu.com/p/ba40da728806)、 [keep-alive与多路复用](https://juejin.cn/post/6989985247836241957)
      

[2）理解HTTPS](https://mp.weixin.qq.com/s/StqqafHePlBkWAPQZg3NrA)
  * -HTTPS（TLS over HTTP）是HTTP/2的必要条件。如果网站不是运行在HTTPS上，那就不算是HTTP/2。
  
[3）WebSocket](https://www.ruanyifeng.com/blog/2017/05/websocket.html)
* 在单个TCP连接上进行全双工通信的网络协议

[4) 概念整理、详细分享参考之前整理的PPT](https://www.cnblogs.com/Tiboo/p/11865635.html)

**[3、跨域](https://github.com/yang1212/collection-about/issues/22)**
  * [聊一聊cookie](https://segmentfault.com/a/1190000004556040)
 
**[4、Web Worker](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)**
* 为JavaScript 创造多线程环境，允许主线程创建Worker 线程。    

**5、CDN**

* 内容分发网络-Content Delivery Network
* 将源站的内容发布到接近用户的网络“边缘”，用户可以就近获取所需数据，不仅降低了网络的拥塞状况、提高请求的响应速度，也能够减少源站的负载压力。

<br/>

## 浏览器
**[1、主流浏览器内核](https://blog.csdn.net/Summer_15/article/details/71249203)**

**[2、页面渲染过程及原理](https://segmentfault.com/a/1190000010298038)**

* [拓展: DOMContentLoaded与load的区别](https://www.cnblogs.com/caizhenbo/p/6679478.html)

**[3、浏览器多进程到JS单线程](https://segmentfault.com/a/1190000012925872)**


<br/>

## 安全
  
  **1、前端安全**
  * [XSS攻击(跨站脚本攻击)](https://tech.meituan.com/2018/09/27/fe-security.html)
  * [CSRF攻击(跨站请求伪造)](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)
  * 网络劫持攻击
  * 控制台注入代码
