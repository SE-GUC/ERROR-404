const express = require('express')
const router = express.Router()
router.use(express.json())

// We will be connecting using database 
const FAQ = require('../../Models/FAQ')

// temporary data created as if it was pulled out of the database ...
const FAQs = [
    new FAQ(1,'The what is your name?', 'Nouran'),
    new FAQ(2,'The what is your name?', 'Seif')
    
];


router.post('/add', (req, res) => {
    const question = req.body.question
    const answer = req.body.answer
    const faq = {
        question: question,
        answer: answer,
        id:FAQs.length + 1  
    }
    FAQs.push(faq)
    res.send(FAQs)
})
router.put('/edit', (req, res) => {
    const id = req.body.id 
    const question = req.body.question
    const answer = req.body.answer

    const faq = FAQs.find(faq => faq.id === id)
    faq.question = question
    faq.answer = answer

    res.send(FAQs)
})



module.exports = router