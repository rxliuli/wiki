const sidebar = require('./sidebar.json')
const { treeMap } = require('@liuli-util/tree')

module.exports = {
  title: 'Awesome Frontend',
  description: '这是一个自以为是的前端技术选择和推荐网站',
  markdown: {
    breaks: false,
  },
  themeConfig: {
    navbar: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/rxliuli/wiki' },
    ],
    sidebar: [
      ...treeMap(
        sidebar,
        ({ title: text, path: link, children }) => ({
          text,
          link: link ? link + '.html' : link,
          children,
        }),
        {
          children: 'children',
          path: 'path',
        },
      ),
    ],
  },
}
