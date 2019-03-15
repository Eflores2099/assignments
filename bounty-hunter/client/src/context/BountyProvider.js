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
        console.log("hello")
        axios.get("/bounty").then(response => {
            console.log("hello2")
            this.setState({
                bounties: response.data
            })
        })
    }
    addBounty = newBounty => {
        axios.post("/bounty", newBounty).then (response => {
            this.setState(prevState  => ({
                bounties: [...prevState.wizards, response.data]
            }))
        })
    }

    deleteBounty = _id => {
        axios.delete(`/bounty/${_id}`).then(response => {
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
                    getBounty:this.getBounty,
                    addBounties: this.addBounty,
                    deleteBounty:this.deleteBounty
                }}>
                {this.props.children}
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