import React, { Component } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class UserComments extends Component {
    state = {
        comment: ""
    }

    onChange = e => {
        this.setState({ comment: e.target.value })
    }

    onClickSubmit = () => {
        console.log(this.props)
        this.props.mutate({
            variables: {
                commentId: uuidv4(),
                postId: this.props.postId,
                userId:this.props.auth.userId,  // user is the one who is written the comment (auth i.e signed in user)
                userName:this.props.auth.userName,
                content:this.state.comment
            }
        })
        this.setState({ comment: "" }) 
    }
    
    render() {
        console.log(this.props.auth.userId, 'props')
        return (
            <div>
                {this.props.auth.isSignedIn ? (<><input className="comment-box" placeholder="Your comment.."
                    value={this.state.comment}
                    onChange={(e) => this.onChange(e)}
                />
                    <button className="ui primary basic button"
                        onClick={this.onClickSubmit}
                    >Submit</button></>
                )
                    : <div className="error">Please signin to add comment</div>
                }
            </div>
        )
    }
}

const mutation = gql`
    mutation CREATECOMMENT(
        $commentId: ID!
        $postId: ID!
        $userId: ID
        $userName: String
        $content: String
    ) {
        CreateComment(
            commentId: $commentId
            postId: $postId
            userId: $userId
            userName: $userName
            content: $content
        ) {
            content
        }

        AddPostComment(
            from: { commentId: $commentId }
            to: { id: $postId }
          ) {
            from {
              content
              userName
            }
            to {
              userName
              category
              content
            }
          }
    }
`;

const mapStateToProps = state => {
    return { auth: state.auth }
}

const UserComment = graphql(mutation)(UserComments)
export default connect(mapStateToProps, {})(UserComment)