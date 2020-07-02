const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const SongType = new GraphQLObjectType({
    name: 'SongType',
    fields: () => ({
        id: {
            type: {
                GraphQLID
            }
        },
        title: {
            type: {
                GraphQLString
            }
        }
    })
})

module.exports = SongType