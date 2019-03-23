const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Articles = require('../../models/Article')
const articleValidator = require('../../validations/articleValidations')

//create new article
router.post('/create', async (req,res) => {
    try {
        console.log(1)
     const isValidated = articleValidator.createValidation(req.body)
     console.log(2)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     console.log(3)
     const newArticle = await Articles.create(req.body)
     console.log(4)
     res.json({msg:'A new article was created successfully :)', data: newArticle})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 //--------------------------
 //get aall articles

  
 router.get('/',async(req,res)=>{
    const articles = await Articles.find()
    res.json({data:articles})
})





///-------------------------------------
router.put('/:id',async(req,res)=>{
    

    try{
        const articleid=req.params.id
        const getArticle= await article.findOne({articleid})
        if(!getArticle) return res.status(400).send({msg:'no article with that id :( !!'})
        const isValidated = validator.updateValidation(req.body)
        if(isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const updatedArticle=await article.updateOne(req.body)
        res.json({msg:'Article updated successfully'})
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;