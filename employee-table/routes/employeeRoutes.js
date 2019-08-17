const express =require('express')
const employeeRouter = express.Router
const Employee = require('../models/employee.js')//to create new employee

//GET ALL Employees
employeeRouter.get('/', (req, res) => {
    Employee.find((err, employees) => {
        //handle data base errors first
        if (err) {
            res.status(500)
            return res.send(err)
        }
        //Send back response
        return res.status(200).send(bounties)
    })
})

//GET One Employee

employeeRouter.get('/', (req, res) => {
    //this {object} is our filtering criteria for what we are looking for
    Employee.findOne({_id: req.params._id }, (err, foundEmployee) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundEmployee)
    })
})

//POST add One
employeeRouter.post('/', (req, res) => {
    //Create the new Employee object using our schema and the values from the body the user posted
    const newEmployee = new Employee(req.body)
    //Send that oject to the DB to be saved
    newEmployee.save((err, newEmployeeObject) => {
        if (err) {
            res.status(500)
            console.log(err)
            return res.send(err)
        }
        return res.status(201).send(newEmployeeOject)
    })
})

//DELETE ONE Employee

employeeRouter.delete('/:_id', (req, res) => {
    Employee.findOneAndRemove({_id: req.params._id }, (err, deleteEmployee) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        
         //202 allows for a response message, 204 deletes but has no message
         return res.status(202).send(`Successfully deleted Employee "${deleteEmployee.title}" with ID ${req.params._id}`)   
    })
    
})

//PUT
employeeRouter.put('/:_id', (req, res) => {
    Employee.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        (err, updatedEmployee) => {
            if (err) {
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedEmployee)
        })
})

module.exports = employeeRouter