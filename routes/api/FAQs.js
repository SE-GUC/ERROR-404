
const express = require('express')
const router = express.Router()
router.use(express.json())
const mongoose = require('mongoose')
const validator = require('../../validations/faqValidations')
// We will be connecting using database 
const FAQ = require('../../models/FAQ')



router.post('/add',async (req, res) => {
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const question = req.body.question
        const answer = req.body.answer
        const newFaq = await FAQ.create({
            question: question,
            answer: answer,
            
        })
        res.json({msg:'FAQ was created successfully', data: newFaq})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
   
   
})

router.get('/', async(request, response) => {
    const faqs = await FAQ.find()
    response.json({data: faqs})

});
router.get('/:id', async(request, response) => {
    const id = request.params.id

    const faqs = await FAQ.find({_id:id})
    response.json({data: faqs})

});


 router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id
        const deletedFaq = await FAQ.findByIdAndRemove(id)
        res.json({msg:'FAQ was deleted successfully', data: deletedFaq})

       }
       catch(error) {
           // We will be handling the error later
           console.log(error)

       }  
   


   
})

router.put('/edit/:id',async (req, res) => {
    try {
        const id = req.params.id
        const faq = await FAQ.findOne({_id:id})
        console.log(!faq)
        if(!faq) return res.status(404).send({error: 'FAQ does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedFaq = await faq.updateOne(req.body)
        res.json({msg: 'FAQ updated successfully', data: updatedFaq})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    
})



    




module.exports = router


