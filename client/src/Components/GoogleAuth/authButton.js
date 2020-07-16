import React from "react";

// can be used for other authentication types too
const AuthButton = ({ state, isSignedIn, onSignOutClick, onSignInClick }) => {
    console.log(isSignedIn, 'button')
    if (isSignedIn === 'null') {
        return <div>Loading...</div>
    }
    return <div className="ui inverted segment" style={{ "padding": "2px","marginBottom":"2px" }}>
        {
            isSignedIn ?
                <button data-testid="authButton" className="ui inverted red button authBtn" onClick={onSignOutClick}>{state.label.signOut}</button>
                :
                <button data-testid="authButton" className="ui inverted red button authBtn" onClick={onSignInClick}><i className="fa fa-google"></i>{state.label.signIn}</button>
        }
    </div>

    // else if (isSignedIn) {
    //     return <div className="ui inverted segment" style={{"padding":"2px"}}>
    //         <button data-testid="authButton" className="ui inverted red button authBtn" onClick={onSignOutClick}>{state.label.signOut}</button>
    //     </div>
    // } else {
    //     return <div className="ui inverted segment" style={{"padding":"2px"}}>
    //         <button data-testid="authButton" className="ui inverted red button authBtn" onClick={onSignInClick}><i className="fa fa-google"></i>{state.label.signIn}</button>
    //     </div>
    // }
}

export default AuthButton;