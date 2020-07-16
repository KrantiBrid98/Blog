const INITIAL_STATE = {
    isSignedIn: null,
    userId: '',
    userName: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN': 
        console.log(action.payload.userId, 'action')
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload.userId,
                userName: action.payload.userName,
                userProfileImg: action.payload.userProfileImg
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isSignedIn: false,
                userId: null,
                userName: null,
            }
        default:
            return state
    }
}