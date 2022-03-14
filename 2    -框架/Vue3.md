## [Vue3](https://juejin.cn/post/6968094627375087653)

1、生命周期

2、相对于vue2的调整

* API

   setup()

   响应式API: reactive(提倡复杂数据类型使用：如Object,Array)、 ref(基本数据类型用这个更合适)

   Composition API(组合API) 代替option API

* Fragment，Teleport，Suspense：新增的组件
* 更好的TypeScript支持
* Tree-shaking support

  vue2很多方法都挂载在全局Vue对象上，如$nextTick, set等， vue3可按需引入，使得打包后的bundle更轻量~    


3、如何实现响应式
