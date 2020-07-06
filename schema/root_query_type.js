const graphql = require('graphql');
const SongType = require('./song_type');
const db = require('../models/index');

const { GraphQLString, GraphQLObjectType, GraphQLList } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve: async (parentValue, args) => {
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
  }),
});

module.exports = RootQueryType;
