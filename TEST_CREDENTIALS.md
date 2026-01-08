# Test Credentials

## 🔑 Dummy Login Credentials

Use these credentials to test the application:

```
Email: test@fintrack.com
Password: Test@123
```

## 📝 How to Create Test User

### Option 1: Run Seed Script (Recommended)

```bash
cd backend
node seed-test-user.js
```

This will create a test user in your MongoDB database.

### Option 2: Register Manually

1. Go to http://localhost:4200/auth/register
2. Create your own account
3. Use those credentials to login

## 🚀 Testing the App

1. **Make sure MongoDB is running**

   ```bash
   mongod
   ```

2. **Start the backend**

   ```bash
   cd backend
   npm run dev
   ```

3. **Start the frontend** (new terminal)

   ```bash
   cd frontend
   npm start
   ```

4. **Open browser and login**
   - Go to http://localhost:4200
   - Login with test@fintrack.com / Test@123
   - Explore the dashboard!

## 🎯 What You'll See

After logging in, you'll be able to:

- ✅ View Dashboard with analytics
- ✅ Add Earnings (income sources)
- ✅ Add Expenses
- ✅ Track Lending/Borrowing
- ✅ Calculate Interest (if you have access)
- ✅ Manage Cash/Bank balances
- ✅ Export PDF reports

## 🗑️ Remove Test User

If you want to remove the test user later:

```bash
# Open MongoDB shell
mongosh

# Switch to fintrack database
use fintrack

# Delete test user
db.users.deleteOne({ email: "test@fintrack.com" })
```

## 🔒 Security Note

**Important:** The test credentials are for development/testing only. In production:

- Use strong, unique passwords
- Don't share credentials
- Change default test passwords
- Remove test accounts before deploying
