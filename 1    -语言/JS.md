## 数据操作相关篇幅

<br/>

> 判断值 ([参考](https://juejin.im/post/5be52b1ae51d450b3647e766#heading-2)   )
  1) 是否为数组
     instanceof/contructor 常用，偶尔不准确？/假定一个全局环境，iframe引入后
     Array.isArray(value) 兼容性不够强大
     Object.prototype.toString.call(o) 最稳
  2) 是否为对象
     instanceof
     Object.prototype.toString.call(o) 最稳
  3) 是否为function
     instanceof
     Object.prototype.toString.call(o) 最稳
  4) 是否为基本类型
     Object.prototype.toString.call(o) 最稳
     除了null, typeof可判断剩下的基本数据类型
  
<br/>

> 折腾原生方法
  1) indexOf
     从数组/字符串中搜索一个指定的元素首次出现位置
     value.indexOf(item,start)
     item: 必须，查找的元素
     start： 可选参数, 规定在数组中从哪开始检索的位置 

  2) slice
     从已有的数组/字符串中返回选定的元素
     该方法并不会修改数组/字符串，而是返回一个子数组/新串
     arrayObject.slice(start,end)
     start：必须, 规定从何处开始选取,如果是负数，那么它规定从数组尾部开始算起的位置。
            也就是说，-1 指最后一个元素，-2 指倒数第二个元素
            eg: str = '123456' str.slice(2) = '3456'  str.slice(-3) = '456'       
     end:   可选，规定从何处结束选取,该参数是数组片断结束处的数组下标
            如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
            eg: str = '123456' str.slice(2, 4) = '34'  str.slice(2,-1) = '345' 

  3) findIndex
     数组常用方法，返回符合条件的元素的索引位置，之后的值不会再调用执行函数  
     eg:  var ages = [3, 10, 18, 20];
          function myFunction() {
            let temp = ages.findIndex(function((item) => {
              return itme > 10
            }));
            console.log(temp) // 2
          } 

  4) for/ for in -> break  every/some -> return： 中断本次大循环  

  5) 迭代方法
     map：根据最终的返回值决定数组的结构
     filter： 可返回满足条件的数据
     some/every： 布尔值

<br/>     

> 静态作用域&动态作用域

  事实上JavaScript并不具有动态作用域，它只有词法作用域，简单明了，但是this机制某种程度上很像动态作用域

  静态：静态作用域（即词法作用域）中的 函数 遇到既不是形参也不是函数内部定义的局部变量的变量时，会去函数 定义 时的环境中查询。
  eg:
    function foo(){ console.log(a) }
    function bar(){
      var a = 3;
      return foo()
    }
    var a = 2;
    bar();
    
  动态：动态作用域中的 函数 遇到既不是形参也不是函数内部定义的局部变量的变量时，到函数 调用 时的环境中查。

<br/>

> 闭包 ([参考](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html))

  1 闭包就是能够读取其他函数内部变量的函数

  2 定义在一个函数内部的函数

  <br/>

> this的指向练习，以及通过函数执行改变this指向知识点

  [参考1](https://github.com/YvetteLau/Blog/issues/6)、[参考2](https://www.cnblogs.com/Tiboo/p/11370325.html)

<br/>

> 哪些场景不能用箭头函数 ([参考](https://zhuanlan.zhihu.com/p/26540168))

  定义对象字面量方法、定义原型方法、定义构造函数、定义事件回调函数

  实际场景：Vue data不可以使用箭头函数问题


<br/>

> 类型转换

  显式类型转换

  隐式类型转换 (可大量训练特殊值，了解规则)

 [参考](https://juejin.im/post/5b6906b46fb9a04fcb5b8771)
 
<br/> 

> 对象拷贝 ([参考1](https://www.cnblogs.com/Tiboo/p/12306442.html)、[参考2](https://juejin.im/post/5b5dcf8351882519790c9a2e#heading-4))

  浅拷贝: 以赋值的形式拷贝引用对象，仍指向同一个地址，修改时原对象也会受到影响(Object.assign)

  深拷贝: 完全拷贝一个新对象，修改时原对象不再受到任何影响
  
<br/> 

> 数组去重的几种方式

 [参考](https://www.cnblogs.com/Tiboo/p/11846316.html)

<br/>

## 其他

<br/>

> 关于promise，以及手写一个promise

[参考](https://www.cnblogs.com/Tiboo/p/10072963.html)

<br/>

> 防抖与节流

[参考](https://www.cnblogs.com/Tiboo/p/11795788.html)

<br/>

> 重绘与回流

[参考](https://www.cnblogs.com/Tiboo/p/10505613.html)

<br/>

> 关于宏任务与微任务

[参考](https://github.com/yang1212/collection-about/issues/4)

<br/>

> 存储

[参考](https://www.cnblogs.com/Tiboo/p/10355955.html)

<br/>

> 内存泄露

  内存泄露是指new了一块内存，但无法被释放或者被垃圾回收, 造成内存泄露的可能会有以下几种情况：

  1）监听在window/body等事件没有解绑

  2）绑在EventBus的事件没有解绑

  3）Vuex的$store watch了之后没有unwatch

  4）模块形成的闭包内部变量使用完后没有置成null

  5）使用第三方库创建，没有调用正确的销毁函数  

  [参考](https://juejin.im/post/5b2fd09ee51d45588576f429)    