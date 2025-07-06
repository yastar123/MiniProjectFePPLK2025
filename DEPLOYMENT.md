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
   - **Build Command**: `npm install && npm run build`
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

- If you see "No open ports detected", make sure your backend service is properly configured with the correct start command
- Ensure all environment variables are set in the Render dashboard
- Check the build logs for any dependency installation issues 