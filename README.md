# Simple Inventory Management System

A backend-only Inventory Management System built using **Node.js** and **Express.js**. This project provides RESTful API endpoints to manage inventory items using an in-memory JavaScript array.

## Features

- Add new inventory items.
- Retrieve all inventory items.
- Retrieve an individual item by ID.
- Update inventory item details.
- Delete inventory items.
- Filter inventory by category.
- Filter inventory by minimum and maximum quantity.
- Search inventory by item name.
- Validate incoming request data using custom middleware.
- Handle errors using centralized error-handling middleware.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- dotenv
- CORS
- Nodemon
- Postman

## Project Structure

```text
inventory-backend/
├── controllers/
│   └── inventoryController.js
├── routes/
│   └── inventoryRoutes.js
├── middleware/
│   ├── validation.js
│   └── errorHandler.js
├── model/
│   └── inventoryData.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd inventory-backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
```

## Run the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The server runs at:

```text
http://localhost:5000
```

## API Endpoints

Base URL: `http://localhost:5000/api/inventory`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Get all inventory items |
| GET | `/:id` | Get item by ID |
| POST | `/` | Add a new item |
| PUT | `/:id` | Update an item |
| DELETE | `/:id` | Delete an item |

### Search and Filtering

| Query | Description |
|---|---|
| `?category=Electronics` | Filter by category |
| `?search=mouse` | Search by item name |
| `?minQuantity=10` | Minimum quantity |
| `?maxQuantity=50` | Maximum quantity |

Example:

```text
GET /api/inventory?category=Electronics&minQuantity=10&maxQuantity=50
```

## Sample Inventory Item

```json
{
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 599,
  "quantity": 25
}
```

## Data Storage

Inventory data is stored in a JavaScript array in runtime memory. No database is used. Data resets when the server restarts.

## Error Handling

The application uses custom middleware for request validation and centralized error handling. It returns JSON responses with appropriate HTTP status codes.

## Testing

API endpoints can be tested using Postman or Thunder Client.

## Author

Manu Mohandas