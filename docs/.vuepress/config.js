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
              path: '/handbook/Python notes',
              title:"Python3基础",
              collapsable: true, // 是否折叠
              children: [
                { title: "Python笔记", path: "/handbook/Python notes" },    
                { title: "密码学", path: "/handbook/Cryptography" } 
              ],
            },
            {
              title:"CTF:wp",
              path: '/handbook/Picture steganography',
              collapsable: true, // 是否折叠
              children: [
                { title: "图片隐写", path: "/handbook/Picture steganography" },
                { title: "流量分析", path: "/handbook/Flow analysis" },
                { title: "Web", path: "/handbook/Web" },
                // { title: "图片隐写", path: "/handbook/Modern cryptography" },
                { title: "现代密码学", path: "/handbook/Modern cryptography" }        
              ],
            },
            {
              title:"逆向",
              path: '/handbook/Reverse',
              collapsable: true, // 是否折叠
              children: [
                { title: "C/C++", path: "/handbook/Reverse" }    
              ],
            },
            {
              title:"渗透",
              path: '/handbook/sql',
              collapsable: true, // 是否折叠
              children: [
                { title: "数据库", path: "/handbook/sql" },
                { title: "PHP", path: "/handbook/1" },
                { title: "sql注入", path: "/handbook/7" },
                { title: "XSS注入", path: "/handbook/xss1" }   
              ],
            }
        ]
    }
}