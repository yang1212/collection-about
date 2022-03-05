## React
1、什么是 JSX 

* 一种新的 JS 方言 JSX，将原始 HTML 模板嵌入到 JS 代码中。JSX 代码本身不能被浏览器读取，必须使用Babel和webpack等工具将其转换为传统的JS

[2、组件通信传值](https://github.com/yang1212/collection-about/issues)

[3、setState](https://github.com/yang1212/collection-about/issues/12)

[4、生命周期](https://juejin.cn/post/6914112105964634119)

* 挂载时
  ```js
  constructor
  
  -来初始化函数内部 state
  
  componentDidMount
  
  -在组件挂载后 (插入DOM树后) 立即调用，是发送网络请求、启用事件监听方法的好时机
    
  ```
* 更新时
  ```js
  shouldCompontntUpdate
  
  -在组件更新之前调用，可以控制组件是否进行更新。默认返回为true（即默认渲染所有子组件）
  
  componentDidUpdate
  
  -在更新后会被立即调用，首次渲染不会执行
    
  ```
* 卸载时
  ```js
  componentWillUnmount
  
  -在组件即将被卸载或销毁时进行调用，是取消网络请求、移除监听事件、清理 DOM 元素、清理定时器等操作的好时机
  
  componentDidUnmount
  ```

5、[函数组件和类组件的区别](https://juejin.cn/post/6867028553629138952)

6、[受控组件&非受控组件](https://juejin.cn/post/6858276396968951822#comment)

7、性能优化

* 父组件更新，所有子组件无条件更新
* [PureComponent](https://juejin.cn/post/6844903480369512455)
* [React.memo](https://1349279985.github.io/%E4%BC%98%E5%8C%96React-memo%E6%B8%B2%E6%9F%93%E5%88%A4%E5%88%AB%E6%9C%BA%E5%88%B6%E5%8F%8A%E5%AE%9E%E6%88%98/)
* ImmutableJS

8、高阶组件-HOC

9、合成事件

* React16事件绑定到document上
* React17事件绑定到root组件上 （更改原因：有利于多个react版本并存，比如微前端场景）
<br/>

## react-router
[1、react-router-dom && react-router的区别](https://hexuanzhang.github.io/2018/03/01/react-router/)：

* react-router-dom 是在 react-router 基础上添加了一些在浏览器环境下的特定功能，如 Link、BrowserRouter 、HashRouter 等

* [说明了4.x相对于3.x的踩坑点](https://juejin.cn/post/6844903640839225358)

* [说明了4.x嵌套路由的配置等案例](https://segmentfault.com/a/1190000020812860)

<br/>

## react-redux
[1、案例基础用法](https://github.com/yang1212/collection-about/issues/7)

2、异步action

3、redux单向数据流

4、redux中间件
