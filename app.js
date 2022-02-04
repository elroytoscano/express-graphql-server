require('dotenv').config()
require('express-async-errors')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const xss = require('xss-clean')
const { graphqlHTTP } = require('express-graphql')

const schema = require('./schema')
const { helmet } = require('./middleware')
const { getErrorCode } = require('./errors')

const app = express()
const PORT = process.env.PORT

app.use(morgan('tiny'))
app.use(helmet())
app.use(cors())
app.use(xss())

app.use(express.json())

const start = async () => {
  const schemaObject = await schema()
  try {
    app.use(
      '/graphql',
      graphqlHTTP({
        schema: schemaObject,
        graphiql: true,
        customFormatErrorFn: (err) => {
          console.log(err)
          const error = getErrorCode(err.message)
          console.log(error)
          // return { message: error.message, statusCode: error.statusCode }
        },
      })
    )
    app.listen(PORT, () => console.log(`Server is listening on PORT:${PORT}`))
  } catch (error) {
    console.log(`Error:${error}`)
  }
}

start()
