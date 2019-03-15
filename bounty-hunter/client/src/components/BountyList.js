import React from "react"
import Bounty from './Bounty.js'

const BountyList = props => {
    return (
        <div>
            { props.bounty.map(bounty =>
                <Bounty
                deleteBounty ={props.deleteBounty}
                key={bounty._id}
                {...bounty}
                />) 
            }
        </div>
    )
}

export default BountyList