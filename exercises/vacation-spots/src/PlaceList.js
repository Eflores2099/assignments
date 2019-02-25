import React from 'react'
import PriceList from './PriceList.js'

const PlaceList = props => {
    // console.log(props)
    const mappedPrices = props.vacationSpots.map((price, i) => 
                                            <PriceList  
                                            place = {price.place} 
season = {price.season} 
price = {price.price} 
                                            key = {i}/>)

    return(
        
        <div>
            {mappedPrices}
        </div>
    )
}

export default PlaceList

