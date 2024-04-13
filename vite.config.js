import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  base: '/coca/',
  server: {
    port: 3000,
  },
  publicDir: './src/assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
      },
    },
  },
});
