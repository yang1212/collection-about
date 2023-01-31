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

3、defineProps与defineEmits

子组件接收父组件传值
````javaScript
<template>
  <div>{{childProps}}</div>
</template>

<script setup>
   // 获取父组件传入的props
   const props = defineProps({
     childProps: { type: String, default: 'a' }
   });
</script>

````
子组件向父组件触发事件
````javaScript
<template>
 <button @click="sendMessage"></button>
</template>

import { defineEmits } from 'vue'
<script setup>
   // 定义emit
   const emit = defineEmits(["acceptMessage"]);
   const sendMessage = () => emit('acceptMessage', 'a')
</script>

````
4、defineExpose
在父组件中调用子组件方法。(vue2 中通常使用$ref去获取子组件)
````javaScript
子组件：
<script setup>
   const goSomePage = () => {
       window.location.href = 'https://a.b.cn'
   }
   // 暴露给父组件
   defineExpose({
     goSomePage
   });
</script>

父组件
<template>
    <button @click="goSomePage">跳转</button>
    <Child ref="child" />
</template>

<script setup>
   import { ref } from "vue"
   import Child from "./Child.vue"

   const child = ref("child");
   const { goSomePage } = child.value;
</script>
````
