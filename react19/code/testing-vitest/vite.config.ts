import { defineConfig as vitestDefineConfig, mergeConfig } from 'vitest/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const viteConfig = defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});

// https://vite.dev/config/
const viteTestConfig = vitestDefineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    // css: true,
  },
});

export default mergeConfig(viteConfig, viteTestConfig);
