### 知识点

[1、盒模型](https://www.zhangxinxu.com/wordpress/2016/09/talking-about-css-margin-box/)

  box-sizing： 最主要的用法是规定容器元素的尺寸计算方式
  
  它的3个值分别对应如下：
  
  content-box （默认值，W3C标准盒模型： width = 内容的宽度）
  
  border-box （IE模型： width = border + padding + 内容的宽度）
  
  inherit （继承父元素）
  
  防混淆理解：
  
  W3C认为CSS盒模型: 是用来控制排版的，所以规定宽高都是内容的宽高。 --》 既然是标准，那content-box就成为了默认值
  
  IE则以为CSS盒模型: 是用来控制布局的，所以和表格的宽高定义一样。  --》 宽度计算包含了border, padding值, 那对应的是border-box
  
[2、position](https://www.ruanyifeng.com/blog/2019/11/css-position.html)

[3、margin重叠](https://github.com/aermin/blog/issues/40)

[4、BFC](https://juejin.im/post/5a4dbe026fb9a0452207ebe6)

[5、清除浮动](https://github.com/YvetteLau/Step-By-Step/issues/32)
 

[6、居中](https://www.cnblogs.com/Tiboo/p/7617453.html)

  * 常用水平居中：

  ````
  元素：          margin的auto
  行内元素：      text-align:center;
  flex布局：      justify-content: center
  子元素宽度已知： absolute + margin-left(负值)
  子元素宽度未知： absolute + transform(-50%)
  ````
  
  * 常用垂直居中：
  
  ````
  line-height 与 height 一致
  flex布局：      align-items: center 
  子元素高度已知： absolute + margin-top(负值)
  子元素高度未知： absolute + transform(-50%)
  ````  

  * [常见PC页面布局-float](https://www.cnblogs.com/Tiboo/p/6817185.html)

7、适配
  * 字体适配
    * rem相对于根元素进行页面字体适配（缺陷是具有阶梯性）
    * vh: 网页视口高度的1/100， vw: 网页视口宽度的1/100
    ````
      window.screen.height        屏幕高度
      window.innerHeight          网页视口高度
      document.body.clientHeight  body高度
    ````

  * [关于移动端适配的问题](https://www.cnblogs.com/Tiboo/p/12273842.html)

<br/>

### 其他

1、CSS动画处理考虑的性能问题

* 兼容性问题

* 过多DOM操作导致的动画卡顿

* 移动端要想动画性能流畅，应该使用3d硬件加速


2、[CSS3动画与JS动画的区别](https://www.cnblogs.com/shuaishuaidejun/p/7444711.html)

    
