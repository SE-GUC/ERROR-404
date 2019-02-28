const uuid = require('uuid')
const express = require('express')
const Joi = require('joi')
const user = require('../../models/User')
const alumniSchema = require('../../schemas/Alumni')
const memberSchema = require('../../schemas/Member') 
//const discipleschema = require ('./schemas/disciples')
//const parentschema = require('./schemas/parent')
const router = express.Router();






let newUser

let users = [



    {

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
    id:1

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
    id:2

}

]


//to create alumni or member 
router.post('/add',(req,res)=> 
                    {
                        const firstName = req.body.firstName
                        const lastName = req.body.lastName
                        const birthDate = req.body.birthDate
                        const clubs = req.body.clubs
                        const email = req.body.email
                        const password = req.body.password
                        const type = req.body.type
                        const house=req.body.house
                        const score=req.body.score
                        const din = req.body.din
                        const dor = req.body.dor
                        const bio=req.body.bio
                
                    
switch(req.body.type)
{
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
});  


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
