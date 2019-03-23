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

     res.json({msg:'A new article was created successfully :)', data: newArticle})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


 //get all Articles

  
 router.get('/',async(req,res)=>{
    const articles = await Articles.find()
    res.json({data:articles})
})

// get Article by id
router.get('/:id',async (req,res)=>{
    
    const articleId =req.params.id
    const articles = await Articles.findById(articleId)
    .exec()
    .then(articles => {return res.send([articles.title,articles.description,articles.author,articles.date,articles.comments])})
    .catch(err => {res.send('Cannot find the article ')})
   
    
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


    //delete Article
    router.delete('/:id',async(req,res)=>{
        try{
        const articleId =req.params.id;
        const deletedarticle = await Articles.findByIdAndRemove({_id:userId})
        res.json({msg:'Article was deleted successfully', data: deletedarticle})
        }
        catch(error){
            console.log(error)
        }
        
    }
    )

module.exports = route
