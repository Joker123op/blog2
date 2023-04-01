module.exports = {
    base: '/blog2/', // 这个路径名称就是你刚才所配置的项目名！！！，斜杠不能漏！！！
    title: 'Ling blog',
    description: 'Ling blog',
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
              title:"Python基础",
              path: '/handbook/1',
              title:"Python3基础",
              collapsable: true, // 是否折叠
              children: [
                { title: "Python笔记", path: "/handbook/1" },    
                { title: "密码学", path: "/handbook/2" } 
              ],
            },
            {
                  title:"逆向",
                  path: '/handbook/3',
                  collapsable: true, // 是否折叠
                  children: [
                    { title: "C/C++", path: "/handbook/3" }    
                  ],
                }
          ]
    }
}