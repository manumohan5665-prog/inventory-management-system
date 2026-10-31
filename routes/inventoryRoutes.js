const express = require("express");

const router = express.Router();

const {
    addInventoryItem,
    getAllInventoryItems,
    getInventoryItemById,
} = require("../controllers/inventoryController");

// POST - Add inventory item
router.post("/", addInventoryItem);

// GET - Fetch all inventory items
router.get("/", getAllInventoryItems);

// GET - Fetch single inventory item
router.get("/:id", getInventoryItemById);

module.exports = router;