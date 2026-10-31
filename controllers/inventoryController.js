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


// GET - Fetch all inventory items
const getAllInventoryItems = (req, res) => {
    res.status(200).json({
        success: true,
        count: inventory.length,
        data: inventory,
    });
};


// GET - Fetch a single inventory item
const getInventoryItemById = (req, res) => {
    const id = Number(req.params.id);

    const item = inventory.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({
            success: false,
            message: "Inventory item not found",
        });
    }

    res.status(200).json({
        success: true,
        data: item,
    });
};


// PUT - Update inventory item
const updateInventoryItem = (req, res) => {
    const id = Number(req.params.id);

    const { name, category, price, quantity } = req.body;

    // Find item index
    const itemIndex = inventory.findIndex(
        (item) => item.id === id
    );

    // Check if item exists
    if (itemIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Inventory item not found",
        });
    }

    // Update inventory item
    inventory[itemIndex] = {
        id,
        name,
        category,
        price,
        quantity,
    };

    // Send response
    res.status(200).json({
        success: true,
        message: "Inventory item updated successfully",
        data: inventory[itemIndex],
    });
};

module.exports = {
    addInventoryItem,
    getAllInventoryItems,
    getInventoryItemById,
    updateInventoryItem,
};