const graphql = require('graphql');

const {
  GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList,
} = graphql;
const LyricType = require('./lyric_type');

const SongType = new GraphQLObjectType({
  name: 'SongType',
  fields: () => ({
    id: {
      type: {
        GraphQLID,
      },
    },
    title: {
      type: {
        GraphQLString,
      },
    },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue, args) {
        return 'Lyrics';
      },
    },
  }),
});

module.exports = SongType;
