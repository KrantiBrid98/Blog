import React from 'react'
import GoogleAuth from '../GoogleAuth/googleAuth'

const Header = () => {
    return (
        <div class="container header">
            {/* <div class="row">
                <div class="col-sm" style={{"marginLeft":"70%"}}> */}
                    <GoogleAuth />
                {/* </div>
            </div> */}
        </div>
    )
}

export default Header