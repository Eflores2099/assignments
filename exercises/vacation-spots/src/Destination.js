import React from 'react'
import VacationList from './VacationList.js'

const Destination = (props) => {
    // console.log(props)
   let dollarSigns 

   if (props.price > 5000) {
        dollarSigns = "$$$"
    } else if (props.price > 1150) {
        dollarSigns = "$$"
    } else {
        dollarSigns = "$"
    }

    return(
        
        <div>
        <div className="photo" style={{ backgroundImage: "url(" + props.imgURL + ")" }}>
                <h2>{props.place}</h2>
            </div>
            <p>${props.price}</p>
            <p className="dollars">{dollarSigns}</p>
        </div>
    )
}

export default Destination

