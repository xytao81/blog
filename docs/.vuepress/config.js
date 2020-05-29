module.exports = {
  base: '/blog/',
  logo: '/assets/img/logo.png',
  title: 'xy_tao81.cn',
  description: '',
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
      extractHeaders: [ 'h2', 'h3', 'h4', 'h5' ]
  },
  // plugins: [
  //     '@vuepress/back-to-top',
  //     '@vuepress/nprogress'
  // ],
  themeConfig: {
      nav: [
          {
              text: '主页',
              link: '/'
          },
          {
              text: '前端笔记',
              link: '/frontend/'
          },
          {
              text: 'Github',
              link: 'https://github.com/xytao81/'
          },
          // {
          //     text: '简历',
          //     link: 'https://messiahhh.github.io/resume/'
          // }
      ],
      sidebar: {
          '/frontend/': [
              '',
          ],
      },
      lastUpdated: '上次更新时间',
      // 一些github的配置
      // repo: 'messiahhh/blog',
      repoLabel: 'Github',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      editLinkText: 'Edit this page'
  }
}