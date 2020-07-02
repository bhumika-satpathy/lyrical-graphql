const RootQueryType = require('./root_query_type');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
    query: RootQueryType
})