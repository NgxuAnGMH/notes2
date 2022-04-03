import { defineThemeConfig } from 'vuepress-theme-hope'
import * as navbar from './navbar'
import * as sidebar from './sidebar'

const hostname = process.env.HOSTNAME || 'https://zhaobc.site'

export default defineThemeConfig({
  hostname,

  author: {
    name: 'Zhao Bin',
    url: 'https://zhaobc.site',
  },

  iconPrefix: 'iconfont icon-',

  logo: '/logo.svg',

  repo: 'https://github.com/FuckDoctors/notes2',

  docsDir: 'docs',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    medias: {
      Email: 'mailto:zhbchwin@163.com',
      GitHub: 'https://github.com/FuckDoctors',
    },
  },

  locales: {
    /**
     * Chinese locale config
     */
    '/': {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: '欢迎来到赵斌的小站',

      displayFooter: true,

      blog: {
        description: '一个码农，热爱Vue/Java',
        intro: '/about.html',
      },
    },

    /**
     * English locale config
     */
    '/en/': {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: "Welcome to ZhaoBin's site",

      displayFooter: true,

      blog: {
        description: 'A programmer, Vue/Java lover.',
        intro: '/en/about.html',
      },
    },
  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['12345'],
      '/en/guide/encrypt.html': ['12345'],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // you can also use Waline
    comment: {
      type: 'giscus',
      repo: 'FuckDoctors/notes2',
      repoId: 'R_kgDOHFsMkw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOHFsMk84COVMW',
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
  },
})
