const os = require('os');

const { configDefaults, defineConfig, mergeConfig } = require('vitest/config');

const viteConfig = require('./vite.config').default;

const workersCount = Math.max(1, os.cpus().length - 1);

export default mergeConfig(
  viteConfig(),
  defineConfig({
    test: {
      pool: 'forks',
      cache: false,
      css: false,
      clearMocks: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'src/tests/**'],
      globals: true,
      globalSetup: './vitest-setup.js',
      maxConcurrency: workersCount,
      maxWorkers: workersCount,
      minWorkers: workersCount,
      retry: 1,
      sequence: {
        hooks: 'list',
      },
      setupFiles: ['src/tests/setup'],
      testTimeout: 10000,
    },
  }),
);
