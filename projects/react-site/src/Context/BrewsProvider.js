import React, { Component } from 'react'
import axios from 'axios'

const BrewsContext = React.createContext()

class BrewsProvider extends Component {
    constructor() {
        super()
        this.state = {
            breweriesArr: []
        }
        this.url = "https://api.openbrewerydb.org/breweries"
    }


    getBrews = (userInput) => {
        
        axios.get(`https://api.openbrewerydb.org/breweries?by_name=${userInput}`).then(response => { 
            console.log(response)
            this.setState({

                breweriesArr: response.data
            })
        })
    }

    render(){
        return(
            <BrewsContext.Provider value = {{getBrews: this.getBrews, breweriesArr: this.state.breweriesArr}}>
            {this.props.children} 
            </BrewsContext.Provider>
        )
    }
}


export const withBrews = C => props => (
    <BrewsContext.Consumer>
        {value => <C {...props} {...value}/>}
    </BrewsContext.Consumer>
)
export default BrewsProvider