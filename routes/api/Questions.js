
const express = require('express')
const router = express.Router()
router.use(express.json())
const mongoose = require('mongoose')

const validator = require('../../validations/questionValidations')

// We will be connecting using database 
const Question = require('../../models/Question')
const Notification = require('../../models/Notification')
const User = require('../../models/User')


router.get('/admin', async(request, response) => {

    const questions = await Question.find({answer:null}).select('question')
    response.json({data: questions})

});


router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id
        const deletedQuestion = await Question.findByIdAndRemove({_id:id})
        res.json({msg:'Question was deleted successfully', data: deletedQuestion})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }

   
})


router.put('/answerquestion/:id', async(req, res) => {
    try {
        const id = req.params.id
        const question = await Question.findOne({_id:id})
        if(!question) return res.status(404).send({error: 'Question does not exist'})
        const isValidated = validator.updateValidation(req.body)
        const user=question.user
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedQuestion = await question.updateOne(req.body)
        const answer = updatedQuestion.answer
        const notify = await User.findByIdAndUpdate({_id:user},{$push:{notification:answer}})
        res.json({msg: 'Answer is sent successfully', data: updatedQuestion})

    }
    catch(error) {
        
        console.log(error)
    }  
    
})



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
        const question = newQuestion.question
        //const questionId =  newQuestion._id
        //const userId = newQuestion.user
        const notifyAdmin = User.findByIdAndUpdate({_id:'5ca0cd223bcdfe1c9c69bd09'},{$push:{notification:question}})
        res.json({msg:'Question is sent successfully', data: newQuestion})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
   
})

module.exports = router

