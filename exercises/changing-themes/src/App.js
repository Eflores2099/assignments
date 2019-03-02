import React from 'react'
import Nav from './Nav.js'
import Main from './Home.js'
import Footer from './Contact.js'
import {Route} from 'react-router-dom'




const App = () => {
    return (
        <div>
            <Nav />
            <Route exact path = '/' component = {Main}/>
            {/* <Route  path = '/Nav.js' component = {}/> */}
            <Route path = '/Footer.js' component = {Footer}/>
            <Main />
            <Footer />
            
            <div>
                <button>Change Theme</button>
            </div>

        </div>
    )
}








export default App