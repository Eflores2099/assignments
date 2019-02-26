import React from 'react'
 

const EntryForm = (props) => {
    return (
        
        <form onSubmit= {props.handleSubmit}>
            
            <input type="text" name ="nameInput" value= {props.nameInput} onChange={props.handleChange} placeholder="Name"/>
            <button>Submit</button>
        </form>
    )
}


export default EntryForm