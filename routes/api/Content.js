const express = require('express')
const router = express.Router()
const Joi = require('joi')
const uuid = require('uuid')
const Content = require('../../models/Content')
const mongoose = require('mongoose')
const validator = require('../../validations/contentValidations')


 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedContent = await Content.findByIdAndRemove({_id:id})
     res.json({msg:'Content was deleted successfully', data: deletedContent})
    }
    catch(error) {
        console.log(error)
    }  
 })

 
 router.get('/:id',async (req,res)=>{
    const Id = req.params.id 
    const cont = await Content.findById({_id:id})
    res.send(cont)
}) 


router.get('/', async (req,res) => {
    const contents = await Content.find()
    res.json({data: contents})
})



module.exports = router
