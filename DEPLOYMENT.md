# Deployment Guide for Render

This project is configured to deploy both the backend API and frontend as separate services on Render.

## Prerequisites

1. A Render account
2. Your `NEWS_API_KEY` from [NewsAPI.org](https://newsapi.org/)

## Deployment Steps

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Render will automatically detect the `render.yaml` file and create both services
4. In the Render dashboard, go to your backend service and add the environment variable:
   - Key: `NEWS_API_KEY`
   - Value: Your NewsAPI key

### Option 2: Manual Deployment

#### Backend API Service

1. Create a new Web Service in Render
2. Connect your GitHub repository
3. Configure the service:
   - **Build Command**: `cd backend/api && npm install`
   - **Start Command**: `cd backend/api && node server.js`
   - **Environment**: Node
4. Add environment variable:
   - Key: `NEWS_API_KEY`
   - Value: Your NewsAPI key

#### Frontend Service

1. Create a new Static Site in Render
2. Connect your GitHub repository
3. Configure the service:
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`
4. Add environment variable:
   - Key: `VITE_API_URL`
   - Value: Your backend service URL (e.g., `https://your-backend-service.onrender.com`)

## Environment Variables

### Backend (.env)
```
NEWS_API_KEY=your_news_api_key_here
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3001
```

## Troubleshooting

### Common Errors

**Error "No open ports detected"**: 
- Pastikan deploy sebagai 2 service terpisah
- Jangan deploy sebagai Web Service tunggal
- Gunakan `render.yaml` untuk deployment otomatis

**Error "node eslint.config.js"**:
- Sudah diperbaiki dengan menghapus `"main": "eslint.config.js"` dari package.json
- Pastikan menggunakan konfigurasi yang benar di Render

**Error "Could not resolve"**:
- Pastikan semua import path menggunakan case sensitivity yang benar
- File dan folder harus persis sama dengan import statement

**Build failed with Rollup error**:
- Pastikan semua dependencies terinstall dengan benar
- Gunakan `npm ci` untuk install yang lebih konsisten
- Periksa semua import statements

### Alternative Deployment Options

#### Vercel (Frontend Only)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Set environment variable `VITE_API_URL` to your backend URL
4. Deploy

#### Netlify (Frontend Only)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Set environment variable `VITE_API_URL`

## File Structure for Deployment

```
📁 root/
├── 📁 src/                 # Frontend React
├── 📁 backend/
│   └── 📁 api/            # Backend Express API
│       └── server.js      # Server utama
├── package.json           # Frontend dependencies
├── render.yaml            # Konfigurasi Render deployment
├── vercel.json            # Konfigurasi Vercel (alternatif)
├── .npmrc                 # NPM configuration
└── DEPLOYMENT.md          # Panduan deployment lengkap
```

## Health Check

Backend service includes a health check endpoint at `/api/` that returns:
```json
{
  "message": "API is running!"
}
```

## Support

If you encounter issues:
1. Check the build logs in Render dashboard
2. Verify all environment variables are set
3. Ensure both services are deployed separately
4. Check that the backend URL is correctly set in frontend environment variables 