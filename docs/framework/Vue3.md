## 用法与概念

**1、[新特性总结](https://juejin.cn/post/6968094627375087653)**

**2、[生命周期](https://juejin.cn/post/6997412902713950221)**


**3、[ref, reactive, toRef, toRefs](https://github.com/yang1212/collection-about/issues/45)**

**4、[双向数据绑定](https://github.com/yang1212/collection-about/issues/70)**

**5、[watch最佳实践](https://juejin.cn/post/6980987158710452231)**

**6、数据通信**

* defineProps：子组件接收父组件传值
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
* defineEmits：子组件向父组件触发事件
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
**7、defineExpose**
* 在父组件中调用子组件方法。(vue2 中通常使用$ref去获取子组件)
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

  父组件：
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
  <br/>

  ## 状态管理

  1、[Pinia: Vuex的替代品](https://github.com/yang1212/collection-about/issues/44)




  <br/>
  
