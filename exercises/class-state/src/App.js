import React from 'react'
import CounterDisplay from './CounterDisplay.js'



class App extends React.Component {
    constructor(){
        super()
        this.state ={
            counter:0
        }
    }
}

handleIncrement = () => {
    this.setState(prevState => {
        return {
            counter: prevStare.counter + 1
        }
    })
}

handleIncrement = () => {
    this.setState(prevState => {
        return {
            counter: preveState.counter -1
        }
    })
}



render(){
    return (
            <div>
                <CounterDisplay counter = {this.state.counter}/>
                <CounterControls 
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}/>

            </div>
        )
    }
        
}

export default App