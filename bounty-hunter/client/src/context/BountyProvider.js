import React, {Component} from 'react'
import axios from 'axios'

const BountyContext = React.createContext()

class BountyProvider extends Component {
    constructor() {
        super()
        this.state = {
            bounties: []
        }
    }

    getBounty = () => {
        axios.get("/bounties").then(response => {
            this.setState({
                bounties: response.data
            })
        })
    }
    addBounty = newBounty => {
        axios.post("/bounties", newBounty).then (response => {
            this.setState(prevState  => ({
                bounties: [...prevState.wizards, response.data]
            }))
        })
    }

    deleteBounty = _id => {
        axios.delete(`/bounties/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id !== _id)

            }))
        })
    }

    render(){
        return (
            <BountyContext.Provider
                value={{
                    bounties:this.state.bounties,
                    getBounties:this.getBounties,
                    addBounties: this.addBounty,
                    deleteBounty:this.deleteBounty
                }}>
                
            </BountyContext.Provider>
        )
    }
}

export default BountyProvider

export const withBounties = C => props => (
    <BountyContext.Consumer>
        { value => <C {...props} {...value}/> }
    </BountyContext.Consumer>
)