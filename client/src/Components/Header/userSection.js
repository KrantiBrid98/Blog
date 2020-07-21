import React from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'

const UserSection = props => {
    if (props.auth.isSignedIn === null)
        return <div>loading</div>
    return (
        <div>
            {
                props.auth.isSignedIn
                    ? (
                         <div className="ui compact menu" style={{"border":"0px"}}>
                            <div className="ui simple dropdown item" style ={{backgroundColor: "#3b3939"}}>
                            <img className="userBtn" src={props.auth.userProfileImg} id="dropdownMenuButton" />
                          <i className="dropdown icon"></i>
                                <div className="menu">
                                    <Link to="/addBlog" className="item">Add Post</Link>
                                    <Link to="/user" className="item">Profile</Link>
                                </div>
                            </div>
                        </div>
                    )
                    : <div>loading</div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return { auth: state.auth }
}
export default connect(mapStateToProps, {})(UserSection)