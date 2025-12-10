import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", 
    port: 5173,
    strictPort: true,
    proxy: {
      '/messages': 'http://localhost:3000', 
      "/socket.io": {
        target: "http://localhost:3000", 
        ws: true,
        changeOrigin : true,
      },
    }
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
