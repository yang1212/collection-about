## React
1、什么是 JSX 

* 一种新的 JS 方言 JSX，将原始 HTML 模板嵌入到 JS 代码中。JSX 代码本身不能被浏览器读取，必须使用Babel和webpack等工具将其转换为传统的JS

[2、组件通信传值](https://github.com/yang1212/collection-about/issues)

[3、setState](https://github.com/yang1212/collection-about/issues/12)

4、生命周期

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
  
  -在组件更新之前调用，可以控制组件是否进行更新
  
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
<br/>

## react-router
[1、react-router-dom && react-router的区别](https://hexuanzhang.github.io/2018/03/01/react-router/)：

* react-router-dom 是在 react-router 基础上添加了一些在浏览器环境下的特定功能，如 Link、BrowserRouter 、HashRouter 等

* [说明了4.x相对于3.x的踩坑点](https://juejin.cn/post/6844903640839225358)

* [说明了4.x嵌套路由的配置等案例](https://segmentfault.com/a/1190000020812860)

<br/>

## react-redux
[1、案例基础用法](https://github.com/yang1212/collection-about/issues/7)
