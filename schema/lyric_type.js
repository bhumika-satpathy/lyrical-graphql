const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const SongType = require('./song_type');

const LyricType = new GraphQLObjectType({
  name: 'LyricType',
  fields: () => ({
    id: {
      type: {
        GraphQLString,
      },
    },
    likes: {
      type: {
        GraphQLInt,
      },
    },
    content: {
      type: {
        GraphQLString,
      },
    },
    song: {
      type: {
        SongType,
      },
      resolve(parentValue) {
        return 'songs';
      },
    },
  }),
});

module.exports = LyricType;
