import React from 'react'

const Bounty = (props) => {
    const { firstName,lastName, isLiving,type, _id, deleteBounty } = props
    return(
        <div style = {isLiving? {backgroundColor: "green"} : {backgroundColor: "red"}}>
            <h1>
                {firstName}
                {lastName}
            </h1>

            <button onClick = {() => deleteBounty(_id)}>Delete</button>


        </div>
    )
}

export default Bounty