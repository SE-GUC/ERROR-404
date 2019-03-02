
const express = require('express');
const router = express.Router();
const Joi = require('joi')
const uuid = require('uuid')
const user = require('../../models/User')
const adminSchema = require('../../schemas/TIQAdmin')
 const userSchema = require('../../schemas/HubUsers') 
 const discipleSchema = require ('../../schemas/Disciples')
 const parentSchema = require('../../schemas/Parent')
 const alumniSchema = require('../../schemas/Alumni')
const memberSchema = require('../../schemas/Member')


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

    },{

    type:'alumni',
    firstname:'Maro',
    lastname: 'Marwan',
    birth_date:'23-6-2000',
    bio: 'young hunter ',
    email: 'maro@student.guc.edu.eg',
    password:'marrroo',
    house:'Orion',
    score: 198,
    din:'1-10-2019',
    dor:'1-11-2019',
    clubs:['TIQ'],
    id:2

},

{

    type:'member',
    firstname:'Nada',
    lastname: 'Botros',
    birth_date:'23-9-1998',
    bio: ' Sun Hunter ',
    email: 'nbotros@student.guc.edu.eg',
    password:'nbtros98',
    house:'Orion',
    score: 341,
    din:'1-11-2018',
    dor:'1-11-2019',
    clubs:['TIQ','MUN'],
    id:3

}
];


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
     
    case('alumni'):
            const alumni =Joi.validate(req.body,alumniSchema)

            if(alumni.error) return res.status(400).send({error:alumni.error.details[0].message})
            newUser=new user(type,firstName,lastName,birthDate,bio,email,password,house,score,din,dor,clubs)
            users.push(newUser)
           // res.send(users)
           return res.send({data:newUser});
          


case('member'):
            const member =Joi.validate(req.body,memberSchema)
            if(member.error) return res.status(400).send({error:member.error.details[0].message})
            newUser=new user(type,firstName,lastName,birthDdate,bio,email,password,house,score,din,dor,clubs)
            users.push(newUser)
           // res.send(users)
           return res.send({data:newUser});


 }                   
 
})               
router.get('/',(req,res)=>{
    res.send({data:users})
})

// Update a user (alumni or members)



router.put('/', (req, res) => {

    const userId = req.body.id 

    const updatedFirstName = req.body.firstName
    const updatedLastName = req.body.lastName
    const updatedBirthDate = req.body.birthdDate
    const updatedClubs = req.body.clubs
    const updatedEmail = req.body.email
    const updatedPassword = req.body.password
    const updatedHouse= req.body.house
    const updatedBio = req.body.bio
    const updatedType = req.body.type
    const updatedDin = req.body.din
    const updatedDor = req.body.dor
    const updatedScore=req.body.score

    const user = users.find(user => user.id === userId)

    user.firstName=updatedFirstName
    user.lastName = updatedLastName
    user.birthDate=updatedBirthDate
    user.clubs=updatedClubs
    user.email=updatedEmail
    user.password=updatedPassword
    user.house=updatedHouse
    user.bio=updatedBio
    user.type=updatedType
    user.din=updatedDin
    user.dor=updatedDor
    user.score=updatedScore

   

    res.send(users)


})

module.exports = router;


