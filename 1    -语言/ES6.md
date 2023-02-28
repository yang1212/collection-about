[Set 与 WeakSet](https://es6.ruanyifeng.com/#docs/set-map)
  * Set
  
    ```
    1）类似于数组，但是成员的值都是唯一的

    2）[...new Set('ababbc')] // ['a', 'b', 'c']

    3）[...new Set([2, 3, 2])] // [2, 3]
    ```
    
[Map](https://es6.ruanyifeng.com/#docs/set-map) 与 [WeakMap](https://www.zhangxinxu.com/wordpress/2021/08/js-weakmap-es6/)  
  * Map
  
    ```
    1） 由于对象只接受字符串作为键名,为了解决这个问题，提出了Map数据结构

    2） 它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
    ```
    使用规则：
    ```javaScript
    const map = new Map([
      ['name', '张三'],
      ['title', 'Author']
    ]);
    
    map.set('test', 'aaa')
    map.size // 3
    map.has('name') // true
    map.get('name') // "张三"
    
    [...map.keys()] // ['name', 'title', 'test']
    [...map.values()] // ['张三', 'Author', 'aaa']
    [...map] // [['name', '张三'], ['title', 'Author'],['test', 'aaa']]
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
