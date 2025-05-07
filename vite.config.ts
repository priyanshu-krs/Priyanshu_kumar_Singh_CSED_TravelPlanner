import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './structure/src'),
      '@components': path.resolve(__dirname, './structure/src/components'),
      '@pages': path.resolve(__dirname, './structure/src/pages'),
      '@lib': path.resolve(__dirname, './structure/src/lib'),
      '@context': path.resolve(__dirname, './structure/src/context'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-*'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true,
  },
}) 