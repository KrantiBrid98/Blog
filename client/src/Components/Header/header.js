import React from 'react'
import GoogleAuth from '../GoogleAuth/googleAuth'
import Categoryheader from './categoryheader'

const Header = () => {
    return (
        <div className="container header">
            <GoogleAuth />
            <Categoryheader />
        </div>
    )
}

export default Header