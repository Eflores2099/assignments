import React from 'react'


const Person = (props) =>{
    return (
        <div style= {{backgroundColor: props.favColor}} >
            <h1>Hi my name is{props.name},and I am {props.age} year old.</h1>
        </div>
    )
}

export default Person