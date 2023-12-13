import{_ as l,r as i,o as p,c,a as n,b as s,d as e,e as t}from"./app-xNEG_u8e.js";const o="/one-blog/assets/view-model-LoadUvpT.png",d="/one-blog/assets/vue3-new-tx-jmGhIJjm.png",u="/one-blog/assets/VueTemplateExplorer--Mm77GbH.png",r={},v=n("h3",{id:"_1-介绍vue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-介绍vue","aria-hidden":"true"},"#"),s(" 1.介绍vue")],-1),g=n("p",null,"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。",-1),m=n("p",null,"MVVM（Model-View-ViewModel）架构",-1),k=n("ol",null,[n("li",null,"『View』：视图层（UI 用户界面）"),n("li",null,"『ViewModel』：业务逻辑层（一切 js 可视为业务逻辑）"),n("li",null,"『Model』：数据层（存储数据及对数据的处理如增删改查）")],-1),b=n("img",{src:o},null,-1),_={href:"https://cn.vuejs.org/v2/guide/#Vue-js-%E6%98%AF%E4%BB%80%E4%B9%88",target:"_blank",rel:"noopener noreferrer"},h={href:"https://staging-cn.vuejs.org/guide/quick-start.html",target:"_blank",rel:"noopener noreferrer"},f=t('<h3 id="_2-vue3-新特性介绍" tabindex="-1"><a class="header-anchor" href="#_2-vue3-新特性介绍" aria-hidden="true">#</a> 2.Vue3 新特性介绍</h3><img src="'+d+`"><ul><li>重写双向绑定</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue2
基于Object.defineProperty()实现
 
vue3 基于Proxy
proxy与Object.defineProperty(obj, prop, desc)方式相比有以下优势：
 
//丢掉麻烦的备份数据
//省去for in 循环
//可以监听数组变化
//代码更简化
//可以监听动态新增的属性；
//可以监听删除的属性 ；
//可以监听数组的索引和 length 属性；
 
    let proxyObj = new Proxy(obj,{
        get : function (target,prop) {
            return prop in target ? target[prop] : 0
        },
        set : function (target,prop,value) {
            target[prop] = 888;
        }
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue3 优化Vdom</li></ul><p>在Vue2中,每次更新diff,都是全量对比,Vue3则只对比带有标记的,这样大大减少了非动态内容的对比消耗</p>`,6),V={href:"https://vue-next-template-explorer.netlify.app/",target:"_blank",rel:"noopener noreferrer"},x=t('<img src="'+u+`"><ul><li>patch flag 优化静态树</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hello world! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3 编译后的 Vdom 是这个样子的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TEXT = 1 // 动态文本节点
CLASS=1&lt;&lt;1,1 // 2//动态class
STYLE=1&lt;&lt;2，// 4 //动态style
PROPS=1&lt;&lt;3,// 8 //动态属性，但不包含类名和样式
FULLPR0PS=1&lt;&lt;4,// 16 //具有动态key属性，当key改变时，需要进行完整的diff比较。
HYDRATE_ EVENTS = 1 &lt;&lt; 5，// 32 //带有监听事件的节点
STABLE FRAGMENT = 1 &lt;&lt; 6, // 64 //一个不会改变子节点顺序的fragment
KEYED_ FRAGMENT = 1 &lt;&lt; 7, // 128 //带有key属性的fragment 或部分子字节有key
UNKEYED FRAGMENT = 1&lt;&lt; 8, // 256 //子节点没有key 的fragment
NEED PATCH = 1 &lt;&lt; 9, // 512 //一个节点只会进行非props比较
DYNAMIC_SLOTS = 1 &lt;&lt; 10 // 1024 // 动态slot
HOISTED = -1 // 静态节点
BALL = -2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现创建动态 dom 元素的时候，Vdom 除了模拟出来了它的基本信息之外，还给它加了一个标记： 1 /* TEXT */</p><p>这个标记就叫做 patch flag（补丁标记）</p><p>patch flag 的强大之处在于，当你的 diff 算法走到 _createBlock 函数的时候，会忽略所有的静态节点，只对有标记的动态节点进行对比，而且在多层的嵌套下依然有效。</p><p>尽管 JavaScript 做 Vdom 的对比已经非常的快，但是 patch flag 的出现还是让 Vue3 的 Vdom 的性能得到了很大的提升，尤其是在针对大组件的时候。</p><ul><li>Vue3 Fragment</li></ul><p>vue3 允许我们支持多个根节点</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>23<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时支持render JSX 写法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>render() {
        return (
            &lt;&gt;
                {this.visable ? (
                    &lt;div&gt;{this.obj.name}&lt;/div&gt;
                ) : (
                    &lt;div&gt;{this.obj.price}&lt;/div&gt;
                )}
                &lt;input v-model={this.val}&gt;&lt;/input&gt;
                {[1, 2, 3].map((v) =&gt; {
                   return &lt;div&gt;{v}-----&lt;/div&gt;;
                })}
            &lt;/&gt;
        );
    },
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时新增了Suspense teleport 和 多 v-model 用法</p>`,15);function E(T,j){const a=i("ExternalLinkIcon");return p(),c("div",null,[v,g,m,k,b,n("p",null,[s("官方文档地址 "),n("a",_,[s("介绍 — Vue.js"),e(a)])]),n("p",null,[n("a",h,[s("新版地址文档快速开始 | Vue.js"),e(a)])]),f,n("p",null,[n("a",V,[s("Vue Template Explorer"),e(a)]),s(" 我们可以通过这个网站看到静态标记")]),x])}const S=l(r,[["render",E],["__file","01.学习Vue3.html.vue"]]);export{S as default};
