const uuid = require('uuid')
const express = require('express')
const Joi = require('joi')
const user = require('../../models/User')
const adminSchema = require('../../schemas/TIQAdmin')
 const userSchema = require('../../schemas/HubUsers') 
 const discipleSchema = require ('../../schemas/Disciples')
 const parentSchema = require('../../schemas/Parent')
const router = express.Router();

let users = []
let newUser
router.post('/',(req,res)=>  {
                        const firstName = req.body.firstname
                        const lastName = req.body.lastname
                        const birthDate = req.body.birth_date
                        const clubs = req.body.clubs
                        const email = req.body.email
                        const password = req.body.password
                        const type = req.body.type
                        const house=req.body.house
                        const score=req.body.score
                        const din = req.body.din
                        const dor = req.body.dor
                        const bio = req.body.bio
                
                    
 switch(req.body.type)
 {
   case 'TIQadmin':  const admin = Joi.validate(req.body,adminSchema)
                     if(admin.error) return res.status(400).send(
                         {error:admin.error.details[0].message});
                         newUser= new user(type,firstName,lastName,birthDate,bio,email,password,house,score,
                            din,dor,clubs)
                     users.push(newUser)
                     return res.json({data:newUser});

    case 'external':  const hubUser = Joi.validate(req.body,userSchema)
                    if(hubUser.error) return res.status(400).send(
                    {error:hubUser.error.details[0].message});  
                   newUser = new user(type,firstName,lastName,birthDate,bio,email,password,house,score,din,dor,clubs)
                    users.push(newUser)
                    return res.json({data:newUser});

    case 'disciple' : const disciple = Joi.validate(req.body,discipleSchema)
                       if (disciple.error) return res.status(400).send (
                       {error : disciple.error.details[0].message});
                       newUser = new user(type,firstName,lastName,birthDate,bio,email,password,house,score,din,dor,clubs)
                       users.push(newUser)
                       return res.json({data:newUser});

    case 'parent' : const parent = Joi.validate(req.body,parentSchema)
                    if (parent.error) return res.status(400).send (
                    {error : parent.error.details[0].message});
                    newUser = new user(type,firstName,lastName,birthDate,bio,email,password,house,score,din,dor,clubs)
                    users.push(newUser)
                    return res.json({data:newUser});              

 }                   
 
})               
router.get('/',(req,res)=>{
    res.send({data:users})
})

module.exports = router;