const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid/v4")

let bounty = [
    {
        firstName: "Jar Jar",
        lastName: "Binks",
        living: true,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName : "Darth",
        lastName : "Maul",
        living: false,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Obi Wan",
        LastName: "Kenobi",
        living: false,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Asajj",
        lastName: "Ventress",
        living: true,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Kit",
        lastName: "Fisto",
        living: true,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Kylo",
        lastName: "Ren",
        living: true,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Mace",
        lastName: "Windu",
        living: false,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName : "Ahsoka",
        lastName: "Tano",
        living: true,
        type: "Jedi",
        _id: uuid()
    }
]
bountyRouter.route('/')
.get((req,res) => {
   res.send(bounty)
})

.post((req, res)=> {
    // res.send()
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(newBounty)
})

module.exports = bountyRouter