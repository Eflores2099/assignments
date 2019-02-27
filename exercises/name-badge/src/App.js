import React, {Component} from 'react'
import InfoCard from './InfoCard'
import './style.css'
import Badge from './Badge'

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
            personalInput: "",
            namesArr: []
        }
    }


handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({
       [e.target.name]: 
       e.target.value 
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
        firstName: this.state.firstNameInput,
        lastName: this.state.lastNameInput,
        email: this.state.emailInput,
        birth: this.state.birthInput,
        phone: this.state.phoneInput,
        favFood: this.state.favFoodInput,
        personal: this.state.personalInput,

    }
    this.setState(prevState =>{
        return {
            firstNameInput: "",
            lastNameInput: "",
            emailInput: "",
            birthInput: "",
            phoneInput: "",
            favFoodInput: "",
            personalInput: "",
            namesArr: [...prevState.namesArr, newPerson]

        }
    })
}    

    render(){
        return (
            <div>
                <InfoCard 
                handleChange= {this.handleChange}
                handleSubmit= {this.handleSubmit}
                firstName = {this.state.firstNameInput}
                lastName= {this.state.lastNameInput}
                emailInput= {this.state.emailInput}
                birthInput= {this.state.birthInput}
                phoneInput = {this.state.phoneInput}
                favFoodInput={this.state.favFoodInput}
                personalInput= {this.state.personalInput}
                />
                <Badge 
                namesArr ={this.state.namesArr}/>
            </div>
        )}
    }



export default App

