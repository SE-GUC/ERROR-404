const express = require('express')
const router = express.Router()
const Debate = require('../models/debate')
const joi = require('joi')
const uuid = require('uuid')

//Temp Database
var debates = [
    new Debate('Title A', 'Category A', 'Date A', 'Description A', 'Info A'),
    new Debate('Title B', 'Category B', 'Date B', 'Description B', 'Info B'),
    new Debate('Title C', 'Category C', 'Date C', 'Description C', 'Info C'),
    new Debate('Title D', 'Category D', 'Date D', 'Description D', 'Info D'),
    new Debate('Title E', 'Category E', 'Date E', 'Description E', 'Info E'),
    new Debate('Title F', 'Category F', 'Date F', 'Description F', 'Info F'),
    new Debate('Title G', 'Category G', 'Date G', 'Description G', 'Info G'),
    new Debate('Title H', 'Category H', 'Date H', 'Description H', 'Info H'),
    new Debate('Title I', 'Category I', 'Date I', 'Description I', 'Info I')

]
//Displaying all events in the database with their title and by clicking on them the link send you to their page
router.get('/', (req, res) => {
    let data = ""
    debates.forEach((value) => {
        const id = value.id
        const title = value.title
        data += `<a href="debates/${id}">${title}</a><br>`
    })
    res.send(data)
})


//Creating a new Debate
router.post('/', (req, res) => {
    const title = req.body.title
    const category = req.body.category
    const date = req.body.date
    const description = req.body.description
    const info = req.body.info
    const schema = {
        title: joi.string().min(3).required(),
        category: joi.string().required(),
        date: joi.date().required(),
        description: joi.string(),
        info: joi.string()
    }
    const result = joi.validate(req.body, schema)
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    const newDebate = new Debate(title, category, date, description, info)
    debates.push(newDebate);
    res.redirect(`http://localhost:3000/debates/${newDebate.id}`)
})


//Requesting a page for a certain debate
//Kamal should add the debate details
router.get('/:id', (req, res) => {
    const id = req.params.id
    //Just a tmp for testing
    const debate = debates.find(debate => debate.id === id)
    res.send(debate)    
})

//Upating/Editing a debate 
router.put('/:id', (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const category = req.body.category
    const date = req.body.date
    const description = req.body.description
    const info = req.body.info
    const schema = {
        title: joi.string().min(3),
        category: joi.string(),
        date: joi.date(),
        description: joi.string(),
        info: joi.string()
    }
    const result = joi.validate(req.body, schema)
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    debates.forEach((value) => {
        if (value.id == id) {
            if (title != undefined) value.title = title
            if (category != undefined && category != '') value.category = category
            if (date != undefined) value.date = date
            if (description != undefined) value.description = description
            if (info != undefined) value.info = info;
        }
    })
    res.redirect("http://localhost:3000/debates")
})



//Deleting a debate 
router.delete('/:id', (req, res) => {
    const id = req.params.id
    let tmp = []
    debates.forEach((value) => {
        if (value.id != id) {
            tmp.push(value);
        }
    })
    debates = tmp;
    res.redirect("http://localhost:3000/debates")
})

module.exports = router
