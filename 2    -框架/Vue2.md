## Vue2
### 用法与概念
[1、父子组件生命周期执行顺序](https://juejin.cn/post/6844904113914773518)

[2、组件之间数据通信](https://www.cnblogs.com/Tiboo/p/12593666.html)

[3、$nextTick](https://segmentfault.com/a/1190000012861862)
```
事件循环:
js处理异步主要有微任务（microTask）和 宏任务 （macroTask），而从开始执行一个宏任务–>执行完这个宏任务中所有同步代码—>
清空当前微任务队列中所有微任务—> UI渲染 。 这便是完成了一个事件循环（Tick）

Vue异步更新:
Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新
```

[4、插槽(slot)](https://segmentfault.com/a/1190000018441566)

[5、mixin](https://segmentfault.com/a/1190000015698391)

* 经常使用扩展组件的方式。当多个组件中有相同的业务逻辑，可将这些逻辑剥离出来，通过 mixins 混入代码，比如上拉下拉加载数据
* 需要注意的是 mixins 混入的钩子函数会先于组件内的钩子函数执行，并且在遇到同名选项的时候也会有选择性的进行合并

[6、动态组件与异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)

* 动态组件：让多个组件使用同一个挂载点，并动态切换
* 异步组件：将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块

[7、keep-alive](https://segmentfault.com/a/1190000023832423)

8、Vue常见性能优化方式
```
   1、合理使用v-show和v-if

   2、合理使用compouted

   3、v-for时加key
   
   4、自定义事件、dom事件及时销毁

   5、合理使用异步组件

   6、合理使用keep-alive

   7、data层级不要太深
```

### 原理
[1、vue渐进式框架的理解](blog.csdn.net/wandoumm/article/details/80253681)

[2、MVVM](https://juejin.cn/post/6844903929298288647)

[3、谈谈对虚拟DOM的认识](https://juejin.im/post/5d36cc575188257aea108a74#heading-14) （拓展如下）

* [浏览器渲染引擎工作流程](https://segmentfault.com/a/1190000010298038)
* [深度优先遍历DOM树](https://github.com/yang1212/collection-about/issues/9)
* [两棵树是否相等](https://leetcode-cn.com/problems/same-tree/submissions/)
* [diff 算法](https://juejin.cn/post/6844903767473651720)
* vue、react中的虚拟DOM

4、[Vue 2.x双向数据绑定](https://juejin.cn/post/6844903917898186766)

* 数据劫持: 在访问或者修改对象的某个属性时，通过一段代码拦截这个行为，进行额外的操作或者修改返回结果

* 核心API: 基于[object.defineproperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 进行数据劫持

* 核心设计模式：[发布-订阅模式](https://juejin.cn/post/6844903921211670536)

* 监听数组的原理: [原型链的重写](https://github.com/yang1212/collection-about/issues/11)

5、实现数据绑定的几种做法

* [脏值检查](https://www.mopsky.com/2018/02/01/1eab7ae3ea/)

* 数据劫持 + 发布订阅

6、模板编译过程

[7、vue data为什么是函数？而不是对象](https://www.imqianduan.com/vue/192.html )

8、组件中 data 什么时候可以使用对象

当我们使用 new Vue() 的方式的时候，无论我们将 data 设置为对象还是函数都是可以，因为 new Vue() 的方式是生成一个根组件，该组件不会复用，也就不存在共享 data 的情况了


## vue-router
   [1、vue-router常用路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

   [2、路由两种模式实现原理](https://www.cnblogs.com/Tiboo/p/11588022.html)
   
## vuex
   
   Vuex是一个专为Vue.js应用程序开发的状态管理模式，采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
