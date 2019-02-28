import React, { Component } from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {
            bgColor: "blue",
            fontSize: 20
        }
    }
    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            console.log(e)
            if(e.which === 71){
                this.setState({
                    bgColor: "green",
                    fontSize: 50
                })
            }
            
        })
    }
    componentWillUnmount(){
        window.removeEventListener("keydown")
    }
    render(){
        return (
            <div style = {{ backgroundColor: this.state.bgColor, fontSize: this.state.fontSize}}>
                <h1> Hello { this.state.username }</h1>
            </div>
        )
    }

}

export default App