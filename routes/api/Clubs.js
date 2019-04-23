
const express = require('express')
const router = express.Router()
const mongoose= require('mongoose')
const Club = require('../../models/Club')
const validator = require('../../validations/clubValidations.js')


router.get('/', async(req,res)=>{
    const clubs = await Club.find()
    res.json({data:clubs})
})

router.get('/:_id', async (req,res)=>{
    const clubId = req.params._id
    const clubs = await Club.findOne({_id:clubId})
    res.json({data:clubs})
})

// Create a club
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newClub = await Club.create(req.body)
     res.json({msg:'Club was created successfully', data: newClub})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

// Update a club 
router.put('/:_id', async(req,res)=>{
    

    try{
        const clubId = req.params._id
        //const getClub = await Club.findOne({clubId})
        const isValidated = validator.updateValidation(req.body)
        if(isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const updatedClub = await Club.findOneAndUpdate({_id:clubId}, req.body)
        console.log("The updated club: "+updatedClub)
        res.json({msg:'Club updated successfully', data:updatedClub})
    }
    catch(error){
        console.log(error)
    }
})

router.delete('/:_id', async (req,res) => {
    try {
     const clubId = req.params._id
     const deletedClub = await Club.findOneAndDelete({_id:clubId})
     res.json({msg:'Club was deleted successfully', data: deletedClub})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router;