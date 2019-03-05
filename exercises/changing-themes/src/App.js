import React from 'react'
import Nav from './Nav.js'
import Home from './Home.js'
import Contact from './Contact.js'
import About from './About.js'
import {Route} from 'react-router-dom'
import { luzTheme } from './context/ThemeProvider'
import './style.css'




const App = (props) => {
    return (
        <div>
            <Nav />
            <Route exact path = '/' component = {Home}/>
            <Route path = '/Contact.js' component = {Contact}/>
            <Home />
            <div className = "button">
                <button onClick = {props.toggleTheme}>Change Theme {props.theme === "light" ? "dark" : "light" } </button>
            </div>
            <About />
            <Contact />
            
           

        </div>
    )
}


export default luzTheme (App)