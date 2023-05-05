module.exports = {
    base: '/blog2/', // 这个路径名称就是你刚才所配置的项目名！！！，斜杠不能漏！！！
    title: 'Ling blog',
    description: 'Ling blog',
    themeConfig: {
            nav: [
                { text: '首页', link: '/' },
                {
                  text: '常用在线工具',
                  items: [
                      { text: '各进制ASCII码转字符串', link: 'https://www.asciim.cn/m/tools/convert_ascii_to_string.html' },
                      { text: '图片转base64编码', link: 'https://oktools.net/image2base64' },
                      { text: 'MD5在线解密', link: 'https://www.somd5.com/' },
                      { text: 'XSS在线平台', link: 'https://xssaq.com/login/' },
                      { text: '进制转换', link: 'https://tool.lu/hexconvert/' },
                      { text: 'Base64在线解密', link: 'https://base64.us/' },
                      { text: 'MD5在线解密', link: 'https://www.somd5.com/' },
                      { text: '佛曰', link: 'https://www.keyfc.net/bbs/tools/tudoucode.aspx' },
                      { text: '新佛曰', link: 'http://hi.pcmoe.net/Buddha.html' },
                  ]
                },
                {
                  text: 'Ling blog',
                  items: [
                      { text: 'Github', link: 'https://github.com/Joker123op/blog2.git' },
                  ]
                },
                // {
                //   text: 'Ling blog',
                //   items: [
                //       { text: 'link', link: '/shellt/1.md' },
                //   ]
                // }
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
                { title: "数据库", path: "/handbook/Database" },
                { title: "PHP", path: "/handbook/php" },
                { title: "SQL注入", path: "/handbook/sql" },
                { title: "XSS注入", path: "/handbook/xss" },
                { title: "CSRF", path: "/handbook/csrf" },
                { title: "文件上传", path: "/handbook/File" },
                { title: "验证码绕过", path: "/handbook/CAPTCHA" },  
                { title: "水平、垂直越权", path: "/handbook/Ultra" },
                { title: "SSRF-服务端请求伪造", path: "handbook/SSRF" },
                { title: "XXE-实体注入攻击", path: "/handbook/XXE" },
                { title: "代码执行漏洞", path: "/handbook/代码执行漏洞" }
              ],
            }
        ]
    }
}