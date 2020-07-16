import React from 'react'
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { connect } from "react-redux";

const PostDetail = props => {
    console.log(props.userInfo.userProfileImg)
    return (
        <div className="postWrapper">
            {
                props.data.Post ?
                    (props.data.Post.map(post => {
                        return <div>
                            <h2 className="postHeading">{post.title}</h2>
                            <div className="d-flex justify-content-center">
                                <img className="userProfilePic" src={props.userInfo.userProfileImg} />
                                <p className="postAuthor">{post.userName}</p>
                                <button className="followBtn">follow</button>
                            </div>
                            <p className="postContent">{post.content}</p>
                        </div>
                    })) :
                    <div>loading</div>
            }
        </div>
    )
}

const query = gql`
query getPost($id:ID){
    Post(id:$id){
      title
      userName
      content
    }
  }`

const mapStateToProps = state => ({ userInfo: state.auth })

const Postdetail = connect(mapStateToProps, {})(PostDetail)

export default graphql(query, {
    options: props => { return { variables: { id: props.match.params.postid } } }
})(Postdetail)

// export default PostDetail