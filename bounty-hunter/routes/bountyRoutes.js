const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bountyData.js')  //Name to create new document
const uuid = require("uuid/v4")

// let bounty = [
//     {
//         firstName: "Jar Jar",
//         lastName: "Binks",
//         living: true,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName : "Darth",
//         lastName : "Maul",
//         living: false,
//         type: "Sith",
//         _id: uuid()
//     },
//     {
//         firstName: "Obi Wan",
//         LastName: "Kenobi",
//         living: false,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Asajj",
//         lastName: "Ventress",
//         living: true,
//         type: "Sith",
//         _id: uuid()
//     },
//     {
//         firstName: "Kit",
//         lastName: "Fisto",
//         living: true,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Kylo",
//         lastName: "Ren",
//         living: true,
//         type: "Sith",
//         _id: uuid()
//     },
//     {
//         firstName: "Mace",
//         lastName: "Windu",
//         living: false,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName : "Ahsoka",
//         lastName: "Tano",
//         living: true,
//         type: "Jedi",
//         _id: uuid()
//     }
// ]

// bountyRouter.route('/')
// .get((req,res) => {
//    res.send(bounty)
// })

// .post((req, res)=> {
//     // res.send()
//     const newBounty = req.body
//     newBounty._id = uuid()
//     bounty.push(newBounty)
//     res.send(newBounty)
// })

//  bountyRouter.route("/:_id")
//  .get((req, res) => {
//     const foundBounty = bounty.find(bounty => bounty._id === req.params._id)
//     res.send(foundBounty)
//  })
//  .put((req,res)=>{
//      console.log(res.params)
//      const foundBounty= bounty.find(bounty =>bounty._id === req.params._id)
//      Object.assign(foundBounty, req.body)
//      res.send(foundBounty)
//  })
//  .delete((req,res) => {
//      const updatedBounty= bounty.filter(bounty => bounty._id !== req.params._id)
//      bounty = updatedBounty
//      res.send("Bounty successfully deleted")
//  })


 // GET ALL
bountyRouter.get('/', (req, res) => {
    Bounty.find((err, bounties) => {
        // Always handle DB errors first
        if (err) {
            res.status(500)
            return res.send(err)
        }
        // Send back response
        return res.status(200).send(bounties)
    })
})

// GET ONE
bountyRouter.get('/:_id', (req, res) => {
    // This {object} is our filtering criteria for what we are looking for
    Bounty.findOne({ _id: req.params._id }, (err, foundBounty) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundBounty)
    })
})

// POST Add One (never queries the db)
bountyRouter.post('/', (req, res) => {
    // Create the new bounty object using our Schema and the values from the body the user posted
    const newBounty = new Bounty(req.body)
    // Send that object to the DB to be saved
    newBounty.save((err, newBountyObject) => {
        if (err) {
            res.status(500)
            console.log(err)
            return res.send(err)
        }
        return res.status(201).send(newBountyObject)
    })
})

// DELETE ONE
bountyRouter.delete('/:_id', (req, res) => {
    Bounty.findOneAndRemove({ _id: req.params._id }, (err, deletedBounty) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        // 202 allows for a response message, 204 deletes but has no message
        return res.status(202).send(`Successfully deleted Bounty "${deletedBounty.title}" with ID ${req.params._id}`)
    })
})

// PUT
bountyRouter.put('/:_id', (req, res) => {
    Bounty.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if (err) {
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedBounty)
        })
})

module.exports = bountyRouter