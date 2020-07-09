//https://grandstack.io/docs/neo4j-graphql-js-quickstart/
const { ApolloServer } = require('apollo-server');
const { makeAugmentedSchema } = require('neo4j-graphql-js');
const neo4j = require('neo4j-driver');

const { typeDefs, resolver } = require('./src/resolvers')

const schema = makeAugmentedSchema({ typeDefs });

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic('neo4j', 'BLOG-POST')
);

const server = new ApolloServer({ schema, context: { driver } });

server.listen().then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});
