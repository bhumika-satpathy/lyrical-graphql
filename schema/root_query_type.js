const graphql = require('graphql');
const db = require('../models/index');

const { GraphQLObjectType, GraphQLList, GraphQLString } = graphql;
const SongType = require('./song_type');
const LyricType = require('./lyric_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve: async (parentvalue) => {
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
            id: args.id,
          },
        });
        return song;
      },
    },

    lyric: {
      type: LyricType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: async (parentValue, args) => {
        const lyric = await db.lyrics.findOne({
          where: {
            id: args.id,
          },
        });
        return lyric;
      },
    },
  }),
});

module.exports = RootQuery;
