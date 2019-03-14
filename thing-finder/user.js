const express = require('express')
const userRouter = express


const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]




userRouter.Router("/").get((req,res) => {
    res.send(inventoryItems)
})

.post ((req, res)=>{
    const newItem= req.body
    newItem._id=uuid()
    item.push(newItem)
    res.send(newItem)
})


