import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    host: '0.0.0.0',
    port: 10000,          // atau sesuaikan dengan proses deploy-mu
    allowedHosts: ['miniprojectfepplk2025.onrender.com']
  }
})
