### 数据操作

[基本包装类型](https://juejin.cn/post/6923049481361424397)

* 6 个基本数据类型中，其中有 3 个是 ES 提供的特殊引用类型（基本包装类型）：Boolean, Number, String。
* 和其他引用类型一样，拥有内置的方法可以对数据进行额外操作
* 和引用类型的区别就是生存期不同，在代码执行后就会销毁实例
* 拓展： 3.toString()报错
* https://wiki.jikexueyuan.com/project/brief-talk-js/basic-type-of-packaging.html

> [类型转换](https://juejin.im/post/5b6906b46fb9a04fcb5b8771)
  * 显式类型转换
  * 隐式类型转换
  * 拓展： '==' 与 '==='的应用场景

> [判断值](https://juejin.im/post/5be52b1ae51d450b3647e766#heading-2)
 
  1) 是否为数组(每个对象都有一个 toString() 方法)

     Object.prototype.toString.call(o) 
     
     Array.isArray(value) 兼容性不够强大
     
  2) 是否为对象

     Object.prototype.toString.call(o) 
     
     instanceof
     
  3) 是否为function

     Object.prototype.toString.call(o) 
     
     instanceof
     
  4) 是否为基本类型

     Object.prototype.toString.call(o) 
     
     除了null, typeof可判断剩下的基本数据类型与function
     
  5) 拓展知识之：[toString 与 valueOf](https://segmentfault.com/a/1190000010824347)
 

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
     start：必须, 从0开始，包含下标值的元素
            也就是说，-1 指最后一个元素，-2 指倒数第二个元素
            eg: str = '123456' str.slice(1) === '23456'  str.slice(-3) === '456'       
     end:   可选，不包含下标值的元素
            如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
            eg: str = '123456' str.slice(1, 2) === '2'  str.slice(2,-1) === '345' 

  3) findIndex
     数组常用方法，返回符合条件的元素的索引位置，之后的值不会再调用执行函数
  ````
      var ages = [3, 10, 18, 20];
      function myFunction() {
        let temp = ages.findIndex(function((item) => {
          return itme > 10
        }));
        console.log(temp) // 2
      } 
  ````      

  4) for/ for in -> break  every/some -> return： 中断本次大循环  

  5) 
     map：根据最终的返回值决定得到的数据
     
     filter： 返回满足条件的数据项,不改变原数组
     
     some/every： 布尔值

### 知识点   

> 静态作用域&动态作用域

  事实上JavaScript并不具有动态作用域，它只有词法作用域，简单明了，但是this机制某种程度上很像动态作用域

    静态作用域：静态作用域（即词法作用域）中的 函数 遇到既不是形参也不是函数内部定义的局部变量的变量时，会去函数 定义 时的环境中查询。

    动态作用域：动态作用域中的 函数 遇到既不是形参也不是函数内部定义的局部变量的变量时，到函数 调用 时的环境中查。

> [闭包](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

    1 闭包就是能够读取其他函数内部变量的 **函数**

    2 定义在一个函数内部的函数

    3 作用域应用的特殊情况

    4 函数定义处

> [This](https://www.cnblogs.com/Tiboo/p/11370325.html)
 
  函数调用处

> [哪些场景不能用箭头函数](https://zhuanlan.zhihu.com/p/26540168)
* 定义对象字面量方法
   
* 定义原型方法
    
* 定义事件回调函数
    
* 定义构造函数（这个有点奇怪，将代码直接运行在浏览器控制台会报错，但是基于编辑器运行后不会报错）

*  实际场景：Vue data不可以使用箭头函数问题。(关联拓展之: [vue data为什么是函数？而不是对象](https://www.imqianduan.com/vue/192.html))

> [对象拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e#heading-4)
````
  浅拷贝: 以赋值的形式拷贝引用对象，仍指向同一个地址，修改时原对象也会受到影响(Object.assign)

  深拷贝: 完全拷贝一个新对象，修改时原对象不再受到任何影响
````  
> [数组去重的几种方式](https://www.cnblogs.com/Tiboo/p/11846316.html)

> [关于宏任务与微任务](https://github.com/yang1212/collection-about/issues/4)

> [关于promise，以及手写一个promise](https://www.cnblogs.com/Tiboo/p/10072963.html)

### 影响性能的场景

> [防抖与节流](https://www.cnblogs.com/Tiboo/p/11795788.html)

> [重绘与回流](https://www.cnblogs.com/Tiboo/p/10505613.html)

> [存储](https://www.cnblogs.com/Tiboo/p/10355955.html)

> [内存泄露](https://juejin.im/post/5b2fd09ee51d45588576f429)
 
  内存泄露是指new了一块内存，但无法被释放或者被垃圾回收, 造成内存泄露的可能会有以下几种情况：

    1）监听在window/body等事件没有解绑

    2）模块形成的闭包内部变量使用完后没有置成null

    3）使用第三方库创建，没有调用正确的销毁函数  

