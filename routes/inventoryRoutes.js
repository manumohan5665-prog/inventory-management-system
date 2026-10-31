const express = require("express");

const router = express.Router();

const {
    addInventoryItem,
    getAllInventoryItems,
    getInventoryItemById,
    updateInventoryItem,
    deleteInventoryItem,
} = require("../controllers/inventoryController");


// POST - Add inventory item
router.post("/", addInventoryItem);

// GET - Fetch all inventory items
router.get("/", getAllInventoryItems);

// GET - Fetch single inventory item
router.get("/:id", getInventoryItemById);

// PUT - Update inventory item
router.put("/:id", updateInventoryItem);

// DELETE - Remove inventory item
router.delete("/:id", deleteInventoryItem);


module.exports = router;