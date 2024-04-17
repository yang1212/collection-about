## 用法与概念
**[1、生命周期](https://juejin.cn/post/6844904113914773518)**

**[2、组件之间数据通信](https://www.cnblogs.com/Tiboo/p/12593666.html)**

**[3、动态组件与异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)**

* 动态组件：让多个组件使用同一个挂载点，并动态切换
* 异步组件：将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块

**[4、keep-alive](https://segmentfault.com/a/1190000023832423)**

**[5、$nextTick](https://segmentfault.com/a/1190000012861862)**

* 事件循环： 开始执行一个宏任务 –> 执行完这个宏任务中所有同步代码 —> 清空当前微任务队列中所有微任务 —> UI渲染 。

* Vue异步更新：Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。


**[6、插槽(slot)](https://segmentfault.com/a/1190000018441566)**

**[7、mixin](https://segmentfault.com/a/1190000015698391)**

* 当多个组件中有相同的业务逻辑，可将这些逻辑剥离出来，通过 mixins 混入代码，比如上拉下拉加载数据
* 需要注意的是 mixins 混入的钩子函数会先于组件内的钩子函数执行，遇到同名选项时会有选择性的进行合并


**8、Vue常见性能优化方式**

   * 合理使用v-show、v-if、compouted、keep-alive、异步组件

   * v-for时加key（diff算法通过tag和key来判断是否是同一个node节点；减少渲染次数，提升渲染性能）
   
   * 自定义事件、dom事件及时销毁

   * data层级不要太深

<br/>

## 原理
**[1、vue渐进式框架的理解](blog.csdn.net/wandoumm/article/details/80253681)**

**[2、MVVM](https://juejin.cn/post/6844903929298288647)**

**[3、对虚拟DOM的认识](https://github.com/yang1212/collection-about/issues/68)**
 * [浏览器渲染引擎工作流程](https://segmentfault.com/a/1190000010298038)
 * [深度优先理论](https://www.51cto.com/article/614590.html)
 * [两棵树是否相等](https://leetcode-cn.com/problems/same-tree/submissions/)
 * [diff 算法](https://juejin.cn/post/6844903767473651720)

**4、[Vue 2.x双向数据绑定](https://juejin.cn/post/6844903917898186766)**
* [总结](https://github.com/yang1212/collection-about/issues/69)

* 核心API： 基于[object.defineproperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 进行数据劫持

* 核心设计模式：[观察者模式](https://github.com/yang1212/collection-about/issues/38)

* 存在的问题：深度监听，需要一次性递归到底。故data层级不可嵌套过深； 无法对新增、删除属性做监听；  


**5、[vue data为什么是函数？而不是对象](https://www.imqianduan.com/vue/192.html )**


<br/>  

## vue-router
   **[1、vue-router常用路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)**

   **[2、路由两种模式实现原理](https://www.cnblogs.com/Tiboo/p/11588022.html)**

   **3、动态生成路由配置**
   * 从接口获取路由数据
   * 根据路由数据动态生成路由配
   * 使用生成的路由配置来配置 Vue Router
   * 一个简单示例，演示如何动态生成路由配置:
     ```javaScript
        // 假设你从接口获取的路由数据格式如下：
        const routeData = [
          { path: '/home', component: Home },
          { path: '/about', component: About },
          // 更多路由数据...
        ];
        
        // 动态生成路由配置
        const routes = routeData.map(route => {
          return {
            path: route.path,
            component: route.component
          };
        });
        
        // 配置 Vue Router
        const router = new VueRouter({
          routes
        });
     ```
   

<br/>

## vuex
   
### 1、数据持久化
LocalStorage 或 SessionStorage：

使用浏览器的本地存储（LocalStorage 或 SessionStorage）来存储 Vuex 状态。

Vuex中设置监听器，在状态发生变化时将状态保存到本地存储中，并在应用程序启动时从本地存储中加载状态。

这种方法适用于小型状态和敏感信息不太重要的场景。

```javaScript
// 保存状态到LocalStorage
store.subscribe((mutation, state) => {
  localStorage.setItem('vuex_state', JSON.stringify(state));
});

// 从LocalStorage加载状态
const savedState = localStorage.getItem('vuex_state');
if (savedState) {
  store.replaceState(JSON.parse(savedState));
}
```
