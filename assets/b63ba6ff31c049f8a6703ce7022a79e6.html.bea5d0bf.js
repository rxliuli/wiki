import{r as d,o,c as r,a as e,d as n,F as i,b as s,e as a}from"./app.a472134f.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const l={},p=e("p",null,"\u8BB0\u5F55\u4E00\u4E9B\u6700\u5E38\u7528\u7684\u547D\u4EE4\uFF08\u4ECE\u4E0A\u5F80\u4E0B\u4F7F\u7528\u9891\u7387\u4F9D\u6B21\u964D\u4F4E\uFF09\uFF0C\u5F53\u7136\uFF0C\u8FD9\u91CC\u53EA\u662F\u543E\u8F88\u4E2A\u4EBA\u7684\uFF0C\u5176\u4ED6\u529F\u80FD\u53EF\u80FD\u6682\u65F6\u8FD8\u6CA1\u7528\u5230\u5462",-1),u=s("\u8BE6\u7EC6\u7684 git \u76F8\u5173\u77E5\u8BC6\u5F3A\u70C8\u63A8\u8350 "),h={href:"https://git-scm.com/book/zh",target:"_blank",rel:"noopener noreferrer"},g=s("Pro Git"),b=a(`<h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h2><table><thead><tr><th>\u5173\u952E\u8BCD</th><th>\u547D\u4EE4\u683C\u5F0F</th><th>\u547D\u4EE4\u89E3\u91CA</th><th>\u547D\u4EE4\u793A\u4F8B</th><th>\u547D\u4EE4\u89E3\u91CA</th></tr></thead><tbody><tr><td>init</td><td><code>git init</code></td><td>\u4E3A\u5F53\u524D\u76EE\u5F55\u521D\u59CB\u5316 git \u672C\u5730\u4ED3\u5E93</td><td></td><td></td></tr><tr><td>add</td><td><code>git add [\u8981\u8FFD\u8E2A\u7684\u6587\u4EF6/\u8DEF\u5F84]</code></td><td>\u6DFB\u52A0\u5230 git \u8DDF\u8E2A</td><td><code>git add -A</code></td><td>\u8FFD\u8E2A\u4ED3\u5E93\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6</td></tr><tr><td>commit</td><td><code>git commit [\u8DEF\u5F84] [\u9009\u9879] [\u63D0\u4EA4\u8BF4\u660E]</code></td><td>\u63D0\u4EA4\u5F53\u524D\u7684\u4FEE\u6539\u5185\u5BB9</td><td><code>git commit -a -m &quot;\u63D0\u4EA4\u5168\u90E8\u7684\u4FEE\u6539&quot;</code></td><td>\u63D0\u4EA4\u4E86\u5168\u90E8\u7684\u4FEE\u6539\u5185\u5BB9\uFF08\u4ECD\u5728\u672C\u673A\uFF09</td></tr><tr><td>remote</td><td><code>git remote [\u9009\u9879] [\u8FDC\u7A0B\u4ED3\u5E93\u540D]</code></td><td>\u64CD\u4F5C git \u8FDC\u7A0B\u4ED3\u5E93</td><td><code>git remote</code></td><td>\u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93\u7684\u522B\u540D</td></tr><tr><td></td><td></td><td></td><td><code>git remote add origin https://github.com/rxliuli/rxliuli.github.io.git</code></td><td>\u4E3A\u672C\u5730\u4ED3\u5E93\u5173\u8054\u4E00\u4E2A\u8FDC\u7A0B\u4ED3\u5E93</td></tr><tr><td></td><td></td><td></td><td><code>git remote show origin</code></td><td>\u663E\u793A origin \u8FDC\u7A0B\u4ED3\u5E93\u7684\u8BE6\u7EC6\u4FE1\u606F</td></tr><tr><td></td><td></td><td></td><td><code>git remote remove origin</code></td><td>\u5220\u9664 origin \u8FDC\u7A0B\u4ED3\u5E93</td></tr><tr><td>push</td><td><code>git push [\u8FDC\u7A0B\u522B\u540D] [\u8FDC\u7A0B\u5206\u652F]</code></td><td>\u63A8\u9001\u672C\u5730\u4FEE\u6539\u5230\u8FDC\u7A0B</td><td><code>git push origin master</code></td><td>\u63A8\u9001\u672C\u5730\u4FEE\u6539\u5230\u8FDC\u7A0B origin \u7684 master \u5206\u652F\u4E0A</td></tr><tr><td>pull</td><td><code>git pull [\u8FDC\u7A0B\u522B\u540D] [\u8FDC\u7A0B\u5206\u652F]</code></td><td>\u62C9\u53D6\u8FDC\u7A0B\u4FEE\u6539\u5230\u672C\u5730</td><td><code>git pull origin master</code></td><td>\u62C9\u53BB\u8FDC\u7A0B origin \u4E0A master \u5206\u652F\u7684\u4FEE\u6539\u5230\u672C\u5730</td></tr><tr><td>status</td><td><code>git status</code></td><td>\u67E5\u770B\u672C\u5730\u4ED3\u5E93\u7684\u72B6\u6001\uFF0C\u4EE5\u6B64\u5F97\u77E5\u6DFB\u52A0\u548C\u4FEE\u6539\u7684\u6587\u4EF6</td><td></td><td></td></tr><tr><td>clone</td><td><code>git clone [\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740]</code></td><td>\u514B\u9686\u4E00\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u5230\u672C\u5730\uFF0C\u8FD9\u91CC\u548C pull \u4E0D\u540C\u70B9\u5728\u4E8E\u672C\u5730\u4E0D\u5B58\u5728\u8981\u514B\u9686\u7684\u4ED3\u5E93</td><td><code>git clone https://github.com/rxliuli/rxliuli.github.io.git</code></td><td>\u514B\u9686\u543E\u8F88\u7684\u535A\u5BA2 github \u4ED3\u5E93\u5230\u672C\u5730</td></tr><tr><td>log</td><td><code>git log [\u9009\u9879]</code></td><td>\u67E5\u770B git \u65E5\u5FD7</td><td><code>git log</code></td><td>\u7B80\u5355\u7684\u67E5\u770B git commit \u5386\u53F2\u7EAA\u5F55</td></tr><tr><td>revert</td><td><code>git revert [\u63D0\u4EA4\u8BB0\u5F55 hash]</code></td><td>\u64A4\u9500\u6389\u6307\u5B9A\u63D0\u4EA4</td><td><code>git revert ab1c2d2</code></td><td>\u64A4\u9500\u4E00\u6B21\u63D0\u4EA4\u5185\u5BB9\uFF0C\u7136\u540E\u5C06\u64A4\u9500\u7684\u5185\u5BB9\u4F5C\u4E3A\u4FEE\u6539\u63D0\u4EA4\u4E00\u6B21\uFF0C\u4FDD\u7559\u4E86\u6240\u6709\u7684\u8BB0\u5F55</td></tr><tr><td>reset</td><td><code>git reset [\u63D0\u4EA4\u8BB0\u5F55 hash]</code></td><td>\u91CD\u7F6E\u5230\u67D0\u6B21\u63D0\u4EA4\u4E0A\uFF0C\u548C\u4E0A\u9762\u4E0D\u4E00\u6837\u7684\u662F\u4E0D\u4F1A\u6DFB\u52A0\u65B0\u7684\u63D0\u4EA4\u8BB0\u5F55\uFF0C\u800C\u662F\u5220\u9664\u5DF2\u6709\u7684\u63D0\u4EA4\u8BB0\u5F55</td><td><code>git reset ab1c2d2</code></td><td>\u4E0D\u4F1A\u5728 log \u4E2D\u7559\u4E0B\u75D5\u8FF9</td></tr><tr><td></td><td><code>git reset HEAD~[N \u56DE\u9000\u6B21\u6570]</code></td><td>\u56DE\u9000\u6700\u8FD1\u51E0\u6B21\u7684\u63D0\u4EA4, N \u4E3A\u51E0\u5C31\u56DE\u9000\u51E0\u6B21</td><td><code>git reset HEAD~1</code></td><td>\u56DE\u9000\u6700\u8FD1\u4E00\u6B21\u7684\u63D0\u4EA4</td></tr><tr><td>branch</td><td><code>git branch [\u5206\u652F]</code></td><td>git \u5206\u652F(\u5F3A\u5927\u800C\u53C8\u590D\u6742\u7684\u529F\u80FD)</td><td><code>git branch dev</code></td><td>\u521B\u5EFA dev \u5206\u652F</td></tr><tr><td></td><td></td><td></td><td><code>git branch</code></td><td>\u5217\u51FA\u6240\u6709\u5206\u652F</td></tr><tr><td></td><td></td><td></td><td><code>git branch dev -D</code></td><td>\u5220\u9664\u540D\u4E3A dev \u7684\u5206\u652F</td></tr><tr><td>checkout</td><td><code>git checkout [\u5206\u652F\u540D]</code></td><td>\u5207\u6362\u5F53\u524D\u5206\u652F(\u5206\u652F\u4E4B\u95F4\u4E0D\u5171\u4EAB\u4FEE\u6539)</td><td><code>git checkout master</code></td><td>\u5207\u6362\u5F53\u524D\u5206\u652F\u5230 master \u5206\u652F</td></tr><tr><td></td><td></td><td></td><td><code>git checkout origin/dev -b dev</code></td><td>\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730\u5E76\u5207\u6362</td></tr><tr><td>merge</td><td><code>git merge [\u9009\u9879]</code></td><td>\u5408\u5E76\u5176\u4ED6\u5206\u652F\u7684\u4FEE\u6539\u5230\u5F53\u524D\u5206\u652F\u4E0A</td><td><code>git merge dev</code></td><td>\u5408\u5E76 dev \u5206\u652F\u7684\u4FEE\u6539\u5230\u5F53\u524D\u5206\u652F(\u4E00\u822C\u662F master \u5206\u652F)</td></tr><tr><td></td><td></td><td></td><td><code>git merge origin/master --allow-unrelated-histories</code></td><td>\u5F3A\u884C\u5408\u5E76\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730</td></tr><tr><td>push</td><td><code>git push [\u8FDC\u7A0B\u4ED3\u5E93\u540D] :[\u5206\u652F\u540D]</code></td><td>\u5220\u9664\u6389\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\uFF08\u4ED3\u5E93\u8FD8\u5728\uFF0C\u53EA\u662F\u5220\u9664\u5206\u652F\uFF09</td><td><code>git push origin :dev</code></td><td>\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93 origin \u4E0B\u7684 dev \u5F00\u53D1\u5206\u652F</td></tr><tr><td>stash</td><td><code>git stash</code></td><td>\u6682\u5B58\u672C\u5730\u66F4\u6539</td><td></td><td></td></tr><tr><td></td><td><code>git stash list</code></td><td>\u67E5\u770B\u6240\u6709\u6682\u5B58\u66F4\u6539</td><td></td><td></td></tr><tr><td></td><td><code>git stash apply [index]</code></td><td>\u91CD\u65B0\u5E94\u7528\u6307\u5B9A\u6682\u5B58\u66F4\u6539</td><td><code>git stash apply</code></td><td>\u91CD\u65B0\u5E94\u7528\u6700\u65B0\u7684\u6682\u5B58\u66F4\u6539</td></tr><tr><td></td><td><code>git stash drop [index]</code></td><td>\u5220\u9664\u6389\u6307\u5B9A\u7684\u6682\u5B58\u66F4\u6539</td><td><code>git stash drop</code></td><td>\u5220\u9664\u6389\u6700\u65B0\u7684\u6682\u5B58\u66F4\u6539</td></tr></tbody></table><h2 id="\u590D\u5408\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u590D\u5408\u547D\u4EE4" aria-hidden="true">#</a> \u590D\u5408\u547D\u4EE4</h2><h3 id="\u64A4\u9500\u6389\u672C\u5730\u6240\u6709\u7684\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u6389\u672C\u5730\u6240\u6709\u7684\u4FEE\u6539" aria-hidden="true">#</a> \u64A4\u9500\u6389\u672C\u5730\u6240\u6709\u7684\u4FEE\u6539</h3><p>\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> -A <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> stash <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> stash drop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u89E3\u91CA</p><ol><li>\u6DFB\u52A0\u6240\u6709\u66F4\u6539\u5230 git \u8FFD\u8E2A\u4E2D\uFF08\u5982\u679C\u6CA1\u6709\u88AB\u5FFD\u7565\u7684\u8BDD\uFF09</li><li>\u6DFB\u52A0\u6240\u6709\u672C\u5730\u66F4\u6539\u5230\u6682\u5B58\u533A\u57DF\u4E2D</li><li>\u5220\u9664\u6389\u521A\u6DFB\u52A0\u7684\u6700\u65B0\u6682\u5B58\u66F4\u6539</li></ol><p>\u5E94\u7528\u573A\u666F\u4FEE\u6539\u4E86\u4E00\u4E9B\u6587\u4EF6\u4F46\u53C8\u6CA1\u6709\u63D0\u4EA4\uFF0C\u7A81\u7136\u53D1\u73B0\u6709\u95EE\u9898\uFF0C\u60F3\u628A\u5B83\u4EEC\u5168\u5220\u9664\u4E86\u91CD\u6765\uFF0C\u6216\u8005\u5168\u90E8\u56DE\u5230\u4E0A\u6B21\u63D0\u4EA4\uFF0C\u5148\u628A\u8FD9\u4E9B\u4FEE\u6539\u6682\u5B58\u8D77\u6765\uFF08\u4E0D\u52A0\u6700\u540E\u4E00\u6761\u547D\u4EE4\uFF09</p><h3 id="\u533A\u5206\u6587\u4EF6\u540D\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#\u533A\u5206\u6587\u4EF6\u540D\u5927\u5C0F\u5199" aria-hidden="true">#</a> \u533A\u5206\u6587\u4EF6\u540D\u5927\u5C0F\u5199</h3><p>\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config core.ignorecase <span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u89E3\u91CA Windows \u4E0B\u9ED8\u8BA4\u4E0D\u533A\u5206\u6587\u4EF6\u540D\u5927\u5C0F\u5199\uFF0C\u6240\u4EE5\u9700\u8981\u7279\u522B\u8BBE\u7F6E\u4E00\u4E0B\u3002</p><h3 id="git-push-\u5F3A\u5236\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#git-push-\u5F3A\u5236\u63A8\u9001" aria-hidden="true">#</a> git push \u5F3A\u5236\u63A8\u9001</h3><p>\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push -f
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u89E3\u91CA</p><p>\u5F3A\u5236\u63A8\u9001\u5230\u8FDC\u7A0B\u5206\u652F\uFF0C\u5373\u4FBF\u662F\u8FDC\u7A0B\u5305\u542B\u672C\u5730\u4E0D\u5B58\u5728\u7684\u63D0\u4EA4</p><h3 id="\u5FFD\u7565\u5DF2\u7ECF\u8DDF\u8E2A\u7684\u6587\u4EF6\u7684\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565\u5DF2\u7ECF\u8DDF\u8E2A\u7684\u6587\u4EF6\u7684\u63D0\u4EA4" aria-hidden="true">#</a> \u5FFD\u7565\u5DF2\u7ECF\u8DDF\u8E2A\u7684\u6587\u4EF6\u7684\u63D0\u4EA4</h3>`,19),m=s("\u53C2\u8003\uFF1A"),k={href:"https://ruby-china.org/topics/17948",target:"_blank",rel:"noopener noreferrer"},_=s("\u600E\u6837\u8BA9 Git \u5FFD\u7565\u5F53\u524D\u5DF2\u7ECF\u66F4\u6539\u7684\u6587\u4EF6"),v=a(`<p>\u5FFD\u7565\u4FEE\u6539</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> update-index --assume-unchanged <span class="token operator">&lt;</span>files<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u53D6\u6D88\u8FD9\u79CD\u8BBE\u5B9A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> update-index --no-assume-unchanged <span class="token operator">&lt;</span>files<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u4ECE\u8FDC\u7AEF\u62C9\u53D6\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u8FDC\u7AEF\u62C9\u53D6\u5206\u652F" aria-hidden="true">#</a> \u4ECE\u8FDC\u7AEF\u62C9\u53D6\u5206\u652F</h3>`,5),f=s("\u53C2\u8003\uFF1A"),x={href:"https://www.cnblogs.com/phpper/p/7136048.html",target:"_blank",rel:"noopener noreferrer"},q=s("git \u83B7\u53D6\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u6307\u5B9A\u5206\u652F"),E=a(`<p>\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b <span class="token punctuation">[</span>\u672C\u5730\u5206\u652F\u540D<span class="token punctuation">(</span>\u4E0D\u5B58\u5728<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>\u8FDC\u7A0B\u5206\u652F\u540D<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u793A\u4F8B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b dev origin/dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u5FFD\u7565\u5DF2\u63D0\u4EA4\u7684\u6587\u4EF6\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565\u5DF2\u63D0\u4EA4\u7684\u6587\u4EF6\u4FEE\u6539" aria-hidden="true">#</a> \u5FFD\u7565\u5DF2\u63D0\u4EA4\u7684\u6587\u4EF6\u4FEE\u6539</h3>`,5),w=s("\u53C2\u8003\uFF1A"),A={href:"https://www.jianshu.com/p/e5b13480479b",target:"_blank",rel:"noopener noreferrer"},y=s("git \u5982\u4F55\u5FFD\u7565\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6587\u4EF6 (.gitignore \u6587\u4EF6\u65E0\u6548)"),B=a(`<p>\u4E3B\u8981\u7528\u4E8E\u5FFD\u7565\u4E00\u4E9B\u672C\u5730\u4FEE\u6539\u7684\u6587\u4EF6\u4F46\u53C8\u4E0D\u5E0C\u671B\u63D0\u4EA4\uFF0C\u540C\u65F6\u4E5F\u4E0D\u5E0C\u671B\u6DFB\u52A0\u5230 .gitignore \u4E2D\u5C06\u4E4B\u4ECE\u4E91\u7AEF\u6392\u9664\u7684\u65B9\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> update-index --assume-unchanged <span class="token punctuation">[</span>file-pattern<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="git-\u5220\u9664\u8FDC\u7A0B-tag" tabindex="-1"><a class="header-anchor" href="#git-\u5220\u9664\u8FDC\u7A0B-tag" aria-hidden="true">#</a> git \u5220\u9664\u8FDC\u7A0B tag</h3><p>\u663E\u793A\u672C\u5730 tag</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> tag
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5220\u9664\u672C\u5730 tag</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> tag -d Remote_Systems_Operation
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7528 push, \u5220\u9664\u8FDC\u7A0B tag</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin :refs/tags/Remote_Systems_Operation
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5220\u9664\u8FDC\u7A0B\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -r -d origin/branch-name
<span class="token function">git</span> push origin :branch-name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4E24\u4E2A-git-\u4ED3\u5E93\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u4E24\u4E2A-git-\u4ED3\u5E93\u5408\u5E76" aria-hidden="true">#</a> \u4E24\u4E2A git \u4ED3\u5E93\u5408\u5E76</h3>`,12),I=s("\u73B0\u5728\u6709\u4E24\u4E2A\u4ED3\u5E93 "),j={href:"https://github.com/kktjs/kkt.git",target:"_blank",rel:"noopener noreferrer"},N=s("kktjs/kkt"),R=s(" \u548C "),S={href:"https://github.com/kktjs/kkt-next.git",target:"_blank",rel:"noopener noreferrer"},G=s("kktjs/kkt-next"),Y=s(" \u6211\u4EEC\u9700\u8981\u5C06 "),D=e("code",null,"kkt-next",-1),F=s(" \u4ED3\u5E93\u5408\u5E76\u5230 "),L=e("code",null,"kkt",-1),O=s(" \u5E76\u4FDD\u7559 "),H=e("code",null,"kkt-next",-1),V=s(" \u7684\u6240\u6709\u63D0\u4EA4\u5185\u5BB9\u3002"),T=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u514B\u9686\u4E3B\u4ED3\u5E93\u4EE3\u7801</span>
<span class="token function">git</span> clone git@github.com:kktjs/kkt.git

<span class="token comment"># 2. \u5C06 kkt-next \u4F5C\u4E3A\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u6DFB\u52A0\u5230 kkt \u4E2D\uFF0C\u8BBE\u7F6E\u522B\u540D\u4E3A other</span>
<span class="token function">git</span> remote <span class="token function">add</span> other git@github.com:kktjs/kkt-next.git

<span class="token comment"># 3. \u4ECE kkt-next \u4ED3\u5E93\u4E2D\u62C9\u53D6\u6570\u636E\u5230\u672C\u4ED3\u5E93</span>
<span class="token function">git</span> fetch other

<span class="token comment"># 4. \u5C06 kkt-next \u4ED3\u5E93\u62C9\u53D6\u7684 master \u5206\u652F\u4F5C\u4E3A\u65B0\u5206\u652F checkout \u5230\u672C\u5730\uFF0C\u65B0\u5206\u652F\u540D\u8BBE\u5B9A\u4E3A dev</span>
<span class="token function">git</span> checkout -b dev other/master

<span class="token comment"># 5. \u5207\u6362\u56DE kkt \u7684 master \u5206\u652F</span>
<span class="token function">git</span> checkout master

<span class="token comment"># 6. \u5C06 dev \u5408\u5E76\u5165 kkt \u7684 master \u5206\u652F</span>
<span class="token function">git</span> merge dev

<span class="token comment"># \u5982\u679C\u7B2C 6 \u6B65\u62A5\u9519 \`fatal: refusing to merge unrelated histories\`</span>
<span class="token comment"># \u8BF7\u6267\u884C\u4E0B\u9762\u547D\u4EE4 \u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193\u2193</span>
<span class="token function">git</span> merge dev --allow-unrelated-histories
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p>JetBrains IDE \u63D0\u4F9B\u4E86\u975E\u5E38\u597D\u7528\u7684\u51B2\u7A81\u5408\u5E76\u5DE5\u5177</p></blockquote><p>\u5728\u5408\u5E76\u65F6\u6709\u53EF\u80FD\u4E24\u4E2A\u5206\u652F\u5BF9\u540C\u4E00\u4E2A\u6587\u4EF6\u90FD\u505A\u4E86\u4FEE\u6539\uFF0C\u8FD9\u65F6\u9700\u8981\u89E3\u51B3\u51B2\u7A81\uFF0C\u5BF9\u6587\u672C\u6587\u4EF6\u6765\u8BF4\u5F88\u7B80\u5355\uFF0C\u6839\u636E\u9700\u8981\u5BF9\u51B2\u7A81\u7684\u4F4D\u7F6E\u8FDB\u884C\u5904\u7406\u5C31\u53EF\u4EE5\u3002\u5BF9\u4E8E\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u9700\u8981\u7528\u5230\u5982\u4E0B\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout --theirs YOUR_BINARY_FILES     <span class="token comment"># \u4FDD\u7559\u9700\u8981\u5408\u5E76\u8FDB\u6765\u7684\u5206\u652F\u7684\u4FEE\u6539</span>
<span class="token function">git</span> checkout --ours YOUR_BINARY_FILES       <span class="token comment"># \u4FDD\u7559\u81EA\u5DF1\u7684\u4FEE\u6539</span>
<span class="token function">git</span> <span class="token function">add</span> YOUR_BINARY_FILES
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4),U=s("\u53C2\u8003: "),z={href:"https://segmentfault.com/a/1190000021919753",target:"_blank",rel:"noopener noreferrer"},K=s("https://segmentfault.com/a/1190000021919753"),P=e("h3",{id:"\u5728-git-\u76EE\u5F55\u4E2D\u5FFD\u7565-git-\u5B50\u6A21\u5757\u7684\u6240\u6709\u53D8\u66F4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5728-git-\u76EE\u5F55\u4E2D\u5FFD\u7565-git-\u5B50\u6A21\u5757\u7684\u6240\u6709\u53D8\u66F4","aria-hidden":"true"},"#"),s(" \u5728 git \u76EE\u5F55\u4E2D\u5FFD\u7565 git \u5B50\u6A21\u5757\u7684\u6240\u6709\u53D8\u66F4")],-1),C=s("\u53C2\u8003 "),J={href:"https://git-scm.com/docs/gitmodules#Documentation/gitmodules.txt-submoduleltnamegtignore",target:"_blank",rel:"noopener noreferrer"},W=s("git submodule"),X=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># .gitmodules</span>
<span class="token punctuation">[</span>submodule <span class="token string">&quot;examples/blog-hexo-example/themes/next&quot;</span><span class="token punctuation">]</span>
  path <span class="token operator">=</span> examples/blog-hexo-example/themes/next
  url <span class="token operator">=</span> https://github.com/theme-next/hexo-theme-next
  ignore <span class="token operator">=</span> all
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="git-\u63D0\u4EA4\u65F6\u5FFD\u7565-hooks" tabindex="-1"><a class="header-anchor" href="#git-\u63D0\u4EA4\u65F6\u5FFD\u7565-hooks" aria-hidden="true">#</a> git \u63D0\u4EA4\u65F6\u5FFD\u7565 hooks</h3><p>\u6DFB\u52A0 <code>--no-verify</code> \u53C2\u6570\u5373\u53EF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit --no-verify
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="git-\u9519\u8BEF-reset-\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#git-\u9519\u8BEF-reset-\u6062\u590D" aria-hidden="true">#</a> Git \u9519\u8BEF Reset \u6062\u590D</h3><ol><li><p>\u627E\u5230\u4F7F\u7528 <code>git reset</code> \u4E4B\u524D\u7684\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u7684 <code>commit id</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B git \u8BB0\u5F55\u7684\u6240\u6709\u64CD\u4F5C\uFF0C\u5305\u62EC\u56DE\u9000\u64CD\u4F5C\u4E5F\u4F1A\u8BB0\u5F55</span>
<span class="token function">git</span> reflog
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>\u4F7F\u7528 <code>git reset --hard</code> \u56DE\u9000</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u56DE\u9000\u5230\u6307\u5B9A\u63D0\u4EA4\uFF0C\u4F46\u4E0D\u4F1A\u5C06\u4E4B\u540E\u63D0\u4EA4\u6DF7\u5165\u5230\u672A\u63D0\u4EA4\u7684\u5185\u5BB9</span>
<span class="token function">git</span> reset --hard dd256c7d66ad2e9671cbd47650ffddc4267ca7d5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>\u4F7F\u7528 <code>git log</code> \u68C0\u67E5\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u662F\u5426\u6062\u590D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD9\u65F6\u53EF\u4EE5\u770B\u5230\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u5DF2\u7ECF\u6062\u590D\u4E86</span>
<span class="token function">git</span> log
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol>`,6),M=s("\u53C2\u8003: "),Q={href:"https://segmentfault.com/q/1010000000167491",target:"_blank",rel:"noopener noreferrer"},Z=s("\u6267\u884C\u4E86 git reset\uFF0C\u8FD8\u6709\u529E\u6CD5\u53D6\u6D88\u5417\uFF1F"),$=e("h3",{id:"git-\u9AD8\u7EA7\u5408\u5E76",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-\u9AD8\u7EA7\u5408\u5E76","aria-hidden":"true"},"#"),s(" Git \u9AD8\u7EA7\u5408\u5E76")],-1),ee=e("p",null,[s("\u524D\u7AEF\u60F3\u8981\u8C03\u6574\u9879\u76EE\u7EC4\u7EC7\u5C06\u4E4B\u524D\u7684\u9879\u76EE\u653E\u5230 "),e("code",null,"monorepo"),s(" \u4E2D\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528 git \u5C06\u4E4B\u524D\u7684\u9879\u76EE\u5408\u5E76\u5230\u65B0\u9879\u76EE\u7684\u6307\u5B9A\u76EE\u5F55\u4E2D\uFF0C\u540C\u65F6\u4FDD\u7559\u6240\u6709\u8BB0\u5F55\u3002")],-1),se=s("\u4E3B\u8981\u4F9D\u8D56\u529F\u80FD "),te={href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%AB%98%E7%BA%A7%E5%90%88%E5%B9%B6#_subtree_merge",target:"_blank",rel:"noopener noreferrer"},ne=s("\u9AD8\u7EA7\u5408\u5E76 => \u5B50\u6811\u5408\u5E76"),ae=s("\uFF0C\u540C\u65F6\u53C2\u8003\u9519\u8BEF\u89E3\u51B3\u65B9\u6848 "),de={href:"https://www.educative.io/edpresso/the-fatal-refusing-to-merge-unrelated-histories-git-error",target:"_blank",rel:"noopener noreferrer"},oe=s("The \u201Cfatal: refusing to merge unrelated histories\u201D Git error"),re=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> rack_remote https://github.com/rack/rack
<span class="token function">git</span> fetch rack_remote --no-tags
<span class="token function">git</span> checkout -b rack_branch rack_remote/master
<span class="token function">git</span> checkout master
<span class="token function">git</span> read-tree --prefix<span class="token operator">=</span>rack/ -u rack_branch
<span class="token function">git</span> merge --squash -s recursive -Xsubtree<span class="token operator">=</span>rack rack_branch --allow-unrelated-histories
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u7CFB\u7EDF\u66F4\u65B0\u540E-git-\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u66F4\u65B0\u540E-git-\u9519\u8BEF" aria-hidden="true">#</a> \u7CFB\u7EDF\u66F4\u65B0\u540E git \u9519\u8BEF</h3><p>\u9700\u8981\u4FEE\u6539 <em>~/.ssh/config</em> \u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Host *
  ServerAliveInterval <span class="token number">10</span>
  HostKeyAlgorithms +ssh-rsa
  PubkeyAcceptedKeyTypes +ssh-rsa
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5173\u8054\u672C\u5730\u4E0E\u8FDC\u7AEF\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u672C\u5730\u4E0E\u8FDC\u7AEF\u5206\u652F" aria-hidden="true">#</a> \u5173\u8054\u672C\u5730\u4E0E\u8FDC\u7AEF\u5206\u652F</h3><p>\u5F53\u4F60 <code>git push</code> \u65F6\u53EF\u80FD\u4F1A\u63D0\u793A\u9700\u8981\u5173\u8054\uFF0C\u57FA\u672C\u4E0A\u590D\u5236\u63D0\u793A\u7684\u547D\u4EE4\u5373\u53EF\u3002\u4E0B\u9762\u662F\u5173\u8054\u672C\u5730\u4E0E\u8FDC\u7AEF\u7684 master \u5206\u652F\u7684\u65B9\u6CD5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push --set-upstream origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E4B\u540E\u4FBF\u53EF\u4EE5\u76F4\u63A5 <code>git push</code> \u63A8\u9001\u4EE3\u7801\u4E86</p>`,8);function ie(ce,le){const t=d("ExternalLinkIcon");return o(),r(i,null,[p,e("blockquote",null,[e("p",null,[u,e("a",h,[g,n(t)])])]),b,e("blockquote",null,[e("p",null,[m,e("a",k,[_,n(t)])])]),v,e("blockquote",null,[e("p",null,[f,e("a",x,[q,n(t)])])]),E,e("blockquote",null,[e("p",null,[w,e("a",A,[y,n(t)])])]),B,e("p",null,[I,e("a",j,[N,n(t)]),R,e("a",S,[G,n(t)]),Y,D,F,L,O,H,V]),T,e("blockquote",null,[e("p",null,[U,e("a",z,[K,n(t)])])]),P,e("blockquote",null,[e("p",null,[C,e("a",J,[W,n(t)])])]),X,e("blockquote",null,[e("p",null,[M,e("a",Q,[Z,n(t)])])]),$,ee,e("blockquote",null,[e("p",null,[se,e("a",te,[ne,n(t)]),ae,e("a",de,[oe,n(t)])])]),re],64)}var he=c(l,[["render",ie]]);export{he as default};
