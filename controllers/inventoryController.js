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
    let filteredInventory = [...inventory];

    const { category, search, minQuantity, maxQuantity } = req.query;

    // Filter by category
    if (category) {
        filteredInventory = filteredInventory.filter(
            (item) =>
                item.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Search by item name
    if (search) {
        filteredInventory = filteredInventory.filter(
            (item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    // Filter by minimum quantity
    if (minQuantity !== undefined) {
        const min = Number(minQuantity);

        if (!Number.isFinite(min) || min < 0) {
            return res.status(400).json({
                success: false,
                message: "minQuantity must be a valid non-negative number",
            });
        }

        filteredInventory = filteredInventory.filter(
            (item) => item.quantity >= min
        );
    }

    // Filter by maximum quantity
    if (maxQuantity !== undefined) {
        const max = Number(maxQuantity);

        if (!Number.isFinite(max) || max < 0) {
            return res.status(400).json({
                success: false,
                message: "maxQuantity must be a valid non-negative number",
            });
        }

        filteredInventory = filteredInventory.filter(
            (item) => item.quantity <= max
        );
    }

    // Check minimum and maximum quantity
    if (
        minQuantity !== undefined &&
        maxQuantity !== undefined &&
        Number(minQuantity) > Number(maxQuantity)
    ) {
        return res.status(400).json({
            success: false,
            message: "minQuantity cannot be greater than maxQuantity",
        });
    }

    res.status(200).json({
        success: true,
        count: filteredInventory.length,
        data: filteredInventory,
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


// DELETE - Remove inventory item
const deleteInventoryItem = (req, res) => {
    const id = Number(req.params.id);

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

    // Remove item from inventory
    const deletedItem = inventory.splice(itemIndex, 1);

    // Send response
    res.status(200).json({
        success: true,
        message: "Inventory item deleted successfully",
        data: deletedItem[0],
    });
};


module.exports = {
    addInventoryItem,
    getAllInventoryItems,
    getInventoryItemById,
    updateInventoryItem,
    deleteInventoryItem,
};