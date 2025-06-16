import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:process.env.NODE_ENV === 'production' ? '/domi/' : '/',
  resolve:{
    alias:{
      '@': '/src' // 确保别名已配置
    }
  }
})
