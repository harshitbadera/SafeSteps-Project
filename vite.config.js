import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Required for Capacitor — loads from file:// protocol
  server: {
    host: '0.0.0.0', // Allow network access for Capacitor live reload
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'SafeSteps - Senior Mobile & Cyber Safety Guide',
        short_name: 'SafeSteps',
        description: 'Bite-sized mobile phone lessons, scams sandbox, and payments training for seniors.',
        theme_color: '#006D77',
        background_color: '#EDF6F9',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})

