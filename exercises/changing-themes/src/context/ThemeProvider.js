import React, { Component } from 'react'
import ThemeProvider from './context/ThemeProvider.js'


class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            theme : "dark"
        }
    }

    toggleTheme = () => {
        this.setState(prevState => ({ 
            theme: prevState.theme === "light" ? "dark" : "light"

        }))
    }












    render() {
        return(

        )
    }
}
export default ThemeProvider