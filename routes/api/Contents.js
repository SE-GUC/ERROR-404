const express = require('express')
const router = express.Router()
const content = require('../../models/Content')
const Joi = require('joi')
const uuid = require('uuid')
//const contentSchema = require('')


//Temp Database
var allContent = [
    new content('01-01-2000', 'debate', 'Description 1'),
    new content('02-01-2000', 'debate', 'Description 2'),
    new content('03-01-2000', 'debate', 'Description 3'),
    new content('01-01-2000', 'event', 'Description 4'),
    new content('02-01-2000', 'event', 'Description 5'),
    new content('03-01-2000', 'event', 'Description 6'),
    new content('01-01-2000', 'reqruitment', 'Description 7'),
    new content('02-01-2000', 'reqruitment', 'Description 8'),
    new content('03-01-2000', 'reqruitment', 'Description 9')

]


 router.get('/', (req, res) => res.json({ data: allContent }))


//Creating new content
router.post('/', (req, res) => {
    const date = req.body.date
    const type = req.body.type
    const description = req.body.description
     const contentSchema = 
 {
    date : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/).required(),
    type : Joi.string(),
    description : Joi.string()

 };
     const result = Joi.validate(req.body, contentSchema)
      if (result.error)
    return res.status(400).send({error:result.error.details[0].message})
    const newContent = new content( date, type, description)
    allContent.push(newContent);
    res.send(allContent)
    //res.redirect(`http://localhost:3000/content/${newContent.description}`)
})

//Updating content 
router.put('/:id', (req, res) => {
    const id = req.params.id
    const date = req.body.date
    const type = req.body.type
    const description = req.body.description
    const contentSchema = 
{
    date : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/).required(),
    type : Joi.string(),
    description : Joi.string()

};
    
    const result = Joi.validate(req.body, contentSchema)
    if (result.error) return res.status(400).send("error1");
    allContent.forEach((value) => {
        if (value.id === id) {
            if (date !== undefined) value.date = date
            if (type !== undefined) value.type = type
            if (description !== undefined) value.description = description;       
        }
    })
    res.send(allContent)
   
})

module.exports = router

