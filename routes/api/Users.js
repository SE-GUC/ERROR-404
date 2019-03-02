
const express = require('express');
const router = express.Router();
const Joi = require('joi')
const user = require('../../models/User')
const adminSchema = require('../../schemas/TIQAdmin')
 const userSchema = require('../../schemas/HubUsers') 
 const discipleSchema = require ('../../schemas/Disciples')
 const parentSchema = require('../../schemas/Parent')
const router = express.Router();

const update = require('../../models/User');
//temp data for testing
const users = [
    {
        type:'member',
        firstName:'Mahy',
        lastName: 'Ali',
        email: 'mali@gmail.com',
        password:'mahy94',
        birthDate:'23-4-1994',
        bio: 'expert debater ',
        house:'Pegasus',
        score: 278,
        din:'1-10-2017',
        dor:null,
        clubs:['TIQ'],
        id : 1

    }];


   // updating the info/profile of a user
    router.put('/',(req,res)=>{
        const userId =req.body.id;
        const updatedType=req.body.type
        const updatedFname= req.body.firstName
        const updatedLname = req.body.lastName
        const updatedEmail = req.body.email
         const updatedPass = req.body.password
        const updatedBdate = req.body.birthDate
        const updatedBio = req.body.bio
        const updatedHouse = req.body.house
        const updatedScore = req.body.score
        const updateDin = req.body.din
       const updateDor = req.body.dor
        const updatedClubs = req.body.clubs
       const userf = users.find(user => user.id === userId )
       userf.type=updatedType
         userf.firstName = updatedFname
        userf.lastName = updatedLname
        userf.email = updatedEmail
        userf.password = updatedPass
         userf.birthDate = updatedBdate
         userf.bio = updatedBio
         userf.house = updatedHouse
         userf.score = updatedScore
          userf.din = updateDin
         userf.dor = updateDor
         userf.clubs = updatedClubs

    res.send(users)
    })
    //delete a user
    router.delete('/',(req,res)=>{
        const userId =req.body.id;
        
        const userf = users.find(user => user.id === userId )
        const index = users.indexOf(userf)
        users.splice(index,1)
        res.send(users)
    }
    )

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

