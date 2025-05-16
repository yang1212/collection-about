import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '个人图书馆',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端框架', link: '/framework/' },
      { text: '编程语言', link: '/language/' }
    ],
    sidebar: {
      '/framework/': [
        {
          text: '前端框架',
          items: [
            { text: 'React', link: '/framework/React' },
            { text: 'Vue2', link: '/framework/vue2' },
            { text: 'Vue3', link: '/framework/vue3' },
            { text: '小程序：uniapp', link: '/framework/uniApp' },
            { text: '小程序：支付宝', link: '/framework/ali' }
          ]
        }
      ],
      '/language/': [
        {
          text: '编程语言',
          items: [
            { text: 'JavaScript', link: '/language/a-js' },
            { text: 'ES6', link: '/language/b-es6' },
            { text: 'TypeScript', link: '/language/c-ts' },
            { text: '手写系列', link: '/language/d-hand' },
            { text: '设计模式', link: '/language/e-model' },
          ]
        }
      ]
    }
  }
})