import React, { Component } from 'react'
import AddEmployeeForm from './Components/AddEmployeeForm.js'
import EmployeeList from './Components/EmployeeList.js'
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
        console.log(this.props)
        this.props.getEmployees()
    }

    handleChange = (e) => {
       this.setState({
           [e.target.name] : e.target.value
       })
   
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
        this.props.addEmployee(newEmployee)
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
                <div id="container">
                    <div className= "addNew">
                        <AddEmployeeForm 
                            btnText="Add Employee"
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        {...this.state}
                        />
                    </div> 

                    <div className = "grid">
                        <EmployeeList
                            employees={this.props.employees}
                            deleteEmployee={this.props.deleteEmployee}
                            updateEmployee={this.props.updateEmployee}
                        />

                    </div>
                </div>
                

            )
        }


}




export default withEmployees(App)