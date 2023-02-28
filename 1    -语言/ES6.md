1、[Set & Map](https://es6.ruanyifeng.com/#docs/set-map)
  * Set
  
    ```
    1）类似于数组，但是成员的值都是唯一的

    2）[...new Set('ababbc')] // ['a', 'b', 'c']

    3）[...new Set([2, 3, 2])] // [2, 3]
    ```
  * Map
  
    ```
    1） 对于Object, 传统上只能用字符串当作键

    2） Map 数据结构，类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
    ```
  * [WeakMap](https://www.zhangxinxu.com/wordpress/2021/08/js-weakmap-es6/)  
    ```
    key只能是对象，不能是原始数据类型

    可以更有效的垃圾回收、释放内存

    适合用在在对象上临时缓存数据的场景
    ```      

2、[promise](https://es6.ruanyifeng.com/#docs/promise)

3、[生成器函数](https://juejin.cn/post/6844903877221810183)

4、[async](https://es6.ruanyifeng.com/#docs/async)

5、[proxy](https://es6.ruanyifeng.com/#docs/proxy)

* 在目标对象之前设一层“拦截”，外界对该对象的访问，须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。[补充](https://blog.fundebug.com/2019/07/27/javascript-es6-how-to-use-proxy/)
