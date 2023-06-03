const request = require('supertest')

const { app } = require('../server')
const { Builder } = require('../builders/product-builder.js')
const { store } = require('../services/product-service')

jest.mock('../services/product-service.js')

beforeEach(() => {
  store.mockReset()
})

describe('POST /products', () => {
  test('should store a new product', async () => {
    // code...
  })

  test('should execute store function', async () => {
    const product = Builder.product()

    await request(app)
      .post('/products')
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)

    expect(store).toHaveBeenCalledWith(product)
  })
})
