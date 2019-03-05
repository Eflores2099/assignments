import  React, { Component } from 'react';

class  Toggle extends Component {
    constructor() {
        super()
        this.state = { 
            isToggled = false
        }
    }
    toggler = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }
    
render() {
    const {component} = this.props
    const C = {component}
        return (
            <div>

            </div>
        )
    
    }


}