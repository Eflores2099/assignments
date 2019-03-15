const express = require('express')
const todoRouter = express.Router()
const Todo =require('.../models/todo.js')



todoRouter.get("/", (req, res) =>{
    Todo.find((err,todos) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(todos)
    })
})

todoRouter.post("/", (req, res)=> {
    const newTodo = new Todo(req.body)
    newTodo.save((err, newTodoObj) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newTodoObj)
    })
})

todoRouter.get("/:_id", (req, res) => {
    Todo.findOne({_id: req.params._id}, (err, foundTodo) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).res.send(newTodoObj)
        
    })
})
// DELETE
todoRouter.delete("/:_id", (req, res) => {
    Todo.findOneAndRemove({_id: req.params._id}, (err, deletedTodo) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Successfully deleted Item with ID ${req.params._id}`)
    })
})

// PUT- UPDATE ONE
todoRouter.put("/:_id", (req,res) => {
    Todo.findOneAndUpdate({_id: req.params._id}, 
        req.body, 
        {new:true}, 
        (err, updatedTodo) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(updatedTodo)
    })
})


module.exports = todoRouter