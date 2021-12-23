import{r as e,o,c,a as n,d as p,F as l,e as t,b as s}from"./app.a472134f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=t('<h2 id="\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a> \u573A\u666F</h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u5728\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u5C42\u5171\u4EAB\u67D0\u4E9B\u6570\u636E\uFF0C\u800C <a href="/p/76393a60949c47c7add910df0206734c">electron ipc \u901A\u4FE1</a> \u663E\u7136\u66F4\u9002\u5408\u4F20\u9012\u6D88\u606F\u800C\u4E0D\u9002\u5408\u5171\u4EAB\u6570\u636E\u3002</p><h2 id="\u76F8\u5173\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u4F9D\u8D56" aria-hidden="true">#</a> \u76F8\u5173\u4F9D\u8D56</h2><p>\u4E8B\u5B9E\u4E0A\uFF0C\u6211\u4EEC\u8FD9\u4E2A\u9700\u6C42\u5DF2\u7ECF\u6709\u4EBA\u8003\u8651\u8FC7\u4E86\uFF0C\u4F8B\u5982 electron-store \u5C31\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u53EF\u4EE5\u5728\u6E32\u67D3\u5C42\u3001\u4E3B\u8FDB\u7A0B\u5747\u53EF\u4F7F\u7528\u3002</p>',4),k={href:"https://www.npmjs.com/package/is-electron",target:"_blank",rel:"noopener noreferrer"},b=s("is-electron"),m=s(": \u5224\u65AD\u662F\u5426 electron \u73AF\u5883"),d={href:"https://www.npmjs.com/package/electron-store",target:"_blank",rel:"noopener noreferrer"},y=s("electron-store"),w=s(": \u5728 electron \u5E94\u7528\u4E2D\u5B58\u50A8\u6570\u636E"),g=t(`<p>\u90A3\u4E48\uFF0C\u6211\u4EEC\u76F4\u63A5\u7528 electron-store \u6709\u4EC0\u4E48\u95EE\u9898\u4E48\uFF1F \u662F\u7684\uFF0Celectron \u4EC5\u80FD\u5728 electron \u4E2D\u4F7F\u7528\uFF0C\u6240\u4EE5\u5728\u6D4F\u89C8\u5668\u4E0A\u4F1A\u62A5\u9519\uFF0C\u800C\u8FD9\u5BF9\u4E8E\u5F00\u53D1\u73AF\u5883\u800C\u8A00\u662F\u65E0\u6CD5\u63A5\u53D7\u7684\uFF0C\u6545\u800C\u8FD8\u9700\u8981\u68C0\u6D4B\u73AF\u5883\u4F7F\u7528\u4E0D\u540C\u7684\u5B9E\u73B0\u3002</p><h2 id="\u521B\u5EFA\u6D4F\u89C8\u5668\u517C\u5BB9\u5C42" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6D4F\u89C8\u5668\u517C\u5BB9\u5C42" aria-hidden="true">#</a> \u521B\u5EFA\u6D4F\u89C8\u5668\u517C\u5BB9\u5C42</h2><p>\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u5B9E\u73B0\u4E0D\u540C\u73AF\u5883\u4E0B\u4F7F\u7528\u4E0D\u540C\u7684\u5B58\u50A8</p><ul><li>\u6D4F\u89C8\u5668\u4F7F\u7528 localStorage \u5B9E\u73B0</li><li>electron \u4E2D\u5219\u4F7F\u7528 electron-store \u5B9E\u73B0</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token class-name">Store</span> <span class="token keyword">from</span> <span class="token string">&quot;electron-store&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> isElectron <span class="token keyword">from</span> <span class="token string">&quot;is-electron&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DeepReadonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;utility-types&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">BaseStore</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ElectronStoreImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BaseStore</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> store<span class="token operator">:</span> Store<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> Store <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;electron-store&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LocalStorageImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BaseStore</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token builtin">symbol</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;ElectronStore.store&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ElectronStore</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token builtin">symbol</span><span class="token punctuation">]</span><span class="token operator">:</span> BaseStore <span class="token operator">=</span> <span class="token function">isElectron</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">ElectronStoreImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">LocalStorageImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token generic-function"><span class="token function">getInstance</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
    init<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> DeepReadonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> electronStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ElectronStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> p<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> text <span class="token operator">=</span> electronStore<span class="token punctuation">[</span><span class="token builtin">symbol</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>text <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> text <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> p<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
        electronStore<span class="token punctuation">[</span><span class="token builtin">symbol</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>
          p<span class="token punctuation">,</span>
          value <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> value
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>init<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>init<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>k<span class="token punctuation">,</span> v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> text <span class="token operator">=</span> electronStore<span class="token punctuation">[</span><span class="token builtin">symbol</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>text <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> text <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          proxy<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> proxy<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div><p>\u4F60\u53EF\u80FD\u53D1\u73B0\u4E86\uFF0C\u4E3A\u4E86\u7B80\u5316\u4F7F\u7528\u7684 API\uFF0C\u8FD9\u91CC\u4F7F\u7528\u4E86\u4EE3\u7406\u6A21\u5F0F\u62E6\u622A\u4E86\u5BF9\u5B9E\u4F8B\u7684\u8BBF\u95EE\uFF0C\u4FEE\u6539\u4E3A\u4F7F\u7528 <code>get/set</code> \u65B9\u6CD5\u53D6\u503C\u548C\u8BBE\u503C\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u4F7F\u7528\u8D77\u6765\u548C\u4E00\u4E2A\u666E\u901A\u7684\u5BF9\u8C61\u6CA1\u4EC0\u4E48\u533A\u522B\uFF0C\u76F4\u63A5\u901A\u8FC7 <code>.</code> \u8BBF\u95EE\u6216\u8BBE\u7F6E\u5C5E\u6027\u5373\u53EF\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> userStore <span class="token operator">=</span> ElectronStore<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">getInstance</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
userStore<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;liuli&quot;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userStore<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&quot;liuli&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
userStore<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userStore<span class="token punctuation">.</span>age <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9),f=s("\u5177\u4F53\u4EE3\u7801\u5728 "),h={href:"https://github.com/rxliuli/electron_example/blob/ed158e9d013d7138697c76b52ddefb4748fe1af0/libs/electron-util/src/ElectronStore.ts#L40",target:"_blank",rel:"noopener noreferrer"},_=s("electron_example"),S=s("\uFF0C\u7531\u4E8E\u662F\u4E00\u4E2A\u6D45\u5C42\u5C01\u88C5\uFF0C\u6240\u4EE5\u5E76\u672A\u53D1\u5E03\uFF0C\u4F46\u53EF\u4EE5\u76F4\u63A5\u5C06\u6A21\u5757\u590D\u5236\u5230\u9879\u76EE\u4E2D\u4F7F\u7528\u3002");function x(v,q){const a=e("ExternalLinkIcon");return o(),c(l,null,[i,n("ul",null,[n("li",null,[n("a",k,[b,p(a)]),m]),n("li",null,[n("a",d,[y,p(a)]),w])]),g,n("blockquote",null,[n("p",null,[f,n("a",h,[_,p(a)]),S])])],64)}var B=u(r,[["render",x]]);export{B as default};
