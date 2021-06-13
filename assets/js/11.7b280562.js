(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{358:function(r,e,t){r.exports=t.p+"assets/img/1481553a70764d679f18841199b9db09.46bc3292.png"},359:function(r,e,t){r.exports=t.p+"assets/img/019d27e1c9224c39b2214fb943dd3c06.ab34aae5.png"},401:function(r,e,t){"use strict";t.r(e);var a=t(44),n=Object(a.a)({},(function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h2",{attrs:{id:"历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#历史"}},[r._v("#")]),r._v(" 历史")]),r._v(" "),a("ul",[a("li",[r._v("上古时期，前端没有工程化的概念可言，复用代码也不过是将某些 css、js 代码片段保存到笔记，需要时复制到项目中，仅此而已。参考："),a("a",{attrs:{href:"https://github.com/Wscats/CV/issues/29",target:"_blank",rel:"noopener noreferrer"}},[r._v("55 个提高你 CSS 开发效率的必备片段"),a("OutboundLink")],1),r._v("，或是 "),a("a",{attrs:{href:"http://www.htmleaf.com/jQuery/",target:"_blank",rel:"noopener noreferrer"}},[r._v("jquery 库"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("莽荒时代，前端出现了 nodejs 和 npm，于是一大批通用代码被发布到了 npm 平台，可以在项目中简单配置即可使用通用的库，任何人都可以简单的将代码发布到 npm。参考："),a("a",{attrs:{href:"https://www.npmjs.com/package/lodash",target:"_blank",rel:"noopener noreferrer"}},[r._v("lodash"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("现代，由于前端项目的复杂度逐渐上升，所以出现了 monorepo 工具以更简单的复用代码。例如层出不穷的 monorepo 支持工具 "),a("a",{attrs:{href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("lerna"),a("OutboundLink")],1),r._v("、"),a("a",{attrs:{href:"https://rushjs.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("@microsoft/rush"),a("OutboundLink")],1),r._v("、"),a("a",{attrs:{href:"https://yarnpkg.com/features/workspaces",target:"_blank",rel:"noopener noreferrer"}},[r._v("yarn 2"),a("OutboundLink")],1),r._v("、"),a("a",{attrs:{href:"https://pnpm.js.org/en/workspaces",target:"_blank",rel:"noopener noreferrer"}},[r._v("pnpm"),a("OutboundLink")],1),r._v("、"),a("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/using-npm/workspaces",target:"_blank",rel:"noopener noreferrer"}},[r._v("npm 7"),a("OutboundLink")],1)])]),r._v(" "),a("blockquote",[a("p",[r._v("自去年 10 月开始，吾辈使用 lerna 重构个人和公司的项目，以应对愈加复杂的前端项目。")])]),r._v(" "),a("h2",{attrs:{id:"为什么需要-monorepo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要-monorepo"}},[r._v("#")]),r._v(" 为什么需要 monorepo？")]),r._v(" "),a("blockquote",[a("p",[r._v("借用一下 lerna 官网的简介：")]),r._v(" "),a("p",[r._v("将大型代码仓库分割成多个独立版本化的 软件包（package）对于代码共享来说非常有用。但是，如果某些更改 跨越了多个代码仓库的话将变得很 麻烦 并且难以跟踪，并且， 跨越多个代码仓库的测试将迅速变得非常复杂。")]),r._v(" "),a("p",[r._v("为了解决这些（以及许多其它）问题，某些项目会将 代码仓库分割成多个软件包（package），并将每个软件包存放到独立的代码仓库中。但是，例如 Babel、 React、Angular、Ember、Meteor、Jest 等项目以及许多其他项目则是在 一个代码仓库中包含了多个软件包（package）并进行开发。")])]),r._v(" "),a("p",[r._v("你可能会认为除了大型开源项目之外，monorepo 对于小型项目和生产环境的业务项目没有太多价值。但这是错的，前者我在微型工具库 "),a("a",{attrs:{href:"https://github.com/rxliuli/liuli-util",target:"_blank",rel:"noopener noreferrer"}},[r._v("liuli-util"),a("OutboundLink")],1),r._v(" 上进行了实践，确定了它对于维护和使用确实有帮助。而后者，甚至出现了专门为业务项目的 monorepo 工具 "),a("a",{attrs:{href:"https://rushjs.io/pages/intro/why_mono/",target:"_blank",rel:"noopener noreferrer"}},[r._v("@microsoft/rush"),a("OutboundLink")],1),r._v("，微软在 "),a("a",{attrs:{href:"https://github.com/microsoft/rushstack",target:"_blank",rel:"noopener noreferrer"}},[r._v("rushstack"),a("OutboundLink")],1),r._v(" 项目中大规模使用了它。")]),r._v(" "),a("h2",{attrs:{id:"为什么选择-lerna"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-lerna"}},[r._v("#")]),r._v(" 为什么选择 lerna？")]),r._v(" "),a("p",[r._v("那么，有了这么多 monorepo 工具，为什么我们选择 lerna？")]),r._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("lerna"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://rushjs.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("@microsoft/rush"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://yarnpkg.com/features/workspaces",target:"_blank",rel:"noopener noreferrer"}},[r._v("yarn 2"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://pnpm.js.org/en/workspaces",target:"_blank",rel:"noopener noreferrer"}},[r._v("pnpm"),a("OutboundLink")],1)]),r._v(" "),a("li",[a("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/using-npm/workspaces",target:"_blank",rel:"noopener noreferrer"}},[r._v("npm 7"),a("OutboundLink")],1)])]),r._v(" "),a("p",[r._v("其实，除了 lerna 与 @microsoft/rush 之外，其它竞争对手都是包管理器，仅仅只是提供了 workspace 的工作空间，并未提供更高级功能。")]),r._v(" "),a("blockquote",[a("p",[r._v("lerna 和 @microsoft/rush 的 npm 趋势对比参考: "),a("a",{attrs:{href:"https://www.npmtrends.com/lerna-vs-@microsoft/rush",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://www.npmtrends.com/lerna-vs-@microsoft/rush"),a("OutboundLink")],1)])]),r._v(" "),a("p",[r._v("下图是一个对比")]),r._v(" "),a("table",[a("thead",[a("tr",[a("th",[r._v("对比项")]),r._v(" "),a("th",[r._v("lerna")]),r._v(" "),a("th",[r._v("@microsoft/rush")])])]),r._v(" "),a("tbody",[a("tr",[a("td",[r._v("star")]),r._v(" "),a("td",[r._v("26,824")]),r._v(" "),a("td",[r._v("2,392")])]),r._v(" "),a("tr",[a("td",[r._v("周下载")]),r._v(" "),a("td",[r._v("1,155,241")]),r._v(" "),a("td",[r._v("100,386")])]),r._v(" "),a("tr",[a("td",[r._v("使用者")]),r._v(" "),a("td",[r._v("知名开源项目")]),r._v(" "),a("td",[r._v("微软系产品")])])])]),r._v(" "),a("p",[r._v("就吾辈的实际使用体验而言，相比于 lerna，rush 默认包含了更多的东西，而非通过组合一系列可选的工具支持，这增长了相当的门槛。")]),r._v(" "),a("p",[r._v("下面是吾辈对其的一些认知过程")]),r._v(" "),a("ul",[a("li",[r._v("rush.js 是真的感觉很【专业】，限定了很多很多东西")]),r._v(" "),a("li",[a("a",{attrs:{href:"https://rushjs.io/pages/maintainer/setup_policies/",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://rushjs.io/pages/maintainer/setup_policies/"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("像是这里，通过 allowedPackagesPolicy 的方式对 team 中所有开发人员都可以直接引入新的 npm 包做出了限制")]),r._v(" "),a("li",[r._v("唉，rush 比 lerna 复杂多了，做了很多很多的预定义的事情，这就意味着，它对项目维护者（而非开发者）的要求更高")]),r._v(" "),a("li",[r._v("和 ide 没完全集成真痛苦.JPG")]),r._v(" "),a("li",[r._v("吾辈总算明白这些配置为什么是【推荐配置】而不是【默认配置】了，引发的错误太多了（毕竟 npm 包很多并不规范）")]),r._v(" "),a("li",[r._v("rush monorepo 的一个问题是，某些包总喜欢强制指定依赖包的特定版本（例如 react-scripts），而 rush 总是“聪明”的仅安装最新的，导致添加的项目莫名其妙的炸掉")]),r._v(" "),a("li",[r._v("吾辈的锅，它在最后给了方法 "),a("a",{attrs:{href:"https://rushjs.io/pages/advanced/installation_variants/",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://rushjs.io/pages/advanced/installation_variants/"),a("OutboundLink")],1)]),r._v(" "),a("li",[r._v("但一整个进阶主题都是在处理这个问题。。。")]),r._v(" "),a("li",[r._v("算了，吾辈放弃了，rush + pnpm 感觉上维护配置成本太高了，滚回 lerna + yarn 了")])]),r._v(" "),a("blockquote",[a("p",[r._v("rush 在功能、目标和文档方面更好，但现阶段而言还是 lerna 更成熟。")])]),r._v(" "),a("h2",{attrs:{id:"lerna-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lerna-是什么"}},[r._v("#")]),r._v(" lerna 是什么？")]),r._v(" "),a("p",[r._v("简而言之，Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。可以在一个项目中创建多个模块（基本上模块也可以认为是一个项目），并且可以在本地的模块之间互相关联。")]),r._v(" "),a("p",[r._v("lerna 项目的基本结构如下")]),r._v(" "),a("p",[r._v("生产项目")]),r._v(" "),a("ul",[a("li",[r._v("根目录\n"),a("ul",[a("li",[a("code",[r._v("apps")]),r._v(": 生产项目\n"),a("ul",[a("li",[a("code",[r._v("app-1")])]),r._v(" "),a("li",[a("code",[r._v("app-2")])])])]),r._v(" "),a("li",[a("code",[r._v("libs")]),r._v(": 通用模块\n"),a("ul",[a("li",[a("code",[r._v("lib-1")])]),r._v(" "),a("li",[a("code",[r._v("lib-2")])])])]),r._v(" "),a("li",[a("code",[r._v("package.json")])]),r._v(" "),a("li",[a("code",[r._v("lerna.json")])])])])]),r._v(" "),a("p",[r._v("开源库")]),r._v(" "),a("ul",[a("li",[r._v("根目录\n"),a("ul",[a("li",[a("code",[r._v("libs")]),r._v(": 模块根目录\n"),a("ul",[a("li",[a("code",[r._v("lib-1")])]),r._v(" "),a("li",[a("code",[r._v("lib-2")])])])]),r._v(" "),a("li",[a("code",[r._v("package.json")])]),r._v(" "),a("li",[a("code",[r._v("lerna.json")])])])])]),r._v(" "),a("blockquote",[a("p",[r._v("目录的名字灵感来源于 "),a("a",{attrs:{href:"https://github.com/microsoft/rushstack",target:"_blank",rel:"noopener noreferrer"}},[r._v("rushstack"),a("OutboundLink")],1)])]),r._v(" "),a("h2",{attrs:{id:"使用-lerna-的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-lerna-的优点"}},[r._v("#")]),r._v(" 使用 lerna 的优点")]),r._v(" "),a("blockquote",[a("p",[r._v("其中部分优点是 monorepo 固有的优势，但也有 lerna 独有的功能。")])]),r._v(" "),a("ul",[a("li",[r._v("更容易抽离公共代码: 模块之间可以互相引用并且即时生效")]),r._v(" "),a("li",[r._v("更容易统一\n"),a("ul",[a("li",[r._v("项目配置: "),a("code",[r._v("tsconfig.json/prettier.json/git hooks")])]),r._v(" "),a("li",[r._v("管理和发布一系列包: "),a("code",[r._v("lerna publish")])]),r._v(" "),a("li",[r._v("修改依赖立刻生效: "),a("code",[r._v("lerna bootstrap")])]),r._v(" "),a("li",[r._v("依赖版本: 和默认合并不同版本的依赖")]),r._v(" "),a("li",[r._v("文档生成和合并: "),a("code",[r._v("fliegdoc")])]),r._v(" "),a("li",[r._v("代码风格: "),a("code",[r._v("prettier/git hooks")])]),r._v(" "),a("li",[r._v("在一个模块运行另一个模块的命令: "),a("code",[r._v("lerna run <cmd> --scope <pkg>")])]),r._v(" "),a("li",[r._v("打包工具和流程: 封装更适合项目的打包 cli")])])])]),r._v(" "),a("p",[r._v("目前稍微大点的开源项目不是已经转为了 lerna monorepo，就是已经在转换的路上（很像最近流行的使用 typescript 重构库）。包括但不限于以下这些：")]),r._v(" "),a("p",[a("img",{attrs:{src:t(358),alt:"1614158368615"}})]),r._v(" "),a("blockquote",[a("p",[r._v("吾辈目前使用的笔记工具 Joplin 也在去年使用 lerna 重构了，参考："),a("a",{attrs:{href:"https://github.com/laurent22/joplin/pull/4039",target:"_blank",rel:"noopener noreferrer"}},[r._v("Lerna migration"),a("OutboundLink")],1),r._v("。")])]),r._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[r._v("#")]),r._v(" 其他")]),r._v(" "),a("h3",{attrs:{id:"根据依赖图并行运行-npm-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据依赖图并行运行-npm-命令"}},[r._v("#")]),r._v(" 根据依赖图并行运行 npm 命令")]),r._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[r._v("lerna run "),a("span",{pre:!0,attrs:{class:"token operator"}},[r._v("<")]),r._v("npm script"),a("span",{pre:!0,attrs:{class:"token operator"}},[r._v(">")]),r._v(" --include-dependencies --stream\n")])])]),a("blockquote",[a("p",[r._v("参考: "),a("a",{attrs:{href:"https://github.com/lerna/lerna/blob/main/commands/run/README.md#--stream",target:"_blank",rel:"noopener noreferrer"}},[r._v("--stream"),a("OutboundLink")],1),r._v(" 和 "),a("a",{attrs:{href:"https://github.com/lerna/lerna/blob/main/core/filter-options/README.md#--include-dependencies",target:"_blank",rel:"noopener noreferrer"}},[r._v("--include-dependencies"),a("OutboundLink")],1)])]),r._v(" "),a("h3",{attrs:{id:"git-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-规范"}},[r._v("#")]),r._v(" git 规范")]),r._v(" "),a("p",[r._v("在单体项目中，只需要简单的分为 dev/master 即可开发，但在 monorepo 中，可能存在多个 apps，这种时候，简单的 dev/master 策略便不太好用了，主要原因是")]),r._v(" "),a("ul",[a("li",[r._v("dev 包含了所有的开发阶段的代码，所以合并的时候会合并到不希望合并的其他 apps 的修改")]),r._v(" "),a("li",[r._v("提交记录看不出来是哪个分支的")])]),r._v(" "),a("blockquote",[a("p",[r._v("吾辈的个人项目 "),a("a",{attrs:{href:"https://github.com/rxliuli/joplin-utils",target:"_blank",rel:"noopener noreferrer"}},[r._v("joplin-utils"),a("OutboundLink")],1),r._v(" 就面临这种问题。")])]),r._v(" "),a("p",[r._v("下面是吾辈的一些想法，目前还正在实践中")]),r._v(" "),a("ul",[a("li",[r._v("规范化分支\n"),a("ul",[a("li",[r._v("master: 生产环境分支，任何时候都应该是可部署的")]),r._v(" "),a("li",[r._v("dev: 指代正在开发环境进行测试的功能")]),r._v(" "),a("li",[a("code",[r._v("feat-*")]),r._v(": 正在开发的功能分支")]),r._v(" "),a("li",[a("code",[r._v("fix-*")]),r._v(": 修复线上 bug 的分支")])])]),r._v(" "),a("li",[r._v("规范化流程\n"),a("ul",[a("li",[r._v("分支一定是从 master 拉取")]),r._v(" "),a("li",[r._v("分支一定是合并到 dev 测试")]),r._v(" "),a("li",[r._v("分支一定是合并到 master 部署生产")])])]),r._v(" "),a("li",[r._v("规范化提交信息\n"),a("ul",[a("li",[r._v("基本采用 "),a("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"}},[r._v("commitlint"),a("OutboundLink")],1),r._v(" 控制提交格式，包括 "),a("strong",[r._v("类型(模块): 提交说明")])])])])]),r._v(" "),a("h3",{attrs:{id:"模块规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块规范"}},[r._v("#")]),r._v(" 模块规范")]),r._v(" "),a("ul",[a("li",[r._v("目录\n"),a("ul",[a("li",[a("code",[r._v("apps")]),r._v(": 最终用户可以使用的程序或 cli")]),r._v(" "),a("li",[a("code",[r._v("libs")]),r._v(": 一些依赖项，根据需要发布到 npm")]),r._v(" "),a("li",[a("code",[r._v("examples")]),r._v(": 一些示例项目")])])]),r._v(" "),a("li",[r._v("scripts\n"),a("ul",[a("li",[a("code",[r._v("setup")]),r._v(": 项目初始化的一些脚本")]),r._v(" "),a("li",[a("code",[r._v("dev")]),r._v(": 开发阶段运行的脚本")]),r._v(" "),a("li",[a("code",[r._v("build")]),r._v(": 打包代码")]),r._v(" "),a("li",[a("code",[r._v("docs:dev")]),r._v(": 启动本地文档预览服务")]),r._v(" "),a("li",[a("code",[r._v("docs:build")]),r._v(": 将文档捆绑为静态文件")]),r._v(" "),a("li",[a("code",[r._v("docs:deploy")]),r._v(": 部署文档到线上")])])])]),r._v(" "),a("h3",{attrs:{id:"rollup-捆绑-monorepo-仍然存在错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup-捆绑-monorepo-仍然存在错误"}},[r._v("#")]),r._v(" rollup 捆绑 monorepo 仍然存在错误")]),r._v(" "),a("p",[r._v("目前 rollup + node-resolve 插件捆绑本地依赖时仍然存在一些问题，参考："),a("a",{attrs:{href:"https://github.com/rollup/plugins/issues/743",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://github.com/rollup/plugins/issues/743"),a("OutboundLink")],1),r._v("，目前的替代方案是 "),a("a",{attrs:{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("esbuild"),a("OutboundLink")],1),r._v("。")]),r._v(" "),a("h3",{attrs:{id:"有时候会始终无法安装正确的版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有时候会始终无法安装正确的版本"}},[r._v("#")]),r._v(" 有时候会始终无法安装正确的版本")]),r._v(" "),a("p",[r._v("例如在 package.json 中声明了依赖")]),r._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("{")]),r._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[r._v('"rollup"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[r._v('"^2.51.0"')]),r._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[r._v("// 实际安装的可能是 2.50.6")]),r._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("}")]),r._v("\n")])])]),a("p",[a("img",{attrs:{src:t(359),alt:"1622999313766"}})]),r._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),a("p",[r._v("使用 lerna 虽然会增加一些复杂度，但带来的优点仍然是超过缺点的。")]),r._v(" "),a("blockquote",[a("p",[r._v("吾辈之所以相信 monorepo 会成为主流的原因是后端已经使用了这么多年的 maven/gradle，如果真的有什么问题，那不会直到现在还在使用。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);