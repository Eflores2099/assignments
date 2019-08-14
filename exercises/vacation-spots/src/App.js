import React from 'react'
import  VacationList from './VacationList.js'
import './style.css'


const App = () => {

    let vacationSpots = [
        {
              place: "Tokyo",
              price: 2000,
              imgURL: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1972&q=80"
        },  {
              place: "Reykyavik",
              price: 900,
              imgURL: "https://images.unsplash.com/photo-1465353471565-b77e538f34c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        },  {
              place: "Shanghai",
              price: 1200,
              imgURL: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        },  {
              place: "London",
              price: 1100,
              imgURL: "https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },  {
              place: "Lebanon",
              price: 400,
              imgURL: "https://images.unsplash.com/photo-1501960645408-12c9bcfca49f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        },  {
              place: "Prague",
              price: 700,
              imgURL: "https://images.unsplash.com/photo-1558370003-754ddc429c63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1939&q=80"
        }
      ]
      
    
    return(
        <div>
          <h1>Travel Cards</h1>
          <VacationList data={vacationSpots}/>
  
        </div>
    )     
}

export default App


