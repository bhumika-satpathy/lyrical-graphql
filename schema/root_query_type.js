const graphql = require('graphql');
const SongType = require('./song_type');
const db = require('../models/index');

const {
  GraphQLString, GraphQLObjectType, GraphQLList, GraphQLNonNull,
} = graphql;
const LyricType = require('./lyric_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve: async () => {
        const songs = await db.songs.findAll({});
        return songs;
      },
    },

    song: {
      type: SongType,
      args: { id: { type: GraphQLString } },
      resolve: async (parentValue, args) => {
        const song = await db.songs.findOne({
          where: {
            songId: args.id,
          },
        });
        return song;
      },
    },

    lyric: {
      type: LyricType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parentValue, args) => {
        const lyric = await db.lyrics.findOne({
          where: {
            song: args.id,
          },
        });
        return lyric;
      },
    },
  }),
});

module.exports = RootQueryType;
