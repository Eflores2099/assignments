import React, { Component } from 'react'
import axios from 'axios'


const EmployeeContext = React.createContext()

class EmployeeProvider extends Component {
    constructor() {
        super() 
            this.state = {
                employees: []
            }
        }
        getEmployees = () => {
            axios.get("/employee/v1").then(response => {
                this.setState({
                    employees: response.data
                })
            })
        }

        addEmployee = newEmployee => {
            axios.post("employee/v1", newEmployee).then(response => {
                this.setState(prevState => ({
                    employees:[response.data, ...prevState.employees]
                }))
            })
        }

        deleteEmployee = _id => {
            axios.delete(`/bounty/v1/${_id}`).then(response => {
                this.setState(prevState => ({
                    employees: prevState.employees.filter(employee => employee._id !== _id)
                }))
            })
        }

        updateEmployee = (_id, updates) => {
            axios.put(`/employee/v1/${_id}`, updates).then(response => {
                this.setState(prevState => ({
                    employees: prevState.employees.map(employee => employee._id === _id ? response.data : employee)
                }))
            })
        }

    render() {
        return (
            <EmployeeContext.Provider
                value={{
                    employees: this.state.employees,
                    getEmployees: this.getEmployees,
                    addEmployee:this.addEmployee,
                    deleteEmployee: this.deleteEmployee,
                    updateEmployee: this.updateEmployee
                }}>
                {this.props.children}
            </EmployeeContext.Provider>
        )
    }
}

export default EmployeeProvider

export const withEmployees = C => props => (
    <EmployeeContext.Consumer>
        {value => <C {...props} {...value} />}
    </EmployeeContext.Consumer>
)