🌞 JavaScript 是一门解释型语言，没有编译阶段，所以它是动态类型

## 数据操作

[1、基本包装类型](https://juejin.cn/post/6923049481361424397)

* 为了便于JS操作，提供了 3 个特殊引用类型：Boolean, Number, String， 他们也称之为基本包装类型

* 🍄 执行 2.toString() 报错？

  JS引擎无法确定 '.' 是浮点数还是 . 操作符, 恰当的做法是用括号包裹，如：(2).toString()

[2、类型转换](https://juejin.im/post/5b6906b46fb9a04fcb5b8771)
  * 显式类型转换
  * 隐式类型转换
  * 拓展： '==' 与 '==='的应用场景

[3、判断值](https://juejin.im/post/5be52b1ae51d450b3647e766#heading-2)
 
  1) 是否为数组

     * Object.prototype.toString.call.slice(8, -1) (判断某个对象之属于哪种内置类型)
     * Array.isArray(value) 
     
  2) 是否为对象

     * Object.prototype.toString.call.slice(8, -1) 
     * instanceof ( 通过原型链判断: [].__proto__ === Array.prototype, 所以 👉 [] instanceof Array 为true, )
     
  3) 是否为function

     * Object.prototype.toString.call.slice(8, -1) 
     * instanceof
     
  4) 是否为基本类型

     * Object.prototype.toString.call.slice(8, -1) 
     * 除了null, typeof可判断剩下的基本数据类型与function
     
  5) 拓展知识之：[toString 与 valueOf](https://segmentfault.com/a/1190000010824347)
     
     * toString: 返回对象的字符串表示
     * valueOf: 返回对象的字符串，布尔，数值表示
 

4、常用原生方法
  1) indexOf
     * value.indexOf(item,start)
     * 从 数组/字符串 找到一个给定元素的第一个**索引**，如果不存在，则返回-1

  2) findIndex
     * 数组常用方法，返回符合条件的元素的**索引**位置
      ````
          var ages = [3, 10, 18, 20];
          function myFunction() {
            let temp = ages.findIndex(function((item) => {
              return itme > 10
            }));
            console.log(temp) // 2
          } 
      ````        
 3) slice  
     * 返回选定的元素, 该方法并不会修改原始数组/字符串
     * value(start, end)
       ```
       start 必须有：从0开始，包含 下标值 的元素
       eg: str = '123' ==> str.slice(1) === '23' 
       ```
4) 中断循环  
   * for/ for in -> break  
   * every/some -> return

5) 返回值
    * map：根据最终return决定得到的数据,不改变原数组
    * filter： 返回满足条件的数据项,不改变原数组
    * some/every： 布尔值

## 知识点   

1、静态作用域&动态作用域

  * 事实上JavaScript并不具有动态作用域，它只有词法作用域，简单明了，但是this机制某种程度上很像动态作用域

  * 静态作用域：静态作用域（即词法作用域）中的 函数 遇到既不是形参也不是函数内部定义的局部变量的变量时，会去**函数定义** 时的环境中查询。

  * 动态作用域：动态作用域中的 函数 遇到既不是形参也不是函数内部定义的局部变量的变量时，到**函数调用** 时的环境中查询。

[2、闭包](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

[3、This](https://www.cnblogs.com/Tiboo/p/11370325.html)
* setInterval()，setTimeout() 方法是浏览器 window 对象提供，所以this指向window对象，这跟变量的作用域有关
 
[4、哪些场景不能用箭头函数](https://zhuanlan.zhihu.com/p/26540168)
* 定义对象字面量方法
   
* 定义原型方法
    
* 定义事件回调函数
    
* 定义构造函数（这个有点奇怪，将代码直接运行在浏览器控制台会报错，但是基于编辑器运行后不会报错）

*  实际场景：Vue data不可以使用箭头函数问题。(关联拓展之: [vue data为什么是函数？而不是对象](https://www.imqianduan.com/vue/192.html))

[5、对象拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e#heading-4)

* 浅拷贝: 以赋值的形式拷贝引用对象，仍指向同一个地址，修改时原对象也会受到影响

* 深拷贝: 完全拷贝一个新对象，修改时原对象不再受到任何影响

[6、关于宏任务与微任务](https://github.com/yang1212/collection-about/issues/4)

[7、New操作符](https://juejin.cn/post/6844903789070123021)


## 影响性能的场景

1、为什么操作DOM慢

[2、防抖与节流](https://www.cnblogs.com/Tiboo/p/11795788.html)

[3、重绘与回流](https://www.cnblogs.com/Tiboo/p/10505613.html)

[4、存储](https://www.cnblogs.com/Tiboo/p/10355955.html)

[5、内存泄露](https://juejin.im/post/5b2fd09ee51d45588576f429)
 
  内存泄露是指new了一块内存，但无法被释放或者被垃圾回收, 造成内存泄露的可能会有以下几种情况：

    1）监听在window/body等事件没有解绑

    2）模块形成的闭包内部变量使用完后没有置成null

    3）使用第三方库创建，没有调用正确的销毁函数  


## 其他

1、JS数据存放位置
* 原始类型：值存储于栈中
* 引用类型：指针存储于栈中，值存储于堆中
