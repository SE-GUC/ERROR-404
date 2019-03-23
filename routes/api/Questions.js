const express = require('express')
const router = express.Router()
router.use(express.json())
const mongoose = require('mongoose')

const validator = require('../../validations/questionValidations')

// We will be connecting using database 
const Question = require('../../models/Question')
const Notification = require('../../models/Notification')


router.get('/user/:id', async(request, response) => {
    const userId = request.params.id 
    const questions = await Question.find({user:userId})
    response.json({data: questions})

});




router.post('/ask', async(req, res) => {
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newQuestion = await Question.create(req.body)
        const questionId =  newQuestion._id
        const userId = newQuestion.user

        const newNotification = await Notification.create({
            content: questionId,
            type:"question",
            //idd:notifications.length + 1 , 
            user:userId
        })

        res.json({msg:'Question is sent successfully', data: newQuestion})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
   
})

module.exports = router