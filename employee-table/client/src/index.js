import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import EmployeeProvider from './Context/EmployeeProvider.js'
import  './index.css'






ReactDOM.render(<EmployeeProvider><App /></EmployeeProvider>, document.getElementById('root'))
