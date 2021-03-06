const express = require('express')
const Router = express.Router()

//item model
const Item = require('../../models/Item')

//@route  GET api/items
//@desc   Get all items
//@access Public
Router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

//@route  POST api/items
//@desc   Create an Item
//@access Public
Router.post('/', (req, res) => { 
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
})

//@route  DELETE api/items
//@desc   Delete an Item
//@access Public
Router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})



module.exports = Router