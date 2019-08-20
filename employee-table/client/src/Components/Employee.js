import React, { Component } from 'react'
import AddEmployeeForm from './AddEmployeeForm.js'


class Employee extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            editToggle: false,
            employeeId: props.employeeId,
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            phoneNum: props.phoneNum
        }
    }

    toggler = ()=> {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }

    handleChange = e => {
        const target = e.target
        const name = target.name;
    }

    handleSubmit = e => {
        e.preventDefault()
        const employeeUpdates = {
            employeeId: this.state.employeeId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNum: this.state.phoneNum,
            
        }
        this.props.updateEmployee(this.props._id, employeeUpdates)
        this.toggler()
    }

    render() {
        const {employeeId, firstName, lastName, email, phoneNum, _id, deleteEmployee} = this.props
        return(
            <div>

            </div>
        )
    }
}

export default Employee