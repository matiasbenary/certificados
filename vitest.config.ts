import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '.vitest/setup',
    include: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}']
  },
  plugins: [tsconfigPaths()]
})
