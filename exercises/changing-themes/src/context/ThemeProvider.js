import React, { Component } from 'react'

const ThemeContext = React.createContext()


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
        return (

        )
    }
}
export default ThemeProvider