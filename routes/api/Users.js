const express = require('express')
const Joi = require('joi')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const router = express.Router()

//const tokenKey = require('../../config/keys').secretOrKey


const user = require('../../models/User')


const userValidator = require('../../validations/userValidations')
//const adminValidator = require('../../validations/adminValidations')
const alumniValidator = require('../../validations/alumniValidations')
const TIQadminValidator =require('../../validations/tiqAdminValidations')
const hubUserValidator = require('../../validations/hubUserValidations') 
const discipleValidator = require ('../../validations/disciplevalidations')
const parentValidator = require('../../validations/parentValidations')




//create new user (TIQ admin, Hub user, disciples, parent)



router.post('/register', async (req,res) => {
   
  
    const Email =req.body.email
   
    
     const usernew = await User.findOne({email:Email});
    if (usernew) return res.status(400).json({ email: 'Email already exists ,choose another mail...' });
   
    const t =req.body.type
   
    switch(t)
{
  
        case ('TIQadmin'):  
        try 
        {
        
                        const isValidated = TIQadminValidator.TIQadminValidation(req.body)
                        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
                        const { firstName,lastName,birthDate,clubs,email,password,type,house,score,din,dor,bio} = req.body
                        const salt = bcrypt.genSaltSync(10)
                        
                        const hashedPassword = bcrypt.hashSync(password,salt)
                        const newTiqAdmin = new user({
                            type ,
                            firstName ,
                            lastName ,
                            birthDate ,
                            bio,
                            email,
                            password : hashedPassword,
                            clubs ,
                            house ,
                            score,
                            din,
                            dor
                        
                        
                    })
                    
                    await User.create(newTiqAdmin);
                            
                    return res.json({ msg: 'User created successfully', data: newTiqAdmin });
                    }

                        catch(error) 
                        {

                            // We will be handling the error later

                                console.log(error)

                        } 

                        case ('regular'):  
                        try 
                        {
                               
                               const isValidated = hubUserValidator.userValidation(req.body)
                               if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
                               const { firstName,lastName,birthDate,clubs,email,password,type,house,score,din,dor,bio} = req.body
                               const salt = bcrypt.genSaltSync(10)
                               const cryptedPasswrod = bcrypt.hashSync(password,salt)
                               const newUser = new User(
                                   {
                                    type,
                                    firstName,
                                    lastName ,
                                    birthDate ,
                                    bio,
                                    email ,
                                    password : cryptedPasswrod,

                                    house,
                                   score, 
                                    din,
                                    dor,
                                  
                                    clubs 
   
                                   }
                               )
                               await User.create(newUser);
                    
                               return res.json({ msg: 'User created successfully', data: newUser });

                    }

                    catch(error) 
                    {

                            // We will be handling the error later

                                console.log(error)

                    } 

    case ('disciple') : 
                      try 
                        {
                               
                              
                               const isValidated = discipleValidator.registerValidation(req.body)
                               if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
                               const { firstName,lastName,birthDate,clubs,email,password,type,house,score,din,dor,bio} = req.body
                               const salt = bcrypt.genSaltSync(10)
                               const cryptedPasswrod = bcrypt.hashSync(password,salt)
                               const newUser = new User(
                                   {
                                    type,
                                    firstName,
                                    lastName ,
                                    birthDate ,
                                    bio,
                                    email ,
                                    password : cryptedPasswrod,

                                    house,
                                   score, 
                                    din,
                                    dor,
                                  
                                    clubs 
   
                                   }
                               )
                               await User.create(newUser);
                    
                               return res.json({ msg: 'User created successfully', data: newUser });
                
                    }
                    catch(error) 
                    {
                        // We will be handling the error later

                            console.log(error)

                    }  
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
		score:0,
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

    case ('parent') :
                    try 
                    {
                        
                      
                        const isValidated = parentValidator.parentValidation(req.body)
                        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
                        const { firstName,lastName,birthDate,clubs,email,password,type,house,score,din,dor,bio} = req.body
                        const salt = bcrypt.genSaltSync(10)
                        const cryptedPasswrod = bcrypt.hashSync(password,salt)
                        const newUser = new User(
                            {
                                type,
                                    firstName,
                                    lastName ,
                                    birthDate ,
                                    bio,
                                    email ,
                                    password : cryptedPasswrod,

                                    house,
                                   score, 
                                    din,
                                    dor,
                                  
                                    clubs 

                            }
                        )
                        await User.create(newUser);
                    
                        return res.json({ msg: 'User created successfully', data: newUser });

                    }

                    catch(error) 
                    {

                        // We will be handling the error later

                            console.log(error)

                    }              


}
            
    
usernew.catch()

})
//get all users


router.get('/',async (req,res)=>{
    const users = await user.find()
    res.json({data:users})
})

//uppdate scores dynamically 
router.put('/:id/:score',async(req,res)=>
{
 const id = req.params.id
 const addedScore = req.params.score
 const User = await user.findOneAndUpdate({_id:id}, {$inc:{score: addedScore}})

 res.json({msg:'Score updated'})
});


//get user by id 
  router.get('/:id',async (req,res)=>{
    
    const userId =req.params.id
    const users = await user.findById(userId)
    .exec()
    .then(users => {return res.send([users.type,users.firstName,users.lastName,
      users.birthDate,users.bio,users.email,users.password,users.house,users.din
       ,users.dor,users.clubs])})
    .catch(err => {res.send('Cannot find the user ')})
    })


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
       // try{
        const userId =req.params.id;
        const deleteduser = await user.findByIdAndRemove({_id:userId})
       // res.json({msg:'User was deleted successfully', data: deleteduser})
        .exec()
        .then(users => {return res.send([deleteduser.type,deleteduser.firstName,deleteduser.lastName,
        deleteduser.birthDate,deleteduser.bio,deleteduser.email,deleteduser.password,deleteduser.house,deleteduser.din
       ,deleteduser.dor,deleteduser.clubs])})
      .catch(err => {res.send('Cannot find the user ')})
      //  }
        //catch(error){
          //  console.log(error)
       // }
        
    } )

router.put('/deleteNotification/:notification/:id',async(res,req)=>
{
    const notification = req.params.notification
    const id = rq.params.id
    const getUser = await user.findOne({_id:id})
    if(!getUser)return res.status(404).send({error:'user does not exist'})
    const updateUser= await user.findOneAndUpdate({_id:id},{$pull:{notification: notification}})
    res.json({msg: 'Notification deleted'})
})
router.put('/notifyuser/:notification/:id',async(res,req)=>{
const notification = req.params.notification
const id = req.params.id
const getUser = await user.findOne({_id:id})
if(!getUser)return res.status(404).send({error:'user does not exist'})
const updateUser= await user.findOneAndUpdate({_id:id},{$push:{notification: notification}})
res.json({msg: 'Notification sent sucessfully'})
})
// Update a user(alumni or member )
router.put('/update/:id', async (req,res) => {
    // try {
     const userId = req.params.id
     const getuser = await user.findOne({_id:userId})
      if(!getuser) return res.status(404).send({error: 'user does not exist'})
     const t =getuser.type
     switch(t)
     {
        
         case('alumni'):
         try{
            
            const isAlumniValidated = alumniValidator.updateValidation(req.body)
           
            if (isAlumniValidated.error) return res.status(400).send({ error: isAlumniValidated.error.details[0].message })
            
            const updatedAlumni = await getuser.updateOne(req.body)
        
            if(!updatedAlumni) return res.status(404).send({error: 'user updation has erroe'})
            res.json({msg: 'User updated sucessfully'})
           

         }
         catch(error){
            
             console.log(error)
         }


         case('member'):
         try{
           
            const isUserValidated = userValidator.updateValidation(req.body)
     
            if (isUserValidated.error) return res.status(400).send({ error: isUserValidated.error.details[0].message })
           
            const updatedMember = await getuser.updateOne(req.body)
     
            if(!updatedMember) return res.status(404).send({error: 'member updation has an error'})
            res.json({msg: 'User updated sucessfully'})


           
        

         }
         catch(error){
           
             console.log(error)
         }


     }
    
})

module.exports = router;
