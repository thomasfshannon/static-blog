const path = require('path')
import Mode from 'frontmatter-markdown-loader/mode'

var glob = require('glob');

// async function getDynamicPaths(urlFilepathTable) {
//   return [].concat(
//     ...Object.keys(urlFilepathTable).map(url => {
//       var filepathGlob = urlFilepathTable[url];
//       return glob
//         .sync(filepathGlob, { cwd: 'content' })
//         .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
//     })
//   );
// }

// export default async () => {
  
//   // ... other code
    
//   generate: {
//     routes:  await getDynamicPaths({
//       '/posts': 'posts/*.md'
//     })
//   }
// }

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: "@/plugins/prism", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      console.log(config, ctx)
      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "content"),
        loader: "frontmatter-markdown-loader",
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META]
        }
      });
    }
  }
}
