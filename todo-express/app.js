const express = require("express");
const app = express();
const uuid = require("uuid/v4")

let todoList = [
    {
        name: "dentist appt",
        description: "teeth cleaning",
        completed: "false",
        _id: uuid()
    },
    {
        name: "grocery shopping",
        description: "food for dinner party",
        _id: uuid()
    },
    {
        name: " vaccum the house",
        description: "before dinner party",
        _id: uuid()
    },
    {
        name: "walk the dogs",
        description:"self explanatory",
        _id: uuid()
    }

]

app.get('/todoList', (req, res) => {
    res.send(todoList)
})


















app.listen(3000, () => {
    console.log("App is listening on port 3000");
});