import React from 'react'
import {} from ''


const App = (props) => {
    return (
        <div>
            <div>
                <p>Home Page</p>

            </div>
            <div>
                <button onClick= {props.toggleTheme}> Change Theme {props.theme ==='light' ? 'dark': 'light'} !</button>
            </div>

        </div>
    )
}








export default App