webpackJsonp([1,2],{34:function(n,e,t){t(75);var r=t(20)(t(36),t(85),"data-v-288975d1",null);n.exports=r.exports},36:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(21),o=t.n(r),i=t(40),s=t.n(i),a=t(39),u=t.n(a),l=t(84),c=t.n(l),d=t(83),m=t.n(d),f=t(74);t.n(f);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:35,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 大家好，我是Eric\n* 一直没有一份拿的出手的简历，最近看了某大神的项目，受到启发\n* 于是决定来制作一份自己的简历\n* 那就从css开始吧\n\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(20,209,18);\n  background: black;\n}\n\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n\n\n/* 加点 3D 效果呗 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n/* 换个位置 */\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: translateX(110%) rotateY(-10deg) translateZ(-100px);\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  -webkit-transition: all 3s;\n  transition: all 3s;\n  transform: rotateY(360deg) translateX(-105%) rotateY(10deg) translateZ(-100px);\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  background:rgb(240,230,140);\n  padding: 2em;\n  height: 100vh;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n\n\n\n\n/**\n *   ┏┓　　　┏┓\n * ┏┛┻━━━┛┻┓\n * ┃　　　　　　　┃\n * ┃　　　━　　　┃\n * ┃　┳┛　┗┳　┃\n * ┃　　　　　　　┃\n * ┃　　　┻　　　┃\n * ┃　　　　　　　┃\n * ┗━┓　　　┏━┛\n *    ┃　　　┃\n *    ┃　　　┃\n *    ┃　　　┗━━━┓\n *    ┃　　　　　　　┣┓\n *    ┃　　　　　　　┏┛\n *    ┗┓┓┏━┳┓┏┛\n *      ┃┫┫　┃┫┫\n *      ┗┻┛　┗┻┛\n *\n *谢谢阅读\n */\n\n\n\n基于strml.net灵感\ncopyright©EricTang2017\n'],currentMarkdown:"",fullMarkdown:"唐与灿\n----\n* 毕业院校：澳门科技大学\n* 专业：CS／软件工程\n* 年龄：94\n* 技术方向：前端工程化，iOS，计算机图形学前端方向\n* 爱好: 守望先锋，篮球，汽车\n* 目标：全栈的web工程师，靠谱的技术合伙人\n\n\n技能\n----\n* 标准前端开发技能\n* Vue.js 开发\n* Node.js 开发\n* React.js\n\n工作经历\n----\n\n### 12016.05 - 2016.09：阿里巴巴移动事业群 国际事业部 — 前端实习生\n\n爬虫开发\n* 爬虫校验工具，开发的各类爬虫可对破解源，合作接口进行广泛的爬取。\n* 熟悉运用各种Node模块，熟悉团队编程规范，开发，测试的方法，熟练掌握了git和团队协作的方法技巧；\n* 利用内部pass平台形成的可视化报表监控爬虫错误，修复测试及生产环境的Bug，确保头条新闻的发布量；\n* 与产品讨论爬取内容的质量和页面展示，与运营及国外合作方沟通，设计接口API并校验规范化接口数据格式，推动合作接口的部署；\n\n\n### 2016.11 - 至今 猪八戒网络有限公司 - 中级前端工程师\n\n* 正式从事前端开发工作\n\n链接\n----\n\n* [GitHub](https://github.com/awesomeric)\n* [我的博客](http://tangyc.top/)\n\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);var i=(n.currentMarkdown[n.currentMarkdown.length-1],n.currentMarkdown[n.currentMarkdown.length-2]);console.log(i),"\n"===i&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},37:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(78),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},38:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(79),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},74:function(n,e){},75:function(n,e){},76:function(n,e){},77:function(n,e){},83:function(n,e,t){t(77);var r=t(20)(t(37),t(87),"data-v-2df95543",null);n.exports=r.exports},84:function(n,e,t){t(76);var r=t(20)(t(38),t(86),"data-v-2ca90776",null);n.exports=r.exports},85:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},86:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},87:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},89:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(35),o=t(34),i=t.n(o);new r.a({el:"#app",render:function(n){return n(i.a)}})}},[89]);
//# sourceMappingURL=app.bf697c0451add636188a.js.map