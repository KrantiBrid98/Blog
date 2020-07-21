import React from "react";
import { Link } from 'react-router-dom'

// can be used for other authentication types too
const AuthButton = ({ state, isSignedIn, onSignOutClick, onSignInClick }) => {
    if (isSignedIn === 'null') {
        return <div>Loading...</div>
    }
    return <div>
        {
            isSignedIn ?
                <Link to='/'>
                    <button data-testid="authButton" className="ui inverted red button authBtn" onClick={onSignOutClick}>{state.label.signOut}</button>
                </Link>
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