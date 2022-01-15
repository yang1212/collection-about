### 知识点

[1、盒模型](https://www.zhangxinxu.com/wordpress/2016/09/talking-about-css-margin-box/)
  
   
  box-sizing用来规定容器元素的尺寸计算方式，它的属性值分别对应如下：
  
    content-box （W3C标准盒模型： width = 内容的宽度; 默认）

    border-box  （IE模型： width = border + padding + 内容的宽度）

    inherit （继承父元素）
  
👉 防混淆：
  
  W3C认为CSS盒模型是用来控制排版的，所以规定宽高都是内容的宽高。 --》 既然是标准，那content-box就成为了默认值
  
  IE则以为CSS盒模型是用来控制布局的，所以和表格的宽高定义一样。  --》 宽度计算包含了border, padding值, 那对应的是border-box
  
<br/>

[2、position定位](https://www.ruanyifeng.com/blog/2019/11/css-position.html)

👉 遗漏点：

父元素设置相对定位或绝对定位，设置绝对定位的元素A会相对于离自己最近的设置了相对或绝对定位的父元素进行定位,（或者说离自己最近的不是static的父元素进行定位，因为元素默认是static）
    

<br/>

[3、margin重叠](https://github.com/yang1212/collection-about/issues/17)

[4、浮动](https://github.com/yang1212/collection-about/issues/19)

[5、BFC](https://juejin.im/post/5a4dbe026fb9a0452207ebe6)

[6、布局](https://github.com/yang1212/collection-about/issues/20)

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

    
