const graphql = require('graphql');
const SongType = require('./song_type');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const SongType = require('./song_type');
const LyricType = require('./lyric_type')

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addSong: {
            type: SongType,
            args: {
                id: GraphQLString,
                title: GraphQLString
            },
            resolve(parentValue, args){
                return 'add song'
            }
        },

        addLyricToSong: {
            type: SongType,
            args: {
                id: {
                    type: GraphQLID
                },
                content: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args){
                return 'Lyric added'
            }
        },

        likeLyric: {
            type: LyricType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parentValue, args){
                return 'Liked the lyric'
            }
        },

        deleteSong: {
            type: SongType,
            args: {
                id:
                {
                    type: GraphQLID
                }
            },
            resolve(parentValue, args){
                return 'Deleted the song'
            }
        }
    })
})