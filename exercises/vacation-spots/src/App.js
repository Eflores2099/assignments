import React from 'react'
import  PlaceList from './PlaceList.js'
import './style.css'


const App = () => {

    let vacationSpots = [
        {
          place: "Tokyo",
          price: 2000,
          season: "Spring"
        },{
          place: "Cancun",
          price: 900,
          season: "Winter"
        },{
          place: "Shanghai",
          price: 1200,
          season: "Fall"
        },{
          place: "Moscow",
          price: 1100,
          season: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          season: "Spring"
        }
      ]
      
    
    return(
        <div>
            <PlaceList vacationSpots={vacationSpots}/>
  
        </div>
    )     
}

export default App

