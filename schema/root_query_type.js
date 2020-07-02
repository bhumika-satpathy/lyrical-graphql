const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLString } = graphql;
const SongType = require('./song_type')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        songs: {
            type: GraphQLString,
            resolve(parentvalue){
                return 'Songs list'
            }
        },

        song: {
            type: GraphQLString,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args){
                return 'A particular song.'
            }
        },

        lyric: {
            type: GraphQLString,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args){
                return 'lyric type'
            }
        }
    })
})

module.exports = RootQuery;