const graphql = require('graphql');
const RootQueryType = require('./root_query_type');
const mutation = require('./mutations');

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
