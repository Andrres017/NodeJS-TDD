// models/product-model.js
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  price: String,
})

module.exports = mongoose.model('products', productSchema)
