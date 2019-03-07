import React, {Component} from 'react'
import ResultPage from './ResultPage.js'
import {withBrews} from '../Context/BrewsProvider'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ""
        }

    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    handleSubmit = (e) => {
        
        e.preventDefault()
        this.props.getBrews(this.state.userInput)
         this.props.history.push('/ResultPage') 
        
        
}


    render() {
        return (
            <div className = "form">
                <form onSubmit ={this.handleSubmit}>
                    <input type = "text" name = "userInput" onChange = {this.handleChange} placeholder = "Name of Brewery"/>
                    <button className = "button">Submit</button>            
                </form>
                <ResultPage />
                 
            </div>
        )
    }
}

export default withBrews(Home)