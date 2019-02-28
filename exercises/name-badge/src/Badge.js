import React from'react'


const Badge=(props) => {
    console.log(props.namesArr)
    const myBadge = props.namesArr.map((item,i) => {
        return(
        <div className = "badge" key ={i+item.firstName}>
            <h1 className = "greeting">Hello, My Name is:</h1>
            <h2>Name: {item.firstName}</h2>
            <h2>{item.lastName}</h2>
            <h2>Email: {item.email}</h2>
            <h2>Place of Birth: {item.birth}</h2>
            <h2> Phone Number: {item.phone}</h2>
            <h2> Favorite Food: {item.favFood}</h2>
            <p> A bit About Me: {item.personal}</p>
        </div>)
    })
    return (
        <div>
            {myBadge}
        </div>
    )
}

export default Badge