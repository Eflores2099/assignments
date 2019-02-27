import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import MainView from './MainView'
import { Switch, Route} from 'react-router-dom'
import './style.css'


const App = () => {
    return(
        <div>
            <Navbar />
            <Switch>
                <Route  exact path = '/' component = {MainView}/>
                <Route path = '/Navbar.js' component = {Navbar}/>
                <Route path = '/Footer.js' component = {Footer}/>
            <MainView />
            </Switch>
            <Footer />
    
        </div>
    )
}





export default App