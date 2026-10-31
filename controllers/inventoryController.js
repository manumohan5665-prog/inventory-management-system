const inventory = require("../model/inventoryData");

// POST - Add new inventory item
const addInventoryItem = (req, res) => {
  const { name, category, price, quantity } = req.body;

  // Generate a new ID
  const newId =
    inventory.length > 0
      ? Math.max(...inventory.map((item) => item.id)) + 1
      : 1;

  // Create new inventory object
  const newItem = {
    id: newId,
    name,
    category,
    price,
    quantity,
  };

  // Add item to inventory array
  inventory.push(newItem);

  // Send response
  res.status(201).json({
    success: true,
    message: "Inventory item added successfully",
    data: newItem,
  });
};

module.exports = {
  addInventoryItem,
};