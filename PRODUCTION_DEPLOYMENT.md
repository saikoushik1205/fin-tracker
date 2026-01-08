# 🚀 Quick Production Deployment Guide

## 📋 IMMEDIATE ACTIONS BEFORE DEPLOYMENT

### 1. Update Environment Variables (CRITICAL)

Update your [`backend/.env`](backend/.env) file with production values:

```env
PORT=3000
MONGODB_URI=mongodb+srv://koushiksai242_db_user:NEW_SECURE_PASSWORD@financialtracker-01.uzuscjs.mongodb.net/fintrack?retryWrites=true&w=majority&appName=FinancialTracker-01
JWT_SECRET=d84101ea1d3a03e23635a15f89bc7903f513c9e8cdd9ea080da1593a6f6280193b9d0f06c643224ea1a5e4bb2544017cf819897946521898849945a5ef595b39
JWT_EXPIRES_IN=12h
NODE_ENV=production

# CORS (Update to your production frontend URL)
FRONTEND_URL=https://your-app-name.vercel.app
```

### 2. Secure Your MongoDB Database

**In MongoDB Atlas:**

1. Go to Database Access → Edit your user
2. Change password from `test1234` to a strong password
3. Update `MONGODB_URI` in `.env` with new password
4. Go to Network Access → Configure IP Whitelist
   - For development: Add `0.0.0.0/0` (allow all)
   - For production: Add your hosting provider's IP ranges
5. Enable database backups (Database → Backup)

### 3. Install Security Dependencies

```bash
cd backend
npm install
```

## 🔐 SECURITY CHECKLIST

- [x] Security middleware implemented (helmet, rate limiting, sanitization)
- [x] JWT secret generator created
- [x] .gitignore configured to exclude .env
- [x] .env.example template created
- [ ] Generate and update JWT_SECRET (generated above ☝️)
- [ ] Change MongoDB password
- [ ] Set NODE_ENV=production
- [ ] Update FRONTEND_URL to production domain

## 🌐 DEPLOYMENT OPTIONS

### Option 1: Vercel (Frontend + Backend)

**Frontend:**

```bash
cd frontend
npm install
npm run build
```

In Vercel:

1. Import GitHub repository
2. Framework Preset: Angular
3. Build Command: `cd frontend && npm install && npm run build`
4. Output Directory: `frontend/dist/fintrack-app/browser`
5. Deploy

**Backend (Vercel Serverless):**

1. Create `vercel.json` in backend folder:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

2. Deploy backend separately or use API routes

### Option 2: Render (Backend) + Vercel (Frontend)

**Backend on Render:**

1. Create New Web Service
2. Connect GitHub repository
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Add Environment Variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://your-frontend.vercel.app`
6. Deploy

**Get Backend URL:** `https://your-app-name.onrender.com`

**Update Frontend:**

- Edit `frontend/src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: "https://your-backend.onrender.com/api",
};
```

**Deploy Frontend on Vercel** (same as Option 1)

### Option 3: Railway (Backend) + Vercel (Frontend)

**Backend on Railway:**

1. New Project → Deploy from GitHub
2. Add Environment Variables
3. Deploy
4. Note the generated URL

**Frontend:** Same as above options

## ⚡ QUICK TEST BEFORE DEPLOYMENT

```bash
# Test backend locally with production mode
cd backend
set NODE_ENV=production
npm start

# Test frontend build
cd ../frontend
npm run build
```

## 📝 POST-DEPLOYMENT

1. Test health endpoint: `https://your-backend-url/api/health`
2. Test login/register
3. Test all CRUD operations
4. Monitor logs for errors
5. Set up monitoring (UptimeRobot, etc.)

## 🆘 TROUBLESHOOTING

**CORS Errors:**

- Verify `FRONTEND_URL` in backend `.env` matches your frontend domain
- Check CORS configuration in [`server.js`](backend/server.js#L16-L38)

**MongoDB Connection Failed:**

- Verify connection string format
- Check MongoDB Atlas IP whitelist
- Confirm user credentials are correct

**JWT Errors:**

- Ensure `JWT_SECRET` is set in production environment variables
- Verify JWT_SECRET is at least 32 characters

**500 Internal Server Error:**

- Check backend logs
- Verify all environment variables are set
- Check MongoDB connection

## 📚 Additional Resources

- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Render Deployment Docs](https://render.com/docs)
- [Railway Deployment Docs](https://docs.railway.app/)

---

**Created:** January 8, 2026  
**Your Generated JWT Secret:** `d84101ea1d3a03e23635a15f89bc7903f513c9e8cdd9ea080da1593a6f6280193b9d0f06c643224ea1a5e4bb2544017cf819897946521898849945a5ef595b39`
