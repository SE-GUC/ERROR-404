const express = require('express')
const router = express.Router()
const mongoose= require('mongoose')
const article = require('../../models/Article')
const validator = require('../../validations/articleValidations')

router.put('/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const getArticle= await article.findOne({id})
        if(!getArticle)return res.status(404).send({error:'Article has been updated'})
        const isValidated = validator.updateValidation(req.body)
        if(isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const updatedArticle=await article.updateOne(req.body)
        res.json({msg:'Article updated successfully'})
    }
    catch(error){
        console.log(error)
    }
}



)

