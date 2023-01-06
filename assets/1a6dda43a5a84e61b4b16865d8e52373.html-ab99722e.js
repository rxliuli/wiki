import{_ as l,M as s,p as a,q as i,R as e,t as o,N as t,a1 as n}from"./framework-96b046e1.js";const c="/assets/1481553a70764d679f18841199b9db09-476d113b.png",p={},h=e("blockquote",null,[e("p",null,[o("已转入 yarn2，放弃使用 lerna+yarn1 的组合，具体原因参考 "),e("a",{href:"/p/556ea9eee38842c0be108ada810b711f"},"yarn2 使用"),o(" 中描述的动机。")])],-1),d=e("h2",{id:"历史",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#历史","aria-hidden":"true"},"#"),o(" 历史")],-1),u={href:"https://github.com/Wscats/CV/issues/29",target:"_blank",rel:"noopener noreferrer"},_={href:"http://www.htmleaf.com/jQuery/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.npmjs.com/package/lodash",target:"_blank",rel:"noopener noreferrer"},f={href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://rushjs.io/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://yarnpkg.com/features/workspaces",target:"_blank",rel:"noopener noreferrer"},g={href:"https://pnpm.js.org/en/workspaces",target:"_blank",rel:"noopener noreferrer"},j={href:"https://docs.npmjs.com/cli/v7/using-npm/workspaces",target:"_blank",rel:"noopener noreferrer"},w=e("blockquote",null,[e("p",null,"自去年 10 月开始，吾辈使用 lerna 重构个人和公司的项目，以应对愈加复杂的前端项目。")],-1),y=e("h2",{id:"为什么需要-monorepo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么需要-monorepo","aria-hidden":"true"},"#"),o(" 为什么需要 monorepo？")],-1),q=e("blockquote",null,[e("p",null,"借用一下 lerna 官网的简介："),e("p",null,"将大型代码仓库分割成多个独立版本化的 软件包（package）对于代码共享来说非常有用。但是，如果某些更改 跨越了多个代码仓库的话将变得很 麻烦 并且难以跟踪，并且， 跨越多个代码仓库的测试将迅速变得非常复杂。"),e("p",null,"为了解决这些（以及许多其它）问题，某些项目会将 代码仓库分割成多个软件包（package），并将每个软件包存放到独立的代码仓库中。但是，例如 Babel、 React、Angular、Ember、Meteor、Jest 等项目以及许多其他项目则是在 一个代码仓库中包含了多个软件包（package）并进行开发。")],-1),v={href:"https://github.com/rxliuli/liuli-util",target:"_blank",rel:"noopener noreferrer"},x={href:"https://rushjs.io/pages/intro/why_mono/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/microsoft/rushstack",target:"_blank",rel:"noopener noreferrer"},V=e("h2",{id:"为什么选择-lerna",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么选择-lerna","aria-hidden":"true"},"#"),o(" 为什么选择 lerna？")],-1),B=e("p",null,"那么，有了这么多 monorepo 工具，为什么我们选择 lerna？",-1),E={href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://rushjs.io/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://yarnpkg.com/features/workspaces",target:"_blank",rel:"noopener noreferrer"},S={href:"https://pnpm.js.org/en/workspaces",target:"_blank",rel:"noopener noreferrer"},C={href:"https://docs.npmjs.com/cli/v7/using-npm/workspaces",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"其实，除了 lerna 与 @microsoft/rush 之外，其它竞争对手都是包管理器，仅仅只是提供了 workspace 的工作空间，并未提供更高级功能。",-1),I={href:"https://www.npmtrends.com/lerna-vs-@microsoft/rush",target:"_blank",rel:"noopener noreferrer"},M=n("<p>下图是一个对比</p><table><thead><tr><th>对比项</th><th>lerna</th><th>@microsoft/rush</th></tr></thead><tbody><tr><td>star</td><td>26,824</td><td>2,392</td></tr><tr><td>周下载</td><td>1,155,241</td><td>100,386</td></tr><tr><td>使用者</td><td>知名开源项目</td><td>微软系产品</td></tr></tbody></table><p>就吾辈的实际使用体验而言，相比于 lerna，rush 默认包含了更多的东西，而非通过组合一系列可选的工具支持，这增长了相当的门槛。</p><p>下面是吾辈对其的一些认知过程</p>",4),R=e("li",null,"rush.js 是真的感觉很【专业】，限定了很多很多东西",-1),A={href:"https://rushjs.io/pages/maintainer/setup_policies/",target:"_blank",rel:"noopener noreferrer"},G=e("li",null,"像是这里，通过 allowedPackagesPolicy 的方式对 team 中所有开发人员都可以直接引入新的 npm 包做出了限制",-1),Q=e("li",null,"唉，rush 比 lerna 复杂多了，做了很多很多的预定义的事情，这就意味着，它对项目维护者（而非开发者）的要求更高",-1),T=e("li",null,"和 ide 没完全集成真痛苦.JPG",-1),W=e("li",null,"吾辈总算明白这些配置为什么是【推荐配置】而不是【默认配置】了，引发的错误太多了（毕竟 npm 包很多并不规范）",-1),z=e("li",null,"rush monorepo 的一个问题是，某些包总喜欢强制指定依赖包的特定版本（例如 react-scripts），而 rush 总是“聪明”的仅安装最新的，导致添加的项目莫名其妙的炸掉",-1),D={href:"https://rushjs.io/pages/advanced/installation_variants/",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,"但一整个进阶主题都是在处理这个问题。。。",-1),H=e("li",null,"算了，吾辈放弃了，rush + pnpm 感觉上维护配置成本太高了，滚回 lerna + yarn 了",-1),K=n('<blockquote><p>rush 在功能、目标和文档方面更好，但现阶段而言还是 lerna 更成熟。</p></blockquote><h2 id="lerna-是什么" tabindex="-1"><a class="header-anchor" href="#lerna-是什么" aria-hidden="true">#</a> lerna 是什么？</h2><p>简而言之，Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。可以在一个项目中创建多个模块（基本上模块也可以认为是一个项目），并且可以在本地的模块之间互相关联。</p><p>lerna 项目的基本结构如下</p><p>生产项目</p><ul><li>根目录 <ul><li><code>apps</code>: 生产项目 <ul><li><code>app-1</code></li><li><code>app-2</code></li></ul></li><li><code>libs</code>: 通用模块 <ul><li><code>lib-1</code></li><li><code>lib-2</code></li></ul></li><li><code>package.json</code></li><li><code>lerna.json</code></li></ul></li></ul><p>开源库</p><ul><li>根目录 <ul><li><code>libs</code>: 模块根目录 <ul><li><code>lib-1</code></li><li><code>lib-2</code></li></ul></li><li><code>package.json</code></li><li><code>lerna.json</code></li></ul></li></ul>',8),O={href:"https://github.com/microsoft/rushstack",target:"_blank",rel:"noopener noreferrer"},U=n('<h2 id="使用-lerna-的优点" tabindex="-1"><a class="header-anchor" href="#使用-lerna-的优点" aria-hidden="true">#</a> 使用 lerna 的优点</h2><blockquote><p>其中部分优点是 monorepo 固有的优势，但也有 lerna 独有的功能。</p></blockquote><ul><li>更容易抽离公共代码: 模块之间可以互相引用并且即时生效</li><li>更容易统一 <ul><li>项目配置: <code>tsconfig.json/prettier.json/git hooks</code></li><li>管理和发布一系列包: <code>lerna publish</code></li><li>修改依赖立刻生效: <code>lerna bootstrap</code></li><li>依赖版本: 和默认合并不同版本的依赖</li><li>文档生成和合并: <code>fliegdoc</code></li><li>代码风格: <code>prettier/git hooks</code></li><li>在一个模块运行另一个模块的命令: <code>lerna run &lt;cmd&gt; --scope &lt;pkg&gt;</code></li><li>打包工具和流程: 封装更适合项目的打包 cli</li></ul></li></ul><p>目前稍微大点的开源项目不是已经转为了 lerna monorepo，就是已经在转换的路上（很像最近流行的使用 typescript 重构库）。包括但不限于以下这些：</p><p><img src="'+c+'" alt="1614158368615"></p>',5),X={href:"https://github.com/laurent22/joplin/pull/4039",target:"_blank",rel:"noopener noreferrer"},Y=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),o(" 总结")],-1),Z=e("p",null,"使用 lerna 虽然会增加一些复杂度，但带来的优点仍然是超过缺点的。",-1),$=e("blockquote",null,[e("p",null,"吾辈之所以相信 monorepo 会成为主流的原因是后端已经使用了这么多年的 maven/gradle，如果真的有什么问题，那不会直到现在还在使用。")],-1);function ee(oe,re){const r=s("ExternalLinkIcon");return a(),i("div",null,[h,d,e("ul",null,[e("li",null,[o("上古时期，前端没有工程化的概念可言，复用代码也不过是将某些 css、js 代码片段保存到笔记，需要时复制到项目中，仅此而已。参考："),e("a",u,[o("55 个提高你 CSS 开发效率的必备片段"),t(r)]),o("，或是 "),e("a",_,[o("jquery 库"),t(r)])]),e("li",null,[o("莽荒时代，前端出现了 nodejs 和 npm，于是一大批通用代码被发布到了 npm 平台，可以在项目中简单配置即可使用通用的库，任何人都可以简单的将代码发布到 npm。参考："),e("a",m,[o("lodash"),t(r)])]),e("li",null,[o("现代，由于前端项目的复杂度逐渐上升，所以出现了 monorepo 工具以更简单的复用代码。例如层出不穷的 monorepo 支持工具 "),e("a",f,[o("lerna"),t(r)]),o("、"),e("a",b,[o("@microsoft/rush"),t(r)]),o("、"),e("a",k,[o("yarn 2"),t(r)]),o("、"),e("a",g,[o("pnpm"),t(r)]),o("、"),e("a",j,[o("npm 7"),t(r)])])]),w,y,q,e("p",null,[o("你可能会认为除了大型开源项目之外，monorepo 对于小型项目和生产环境的业务项目没有太多价值。但这是错的，前者我在微型工具库 "),e("a",v,[o("liuli-util"),t(r)]),o(" 上进行了实践，确定了它对于维护和使用确实有帮助。而后者，甚至出现了专门为业务项目的 monorepo 工具 "),e("a",x,[o("@microsoft/rush"),t(r)]),o("，微软在 "),e("a",N,[o("rushstack"),t(r)]),o(" 项目中大规模使用了它。")]),V,B,e("ul",null,[e("li",null,[e("a",E,[o("lerna"),t(r)])]),e("li",null,[e("a",J,[o("@microsoft/rush"),t(r)])]),e("li",null,[e("a",L,[o("yarn 2"),t(r)])]),e("li",null,[e("a",S,[o("pnpm"),t(r)])]),e("li",null,[e("a",C,[o("npm 7"),t(r)])])]),P,e("blockquote",null,[e("p",null,[o("lerna 和 @microsoft/rush 的 npm 趋势对比参考: "),e("a",I,[o("https://www.npmtrends.com/lerna-vs-@microsoft/rush"),t(r)])])]),M,e("ul",null,[R,e("li",null,[e("a",A,[o("https://rushjs.io/pages/maintainer/setup_policies/"),t(r)])]),G,Q,T,W,z,e("li",null,[o("吾辈的锅，它在最后给了方法 "),e("a",D,[o("https://rushjs.io/pages/advanced/installation_variants/"),t(r)])]),F,H]),K,e("blockquote",null,[e("p",null,[o("目录的名字灵感来源于 "),e("a",O,[o("rushstack"),t(r)])])]),U,e("blockquote",null,[e("p",null,[o("吾辈目前使用的笔记工具 Joplin 也在去年使用 lerna 重构了，参考："),e("a",X,[o("Lerna migration"),t(r)]),o("。")])]),Y,Z,$])}const ne=l(p,[["render",ee],["__file","1a6dda43a5a84e61b4b16865d8e52373.html.vue"]]);export{ne as default};