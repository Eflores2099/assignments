import React from 'react'


const BountyForm = props => {
    const { handleSubmit,handleChange, firstName,lastName, isLiving, type } = props
        return(
            <form onSubmit = {handleSubmit}>
                <input
                    type= "text"
                    name= "firstName"
                    value= {firstName}
                    onChange={handleChange}/>
                <input 
                    type= "text"
                    name= "lastName"
                    value= {lastName}
                    onChange= {handleChange}/>  
                <input 
                    type= "checkbox"
                    name= "isLiving"
                    value= {isLiving}
                    onChange={handleChange}/>
                        Check if Living:
                <input
                    type= "custom-select"
                    name= "type" 
                    value= {type}
                    onChange= {handleChange}/>
                        Jedi or Sith?:       

            </form>
        )

}

export default BountyForm