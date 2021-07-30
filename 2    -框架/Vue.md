## Vue
### 基础概要
[1、父子组件生命周期执行顺序](https://juejin.cn/post/6844904113914773518)

[2、数据通信](https://www.cnblogs.com/Tiboo/p/12593666.html)

[3、$nextTick](https://segmentfault.com/a/1190000012861862)

[4、插槽(slot)](https://segmentfault.com/a/1190000018441566)

[5、mixin](https://segmentfault.com/a/1190000015698391)

[6、动态组件与异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)

[7、keep-alive](https://segmentfault.com/a/1190000023832423)



### 原理理解
[1、vue渐进式框架的理解](blog.csdn.net/wandoumm/article/details/80253681)

[2、MVVM](https://juejin.cn/post/6844903929298288647)

[3、谈谈对虚拟DOM的认识](https://juejin.im/post/5d36cc575188257aea108a74#heading-14) （拓展如下）

* [浏览器渲染引擎工作流程](https://segmentfault.com/a/1190000010298038)
* [深度优先遍历DOM树](https://github.com/yang1212/collection-about/issues/9)
* [两棵树是否相等](https://leetcode-cn.com/problems/same-tree/submissions/)
* [diff 算法](https://juejin.cn/post/6844903767473651720)
* [vue、react中的虚拟DOM]()

4、Vue 2.x双向数据绑定
* 核心API: 基于[object.defineproperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 进行数据劫持

* 数据劫持: 在访问或者修改对象的某个属性时，通过一段代码拦截这个行为，进行额外的操作或者修改返回结果

* 核心设计模式：[发布-订阅模式](https://juejin.cn/post/6844903921211670536)

* 监听数组的原理: 原型链的重写

5、实现数据绑定的几种做法

* [脏值检查](https://www.mopsky.com/2018/02/01/1eab7ae3ea/)

* 数据劫持 + 发布订阅

6、模板编译过程

[7、vue data为什么是函数？而不是对象](https://www.imqianduan.com/vue/192.html )


## vue-router
    1 vue-router常用路由
      https://router.vuejs.org/zh/guide/essentials/nested-routes.html

    2 路由两种模式实现原理
      https://www.cnblogs.com/Tiboo/p/11588022.html

## vuex
    1 什么是vuex?
    Vuex是一个专为Vue.js应用程序开发的状态管理模式。
    采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

    2 应用场景
    vuex只能用于单个页面中不同组件（例如兄弟组件）的数据流通

