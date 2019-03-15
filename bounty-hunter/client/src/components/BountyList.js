import React from "react"
import Bounty from './Bounty.js'
import {withBounties} from '../context/BountyProvider'

const BountyList = props => {
    console.log(props)
    return (
        <div>
            { props.bounties.map(bounty =>
                <Bounty
                deleteBounty ={props.deleteBounty}
                key = {bounty._id}
                {...bounty}
                />) 
            }
        </div>
    )
}

export default withBounties(BountyList)