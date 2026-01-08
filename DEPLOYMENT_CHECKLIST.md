# 🚀 Pre-Deployment Checklist

## ✅ Security Configuration

- [ ] Generate new JWT secret using `node backend/scripts/generateSecret.js`
- [ ] Update `.env` with production values:
  - [ ] Set `NODE_ENV=production`
  - [ ] Update `JWT_SECRET` with generated secret
  - [ ] Update `FRONTEND_URL` to production domain
  - [ ] Verify `MONGODB_URI` uses secure credentials
- [ ] Ensure `.env` is in `.gitignore` (already configured ✓)
- [ ] Verify no sensitive data in code
- [ ] Test all security middleware is active

## 📦 Dependencies

- [ ] Install security packages:
  ```bash
  cd backend
  npm install express-mongo-sanitize
  ```

## 🔍 Code Review

- [ ] Remove all `console.log` statements or replace with proper logging
- [ ] Verify error messages don't expose sensitive information
- [ ] Check all API endpoints require authentication where needed
- [ ] Verify input validation on all endpoints
- [ ] Test rate limiting on auth endpoints

## 🗄️ Database

- [ ] Create production MongoDB user with limited permissions
- [ ] Enable MongoDB authentication
- [ ] Configure IP whitelist in MongoDB Atlas
- [ ] Test database connection with production credentials
- [ ] Set up automated backups
- [ ] Create database indexes for better performance

## 🌐 Frontend Configuration

- [ ] Update `frontend/src/environments/environment.prod.ts` with production API URL
- [ ] Build frontend: `ng build --configuration production`
- [ ] Test built application
- [ ] Verify API calls use production endpoint

## 📝 Backend Configuration

- [ ] Update CORS allowed origins in `server.js`
- [ ] Verify rate limiting is configured
- [ ] Test health check endpoint
- [ ] Ensure helmet security headers are active
- [ ] Test error handling in production mode

## 🧪 Testing

- [ ] Test all authentication flows
- [ ] Test all CRUD operations
- [ ] Test error handling
- [ ] Verify rate limiting works
- [ ] Test with production-like data

## 🚢 Deployment Steps

### Backend (Choose one platform)

**Option 1: Render**

1. Create new Web Service
2. Connect GitHub repository
3. Set environment variables
4. Deploy

**Option 2: Railway**

1. Create new project
2. Add MongoDB plugin or use existing Atlas
3. Set environment variables
4. Deploy

**Option 3: Heroku**

1. Create new app
2. Add MongoDB Atlas connection
3. Set config vars
4. Deploy via Git

### Frontend (Vercel - Recommended)

1. Import project to Vercel
2. Set build command: `cd frontend && npm install && npm run build`
3. Set output directory: `frontend/dist/fintrack-app/browser`
4. Add environment variables
5. Deploy

## 🔒 Post-Deployment Security

- [ ] Enable HTTPS (SSL certificate)
- [ ] Set up monitoring (e.g., UptimeRobot)
- [ ] Configure error tracking (e.g., Sentry)
- [ ] Set up log aggregation
- [ ] Configure automated backups
- [ ] Test all features in production
- [ ] Monitor initial logs for errors

## 📊 Performance

- [ ] Enable compression (already configured ✓)
- [ ] Verify response times
- [ ] Check bundle sizes
- [ ] Test on slow network
- [ ] Verify caching headers

## 📱 Final Testing

- [ ] Test on different browsers
- [ ] Test on mobile devices
- [ ] Verify all API endpoints
- [ ] Test user registration/login
- [ ] Test all CRUD operations
- [ ] Verify PDF generation
- [ ] Test error scenarios

## 🔄 Continuous Deployment

- [ ] Set up CI/CD pipeline (optional)
- [ ] Configure automatic deployments
- [ ] Set up staging environment
- [ ] Document deployment process

---

## 🆘 Emergency Rollback Plan

1. Keep previous version accessible
2. Document database schema changes
3. Have backup restoration procedure ready
4. Keep contact info for hosting support

## 📞 Support Contacts

- MongoDB Atlas Support: https://www.mongodb.com/support
- Vercel Support: https://vercel.com/support
- Backend Host Support: [Add your hosting provider]

---

**Last Updated:** January 8, 2026
