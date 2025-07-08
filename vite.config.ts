import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Needed for custom domain (e.g., arkspindles.com)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
