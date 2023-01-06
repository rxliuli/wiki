import { defineUserConfig, defaultTheme } from 'vuepress-vite'
import sidebar from './docs/sidebar.json'

export default defineUserConfig({
  title: 'Awesome Frontend',
  description: '这是一个自以为是的前端技术选择和推荐网站',
  markdown: {
    breaks: false,
  },
  theme: defaultTheme({
    navbar: [{ text: 'GitHub', link: 'https://github.com/rxliuli/wiki' }],
    sidebar,
  }),
})
