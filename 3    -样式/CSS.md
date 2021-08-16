### 知识点

[1、盒模型](https://www.zhangxinxu.com/wordpress/2016/09/talking-about-css-margin-box/)

  盒模型分为IE盒模型和W3C标准盒模型：

  IE盒模型：width = border + padding + 内容的宽度

  W3C标准盒模型： width = 内容的宽度 (box-sizing: border-box开启)
  
[2、清除浮动]()

[3、BFC](https://juejin.im/post/5a4dbe026fb9a0452207ebe6)

4、margin重叠
  

<br/>

### 布局

[1、居中](https://www.cnblogs.com/Tiboo/p/7617453.html)

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
[2、常见PC页面布局-float](https://www.cnblogs.com/Tiboo/p/6817185.html)

3、字体适配
* rem相对于根元素进行页面字体适配（缺陷是具有阶梯性）
* vh: 网页视口高度的1/100， vw: 网页视口宽度的1/100
````
  window.screen.height        屏幕高度
  window.innerHeight          网页视口高度
  document.body.clientHeight  body高度
````

[3、关于移动端适配的问题](https://www.cnblogs.com/Tiboo/p/12273842.html)

<br/>

### 其他

1、CSS动画处理考虑的性能问题

* 兼容性问题

* 过多DOM操作导致的动画卡顿

* 移动端要想动画性能流畅，应该使用3d硬件加速


2、[CSS3动画与JS动画的区别](https://www.cnblogs.com/shuaishuaidejun/p/7444711.html)

    
