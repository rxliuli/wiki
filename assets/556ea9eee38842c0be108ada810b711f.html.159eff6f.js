import{r as n,o as a,c as s,a as e,F as l,b as o,d as r}from"./app.9c7fb106.js";const t={},c=e("h2",{id:"动机",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#动机","aria-hidden":"true"},"#"),o(" 动机")],-1),p=e("li",null,"不再同时使用两个 monorepo 管理工具，或者说将 monorepo 功能整合到 yarn 里（新的依赖管理工具 npm7/pnpm/rush 都是这样干的），专注于增强 yarn（yarn.build 是一个不错的例子）",-1),i=e("li",null,"使用 yarn2 逐渐发展的生态（yarn1 基本没什么更新了）",-1),u=o("lerna 的高级功能不太好用，主要是 "),k=e("code",null,"lerna run",-1),d=o(" 不支持缓存导致每次重新构建会很烦 -- 考虑使用 ultra 支持，但 yarn2 似乎有插件可以支持，参考: "),b={href:"https://github.com/yarnpkg/berry/issues/2374",target:"_blank",rel:"noopener noreferrer"},h=o("https://github.com/yarnpkg/berry/issues/2374"),m=o("yarn2 不需要使用 "),y=e("code",null,"lerna clean -y && lerna bootstrap",-1),g=o(" 来将动态构建的 cli 写入到 "),f=e("code",null,"node_modules/.bin",-1),w=o("，它查找 "),x=e("code",null,"cli",-1),v=o(" 的方式发生了变化（完全动态化），参考 "),j={href:"https://yarnpkg.com/getting-started/migration#call-binaries-using-yarn-run-rather-than-node_modulesbin",target:"_blank",rel:"noopener noreferrer"},C=o("https://yarnpkg.com/getting-started/migration#call-binaries-using-yarn-run-rather-than-node_modulesbin"),N=e("ul",null,[e("li",null,[o("该优化大约能将每个 cli 的构建时间从 40s 降低至 10s 内，之前大部分时间都是写入 "),e("code",null,"node_modules/.bin")])],-1),Y=e("h2",{id:"如何使用类似于-lerna-run-exec-之类的命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何使用类似于-lerna-run-exec-之类的命令","aria-hidden":"true"},"#"),o(" 如何使用类似于 lerna run/exec 之类的命令")],-1),_=e("ol",null,[e("li",null,[o("使用 workspaces 插件 "),e("code",null,"yarn plugin import @yarnpkg/plugin-workspace-tools")]),e("li",null,[o("使用 "),e("code",null,"yarn workspaces foreach"),o(" 在所有模块执行命令")])],-1),P=e("p",null,"下面是在所有模块中按照依赖顺序尽可能地并行构建包",-1),U=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),o(" workspaces foreach -p --topological-dev run build\n"),e("span",{class:"token comment"},"# 或删除所有 dist"),o("\n"),e("span",{class:"token function"},"yarn"),o(" workspaces foreach -p "),e("span",{class:"token builtin class-name"},"exec"),o(" rimraf dist\n"),e("span",{class:"token comment"},"# 如果希望删除 node_modules，则需要使用 yarn dlx"),o("\n"),e("span",{class:"token function"},"yarn"),o(" workspaces foreach -p "),e("span",{class:"token builtin class-name"},"exec"),o(),e("span",{class:"token function"},"yarn"),o(" dlx rimraf node_modules\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br")])],-1),q=e("h2",{id:"如何像-lerna-publish-更新所有模块的版本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何像-lerna-publish-更新所有模块的版本","aria-hidden":"true"},"#"),o(" 如何像 lerna publish 更新所有模块的版本")],-1),D=e("p",null,[o("升级全部模块目前可以使用 "),e("code",null,"yarn workspaces foreach"),o(" 模拟 "),e("code",null,"lerna publish"),o("，但对于独立模式则是另外一套完全不同的模式了。")],-1),F=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),o(" workspaces foreach "),e("span",{class:"token builtin class-name"},"exec"),o(),e("span",{class:"token function"},"yarn"),o(" version patch\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),L=e("p",null,"缺点是无法按照是否修改决定是否发布新版本。。。",-1),A=e("p",null,"发布所有包",-1),E=e("blockquote",null,[e("p",null,[e("code",null,"yarn npm publish"),o(" 仍有 bug，所以只能直接 "),e("code",null,"npm publish"),o(" 了")])],-1),$=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),o(" workspaces foreach -A --no-private "),e("span",{class:"token builtin class-name"},"exec"),o(),e("span",{class:"token function"},"npm"),o(" publish\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),T=e("blockquote",null,[e("p",null,"感觉还是需要实现缓存的功能，只是将缓存文件加到 git 而已。考虑到不是所有命令都需要，也许可以使用缓存目录。")],-1),M=e("h2",{id:"如果包含-cli-子模块怎么办",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如果包含-cli-子模块怎么办","aria-hidden":"true"},"#"),o(" 如果包含 cli 子模块怎么办？")],-1),R=e("p",null,[o("打包完成之后 "),e("code",null,"yarn"),o(" 安装即可，yarn 会负责将命令写入到依赖的其他子模块的 "),e("em",null,"node_modules/.bin/"),o(" 中。")],-1),S=e("h2",{id:"编写插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编写插件","aria-hidden":"true"},"#"),o(" 编写插件")],-1),W={href:"https://yarnpkg.com/advanced/plugin-tutorial",target:"_blank",rel:"noopener noreferrer"},B=o("插件教程文档"),G=e("p",null,[e("img",{src:"/assets/cf84da80c9d143cdb4163cc7a1d34fb4.0c729548.svg",alt:"monorepo 构建.drawio.svg"})],-1),O=e("h2",{id:"问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题","aria-hidden":"true"},"#"),o(" 问题")],-1),Z=r("<li>不能使用 lerna 那种拼接脚本的方式，即将 <code>lerna run --include-dependencies --stream</code> 放在 <code>stream</code> 脚本，然后使用 <code>yarn stream &lt;cmd&gt;</code> 拼接命令的形式。</li><li>不确定 yarn 是否包含 <code>lerna publish</code> 那种自动检测和批量发布的命令 -- 支持不太好用</li><li>不确定 yarn 是否有类似于 <code>rush/nx</code> 的构建缓存功能 -- 没有原生支持，两个插件也都有各自的问题</li><li>概念太多实在太麻烦了，各种奇怪的问题 <ul><li><code>yarn npm publish</code> 会说权限错误，但实际上 <code>yarn npm login</code> 已经成功了，文档上说可以配置 <code>npmAuthToken</code>，但这是不合理的（将 token 加到 git 管理中）</li><li><code>yarn workspaces foreach exec yarn jest --all</code> 会报一个错误</li></ul></li>",4),z=o("对于 yarn2 pnp，目前 webstorm 仍然只有非常基本的支持，包括 prettier/jest 都存在问题，参考："),I={href:"https://youtrack.jetbrains.com/issue/WEB-35034",target:"_blank",rel:"noopener noreferrer"},H=o("https://youtrack.jetbrains.com/issue/WEB-35034"),J=o("yarn 2 的社区接受度似乎极低，github 上依赖它的库不超过 100 个，参考："),K={href:"https://github.com/yarnpkg/berry/network/dependents?package_id=UGFja2FnZS03MDE5NDg3MjU%3D",target:"_blank",rel:"noopener noreferrer"},Q=o("https://github.com/yarnpkg/berry/network/dependents?package_id=UGFja2FnZS03MDE5NDg3MjU%3D"),V=o(" -- 实际上这是错的，由于 yarn2 不在 package.json 中声明而已，目前 storybook 等流行库也升级了 yarn2，但它们也混用 lerna 和 nx。。。"),X=e("li",null,[o("无法使用 "),e("code",null,"patch-package"),o("，但可以使用 "),e("code",null,"yarn patch"),o(" 命令。。。")],-1),nn=e("h2",{id:"其他优点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他优点","aria-hidden":"true"},"#"),o(" 其他优点")],-1),an=e("ul",null,[e("li",null,"原生支持 workspaces"),e("li",null,"有插件 api，可以为自定义需求编写插件"),e("li",null,[o("cli 命令执行不再强绑定到 "),e("em",null,"node_modules/.bin")]),e("li",null,[o("重新安装依赖时时不需要停止 "),e("code",null,"vite dev"),o("（目前无法安装成功）")])],-1),sn=e("h2",{id:"编写插件之后应该怎么在本地测试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编写插件之后应该怎么在本地测试","aria-hidden":"true"},"#"),o(" 编写插件之后应该怎么在本地测试？")],-1),en=e("ol",null,[e("li",null,[e("p",null,"单元测试"),e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token keyword"},"const"),o(" dir "),e("span",{class:"token operator"},"="),o(" npath"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"toPortablePath"),e("span",{class:"token punctuation"},"("),o("path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"resolve"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'""'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o("\n"),e("span",{class:"token keyword"},"const"),o(" configuration "),e("span",{class:"token operator"},"="),o(),e("span",{class:"token keyword"},"await"),o(" Configuration"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"create"),e("span",{class:"token punctuation"},"("),o("dir"),e("span",{class:"token punctuation"},","),o(" dir"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),o("\n"),e("span",{class:"token keyword"},"const"),o(" project "),e("span",{class:"token operator"},"="),o(),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"await"),o(" Project"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"find"),e("span",{class:"token punctuation"},"("),o("configuration"),e("span",{class:"token punctuation"},","),o(" dir"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),o("project"),e("span",{class:"token punctuation"},";"),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])])]),e("li",null,[e("p",null,[e("code",null,"yarn plugin import <>")])])],-1),ln=e("h2",{id:"yarn-workspace-有办法包含一个不在-workspace-管理的子目录么",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yarn-workspace-有办法包含一个不在-workspace-管理的子目录么","aria-hidden":"true"},"#"),o(" yarn workspace 有办法包含一个不在 workspace 管理的子目录么？")],-1),on=e("p",null,"例如项目可能有一个 website 目录用以存放网站的文档，而又不希望将之放到 yarn workspace 管理（有可能是不同的技术栈，例如 vuepress）。",-1),rn=e("p",null,[o("在 "),e("code",null,"workspace"),o(" 字段中排除，然后在目录中添加空的 "),e("code",null,"yarn.lock"),o(" 文件")],-1),tn=e("h2",{id:"npmrc-yarnrc-yml",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#npmrc-yarnrc-yml","aria-hidden":"true"},"#"),o(" npmrc => yarnrc.yml")],-1),cn=e("h2",{id:"yarn2-在-monorepo-中根模块无法直接-import-子模块的-yarn-插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yarn2-在-monorepo-中根模块无法直接-import-子模块的-yarn-插件","aria-hidden":"true"},"#"),o(" yarn2 在 monorepo 中根模块无法直接 import 子模块的 yarn 插件")],-1),pn={href:"https://github.com/rxliuli/liuli-tools",target:"_blank",rel:"noopener noreferrer"},un=o("复现仓库"),kn=e("p",null,"复现步骤",-1),dn=e("ol",null,[e("li",null,[e("code",null,"yarn && yarn setup"),o(" 安装依赖及初始化")]),e("li",null,[e("code",null,"cd libs/yarn-plugin-changed && yarn build"),o(" 打包插件")]),e("li",null,[e("code",null,"cd ../.. && yarn plugin import libs/yarn-plugin-changed/bundles/\\@yarnpkg/plugin-changed.js"),o(" 回到根目录安装插件")]),e("li",null,"得到错误")],-1),bn=e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[o("$ yarn plugin "),e("span",{class:"token keyword"},"import"),o(" libs"),e("span",{class:"token operator"},"/"),o("yarn"),e("span",{class:"token operator"},"-"),o("plugin"),e("span",{class:"token operator"},"-"),o("changed"),e("span",{class:"token operator"},"/"),o("bundles"),e("span",{class:"token operator"},"/"),o("\\@yarnpkg"),e("span",{class:"token operator"},"/"),o("plugin"),e("span",{class:"token operator"},"-"),o("changed"),e("span",{class:"token punctuation"},"."),o("js\n➤ "),e("span",{class:"token constant"},"YN0001"),e("span",{class:"token operator"},":"),o(" Error"),e("span",{class:"token operator"},":"),o(" Invalid "),e("span",{class:"token function"},"locator"),o(),e("span",{class:"token punctuation"},"("),o("@yarnpkg"),e("span",{class:"token operator"},"/"),o("plugin"),e("span",{class:"token operator"},"-"),o("libs"),e("span",{class:"token operator"},"/"),o("yarn"),e("span",{class:"token operator"},"-"),o("plugin"),e("span",{class:"token operator"},"-"),o("changed"),e("span",{class:"token operator"},"/"),o("bundles"),e("span",{class:"token operator"},"/"),o("@yarnpkg"),e("span",{class:"token operator"},"/"),o("plugin"),e("span",{class:"token operator"},"-"),o("changed"),e("span",{class:"token punctuation"},"."),o("js"),e("span",{class:"token punctuation"},")"),o("\n    at Object"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"hA"),o(),e("span",{class:"token punctuation"},"("),e("span",{class:"token constant"},"C"),e("span",{class:"token operator"},":"),o("\\Users\\rxliuli\\Code\\Pkg\\liuli"),e("span",{class:"token operator"},"-"),o("tools\\"),e("span",{class:"token punctuation"},"."),o("yarn\\releases\\yarn"),e("span",{class:"token operator"},"-"),o("berry"),e("span",{class:"token punctuation"},"."),o("cjs"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"242"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"12395"),e("span",{class:"token punctuation"},")"),o("\n    at "),e("span",{class:"token constant"},"C"),e("span",{class:"token operator"},":"),o("\\Users\\rxliuli\\Code\\Pkg\\liuli"),e("span",{class:"token operator"},"-"),o("tools\\"),e("span",{class:"token punctuation"},"."),o("yarn\\releases\\yarn"),e("span",{class:"token operator"},"-"),o("berry"),e("span",{class:"token punctuation"},"."),o("cjs"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"387"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"1702"),o("\n    at "),e("span",{class:"token keyword"},"async"),o(" Function"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"start"),o(),e("span",{class:"token punctuation"},"("),e("span",{class:"token constant"},"C"),e("span",{class:"token operator"},":"),o("\\Users\\rxliuli\\Code\\Pkg\\liuli"),e("span",{class:"token operator"},"-"),o("tools\\"),e("span",{class:"token punctuation"},"."),o("yarn\\releases\\yarn"),e("span",{class:"token operator"},"-"),o("berry"),e("span",{class:"token punctuation"},"."),o("cjs"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"275"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"2287"),e("span",{class:"token punctuation"},")"),o("\n    at "),e("span",{class:"token keyword"},"async"),o(" Rp"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"execute"),o(),e("span",{class:"token punctuation"},"("),e("span",{class:"token constant"},"C"),e("span",{class:"token operator"},":"),o("\\Users\\rxliuli\\Code\\Pkg\\liuli"),e("span",{class:"token operator"},"-"),o("tools\\"),e("span",{class:"token punctuation"},"."),o("yarn\\releases\\yarn"),e("span",{class:"token operator"},"-"),o("berry"),e("span",{class:"token punctuation"},"."),o("cjs"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"387"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"1110"),e("span",{class:"token punctuation"},")"),o("\n    at "),e("span",{class:"token keyword"},"async"),o(" Rp"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"validateAndExecute"),o(),e("span",{class:"token punctuation"},"("),e("span",{class:"token constant"},"C"),e("span",{class:"token operator"},":"),o("\\Users\\rxliuli\\Code\\Pkg\\liuli"),e("span",{class:"token operator"},"-"),o("tools\\"),e("span",{class:"token punctuation"},"."),o("yarn\\releases\\yarn"),e("span",{class:"token operator"},"-"),o("berry"),e("span",{class:"token punctuation"},"."),o("cjs"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"197"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"620"),e("span",{class:"token punctuation"},")"),o("\n    at "),e("span",{class:"token keyword"},"async"),o(" ts"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"run"),o(),e("span",{class:"token punctuation"},"("),e("span",{class:"token constant"},"C"),e("span",{class:"token operator"},":"),o("\\Users\\rxliuli\\Code\\Pkg\\liuli"),e("span",{class:"token operator"},"-"),o("tools\\"),e("span",{class:"token punctuation"},"."),o("yarn\\releases\\yarn"),e("span",{class:"token operator"},"-"),o("berry"),e("span",{class:"token punctuation"},"."),o("cjs"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"211"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"1846"),e("span",{class:"token punctuation"},")"),o("\n    at "),e("span",{class:"token keyword"},"async"),o(" ts"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"runExit"),o(),e("span",{class:"token punctuation"},"("),e("span",{class:"token constant"},"C"),e("span",{class:"token operator"},":"),o("\\Users\\rxliuli\\Code\\Pkg\\liuli"),e("span",{class:"token operator"},"-"),o("tools\\"),e("span",{class:"token punctuation"},"."),o("yarn\\releases\\yarn"),e("span",{class:"token operator"},"-"),o("berry"),e("span",{class:"token punctuation"},"."),o("cjs"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"211"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"2013"),e("span",{class:"token punctuation"},")"),o("\n    at "),e("span",{class:"token keyword"},"async"),o(),e("span",{class:"token function"},"i"),o(),e("span",{class:"token punctuation"},"("),e("span",{class:"token constant"},"C"),e("span",{class:"token operator"},":"),o("\\Users\\rxliuli\\Code\\Pkg\\liuli"),e("span",{class:"token operator"},"-"),o("tools\\"),e("span",{class:"token punctuation"},"."),o("yarn\\releases\\yarn"),e("span",{class:"token operator"},"-"),o("berry"),e("span",{class:"token punctuation"},"."),o("cjs"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"310"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"12327"),e("span",{class:"token punctuation"},")"),o("\n    at "),e("span",{class:"token keyword"},"async"),o(),e("span",{class:"token function"},"r"),o(),e("span",{class:"token punctuation"},"("),e("span",{class:"token constant"},"C"),e("span",{class:"token operator"},":"),o("\\Users\\rxliuli\\Code\\Pkg\\liuli"),e("span",{class:"token operator"},"-"),o("tools\\"),e("span",{class:"token punctuation"},"."),o("yarn\\releases\\yarn"),e("span",{class:"token operator"},"-"),o("berry"),e("span",{class:"token punctuation"},"."),o("cjs"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"310"),e("span",{class:"token operator"},":"),e("span",{class:"token number"},"10567"),e("span",{class:"token punctuation"},")"),o("\n➤ "),e("span",{class:"token constant"},"YN0000"),e("span",{class:"token operator"},":"),o(" Failed "),e("span",{class:"token keyword"},"with"),o(" errors "),e("span",{class:"token keyword"},"in"),o(),e("span",{class:"token number"},"0"),o("s "),e("span",{class:"token number"},"133"),o("ms\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br")])],-1),hn=e("p",null,"答案",-1),mn=e("p",null,"必须使用 . 开头的相对路径",-1),yn={href:"https://github.com/yarnpkg/berry/issues/3331#issuecomment-903615924",target:"_blank",rel:"noopener noreferrer"},gn=o("github issue"),fn=e("h2",{id:"yarn-插件打包后在-bundles-yarnpkg-下而非我们的组织名下面",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yarn-插件打包后在-bundles-yarnpkg-下而非我们的组织名下面","aria-hidden":"true"},"#"),o(" yarn 插件打包后在 bundles/@yarnpkg 下而非我们的组织名下面")],-1),wn=e("p",null,[o("同样是在编写 yarn 插件时遇到的错误，在我们使用 yarn plugin import 安装插件之后，才发现安装的目录是 "),e("em",null,".yarn/plugins/@yarnpkg/plugin-changed.cjs"),o("，这似乎有些不对，因为我们的项目名是 "),e("code",null,"@liuli-util/yarn-plugin-changed"),o("。还是我遗漏了什么配置？")],-1),xn=e("p",null,"复现步骤",-1),vn=e("p",null,"现有的包是怎么做的？",-1),jn={href:"https://github.com/ojkelly/yarn.build/blob/trunk/packages/plugins/plugin-build/package.json#L46-L47",target:"_blank",rel:"noopener noreferrer"},Cn=o("yarn.build"),Nn=o(": 使用系统命令手动移动文件，同时替换打包之后的 name 字段"),Yn=e("p",null,"答案",-1),_n=e("p",null,"是 bundler 刻意的行为，无法直接改变。。。",-1),Pn=e("h2",{id:"获取系统信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取系统信息","aria-hidden":"true"},"#"),o(" 获取系统信息")],-1),Un=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,"npx envinfo --preset jest\n")]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),qn=e("h2",{id:"使用-yarn-patch-制作本地补丁包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-yarn-patch-制作本地补丁包","aria-hidden":"true"},"#"),o(" 使用 yarn patch 制作本地补丁包")],-1),Dn={href:"https://yarnpkg.com/cli/patch",target:"_blank",rel:"noopener noreferrer"},Fn=o("官方文档 yarn patch"),Ln=e("p",null,"动机",-1),An=e("p",null,[o("主要是处理一些 npm 模块可能存在小问题但又来不及提 PR 的情况下，在本地修改并生成 git patch 文件，在每次 "),e("code",null,"yarn install"),o(" 时合并这些 patch。")],-1),En=e("p",null,"使用步骤",-1),$n=e("ol",null,[e("li",null,[o("使用 "),e("code",null,"yarn patch winbox"),o(" 生成临时目录")]),e("li",null,"修改目录中的文件"),e("li",null,[o("提交修改并生成 patch "),e("code",null,'yarn patch-commit "C:\\Users\\rxliuli\\AppData\\Local\\Temp\\xfs-f35b52d4\\user" -s'),o("，保存位置在 "),e("em",null,".yarn/patches/")]),e("li",null,[o("修改 package.json 使用 patch 协议 "),e("code",null,'{ "winbox": "patch:winbox@0.2.0#../../../.yarn/patches/winbox-npm-0.2.0-8ddb0784dd" }')]),e("li",null,[o("重新安装依赖 "),e("code",null,"yarn")])],-1),Tn=o("patch-package 目前无法在 yarn2 workspaces 下正常使用，参考："),Mn={href:"https://github.com/ds300/patch-package/issues/132",target:"_blank",rel:"noopener noreferrer"},Rn=o("https://github.com/ds300/patch-package/issues/132"),Sn=e("h2",{id:"yarn-pack-会忽略-gitignore",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yarn-pack-会忽略-gitignore","aria-hidden":"true"},"#"),o(" yarn pack 会忽略 .gitignore")],-1),Wn=o("官方将之写死到代码里了，参考: "),Bn={href:"https://github.com/yarnpkg/berry/blob/7ae458b8165ad53a8ef9db0060cbb6de73305768/packages/plugin-pack/sources/packUtils.ts#L26-L39",target:"_blank",rel:"noopener noreferrer"},Gn=o("https://github.com/yarnpkg/berry/blob/7ae458b8165ad53a8ef9db0060cbb6de73305768/packages/plugin-pack/sources/packUtils.ts#L26-L39"),On=e("p",null,"是的，yarn pack 永远会忽略它，如果需要，可能需要将之打包到 js 代码里，然后在 postinstall 时写入文件（虽然会炸掉 yarn2 pnp 模式就是了）",-1),Zn=e("h2",{id:"运行初始化命令但卡死了",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#运行初始化命令但卡死了","aria-hidden":"true"},"#"),o(" 运行初始化命令但卡死了")],-1),zn=e("p",null,"可能会报下面这个错",-1),In=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[o("The "),e("span",{class:"token builtin class-name"},"command"),o(" failed "),e("span",{class:"token keyword"},"for"),o(" workspaces that are depended upon by other workspaces"),e("span",{class:"token punctuation"},";"),o(" can't satisfy the dependency graph\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),Hn=e("p",null,[o("检查运行的命令中是否包含递归调用，即在 "),e("code",null,"setup"),o(" 命令中调用了 "),e("code",null,"setup"),o(" 命令")],-1),Jn=e("blockquote",null,[e("p",null,"需要开发类似 yarn.build 的 cli，可以更好的看到到底是哪个模块运行命令卡住了，可以统计一共用了多长时间。")],-1),Kn=e("p",null,"也有可能是其中部分模块运行命令失败，但并未返回 code 1。",-1),Qn=e("h2",{id:"如何更新所有依赖的版本为最新",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何更新所有依赖的版本为最新","aria-hidden":"true"},"#"),o(" 如何更新所有依赖的版本为最新")],-1),Vn=o("众所周知，yarn1 提供了 "),Xn=e("code",null,"yarn ugprade --latest",-1),na=o(" 来更新所有版本至最新，但 yarn2 不存在这个命令，唯一的官方插件 "),aa={href:"https://yarnpkg.com/cli/upgrade-interactive",target:"_blank",rel:"noopener noreferrer"},sa=o("upgrade-interactive"),ea=o(" 是需要在交互式 cli 中选择，而且还在使用代理时存在 bug。"),la=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),o(" dlx npm-check-updates -u "),e("span",{class:"token operator"},"&&"),o(),e("span",{class:"token function"},"yarn"),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),oa=e("h2",{id:"yarn-插件没有版本的概念",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yarn-插件没有版本的概念","aria-hidden":"true"},"#"),o(" yarn 插件没有版本的概念")],-1),ra=e("p",null,"例如现在当我的 yarn 版本是 2，引入 workspaces 插件就会报错。。。它总会下载最新版本的插件",-1),ta=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[o("Usage Error: This plugin cannot access the package referenced via typanion "),e("span",{class:"token function"},"which"),o(" is neither a builtin, nor an exposed entry "),e("span",{class:"token punctuation"},"("),o("when initializing @yarnpkg/plugin-workspace-tools, defined "),e("span",{class:"token keyword"},"in"),o(" /C:/Users/rxliuli/Code/Web/demo/yarn2-error/.yarnrc.yml"),e("span",{class:"token punctuation"},")"),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),ca=e("h2",{id:"yarn-workspaces-的-topological-dev-参数未生效",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yarn-workspaces-的-topological-dev-参数未生效","aria-hidden":"true"},"#"),o(" yarn workspaces 的 "),e("code",null,"--topological-dev"),o(" 参数未生效")],-1),pa={href:"https://github.com/rxliuli/yarn2-workspaces-error",target:"_blank",rel:"noopener noreferrer"},ia=o("示例 github 仓库"),ua=e("p",null,[o("当我使用 "),e("code",null,"--topological-dev"),o(" 参数时，它并不会正常按照依赖顺序运行")],-1),ka=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[o("$ "),e("span",{class:"token function"},"yarn"),o(" workspaces foreach -v -p --topological-dev run setup\n➤ YN0000: "),e("span",{class:"token punctuation"},"["),o("a"),e("span",{class:"token punctuation"},"]"),o(": Process started\n➤ YN0000: "),e("span",{class:"token punctuation"},"["),o("b"),e("span",{class:"token punctuation"},"]"),o(": Process started\n➤ YN0000: "),e("span",{class:"token punctuation"},"["),o("a"),e("span",{class:"token punctuation"},"]"),o(": a\n➤ YN0000: "),e("span",{class:"token punctuation"},"["),o("a"),e("span",{class:"token punctuation"},"]"),o(": Process exited "),e("span",{class:"token punctuation"},"("),o("exit code "),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},")"),o(", completed "),e("span",{class:"token keyword"},"in"),o(" 0s 88ms\n➤ YN0000: "),e("span",{class:"token punctuation"},"["),o("b"),e("span",{class:"token punctuation"},"]"),o(": b\n➤ YN0000: "),e("span",{class:"token punctuation"},"["),o("b"),e("span",{class:"token punctuation"},"]"),o(": Process exited "),e("span",{class:"token punctuation"},"("),o("exit code "),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},")"),o(", completed "),e("span",{class:"token keyword"},"in"),o(" 0s 82ms\n➤ YN0000: Done "),e("span",{class:"token keyword"},"in"),o(" 0s 101ms\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br")])],-1),da=e("p",null,"这似乎是一个回归错误，只有 yarn3 才会出现，目前无法使用 yarn2 安装 workspaces 插件，这是另一个错误。",-1),ba=e("p",null,"复现步骤",-1),ha=e("ol",null,[e("li",null,[e("code",null,"git clone https://github.com/rxliuli/yarn2-workspaces-error.git")]),e("li",null,[e("code",null,"cd yarn2-workspaces-error")]),e("li",null,[e("code",null,"yarn")]),e("li",null,[e("code",null,"yarn workspaces foreach -v -p --topological-dev run setup")])],-1),ma={href:"https://github.com/yarnpkg/berry/issues/3475",target:"_blank",rel:"noopener noreferrer"},ya=o("github issue"),ga=e("h2",{id:"yarn-install-link-step-很慢",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yarn-install-link-step-很慢","aria-hidden":"true"},"#"),o(" yarn install link step 很慢")],-1),fa=e("p",null,"在没有任何变化的情况使用 yarn 重新安装依赖仍然要很久，我不确定发生了什么，我们有 30 个模块，还包含嵌套的 workspace。",-1),wa=e("p",null,"下面是输出",-1),xa=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[o("➤ YN0000: │ Some peer dependencies are incorrectly met"),e("span",{class:"token punctuation"},";"),o(" run "),e("span",{class:"token function"},"yarn"),o(" explain peer-requirements "),e("span",{class:"token operator"},"<"),o("hash"),e("span",{class:"token operator"},">"),o(),e("span",{class:"token keyword"},"for"),o(" details, where "),e("span",{class:"token operator"},"<"),o("hash"),e("span",{class:"token operator"},">"),o(" is the six-letter p-prefixed code\n➤ YN0000: └ Completed "),e("span",{class:"token keyword"},"in"),o(" 0s 480ms\n➤ YN0000: ┌ Fetch step\n➤ YN0000: └ Completed "),e("span",{class:"token keyword"},"in"),o(" 2s 765ms\n➤ YN0000: ┌ Link step\n➤ YN0062: │ fsevents@patch:fsevents@npm%3A2.3.2"),e("span",{class:"token comment"},"#~builtin<compat/fsevents>::version=2.3.2&hash=1cc4b2 The platform win32 is incompatible with this module, link skipped."),o("\n➤ YN0062: │ fsevents@patch:fsevents@npm%3A1.2.13"),e("span",{class:"token comment"},"#~builtin<compat/fsevents>::version=1.2.13&hash=1cc4b2 The platform win32 is incompatible with this module, link skipped."),o("\n➤ YN0000: └ Completed "),e("span",{class:"token keyword"},"in"),o(" 38s 348ms\n➤ YN0000: Done with warnings "),e("span",{class:"token keyword"},"in"),o(" 41s 807ms\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br")])],-1),va={href:"https://github.com/yarnpkg/berry/issues/3476",target:"_blank",rel:"noopener noreferrer"},ja=o("github issue"),Ca=e("p",null,"看起来像是因为嵌套 workspace 引起的，有一个 PR 正在尝试修复这个问题。",-1),Na=e("h2",{id:"如何在-monorepo-中执行指定脚本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何在-monorepo-中执行指定脚本","aria-hidden":"true"},"#"),o(" 如何在 monorepo 中执行指定脚本")],-1),Ya=e("p",null,"有时候想在所有模块运行脚本做一些批量迁移的工作",-1),_a=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),o(" i -g esno\n"),e("span",{class:"token function"},"yarn"),o(" workspaces foreach -pvA "),e("span",{class:"token builtin class-name"},"exec"),o(),e("span",{class:"token string"},'"esno <脚本绝对路径>"'),o("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),Pa=e("h2",{id:"yarn-如何全局安装-monorepo-项目中包含私有模块依赖的-cli-模块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yarn-如何全局安装-monorepo-项目中包含私有模块依赖的-cli-模块","aria-hidden":"true"},"#"),o(" yarn 如何全局安装 monorepo 项目中包含私有模块依赖的 cli 模块")],-1),Ua=e("ol",null,[e("li",null,[o("将所有的私有模块移至 "),e("code",null,"devDependencies")]),e("li",null,"使用 esbuild 等工具将所有依赖打包到 bundle"),e("li",null,[e("code",null,"npm i -g ."),o(" 安装依赖即可")]),e("li",null,"全局使用命令")],-1),qa=e("p",null,"这里的核心问题是全局安装依赖时无法找到 monorepo 中未发布的模块，但私有模块在全局找不到，也无法作为依赖安装，所以只能使用这种奇怪的方法了。另一种解决方案是递归将所依赖的私有模块全部全局安装（没有尝试过）。",-1),Da=e("h2",{id:"yarn-无法显式修改指定版本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yarn-无法显式修改指定版本","aria-hidden":"true"},"#"),o(" yarn 无法显式修改指定版本")],-1),Fa=o("这是一个已知错误，目前尚未发布: "),La={href:"https://github.com/yarnpkg/berry/issues/3322",target:"_blank",rel:"noopener noreferrer"},Aa=o("https://github.com/yarnpkg/berry/issues/3322"),Ea=e("h2",{id:"yarn-link-会强制检查依赖是否冲突",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yarn-link-会强制检查依赖是否冲突","aria-hidden":"true"},"#"),o(" yarn link 会强制检查依赖是否冲突")],-1),$a=e("p",null,"下面是控制台日志，这种行为很明显是有问题的，因为吾辈只希望能在项目中测试另一个项目的某个模块。",-1),Ta=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[o("➤ YN0071: │ Cannot "),e("span",{class:"token function"},"link"),o(" @liuli-util/cli into joplin-api@workspace:libs/joplin-api dependency fs-extra@npm:10.0.0 conflicts with parent dependency fs-extra@npm:9.1.0\n➤ YN0071: │ Cannot "),e("span",{class:"token function"},"link"),o(" @liuli-util/cli into joplin-blog@workspace:apps/joplin-blog dependency commander@npm:8.2.0 conflicts with parent dependency commander@npm:7.2.0\n➤ YN0071: │ Cannot "),e("span",{class:"token function"},"link"),o(" @liuli-util/cli into joplin-blog@workspace:apps/joplin-blog dependency fs-extra@npm:10.0.0 conflicts with parent dependency fs-extra@npm:9.1.0\n➤ YN0071: │ Cannot "),e("span",{class:"token function"},"link"),o(" @liuli-util/cli into joplin-blog"),e("span",{class:"token variable"},"$wsroot"),e("span",{class:"token variable"},"$@"),o("workspace:apps/joplin-blog dependency commander@npm:8.2.0 conflicts with parent dependency commander@npm:7.2.0\n➤ YN0071: │ Cannot "),e("span",{class:"token function"},"link"),o(" @liuli-util/cli into joplin-blog"),e("span",{class:"token variable"},"$wsroot"),e("span",{class:"token variable"},"$@"),o("workspace:apps/joplin-blog dependency fs-extra@npm:10.0.0 conflicts with parent dependency fs-extra@npm:9.1.0\n➤ YN0071: │ Cannot "),e("span",{class:"token function"},"link"),o(" @liuli-util/cli into joplin-api"),e("span",{class:"token variable"},"$wsroot"),e("span",{class:"token variable"},"$@"),o("workspace:libs/joplin-api dependency fs-extra@npm:10.0.0 conflicts with parent dependency fs-extra@npm:9.1.0\n➤ YN0000: └ Completed "),e("span",{class:"token keyword"},"in"),o(" 0s 761ms\n➤ YN0000: Failed with errors "),e("span",{class:"token keyword"},"in"),o(" 4s 996ms\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br")])],-1),Ma=e("p",null,"目前似乎只能依赖于手动复制粘贴解决。。。",-1);t.render=function(o,r){const t=n("OutboundLink");return a(),s(l,null,[c,e("ul",null,[p,i,e("li",null,[u,k,d,e("a",b,[h,e(t)])]),e("li",null,[m,y,g,f,w,x,v,e("a",j,[C,e(t)]),N])]),Y,_,P,U,q,D,F,L,A,E,$,T,M,R,S,e("blockquote",null,[e("p",null,[e("a",W,[B,e(t)])])]),G,O,e("ul",null,[Z,e("li",null,[z,e("a",I,[H,e(t)])]),e("li",null,[J,e("a",K,[Q,e(t)]),V]),X]),nn,an,sn,en,ln,on,rn,tn,cn,e("blockquote",null,[e("p",null,[e("a",pn,[un,e(t)])])]),kn,dn,bn,hn,mn,e("blockquote",null,[e("p",null,[e("a",yn,[gn,e(t)])])]),fn,wn,xn,vn,e("ul",null,[e("li",null,[e("a",jn,[Cn,e(t)]),Nn])]),Yn,_n,Pn,Un,qn,e("blockquote",null,[e("p",null,[e("a",Dn,[Fn,e(t)])])]),Ln,An,En,$n,e("blockquote",null,[e("p",null,[Tn,e("a",Mn,[Rn,e(t)])])]),Sn,e("blockquote",null,[e("p",null,[Wn,e("a",Bn,[Gn,e(t)])])]),On,Zn,zn,In,Hn,Jn,Kn,Qn,e("p",null,[Vn,Xn,na,e("a",aa,[sa,e(t)]),ea]),la,oa,ra,ta,ca,e("blockquote",null,[e("p",null,[e("a",pa,[ia,e(t)])])]),ua,ka,da,ba,ha,e("blockquote",null,[e("p",null,[e("a",ma,[ya,e(t)])])]),ga,fa,wa,xa,e("blockquote",null,[e("p",null,[e("a",va,[ja,e(t)])])]),Ca,Na,Ya,_a,Pa,Ua,qa,Da,e("blockquote",null,[e("p",null,[Fa,e("a",La,[Aa,e(t)])])]),Ea,$a,Ta,Ma],64)};export{t as default};