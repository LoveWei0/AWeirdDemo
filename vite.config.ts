import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      '@utils': join(__dirname, 'src/utils'),
      '@pages': join(__dirname, 'src/pages'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://web5-gowedu-dev.azurewebsites.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
