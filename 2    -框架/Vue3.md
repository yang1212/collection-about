## [Vue3](https://juejin.cn/post/6968094627375087653)

1、[生命周期](https://juejin.cn/post/6997412902713950221)

2、ref, reactive, toRef, toRefs

   #### 1) ref
   ```javascript
   // 定义基本类型
   <div>{{nameRef}}</div>
   setup() {
    const ageRef = ref('yf')
    return {
      ageRef
    }
   }

   // 获取dom元素
   <div ref="chartRef">dom</div>
   setup() {
     const chartRef = ref(null)
     onMounted(() => {
       console.log(chartRef.value)
     })
   }
   ```

   #### 2) toRef(解构响应式)

   如果作用于普通对象（非响应式对象），产出的结果不具备相应式
   <img width="626" alt="截屏2022-05-22 下午11 30 22" src="https://user-images.githubusercontent.com/17806205/169703259-fba61e27-5438-4aeb-a66e-9ee8f778f60a.png">

   #### 3) toRefs

   将响应式对象转换为普通对象
   ![截屏2022-05-22 下午11 52 04](https://user-images.githubusercontent.com/17806205/169704213-794a64fc-19e1-4913-a468-ffe40844cc4f.png)


   #### 4) reactive

3、defineProps、defineEmits

defineProps

<img width="866" alt="截屏2022-05-23 下午11 32 17" src="https://user-images.githubusercontent.com/17806205/169855216-765bba14-0e9c-4fc2-92ae-b661bb3f9bfe.png">

defineEmits

<img width="877" alt="截屏2022-05-23 下午11 37 53" src="https://user-images.githubusercontent.com/17806205/169856196-22f9d7bc-7f29-4e29-95e9-1476c0e8e084.png">



4、[watch最佳实践](https://juejin.cn/post/6980987158710452231)

