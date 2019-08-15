import React from 'react'
import Friend from './Friend.js'

// const FriendList = props => {
// const mappedFriends = props.data.map((person, i)  => <Friend name = {person.name} age = {person.age} pets = {person.pets} key = {i}/>)
//     return(
//         <div style ={{ border: '2px, solid blue', margin: 5, padding: 5}}>
        
//     {mappedFriends}
//         </div>
//     )

// }
// export default FriendList
// import React from 'react'
// import Friend from './Friend.js'

const FriendList = (props) => {
    console.log(props.data)
    
    const mappedFriends = props.data.map((item, key) => (
        <Friend 
            name={item.name} 
            age={item.age} 
            pets={item.pets}
            key={key} 
        />
    ))
    
    return (
        <div id="container">{mappedFriends}</div>
    )
   
}

export default FriendList