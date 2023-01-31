## 概念

1、[Vue3新特性总结](https://juejin.cn/post/6968094627375087653)

2、[生命周期](https://juejin.cn/post/6997412902713950221)

<br/>

## 使用

1、ref, reactive, toRef, toRefs

   #### 1) ref
   ```javascript
   // 定义基本类型
   <div>{{nameRef}}</div>
   setup() {
    const ageRef = ref('yf')
    onMounted(() => {
       console.log(ageRef.value)
    })
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
     return {
       chartRef
     }
   }
   ```

   #### 2) toRef
   解构响应式(在所接触的项目中，目前很少使用它)

  ```javascript
   <p>{{state.name}}</p>
   <p>{{ageRef}}</p>

   import {ref, toRef, reactive} from 'vue'
   setup() {
       const state = reactive({
           age: '20',
           name: 'yf'
       })
       const ageRef = toRef(state, 'age')
       return {
           state,
           ageRef
       }
   }
  ```
   #### 3) toRefs

   将响应式对象转换为普通对象
   ```javascript
   <p>{{age}}</p>
   <p>{{name}}</p>

   import {toRefs, reactive} from 'vue'
   setup() {
       const state = reactive({
           age: '20',
           name: 'yf'
       })
       return {
           ...toRefs(state)
       }
   }
  ```
  补充：[script setup中没有特别完美的...toRefs的解决方案](https://cloud.tencent.com/developer/article/1916168)



2、[watch最佳实践](https://juejin.cn/post/6980987158710452231)

