import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  // 👇 Esta es la forma correcta en Vite moderna
  server: {
    fs: {
      allow: ['.'],
    },
    // @ts-ignore — Vite usa internamente connect-history-api-fallback aunque no esté tipado
    historyApiFallback: true,
  },
});
