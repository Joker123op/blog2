module.exports = {
  base: "/blog2/", // 这个路径名称就是你刚才所配置的项目名！！！，斜杠不能漏！！！
  title: "Lingのblog",
  description: "Lingのblog",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "常用在线工具",
        items: [
          {
            text: "各进制ASCII码转字符串",
            link: "https://www.asciim.cn/m/tools/convert_ascii_to_string.html",
          },
          {
            text: "图片转base64编码",
            link: "https://oktools.net/image2base64",
          },
          { text: "MD5在线解密", link: "https://www.somd5.com/" },
          { text: "XSS在线平台", link: "https://xssaq.com/login/" },
          { text: "进制转换", link: "https://tool.lu/hexconvert/" },
          { text: "Base64在线解密", link: "https://base64.us/" },
          { text: "MD5在线解密", link: "https://www.somd5.com/" },
          {
            text: "佛曰",
            link: "https://www.keyfc.net/bbs/tools/tudoucode.aspx",
          },
          { text: "新佛曰", link: "http://hi.pcmoe.net/Buddha.html" },
          { text: "反编译pyc", link: "https://tool.lu/pyc/" },
        ],
      },
      {
        text: "LingのGithub",
        items: [
          { text: "Github", link: "https://github.com/Joker123op/blog2.git" },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 是否折叠
        children: [{ title: "博客介绍", path: "/" }],
      },
      {
        title: "Python基础",
        path: "/handbook/Python笔记",
        title: "Python3基础",
        collapsable: true, // 是否折叠
        children: [
          { title: "Python笔记", path: "/handbook/Python笔记" },
          { title: "Python解码", path: "/handbook/Python解码" },
        ],
      },
      {
        title: "CTF:wp",
        path: "/handbook/图片隐写",
        collapsable: true, // 是否折叠
        children: [
          { title: "图片隐写", path: "/handbook/图片隐写" },
          { title: "流量分析", path: "/handbook/流量分析" },
          { title: "Web", path: "/handbook/Web" },
          { title: "密码学", path: "/handbook/密码学" },
        ],
      },
      {
        title: "逆向",
        path: "/handbook/Reverse",
        collapsable: true, // 是否折叠
        children: [{ title: "C/C++", path: "/handbook/Reverse" }],
      },
      {
        title: "渗透",
        path: "/handbook/Database",
        collapsable: true, // 是否折叠
        children: [
          { title: "数据库", path: "/handbook/Database" },
          { title: "PHP", path: "/handbook/php" },
          { title: "SQL注入", path: "/handbook/sql" },
          { title: "XSS注入", path: "/handbook/xss" },
          { title: "CSRF", path: "/handbook/csrf" },
          { title: "文件上传", path: "/handbook/文件上传" },
          { title: "验证码绕过", path: "/handbook/验证码绕过" },
          { title: "水平、垂直越权", path: "/handbook/水平、垂直越权" },
          { title: "SSRF-服务端请求伪造", path: "handbook/SSRF" },
          { title: "XXE-实体注入攻击", path: "/handbook/XXE" },
          { title: "代码执行漏洞", path: "/handbook/代码执行漏洞" },
          { title: "信息收集", path: "/handbook/信息收集" },
        ],
      },
      {
        title: "信息通讯基础",
        path: "/handbook/NA",
        collapsable: true, // 是否折叠
        children: [{ title: "NA基础", path: "/handbook/NA" }],
      },
      {
        title: "操作系统",
        path: "/handbook/Linux",
        collapsable: true, // 是否折叠
        children: [
          { title: "Linux命令", path: "/handbook/Linux" },
          { title: "Windows命令", path: "/handbook/Windows" },
          { title: "Windows应急响应", path: "/handbook/win应急响应" },
          { title: "Linux安全加固", path: "/handbook/Linux安全加固" },
        ],
      },
      {
        title: "没用的东西",
        path: "/handbook/数学md使用方法",
        collapsable: true,
        children: [{ title: "数学公式", path: "/handbook/数学md使用方法" }],
      },
    ],
  },
};
