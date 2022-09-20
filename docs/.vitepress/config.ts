import { defineConfig } from 'vitepress';
import { name, author, description, license, repository } from '../../package.json';
import { getNav, getSidebar } from './bar';
import { mdPlugin } from './mdPlugin';

export default defineConfig({
  title: name,
  description,
  base: `/${name.split('/').pop()}/`,
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(mdPlugin)
    },
  },
  themeConfig: {
    editLink: {
      pattern: `${repository}`,
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: repository }
    ],
    footer: {
      message: `Released under the ${license} License.`,
      copyright: `Copyright @2022-present ${author}`
    },
    sidebar: getSidebar() as any,
    nav: getNav()
  }
})