// server.js
const express = require("express");
const connectDB = require("./config/db"); // Ensure this path is correct
const passport = require("./config/passport"); // Ensure this path is correct
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// Routes
app.use("/api", require("./routes/auth")); // Ensure this path is correct

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
