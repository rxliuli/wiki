import{r as t,o,c,a as n,d as p,F as l,e,b as s}from"./app.a472134f.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var i="/assets/9ba85a775b4e4bfea70f3da8def2f8e5.b138ce52.svg",u="/assets/94972af176de4e67ab763bdc7862aa26.3aa437ab.png";const k={},b=e(`<h2 id="\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a> \u573A\u666F</h2><p>\u6700\u8FD1\u57FA\u4E8E web \u5728\u505A\u4E00\u4E9B\u7C7B\u4F3C\u4E8E\u63D2\u4EF6\u7CFB\u7EDF\u4E00\u6837\u7684\u4E1C\u897F\uFF0C\u6240\u4EE5\u6298\u817E\u4E86\u4E00\u4E0B js \u6C99\u7BB1\uFF0C\u4EE5\u6267\u884C\u7B2C\u4E09\u65B9\u5E94\u7528\u7684\u4EE3\u7801\u3002</p><h2 id="\u6C99\u7BB1\u57FA\u7840\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u6C99\u7BB1\u57FA\u7840\u529F\u80FD" aria-hidden="true">#</a> \u6C99\u7BB1\u57FA\u7840\u529F\u80FD</h2><p>\u5728\u5B9E\u73B0\u4E4B\u524D\uFF08\u597D\u5427\uFF0C\u5176\u5B9E\u662F\u5728\u8C03\u7814\u4E86\u4E00\u4E9B\u65B9\u6848\u4E4B\u540E\uFF09\uFF0C\u786E\u5B9A\u4E86\u6C99\u7BB1\u57FA\u4E8E event bus \u5F62\u5F0F\u7684\u901A\u4FE1\u5B9E\u73B0\u4E0A\u5C42\u7684\u529F\u80FD\uFF0C\u57FA\u7840\u7684\u63A5\u53E3\u5982\u4E0B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IEventEmitter</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u76D1\u542C\u4E8B\u4EF6
   * <span class="token keyword">@param</span> <span class="token parameter">channel</span>
   * <span class="token keyword">@param</span> <span class="token parameter">handle</span>
   */</span>
  <span class="token function">on</span><span class="token punctuation">(</span>channel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">handle</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u53D6\u6D88\u76D1\u542C
   * <span class="token keyword">@param</span> <span class="token parameter">channel</span>
   */</span>
  <span class="token function">offByChannel</span><span class="token punctuation">(</span>channel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u89E6\u53D1\u4E8B\u4EF6
   * <span class="token keyword">@param</span> <span class="token parameter">channel</span>
   * <span class="token keyword">@param</span> <span class="token parameter">data</span>
   */</span>
  <span class="token function">emit</span><span class="token punctuation">(</span>channel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4E00\u4E2A\u57FA\u672C js vm \u7684\u80FD\u529B
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IJavaScriptShadowbox</span> <span class="token keyword">extends</span> <span class="token class-name">IEventEmitter</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u6267\u884C\u4EFB\u610F\u4EE3\u7801
   * <span class="token keyword">@param</span> <span class="token parameter">code</span>
   */</span>
  <span class="token function">eval</span><span class="token punctuation">(</span>code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9500\u6BC1\u5B9E\u4F8B
   */</span>
  <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u9664\u4E86\u901A\u4FE1\u7684\u80FD\u529B\u4E4B\u5916\uFF0C\u8FD8\u989D\u5916\u8981\u6C42\u4E86\u4E24\u4E2A\u65B9\u6CD5\uFF1A</p><ul><li><code>eval</code>: \u6267\u884C\u4E00\u6BB5 js \u4EE3\u7801</li><li><code>destroy</code>: \u9500\u6BC1\u6C99\u7BB1\uFF0C\u4F9B\u5185\u90E8\u5B9E\u73B0\u5904\u7406\u4E00\u4E9B\u6E05\u7406\u4EFB\u52A1</li></ul><p><img src="`+i+'" alt="JavaScript \u6C99\u7BB1\u793A\u610F\u56FE.drawio.svg"></p><p>\u4E0B\u9762\u543E\u8F88\u5C06\u5206\u522B\u6F14\u793A\u4F7F\u7528 <code>iframe/web worker/quickjs</code> \u6267\u884C\u4EFB\u610F js \u7684\u65B9\u6CD5</p><h2 id="iframe-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#iframe-\u5B9E\u73B0" aria-hidden="true">#</a> iframe \u5B9E\u73B0</h2><p>\u8001\u5B9E\u8BF4\uFF0C\u8C08\u5230 web \u4E2D\u7684\u6C99\u7BB1\uFF0C\u53EF\u80FD\u7B2C\u4E00\u65F6\u95F4\u60F3\u5230\u7684\u5C31\u662F iframe \u4E86\uFF0C\u4F46\u5B83\u662F\u4EE5 html \u4F5C\u4E3A\u5165\u53E3\u6587\u4EF6\uFF0C\u800C\u975E js\uFF0C\u8FD9\u5BF9\u4E8E\u5E0C\u671B\u5C06 js \u4F5C\u4E3A\u5165\u53E3\u800C\u4E0D\u4E00\u5B9A\u9700\u8981\u663E\u793A iframe \u7684\u573A\u666F\u800C\u8A00\u5C31\u4E0D\u751A\u53CB\u597D\u4E86\u3002</p><p><img src="'+u+`" alt="1634797302936"></p><p>\u5F53\u7136\u53EF\u4EE5\u5C06 js \u4EE3\u7801\u5305\u88F9\u5230 html \u4E2D\u7136\u540E\u6267\u884C</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">evalByIframe</span><span class="token punctuation">(</span>code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;!DOCTYPE html&gt;&lt;body&gt;&lt;script&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;iframe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  iframe<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
  iframe<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
  iframe<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>html<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;text/html&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  iframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> iframe<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">evalByIframe</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
document.body.innerHTML = &#39;hello world&#39;
console.log(&#39;location.href: &#39;, location.href)
console.log(&#39;localStorage: &#39;,localStorage)
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u4F46 iframe \u6709\u4EE5\u4E0B\u51E0\u4E2A\u95EE\u9898</p><ul><li>\u51E0\u4E4E\u4E0E <code>eval</code> \u6CA1\u6709\u4EC0\u4E48\u533A\u522B\uFF08\u4E3B\u8981\u662F\u4F7F\u7528 <code>Object.createObjectURL</code> \u5BFC\u81F4\u540C\u6E90\u4E86\uFF09-- \u81F4\u547D\u7684</li><li>\u53EF\u4EE5\u8BBF\u95EE\u6240\u6709\u6D4F\u89C8\u5668\u7684 api -- \u6211\u4EEC\u66F4\u5E0C\u671B\u5B83\u4EC5\u80FD\u8BBF\u95EE\u6CE8\u5165\u7684 api\uFF0C\u800C\u4E0D\u5141\u8BB8\u8BBF\u95EE\u6240\u6709 dom api</li></ul><h2 id="web-worker-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#web-worker-\u5B9E\u73B0" aria-hidden="true">#</a> web worker \u5B9E\u73B0</h2><p>\u57FA\u672C\u4E0A\uFF0Cweb worker \u662F\u4E00\u4E2A\u53D7\u9650\u7684 js \u8FD0\u884C\u65F6\uFF0C\u4EE5 js \u4E3A\u5165\u53E3\uFF0C\u548C iframe \u5DEE\u4E0D\u591A\u7684\u901A\u4FE1\u673A\u5236</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">evalByWebWorker</span><span class="token punctuation">(</span>code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>code<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;application/javascript&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">evalByWebWorker</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
console.log(&#39;location.href: &#39;, location.href)
// console.log(&#39;localStorage: &#39;, localStorage)
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4F46\u540C\u65F6\uFF0C\u5B83\u786E\u5B9E\u6BD4 iframe \u8981\u66F4\u597D\u4E00\u70B9</p>`,20),m=s("\u4EC5\u652F\u6301\u6709\u9650\u7684\u6D4F\u89C8\u5668 api\uFF0C\u5305\u62EC "),d=n("code",null,"localStorage/document",-1),h=s(" \u5728\u5185\u7684 api \u5747\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u5177\u4F53\u53C2\u8003\uFF1A"),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers",target:"_blank",rel:"noopener noreferrer"},f=s("[MDN] Web Workers \u53EF\u4EE5\u4F7F\u7528\u7684\u51FD\u6570\u548C\u7C7B"),_=n("li",null,[s("\u6240\u6709\u6CE8\u5165\u7684 api \u5747\u4E3A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u6BD5\u7ADF\u57FA\u4E8E "),n("code",null,"postMessage/onmessage")],-1),w=n("h2",{id:"quickjs-\u5B9E\u73B0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#quickjs-\u5B9E\u73B0","aria-hidden":"true"},"#"),s(" quickjs \u5B9E\u73B0")],-1),y=s("\u4F7F\u7528 quickjs \u7684\u4E3B\u8981\u7075\u611F\u6765\u6E90\u4E8E "),v={href:"https://www.figma.com/blog/how-we-built-the-figma-plugin-system/",target:"_blank",rel:"noopener noreferrer"},j=s("figma \u6784\u5EFA\u63D2\u4EF6\u7CFB\u7EDF\u7684\u4E00\u7BC7\u535A\u5BA2"),q=s("\uFF0C"),x={href:"https://github.com/quickjs-zh/QuickJS",target:"_blank",rel:"noopener noreferrer"},S=s("quickjs \u4E2D\u6587\u6587\u6863"),B=s("quickjs \u662F\u4EC0\u4E48\uFF1F\u5B83\u662F\u4E00\u4E2A JavaScript \u7684\u8FD0\u884C\u65F6\uFF0C\u867D\u7136\u6211\u4EEC\u6700\u5E38\u7528\u7684\u8FD0\u884C\u65F6\u662F\u6D4F\u89C8\u5668\u548C nodejs\uFF0C\u4F46\u4E5F\u6709\u8BB8\u591A\u5176\u4ED6\u7684\u8FD0\u884C\u65F6\uFF0C\u53EF\u4EE5\u5728 "),E={href:"https://github.com/GoogleChromeLabs/jsvu#supported-engines-per-os",target:"_blank",rel:"noopener noreferrer"},I=s("GoogleChromeLabs/jsvu"),L=s(" \u627E\u5230\u66F4\u591A\u3002\u800C quickjs \u662F\u5176\u4E2D\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u3001\u5D4C\u5165\u5F0F\u3001\u5E76\u4E14\u652F\u6301\u7F16\u8BD1\u4E3A wasm \u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u4E0A\u7684\u4E00\u4E2A\u8FD0\u884C\u65F6\uFF0C\u540C\u65F6\u5B83\u5BF9 js \u7684\u7279\u6027\u652F\u6301\u5230 es2020\uFF08\u5305\u62EC\u6700\u559C\u7231\u7684 "),W=n("code",null,"Promise",-1),J=s(" \u548C "),C=n("code",null,"async/await",-1),N=s("\uFF09\u3002"),R=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">evalByQuickJS</span><span class="token punctuation">(</span>code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> quickJS <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getQuickJS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> vm <span class="token operator">=</span> quickJS<span class="token punctuation">.</span><span class="token function">createVm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">dump</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">unwrapResult</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">evalCode</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  vm<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">evalByQuickJS</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">1+1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u4F18\u70B9 <ul><li>\u4E8B\u5B9E\u4E0A\uFF0C\u5728\u5B89\u5168\u6027\u65B9\u9762\u5B83\u662F\u65E0\u53EF\u5339\u654C\u7684\uFF0C\u56E0\u4E3A\u8FD0\u884C\u5728\u4E0D\u540C\u7684 vm \u4E0A\uFF0C\u5F88\u96BE\u51FA\u73B0\u73B0\u6709\u5FAE\u524D\u7AEF\u57FA\u4E8E Proxy \u53EF\u80FD\u51FA\u73B0\u7684\u5B89\u5168\u95EE\u9898\u3002</li><li>\u867D\u7136\u6CA1\u6709\u5B9E\u9645\u6D4B\u8BD5\uFF0C\u4F46 figma \u7684\u90A3\u7BC7\u535A\u5BA2\u4E2D\u6307\u51FA\u6D4F\u89C8\u5668\u7684\u7ED3\u6784\u5316\u514B\u9686\u5728\u5904\u7406\u5927\u578B\u5BF9\u8C61\u65F6\u5B58\u5728\u6027\u80FD\u95EE\u9898\uFF0C\u800C quickjs \u4E0D\u5B58\u5728\u8FD9\u79CD\u95EE\u9898\u3002</li></ul></li><li>\u7F3A\u70B9 <ul><li>\u6CA1\u6709\u5168\u5C40 api\uFF0C\u5305\u62EC\u5E38\u89C1\u7684 <code>console/setTimeout/setInterval</code> \u90FD\u4E0D\u662F js \u7684\u7279\u6027\uFF0C\u800C\u662F\u6D4F\u89C8\u5668\u3001nodejs \u8FD0\u884C\u65F6\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u5FC5\u987B\u624B\u52A8\u5B9E\u73B0\u5E76\u6CE8\u5165\uFF0C\u8FD9\u662F\u4E00\u4E2A\u663E\u8457\u7684\u7F3A\u70B9\u3002</li><li>\u65E0\u6CD5\u4F7F\u7528\u6D4F\u89C8\u5668\u7684 DevTool \u8C03\u8BD5</li><li>\u7531\u4E8E\u5E95\u5C42\u4F7F\u7528 c \u5B9E\u73B0\uFF0C\u6240\u4EE5\u9700\u8981\u624B\u52A8\u7BA1\u7406\u5185\u5B58\u7684\u91CA\u653E</li></ul></li></ul><h2 id="\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a> \u7ED3\u8BBA</h2><p>\u6700\u7EC8\uFF0C\u6211\u4EEC\u9009\u62E9\u4E86\u57FA\u4E8E\u63A5\u53E3\u5B9E\u73B0\u4E86 web worker \u4E0E quickjs \u7684 EventEmitter\uFF0C\u5E76\u652F\u6301\u968F\u65F6\u5207\u6362\u7684\u80FD\u529B\u3002</p>`,4);function O(P,T){const a=t("ExternalLinkIcon");return o(),c(l,null,[b,n("ul",null,[n("li",null,[m,d,h,n("a",g,[f,p(a)])]),_]),w,n("blockquote",null,[n("p",null,[y,n("a",v,[j,p(a)]),q,n("a",x,[S,p(a)])])]),n("p",null,[B,n("a",E,[I,p(a)]),L,W,J,C,N]),R],64)}var Q=r(k,[["render",O]]);export{Q as default};
