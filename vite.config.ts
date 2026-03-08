import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './', // <--- THÊM DÒNG NÀY ĐỂ HẾT TRẮNG MÀN HÌNH
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist', // Đảm bảo đầu ra là thư mục dist
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});