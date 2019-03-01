import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className = "nav-container">
            <Link to = '/'>Home</Link>
            <Link to = '/Main'>Main Page</Link>
            <Link to = '/Footer'>Footer</Link>
            
        </div>
    )
}

export default Nav