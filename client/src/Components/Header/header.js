import React from 'react'
import GoogleAuth from '../GoogleAuth/googleAuth'
import Categoryheader from './categoryheader'
import UserSection from './userSection'

const Header = () => {
    return (
        <div className="container header">
            <div className="d-flex justify-content-end">
                <GoogleAuth />
                <UserSection />
            </div>
            <Categoryheader />
        </div>
    )
}

export default Header