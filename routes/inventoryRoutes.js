const express = require("express");

const router = express.Router();

const {
  validateInventoryItem,
} = require("../middleware/validation");

// middleware to validate inventory item data for POST and PUT requests
const {
    addInventoryItem,
    getAllInventoryItems,
    getInventoryItemById,
    updateInventoryItem,
    deleteInventoryItem,
} = require("../controllers/inventoryController");


// POST - Add inventory item
router.post("/", validateInventoryItem, addInventoryItem);

// GET - Fetch all inventory items
router.get("/", getAllInventoryItems);

// GET - Fetch single inventory item
router.get("/:id", getInventoryItemById);

// PUT - Update inventory item
router.put("/:id", validateInventoryItem, updateInventoryItem);

// DELETE - Remove inventory item
router.delete("/:id", deleteInventoryItem);


module.exports = router;