import React from'react'


const Badge=(props) => {
    console.log(props.namesArr)
    const myBadge = props.namesArr.map((item,i) => {
        return(
        <div key ={i+item.firstName}>
            <h2>{item.firstName}</h2>
            <h2>{item.lastName}</h2>
            <h2>{item.email}</h2>
            <h2>{item.birth}</h2>
            <h2>{item.phone}</h2>
            <h2>{item.favFood}</h2>
            <p>{item.personal}</p>
        </div>)
    })
    return (
        <div>
            {myBadge}
        </div>
    )
}

export default Badge