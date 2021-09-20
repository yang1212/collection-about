<img src="https://wfqqreader-1252317822.image.myqcloud.com/cover/876/25545876/t6_25545876.jpg" alt="书籍封面" class="wr_bookCover_img">

Webpack实战：入门、进阶与调优 居玉皓

简介：

这是一本能指导读者零基础快速掌握Webpack并轻松进阶的实战性著作。作者是资深的前端工程师，在Webpack领域有深厚的积累，是知名开源打包工具YKit的主导者和核心开发者。本书从功能特性、工作原理、应用实践、性能优化4个维度对Webpack进行了全面的讲解，内容上尽力避免了网络上已经公开发表的各种资料和文档，而是从作者的实际经验出发，将更有价值的内容呈现给读者，尽量帮助读者少走弯路。全书一共10章：第1章是一个快速的指引，介绍了Webpack的概念、适用场景、开发环境搭建，以及如何快速上手。第2~7章详细讲解了Webpack的各项功能特性及其工作原理，同时讲解了它们的适用场景，以及如何付诸实践。第8~9章深入总结了打包的性能优化和开发环境的优化。第10章介绍了其他打包工具并对这些工具进行了各项特性的对比。


80个笔记

1.1 何为Webpack

 

Webpack是一个开源的JavaScript模块打包工具，其最核心的功能是解决模块之间的依赖，把各个模块按照特定的规则和顺序组织在一起，最终合并为一个JS文件（有时会有多个，这里讨论的只是最基本的情况）。这个过程就叫作模块打包。

1.2.1 何为模块

 

比如，在工程中引入一个日期处理的npm包，或者编写一个提供工具方法的JS文件，这些都可以称为模块。

 

 

按照特定的功能将其拆分为多个代码段，每个代码段实现一个特定的目的。你可以对其进行独立的设计、开发和测试，最终通过接口来将它们组合在一起。这就是基本的模块化思想。

1.2.2 JavaScript中的模块

 

·每一个script标签都意味着需要向服务器请求一次静态资源，在HTTP 2还没出现的时期，建立连接的成本是很高的，过多的请求会严重拖慢网页的渲染速度。

1.2.3 模块打包工具

 

模块打包工具（module bundler）的任务就是解决模块间的依赖，使其打包后的结果能运行在浏览器上。它的工作方式主要分为两种： ·将存在依赖关系的模块按照特定规则合并为单个JS文件，一次全部加载进页面中。 ·在页面初始时加载一个入口模块，其他模块异步地进行加载。

1.2.4 为什么选择Webpack

 

1）Webpack默认支持多种模块标准，包括AMD、CommonJS，以及最新的ES6模块，而其他工具大多只能支持一到两种。这对于一些同时使用多种模块标准的工程非常有用，Webpack会帮我们处理好不同类型模块之间的依赖关系。 2）Webpack有完备的代码分割（code splitting）解决方案。从字面意思去理解，它可以分割打包后的资源，首屏只加载必要的部分，不太重要的功能放到后面动态地加载。这对于资源体积较大的应用来说尤为重要，可以有效地减小资源体积，提升首页渲染速度。 3）Webpack可以处理各种类型的资源。除了JavaScript以外，Webpack还可以处理样式、模板，甚至图片等，而开发者需要做的仅仅是导入它们。比如你可以从JavaScript文件导入一个CSS或者PNG，而这一切最终都可以由第4章讲到的loader来处理。 4）Webpack拥有庞大的社区支持。除了Webpack核心库以外，还有无数开发者来为它编写周边插件和工具，绝大多数的需求你都可以直接找到已有解决方案，甚至会有多个解决方案供你挑选。

1.4.2 使用npm scripts

 

scripts是npm提供的脚本命令功能，在这里我们可以直接使用由模块所添加的指令

1.4.5 webpack-dev-server

 

当webpack-dev-server接收到浏览器的资源请求时，它会首先进行URL地址校验。如果该地址是资源服务地址（上面配置的publicPath），就会从Webpack的打包结果中寻找该资源并返回给浏览器。

 

 

综上我们可以总结出webpack-dev-server的两大职能： ·令Webpack进行模块打包，并处理打包结果的资源请求。 ·作为普通的Web Server，处理静态资源文件请求。

 

 

直接用Webpack开发和使用webpack-dev-server有一个很大的区别，前者每次都会生成budnle.js，而webpack-dev-server只是将打包结果放在内存中，并不会写入实际的bundle.js，在每次webpack-dev-server接收到请求时都只是将内存中的打包结果返回给浏览器。

 

 

这一点可以通过删除工程中的dist目录来验证，你会发现即便dist目录不存在

2.1 CommonJS

 

CommonJS是由JavaScript社区于2009年提出的包含模块、文件、IO、控制台在内的一系列标准

2.1.1 模块

 

CommonJS中规定每个文件是一个模块

 

 

将一个JavaScript文件直接通过script标签插入页面中与封装成CommonJS模块最大的不同在于，前者的顶层作用域是全局作用域，在进行变量及函数声明时会污染全局环境；而后者会形成一个属于模块自身的作用域，所有的变量及函数只有自己能访问，对外是不可见的。

2.1.3 导入

 

当我们require一个模块时会有两种情况：·require的模块是第一次被加载。这时会首先执行该模块，然后导出内容。·require的模块曾被加载过。这时该模块的代码不会再次执行，而是直接导出上次执行后得到的结果。

 

 

模块会有一个module对象用来存放其信息，这个对象中有一个属性loaded用于记录该模块是否被加载过。它的值默认为false，当模块第一次被加载和执行过后会置为true，后面再次加载时检查到module.loaded为true，则不会再次执行模块代码。

 

 

有时我们加载一个模块，不需要获取其导出的内容，只是想要通过执行它而产生某种作用，比如把它的接口挂在全局对象上，此时直接使用require即可。require('./task.js');

2.2.3 导入

 

使用import*as可以把所有导入的变量作为属性值添加到对象中，从而减少了对当前作用域的影响。

2.3.1 动态与静态

 

CommonJS与ES6 Module最本质的区别在于前者对模块依赖的解决是“动态的”，而后者是“静态的”。在这里“动态”的含义是，模块依赖关系的建立发生在代码运行阶段；而“静态”则是模块依赖关系的建立发生在代码编译阶段。

2.3.2 值拷贝与动态映射

 

在导入一个模块时，对于CommonJS来说获取的是一份导出值的拷贝；而在ES6 Module中则是值的动态映射，并且这个映射是只读的。

2.3.3 循环依赖

 

因此在CommonJS中，若遇到循环依赖我们没有办法得到预想中的结果。

2.4.1 非模块化文件

 

一般来说jQuery这类库都是将其接口绑定在全局，因此无论是从script标签引入，还是使用Webpack打包的方式引入，其最终效果是一样的。

2.4.4 加载npm模块

 

JavaScript最主流的包管理器有两个——npm和yarn

3.1 资源处理流程

 

这些存在依赖关系的模块会在打包时被封装为一个chunk。

 

 

chunk字面的意思是代码块，在Webpack中可以理解成被抽象和包装过后的一些模块。它就像一个装着很多文件的文件袋，里面的文件就是各个模块

 

 

已经了解到，Webpack会从入口文件开始检索，并将具有依赖关系的模块生成一棵依赖树，最终得到一个chunk。由这个chunk得到的打包产物我们一般称之为bundle。

 

 

一个入口也可能产生多个chunk并最终生成多个bundle，

3.2.2 entry

 

传入一个数组的作用是将多个资源预先合并，在打包时Webpack会将数组中的最后一个元素作为实际的入口路径。

 

 

如果想要定义多入口，则必须使用对象的形式。对象的属性名（key）是chunk name，属性值（value）是入口路径。

3.2.3 实例

 

在Webpack默认配置中，当一个bundle大于250kB时（压缩前）会认为这个bundle已经过大了，在打包时会发生警告，如图3-4所示。 ￼

 

 

vendor的意思是“供应商”，在Webpack中vendor一般指的是工程所使用的库、框架等第三方模块集中打包而产生的bundle。请看下面这个例子：

 

 

其依赖的第三方模块将会被抽取出来生成一个新的bundle，这也就达到了我们提取vendor的目标。由于vendor仅仅包含第三方模块，这部分不会经常变动，因此可以有效地利用客户端缓存，在用户后续请求页面时会加快整体的渲染速度。

3.3.2 path

 

而在Webpack 4之后，output.path已经默认为dist目录，除非我们需要更改它，否则不必单独配置。 

3.3.3 publicPath

 

path用来指定资源的输出位置，而publicPath则用来指定资源的请求位置

 

 

若publicPath的值以“/”开始，则代表此时publicPath是以当前页面的host name为基础路径的。

 

 

为了避免开发环境和生产环境产生不一致而造成开发者的疑惑，我们可以将webpack-dev-server的publicPath与Webpack中的output.path保持一致，这样在任何环境下资源输出的目录都是相同的

4.2 loader概述

 

每个loader本质上都是一个函数。在Webpack 4之前，函数的输入和输出都必须为字符串；在Webpack 4之后，loader也同时支持抽象语法树（AST）的传递，通过这种方法来减少重复的代码解析。用公式表达loader的本质则为以下形式： output=loader(input)

4.3 loader的配置

 

Webpack本身只认识JavaScript，对于其他类型的资源必须预先定义一个或多个loader对其进行转译，输出为Webpack能够接收的形式再继续进行，因此loader做的实际上是一个预处理的工作。 

4.3.1 loader的引入

 

这是因为css-loader的作用仅仅是处理CSS的各种加载语法（@import和url()函数等），如果要使样式起作用还需要style-loader来把样式插入页面。css-loader与style-loader通常是配合在一起使用的。

4.3.2 链式loader

 

我们把style-loader加到了css-loader前面，这是因为在Webpack打包时是按照数组从后往前的顺序将资源交给loader处理的，因此要把最后生效的放在前面。

4.3.4 更多配置

 

举个例子，在项目中我们经常会使用babel-loader（后面章节会介绍）来处理ES6+语言特性，但是对于node_modules中的JS文件来说，很多都是已经编译为ES5的，因此没有必要再使用babel-loader来进行额外处理。

 

 

include代表该规则只对正则匹配到的模块生效。假如我们将include设置为工程的源码目录，自然而然就将node_modules等目录排除掉了。 exclude和include同时存在时，exclude的优先级更高。请

 

 

可以看到，在配置中添加了一个eslint-loader来对源码进行质量检测，其enforce的值为“pre”，代表它将在所有正常loader之前执行，这样可以保证其检测的代码不是被其他loader更改过的。类似的，如果某一个loader是需要在所有loader之后执行的，我们也可以指定其enforce为“post”。

4.4.1 babel-loader

 

·babel-loader：它是使Babel与Webpack协同工作的模块。 ·@babel/core：顾名思义，它是Babel编译器的核心模块。 ·@babel/preset-env：它是Babel官方推荐的预置器，可根据用户设置的目标环境自动添加所需的插件和补丁来编译ES6+代码。

 

 

对于babel-loader本身我们添加了cacheDirectory配置项，它会启用缓存机制，在重复打包未改变过的模块时防止二次编译，同样也会加快打包的速度。

 

 

）由于@babel/preset-env会将ES6 Module转化为CommonJS的形式，这会导致Webpack中的tree-shaking特性失效（关于tree-shaking会在第8章详细介绍）。将@babel/preset-env的modules配置项设置为false会禁用模块语句的转化，而将ES6 Module的语法交给Webpack本身处理。

4.4.2 ts-loader

 

Typescript本身的配置并不在ts-loader中，而是必须要放在工程目录下的tsconfig.json中

4.4.3 html-loader

 

html-loader用于将HTML文件转化为字符串并进行格式化，这使得我们可以把一个HTML片段通过JS加载进来。

4.4.4 handlebars-loader

 

handlebars-loader用于处理handlebars模板，在安装时要额外安装handlebars。

4.4.5 file-loader

 

file-loader用于打包文件类型的资源，并返回其publicPath。

4.4.6 url-loader

 

url-loader与file-loader作用类似，唯一的不同在于用户可以设置一个文件大小的阈值，当大于该阈值时与file-loader一样返回publicPath，而小于该阈值时则返回文件base64形式编码。

4.4.7 vue-loader

 

vue-loader可以将组件的模板、JS及样式进行拆分。在安装时，除了必要的vue与vue-loader以外，还要安装vue-template-compiler来编译Vue模板，以及css-loader来处理样式（如果使用SCSS或LESS则仍需要对应的loader

4.5 自定义loader

 

我们将实现一个loader，它会为所有JS文件启用严格模式，

 

 

在Webpack工程目录下使用相对路径安装，会在项目的node_modules中创建一个指向实际force-strict-loader目录的软链，也就是说之后我们可以随时修改loader源码并且不需要重复安装了。

 

 

当文件输入和其依赖没有发生变化时，应该让loader直接使用缓存，而不是重复进行转换的工作。在Webpack中可以使用this.cacheable进行控制，修改我们的loader。

4.6 本章小结

 

loader就像Webpack的翻译官。Webpack本身只能接受JavaScript，为了使其能够处理其他类型的资源，必须使用loader将资源转译为Webpack能够理解的形式。

 

 

loader本质上是一个函数。第一个loader的输入是源文件，之后所有loader的输入是上一个loader的输出，最后一个loader则直接输出给Webpack。 

5.1 分离样式文件

 

Webpack社区有专门的插件：extract-text-webpack-plugin（适用于Webpack 4之前版本）和mini-css-extract-plugin（适用于Webpack 4及以上版本），它们就是专门用于提取样式到CSS文件的。

5.1.1 extract-text-webpack-plugin

 

plugins用于接收一个插件数组，我们可以使用Webpack内部提供的一些插件，也可以加载外部插件。

5.1.2 多样式文件的处理

 

这里的[name]和在output.filename中的意义一样，都是指代chunk的名字，即entry中我们为每一个入口分配的名字（foo、bar）。

5.1.3 mini-css-extract-plugin

 

mini-css-extract-plugin的特性，最重要的就是它支持按需加载CSS

5.2.1 Sass与SCSS

 

sass-loader就是将SCSS语法编译为CSS，因此在使用时通常还要搭配css-loader和style-loader。

 

 

因此这里我们除了sass-loader以外还要安装node-sass，node-sass是真正用来编译SCSS的，而sass-loader只是起到黏合的作用

 

 

值得一提的是，假如我们想要在浏览器的调试工具里查看源码，需要分别为sass-loader和css-loader单独添加source map的配置项。

5.3 PostCSS

 

PostCSS并不能算是一个CSS的预编译器，它只是一个编译插件的容器

5.3.1 PostCSS与Webpack

 

postcss-loader可以结合css-loader使用，也可以单独使用，也就是说不配置css-loader也可以达到相同的效果。唯一不同的是，单独使用postcss-loader时不建议使用CSS中的@import语句，否则会产生冗余代码，因此官方推荐还是将postcss-loader放在css-loader之后使用。

 

 

PostCSS要求必须有一个单独的配置文件。在

5.3.2 自动前缀

 

PostCSS一个最广泛的应用场景就是与Autoprefixer结合，为CSS自动添加厂商前缀。

5.3.3 stylelint

 

stylelint是一个CSS的质量检测工具，就像eslint一样，我们可以为其添加各种规则，来统一项目的代码风格，确保代码质量。

5.3.4 CSSNext

 

PostCSS可以与CSSNext结合使用，让我们在应用中使用最新的CSS语法特性。

第6章 代码分片

 

实现高性能应用其中重要的一点就是尽可能地让用户每次只加载必要的资源，优先级不太高的资源则采用延迟加载等技术渐进式地获取，这样可以保证页面的首屏速度。

6.1 通过入口划分代码

 

这种拆分方法主要适合于那些将接口绑定在全局对象上的库，因为业务代码中的模块无法直接引用库中的模块，二者属于不同的依赖树。

6.2 CommonsChunkPlugin

 

·开发过程中减少了重复模块打包，可以提升开发速度；·减小整体资源体积；·合理分片后的代码可以更有效地利用客户端缓存。

 

 

得在页面中添加一个script标签来引入commons.js，并且注意，该JS一定要在其他JS之前引入。

6.2.2 设置提取范围

 

通过CommonsChunkPlugin中的chunks配置项可以规定从哪些入口中提取公共模块，

6.2.3 设置提取规则

 

CommonsChunkPlugin的默认规则是只要一个模块被两个入口chunk所使用就会被提取出来，比如只要a和b用了react，react就会被提取出

 

 

minChunks可以接受一个数字，当设置minChunks为n时，只有该模块被n个入口同时引用才会进行提取

 

 

另一个是我们指定minChunks为Infinity，为了生成一个没有任何模块而仅仅包含Webpack初始化环境的文件，这个文件我们通常称为manifest。

6.3 optimization.SplitChunks

 

optimization.SplitChunks（简称SplitChunks）是Webpack 4为了改进CommonsChunk-Plugin而重新设计和实现的代码分片特性。它不仅比CommonsChunkPlugin功能更加强大，还更简单易用。

 

 

使用optimization.splitChunks替代了CommonsChunkPlugin，并指定了chunks的值为all，这个配置项的含义是，SplitChunks将会对所有的chunks生效（默认情况下，SplitChunks只对异步chunks生效，并且不需要配置）。

微信读书
