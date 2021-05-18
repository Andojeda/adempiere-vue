(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{260:function(t,e,a){"use strict";a.r(e);var n=a(0),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose "),a("a",{attrs:{href:"https://github.com/tinymce/tinymce",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tinymce"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Let me analyze some of the other rich texts on the market:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/summernote/summernote",target:"_blank",rel:"noopener noreferrer"}},[t._v("summernote"),a("OutboundLink")],1)]),t._v(" Let me start with a rich text that I definitely would not recommend.It is inconsistent with many recognized default behaviors between others. And only for the use of a dialog feature, they import the bootstrap, A bunch of people protest. Formatting is also very bad. Do not use anyway! Do not use it! Do not use it!")])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/galetahub/ckeditor",target:"_blank",rel:"noopener noreferrer"}},[t._v("ckeditor"),a("OutboundLink")],1)]),t._v(" Ckeditor is also a veteran company to do rich text,\nI used to use it in company project.This year, the 5.0 version of the UI has also become more beautiful, quite good, and it has the richest plugins. It's recommended that you try it.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/quilljs/quill",target:"_blank",rel:"noopener noreferrer"}},[t._v("quill"),a("OutboundLink")],1)]),t._v(" Is also a very hot rich text, the skin is very elegant. Writing a plug-in based on it is also very simple. The API design is very cool. The reason I did not choose it was because it was not good for operation picture and was hard to change. If there is no operation of the picture of the user, it is recommended.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/yabwe/medium-editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("medium-"),a("em",[t._v("editor")]),a("OutboundLink")],1)]),t._v(" The famous medium rich text (unofficial produced), but the degree of completion is still not very good, scalability is not bad. However, I think most users still will not be used medium this way of writing.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/neilj/Squire",target:"_blank",rel:"noopener noreferrer"}},[t._v("Squire"),a("OutboundLink")],1)]),t._v(" A relatively light, rich text, compressed only 11.5kb, relative to other rich text is very small, recommended features is not complicated suggestion.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"http://ueditor.baidu.com/website/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UEditor"),a("OutboundLink")],1)]),t._v(" Not used in depth, only a simple project used in the angular1X, but ui really ugly, does not meet the aesthetic today, the official has also been a long time did not go with the new.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"https://github.com/ianstormtaylor/slate",target:"_blank",rel:"noopener noreferrer"}},[t._v("slate"),a("OutboundLink")],1)]),t._v(" A completely customizable framework for building rich text editors. Slate lets you build rich, intuitive editors like those in Medium, Dropbox Paper or Google Docs—which are becoming table stakes for applications on the web—without your codebase getting mired in complexity. Looks cool, after a chance I will practice in the project try it.")])])]),t._v(" "),a("p",[t._v("I listed a lot of rich text, but I didn't list any rich text related to vue, mainly because rich text is really more complex than thought. Also said in the previous article, in fact, encapsulation vue components is very convenient, there is no need to use someone else's package of things.\nWhat kind of vue-quill vue-editor is just a simple package, no difficulty. You might as well encapsulate it yourself, and be a little more flexible and controllable. In addition vue really doesn't have any good rich text, unlike react has "),a("a",{attrs:{href:"https://github.com/facebook/draft-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("draft"),a("OutboundLink")],1),t._v(" produced by facebook, "),a("a",{attrs:{href:"https://github.com/ory/editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("editor"),a("OutboundLink")],1),t._v(" produced by ory. Vue doesn't have this product from a big company.")]),t._v(" "),a("p",[t._v("Of course, you can also choose some paid rich text editor, the author's own company has a project in the use of the "),a("a",{attrs:{href:"https://www.froala.com/wysiwyg-editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("froala-editor"),a("OutboundLink")],1),t._v(". Whether it is beautiful and easy to use are good, the company bought a professional version, $ 349 a year, the price is also very reasonable, but in fact save the cost of developer development may go far beyond the price.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Here to briefly talk about the use of Tinymce in you own projects.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("After "),a("Badge",{attrs:{text:"v4.2.0+"}}),t._v(" will dynamic import tinymce by "),a("code",[t._v("CDN")]),t._v(" .")],1),t._v(" "),a("p",[t._v("If you want to change the cdn address or the version of tinymce, just find tinymce cdn in "),a("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/components/Tinymce/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/components/Tinymce"),a("OutboundLink")],1),t._v(" then modified it. It will be automatically injected into "),a("code",[t._v("index.html")]),t._v(" via "),a("code",[t._v("dynamicLoadScript")]),t._v(".")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),a("p",[t._v("At present, the following attributes are provided, and there are requirements that can be added by themselves or an issue.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("The tinymce official also released the vue version of "),a("a",{attrs:{href:"https://github.com/tinymce/tinymce-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("tinymce-vue"),a("OutboundLink")],1),t._v(", which has helped you package a lot of things, but at the same time it has reduced flexibility. If you are interested, you can study it by yourself.")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"rich-text-editor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rich-text-editor"}},[this._v("#")]),this._v(" Rich text editor")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Here is a brief introduction to the reasons why "),a("code",[t._v("tinymce")]),t._v(" is recommended: "),a("code",[t._v("tinymce")]),t._v(" is a veteran to do rich text company(Here also recommended "),a("code",[t._v("ckeditor")]),t._v(", is also a company that has been doing rich text, the new version is very good), its products have stood the test of the market, and it has detailed documentation and rich configuration. One of the keys to using rich text is to copy formatting. Before using a Korean text rich "),a("code",[t._v("summernote")]),t._v(", It wasted me a lot of time, very unfriendly. But "),a("code",[t._v("tinymce")]),t._v("'s formatting is pretty good. It also has a value-added feature is powerpaste, it is extremely powerful, support for copying everything from word or any other place. Extensibility is also critical for rich text. I use "),a("code",[t._v("tinymce")]),t._v(" to write several plug-ins, learning costs and ease of study are good, and very easy to expand. The last point is that the documentation is very good, basically you want to get the configuration item, it has. Tinymce also supports on-demand loading, you can customize plugins through its official build page.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tinymce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tinymce"}},[this._v("#")]),this._v(" Tinymce")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Deprecated")]),this._v(" "),e("p",[this._v("The current method of using the global reference. Code in: "),e("code",[this._v("static/tinymce")]),this._v(" (The files in the static directory will not be build by webpack), import in index.html .And make sure it's in the order before your "),e("code",[this._v("app.js")]),this._v("!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("The current use of the npm installation 'Tinymce' method is more complex and has some problems (which may be used in the future). 👾")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Usage")]),this._v("\nBecause rich text is not suitable for two-way data, so only watch the content changes once, and then will not be watch again. If later you need to change the rich text content.Can be set by "),e("code",[this._v("this.refs.xxx.setContent ()")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The source code is also very simple, any other needs can be modified in "),e("code",[this._v("@/components/Tinymce/index.vue")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tinymce")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":height")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("300"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("tinymce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tinymce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Property")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Component unique identifier")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Default to help you generate a unique id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Rich text content")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Only monitor changes once")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("toolbar")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Rich text toolbar")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("[]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("menubar")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Rich text menubar")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'file edit insert view format table'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("height")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Rich text height")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("360")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("width")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Rich text width")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("/")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tinymce-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tinymce-vue"}},[this._v("#")]),this._v(" tinymce-vue")])}],!1,null,null,null);e.default=i.exports}}]);