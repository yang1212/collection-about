## [Vue3](https://juejin.cn/post/6968094627375087653)

1、[生命周期](https://juejin.cn/post/6997412902713950221)

2、ref, reactive, toRef, toRefs

* ref
```javascript
定义值类型
<div>{{nameRef}}</div>
setup() {
 const ageRef = ref('yf')
 return {
   ageRef
 }
}

获取dom元素
<div ref="chartRef">dom</div>
setup() {
  const chartRef = ref(null)
  onMounted(() => {
    console.log(chartRef.value)
  })
}
```

* toRef(结构响应式)
<img width="626" alt="截屏2022-05-22 下午11 30 22" src="https://user-images.githubusercontent.com/17806205/169703259-fba61e27-5438-4aeb-a66e-9ee8f778f60a.png">


3、相对于vue2的调整

* API

   setup()

   响应式API: reactive(提倡复杂数据类型使用：如Object,Array)、 ref(基本数据类型用这个更合适)

   Composition API(组合API) 代替option API

* Fragment，Teleport，Suspense：新增的组件
* 更好的TypeScript支持
* Tree-shaking support

  vue2很多方法都挂载在全局Vue对象上，如$nextTick, set等， vue3可按需引入，使得打包后的bundle更轻量~    


4、如何实现响应式
