import React from 'react'



const infoCard = (props) => {
    console.log(props)
    return(
        <form  className = "forms" onSubmit = {props.handleSubmit}>
                <input  className = "firstName" type = "text" 
                    name ="firstNameInput" 
                    value = {props.firstName} 
                    onChange = {props.handleChange} 
                    placeholder = "First Name"/>
                <input className = "lastName" type = "text" 
                    name = "lastNameInput" 
                    value = {props.lastName} 
                    onChange = {props.handleChange} 
                    placeholder = "Last Name"/>
                <input className  = "email" type = "text" 
                    name = "emailInput" 
                    value = {props.emailInput} 
                    onChange = {props.handleChange} 
                    placeholder = "Email"/>
                <input className = "birth" type = "text" 
                    name = "birthInput" 
                    value = {props.birthInput} 
                    onChange = {props.handleChange} 
                    placeholder = "Birth Place"/>
                <input className = "phone" type = "number" 
                    name = "phoneInput" 
                    value = {props.phoneInput} 
                    onChange = {props.handleChange}  
                    placeholder = "Phone Number"/>
                <input className = "favFood" type = "text" 
                    name  = "favFoodInput" 
                    value = {props.favFoodInput} 
                    onChange = {props.handleChange} 
                    placeholder = "Favorite Food"/>
                <input className = "personal" type = "text" 
                    name = "personalInput" 
                    value = {props.personalInput} 
                    onChange = {props.handleChange} 
                    placeholder = "Tell us about youself"/>
    
                    <button>Submit</button>
                </form>
    )
}

export default infoCard