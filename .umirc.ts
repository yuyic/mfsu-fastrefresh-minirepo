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
});
