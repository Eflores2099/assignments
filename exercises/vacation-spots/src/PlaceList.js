import React from 'react'
import PriceList from './PriceList.js'

const placeList = props => {
    const mappedPrices = prop.price.map((price, i) => <Price place = {vacationSpots.place}  price = {vacationSpots.price} season = {vacationSpots.season} key= {i}/>)

    return(
        
        
        <div style ={{border:'1px solid rose',margin: 4}}>

        {mappedPrices}
        </div>
    )
}
export default PlaceList