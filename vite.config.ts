import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },
      includeAssets: ['**/*.{png}', '**/*.{jpg}'],
      manifest: {
        name: 'GameStone',
        short_name: 'GameStone',
        description: 'game pwa react',
        theme_color: '#46B4AC',
        background_color: '#46B4AC',
        display: 'standalone',
        orientation: 'landscape-primary',
        icons: [
          {
            src: '/assets/favicons/32x32.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '/assets/favicons/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/favicons/192x192.jpg',
            sizes: '192x192',
            type: 'image/jpg',
            purpose: 'maskable',
          },
        ],
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
