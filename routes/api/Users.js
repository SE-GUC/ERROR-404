const express = require('express')
const router = express.Router()
const mongoose =require('mongoose')
const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey
const user = require('../../models/User')
const userValidator = require('../../validations/userValidations')
const adminValidator = require('../../validations/adminValidations')
const alumniValidator = require('../../validations/alumniValidations')



//create new user (member or alumni)
router.post('/register', async (req,res) => {
   
    const e =req.body.email
    const usernew = await User.findOne({e})
    if (usernew) return res.status(400).json({ email: 'Email already exists ,choose another mail...' })
    const t =req.body.type
    
    switch(t)
{
    case('alumni'):
        try{
    const isAlumniValidated = alumniValidator.registerValidation(req.body)
    if (isAlumniValidated.error) return res.status(400).send({ error: isAlumniValidated.error.details[0].message })
    
    const { firstName,lastName,birthDate,clubs,email,password,type,house,score,din,dor,bio} = req.body 
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt)
    const newAlumni = new User({
                    type,
                    firstName,
                    lastName,
                    birthDate,
                    bio,
                    email,
                    password :hashedPassword,
                    house,
                    score,
                    din,
                    dor,
                    clubs
                    })
          await User.create(newAlumni)
                    
      return  res.json({ msg: 'User created successfully', data: newAlumni })
                             
            } 
        catch (error) {
		return res.status(422).send({ error: 'Can not create user' })
	}

    case('member'):

    try{

        const isUserValidated = userValidator.registerValidation(req.body)
        if (isUserValidated.error) return res.status(400).send({ error: isUserValidated.error.details[0].message })
        console.log(5)
        const { firstName,lastName,birthDate,clubs,email,password,type,house,score,din,dor,bio} = req.body
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        console.log(6)
        const newMember = new user({
                  type ,
                firstName ,
                lastName ,
                birthDate ,
                bio,
                email,
                password : hashedPassword,
                clubs ,
                house ,
                din,
                dor
                
               
            })
            
            await User.create(newMember)
                    
         return res.json({ msg: 'User created successfully', data: newMember })
                
        } 
    catch (error) {

   return res.status(422).send({ error: 'Can not create user' })
}

}
})


//get all users
router.get('/',async (req,res)=>{
    const users = await user.find()
    res.json({data:users})

//get user by id 
  router.get('/:id',async (req,res)=>{
    
    const userId =req.params.id
    const users = await user.findById(userId)
    .exec()
    .then(users => {return res.send([users.type,users.firstName,users.lastName,
      users.birthDate,users.bio,users.email,users.password,users.house,users.din
       ,users.dor,users.clubs])})
    .catch(err => {res.send('Cannot find the user ')})



   // updating the info/profile of a user
    router.put('/:id',async(req,res)=>{
try{
   
        const userId =req.params.id
        const getuser = await user.findOne({_id:userId})
        if(!getuser) return res.status(404).send({error: 'User does not exist'})
        const isValidated = userValidator. updateUserValidation(req.body)
        if (isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const updatedUser = await user.findOneAndUpdate({_id:userId},req.body)
        
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
        const deleteduser = await user.findByIdAndRemove({_id:userId})
        res.json({msg:'User was deleted successfully', data: deleteduser})
        }
        catch(error){
            console.log(error)
        }
        
    } )



// Update a user(alumni or member )
router.put('/update/:id', async (req,res) => {
    // try {
        console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
     const userId = req.params.id
     const getuser = await user.findOne({_id:userId})
      if(!getuser) return res.status(404).send({error: 'user does not exist'})
     console.log(4)
     const t =getuser.type
     console.log(t)
     switch(t)
     {
        
         case('alumni'):
         try{
            console.log(5)
            const isAlumniValidated = alumniValidator.updateValidation(req.body)
            console.log(6)
            if (isAlumniValidated.error) return res.status(400).send({ error: isAlumniValidated.error.details[0].message })
            console.log(7)
            const updatedAlumni = await getuser.updateOne(req.body)
            console.log(8)
            if(!updatedAlumni) return res.status(404).send({error: 'user updation has erroe'})
            res.json({msg: 'User updated sucessfully'})
           

         }
         catch(error){
            console.log(9)
             console.log(error)
         }


         case('member'):
         try{
            console.log(10)
            const isUserValidated = userValidator.updateValidation(req.body)
            console.log(11)
            if (isUserValidated.error) return res.status(400).send({ error: isUserValidated.error.details[0].message })
            console.log(12)
            const updatedMember = await getuser.updateOne(req.body)
            console.log(13)
            if(!updatedMember) return res.status(404).send({error: 'member updation has an error'})
            res.json({msg: 'User updated sucessfully'})


           
        

         }
         catch(error){
            console.log(14)
             console.log(error)
         }


     }
    
})


module.exports = router;