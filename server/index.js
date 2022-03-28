const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema/type-defs')
const { resolvers } = require('./schema/resolvers')

const mongoose = require('mongoose')

// Creates MongoDB database
mongoose.connect('mongodb://localhost:27017/my-project')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(1338).then(({ url }) => {
	console.log(`YOUR API IS RUNNING AT: ${url} :)`)
})
