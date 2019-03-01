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

router.get('/', (req, res) => res.json({ data: FAQs }))



router.delete('/delete', (req, res) => {
    const id = req.body.id 

    const faq = FAQs.find(faq => faq.id === id)
    const index = FAQs.indexOf(faq)
    FAQs.splice(index,1)

    res.send(FAQs)
})

module.exports = router