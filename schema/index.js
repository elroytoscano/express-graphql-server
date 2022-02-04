const path = require('path')
const { loadSchema } = require('@graphql-tools/load')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')

const resolvers = require('../resolvers')

const schema = async () => {
  return await loadSchema(path.join(__dirname, './schema.graphql'), {
    loaders: [new GraphQLFileLoader()],
  }).then((response) => response)
}

module.exports = async () => {
  const typeDefs = await schema()
  return makeExecutableSchema({
    typeDefs,
    resolvers,
  })
}
