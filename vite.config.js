import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: './runtimeConfig', replacement: './runtimeConfig.browser' },
      { find: '@', replacement: '/src' },
    ],
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['graphql']
  },
  define: { global: {} },
})
