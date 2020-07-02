const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const LyricType = new GraphQLObjectType({
    name: 'LyricType',
    fields: () => ({
        id: {
            type: {
                GraphQLString
            }
        },
        likes: {
            type: {
                GraphQLInt
            }
        },
        content: {
            type: {
                GraphQLString
            }
        }
    })
})