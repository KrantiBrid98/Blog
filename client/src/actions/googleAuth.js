export const signIn = userInfo => {
    return {
        type: 'SIGN_IN',
        payload: userInfo
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}