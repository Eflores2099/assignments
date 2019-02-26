import React, {Component} from 'react'
import InfoCard from './InfoCard.js'
import './style.css'

class App extends Component {
    constructor() {
        super()
        this.state= {
            firstNameInput: "",
            lastNameInput: "",
            emailInput: "",
            birthInput: "",
            phoneInput: "",
            favFoodInput: "",
            personalInput: ""
        }
    }


handleChange = (e) => {
    this.setState({
       [e.target.name]: 
       e.target.value 
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState =>{
        return {
            firstNameInput: "",
            lastNameInput: "",
            emailInput: "",
            birthInput: "",
            phoneInput: "",
            favFoodInput: "",
            personalInput: ""
        }
    })
}    

    render(){
        return (
            <div>
                <InfoCard />
            </div>
        )}
    }



export default App

