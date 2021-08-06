import{r as e,o as r,c as l,a as n,F as t,b as a}from"./app.dd6fe0d9.js";const o={},c=n("h2",{id:"技术栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#技术栈","aria-hidden":"true"},"#"),a(" 技术栈")],-1),i={href:"https://electronjs.org/",target:"_blank",rel:"noopener noreferrer"},u=a("electron"),p=a(": 跨平台桌面开发"),s={href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},h=a("react"),f=a(": 视图层框架"),d={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},b=a("typescript"),g=a(": 强类型的 js"),k={href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"},w=a("lerna"),j=a(": 前端 monorepo 管理工具"),_={href:"https://classic.yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},m=a("yarn"),y=a(": 包管理器，workspace 与 lerna 搭配非常好"),v={href:"https://create-react-app.dev/",target:"_blank",rel:"noopener noreferrer"},x=a("create-react-app"),P=a(": react 官方出品的 react 脚手架生成器，社区和活跃度都不是其它工具可比的"),q=n("h2",{id:"其他依赖库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#其他依赖库","aria-hidden":"true"},"#"),a(" 其他依赖库")],-1),E=n("blockquote",null,[n("p",null,[a("参考: "),n("a",{href:"/p/664f86d038744a01894699e368cc2708"},"前端资源管理")])],-1),F={href:"https://rollupjs.org/",target:"_blank",rel:"noopener noreferrer"},J=a("rollup"),S=a(": 前端库打包工具"),D=n("li",null,"electron-builder: electron 打包工具",-1),I=n("li",null,"is-electron: 在渲染层判断是否为 electron 环境的微型库",-1),L=n("li",null,"fs-extra: nodejs api 的 Promise 化封装",-1),O=n("li",null,"react-use: react 中的通用 hooks 库",-1),z={href:"https://www.npmjs.com/org/liuli-util",target:"_blank",rel:"noopener noreferrer"},A=a("@liuli-util/*"),B=a(": 吾辈个人的一系列通用工具库"),C=n("li",null,"jest: 单元测试工具",-1),G=n("li",null,"wallaby.js: 单元测试 IDE 集成",-1),H=n("li",null,"gulp: 流式任务管理工具",-1),K=n("li",null,"electron-store: 主进程和渲染层通用的 k-v 存储",-1),M=n("li",null,"electron-reloader: electron 热更新工具",-1),N=n("li",null,"electron-devtools-installer: electron 插件安装工具",-1),Q=n("li",null,"utility-types: typescript 通用类型库",-1),R=n("h2",{id:"选择动机",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#选择动机","aria-hidden":"true"},"#"),a(" 选择动机")],-1),T=n("li",null,"electron: 想必来看到这篇文章的人都无需解释，基于 web 技术的跨平台足以解释一切。",-1),U=n("li",null,"react: 吾辈无意争论框架优劣，但 react 确实是目前最流行的解决方案，所以吾辈选择了它。",-1),V=n("li",null,"typescript: 由于吾辈有着 Java 后端的经验，所以对强类型情有独钟。",-1),W=a("lerna: 这个确实需要解释一下，electron 应用分为主进程和渲染层，一般示例中是将它们在一个项目中通过目录区分，但这种隔离性并不好，还会污染 "),X=n("code",null,"package.json",-1),Y=a("。这时候就到了 lerna 出场了，它是由 babel 的作者开发，专门用以解决前端没有多模块工程的问题。 "),Z=a("PS1: 老实说，吾辈很想念 Java "),$={href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"},ee=a("maven"),re=a(" 多模块的支持，可以非常简单的抽取模块出来。 PS2: 前端有名的 electron-react 示例项目 "),le={href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/",target:"_blank",rel:"noopener noreferrer"},ne=a("electron-react-boilerplate"),te=a(" 就是单模块的。"),ae=a("electron-builder: electron 官方其实更推荐 "),oe={href:"https://www.electronforge.io/",target:"_blank",rel:"noopener noreferrer"},ce=a("Electron Forge"),ie=a("，但目前而言，electron-builder 更好。");o.render=function(a,o){const ue=e("OutboundLink");return r(),l(t,null,[c,n("ul",null,[n("li",null,[n("a",i,[u,n(ue)]),p]),n("li",null,[n("a",s,[h,n(ue)]),f]),n("li",null,[n("a",d,[b,n(ue)]),g]),n("li",null,[n("a",k,[w,n(ue)]),j]),n("li",null,[n("a",_,[m,n(ue)]),y]),n("li",null,[n("a",v,[x,n(ue)]),P])]),q,E,n("ul",null,[n("li",null,[n("a",F,[J,n(ue)]),S]),D,I,L,O,n("li",null,[n("a",z,[A,n(ue)]),B]),C,G,H,K,M,N,Q]),R,n("ul",null,[T,U,V,n("li",null,[W,X,Y,n("blockquote",null,[n("p",null,[Z,n("a",$,[ee,n(ue)]),re,n("a",le,[ne,n(ue)]),te])])]),n("li",null,[ae,n("a",oe,[ce,n(ue)]),ie])])],64)};export default o;