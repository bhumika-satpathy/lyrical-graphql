// const graphql = require('graphql');

// const {
//   GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID,
// } = graphql;
// const SongType = require('./song_type');

// const LyricType = new GraphQLObjectType({
//   name: 'LyricType',
//   fields: () => ({
//     id: {
//       type: GraphQLInt,
//     },
//     likes: {
//       type: GraphQLInt,
//     },
//     content: {
//       type: GraphQLString,
//     },
//     song: {
//       type: SongType,
//       resolve(parentValue) {
//         return {};
//       },
//     },
//   }),
// });

// module.exports = LyricType;

const graphql = require('graphql');

const {
  GraphQLString, GraphQLObjectType, GraphQLInt,
} = graphql;

const LyricType = new GraphQLObjectType({
  name: 'LyricType',
  fields: () => ({
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: { type: GraphQLString },
  }),
});

module.exports = LyricType;
