import React from 'react'
import Cities from './Cities'


const App = ()=> {

    // const cities= ['Chicago', 'Seattle', 'Tokyo', 'London']
    // const mappedCitiesComponents = cities.map((cities, i) => <Cities cities = {cities} key = {i}/>  )
//     return (
//         <div>
//         {mappedCitiesComponents}

//         </div>
//     )



    
// }

const people = [
    {
        name: "Rick",
        age: 70,
        favColor: "black"
    },
    {
        name: "Morty",
        age: 13,
        favColor: "yellow"
    },
    {
        name: "Jerry",
        age: 54,
        favColor: "purple"
    },
    {
        name: "Birdman",
        age: 135,
        favColor: "brown"
    }
]

const mappedCharacters = people.map((character, i) => 
<Person 
key ={i}
name={character.name} 
age= {character.age} 
favColor= {character.favColor}/>)



export default App