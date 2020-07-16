import gql from "graphql-tag";

export const getAllPost = gql`
    query{
        Post{
        title,
        category
        }
    }
`

export const getPostByCategory = gql`
    query POST($category: String) {
        Post(category: $category) {
        title
        }
    }
`