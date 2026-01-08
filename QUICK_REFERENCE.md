# FinTrack - Quick Reference

## 🚀 Start the Application

### 1. Start MongoDB

```bash
# Windows
mongod
# or
net start MongoDB
```

### 2. Start Backend

```bash
cd backend
npm run dev
```

**Backend:** http://localhost:3000

### 3. Start Frontend

```bash
cd frontend
npm start
```

**Frontend:** http://localhost:4200

## 🔑 Authentication

### Register New User

- URL: http://localhost:4200/auth/register
- Enter: Name, Email, Password

### Login

- URL: http://localhost:4200/auth/login
- Enter: Email, Password

### Logout

- Click profile icon → Logout

## 🗄️ Database

**MongoDB Database:** `fintrack`

**Collections:**

- `users` - User accounts
- `persons` - Income sources, contacts, etc.
- `transactions` - Financial transactions
- `cashbanks` - Cash/Bank balances

## 🔐 Environment Variables

### Backend `.env`

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/fintrack
NODE_ENV=development
JWT_SECRET=your_secret_key_here_minimum_32_characters
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:4200
```

## 📦 Dependencies

### Backend

- express - Web framework
- mongoose - MongoDB ODM
- jsonwebtoken - JWT authentication
- bcryptjs - Password hashing
- cors - Cross-origin requests
- dotenv - Environment variables

### Frontend

- Angular 17 - Framework
- RxJS - Reactive programming
- jsPDF - PDF generation

## 🎯 Key Features

✅ JWT Authentication (No Firebase)
✅ MongoDB Data Storage
✅ Dashboard with Analytics
✅ Earnings Tracking
✅ Expenses Tracking
✅ Lending/Borrowing Management
✅ Interest Calculations
✅ PDF Export
✅ Multi-device Access

## 🛠️ Common Commands

### Backend

```bash
npm install          # Install dependencies
npm start           # Start server (production)
npm run dev         # Start server (development)
```

### Frontend

```bash
npm install         # Install dependencies
npm start           # Start dev server
npm run build       # Build for production
npm test            # Run tests
```

### MongoDB

```bash
mongod              # Start MongoDB server
mongosh             # Open MongoDB shell
mongo               # (older MongoDB versions)
```

## 🔍 API Endpoints

### Auth

- POST `/api/auth/register` - Register user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get profile (protected)
- PUT `/api/auth/profile` - Update profile (protected)

### Dashboard

- GET `/api/dashboard` - Get dashboard data (protected)

### Persons

- GET `/api/persons?section=earnings` - Get persons
- POST `/api/persons` - Create person (protected)
- DELETE `/api/persons/:id` - Delete person (protected)

### Transactions

- GET `/api/transactions?personId=xxx` - Get transactions
- POST `/api/transactions` - Create transaction (protected)
- DELETE `/api/transactions/:id` - Delete transaction (protected)

### Cash/Bank

- GET `/api/cash-bank` - Get cash/bank data (protected)
- PUT `/api/cash-bank` - Update cash/bank (protected)

## 🐛 Debugging

### Check Backend Status

```bash
curl http://localhost:3000/api/health
```

### Check MongoDB Connection

```bash
mongosh
> use fintrack
> show collections
> db.users.find()
```

### View Logs

- Backend: Check terminal where `npm run dev` is running
- Frontend: Browser console (F12)
- MongoDB: MongoDB logs

### Clear Auth State

```javascript
// In browser console
localStorage.clear();
```

## 📝 Tips

1. **Always start MongoDB first** before backend
2. **JWT tokens expire in 7 days** - login again after expiry
3. **Data is stored in MongoDB** - accessible from any device after login
4. **Use strong JWT_SECRET** for production (64+ characters)
5. **Backup MongoDB regularly** for production

## 🔗 URLs

- Frontend: http://localhost:4200
- Backend API: http://localhost:3000/api
- MongoDB: mongodb://localhost:27017

## 📚 Documentation

- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed setup instructions
- [FIREBASE_REMOVAL_SUMMARY.md](FIREBASE_REMOVAL_SUMMARY.md) - Changes made
- [README.md](README.md) - Project overview
