import React from 'react'

const AddEmployeeForm = props => {
    const {handleSubmit,handleChange, employeeId,firstName, lastName, email, phoneNum, btnText} = props
    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name= "employeeId"
                value={employeeId}
                onChange={handleChange}
                placeholder="ID"
                required/>
            <input
                type="text"
                name= "firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
                required/>
            <input
                type="text"
                name= "lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required/>
            <input
                type="text"
                name= "email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required/> 
            <input
                type="text"
                name= "phoneNum"
                value={phoneNum}
                onChange={handleChange}
                placeholder="Phone #"
                required/>

            <button>{btnText}</button>    
        </form>
    )
}


export default AddEmployeeForm