import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from "url";
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  resolve: {
    // 路径别名
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        ws: true,
        changeOrigin: true,
        secure: false
      }
    }
  }
})
