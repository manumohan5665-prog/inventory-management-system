const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const inventoryRoutes = require("./routes/inventoryRoutes");
const errorHandler = require("./middleware/errorHandler");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Inventory Management API is running!",
    });
});

// Inventory routes
app.use("/api/inventory", inventoryRoutes);


// Handle unknown routes
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.statusCode = 404;

  next(error);
});

// Error handler
app.use(errorHandler);


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});