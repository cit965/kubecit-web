import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { autoClassPlugin } from 'vite-plugin-autoclass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'], //自动导入vue和vue-router相关函数
    }),
    autoClassPlugin()
  ],
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/api': 'http://wlb965.sandload.com',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
