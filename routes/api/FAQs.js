
const express = require('express')
const router = express.Router()
router.use(express.json())
const mongoose = require('mongoose')
const validator = require('../../Validations/faqValidations')
// We will be connecting using database 
const FAQ = require('../../models/FAQ')


router.get('/', async(request, response) => {
    const faqs = await FAQ.find({answer:{$ne:null}})
    response.json({data: faqs})

});



 router.delete('/delete/:id', async(req, res) => {
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


    




module.exports = router

