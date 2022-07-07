## webpack

[1、Babel](https://my.oschina.net/vivotech/blog/4407304)

* javaScript编译器，用来把 ES6 的代码转化为浏览器或者其它环境支持的代码

[2、手写简易Loader](https://zhuanlan.zhihu.com/p/104205895)

3、webpack构建流程

* 根据配置参数进行系列初始化

* 注册监听相应Plugin插件

* 根据入口开始编译，借助于Loader将非Js文件转换成webpack认识的代码

* 编译完成后，根据输出文件得到对应的chunk

* 相应的Plugin事件触发，如压缩等，进一步得到最后的chunk，运行结束

4、webpack的热更新，以及原理(拓展)

* 自动刷新与热更新区别

[5、预设、transform、babel-polyfill 它们之间](https://www.jiangruitao.com/babel/babel-polyfill/)

[6、module,chunk,bundle的区别](https://www.cnblogs.com/skychx/p/webpack-module-chunk-bundle.html)
* module: 一切皆模块，只要是可引用的，都为模块
* chunk: webpack 会根据文件引用关系生成 chunk 文件, 如经过output，optimization等得到都是chunk文件
* bundle: 最终经过处理，可以直接运行在浏览器的文件
* 总之：module，chunk 和 bundle 其实就是同一份逻辑代码在不同转换场景下取的三个名字

[7、devTool之source-map](https://zhuanlan.zhihu.com/p/135228801)

为了解决开发代码与实际运行代码不一致时帮助我们debug到原始开发代码的技术，[补充说明](https://segmentfault.com/a/1190000008315937)

[8、webpack引入eslint](https://segmentfault.com/a/1190000012936029)

9、优化

* loader配置缓存，排除node_modules文件, 其他loader: thread-loader, cache-loader

* 抽离CSS

* 抽离公共代码

* 开启压缩

* [Tree-Shaking](https://zhuanlan.zhihu.com/p/260724544)
  借助 ES module 的静态分析能力来消除无用的 js 代码的

* bableRc文件配置

* 按需引入第三方组件

* 小图片基于base64：减少http请求

* 输出文件基于Hash, 命中缓存

* 路由懒加载

* 组件懒加载

10、[模块联邦](https://jishuin.proginn.com/p/763bfbd640a6)




