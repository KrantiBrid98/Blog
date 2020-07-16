const { neo4jgraphql } = require("neo4j-graphql-js");
const { gql } = require('apollo-server');


const typeDefs = gql`
    type Post {
        id: ID!,
        userName: String,
        userId: ID!,
        title: String,
        category: String,
        content: String
    }

    type Query {
        Post(id: ID
            userName: String
            userId: ID
            title: String
            category: String
            content: String
            _id: String
            first: Int
            offset: Int
            orderBy: [_PostOrdering]
            filter: _PostFilter) : [Post],
        Posts: [Post]
    }

    type Mutation {
        CreatePost(id: ID,  userName: String, userId: ID!, title: String, category: String, content: String): Post
    }
`

const resolver = {
    Query: {
        post(parent, params, ctx, resolveInfo) {
            return neo4jgraphql(parent, params, ctx, resolveInfo);
        },
        posts(parent, params, ctx, resolveInfo) {
            return neo4jgraphql(parent, params, ctx, resolveInfo);
        },
    },
    Mutation: {
        // it should be specifically CreatePost. there is no resolvers in neo4j
        CreatePost(parent, params, ctx, resolveInfo) {
            return neo4jgraphql(parent, params, ctx, resolveInfo);
        },
    }
}

module.exports= {typeDefs, resolver}