import{_ as o,r as i,o as l,c,d as a,w as t,b as e,e as p,a as n}from"./app-xNEG_u8e.js";const r="/one-blog/assets/mai-dian-smFAipHx.png",u="/one-blog/assets/mai-dian-pub-abAY_Y1O.png",d="/one-blog/assets/mai-dian-pub-result-FkFA9_8N.png",k={},v=p('<p>埋点就是 数据采集-数据处理-数据分析和挖掘，如用户停留时间，用户哪个按钮点的多，等</p><p>技术架构使用ts + rollup</p><p>使用ts主要是在编译过程中发现问题，减少生产代码的错误，</p><p>使用rollup 应为 rollup打包干净，而webpack非常臃肿，可读性差，所以rollup非常适合开发SDK和一些框架，webpack 适合开发一些项目</p><h3 id="_1-目录结构设计" tabindex="-1"><a class="header-anchor" href="#_1-目录结构设计" aria-hidden="true">#</a> 1.目录结构设计</h3><img src="'+r+`"><h3 id="_2-安装开发依赖" tabindex="-1"><a class="header-anchor" href="#_2-安装开发依赖" aria-hidden="true">#</a> 2.安装开发依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> rollup <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> rollup-plugin-dts <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> rollup-plugin-typescript2 <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> typescript <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-配置rollup-config-js" tabindex="-1"><a class="header-anchor" href="#_3-配置rollup-config-js" aria-hidden="true">#</a> 3.配置rollup config js</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> ts <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-typescript2&#39;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> dts <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-dts&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token comment">//入口文件</span>
    input<span class="token operator">:</span> <span class="token string">&quot;./src/core/index.ts&quot;</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//打包esModule</span>
        <span class="token punctuation">{</span>
            file<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/index.esm.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            format<span class="token operator">:</span> <span class="token string">&quot;es&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//打包common js</span>
        <span class="token punctuation">{</span>
            file<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/index.cjs.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            format<span class="token operator">:</span> <span class="token string">&quot;cjs&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//打包 AMD CMD UMD</span>
        <span class="token punctuation">{</span>
            input<span class="token operator">:</span> <span class="token string">&quot;./src/core/index.ts&quot;</span><span class="token punctuation">,</span>
            file<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            format<span class="token operator">:</span> <span class="token string">&quot;umd&quot;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&quot;tracker&quot;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//配置ts</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">ts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>

<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">//打包声明文件</span>
    input<span class="token operator">:</span> <span class="token string">&quot;./src/core/index.ts&quot;</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        file<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist/index.d.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        format<span class="token operator">:</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">dts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-src-type-定义类型" tabindex="-1"><a class="header-anchor" href="#_4-src-type-定义类型" aria-hidden="true">#</a> 4. src type 定义类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@requestUrl</span> 接口地址
 * <span class="token keyword">@historyTracker</span> history上报
 * <span class="token keyword">@hashTracker</span> hash上报
 * <span class="token keyword">@domTracker</span> 携带Tracker-key 点击事件上报
 * <span class="token keyword">@sdkVersionsdk</span>版本
 * <span class="token keyword">@extra</span>透传字段
 * <span class="token keyword">@jsError</span> js 和 promise 报错异常上报
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DefaultOptons</span> <span class="token punctuation">{</span>
    uuid<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    requestUrl<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    historyTracker<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    hashTracker<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    domTracker<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    sdkVersion<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    extra<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    jsError<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token comment">//必传参数 requestUrl</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token keyword">extends</span> <span class="token class-name">Partial<span class="token operator">&lt;</span>DefaultOptons<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    requestUrl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//版本</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> TrackerConfig <span class="token punctuation">{</span>
    version <span class="token operator">=</span> <span class="token string">&#39;1.0.0&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">//上报必传参数</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">reportTrackerData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    event<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    targetKey<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-src-core-核心功能" tabindex="-1"><a class="header-anchor" href="#_5-src-core-核心功能" aria-hidden="true">#</a> 5.src core 核心功能</h3>`,13),m=n("p",null,"主要监听了 history 和 hash",-1),b=n("p",null,"history API go back forward pushState replaceState",-1),h=n("p",null,"history 无法通过 popstate 监听 pushState replaceState 只能重写其函数 在utils/pv",-1),g=n("p",null,"hash 使用hashchange 监听",-1),q=n("p",null,"用户唯一表示 可以在登录之后通过接口返回的id 进行设置值 提供了setUserId",-1),y=n("p",null,"也可以使用canvas 指纹追踪技术",-1),_=n("p",null,"为什么要使用这个去上报",-1),f=n("p",null,"这个上报的机制 跟 XMLHttrequest 对比 navigator.sendBeacon 即使页面关闭了 也会完成请求 而XMLHTTPRequest 不一定",-1),w=n("p",null,"主要是给需要监听的元素添加一个属性 用来区分是否需要监听 target-key",-1),x=p(`<h3 id="_6-工具函数-src-utils-pv" tabindex="-1"><a class="header-anchor" href="#_6-工具函数-src-utils-pv" aria-hidden="true">#</a> 6.工具函数 src/utils/pv</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> createHistoryEvnent <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> History<span class="token operator">&gt;</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> origin <span class="token operator">=</span> history<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">origin</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
        <span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
        window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-设置package-json" tabindex="-1"><a class="header-anchor" href="#_7-设置package-json" aria-hidden="true">#</a> 7.设置package json</h3><p>main module 分别设置对应的js文件</p><p>files 设置打包之后的目录 我这儿是dist 具体看rollup config .js</p><div class="language-json5 line-numbers-mode" data-ext="json5"><pre class="language-json5"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zmy-tracker&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.cjs.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.esm.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup -c&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;前端&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;埋点&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tracker&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.76.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-dts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-typescript2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.32.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.7.4&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-发布npm" tabindex="-1"><a class="header-anchor" href="#_8-发布npm" aria-hidden="true">#</a> 8.发布npm</h3>`,7),j=n("ol",null,[n("li",null,"npm adduser")],-1),D=n("p",null,"用户名 密码 邮箱 邮箱验证码",-1),T=n("img",{src:u},null,-1),V=n("ol",{start:"2"},[n("li",null,"npm login")],-1),S=n("p",null,"输入刚才的 用户名 密码 邮箱 验证码",-1),U=n("p",null,"3.npm publish 发布",-1),E=n("img",{src:d},null,-1),M=n("ol",{start:"4"},[n("li",null,"npm 官网查看")],-1),A=n("p",null,"npm view [包名]",-1);function B(C,H){const s=i("font");return l(),c("div",null,[v,a(s,{color:"red"},{default:t(()=>[e(" PV：页面访问量，即PageView，用户每次对网站的访问均被记录 ")]),_:1}),m,b,h,g,a(s,{color:"red"},{default:t(()=>[e("UV(独立访客)：即Unique Visitor，访问您网站的一台电脑客户端为一个访客")]),_:1}),q,y,a(s,{color:"red"},{default:t(()=>[e("本章重点 navigator.sendBeacon")]),_:1}),_,f,a(s,{color:"red"},{default:t(()=>[e("DOM事件监听")]),_:1}),w,a(s,{color:"red"},{default:t(()=>[e("js报错上报 error 事件 promise报错 unhandledrejection")]),_:1}),x,a(s,{color:"red"},{default:t(()=>[e("tips:一定要使用npm 的源 不能使用淘宝镜像 否则 报错403")]),_:1}),j,D,T,V,S,U,a(s,{color:"red"},{default:t(()=>[e("发布的时候403 有可能是名字重复注意一下")]),_:1}),E,M,A])}const O=o(k,[["render",B],["__file","前端埋点SDK.html.vue"]]);export{O as default};
