module.exports = {
    base: '/blog2/', // 这个路径名称就是你刚才所配置的项目名！！！，斜杠不能漏！！！
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Ling blog',
                items: [
                    { text: 'Github', link: 'https://github.com/Joker123op/blog2.git' },
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
              path: '/handbook/1',
              collapsable: true, // 是否折叠
              children: [
                { title: "Python笔记", path: "/handbook/1" },    
                { title: "CTF:攻防世界", path: "/handbook/2" }
                // { title: "博客搭建", path: "/handbook/3" }
              ],
            }
          ]
    }
}