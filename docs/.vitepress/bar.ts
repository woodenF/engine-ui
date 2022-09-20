import fs from 'fs';
import path from 'path';
import { DefaultTheme } from 'vitepress';

function getComponents(lang: string) {
  return fs.readdirSync(`${path.resolve()}/docs/guide/components`)
    .filter((component: any) => /^[a-zA-Z].+\.md$/.test(component))
    .map((component: any) => {
      const name = component.split('.').shift();
      return {
        text: name,
        link: `${lang}/guide/components/${name}`
      } as any
    })
}

function getGuideSidebar(lang: string): DefaultTheme.Sidebar {
  return [
    {
      text: 'Base',
      collapsed: true,
      items: [
        {
          text: '快速开始',
          link: `${lang}/guide/getting-started`
        },
        {
          text: '导入',
          link: `${lang}/guide/base/import`,
        },
        {
          text: '自定义',
          link: `${lang}/guide/base/customize`,
        }
      ]
    },
    {
      text: 'Compoents',
      collapsible: true,
      items: getComponents(lang) as any,
    }
  ]
}

function getSidebar(lang = '') {
  return {
    [`${lang}/guide/`]: getGuideSidebar(lang),
    [`${lang}/`]: getGuideSidebar(lang),
  }
}

function getNav(lang = '') {
  return [{
    text: 'Guide',
    link: `${lang}/guide/getting-started`,
    activeMatch: `^${lang}/guide/`,
  }, {
    text: 'About',
    link: `${lang}/about`,
    activeMatch: `^${lang}/about`,
  }]
}

export {
  getSidebar,
  getNav,
}