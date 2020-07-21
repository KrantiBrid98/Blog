import React from 'react'
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { connect } from "react-redux";
import defaultAutherPc from "../../Assets/defaultDP.png";
import UserComments from '../UserComments/userComments';
import CommentList from '../UserComments/commentList';

class PostDetail extends React.Component {
    render() {
        let Post;
        let autherPic;
        if (!this.props.data.loading) {
            Post = this.props.data.Post[0]
            autherPic = Post.userImg === null ? defaultAutherPc : Post.userImg
        }
        console.log(Post, 'Post')
        return (
            <div className="postWrapper">
                {
                    Post ?
                        (<div>
                            <h2 className="postHeading">{Post.title}</h2>
                            <div className="d-flex justify-content-center">
                                <img className="userProfilePic" src={autherPic} />
                                <p className="postAuthor">{Post.userName}</p>
                                <button className="followBtn">follow</button>
                            </div>
                            <p className="postContent">{Post.content}</p>
                            <hr />
                            <UserComments postId={this.props.match.params.postid}/>
                            <CommentList postId={this.props.match.params.postid}/>
                        </div>
                        ) :
                        <div>loading</div>
                }
            </div>
        )
    }
}

const query = gql`
query getPost($id:ID){
    Post(id:$id){
      title
      userName
      content
      userImg
    }
  }`

const mapStateToProps = state => ({ auth: state.auth })

const Postdetail = connect(mapStateToProps, {})(PostDetail)

export default graphql(query, {
    options: props => { return { variables: { id: props.match.params.postid } } }
})(Postdetail)

// export default PostDetail