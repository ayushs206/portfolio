import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['*', 'dfc8-2401-4900-ba67-a206-9406-1671-ed81-abf9.ngrok-free.app']
  }
})
