import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   css: {
    devSourcemap: true, // Enables sourcemaps in dev for better inspection
  },
})
