const express = require ('express')
const app = express()
const uuid = require('uuid/v4')


let people = [
    {
        name : "Rick",
        age: 70,
        _id:uuid()
    },
    {
        name: "Morty",
        age: 13,
        _id: uuid()
    },
    {
        name:"Birdman",
        age: "unknown",
        _id: uuid()
    }
]

// middleware
app.use(express.json())



app.get("/people", (req,res) => {
    res.send(people)

})

app.get('/people/:_id', (req, res) => {
    const ID = req.params._id
    const foundPerson = people.find(person => person._id ===ID)
    if (!foundPerson)
        res.send("Person not found")
})

app.post('/people', (req,res) =>{
    req.body
})
// add Id to the request body
req.body._id =uuid()

people.push(req.body)
//  add it to the fake database
// res.send(req.body)
res.send(req.body)

app.delete("/people/:_id", (req, res) => {
    const updatedPeople = people.filter(person._id !== req.params._id)
    people = updatedPeople
    res.send(people)

})

app.put("/people/:_id" , (req,res)=> {
    const foundPerson = people.find(person => person._id === ID)
    Object.assign(foundPerson,req.body)
    res.send(foundPerson)
})





app.listen(5800, () => {
    console.log("Server is running on port 5800")
})
