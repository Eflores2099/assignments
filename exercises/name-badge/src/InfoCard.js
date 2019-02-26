import React from 'react'



const infoCard = (props) => {
    return(
        <form  nameClass = "forms" onSubmit = {props.handleSubmit}>
                <input type = "text" 
                    name =" firstName" 
                    value = {props.firstName} 
                    onChange = {props.handleChange} 
                    placeholder = "First Name"/>
                <input type = "text" 
                    name = "lastName" 
                    value = {props.lastName} 
                    onChange = {props.handleChange} 
                    placeholder = "Last Name"/>
                <input type = "text" 
                    name = "email" 
                    value = {props.emailInput} 
                    onChange = {props.handleChange} 
                    placeholder = "Email"/>
                <input type = "text" 
                    name = "birth" 
                    value = {props.birthInput} 
                    onChange = {props.handleChange} 
                    placeholder = "Birth Place"/>
                <input type = "number" 
                    name = "phone" 
                    value = {props.phoneInput} 
                    onChange = {props.handleChange}  
                    placeholder = "Phone Number"/>
                <input type = "text" 
                    name  = "favFood" 
                    value = {props.favFoodInput} 
                    onChange = {props.handleChange} 
                    placeholder = "Favorite Food"/>
                <input type = "text" 
                    name = "peronalInput" 
                    value = {props.personalInput} 
                    onChange = {props.handleChange} 
                    placeholder = "Tell us about youself"/>
    
                    <button>Submit</button>
                </form>
    )
}

export default infoCard