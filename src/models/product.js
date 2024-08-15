const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  oldValue: { type: Number, required: true },
  image: { type: Buffer, required: true }, 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
