import React from 'react'
import Friend from './Friend.js'

const FriendList = props => {
const mappedFriends = props.friends.map((person, i)  => <Friend name = {person.name} age = {person.age} pets = {person.pets} key = {i}/>)
    return(
        <div style ={{ border: '2px, solid blue', margin: 5, padding: 5}}>
        
    {mappedFriends}
        </div>
    )

}
export default FriendList