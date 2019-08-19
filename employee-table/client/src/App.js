import React, { Component } from 'react'
import AddEmployeeForm from './Components/AddEmployeeForm.js'
import { withEmployees } from './Context/EmployeeProvider.js'



class App extends Component {
    constructor(props) {
        super(props)
        this.state ={
            employeeId:"",
            firstName: "",
            lastName: "",
            email: "",
            phoneNum: ""

        }
    }
    componentDidMount() {
        this.props.getEmployees()
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
   
    }


    handleSubmit = e => {
        e.preventDefault()

        const newEmployee ={
            employeeId:this.state.employeeId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNum: this.state.phoneNumber
        }
        this.props.postEmployees(newEmployee)
        this.setState({
                        employeeId:"",
                        firstName: "",
                        lastName: "",
                        email: "",
                        phoneNum: ""
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