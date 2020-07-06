const graphql = require('graphql');
const SongType = require('./song_type');
const db = require('../models/index');

const {
  GraphQLObjectType, GraphQLString, GraphQLInt,
} = graphql;

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
      type: GraphQLString,
      args: {
        id: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      resolve: async (parentValue, args) => {
        await db.lyrics.create({
          song: args.id,
          content: args.content,
        });
        return 'Lyric added successfully!';
      },
    },

    likeLyric: {
      type: GraphQLString,
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: async (parentValue, args) => {
        await db.lyrics.update({ likes: 1 }, {
          where: {
            id: args.id,
          },
        });
        return 'Lyric Liked!';
      },
    },

    deleteSong: {
      type: GraphQLString,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: async (parentValue, args) => {
        await db.songs.destroy({
          where: {
            songId: args.id,
          },
        });
        return 'Song deleted successfully!';
      },
    },
  }),
});

module.exports = mutation;
