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

     res.json({ data: newArticle})
     //msg:'A new article was created successfully :)',
    }
    catch(error) {
        
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
        const getArticleNew =await Articles.findOne({_id:articleid})
        res.json({data:getArticleNew })
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
router.get('/Search/:keyWord',async(req,res)=>{
    const keyWord=req.params.keyWord
    const article = await Article.find({ "title" : { $regex: keyWord, $options: 'i' } })
    if(article.length===0) return res.status(404).send({error: 'Article with that key word doesnt exisit'})
    return res.json({data:article})
         
    })
module.exports = router


