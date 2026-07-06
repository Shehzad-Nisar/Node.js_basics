const express = require("express");
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Temporary database (Array)
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 30000 }
];

// Next ID for new products
let nextId = 3;

/* ==========================================
   GET ALL PRODUCTS
   GET /products
========================================== */
app.get("/products", (req, res) => {
  res.json(products);
});

/* ==========================================
   GET SINGLE PRODUCT
   GET /products/:id
========================================== */
app.get("/products/:id", (req, res) => {

  // Get ID from URL
  const id = parseInt(req.params.id);

  // Find product
  const product = products.find((p) => p.id === id);

  // If not found
  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  // Send product
  res.json(product);
});

/* ==========================================
   CREATE PRODUCT
   POST /products
========================================== */
app.post("/products", (req, res) => {

  // Get data from request body
  const { name, price } = req.body;

  // Create new object
  const newProduct = {
    id: nextId++,
    name,
    price
  };

  // Save into array
  products.push(newProduct);

  // Return created product
  res.status(201).json(newProduct);
});

/* ==========================================
   UPDATE ENTIRE PRODUCT
   PUT /products/:id
========================================== */
app.put("/products/:id", (req, res) => {

  const id = parseInt(req.params.id);

  // Find index
  const index = products.findIndex((p) => p.id === id);

  // Product not found
  if (index === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  // Replace whole object
  products[index] = {
    id,
    name: req.body.name,
    price: req.body.price
  };

  res.json(products[index]);
});

/* ==========================================
   UPDATE PART OF PRODUCT
   PATCH /products/:id
========================================== */
app.patch("/products/:id", (req, res) => {

  const id = parseInt(req.params.id);

  // Find product
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  // Update only provided fields
  if (req.body.name !== undefined) {
    product.name = req.body.name;
  }

  if (req.body.price !== undefined) {
    product.price = req.body.price;
  }

  res.json(product);
});

/* ==========================================
   DELETE PRODUCT
   DELETE /products/:id
========================================== */
app.delete("/products/:id", (req, res) => {

  const id = parseInt(req.params.id);

  // Find index
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  // Remove product
  const deletedProduct = products.splice(index, 1);

  res.json({
    message: "Product deleted successfully",
    product: deletedProduct[0]
  });
});

/* ==========================================
   START SERVER
========================================== */
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});