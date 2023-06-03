const express = require('express')

const { store } = require('./services/product-service')

const router = express.Router()

router.post('/products', async (req, res) => {
  const { name, description, price } = req.body

  const _id = 'abc'

  await store({ name, description, price })

  res.status(201).json({
    name,
    description,
    price,
    _id,
  })
})

module.exports.router = router
