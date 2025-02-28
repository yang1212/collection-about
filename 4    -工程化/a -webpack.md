🌞 Webpack 的主要任务是把源代码（JS、CSS、TS、Vue 等）转换成浏览器可以运行的 bundle.js，这个过程本质上就是编译。

## 一、webpack

**[1、Babel](https://my.oschina.net/vivotech/blog/4407304)**

* javaScript编译器，用来把 ES6 的代码转化为浏览器或者其它环境支持的代码

**[2、手写简易Loader](https://zhuanlan.zhihu.com/p/104205895)**

**3、webpack构建流程**

    1️⃣ 初始化
    
    读取 webpack.config.js 配置
    创建 Compiler 实例，确定 entry 入口文件
    
    2️⃣ 编译（解析 JS 依赖）
    
    解析 import / require，构建模块依赖关系
    递归分析所有依赖，生成 模块依赖图
    
    3️⃣ 转换（处理非 JS 文件）
    
    Loader 处理 Vue、CSS、TS 等文件
    比如：
    vue-loader 处理 .vue
    sass-loader 处理 .scss
    babel-loader 转换 ES6+ → ES5
    
    4️⃣ 优化 & 打包
    
    Tree Shaking（去除无用代码）
    Code Splitting（代码分割，优化加载速度）
    压缩 & 代码混淆（减少文件大小）
    
    5️⃣ 输出文件
    
    生成 dist/ 目录，包含 index.html 和 bundle.js

**4、webpack的热更新，以及原理**

**1️⃣ 核心流程：**

    （1）启动 Webpack 开发服务器（webpack-dev-server）
     Webpack 监听文件变化
     启动一个 WebSocket 服务器（浏览器端会和这个服务器保持连接）
    
    （2）代码变更（如修改 .js、.vue、.css 文件）
     Webpack 重新 编译 变更的模块
     生成 新的模块（Bundle）
     通过 WebSocket 通知浏览器有更新
    
    （3）浏览器端收到 WebSocket 通知
     通过 HMR runtime 请求 增量更新
     只替换发生变化的模块，而不是刷新整个页面


**2️⃣ 原理：**

    （1）WebSocket 监听变更
     Webpack-dev-server 开启 WebSocket 连接，让前端和服务器保持通讯
     文件修改后，Webpack 触发 增量编译，并告诉浏览器有更新
     
    （2）模块热替换
     浏览器端 Webpack 不会刷新页面，而是只加载新的模块
     执行 module.hot.accept()，让变更的代码生效
     如果代码不支持 HMR，则会 自动回退到整个页面刷新
     
    （3）Vue HMR 处理
     Vue-loader 内部自动支持 HMR
     组件状态不会丢失，只有改动的部分重新渲染




**[5、预设、transform、babel-polyfill 它们之间](https://www.jiangruitao.com/babel/babel-polyfill/)**

**[6、module,chunk,bundle的区别](https://www.cnblogs.com/skychx/p/webpack-module-chunk-bundle.html)**
* module: Webpack 以模块为单位 进行打包，每个 .js、.vue、.css 文件都可以看作一个模块。
* chunk: Webpack 打包后合并的逻辑代码块，像main.js 入口 Chunk，包含项目的主要逻辑。
* bundle: Webpack 将 Chunk 处理后，生成的最终文件，就是 dist/ 目录中的 .js/.css 文件
* 总之：module，chunk 和 bundle 其实就是同一份逻辑代码在不同转换场景下取的三个名字

**[7、devTool之source-map](https://zhuanlan.zhihu.com/p/135228801)**

为了解决开发代码与实际运行代码不一致时帮助我们debug到原始开发代码的技术，[补充说明](https://segmentfault.com/a/1190000008315937)

**[8、webpack引入eslint](https://segmentfault.com/a/1190000012936029)**

**9、优化**

* 抽离公共代码，按需引入第三方组件

* [Tree-Shaking](https://zhuanlan.zhihu.com/p/260724544)
  借助 ES module 的静态分析能力来消除无用的 js 代码的

* 小图片基于base64：减少http请求；输出文件基于Hash, 命中缓存，开启压缩

* 路由懒加载、组件懒加载

* loader配置缓存，其他loader: thread-loader, cache-loader


**10、[webpack5: 模块联邦](https://github.com/yang1212/collection-about/issues/73)**

**11、devDependencies有什么意义？**

* 让他人使用你开发的库时，少安装一些不必要的依赖


## 二、实践过程
1、[基于书籍实践分析webpack](https://www.cnblogs.com/Tiboo/p/12434287.html)

2、[老项目升级优化过程](https://www.cnblogs.com/Tiboo/p/14385863.html)

3、[打包报错分析过程](https://www.cnblogs.com/Tiboo/p/13832912.html)


