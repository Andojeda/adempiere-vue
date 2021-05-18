(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{345:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发更加独立自主，不会被服务端的开发所阻塞。")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("在公司的项目中通常使用 "),s("a",{attrs:{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("swagger"),s("OutboundLink")],1),t._v("， 由后端来模拟业务数据。\n"),s("strong",[t._v("swagger")]),t._v(" 是一个 REST APIs 文档生成工具，它从代码注释中自动生成文档，可以跨平台，开源，支持大部分语言，社区好，总之非常不错，强烈推荐。\n"),s("a",{attrs:{href:"http://petstore.swagger.io/?_ga=2.222649619.983598878.1509960455-2044209180.1509960455#/pet/addPet",target:"_blank",rel:"noopener noreferrer"}},[t._v("线上 demo"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/adempiere/vue-admin-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-admin-template"),s("OutboundLink")],1),t._v(" 之前使用的是 "),s("a",{attrs:{href:"https://easy-mock.com/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("easy-mock"),s("OutboundLink")],1),t._v(" 来模拟数据。\n它是一个纯前端可视化，并且能快速生成模拟数据的持久化服务。非常的简单易用还能结合 "),s("code",[t._v("swagger")]),t._v("，天然支持跨域 ，不管团队还是个人项目都值得一试。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("由于 "),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("adempiere-vue"),s("OutboundLink")],1),t._v(" 是一个纯前端个人项目，所有的数据都是用 "),s("a",{attrs:{href:"https://github.com/nuysoft/Mock",target:"_blank",rel:"noopener noreferrer"}},[t._v("mockjs"),s("OutboundLink")],1),t._v(" 模拟生成。它的原理是: 拦截了所有的请求并代理到本地，然后进行数据模拟，所以你会发现 "),s("code",[t._v("network")]),t._v(" 中没有发出任何的请求。")]),t._v(" "),s("p",[t._v("但它的最大的问题是就是它的实现机制。它会重写浏览器的"),s("code",[t._v("XMLHttpRequest")]),t._v("对象，从而才能拦截所有请求，代理到本地。大部分情况下用起来还是蛮方便的，但就因为它重写了"),s("code",[t._v("XMLHttpRequest")]),t._v("对象，所以比如"),s("code",[t._v("progress")]),t._v("方法，或者一些底层依赖"),s("code",[t._v("XMLHttpRequest")]),t._v("的库都会和它发生不兼容，可以看一下我项目的"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/issues?utf8=%E2%9C%93&q=mock",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),s("OutboundLink")],1),t._v("，就知道多少人被坑了。")]),t._v(" "),t._m(5),t._v(" "),s("h2",{attrs:{id:"新方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新方案"}},[t._v("#")]),t._v(" 新方案 "),s("Badge",{attrs:{text:"v4.0.0+"}})],1),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("该方案的好处是，在保留 "),s("code",[t._v("mockjs")]),t._v("的优势的同时，解决之前的痛点。由于我们的 mock 是完全基于"),s("code",[t._v("webpack-dev-serve")]),t._v("来实现的，所以在你启动前端服务的同时，"),s("code",[t._v("mock-server")]),t._v("就会自动启动，而且这里还通过 "),s("a",{attrs:{href:"https://github.com/paulmillr/chokidar",target:"_blank",rel:"noopener noreferrer"}},[t._v("chokidar"),s("OutboundLink")],1),t._v(" 来观察 "),s("code",[t._v("mock")]),t._v(" 文件夹内容的变化。在发生变化时会清除之前注册的"),s("code",[t._v("mock-api")]),t._v("接口，重新动态挂载新的接口，从而支持热更新。有兴趣的可以自己看一下代码"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/mock/mock-server.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("mock-server.js"),s("OutboundLink")],1),t._v("。由于是一个真正的"),s("code",[t._v("server")]),t._v("，所以你可以通过控制台中的"),s("code",[t._v("network")]),t._v("，清楚的知道接口返回的数据结构。并且同时解决了之前"),s("code",[t._v("mockjs")]),t._v("会重写 "),s("code",[t._v("XMLHttpRequest")]),t._v("对象，导致很多第三方库失效的问题。")]),t._v(" "),s("p",[t._v("本项目的所有请求都是通过封装的"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("request.js"),s("OutboundLink")],1),t._v("进行发送的，通过阅读源码可以发现所有的请求都设置了一个"),s("code",[t._v("baseURL")]),t._v("，而这个"),s("code",[t._v("baseURL")]),t._v("又是通过读取"),s("code",[t._v("process.env.VUE_APP_BASE_API")]),t._v("这个环境变量来动态设置的，这样方便我们做到不同环境使用不同的 "),s("code",[t._v("api")]),t._v(" 地址。")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("如果你不想使用"),s("code",[t._v("mock-server")]),t._v("的话只要在"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/vue.config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue.config.js"),s("OutboundLink")],1),t._v("中移除"),s("code",[t._v("webpack-dev-server")]),t._v("中"),s("code",[t._v("proxy")]),t._v("和"),s("code",[t._v("after")]),t._v("这个"),s("code",[t._v("Middleware")]),t._v("就可以了。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[s("code",[t._v("mock-server")]),t._v("只会在开发环境中使用，线上生产环境目前使用"),s("code",[t._v("MockJs")]),t._v("进行模拟。如果不需要请移除。具体代码："),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/main.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("main.js"),s("OutboundLink")],1)]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("比如我现在在"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/api/article.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/api/article"),s("OutboundLink")],1),t._v("中需要添加一个查询某篇文章下面评论数的接口"),s("code",[t._v("fetchComments")]),t._v("，首先新建接口：")]),t._v(" "),t._m(14),s("p",[t._v("声明完接口之后，我们需要找到对应的 mock 文件夹"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/mock/article.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("mock/article.js"),s("OutboundLink")],1),t._v("，在下面创建一个能拦截路由的 mock 接口")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),s("p",[t._v("最常见的操作就是：你本地模拟了了一些数据，待后端完成接口后，逐步替换掉原先 mock 的接口。")]),t._v(" "),s("p",[t._v("我们以"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/api/role.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/api/role.js"),s("OutboundLink")],1),t._v("中的"),s("code",[t._v("getRoles")]),t._v("接口为例。它原本是在"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/mock/role/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("mock/role/index.js"),s("OutboundLink")],1),t._v("中 mock 的数据。现在我们需要将它切换为真实后端数据，只要在"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/mock/role/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("mock/role/index.js"),s("OutboundLink")],1),t._v("找到对应的路由，之后将它删除即可。这时候你可以在"),s("code",[t._v("network")]),t._v("中，查看到真实的数据。")]),t._v(" "),t._m(18),t._m(19),t._v(" "),s("p",[t._v("目前项目只启动了一个"),s("code",[t._v("mock-server")]),t._v("，当然你也可以有自己其它的"),s("code",[t._v("mock-server")]),t._v("或者代理接口。可以一部分接口走这个服务，另一些接口走另一个服务。只需要将它们分别设置不同的的"),s("code",[t._v("baseURL")]),t._v("即可。 "),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/utils/request.js"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("之后根据设置的 url 规则在 "),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/vue.config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue.config.js"),s("OutboundLink")],1),t._v(" 中配置多个 "),s("code",[t._v("proxy")]),t._v(" 。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://webpack.docschina.org/configuration/dev-server/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关文档"),s("OutboundLink")],1)]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("现在在"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/mock/index.js#L19",target:"_blank",rel:"noopener noreferrer"}},[t._v("mock/index.js"),s("OutboundLink")],1),t._v("也封装了一个纯前端 mock 的方法，你只需要在"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/tree/master/src",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/main.js"),s("OutboundLink")],1),t._v("中：")]),t._v(" "),t._m(21),s("p",[t._v("这样就会变成纯前端 mock 数据了和"),s("code",[t._v("v4.0")]),t._v("版本之前的 mock 方案是一样的，原理见上文。目前你看到的线上"),s("a",{attrs:{href:"https://adempiere.github.io/adempiere-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1),t._v("就是采用该种方式。")]),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("有很多时候我们会遇到本地使用 mock 数据，线上环境使用真实数据，或者说不同环境使用不同的数据。")]),t._v(" "),t._m(23),t._v(" "),s("p",[t._v("你需要保证你本地模拟 api 除了根路径其它的地址是一致的。\n比如：")]),t._v(" "),t._m(24),s("p",[t._v("我们可以通过之后会介绍的"),s("router-link",{attrs:{to:"/zh/guide/essentials/deploy.html#环境变量"}},[t._v("环境变量")]),t._v("来做到不同环境下，请求不同的 api 地址。")],1),t._v(" "),t._m(25),t._m(26),s("p",[t._v("之后根据环境变量创建"),s("code",[t._v("axios")]),t._v("实例，让它具有不同的"),s("code",[t._v("baseURL")]),t._v("。 "),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/utils/request.js"),s("OutboundLink")],1)]),t._v(" "),t._m(27),s("p",[t._v("这样我们就做到了自动根据环境变量切换本地和线上 api。")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),s("p",[t._v("只有在本地环境之中才会引入 mock 数据。")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mock-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mock-data"}},[this._v("#")]),this._v(" Mock Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"swagger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swagger"}},[this._v("#")]),this._v(" Swagger")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"easy-mock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#easy-mock"}},[this._v("#")]),this._v(" Easy-Mock")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("现在线上版本的"),s("code",[t._v("vue-admin-template")]),t._v(" 已经不使用"),s("code",[t._v("easy-mock")]),t._v("。因为"),s("code",[t._v("easy-mock")]),t._v("提供的线上免费服务很不稳定，时不时的就会挂掉，如果有需要的可以自己按照它的教程，搭建自己的服务。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"mockjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mockjs"}},[this._v("#")]),this._v(" Mockjs")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("它还有一个问题是，因为是它本地模拟的数据，实际上不会走任何网络请求。所以本地调试起来很蛋疼，只能通过"),s("code",[t._v("console.log")]),t._v("来调试。就拿"),s("code",[t._v("adempiere-vue")]),t._v("来说，想搞清楚 "),s("code",[t._v("getInfo()")]),t._v("接口返回了什么数据，只能通过看源码或者手动 "),s("code",[t._v("Debug")]),t._v(" 才能知道。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("在"),s("code",[t._v("v4.0")]),t._v("版本之后，在本地会启动一个"),s("code",[t._v("mock-server")]),t._v("来模拟数据，线上环境还是继续使用"),s("code",[t._v("mockjs")]),t._v("来进行模拟(因为本项目是一个纯前端项目，你也可以自己搭建一个线上 server 来提供数据)。不管是本地还是线上所有的数据模拟都是基于"),s("code",[t._v("mockjs")]),t._v("生成的，所以只要写一套 mock 数据，就可以在多环境中使用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"移除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移除"}},[this._v("#")]),this._v(" 移除")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("现在默认情况下本地的请求会代理到"),e("code",[this._v("http://localhost:${port}/mock")]),this._v("下，如果你想调整为自己的 mock 地址可以修改 "),e("code",[this._v("proxy")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("proxy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// change xxx-api/login => mock/login")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// detail: https://cli.vuejs.org/config/#devserver-proxy")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_BASE_API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    target"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://localhost:")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/mock")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    changeOrigin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pathRewrite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_BASE_API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nafter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mock/mock-server.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[e("strong",[this._v("请注意：该操作需要重启服务")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mockXHR "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../mock'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mockXHR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增"}},[this._v("#")]),this._v(" 新增")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果你想添加 mock 数据，只要在根目录下找到"),e("code",[this._v("mock")]),this._v("文件，添加对应的路由，对其进行拦截和模拟数据即可。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchComments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/article/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/comments")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("请注意，mock 拦截是基于路由来做的，请确保 mock 数据一定能匹配你的 api 路由，支持正则")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fetchComments 的 mock")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// url 必须能匹配你的接口路由")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如 fetchComments 对应的路由可能是 /article/1/comments 或者 /article/2/comments")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以你需要通过正则来进行匹配")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/article/[A-Za-z0-9]/comments'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必须和你接口定义的类型一样")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回的结果")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// req and res detail see")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://expressjs.com/zh-cn/api.html#req")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[this._v("#")]),this._v(" 修改")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api 中声明的路由")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/roles'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//找到对应的路由，并删除")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/roles'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" roles\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"多个-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多个-server"}},[this._v("#")]),this._v(" 多个 server")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"启用纯前端-mock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用纯前端-mock"}},[this._v("#")]),this._v(" 启用纯前端 Mock")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mockXHR "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../mock'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mockXHR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"本地-mock-数据与线上数据切换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地-mock-数据与线上数据切换"}},[this._v("#")]),this._v(" 本地 Mock 数据与线上数据切换")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Easy-Mock 的形式")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("https://api-dev/login   // 本地请求\n\nhttps://api-prod/login  // 线上请求\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .env.development")]),t._v("\nVUE_APP_BASE_API "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/dev-api'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注入本地 api 的根路径")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .env.production")]),t._v("\nVUE_APP_BASE_API "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/prod-api'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注入线上 api 的根路径")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create an axios instance")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" service "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseURL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api 的 base_url")]),t._v("\n  timeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// request timeout")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Mock.js 的切换")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("当我们本地使用 "),e("code",[this._v("Mock.js")]),this._v(" 模拟本地数据，线上使用真实环境 api 方法。这与上面的 easy-mock 的方法是差不多的。我们主要是判断：是线上环境的时候，不引入 mock 数据就可以了，只有在本地引入 "),e("code",[this._v("Mock.js")]),this._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过环境变量来判断是否需要加载启用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mock'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// simulation data")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);