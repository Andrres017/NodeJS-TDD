// controllers/product-controller.js

const { store } = require('../services/product-service')

module.exports.createProduct = async (req, res) => {
  const { name, description, price } = req.body

  const _id = 'abc'

  await store({ name, description, price })

  res.status(201).json({
    name,
    description,
    price,
    _id,
  })
}
