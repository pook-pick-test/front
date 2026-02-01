import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pookpik/',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://52.78.157.230:8080',
        changeOrigin: true,
        secure: false,
        ws: true,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.removeHeader('Origin');
            console.log('🚀 Proxying:', req.method, req.url, '→', options.target + req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('✅ Response:', proxyRes.statusCode, req.url);
          });
          proxy.on('error', (err, req, res) => {
            console.log('❌ Proxy Error:', err);
          });
        }
      }
    }
  }
})