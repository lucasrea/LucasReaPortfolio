import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/LucasReaPortfolio/',
  resolve: {
    alias: {
      // Define an alias for React
      'react': 'react',
      'react-dom': 'react-dom'
      // Add any other aliases as needed
    }
  }
})
