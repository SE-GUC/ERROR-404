
const express = require('express')
const router = express.Router()
//const content = require('../../models/Content')
const Joi = require('joi')
const uuid = require('uuid')
const Content = require('../../models/Content')

//example database
var Contents =[
    new Content('date1','type1','desc1'),
    new Content('date2','type2','desc2'),
    new Content('date3','type3','desc3'),
    new Content('date4','type4','desc4'),
    new Content('date5','type5','desc5'),
]

//displaying all content uploaded by admin
router.get('/', (req, res) => res.json({ data: Contents }));


//displaying a certain content uploaded 
 router.get('/:id',(req,res)=>{
const mongoose = require('mongoose')
const validator = require('../../validations/contentValidations')

// crearting new content (with db)
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newContent = await Content.create(req.body)
     res.json({msg:'Content was created successfully', data: newContent})
    }
    catch(error) {
        console.log(error)
    }  
 })


//updating content with mongodb 
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const content = await Content.findOne({_id:id})
     if(!content) return res.status(404).send({error: 'content does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedContent = await Content.updateOne(req.body)
     res.json({msg: 'Content updated successfully'})
    }
    catch(error) {
        
        console.log(error)
    }  
 })

 //delete with mongodb
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedContent = await Content.findByIdAndRemove(id)
     res.json({msg:'Content was deleted successfully', data: deletedContent})
    }
    catch(error) {
        console.log(error)
    }  
 })

 //displaying a certain content uploaded 
 router.get('/:id',async (req,res)=>{
    const Id = req.params.id 
    const cont = Contents.find(cont=>cont.id ===Id)
    const cont = await Content.findById(Id)
    res.send(cont)
}) 

//deleting a content 
router.delete('/:id',(req,res)=>{
  const id = req.params.id 
  const c = Contents.find(c =>c.id ===id)
  const index = Contents.indexOf(c)
  Contents.splice(index,1)
  res.send(Contents)
})





//displaying all content 

//const contentSchema = require('')


//Temp Database
/*var allContent = [
    new content('01-01-2000', 'debate', 'Description 1'),
    new content('02-01-2000', 'debate', 'Description 2'),
    new content('03-01-2000', 'debate', 'Description 3'),
    new content('01-01-2000', 'event', 'Description 4'),
    new content('02-01-2000', 'event', 'Description 5'),
    new content('03-01-2000', 'event', 'Description 6'),
    new content('01-01-2000', 'reqruitment', 'Description 7'),
    new content('02-01-2000', 'reqruitment', 'Description 8'),
    new content('03-01-2000', 'reqruitment', 'Description 9')

]*/





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
    return res.status(400).send("error2")
    const newContent = new Content( date, type, description)
    Contents.push(newContent);
    res.send(Contents)
    //res.redirect(`http://localhost:3000/content/${newContent.description}`)
router.get('/', async (req,res) => {
    const contents = await Content.find()
    res.json({data: contents})
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
    Contents.forEach((value) => {
        if (value.id === id) {
            if (date !== undefined) value.date = date
            if (type !== undefined) value.type = type
            if (description !== undefined) value.description = description;       
        }
    })
    res.send(Contents)
   
})

module.exports = router

