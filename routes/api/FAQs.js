const express = require('express')
const router = express.Router()
router.use(express.json())

// We will be connecting using database 
const FAQ = require('../../models/FAQ')

// temporary data created as if it was pulled out of the database ...
const FAQs = [
    new FAQ(1,'How to sign up ?', 'Click on the sign up button and follow the steps'),
    new FAQ(2,'How to sign in?', 'Click on the login button and enjoy')
    
];

router.get('/', (request, response) => {
    let data = "";
    FAQs.forEach((value) => {
        const question = value.question;
        const answer = value.answer;
        data += `<h1> ${question}${answer}</h1><br>`;
    });
    response.send(data);
});



router.delete('/delete', (req, res) => {
    const id = req.body.id 

    const faq = FAQs.find(faq => faq.id === id)
    const index = FAQs.indexOf(faq)
    FAQs.splice(index,1)

    res.send(FAQs)
})

module.exports = router