import { defineConfig } from 'umi';

import fs from "fs"

export default defineConfig({
  nodeModulesTransform: {
    type: 'all',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // webpack5:{},
  fastRefresh: {},
  mfsu:{},
  chainWebpack: (config) => {
    const conf = config.toConfig()
    
    conf

    // fs.writeFileSync(
    //   Buffer.from(JSON.stringify(config.toConfig(),null,2)),
    //   "webpack.js"
    // )

     return config;
 }
});
