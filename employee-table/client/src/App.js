import React, { Component } from 'react'
import AddEmployeeForm from './Components/AddEmployeeForm.js'
import { withEmployees } from './context/EmployeesProvider'



class App extends Component {
    constructor(props) {
        super(props)
        this.state ={
            employeeId:"",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""

        }
    }
    componentDidMount() {
        this.props.getEmployees()
    }

    


    handleSubmit = e => {
        e.preventDefault()

        const newEmployee ={
            employeeId:this.state.employeeId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        }
        this.props.postEmployees(newEmployee)
        this.setState({employeeId:"",
                        firstName: "",
                        lastName: "",
                        email: "",
                        phoneNumber: ""
                    })
        }

        render() {
            return(
                <div className= "grid">
                    <span>
                        <strong>ID</strong>
                    </span>
                    <span>
                        <strong>First Name</strong>
                    </span>
                    <span>
                        <strong>Last Name</strong>
                    </span>
                    <span>
                        <strong>Email</strong>
                    </span>
                    <span>
                        <strong>Phone #</strong>
                    </span>


                </div>
            )
        }


}




export default withEmployees(App)