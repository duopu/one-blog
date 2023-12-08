import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
    base: '/one-blog',
    lang: 'zh-CN',
    title: '一只攻城狮',
    description: '网站描述',
    head: [['link', { rel: 'icon', href: '/bg.png' }]],

    plugins: [searchPlugin({}),],

    theme: defaultTheme({

        navbar: [
            // 单个 link可以是外部链接'https://juejin.cn/user/4107431174222391'
            { text: '首页', link: '/', },
            // 下拉 - children为数组
            // children的text默认情况下：md文件的h1标题 -> children的key值
            // { text: 'css', children: ['/pages/css/css01.md', '/pages/css/css02.md'], },
            // 下拉 - children为对象数组  children的text自定义
            {
                text: 'html',
                children: [
                    { text: 'html1', link: '/pages/html/html01.md', activeMatch: '/', /* 该元素将一直处于激活状态 */ },
                    {
                        text: 'html2',
                        link: '/pages/html/html02.md',
                        activeMatch: '^/pages/js/', /*该元素在当前路由路径是 /pages/js/ 开头时激活 支持正则表达式*/
                    },
                ],
            },
            // 下拉嵌套 - 最大深度为 2
            {
                text: 'js',
                children: [
                    { text: 'js基础', children: ['/pages/js/js01.md', '/pages/js/js02.md'], },
                    { text: 'js高级', children: ['/pages/js/js03.md'], },
                ],
            }
        ],

        // 侧边栏对象 - 不用页面配置不同的
        sidebar: {
            '/pages/js/': [
                {
                    text: 'js1',
                    collapsible: true, // 可折叠
                    children: ['/pages/js/js01.md', '/pages/js/js02.md'],
                },
                {
                    text: 'js2',
                    collapsible: true,
                    children: ['/pages/js/js03.md'],
                },
            ],
            '/pages/css/': [
                {
                    text: 'css',
                    collapsible: true,
                    children: ['/pages/css/css01.md', '/pages/css/css02.md'],
                },
            ],
            '/pages/html/': [
                {
                    text: 'html',
                    collapsible: true,
                    children: ['/pages/html/html01.md', '/pages/html/html02.md'],
                },
            ],
        },

    }),
}
