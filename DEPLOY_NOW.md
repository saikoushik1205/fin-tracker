# 🎯 QUICK DEPLOY GUIDE

## Your Code is Live! ✅

**GitHub Repository**: https://github.com/saikoushik1205/fin-tracker

---

## Deploy to Vercel in 5 Steps:

### 1️⃣ Go to Vercel

Visit: https://vercel.com and sign in with GitHub

### 2️⃣ Import Project

- Click **"Add New Project"**
- Select: **saikoushik1205/fin-tracker**
- Click **"Import"**

### 3️⃣ Configure Build

- **Build Command**: `cd frontend && npm install && npm run build:prod && cd ../backend && npm install`
- **Output Directory**: `frontend/dist/frontend/browser`
- **Install Command**: `npm install`

### 4️⃣ Add Environment Variables (REQUIRED!)

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_string_min_32_chars
JWT_EXPIRES_IN=7d
NODE_ENV=production
```

### 5️⃣ Deploy & Configure

- Click **"Deploy"** and wait 2-5 minutes
- After deployment, add `FRONTEND_URL` environment variable with your Vercel URL
- **Redeploy** the project

---

## MongoDB Atlas Setup

1. Go to **Network Access**
2. Add IP: `0.0.0.0/0` (Allow from anywhere)
3. Click **"Confirm"**

---

## Generate JWT Secret (if needed)

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] MongoDB network access configured
- [ ] FRONTEND_URL updated after first deploy
- [ ] Application tested and working

---

## 📚 Detailed Guides

- **Full Guide**: [VERCEL_DEPLOYMENT_CHECKLIST.md](./VERCEL_DEPLOYMENT_CHECKLIST.md)
- **Deployment Guide**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **Setup Guide**: [SETUP_GUIDE.md](./SETUP_GUIDE.md)

---

## 🆘 Common Issues

**Build Fails**: Check environment variables are set correctly

**API Errors**: Verify MongoDB URI and network access

**CORS Errors**: Ensure FRONTEND_URL is set and redeploy

**Database Issues**: Check MongoDB Atlas IP whitelist

---

## 🎉 You're Ready!

Estimated deployment time: **5-10 minutes**

Start deploying now at: https://vercel.com
