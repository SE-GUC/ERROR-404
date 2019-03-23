const express = require('express')
const router = express.Router()
const mongoose= require('mongoose')
const article = require('../../models/Article')
const validator = require('../../validations/articleValidations')


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
    const articles = await article.find()
    res.json({data:articles})
})

router.get('/:id',async (req,res)=>{
    const articleId =req.params.id
    const articles = await article.findOne({_id:articleId})
    res.json({data:articles})
})


module.exports = router;


