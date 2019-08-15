import React from 'react'
import Pet from './Pet.js'

// const Friend = props => {
//     const mappedPets= props.pets.map((pet, i) => <Pet name ={pet.name} breed = {pet.breed}/>)
//     // const mappedfriends = props.friends.map((friend, i) => <Friend name ={friend} key ={i}/>) 

//     return (
//     <div> 
//         <div style = {{ border: "2px, solid green", margin: 5, padding: 5}}>
            
//         <h1>Name:{props.name}</h1>
//          <h3>Age:{props.age}</h3>
//          <h3>Here are my pets:</h3>   
            
//         </div>

        
//         {mappedPets}
//     </div>
//     )
// }

const Friend = (props) => {
    
    const mappedPets = props.pets.map((pet, key) => (
        <Pet 
            name={pet.name} 
            breed={pet.breed} 
            key={key}
        />
    ))
    

    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <h3>Pets:</h3>
            <ul>
                {mappedPets}
            </ul>
        </div>
    )
}





export default Friend