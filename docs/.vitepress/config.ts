import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: '个人图书馆',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '语言', link: '/language/' },
            { text: '框架', link: '/framework/Vue2.md' },
        ]
    }
})
