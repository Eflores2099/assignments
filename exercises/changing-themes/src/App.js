import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import { Switch, Route} from 'react-router-dom'


const App = (props) => {
    return (
        <div>
            <Nav />
            <Switch>
            <Main />
            </Switch>
            <Footer />
            <div>

            </div>
            <div>
                <button onClick= {props.toggleTheme}> Change Theme {props.theme ==='light' ? 'dark': 'light'} !</button>
            </div>

        </div>
    )
}








export default App