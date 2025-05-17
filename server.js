require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const Employee = require('./models/employee');
const Product = require('./models/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection failed:', err));

// Get all employees
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get combined data (employees and products)
app.get('/combined', async (req, res) => {
  try {
    const employees = await Employee.find();
    const products = await Product.find();
    res.json({ employees, products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new employee
app.post('/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a new product
app.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});