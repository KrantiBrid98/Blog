import React from 'react';
import { connect } from 'react-redux';
import defaultAutherPc from "../../Assets/defaultDP.png"

const UserProfile = props => {
    console.log(props.auth, 'auth')
    return (
        <div className="profileWrapper">
            {
                props.auth.isSignedIn !== null ? (
                    <>
                        <div class="d-flex justify-content-between">
                            <h4 className="userName">{props.auth.userName}</h4>
                            <img className="userPic" src={props.auth.userProfileImg} />
                        </div>
                        <hr />
                        <h3>Posts</h3>
                        <hr />
                    </>
                ) : <div>loading</div>
            }

        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(UserProfile)