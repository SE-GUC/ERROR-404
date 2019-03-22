const express = require('express')
const router = express.Router()
const mongoose= require('mongoose')
const article = require('../../models/Article')
const validator = require('../../validations/articleValidations')


router.get('/',async(req,res)=>{
    const articles = await article.find()
    res.json({data:articles})
})

router.get('/:id',async (req,res)=>{
    
    const articleId =req.params.id
    const articles = await article.findById(articleId)
    .exec()
    .then(articles => {return res.send([articles.title,articles.description,articles.author,articles.date,articles.comments])})
    .catch(err => {res.send('Cannot find the article ')})
   
    
})
router.put('/:id',async(req,res)=>{
    

    try{
        const articleid=req.params.id
        const getArticle= await article.findOne({articleid})
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


