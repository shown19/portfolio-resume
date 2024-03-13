import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-resume/",
  define: {
    "process.env": process.env,
    VITE_SENDEMAIL_SERVICE_ID: process.env.VITE_SENDEMAIL_SERVICE_ID,
    VITE_SENDEMAIL_TEMPLATE_ID: process.env.VITE_SENDEMAIL_TEMPLATE_ID,
    VITE_SENDEMAIL_PUBLIC_KEY: process.env.VITE_SENDEMAIL_PUBLIC_KEY
  },
})
