import { defineNavbarConfig } from 'vuepress-theme-hope'

export const zh = defineNavbarConfig([
  '/',
  {
    text: '笔记',
    icon: 'note',
    prefix: '/notes/',
    children: [
      {
        text: '笔记',
        icon: 'note',
        link: '',
      },
      {
        text: '前端',
        icon: 'template',
        prefix: 'frontend/',
        children: [
          { text: 'JavaScript', link: 'js' },
          { text: 'TypeScript', link: 'ts' },
          { text: 'Vue', link: 'vue' },
          { text: '更多', link: '' },
        ],
      },
      {
        text: '后端',
        icon: 'back-stage',
        prefix: 'backend/',
        children: [
          {
            text: 'Java',
            link: 'java',
          },
          {
            text: 'Spring',
            link: 'spring',
          },
          {
            text: '更多',
            link: '',
          },
        ],
      },
    ],
  },
  '/projects',
  { text: '链接', icon: 'link', link: '/links' },
  { text: '关于我', icon: 'people', link: '/about' },
])
