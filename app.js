require('dotenv').config()
require('express-async-errors')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on PORT:${PORT}`))
  } catch (error) {
    console.log(`Error:${error}`)
  }
}

start()
