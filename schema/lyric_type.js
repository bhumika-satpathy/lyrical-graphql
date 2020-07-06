const graphql = require('graphql');

const {
  GraphQLString, GraphQLObjectType, GraphQLInt,
} = graphql;

const LyricType = new GraphQLObjectType({
  name: 'LyricType',
  fields: () => ({
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: { type: GraphQLString },
  }),
});

module.exports = LyricType;
