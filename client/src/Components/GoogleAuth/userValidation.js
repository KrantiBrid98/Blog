import React from 'react'
import gql from 'graphql-tag'

class UserValidation extends React.Component {
    render(){
        return <div>Welcome</div>
    }
}

const  isUserExist = gql`
    query USER($userEmail: String) {
        User(userEmail: $userEmail) {
        userName
        }
    }
`;

export default UserValidation;