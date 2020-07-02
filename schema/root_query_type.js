const graphql = require('graphql');

const { GraphQLObjectType, GraphQLList, GraphQLString } = graphql;
const SongType = require('./song_type');
const LyricType = require('./lyric_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    songs: {
      type: SongType,
      resolve(parentvalue) {
        return 'Songs list';
      },
    },

    song: {
      type: SongType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return 'A particular song.';
      },
    },

    lyric: {
      type: LyricType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args) {
        return 'lyric type';
      },
    },
  }),
});

module.exports = RootQuery;
