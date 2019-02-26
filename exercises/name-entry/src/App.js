import React, { Component } from 'react'
import EntryForm from './EntryForm.js'
import List from './List.js'


class App extends Component {
    constructor(){
        super()
        this.state = {
            nameInput: "",
            names: [] 
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => {
        return {
            nameInput: "",
            names: [...prevState.names,this.state.nameInput]
        }
    })
}





    render(){

        
        return(
            <div>
               <h1> {this.state.nameInput}</h1>
               <EntryForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                nameInput={this.state.nameInput}
                />
                <div>
                    <List names={this.state.names}/>
                </div>
            </div>
        )
    }
}

export default App