# Deployment Guide - FinTrack App

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- MongoDB Atlas cluster

## Step 1: Push to GitHub

The code is already pushed to: https://github.com/saikoushik1205/fin-tracker.git

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `saikoushik1205/fin-tracker`
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as root)
   - **Build Command**: 
     ```
     cd frontend && npm install && npm run build && cd ../backend && npm install
     ```
   - **Output Directory**: `frontend/dist/frontend/browser`
   - **Install Command**: `npm install`

5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key (min 32 characters)
   - `JWT_EXPIRES_IN`: `7d`
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: Your Vercel frontend URL (add after first deployment)

6. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow the prompts and add environment variables when asked
```

## Step 3: Configure Environment Variables

After deployment, add these environment variables in Vercel:

1. Go to Project Settings → Environment Variables
2. Add each variable:
   - `MONGODB_URI` - Your MongoDB Atlas connection string
   - `JWT_SECRET` - Secure random string (min 32 chars)
   - `JWT_EXPIRES_IN` - Token expiry (e.g., "7d")
   - `NODE_ENV` - Set to "production"
   - `FRONTEND_URL` - Your Vercel app URL (e.g., https://your-app.vercel.app)

3. Redeploy after adding variables

## Step 4: Update MongoDB Network Access

1. Go to MongoDB Atlas dashboard
2. Navigate to Network Access
3. Add Vercel's IP address or use `0.0.0.0/0` (allows all IPs)
   - Note: For production, use specific IP whitelisting

## Step 5: Update Frontend API URL

Update the API URL in your frontend environment files to point to your Vercel backend:

`frontend/src/environments/environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://your-vercel-app.vercel.app/api'
};
```

## Troubleshooting

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### API Connection Issues
- Verify environment variables are set correctly
- Check MongoDB Atlas network access settings
- Ensure CORS is configured for your Vercel domain

### Database Connection Errors
- Verify MongoDB URI format
- Check database user permissions
- Ensure IP whitelist includes Vercel IPs

## Alternative: Split Deployment

If you encounter issues with the monorepo setup, consider deploying frontend and backend separately:

### Frontend (Vercel)
1. Create a new Vercel project
2. Root Directory: `frontend`
3. Build Command: `npm run build`
4. Output Directory: `dist/frontend/browser`

### Backend (Vercel or Railway)
1. Deploy backend as separate service
2. Update frontend environment with backend URL
3. Configure CORS to allow frontend domain

## Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] API endpoints respond
- [ ] Authentication works
- [ ] Database operations succeed
- [ ] All features tested in production
- [ ] Environment variables secured
- [ ] Custom domain configured (optional)

## Support

For issues, check:
- Vercel Documentation: https://vercel.com/docs
- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com/
- Project Issues: https://github.com/saikoushik1205/fin-tracker/issues
