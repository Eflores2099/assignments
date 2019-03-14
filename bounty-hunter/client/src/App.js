import React, {Component} from 'react'



class App extends Component{
    constructor(){
        super()
        this.state= {
            firstName: "",
            lastName: "",
            living: false,
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

    handleSubmit =e => {
        e.preventDefault()
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living:this.state.living,
            type: this.state.type
        }
        this.props.addBounty(newBounty)
        this.setState({firstName: "", lastName: "", living:false, type: ""})
    }

    render(){
        return (
            <div>

            </div>
        )
    }

}



export default App