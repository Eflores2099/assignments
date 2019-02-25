import React from 'react'

const CounterControls = props => {
    return (
        <div>
            <button onClick ={props.handleIncremet}> + </button> 
        </div>
    )
}

    
export default CounterControls