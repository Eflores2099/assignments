import React from 'react'
import {Link} from 'react-router-dom'


const Navbar =(props) => {
    return (
        <div className ='nav'>
            <Link to = "/"> Home </Link>
            <Link to = "/Footer"> About </Link>
            <Link to = "/MainView"> Services </Link>
        </div>
    )
}










export default Navbar