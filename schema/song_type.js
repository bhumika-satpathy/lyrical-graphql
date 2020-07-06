// const graphql = require('graphql');
// const db = require('../models/index');

// const {
//   GraphQLObjectType, GraphQLString, GraphQLList,
// } = graphql;
// const LyricType = require('./lyric_type');

// const SongType = new GraphQLObjectType({
//   name: 'SongType',
//   fields: () => ({
//     songId: {
//       type: GraphQLString,
//     },
//     title: {
//       type: GraphQLString,
//     },
//     lyrics: {
//       type: new GraphQLList(LyricType),
//       resolve: async (parentValue, args) => {
//         console.log(parentValue);
//         return [];
//       },
//     },
//   }),
// });

const graphql = require('graphql');
// const db = require('../models/index');

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
