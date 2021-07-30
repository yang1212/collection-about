## webpack

[1、Babel](https://my.oschina.net/vivotech/blog/4407304)

javaScript编译器，用来把 ES6 的代码转化为浏览器或者其它环境支持的代码

[2、手写简易Loader](https://zhuanlan.zhihu.com/p/104205895)

3、webpack构建流程

* 根据配置参数进行系列初始化

* 注册监听相应Plugin插件

* 根据入口开始编译，借助于Loader将非Js文件转换成webpack认识的代码

* 编译完成后，根据输出文件得到对应的chunk

* 相应的Plugin事件触发，如压缩等，进一步得到最后的chunk，运行结束

4、webpack的热更新，以及原理

[5、预设、transform、babel-polyfill 它们之间](https://www.jiangruitao.com/babel/babel-polyfill/)

[6、devTool之source-map](https://zhuanlan.zhihu.com/p/135228801)

为了解决开发代码与实际运行代码不一致时帮助我们debug到原始开发代码的技术，[补充说明](https://segmentfault.com/a/1190000008315937)














