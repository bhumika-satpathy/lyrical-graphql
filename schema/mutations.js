const graphql = require('graphql');
const SongType = require('./song_type');
const db = require('../models/index');

const {
  GraphQLObjectType, GraphQLString, GraphQLID,
} = graphql;
const LyricType = require('./lyric_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addSong: {
      type: SongType,
      args: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
      },
      resolve: async (parentValue, args) => {
        const newSong = {
          songId: args.id,
          title: args.title,
          lyrics: [],
        };
        await db.songs.create(newSong);
        return newSong;
      },
    },

    addLyricToSong: {
      type: SongType,
      args: {
        id: { type: GraphQLID },
        content: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return 'Lyric added';
      },
    },

    // likeLyric: {
    //   type: LyricType,
    //   args: {
    //     id: {
    //       type: GraphQLID,
    //     },
    //   },
    //   resolve(parentValue, args) {
    //     return 'Liked the lyric';
    //   },
    // },

    // deleteSong: {
    //   type: SongType,
    //   args: {
    //     id: {
    //       type: GraphQLID,
    //     },
    //   },
    //   resolve(parentValue, args) {
    //     return 'Deleted the song';
    //   },
    // },
  }),
});

module.exports = mutation;
