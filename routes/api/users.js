const uuid = require('uuid')
const express = require('express')
const Joi = require('joi')
const user = require('./models/user')
const adminschema = require('./schemas/TIQadmin')
const userschema = require('./schemas/hubuser') 
const discipleschema = require ('./schemas/disciples')
const parentschema = require('./schemas/parent')
const router = express.Router();





var User 

const user = [


    {
        type:'member',
        firstname:'Mahy',
        lastname: 'Ali',
        birth_date:'23-4-1994',
        bio: 'expert debater ',
        email: 'mali@gmail.com',
        password:'mahy94',
        house:'Pegasus',
        score: 278,
        din:'1-10-2017',
        dor:null,
        clubs:['TIQ']



    },

    {

        type:'supervisor',
        firstname:'Hania',
        lastname: 'Essam',
        birth_date:'26-6-1995',
        bio: 'Logoistics supervisor ',
        email: 'hania@gmail.com',
        password:'hania123',
        house:'neutral',
        score: null,
        din:'1-11-2018',
        dor:null,
        clubs:['TIQ']

    },

    {

    type:'disciple',
    firstname:'Maro',
    lastname: 'Marwan',
    birth_date:'23-6-2000',
    bio: 'young hunter ',
    email: 'maro@yahoo.com',
    password:'marrroo',
    house:'Orion',
    score: 198,
    din:'1-10-2019',
    dor:'1-11-2019',
    clubs:['TIQ']

},

{

    type:'member',
    firstname:'Nada',
    lastname: 'Botros',
    birth_date:'23-9-1998',
    bio: ' Sun Hunter ',
    email: 'nbotros@gmail.com',
    password:'nbtros98',
    house:'Orion',
    score: 341,
    din:'1-11-2018',
    dor:'1-11-2019',
    clubs:['TIQ','MUN']

}

]



router.post('/joi',(req,res)=> 
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
                
                    });
switch(req.body.type)
{
    case(alumni):
            const alumni =Joi.validate(req.body,alumnischema)

            if(alumni.error) return res.status(404).send({error:alumni.error.details[0].message})
            User.push(new user(type,firstname,lastname,birth_date,bio,email,password,house,score,din,dor,clubs))
            return res.json({data:User});






case(member):
            const member =Joi.validate(req.body,memberschema)
            if(member.error) return res.status(404).send({error:member.error.details[0].message})
            User.push(new user(type,firstname,lastname,birth_date,bio,email,password,house,score,din,dor,clubs))
            return res.json({data:User});

   

}
  

router.get('/',(req,res)=>{
    res.send({data:User})
})

router.delete('/:id',(req,res)=>{
    const userid = req.params.id 

    const u = User.find(user => user.id === userid)

    const index = users.indexOf(u)

    User.splice(index,1)

    res.send(User)

})









// Update a user (alumni or members)


// Update a book's title

app.put('/api/users/:id', (req, res) => {

    const userid = req.params.id 

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