module.exports = {
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Ling blog',
                items: [
                    { text: 'Github', link: 'https://github.com/adrian803' },
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 是否折叠
                children: [
                    { title: "博客介绍", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/1',
              title:"内容",
              path: '/handbook/3',
              collapsable: false, // 是否折叠
              children: [
                { title: "博客搭建", path: "/handbook/1" },
                { title: "博客搭建", path: "/handbook/2" }
              ],
            }
          ]
    }
}