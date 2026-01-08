require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");

const app = express();

// Security middleware
app.use(helmet());
app.use(compression());

// CORS configuration
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:4200",
  "http://localhost:4200",
  "https://fin-tracker-mu.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (
        allowedOrigins.indexOf(origin) !== -1 ||
        origin.includes(".vercel.app")
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use("/api/", limiter);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// API Routes
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/persons", require("./src/routes/persons"));
app.use("/api/transactions", require("./src/routes/transactions"));
app.use("/api/cash-bank", require("./src/routes/cashBank"));
app.use("/api/dashboard", require("./src/routes/dashboard"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "FinTrack API is running",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use("/api/*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
});

module.exports = app;
