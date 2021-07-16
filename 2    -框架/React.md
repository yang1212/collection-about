## 路由
react-router-dom && react-router的区别：

react-router-dom 是在 react-router 基础上添加了一些在浏览器环境下的特定功能，如 Link、BrowserRouter 、HashRouter 等，
[详细说明](https://hexuanzhang.github.io/2018/03/01/react-router/)

react-router的常见用法规则：

[参考资料1](https://juejin.cn/post/6844903640839225358): 说明了4.x相对于3.x的踩坑点

[参考资料2](https://segmentfault.com/a/1190000020812860): 说明了4.x嵌套路由的配置等案例

<br>

> 生命周期

componentWillMount 在渲染前调用,在客户端也在服务端   (此阶段可处理接口请求)

componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构 （此阶段可进行DOM操作)  

<br>

> 讲讲什么是 JSX 

一种新的 JS 方言 JSX，将原始 HTML 模板嵌入到 JS 代码中。JSX 代码本身不能被浏览器读取，必须使用Babel和webpack等工具将其转换为传统的JS

<br>

> React性能优化方案之PureRenderMixin

(react-addons-pure-render-mixin)https://juejin.im/post/5b10dcc35188257d367e53cc

> To Do 补充

React.createClass为旧API, 暂已不提倡此用法，需求证相关规则的版本