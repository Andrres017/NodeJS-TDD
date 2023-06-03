const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
require('dotenv').config()

mongoose.Promise = Promise

let mongoServer

module.exports.getUri = async () => {
  if (process.env.NODE_ENV === 'test') {
    if (!mongoServer) {
      mongoServer = new MongoMemoryServer()
      await mongoServer.start()
    }
    return mongoServer.getUri()
  }

  return process.env.DB_URI
}

module.exports.connect = async ({ uri }) => {
  const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }

  await mongoose.connect(uri, mongooseOpts)

  mongoose.connection.once('open', () => {
    console.log(`MongoDB successfully connected to ${uri}`)
  })
}

module.exports.closeDb = async () => {
  await mongoose.disconnect()

  if (process.env.NODE_ENV === 'test') {
    if (mongoServer) {
      await mongoServer.stop()
      mongoServer = null
    }
  }
}