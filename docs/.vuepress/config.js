module.exports = {
  title: 'Frontend Awesome',
  description: '这是一个自以为是的前端技术选择和推荐网站',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/rxliuli/frontend-awesome' },
    ],
    sidebar: {
      '/guide/': ['', '动机'],
    },
  },
}
