const uuid = require('uuid')
const express = require('express')
const Joi = require('joi')
const user = require('../../models/user')
const alumnischema = require('../../schemas/alumni')
const memberschema = require('../../schemas/member') 
//const discipleschema = require ('./schemas/disciples')
//const parentschema = require('./schemas/parent')
const router = express.Router();






let newuser

let users = [



    {

    type:'disciple',
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



router.post('/add',(req,res)=> 
                    {
                        const firstname = req.body.firstname
                        const lastname = req.body.lastname
                        const birth_date = req.body.birth_date
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
            const alumni =Joi.validate(req.body,alumnischema)

            if(alumni.error) return res.status(400).send({error:alumni.error.details[0].message})
            newuser=new user(type,firstname,lastname,birth_date,bio,email,password,house,score,din,dor,clubs)
            users.push(newuser)
           // res.send(users)
           return res.send({data:newuser});
          


case('member'):
            const member =Joi.validate(req.body,memberschema)
            if(member.error) return res.status(400).send({error:member.error.details[0].message})
            newuser=new user(type,firstname,lastname,birth_date,bio,email,password,house,score,din,dor,clubs)
            users.push(newuser)
           // res.send(users)
           return res.send({data:newuser});


   

}
});  

router.get('/',(req,res)=>{
    res.send({data:users})
})










// Update a user (alumni or members)



router.put('/', (req, res) => {

    const userid = req.body.id 

    const updated_firstname = req.body.firstname
    const updated_lastname = req.body.lastname
    const updated_birthdate = req.body.birthdate
    const updated_clubs = req.body.clubs
    const updated_email = req.body.email
    const updated_password = req.body.password
    const updated_house= req.body.house
    const updated_bio = req.body.bio
    const updated_type = req.body.type
    const updated_din = req.body.din
    const updated_dor = req.body.dor
    const updated_score=req.body.score

    const user = users.find(user => user.id === userid)

    user.firstname=updated_firstname
    user.lastname = updated_lastname
    user.birthdate=updated_birthdate
    user.clubs=updated_clubs
    user.email=updated_email
    user.password=updated_password
    user.house=updated_house
    user.bio=updated_bio
    user.type=updated_type
    user.din=updated_din
    user.dor=updated_dor
    user.score=updated_score

   

    res.send(users)


})



module.exports = router;
