
const express = require('express');
const router = express.Router();
const mongoose =require('mongoose')
const user = require('../../models/User')
const validator=require('../../validations/userValidations')

   // updating the info/profile of a user
    router.put('/:id',async(req,res)=>{
try{
   
       const userId =req.params.id
        const getuser = await user.findOne({userId})
        const isValidated = validator.updateUserValidation(req.body)
        if (isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const updatedUser = await user.updatedOne(req.body)
        res.json({msg: 'User updated sucessfully'})
     
    
}
catch (error){
    console.log(error)
}
    })
 
    
    //delete a user
    router.delete('/:id',async(req,res)=>{
        try{
        const userId =req.params.id;
        const deleteduser = await user.findByIdAndRemove(userId)
        res.json({msg:'User was deleted successfully', data: deleteduser})
        }
        catch(error){
            console.log(error)
        }
        
    }
    )
    //get without id      
router.get('/',async (req,res)=>{
    const users = await user.find()
    res.json({data:users})
})
//get by id      
router.get('/:id',async (req,res)=>{
    
    const userId =req.params.id
    const users = await user.findById(userId)
    .exec()
    .then(users => {return res.send([users.type,users.firstName,users.lastName,
        users.birthDate,users.bio,users.email,users.password,users.house,users.din
        ,users.dor,users.clubs])})
    .catch(err => {res.send('Cannot find the user ')})
})

module.exports = router;


