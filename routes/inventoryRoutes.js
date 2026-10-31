const express = require("express");

const router = express.Router();

const {
  addInventoryItem,
} = require("../controllers/inventoryController");

// POST - Add inventory item
router.post("/", addInventoryItem);

module.exports = router;