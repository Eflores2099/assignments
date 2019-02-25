import React from 'react'
import './style.css'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color1: 'red',
            color2: 'blue',
            color3: 'yellow',
            color4: 'green',
            radius1: 50,
            radius2: 50,
            radius3: 50,
            radisus4: 50
        }
    }

    handleChangeAll = () => {
        const colors= ['red','blue','orange','green','yellow', 'pink', 'purple']
        const currentColor = colors[Math.floor(Math.random()* colors.length)]

            this.setState(prevState => {
                return {
                    Color1: prevState.Color1 === "red" ? "black" : "red",
                    Color2: prevState.Color2 === "blue" ? "black" : "blue",
                    Color3: prevState.Color3 === "yellow" ? "black" : "yellow",
                    Color4: prevState.Color4 === "green" ? "black" : "green"
                }
            })
        }

render(){
    return (
        <div className ="container">
            <div className ="controls-container">
            <button onClick={this.handleChangeAll}>Change All</button>
            </div>


        </div>
    )
}







}
       



export default App
