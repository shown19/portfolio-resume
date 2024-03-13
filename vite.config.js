import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-resume/",
  define: {
    "process.env": process.env,
    ENV_KEY: process.env.ENV_KEY,
  },
})
