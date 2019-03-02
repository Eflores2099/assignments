import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
    return (
        <nav className = "nav-container">
           <Link to = "/"> Home </Link>
            <Link to = "/About"> About </Link>
            <Link to = "/Contact"> Contact </Link>
            
        </nav>
    )
}

export default Nav