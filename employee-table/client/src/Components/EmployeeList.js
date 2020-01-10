import React from 'react'
import Employee from './Employee.js'


const EmployeeList = props => {
    console.log(props);
    return(
        <>
            {props.employee.map(employee =>
            <Employee
                deleteEmployee={props.deleteEmployee}
                updateEmployee={props.updateEmployee}
                key={employee._id}
                {...employee}
            />)}
        </>
    );
};

export default EmployeeList;