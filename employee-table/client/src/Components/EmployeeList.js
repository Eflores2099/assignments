import React from 'react'
import Employee from './Employee.js'

import {withEmployees} from '../Context/EmployeeProvider.js'

const EmployeeList = (props) => {
    console.log(props);
    return (
        <div>
            {props.employee.map(employee => 
            <Employee
                deleteEmployee={props.deleteEmployee}
                updateEmployee={props.updateEmployee}
                key={employee._id}
                {...employee}
            />)}
        </div>
    );
};

export default EmployeeList;