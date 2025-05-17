**1、[Set](https://es6.ruanyifeng.com/#docs/set-map)、[Map](https://es6.ruanyifeng.com/#docs/set-map) 与 [WeakMap](https://www.zhangxinxu.com/wordpress/2021/08/js-weakmap-es6/)**

  1）Set
  
  * -概念：新的数据结构，类似于数组，但是成员的值都是唯一的。

  * -eg: [...new Set([2, 3, 2])] // [2, 3]

  * -eg: [...new Set('ababbc')] // ['a', 'b', 'c']

  2）Map
  
  * -概念：由于对象只接受字符串作为键名,为了解决这个问题，提出了Map数据结构。

  * -特性：它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
  
  * 使用规则：
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
  3）[WeakMap](https://www.zhangxinxu.com/wordpress/2021/08/js-weakmap-es6/)  
   
  * -概念：WeakMap的作用是更有效的垃圾回收、释放内存。它的键名所引用的对象都是弱引用, 垃圾回收机制不将该引用考虑在内，
    因此只要除该弱引用的其他引用被清除，内存就会被释放（ 对象的引用未手动删除时，垃圾回收就不会释放内存 ）。 

  * -特性：只接受对象作为键名（null除外），不接受其他类型的值作为键名。

  * 使用规则：

    ```javascript
    // WeakMap只有四个方法可用：get()、set()、has()、delete()
    const wm = new WeakMap();
    const element = document.getElementById('example');

    wm.set(element, 'some information');
    wm.get(element) // "some information"
    ```

**2、请求**

1）[Generator 函数](https://juejin.cn/post/6997955159158423582)
* 一种异步编程解决方案
* 打破完整运行，拥有暂停&启动的能力

2）[async](https://es6.ruanyifeng.com/#docs/async)
* Generator 函数的语法糖
* 常规用法

  ```javaScript
  async fnName() {
    try {
      const res = await testUp({
        isUp: 'yes',
      })
      if (res.code === '0000000') {
        console.log('to do')
        return
      }
      console.log('toast业务异常')
    } catch (error) {
      console.error('toast接口异常', error)
    }
  }

  ```

* async函数返回promise对象，可使用then方法添加回调函数
  ```javaScript
  let tempFn = async testFn() {
    const res = await getEquipment()
    console.log('to do res')
    return 'newVal'
  }
  tempFn.then((res) => {
    console.log(res) // newVal
  })
  ```

3）[promise](https://es6.ruanyifeng.com/#docs/promise)
* 一种异步编程的解决方案

**3、[proxy](https://es6.ruanyifeng.com/#docs/proxy)**

* 在目标对象之前设一层“拦截”，外界对该对象的访问，须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。[补充](https://blog.fundebug.com/2019/07/27/javascript-es6-how-to-use-proxy/)
