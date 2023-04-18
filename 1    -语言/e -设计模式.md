## 目录

* [【 设计模式 】 单例模式](https://mp.weixin.qq.com/s/95_oTlmPKHqDCmUJaWeg0A)

* [【 设计模式 】 工厂模式](https://mp.weixin.qq.com/s/3SsjPP3bxPiQKASKfvyYag)

* [【 设计模式 】 装饰者模式](https://mp.weixin.qq.com/s/KVy81rtB0YMeaHaem1PYMw)

* [【 设计模式 】 状态模式](https://github.com/yang1212/collection-about/issues/36)

* [【 设计模式 】 策略模式](https://github.com/yang1212/collection-about/issues/37)

* [【 设计模式 】 发布-订阅模式](https://github.com/yang1212/collection-about/issues/38)




<br/>
<br/>

## 补充
**1、[设计模式二三](https://tech.meituan.com/2022/03/10/interesting-talk-about-design-patterns.html)**

**2、[什么是面向对象](https://zhuanlan.zhihu.com/p/75265007)**

**3、[什么是开放-封闭原则](https://cloud.tencent.com/developer/article/1456518)**

**4、[单一职责原则](https://geek-docs.com/design-pattern/design-principle/single-responsibility-principle.html)**

  * 1）一个类只能负责一个职责

  * 2）关联拓展：对于单例模式来说，单例模式的类**还需要负责只能够产生一个实例**。这违背了软件设计的单一职责原则，类应该只负责其实例的具体功能，而不应该对类产生的实例个数负责。
  
**5、面向对象中类之间的三个关系**

* 组合、委托与继承（组合和委托用的还不是很熟）
  
**6、抽象类的作用**
  
  * 1）JS中是没有抽象类的概念，一般就用类来代替抽象类实现。
  * 2）抽象类中定义的抽象方法，继承该抽象类的类必须实现声明的抽象方法。
  * 3）在java中：抽象类只能被继承，不能被创建为实例。
  

**7、实现与继承**
 
  * 继承

    -接口：可以继承接口或类

    -类：类只能继承类

    -类是单继承（即一个类只能继承一个类），接口是多继承（即一个接口可以继承多个接口）

  * 实现
  
    -类：类可以实现接口（💣 在ts中，类可以实现类，但是在java中，类只能实现接口）
  
