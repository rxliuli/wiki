const sidebar = require('./sidebar.json')

module.exports = {
  title: 'Awesome Frontend',
  description: '这是一个自以为是的前端技术选择和推荐网站',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/rxliuli/awesome-frontend' },
    ],
    sidebar: [{ title: '首页', path: '/' }, ...sidebar],
  },
}
