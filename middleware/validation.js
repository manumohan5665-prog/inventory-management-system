const validateInventoryItem = (req, res, next) => {
    const { name, category, price, quantity } = req.body;

    // Check required fields
    if (
        !name ||
        !category ||
        price === undefined ||
        quantity === undefined
    ) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    // Validate name
    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({
            success: false,
            message: "Name must be a non-empty string",
        });
    }

    // Validate category
    if (typeof category !== "string" || !category.trim()) {
        return res.status(400).json({
            success: false,
            message: "Category must be a non-empty string",
        });
    }

    // Validate price
    if (
        typeof price !== "number" ||
        !Number.isFinite(price) ||
        price < 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Price must be a valid non-negative number",
        });
    }

    // Validate quantity
    if (
        typeof quantity !== "number" ||
        !Number.isInteger(quantity) ||
        quantity < 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Quantity must be a non-negative integer",
        });
    }

    next();
};

module.exports = { validateInventoryItem };