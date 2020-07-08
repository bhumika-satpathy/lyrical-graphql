const graphql = require('graphql');

const {
  GraphQLObjectType, GraphQLString, GraphQLInt, GrapgQLString, GraphQLList,
} = graphql;

const SongType = new GraphQLObjectType({
  name: 'SongType',
  fields: () => ({
    songId: { type: GraphQLString },
    title: { type: GraphQLString },
    lyrics: { type: new GraphQLList(GraphQLInt) },
  }),
});

module.exports = SongType;
