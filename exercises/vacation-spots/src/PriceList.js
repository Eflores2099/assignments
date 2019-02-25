import React from'react'


const PriceList = props => {
    console.log(props)
    
    return (
        <div className = 'card-container'>
            {props.place}
            {props.price}
            {props.season}
        </div>   
    )
}


export default PriceList