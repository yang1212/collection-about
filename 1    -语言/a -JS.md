🌞 JavaScript 是一门解释型语言，没有编译阶段，所以它是动态类型


## 一、常见知识点理解  

**1、静态作用域&动态作用域**

  * JavaScript并不具有动态作用域，它只有词法作用域，但是this机制某种程度上很像动态作用域

  * 静态作用域：静态作用域（即词法作用域）中的 函数 遇到既不是形参也不是函数内部定义的局部变量的变量时，会去 **函数定义** 时的环境中查询。

  * 动态作用域：动态作用域中的 函数 遇到既不是形参也不是函数内部定义的局部变量的变量时，到 **函数调用** 时的环境中查询。

**[2、This](https://www.cnblogs.com/Tiboo/p/11370325.html)**
* 结合上面对作用域的理解，setInterval()，setTimeout() 方法是浏览器 window 对象提供，所以this指向window对象。
* [箭头函数](https://github.com/yang1212/collection-about/issues/40)

3、函数
* 拓展一：[哪些场景不能用箭头函数](https://zhuanlan.zhihu.com/p/26540168)


**[4、闭包](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)**

* 本质就是上级作用域内变量的生命周期，因为被下级作用域内引用，而没有被释放。就导致上级作用域内的变量，等到下级作用域执行完以后才正常得到释放。

**[5、New操作符](https://juejin.cn/post/6844903789070123021)**

**[6、关于宏任务与微任务](https://github.com/yang1212/collection-about/issues/4)**

<br/>

## 二、数据操作

**[1、判断值](https://juejin.im/post/5be52b1ae51d450b3647e766#heading-2)**
* **大通用**：Object.prototype.toString.call(‘yf’).slice(8, -1) // String
* **基本类型**： typeof val === "function"（除了null, 可判断基本数据类型与function）
* **数组**：Array.isArray(value)
* **对象、function**： instanceof ( 原型链判断:  [] instanceof Array 为true, 因为[].__proto__ === Array.prototype )


**[2、常用原生方法](https://github.com/yang1212/collection-about/issues/43)**

**[3、数值计算](https://github.com/yang1212/collection-about/issues/3)**

**[4、数组去重](https://www.cnblogs.com/Tiboo/p/11846316.html)**

**[5、前端正则](https://github.com/yang1212/collection-about/issues/42)**

**[6、对象拷贝](https://juejin.cn/post/7299659033970229283)**

**[7、类型转换](https://juejin.im/post/5b6906b46fb9a04fcb5b8771)**


## 三、性能相关知识点

**[1、为什么操作DOM慢](https://segmentfault.com/a/1190000004114594)**

**[2、重绘与回流](https://www.cnblogs.com/Tiboo/p/10505613.html)**

**[3、防抖与节流](https://www.cnblogs.com/Tiboo/p/11795788.html)**

**[4、前端缓存](https://github.com/yang1212/collection-about/issues/41)**

**[5、内存泄露](https://juejin.im/post/5b2fd09ee51d45588576f429)**

指内存没有被释放或者被垃圾回收，造成内存泄露的可能会有以下几种情况：
* 监听在window/body等事件没有解绑
* 模块形成的闭包内部变量使用完后没有置成null
* 使用第三方库创建，没有调用正确的销毁函数  


<br/>

## 四、其他

**1、JS数据存放位置**
* 原始类型：值存储于栈中
* 引用类型：指针存储于栈中，值存储于堆中


**2、[valueOf与toString](https://segmentfault.com/a/1190000010824347)**
     
  * valueOf: 返回对象的字符串，布尔，数值表示
  * toString: 返回对象的字符串表示
  * toString拓展：执行2.toString() 报错是S引擎无法确定 '.' 是浮点数还是 . 操作符, 恰当的做法是用括号包裹，如：(2).toString()

     
**3、[模块化规范](https://github.com/yang1212/collection-about/issues/15)**
* 1）[深入解析ES Module](https://zhuanlan.zhihu.com/p/40733281)
* 2）[不要使用 export default {a, b, c}](https://zhuanlan.zhihu.com/p/40733281)
* 3）[require 与 import](https://github.com/yang1212/collection-about/issues/40)
* 4）[MVC, MVVM](https://zhuanlan.zhihu.com/p/64257809)

**4、[JavaScript实现千位分隔符](https://www.jianshu.com/p/928c68f92c0c)**
