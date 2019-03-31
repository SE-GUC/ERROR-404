const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Chatbars = require('../../models/Chatbar')
const chatBarValidator = require('../../validations/chatBarValidations')

router.put('/for/:id',async(req,res)=>{
 
    try{
        const chatBarId=req.params.id
        const response =req.body.forResponses
       
        const getchatBar= await Chatbars.findOne({_id:chatBarId})
        if(!getchatBar) return res.status(400).send({msg:'This Debate live is not found'})
        const isValidated = chatBarValidator.updateValidation(req.body)
        if(isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const addnumberofResponse = 1
        const updatedchatBar=await Chatbars.findOneAndUpdate({_id:chatBarId},{$push:{forResponses:response}})
        const updateNumberofResponse =await Chatbars.findOneAndUpdate({_id:chatBarId},{$inc:{numberOfResponses: addnumberofResponse}})
        const getChatbarNew =await Chatbars.findOne({_id:chatBarId})
        res.json({data:getChatbarNew })
    }
    catch(error){
        console.log(error)
    }
})
router.put('/against/:id',async(req,res)=>{
    

    try{
        const chatBarId=req.params.id
        const response =req.body.againstResponses
       
        const getchatBar= await Chatbars.findOne({_id:chatBarId})
        if(!getchatBar) return res.status(400).send({msg:'This Debate live is not found'})
        const isValidated = chatBarValidator.updateValidation(req.body)
        if(isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const addnumberofResponse = 1
        const updatedchatBar=await Chatbars.findOneAndUpdate({_id:chatBarId},{$push:{againstResponses:response}})
        const updateNumberofResponse =await Chatbars.findOneAndUpdate({_id:chatBarId},{$inc:{numberOfResponses: addnumberofResponse}})
        const getChatbarNew =await Chatbars.findOne({_id:chatBarId})
        res.json({data:getChatbarNew })
    }
    catch(error){
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    const chatbar = await Chatbars.find();
    res.json({data: chatbar});

})

router.delete('/:id',(req,res)=>{
    const id = req.params.id
    Chatbars.findByIdAndDelete(id)
    .exec()
    .then(()=>{return res.json({data :'Deleted Successfully'})})
    .catch(err =>{ return res.json({err : 'ERROR while deleting'})})
})
module.exports = router