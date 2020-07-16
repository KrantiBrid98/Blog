import React from "react";
import AuthButton from "./authButton";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions/googleAuth"

class GoogleAuth extends React.Component {
    state = {
        label: {
            signIn: " Sign in",
            signOut: " Sign out"
        }
    };
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "337819797616-kpmv7a4k82m51fs17ra44euqpkkmlr5o.apps.googleusercontent.com",
                    scope: "email",
                    cookiepolicy: 'single_host_origin',
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.changeSignedStatus(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.changeSignedStatus);
                });
        });
    }

    onSignInClick = () => this.auth.signIn();

    onSignOutClick = () => this.auth.signOut();

    changeSignedStatus = (isSignedIn) => {
        if (isSignedIn) {
            let userInfo = {
                isSignedIn: isSignedIn,
                userId: this.auth.currentUser.get().getId(),
                userName: this.auth.currentUser.get().getBasicProfile().getName(),
                userProfileImg: this.auth.currentUser.get().getBasicProfile().getImageUrl()
            }
            this.props.signIn(userInfo)
        } else {
            this.props.signOut()
        }
    }

    render() {
        return <AuthButton state={this.state} isSignedIn={this.props.isSignedIn} onSignInClick={this.onSignInClick} onSignOutClick={this.onSignOutClick} />
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        userName: state.auth.userName
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);