🌞 JavaScript 是一门解释型语言，没有编译阶段，所以它是动态类型


## 知识点   

1、静态作用域&动态作用域

  * 事实上JavaScript并不具有动态作用域，它只有词法作用域，简单明了，但是this机制某种程度上很像动态作用域

  * 静态作用域：静态作用域（即词法作用域）中的 函数 遇到既不是形参也不是函数内部定义的局部变量的变量时，会去**函数定义** 时的环境中查询。

  * 动态作用域：动态作用域中的 函数 遇到既不是形参也不是函数内部定义的局部变量的变量时，到**函数调用** 时的环境中查询。

[2、This](https://www.cnblogs.com/Tiboo/p/11370325.html)
* setInterval()，setTimeout() 方法是浏览器 window 对象提供，所以this指向window对象，这跟变量的作用域有关
 
[3、哪些场景不能用箭头函数](https://zhuanlan.zhihu.com/p/26540168)

*  实际场景：Vue data不可以使用箭头函数问题。(关联拓展之: [vue data为什么是函数？而不是对象](https://www.imqianduan.com/vue/192.html))

[4、闭包](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

* 本质就是上级作用域内变量的生命周期，因为被下级作用域内引用，而没有被释放。就导致上级作用域内的变量，等到下级作用域执行完以后才正常得到释放？

[5、New操作符](https://juejin.cn/post/6844903789070123021)

[6、关于宏任务与微任务](https://github.com/yang1212/collection-about/issues/4)

## 数据操作

[1、类型转换](https://juejin.im/post/5b6906b46fb9a04fcb5b8771)

[2、判断值](https://juejin.im/post/5be52b1ae51d450b3647e766#heading-2)
````javaScript
// 通用
Object.prototype.toString.call.slice(8, -1) (判断某个对象之属于哪种内置类型)

// 基本类型
除了null, typeof可判断剩下的基本数据类型与function

// 数组
Array.isArray(value)
 
// 对象、function
instanceof ( 通过原型链判断: [].__proto__ === Array.prototype, 所以 👉 [] instanceof Array 为true)
````

[3、常用原生方法](https://github.com/yang1212/collection-about/issues/43)

[4、数值计算](https://github.com/yang1212/collection-about/issues/3)

[5、前端正则](https://github.com/yang1212/collection-about/issues/42)

[6、数组去重](https://www.cnblogs.com/Tiboo/p/11846316.html)

[7、对象拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e#heading-4)

* 浅拷贝: 以赋值的形式拷贝引用对象，仍指向同一个地址，修改时原对象也会受到影响

* 深拷贝: 完全拷贝一个新对象，修改时原对象不再受到任何影响


## 性能相关知识点

[1、为什么操作DOM慢](https://segmentfault.com/a/1190000004114594)

[2、重绘与回流](https://www.cnblogs.com/Tiboo/p/10505613.html)

[3、防抖与节流](https://www.cnblogs.com/Tiboo/p/11795788.html)

[4、前端缓存](https://github.com/yang1212/collection-about/issues/41)

[5、内存泄露](https://juejin.im/post/5b2fd09ee51d45588576f429)
 
  内存泄露是指new了一块内存，但无法被释放或者被垃圾回收, 造成内存泄露的可能会有以下几种情况：

    1）监听在window/body等事件没有解绑

    2）模块形成的闭包内部变量使用完后没有置成null

    3）使用第三方库创建，没有调用正确的销毁函数  


## 其他

1、JS数据存放位置
* 原始类型：值存储于栈中
* 引用类型：指针存储于栈中，值存储于堆中


2、执行 2.toString() 报错？

JS引擎无法确定 '.' 是浮点数还是 . 操作符, 恰当的做法是用括号包裹，如：(2).toString()

3、[toString 与 valueOf](https://segmentfault.com/a/1190000010824347)
     
     * toString: 返回对象的字符串表示
     * valueOf: 返回对象的字符串，布尔，数值表示
     
4、[模块化规范](https://github.com/yang1212/collection-about/issues/15)
* 1）[深入解析ES Module](https://zhuanlan.zhihu.com/p/40733281)
* 2）[不要使用 export default {a, b, c}](https://zhuanlan.zhihu.com/p/40733281)
* 3）[require 与 import](https://github.com/yang1212/collection-about/issues/40)
* 4）[MVC, MVVM](https://zhuanlan.zhihu.com/p/64257809)
