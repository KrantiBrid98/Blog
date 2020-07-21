import React from 'react';
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import empty_postList from '../../Assets/empty_postList.png'

const PostsList = props => {
    let posts = props.data.Post
    return (
        <div>
            {
                posts ? (posts.length > 0 ? posts.map(post => {
                    return <Link to={`/post/postid${post.id}`} key ={post.id}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{post.title}</h3>
                                <p className="card-text">{post.content}</p>
                                <h6>{post.userName}</h6>
                            </div>
                        </div>
                    </Link>
                }) : <div style={{ "textAlign": "center" }}><img src={empty_postList} /></div>
                ) : <div>Loading</div>
            }
        </div>
    )
}

const query = gql`
query getPostByCategory($category:String){
	Post(category:$category){
    id
    title
    content
    userName
  }
}
`

// graphql has access to the props that are passed to PostsList
export default graphql(query, {
    options: props => {
        if (props.match.params.category !== 'All')
            return {
                variables: { category: props.match.params.category }
            }
    }
})(PostsList);

