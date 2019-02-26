import React from'react'


const PriceList = props => {
    console.log(props)
    
    return (
        <div>
            {props.place}
            {props.price}
            {props.season}
        </div>   
    )
}


export default PriceList