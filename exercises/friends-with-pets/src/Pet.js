import React from 'react'


// const Pet = props => {
//     return (
//         <div style = {{ border: '2px,  solid violet', margin: 5, padding: 5}}>
//             <p>Name:{props.name}</p>
//             <p>Breed:{props.breed}</p>
//         </div>
//     )
// }

const Pet = (props) => {

    return (
        <li>
            Name: {props.name}<br />
            Breed: {props.breed}
        </li>
    )
}


export default Pet