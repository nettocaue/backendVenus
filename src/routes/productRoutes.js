const express = require('express');
const multer = require('multer');
const Product = require('../models/product');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/products', upload.single('image'), async (req, res) => {
  const { name, value, oldValue } = req.body;
  const image = req.file.buffer;

  try {
    const newProduct = new Product({
      name,
      value,
      oldValue,
      image,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;