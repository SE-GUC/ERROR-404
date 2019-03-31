const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Articles = require('../../models/Article')
const articleValidator = require('../../validations/articleValidations')

//create new article
router.post('/create', async (req,res) => {
    try {
     const isValidated = articleValidator.createValidation(req.body)
    
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
 
     const newArticle = await Articles.create(req.body)

     res.json({data: newArticle})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

  
 
// update Article
router.put('/:id',async(req,res)=>{
    

    try{
        const articleid=req.params.id
        const getArticle= await Articles.findOne({_id:articleid})
        if(!getArticle) return res.status(400).send({msg:'Article is not found'})
        const isValidated = articleValidator.updateValidation(req.body)
        if(isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const updatedArticle=await Articles.findOneAndUpdate({_id:articleid},req.body)
        res.json({msg:'Article updated successfully'})
    }
    catch(error){
        console.log(error)
    }
})


router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedArticle = await Article.findByIdAndRemove({_id:id})
     res.json({msg:'Article was deleted successfully', data: deletedArticle})
    }
    catch(error) {
        console.log(error)
    }  
 })

router.get('/',async(req,res)=>{
    const articles = await Article.find()
    res.json({data:articles})
})

router.get('/:id',async (req,res)=>{
    const articleId =req.params.id
    const articles = await Article.findOne({_id:articleId})
    res.json({data:articles})
})

module.exports = router


