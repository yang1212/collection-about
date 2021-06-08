* 生命周期
  componentWillMount 在渲染前调用,在客户端也在服务端   (此阶段可处理接口请求)
  componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构 （此阶段可进行DOM操作）

* 35道咱们必须要清楚的 React 面试题
    https://juejin.im/post/5dc20a4ff265da4d4e30040b

* 讲讲什么是 JSX 
   一种新的 JS 方言 JSX，将原始 HTML 模板嵌入到 JS 代码中。JSX 代码本身不能被浏览器读取，
   必须使用Babel和webpack等工具将其转换为传统的JS。

* React性能优化方案之PureRenderMixin(react-addons-pure-render-mixin)
  https://juejin.im/post/5b10dcc35188257d367e53cc   