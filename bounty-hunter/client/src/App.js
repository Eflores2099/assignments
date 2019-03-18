import React, {Component} from 'react'
import BountyForm from './components/BountyForm.js'
import BountyList from './components/BountyList.js'
import { withBounties } from './context/BountyProvider'



class App extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isLiving: true,
            type: ""

        }
    }
    componentDidMount(){

    
        this.props.getBounty()
    }

    handleChange = e => {
        const value = e.target.type === "checkbox" 
            ? e.target.checked 
            : e.target.value
        this.setState({
            [e.target.name] : value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            isLiving:this.state.isLiving,
            type: this.state.type
        }
        this.props.addBounty(newBounty)
        this.setState({firstName: "", lastName: "", isLiving: true, type: ""})
    }

    render(){
        return (
            <div>
            
                <BountyForm
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    {...this.state}
                />
                <BountyList 
                    bounties = {this.props.bounties}
                    deleteBounty = {this.props.deleteBounty}/>
            </div>
        )
    }

}



export default withBounties(App)