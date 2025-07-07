const fs = require('fs');
const path = require('path');

const copyStatic = require('@stone-flower-org/vite-plugin-copy-static').default;
const htmlTemplatePlugin = require('@stone-flower-org/vite-plugin-html-template').default;
const react = require('@vitejs/plugin-react');
const { defineConfig, splitVendorChunkPlugin } = require('vite');
const svgr = require('vite-plugin-svgr').default;
const { federation } = require('@module-federation/vite');

const packageJson = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }));

const APP_NAME = process.env.APP_NAME || packageJson.name;
const APP_VERSION = process.env.APP_VERSION || packageJson.version;
const DEV_HOST = process.env.DEV_HOST || 'localhost';
const DEV_PORT = process.env.DEV_PORT || 3000;
const DEV_MODE = process.env.DEV_MODE || 'development';
const DEV_MOCK_API = process.env.DEV_MOCK_API || false;

const IS_DEV = DEV_MODE === 'development';
const OUT_DIR = 'dist';
const ASSETS_DIR = 'static';

export default defineConfig(() => ({
  base: `http://${DEV_HOST}:${DEV_PORT}/`,
  build: {
    target: 'esnext',
    outDir: OUT_DIR,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').at(1);
          return `${ASSETS_DIR}/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: `${ASSETS_DIR}/js/[name]-[hash].js`,
        entryFileNames: `${ASSETS_DIR}/js/[name]-[hash].js`,
      },
    },
  },
  define: {
    'process.env.APP_NAME': JSON.stringify(String(APP_NAME)),
    'process.env.APP_VERSION': JSON.stringify(String(APP_VERSION)),
    'process.env.DEV_MOCK_API': JSON.stringify(String(DEV_MOCK_API)),
  },
  logLevel: IS_DEV ? 'info' : 'error',
  mode: DEV_MODE,
  plugins: [
    copyStatic({
      publicDir: OUT_DIR,
      targets: [
        {
          filter: IS_DEV
            ? undefined
            : (file) => !['mockServiceWorker.js'].some((ignore) => new RegExp(`${ignore}$`, 'g').test(file)),
          from: 'public',
          to: OUT_DIR,
        },
        {
          from: 'configs/config.local.json',
          to: `${OUT_DIR}/${ASSETS_DIR}/config/config.local.json`,
        },
      ],
    }),
    react(),
    svgr({
      include: '**/*.svg',
    }),
    htmlTemplatePlugin({
      define: {
        APP_NAME,
        APP_VERSION,
        PUBLIC_URL: '/',
      },
    }),
    splitVendorChunkPlugin(),
    federation({
      dev: IS_DEV,
      dts: IS_DEV,
      name: 'project_fibonacci',
      manifest: true,
      exposes: {
        './App': './src/ui/components/App/App.tsx',
      },
      shared: {
        '@emotion/react': {
          singleton: true,
        },
        '@emotion/styled': {
          singleton: true,
        },
        '@mui/base': {
          singleton: true,
        },
        '@mui/icons-material': {
          singleton: true,
        },
        '@mui/material': {
          singleton: true,
        },
        '@reduxjs/toolkit': {
          singleton: true,
        },
        'axios': {
          singleton: true,
        },
        'history': {
          singleton: true,
        },
        'lodash': {
          singleton: true,
        },
        'luxon': {
          singleton: true,
        },
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        'react-redux': {
          singleton: true,
        },
      },
    }),
  ],
  publicDir: false,
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, './src'),
      '@/public': path.resolve(__dirname, './public'),
    },
  },
  server: {
    host: DEV_HOST,
    origin: `http://${DEV_HOST}:${DEV_PORT}`,
    port: DEV_PORT,
  },
}));
