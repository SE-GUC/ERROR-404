const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Articles = require('../../models/Article')
const Users = require('../../models/User')
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
     const deletedArticle = await Articles.findByIdAndRemove({_id:id})
     res.json({msg:'Article was deleted successfully', data: deletedArticle})
    }
    catch(error) {
        console.log(error)
    }  
 })

router.get('/',async(req,res)=>{
    const articles = await Articles.find()
    res.json({data:articles})
})

router.get('/:id',async (req,res)=>{
    const articleId =req.params.id
    const articles = await Articles.findOne({_id:articleId})
    res.json({data:articles})
})
router.get('/Search/:keyWord',async(req,res)=>{
    const keyWord=req.params.keyWord
    const article = await Articles.find({ "title" : { $regex: keyWord, $options: 'i' } })
    if(article.length===0) return res.status(404).send({error: 'Article with that key word doesnt exisit'})
    return res.json({data:article})
         
    })
router.put('/comment/:id/:userid',async(req,res)=>{
    try{
    const articleId =req.params.id
    const newComment= req.body.comments
    const userid = req.params.userid
    const getuser = await Users.findOne({_id :userid})
    const getArticle= await Articles.findOne({_id:articleId})
    const updatedArticle=await Articles.findOneAndUpdate({_id:articleId},{$push:{comments:{username:getuser.firstName,comment:newComment}}})
    const getArticleNew =await Articles.findOne({_id:articleId})
        res.json({data:getArticleNew })
    }
    catch(error){
        console.log(error)
    }

}
)
module.exports = router


