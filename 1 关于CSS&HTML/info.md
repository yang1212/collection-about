> 盒模型

  盒模型分为IE盒模型和W3C标准盒模型：

  IE盒模型：width = border + padding + 内容的宽度

  W3C标准盒模型： width = 内容的宽度

  [参考内容](https://www.zhangxinxu.com/wordpress/2016/09/talking-about-css-margin-box/)
  
<br/>

> BFC

  BFC（Block Formatting Context）直译为“块级格式化上下文”

  [参考内容](https://juejin.im/post/5a4dbe026fb9a0452207ebe6)

<br/>

> 布局

  常用水平居中：

  ````
  元素：   margin的auto
  行内元素： text-align:center;
  absolute + transform
  flex + justify-content: center
  ````
  
  常用垂直居中：

  ````
  line-height: height
  absolute + transform
  flex + align-items: center 
  ````  

  水平垂直居中:

  ````
  absolute + transform
  flex + justify-content + align-items
  ````  
  [参考内容](https://www.cnblogs.com/Tiboo/p/7617453.html)

<br/>

> 关于移动端适配的问题

  [参考内容](https://www.cnblogs.com/Tiboo/p/12273842.html)  
<br/>     

> CSS动画处理考虑的性能问题

  1 兼容性问题

  2 过多DOM操作导致的动画卡顿

  3 移动端要想动画性能流畅，应该使用3d硬件加速

<br/>   

> CSS3动画与JS动画的区别？

  [参考内容](https://www.cnblogs.com/shuaishuaidejun/p/7444711.html)
    

    