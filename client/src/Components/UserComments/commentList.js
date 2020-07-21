import React from 'react'
import gql from 'graphql-tag'
import { graphql } from "react-apollo";

const CommentList = props => {
    if (props.data.Post)
        console.log(props.data.Post[0].comment, '+++++++++++++++++++++++++++')
    return (
        <div>
            {
                props.data.Post ? (
                    props.data.Post[0].comment.map(comment => {
                        console.log(comment)
                        return <div  className="comment-list">
                            <div>{comment.Comment.userName}</div>
                            <div><b>{comment.Comment.content}</b></div>
                        </div>
                    })
                ) : <div>loading</div>
            }
        </div>
    )
}

const query = gql`
    query POST($id: ID) {
        Post(id: $id) {
        comment {
            Comment {
            content
            userId
            userName
            }
        }
        }
    }  
`;

export default graphql(query, {
    options: props => {
        return {
            variables: { id: props.postId }
        }
    }
})(CommentList)